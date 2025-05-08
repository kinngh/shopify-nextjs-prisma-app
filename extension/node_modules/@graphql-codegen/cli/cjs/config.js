"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodegenContext = void 0;
exports.generateSearchPlaces = generateSearchPlaces;
exports.loadCodegenConfig = loadCodegenConfig;
exports.loadContext = loadContext;
exports.buildOptions = buildOptions;
exports.parseArgv = parseArgv;
exports.createContext = createContext;
exports.updateContextWithCliFlags = updateContextWithCliFlags;
exports.ensureContext = ensureContext;
exports.shouldEmitLegacyCommonJSImports = shouldEmitLegacyCommonJSImports;
const tslib_1 = require("tslib");
const crypto_1 = require("crypto");
const fs_1 = require("fs");
const module_1 = require("module");
const path_1 = require("path");
const plugin_helpers_1 = require("@graphql-codegen/plugin-helpers");
const cosmiconfig_1 = require("cosmiconfig");
const jiti_1 = tslib_1.__importDefault(require("jiti"));
const graphql_1 = require("graphql");
const string_env_interpolation_1 = require("string-env-interpolation");
const yaml_1 = tslib_1.__importDefault(require("yaml"));
const yargs_1 = tslib_1.__importDefault(require("yargs"));
const graphql_config_js_1 = require("./graphql-config.js");
const load_js_1 = require("./load.js");
const { lstat } = fs_1.promises;
function generateSearchPlaces(moduleName) {
    const extensions = ['json', 'yaml', 'yml', 'js', 'ts', 'config.js'];
    // gives codegen.json...
    const regular = extensions.map(ext => `${moduleName}.${ext}`);
    // gives .codegenrc.json... but no .codegenrc.config.js
    const dot = extensions.filter(ext => ext !== 'config.js').map(ext => `.${moduleName}rc.${ext}`);
    return [...regular.concat(dot), 'package.json'];
}
function customLoader(ext) {
    return async function loader(filepath, content) {
        if (typeof process !== 'undefined' && 'env' in process) {
            content = (0, string_env_interpolation_1.env)(content);
        }
        if (ext === 'json') {
            return cosmiconfig_1.defaultLoaders['.json'](filepath, content);
        }
        if (ext === 'yaml') {
            try {
                const result = yaml_1.default.parse(content, { prettyErrors: true, merge: true });
                return result;
            }
            catch (error) {
                error.message = `YAML Error in ${filepath}:\n${error.message}`;
                throw error;
            }
        }
        if (ext === 'js') {
            return cosmiconfig_1.defaultLoaders['.js'](filepath, content);
        }
        if (ext === 'ts') {
            const jitiLoader = (0, jiti_1.default)('', { interopDefault: true });
            return jitiLoader(filepath);
        }
    };
}
async function loadCodegenConfig({ configFilePath, moduleName, searchPlaces: additionalSearchPlaces, packageProp, loaders: customLoaders, }) {
    configFilePath ||= process.cwd();
    moduleName ||= 'codegen';
    packageProp ||= moduleName;
    const cosmi = (0, cosmiconfig_1.cosmiconfig)(moduleName, {
        searchPlaces: generateSearchPlaces(moduleName).concat(additionalSearchPlaces || []),
        packageProp,
        loaders: {
            '.json': customLoader('json'),
            '.yaml': customLoader('yaml'),
            '.yml': customLoader('yaml'),
            '.js': customLoader('js'),
            '.ts': customLoader('ts'),
            '.mts': customLoader('ts'),
            '.cts': customLoader('ts'),
            noExt: customLoader('yaml'),
            ...customLoaders,
        },
    });
    const pathStats = await lstat(configFilePath);
    return pathStats.isDirectory() ? cosmi.search(configFilePath) : cosmi.load(configFilePath);
}
async function loadContext(configFilePath) {
    const graphqlConfig = await (0, graphql_config_js_1.findAndLoadGraphQLConfig)(configFilePath);
    if (graphqlConfig) {
        return new CodegenContext({ graphqlConfig });
    }
    const result = await loadCodegenConfig({ configFilePath });
    if (!result) {
        if (configFilePath) {
            throw new Error(`
        Config ${configFilePath} does not exist.

          $ graphql-codegen --config ${configFilePath}

        Please make sure the --config points to a correct file.
      `);
        }
        throw new Error(`Unable to find Codegen config file! \n
        Please make sure that you have a configuration file under the current directory!
      `);
    }
    if (result.isEmpty) {
        throw new Error(`Found Codegen config file but it was empty! \n
        Please make sure that you have a valid configuration file under the current directory!
      `);
    }
    return new CodegenContext({
        filepath: result.filepath,
        config: result.config,
    });
}
function getCustomConfigPath(cliFlags) {
    const configFile = cliFlags.config;
    return configFile ? (0, path_1.resolve)(process.cwd(), configFile) : null;
}
function buildOptions() {
    return {
        c: {
            alias: 'config',
            type: 'string',
            describe: 'Path to GraphQL codegen YAML config file, defaults to "codegen.yml" on the current directory',
        },
        w: {
            alias: 'watch',
            describe: 'Watch for changes and execute generation automatically. You can also specify a glob expression for custom watch list.',
            coerce(watch) {
                if (watch === 'false') {
                    return false;
                }
                if (typeof watch === 'string' || Array.isArray(watch)) {
                    return watch;
                }
                return !!watch;
            },
        },
        r: {
            alias: 'require',
            describe: 'Loads specific require.extensions before running the codegen and reading the configuration',
            type: 'array',
            default: [],
        },
        o: {
            alias: 'overwrite',
            describe: 'Overwrites existing files',
            type: 'boolean',
        },
        s: {
            alias: 'silent',
            describe: 'Suppresses printing errors',
            type: 'boolean',
        },
        e: {
            alias: 'errors-only',
            describe: 'Only print errors',
            type: 'boolean',
        },
        profile: {
            describe: 'Use profiler to measure performance',
            type: 'boolean',
        },
        p: {
            alias: 'project',
            describe: 'Name of a project in GraphQL Config',
            type: 'string',
        },
        v: {
            alias: 'verbose',
            describe: 'output more detailed information about performed tasks',
            type: 'boolean',
            default: false,
        },
        d: {
            alias: 'debug',
            describe: 'Print debug logs to stdout',
            type: 'boolean',
            default: false,
        },
    };
}
function parseArgv(argv = process.argv) {
    return (0, yargs_1.default)(argv).options(buildOptions()).parse(argv);
}
async function createContext(cliFlags = parseArgv(process.argv)) {
    if (cliFlags.require && cliFlags.require.length > 0) {
        const relativeRequire = (0, module_1.createRequire)(process.cwd());
        await Promise.all(cliFlags.require.map(mod => Promise.resolve(`${relativeRequire.resolve(mod, {
            paths: [process.cwd()],
        })}`).then(s => tslib_1.__importStar(require(s)))));
    }
    const customConfigPath = getCustomConfigPath(cliFlags);
    const context = await loadContext(customConfigPath);
    updateContextWithCliFlags(context, cliFlags);
    return context;
}
function updateContextWithCliFlags(context, cliFlags) {
    const config = {
        configFilePath: context.filepath,
    };
    if (cliFlags.watch !== undefined) {
        config.watch = cliFlags.watch;
    }
    if (cliFlags.overwrite === true) {
        config.overwrite = cliFlags.overwrite;
    }
    if (cliFlags.silent === true) {
        config.silent = cliFlags.silent;
    }
    if (cliFlags.verbose === true || process.env.VERBOSE) {
        config.verbose = true;
    }
    if (cliFlags.debug === true || process.env.DEBUG) {
        config.debug = true;
    }
    if (cliFlags.errorsOnly === true) {
        config.errorsOnly = cliFlags.errorsOnly;
    }
    if (cliFlags['ignore-no-documents'] !== undefined) {
        // for some reason parsed value is `'false'` string so this ensure it always is a boolean.
        config.ignoreNoDocuments = cliFlags['ignore-no-documents'] === true;
    }
    if (cliFlags['emit-legacy-common-js-imports'] !== undefined) {
        // for some reason parsed value is `'false'` string so this ensure it always is a boolean.
        config.emitLegacyCommonJSImports = cliFlags['emit-legacy-common-js-imports'] === true;
    }
    if (cliFlags.project) {
        context.useProject(cliFlags.project);
    }
    if (cliFlags.profile === true) {
        context.useProfiler();
    }
    if (cliFlags.check === true) {
        context.enableCheckMode();
    }
    context.updateConfig(config);
}
class CodegenContext {
    constructor({ config, graphqlConfig, filepath, }) {
        this._checkMode = false;
        this._pluginContext = {};
        this.checkModeStaleFiles = [];
        this._config = config;
        this._graphqlConfig = graphqlConfig;
        this.filepath = this._graphqlConfig ? this._graphqlConfig.filepath : filepath;
        this.cwd = this._graphqlConfig ? this._graphqlConfig.dirpath : process.cwd();
        this.profiler = (0, plugin_helpers_1.createNoopProfiler)();
    }
    useProject(name) {
        this._project = name;
    }
    getConfig(extraConfig) {
        if (!this.config) {
            if (this._graphqlConfig) {
                const project = this._graphqlConfig.getProject(this._project);
                this.config = {
                    ...project.extension('codegen'),
                    schema: project.schema,
                    documents: project.documents,
                    pluginContext: this._pluginContext,
                };
            }
            else {
                this.config = { ...this._config, pluginContext: this._pluginContext };
            }
        }
        return {
            ...extraConfig,
            ...this.config,
        };
    }
    updateConfig(config) {
        this.config = {
            ...this.getConfig(),
            ...config,
        };
    }
    enableCheckMode() {
        this._checkMode = true;
    }
    get checkMode() {
        return this._checkMode;
    }
    useProfiler() {
        this.profiler = (0, plugin_helpers_1.createProfiler)();
        const now = new Date(); // 2011-10-05T14:48:00.000Z
        const datetime = now.toISOString().split('.')[0]; // 2011-10-05T14:48:00
        const datetimeNormalized = datetime.replace(/-|:/g, ''); // 20111005T144800
        this.profilerOutput = `codegen-${datetimeNormalized}.json`;
    }
    getPluginContext() {
        return this._pluginContext;
    }
    async loadSchema(pointer) {
        const config = this.getConfig(load_js_1.defaultSchemaLoadOptions);
        if (this._graphqlConfig) {
            // TODO: SchemaWithLoader won't work here
            return addHashToSchema(this._graphqlConfig.getProject(this._project).loadSchema(pointer, 'GraphQLSchema', config));
        }
        return addHashToSchema((0, load_js_1.loadSchema)(pointer, config));
    }
    async loadDocuments(pointer) {
        const config = this.getConfig(load_js_1.defaultDocumentsLoadOptions);
        if (this._graphqlConfig) {
            // TODO: pointer won't work here
            return addHashToDocumentFiles(this._graphqlConfig.getProject(this._project).loadDocuments(pointer, config));
        }
        return addHashToDocumentFiles((0, load_js_1.loadDocuments)(pointer, config));
    }
}
exports.CodegenContext = CodegenContext;
function ensureContext(input) {
    return input instanceof CodegenContext ? input : new CodegenContext({ config: input });
}
function hashContent(content, encoding = 'hex') {
    return (0, crypto_1.createHash)('sha256').update(content).digest(encoding);
}
function hashSchema(schema) {
    return hashContent((0, graphql_1.print)((0, plugin_helpers_1.getCachedDocumentNodeFromSchema)(schema)));
}
function addHashToSchema(schemaPromise) {
    return schemaPromise.then(schema => {
        // It's consumed later on. The general purpose is to use it for caching.
        if (!schema.extensions) {
            schema.extensions = {};
        }
        schema.extensions['hash'] = hashSchema(schema);
        return schema;
    });
}
function hashDocument(doc) {
    if (doc.rawSDL) {
        return hashContent(doc.rawSDL);
    }
    if (doc.document) {
        return hashContent((0, graphql_1.print)(doc.document));
    }
    return null;
}
function addHashToDocumentFiles(documentFilesPromise) {
    return documentFilesPromise.then(documentFiles => documentFiles.map(doc => {
        doc.hash = hashDocument(doc);
        return doc;
    }));
}
function shouldEmitLegacyCommonJSImports(config) {
    const globalValue = config.emitLegacyCommonJSImports === undefined ? true : !!config.emitLegacyCommonJSImports;
    // const outputConfig = config.generates[outputPath];
    // if (!outputConfig) {
    //   debugLog(`Couldn't find a config of ${outputPath}`);
    //   return globalValue;
    // }
    // if (isConfiguredOutput(outputConfig) && typeof outputConfig.emitLegacyCommonJSImports === 'boolean') {
    //   return outputConfig.emitLegacyCommonJSImports;
    // }
    return globalValue;
}
