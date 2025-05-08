import { Types } from '@graphql-codegen/plugin-helpers';
import { CodegenContext } from './config.js';
export declare function executeCodegen(input: CodegenContext | Types.Config): Promise<Types.FileOutput[]>;
