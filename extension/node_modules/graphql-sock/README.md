# GraphQL SOCK

SOCK: **Semantic Output Conversion Kit** - converting semantic-nullability
schemas into traditional schemas to support existing tooling (e.g. codegen).

## What is it?

**Takes as input a GraphQL SDL and outputs a derived SDL wherein all
semantic-non-null type modifiers have either been removed (semantic to nullable)
or have been replaced with strict (traditional) non-null modifiers (semantic to
strict).**

### Semantic nullability

In the latest proposals around semantic nullability, we introduce a new
"Semantic Non Null" type modifier that means that the value is "null only on
error" (i.e. it will never be `null` unless an error has occurred). However, not
all tools support this yet, so this library contains tools to convert a schema
or SDL that supports semantic nullability into a more traditional one, to be
used for code generation and other such functionality.

Which command you use will depend on your setup; if you're using a client that
prevents you from reading error nulls (e.g. by throwing when you read from an
errored field like [`graphql-toe`](https://github.com/graphile/graphql-toe)
does, or otherwise) then you'll want `semantic-to-strict` to really capitalize
on the benefits of semantic nullability.

If you just want to use a semantic nullability SDL with traditional tools and
clients that don't yet understand semantic nullability, then
`semantic-to-nullable` will just strip out the semantic-non-null types for you.

This library supports both the `@semanticNonNull` directive (which should work
universally, but is likely to be a temporary placeholder), and the
`GraphQLSemanticNonNull` wrapper type (if your version of GraphQL.js supports
it, otherwise it will degrade gracefully to only supporting the directive).

### `@semanticNonNull` directive

For the directive, the two conversions work like this:

| Mode                 | Input type                              | Output type |
| -------------------- | --------------------------------------- | ----------- |
| semantic-to-nullable | `Int @semanticNonNull`                  | `Int`       |
| semantic-to-strict   | `Int @semanticNonNull`                  | `Int!`      |
| semantic-to-nullable | `[Int] @semanticNonNull(levels: [1])`   | `[Int]`     |
| semantic-to-strict   | `[Int] @semanticNonNull(levels: [1])`   | `[Int!]`    |
| semantic-to-nullable | `[Int] @semanticNonNull(levels: [0,1])` | `[Int]`     |
| semantic-to-strict   | `[Int] @semanticNonNull(levels: [0,1])` | `[Int!]!`   |

> [!NOTE]
>
> An existing strictly non-nullable type (`Int!`) will remain unchanged whether
> or not `@semanticNonNull` applies to that level.

### `GraphQLSemanticNonNull` wrapper type

How the `GraphQLSemanticNonNull` type is represented syntactically in SDL is yet
to be determined by the working group, but this library doesn't care about that
since it uses the schema directly. For the sake of this README we'll use the
originally proposed
[asterisk syntax](https://github.com/graphql/graphql-spec/pull/1065).

The above examples using asterisk syntax would be:

| Mode                 | Input type | Output type |
| -------------------- | ---------- | ----------- |
| semantic-to-nullable | `Int*`     | `Int`       |
| semantic-to-strict   | `Int*`     | `Int!`      |
| semantic-to-nullable | `[Int*]`   | `[Int]`     |
| semantic-to-strict   | `[Int*]`   | `[Int!]`    |
| semantic-to-nullable | `[Int*]*`  | `[Int]`     |
| semantic-to-strict   | `[Int*]*`  | `[Int!]!`   |

## Installation

You must install both `graphql-sock` and `graphql`; pick the line that relates
to your package manager:

```bash
npm install --save graphql-sock graphql
yarn add graphql-sock graphql
pnpm install --save graphql-sock graphql
```

> [!NOTE]
>
> To support the `*` syntax, install `graphql@canary-pr-4192`

## Usage

Consider this "input schema" which uses both the `@semanticNonNull` directive
and the `*` syntax (for syntax support, you will need to be running a
[compatible version of graphql.js](https://github.com/graphql/graphql-js/pull/4192#issuecomment-2351103549)):

### Input schema

```graphql
directive @semanticNonNull(levels: [Int!]! = [0]) on FIELD_DEFINITION

type Query {
  someList: [Int] @semanticNonNull(levels: [0, 1])
  someOtherList: [String*]*
}
```

### Semantic to nullable

**If a value is "null only on error" then it _can_ be null.**

This conversion strips all semantic-non-null type wrappers from the SDL, making
a schema that appears as it traditionally would. This means that you won't reap
any of the benefits of semantic nullability, but you can support existing tools
and clients without needing to update their code.

#### Output schema

The input schema would have all the semantic non-null types removed:

```graphql
type Query {
  someList: [Int]
  someOtherList: [String]
}
```

#### CLI

From the CLI, use the `semantic-to-nullable` command to convert an SDL with
semantic nullability into an SDL without semantic nullability, where all
semantic non-null positions have been removed:

```
semantic-to-nullable -i input.graphql -o output.graphql
```

#### Library

Use the `semanticToNullable` export to create a copy of a schema with all the
semantic non-null types removed:

```ts
import { semanticToNullable } from "graphql-sock";
import { sourceSchema as inputSchema } from "./my-schema";

export const outputSchema = semanticToNullable(inputSchema);
```

### Semantic to strict

**Error handling clients prevent users from reading "error-nulls" (e.g. by
throwing an error), so semantically non-nullable positions are non-nullable for
these clients.**

If you're using "Throw On Error" (e.g. via
[graphql-toe](https://github.com/graphile/graphql-toe)) or a similar technique
then when you read from an errored field an error will be thrown, preventing you
from reading the underlying `null`.

**Think of semantically non-null fields as "null only on error;" if you throw on
errors, then they're never null!**

As such, this position becomes equivalent to a traditional non-null for you, so
this conversion converts all semantic-non-null type wrappers into traditional
(strict) non-null wrappers. Your type generators can therefore generate fewer
nullables, and your frontend engineers have to do fewer null checks and are
therefore happier.

#### Output schema

The input schema would become:

```graphql
type Query {
  someList: [Int!]!
  someOtherList: [String!]!
}
```

#### CLI

From the CLI, use the `semantic-to-strict` command to convert an SDL with
semantic nullability into an SDL without semantic nullability, where all
semantic non-null positions have become strictly non-null:

```
semantic-to-strict -i input.graphql -o output.graphql
```

#### Library

Use the `semanticToStrict` export to create a copy of a schema with all the
semantic non-null types replaced with strict (traditional) non-null types:

```ts
import { semanticToStrict } from "graphql-sock";
import { schema as sourceSchema } from "./my-schema";

export const schema = semanticToStrict(sourceSchema);
```

## Advanced usage

If you just want to convert a single `GraphQLFieldConfig` you can use the
`convertFieldConfig` method, passing the field config and `true` to convert
semantic non-null positions to strict non-nulls, or `false` if you want to
convert to nullable:

```ts
const strictFieldConfig = convertFieldConfig(fieldConfig, true);
const nullableFieldConfig = convertFieldConfig(fieldConfig, false);
```

> [!NOTE]
>
> This method assumes that the fieldConfig has come from parsing an SDL string,
> and thus has an `astNode` that includes a `@semanticNonNull` directive.
