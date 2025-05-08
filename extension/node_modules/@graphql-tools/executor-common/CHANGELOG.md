# @graphql-tools/executor-common

## 0.0.4

### Patch Changes

- [#706](https://github.com/graphql-hive/gateway/pull/706) [`e393337`](https://github.com/graphql-hive/gateway/commit/e393337ecb40beffb79748b19b5aa8f2fd9197b7) Thanks [@EmrysMyrddin](https://github.com/EmrysMyrddin)! - dependencies updates:

  - Updated dependency [`@envelop/core@^5.2.3` ↗︎](https://www.npmjs.com/package/@envelop/core/v/5.2.3) (from `^5.1.0`, in `dependencies`)

## 0.0.3

### Patch Changes

- [#696](https://github.com/graphql-hive/gateway/pull/696) [`a289faa`](https://github.com/graphql-hive/gateway/commit/a289faae1469eb46f1458be341d21909fe5f8f8f) Thanks [@ardatan](https://github.com/ardatan)! - dependencies updates:

  - Updated dependency [`@envelop/core@^5.1.0` ↗︎](https://www.npmjs.com/package/@envelop/core/v/5.1.0) (from `^5.0.2`, in `dependencies`)

## 0.0.2

### Patch Changes

- [#620](https://github.com/graphql-hive/gateway/pull/620) [`d72209a`](https://github.com/graphql-hive/gateway/commit/d72209ad82ec53689f93ce5d81bfa52493919ad9) Thanks [@renovate](https://github.com/apps/renovate)! - dependencies updates:

  - Updated dependency [`@graphql-tools/utils@^10.8.1` ↗︎](https://www.npmjs.com/package/@graphql-tools/utils/v/10.8.1) (from `^10.7.0`, in `dependencies`)

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
