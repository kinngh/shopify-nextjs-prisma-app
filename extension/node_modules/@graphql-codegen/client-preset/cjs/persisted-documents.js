"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateDocumentHash = generateDocumentHash;
exports.normalizeAndPrintDocumentNode = normalizeAndPrintDocumentNode;
const tslib_1 = require("tslib");
const documents_1 = require("@graphql-tools/documents");
const crypto = tslib_1.__importStar(require("crypto"));
const graphql_1 = require("graphql");
const CLIENT_DIRECTIVE_NAME = 'client';
const CONNECTION_DIRECTIVE_NAME = 'connection';
/**
 * This function generates a hash from a document node.
 */
function generateDocumentHash(operation, algorithm) {
    if (typeof algorithm === 'function') {
        return algorithm(operation);
    }
    const shasum = crypto.createHash(algorithm);
    shasum.update(operation);
    return shasum.digest('hex');
}
/**
 * Normalizes and prints a document node.
 */
function normalizeAndPrintDocumentNode(documentNode) {
    /**
     * This removes all client specific directives/fields from the document
     * that the server does not know about.
     * In a future version this should be more configurable.
     * If you look at this and want to customize it.
     * Send a PR :)
     */
    const sanitizedDocument = (0, graphql_1.visit)(documentNode, {
        [graphql_1.Kind.FIELD](field) {
            if (field.directives?.some(directive => directive.name.value === CLIENT_DIRECTIVE_NAME)) {
                return null;
            }
        },
        [graphql_1.Kind.FRAGMENT_SPREAD](spread) {
            if (spread.directives?.some(directive => directive.name.value === CLIENT_DIRECTIVE_NAME)) {
                return null;
            }
        },
        [graphql_1.Kind.INLINE_FRAGMENT](fragment) {
            if (fragment.directives?.some(directive => directive.name.value === CLIENT_DIRECTIVE_NAME)) {
                return null;
            }
        },
        [graphql_1.Kind.DIRECTIVE](directive) {
            if (directive.name.value === CONNECTION_DIRECTIVE_NAME) {
                return null;
            }
        },
    });
    return (0, documents_1.printExecutableGraphQLDocument)(sanitizedDocument);
}
