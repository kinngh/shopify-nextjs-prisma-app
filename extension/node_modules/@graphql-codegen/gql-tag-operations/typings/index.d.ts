import { PluginFunction } from '@graphql-codegen/plugin-helpers';
import { DocumentMode } from '@graphql-codegen/visitor-plugin-common';
import { Source } from '@graphql-tools/utils';
import { FragmentDefinitionNode, OperationDefinitionNode } from 'graphql';
export type OperationOrFragment = {
    initialName: string;
    definition: OperationDefinitionNode | FragmentDefinitionNode;
};
export type SourceWithOperations = {
    source: Source;
    operations: Array<OperationOrFragment>;
};
export declare const plugin: PluginFunction<{
    sourcesWithOperations: Array<SourceWithOperations>;
    useTypeImports?: boolean;
    augmentedModuleName?: string;
    gqlTagName?: string;
    emitLegacyCommonJSImports?: boolean;
    documentMode?: DocumentMode;
}>;
