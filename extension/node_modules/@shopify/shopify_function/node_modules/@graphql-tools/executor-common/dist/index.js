import { getDocumentString } from '@envelop/core';
import { memoize1 } from '@graphql-tools/utils';
import { stripIgnoredCharacters, print } from 'graphql';

const defaultPrintFn = memoize1(function defaultPrintFn2(document) {
  return stripIgnoredCharacters(getDocumentString(document, print));
});
function serializeExecutionRequest({
  executionRequest,
  excludeQuery,
  printFn = defaultPrintFn
}) {
  return {
    query: excludeQuery ? void 0 : printFn(executionRequest.document),
    variables: (executionRequest.variables && Object.keys(executionRequest.variables).length) > 0 ? executionRequest.variables : void 0,
    operationName: executionRequest.operationName ? executionRequest.operationName : void 0,
    extensions: executionRequest.extensions && Object.keys(executionRequest.extensions).length > 0 ? executionRequest.extensions : void 0
  };
}

export { defaultPrintFn, serializeExecutionRequest };
