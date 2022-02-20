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
npx dbzar anon-col mask postgresql://example:example@localhost test users firstName in PostgresSQL
// { "firstName": "John" } => { "firstName": "****" }
```

2. Scramble the `firstName` column in the `users` table of the `test` database in MongoDB.

```
// mongo
npx dbzar anon-col scramble mongodb://example:example@localhost test users firstName
// { "firstName": "John" } => { "firstName": "nhJo" }
```

### `anon-db`

Anonymize entire database.

```
Usage: dbzar anon-db [options] [uri]
```

1. Create Configuration file (see [Configuration](#-configuration))

2. Run the anonymizer

```
npx dbzar anon-db mongodb://example:example@localhost
```

#### Demo

<iframe width="560" height="315" src="https://www.youtube.com/embed/zdowhmstYgY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
