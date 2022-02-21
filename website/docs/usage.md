---
sidebar_position: 3
sidebar_label: 👻 Usage
---

# Usage

### `anon-col`

Anonymize a single column in a table.

(⚠ Changes whichever db provided so use with caution)

```bash
Usage: dbzar anon-col <provider> [options] <uri> <db> <table> <column>
```

For a list of providers: [Providers](/docs/providers).

#### Examples

1. Mask the `firstName` column in the `users` table of the `test` database.

```
dbzar anon-col mask postgresql://example:example@localhost test users firstName in PostgresSQL
// { "firstName": "John" } => { "firstName": "****" }
```

2. Scramble the `firstName` column in the `users` table of the `test` database in MongoDB.

```
// mongo
dbzar anon-col scramble mongodb://example:example@localhost test users firstName
// { "firstName": "John" } => { "firstName": "nhJo" }
```

### `anon-db`

```
Usage: dbzar anon-db [options] [uri]
```

1. Create Configuration file (see [Configuration](https://nitzano.github.io/dbzar/docs/config))

Example:

```yaml
// .dbzarrc
dbName: db1
tables:
  - name: users
    columns:
      - name: firstName
        provider: mask
      - name: lastName
        provider:
          type: mask
          options:
            character: "#"
  - name: products
    columns:
      - name: name
        provider:
          type: fake
          options:
            fakeValue: animal
```

2. Running the anonymizer

```
dbzar anon-db mongodb://example:example@localhost
```

Will:

1. `mask` the `firstName` column in `users` table (replacing letters with default `*`).
2. `mask` the `lastName` column in `users` table (replacing letters with `#`).
3. `fake` the `name` column in `products` table (replacing it with a random animal name, for example: "Fish").

#### Demo

<iframe width="560" height="315" src="https://www.youtube.com/embed/zdowhmstYgY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
