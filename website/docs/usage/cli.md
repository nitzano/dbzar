---
sidebar_position: 1
sidebar_label: 💻 CLI
---

# CLI

### `anon-col`

Anonymize a single column.

(⚠ Changes whichever db provided so use with caution)

```bash
Usage: dbzar anon-col [options] [command]

Anonymize a single column in a table

Options:
  -skip --skip-confirm  skip confirmation
  -u --uri              Connection string
  -db --database        Database name
  -t --table            Table name
  -c --column           Column name
  -h, --help            display help for command

Commands:
  scramble [options]    scramble a single column
  fake [options]        fake a single column
  mask [options]        mask a single column
  help [command]        display help for command
```

For a list of providers: [Providers](/docs/providers).

#### Examples

1. Mask the `firstName` column in the `users` table of the `test` database in MongoDB.

```
dbzar anon-col mask -u postgresql://example:example@localhost -db test -t users -c firstName
// { "firstName": "John" } => { "firstName": "****" }
```

2. Scramble the `firstName` column in the `users` table of the `test` database in MongoDB.

```
// mongo
dbzar anon-col scramble -u mongodb://example:example@localhost -db test -t users -c firstName
// { "firstName": "John" } => { "firstName": "nhJo" }
```

### `anon-db`

```
Usage: dbzar anon-db [options] [uri]

Anonymize an entire database

Arguments:
  uri         connection string

Options:
  -h, --help  display help for command
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

From:

```
// users table
{ "firstName": "John", "lastName": "Doe" }

// products table
{ "name": "Product1", "price": 100 }
```

To:

```
// users table
{ "firstName": "****", "lastName": "###" }

// products table
{ "name": "Fish", "price": 100 }
```

#### Demo

<iframe width="560" height="315" src="https://www.youtube.com/embed/zdowhmstYgY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
