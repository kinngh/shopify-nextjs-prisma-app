import { createHash } from 'crypto';
import { promises } from 'fs';
import { createRequire } from 'module';
import { resolve } from 'path';
import { createNoopProfiler, createProfiler, getCachedDocumentNodeFromSchema, } from '@graphql-codegen/plugin-helpers';
import { cosmiconfig, defaultLoaders } from 'cosmiconfig';
import jiti from 'jiti';
import { print } from 'graphql';
import { env } from 'string-env-interpolation';
import yaml from 'yaml';
import yargs from 'yargs';
import { findAndLoadGraphQLConfig } from './graphql-config.js';
import { defaultDocumentsLoadOptions, defaultSchemaLoadOptions, loadDocuments, loadSchema } from './load.js';
const { lstat } = promises;
export function generateSearchPlaces(moduleName) {
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
            content = env(content);
        }
        if (ext === 'json') {
            return defaultLoaders['.json'](filepath, content);
        }
        if (ext === 'yaml') {
            try {
                const result = yaml.parse(content, { prettyErrors: true, merge: true });
                return result;
            }
            catch (error) {
                error.message = `YAML Error in ${filepath}:\n${error.message}`;
                throw error;
            }
        }
        if (ext === 'js') {
            return defaultLoaders['.js'](filepath, content);
        }
        if (ext === 'ts') {
            const jitiLoader = jiti('', { interopDefault: true });
            return jitiLoader(filepath);
        }
    };
}
export async function loadCodegenConfig({ configFilePath, moduleName, searchPlaces: additionalSearchPlaces, packageProp, loaders: customLoaders, }) {
    configFilePath ||= process.cwd();
    moduleName ||= 'codegen';
    packageProp ||= moduleName;
    const cosmi = cosmiconfig(moduleName, {
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
export async function loadContext(configFilePath) {
    const graphqlConfig = await findAndLoadGraphQLConfig(configFilePath);
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
    return configFile ? resolve(process.cwd(), configFile) : null;
}
export function buildOptions() {
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
export function parseArgv(argv = process.argv) {
    return yargs(argv).options(buildOptions()).parse(argv);
}
export async function createContext(cliFlags = parseArgv(process.argv)) {
    if (cliFlags.require && cliFlags.require.length > 0) {
        const relativeRequire = createRequire(process.cwd());
        await Promise.all(cliFlags.require.map(mod => import(relativeRequire.resolve(mod, {
            paths: [process.cwd()],
        }))));
    }
    const customConfigPath = getCustomConfigPath(cliFlags);
    const context = await loadContext(customConfigPath);
    updateContextWithCliFlags(context, cliFlags);
    return context;
}
export function updateContextWithCliFlags(context, cliFlags) {
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
export class CodegenContext {
    constructor({ config, graphqlConfig, filepath, }) {
        this._checkMode = false;
        this._pluginContext = {};
        this.checkModeStaleFiles = [];
        this._config = config;
        this._graphqlConfig = graphqlConfig;
        this.filepath = this._graphqlConfig ? this._graphqlConfig.filepath : filepath;
        this.cwd = this._graphqlConfig ? this._graphqlConfig.dirpath : process.cwd();
        this.profiler = createNoopProfiler();
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
        this.profiler = createProfiler();
        const now = new Date(); // 2011-10-05T14:48:00.000Z
        const datetime = now.toISOString().split('.')[0]; // 2011-10-05T14:48:00
        const datetimeNormalized = datetime.replace(/-|:/g, ''); // 20111005T144800
        this.profilerOutput = `codegen-${datetimeNormalized}.json`;
    }
    getPluginContext() {
        return this._pluginContext;
    }
    async loadSchema(pointer) {
        const config = this.getConfig(defaultSchemaLoadOptions);
        if (this._graphqlConfig) {
            // TODO: SchemaWithLoader won't work here
            return addHashToSchema(this._graphqlConfig.getProject(this._project).loadSchema(pointer, 'GraphQLSchema', config));
        }
        return addHashToSchema(loadSchema(pointer, config));
    }
    async loadDocuments(pointer) {
        const config = this.getConfig(defaultDocumentsLoadOptions);
        if (this._graphqlConfig) {
            // TODO: pointer won't work here
            return addHashToDocumentFiles(this._graphqlConfig.getProject(this._project).loadDocuments(pointer, config));
        }
        return addHashToDocumentFiles(loadDocuments(pointer, config));
    }
}
export function ensureContext(input) {
    return input instanceof CodegenContext ? input : new CodegenContext({ config: input });
}
function hashContent(content, encoding = 'hex') {
    return createHash('sha256').update(content).digest(encoding);
}
function hashSchema(schema) {
    return hashContent(print(getCachedDocumentNodeFromSchema(schema)));
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
        return hashContent(print(doc.document));
    }
    return null;
}
function addHashToDocumentFiles(documentFilesPromise) {
    return documentFilesPromise.then(documentFiles => documentFiles.map(doc => {
        doc.hash = hashDocument(doc);
        return doc;
    }));
}
export function shouldEmitLegacyCommonJSImports(config) {
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
