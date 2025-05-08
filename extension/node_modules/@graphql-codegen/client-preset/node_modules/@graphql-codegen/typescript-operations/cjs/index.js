"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeScriptDocumentsVisitor = exports.plugin = void 0;
const plugin_helpers_1 = require("@graphql-codegen/plugin-helpers");
const visitor_plugin_common_1 = require("@graphql-codegen/visitor-plugin-common");
const graphql_1 = require("graphql");
const visitor_js_1 = require("./visitor.js");
Object.defineProperty(exports, "TypeScriptDocumentsVisitor", { enumerable: true, get: function () { return visitor_js_1.TypeScriptDocumentsVisitor; } });
const plugin = async (inputSchema, rawDocuments, config) => {
    const schema = config.nullability?.errorHandlingClient ? await semanticToStrict(inputSchema) : inputSchema;
    const documents = config.flattenGeneratedTypes
        ? (0, visitor_plugin_common_1.optimizeOperations)(schema, rawDocuments, {
            includeFragments: config.flattenGeneratedTypesIncludeFragments,
        })
        : rawDocuments;
    const allAst = (0, graphql_1.concatAST)(documents.map(v => v.document));
    const allFragments = [
        ...allAst.definitions.filter(d => d.kind === graphql_1.Kind.FRAGMENT_DEFINITION).map(fragmentDef => ({
            node: fragmentDef,
            name: fragmentDef.name.value,
            onType: fragmentDef.typeCondition.name.value,
            isExternal: false,
        })),
        ...(config.externalFragments || []),
    ];
    const visitor = new visitor_js_1.TypeScriptDocumentsVisitor(schema, config, allFragments);
    const visitorResult = (0, plugin_helpers_1.oldVisit)(allAst, {
        leave: visitor,
    });
    let content = visitorResult.definitions.join('\n');
    if (config.addOperationExport) {
        const exportConsts = [];
        for (const d of allAst.definitions) {
            if ('name' in d) {
                exportConsts.push(`export declare const ${d.name.value}: import("graphql").DocumentNode;`);
            }
        }
        content = visitorResult.definitions.concat(exportConsts).join('\n');
    }
    if (config.globalNamespace) {
        content = `
    declare global {
      ${content}
    }`;
    }
    return {
        prepend: [...visitor.getImports(), ...visitor.getGlobalDeclarations(visitor.config.noExport)],
        content,
    };
};
exports.plugin = plugin;
const semanticToStrict = async (schema) => {
    try {
        const sock = await Promise.resolve().then(() => __importStar(require('graphql-sock')));
        return sock.semanticToStrict(schema);
    }
    catch {
        throw new Error("To use the `nullability.errorHandlingClient` option, you must install the 'graphql-sock' package.");
    }
};
