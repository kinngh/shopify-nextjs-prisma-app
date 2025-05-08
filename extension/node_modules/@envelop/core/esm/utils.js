import { fakePromise } from '@whatwg-node/promise-helpers';
export const envelopIsIntrospectionSymbol = Symbol('ENVELOP_IS_INTROSPECTION');
export function isIntrospectionOperationString(operation) {
    return (typeof operation === 'string' ? operation : operation.body).indexOf('__schema') !== -1;
}
function getSubscribeArgs(args) {
    return args.length === 1
        ? args[0]
        : {
            schema: args[0],
            document: args[1],
            rootValue: args[2],
            contextValue: args[3],
            variableValues: args[4],
            operationName: args[5],
            fieldResolver: args[6],
            subscribeFieldResolver: args[7],
        };
}
/**
 * Utility function for making a subscribe function that handles polymorphic arguments.
 */
export const makeSubscribe = (subscribeFn) => ((...polyArgs) => subscribeFn(getSubscribeArgs(polyArgs)));
export { mapAsyncIterator } from '@whatwg-node/promise-helpers';
function getExecuteArgs(args) {
    return args.length === 1
        ? args[0]
        : {
            schema: args[0],
            document: args[1],
            rootValue: args[2],
            contextValue: args[3],
            variableValues: args[4],
            operationName: args[5],
            fieldResolver: args[6],
            typeResolver: args[7],
        };
}
/**
 * Utility function for making a execute function that handles polymorphic arguments.
 */
export const makeExecute = (executeFn) => ((...polyArgs) => executeFn(getExecuteArgs(polyArgs)));
/**
 * Returns true if the provided object implements the AsyncIterator protocol via
 * implementing a `Symbol.asyncIterator` method.
 *
 * Source: https://github.com/graphql/graphql-js/blob/main/src/jsutils/isAsyncIterable.ts
 */
export function isAsyncIterable(maybeAsyncIterable) {
    return (typeof maybeAsyncIterable === 'object' &&
        maybeAsyncIterable != null &&
        typeof maybeAsyncIterable[Symbol.asyncIterator] === 'function');
}
/**
 * A utility function for handling `onExecuteDone` hook result, for simplifying the handling of AsyncIterable returned from `execute`.
 *
 * @param payload The payload send to `onExecuteDone` hook function
 * @param fn The handler to be executed on each result
 * @returns a subscription for streamed results, or undefined in case of an non-async
 */
export function handleStreamOrSingleExecutionResult(payload, fn) {
    if (isAsyncIterable(payload.result)) {
        return { onNext: fn };
    }
    fn({
        args: payload.args,
        result: payload.result,
        setResult: payload.setResult,
    });
    return undefined;
}
export function finalAsyncIterator(source, onFinal) {
    const iterator = source[Symbol.asyncIterator]();
    let isDone = false;
    const stream = {
        [Symbol.asyncIterator]() {
            return stream;
        },
        next() {
            return iterator.next().then(result => {
                if (result.done && isDone === false) {
                    isDone = true;
                    onFinal();
                }
                return result;
            });
        },
        return() {
            const promise = iterator.return?.();
            if (isDone === false) {
                isDone = true;
                onFinal();
            }
            return promise || fakePromise({ done: true, value: undefined });
        },
        throw(error) {
            const promise = iterator.throw?.();
            if (promise) {
                return promise;
            }
            // if the source has no throw method we just re-throw error
            // usually throw is not called anyways
            throw error;
        },
    };
    return stream;
}
export function errorAsyncIterator(source, onError) {
    const iterator = source[Symbol.asyncIterator]();
    const stream = {
        [Symbol.asyncIterator]() {
            return stream;
        },
        next() {
            return iterator.next().catch(error => {
                onError(error);
                return { done: true, value: undefined };
            });
        },
        return() {
            const promise = iterator.return?.();
            return promise || fakePromise({ done: true, value: undefined });
        },
        throw(error) {
            const promise = iterator.throw?.();
            if (promise) {
                return promise;
            }
            // if the source has no throw method we just re-throw error
            // usually throw is not called anyways
            throw error;
        },
    };
    return stream;
}
export { mapMaybePromise, isPromise } from '@whatwg-node/promise-helpers';
