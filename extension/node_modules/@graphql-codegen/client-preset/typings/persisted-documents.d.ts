import { type DocumentNode } from 'graphql';
/**
 * This function generates a hash from a document node.
 */
export declare function generateDocumentHash(operation: string, algorithm: 'sha1' | 'sha256' | (string & {}) | ((operation: string) => string)): string;
/**
 * Normalizes and prints a document node.
 */
export declare function normalizeAndPrintDocumentNode(documentNode: DocumentNode): string;
