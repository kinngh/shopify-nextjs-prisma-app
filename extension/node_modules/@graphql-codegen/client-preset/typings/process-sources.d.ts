import { SourceWithOperations } from '@graphql-codegen/gql-tag-operations';
import { Source } from '@graphql-tools/utils';
import { FragmentDefinitionNode, OperationDefinitionNode } from 'graphql';
export type BuildNameFunction = (type: OperationDefinitionNode | FragmentDefinitionNode) => string;
export declare function processSources(sources: Array<Source>, buildName: BuildNameFunction): SourceWithOperations[];
