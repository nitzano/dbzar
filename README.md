<h1 align="center">DBZar</h1>
<h2 align="center">Agnostic DB Anonymizer 🔁👻</h2>

- [Install](#install)
- [👻 Usage](#-usage)
  - [`anon-col` : anonymize a single column](#anon-col--anonymize-a-single-column)
  - [`anon-db`: anonymize entire database (future Version)](#anon-db-anonymize-entire-database-future-version)
- [✅ Supported Databases](#-supported-databases)
- [🔧 Providers](#-providers)
  - [Current](#current)

<br/>
DBZar (Database + "Foreign" in Hebrew) let you mask/scramble/fake some or all
of the fields in a given database.<br/>

It doesn't matter if it's mongodb/postgres or anything else - Just add a connection string and anonymize away!

## Install

```
npm i --save-dev dbzar
```

## 👻 Usage

### `anon-col` : anonymize a single column

For example: mask the `name` column in `users` table:

```bash
Usage: dbzar anon-col [options] <uri> <db> <table> <column>
```

```
// postgres
yarn dbzar anon-col mongodb://example:example@localhost test users firstName

// mongo
yarn dbzar anon-col postgresql://example:example@localhost test users firstName
```

Will change `users` records:

```json
{ "name": "John Doe" } => { "name": "**** ***"  }
```

### `anon-db`: anonymize entire database (future Version)

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

2. Run the anonymizer

```
// mongo
dbzar dbzar anon-db mongodb://example:example@mongo:27017 test1

// postgres
dbzar dbzar anon-db postgresql://user:password@localhost test2
```

## ✅ Supported Databases

- MongoDB
- Postgres
- Future support
  - MariaDB / MySQL
  - SQLIte
  - CSV

## 🔧 Providers

### Current

1. `mask` - will replaces some/all characters (default: `"*"`)
1. Future
   1. `scramble` - change the order randomly
   2. `hash` - replace with hash
   3. `fake` - will generate fake data
   4. `const` - replace with constant string/number
   5. `remove` - remove the field from the table
