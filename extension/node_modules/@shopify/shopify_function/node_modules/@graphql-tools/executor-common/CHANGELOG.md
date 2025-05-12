# @graphql-tools/executor-common

## 0.0.1

### Patch Changes

- [#381](https://github.com/graphql-hive/gateway/pull/381) [`55eb1b4`](https://github.com/graphql-hive/gateway/commit/55eb1b4d14aec7b3e6c7bcf9f596bc01192d022c) Thanks [@ardatan](https://github.com/ardatan)! - This is a bugfix with some internal changes, no user action is needed. This bugfix and improvement is done to improve the stability of some components of the gateway;

  Like HMAC Upstream Signature plugin, different components of the gateway were using different ways of serializing the execution request.
  Some of them were ignoring `variables` if it is empty, some of not, this was causing the signature generation to be different for the same query.
  For example, it was working as expected in Proxy mode, but not working as expected in Federation Gateway mode.

  With this change, now we have a shared helper to serialize the upstream execution request with a memoized `print` function for query AST etc to have a consistent serialization so consistent signature generation for HMAC.

  For example instead of using `print`, you should use `defaultPrintFn` that memoizes `print` operation and also used the string version of it parsed before by Envelop/Yoga.

  ```diff
  -import { print } from 'graphql';
  -const query = print(parsedQuery);
  +import { defaultPrintFn } from '@graphql-tools/executor-common';
  +const query = defaultPrintFn(parsedQuery);
  ```

  Or instead of creating objects from `ExecutionRequest`, use `serializeExecutionRequest` helper.

  ```diff
  -const serializedRequest = {
  -  query: print(executionRequest.document),
  -  variables: executionRequest.variables,
  -  operationName: executionRequest.operationName,
  -  extensions: executionRequest.extensions,
  -};
  +import { serializeExecutionRequest } from '@graphql-tools/executor-common';
  +const serializedRequest = serializeExecutionRequest(executionRequest);
  ```
