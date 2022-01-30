<h1 align="center">DBZar</h1>
<h2 align="center">Agnostic DB Anonymizer 🔁👻</h2>

- [DBZar](#dbzar)
- [Usage](#usage)
  - [Anonymizing a single column](#anonymizing-a-single-column)
- [Supported Databases](#supported-databases)
- [Anonymize Databases (Future Version)](#anonymize-databases-future-version)
- [🔧 Providers](#-providers)
  - [Current](#current)
  - [Future](#future)

## DBZar

DBZar (Database + "Foreign" in Hebrew) let you mask/scramble/fake some or all
of the fields in a given database.<br/>

It doesn't matter if it's mongodb/postgres or anything else - Just add a connection string and anonymize away!
<br/><br/>

## Usage

### Anonymizing a single column

For example: mask the `name` column in `users` table:

```bash
Usage: dbzar anon-col [options] <uri> <db> <table> <column>

anonymize a single column in a table

Arguments:
  uri                       connection string
  db                        database name
  table                     table name
  column                    column name

Options:
  -p --provider <provider>  provider to be used for column (default: "mask")
  -h, --help                display help for command
```

```
// postgres
yarn dbzar anon-col mongodb://example:example@localhost test users firstName

// mongo
yarn dbzar anon-col postgresql://example:example@localhost test users firstName
```

Will change `users` records from:

```json
{
  "name": "John Doe"
}
```

To:

```json
{
  "name": "**** ***" // mask
}
```

## Supported Databases

- MongoDB
- Postgres
- Future support
  - MariaDB / MySQL
  - SQLIte
  - CSV

## Anonymize Databases (Future Version)

1. Create Configuration file:

```yaml
// dbzar.config.yml
tables:
    - name: users
      columns:
        - name: name
          provider: fake
          options: { fakeValue: name }
        - name: email
          provider: mask
          options: { exclude: '@', excludeEnd: 4, excludeStart: 3}
        - name: password
          provider: const
          options: { value: "REMOVED!"}
    - name: products
      columns:
        - name: productName
          provider: fake
          options: { fakeValue: alphaNumeric, min: 5, max: 10 }
        - name: price
          provider: random_number
          options: { min: 100, max: 999 }

```

2. Run:

```
// mongo
dbzar dbzar anon-db mongodb://example:example@mongo:27017 test1

// postgres
dbzar dbzar anon-db postgresql://user:password@localhost/mydb test2
```

## 🔧 Providers

### Current

1. `mask` - will replaces some/all characters (default: `"*"`)

### Future

1. `scramble` - change the order randomly
2. `hash` - replace with hash
3. `fake` - will generate fake data
4. `const` - replace with constant string/number
5. `remove` - remove the field from the table
