<h1 align="center">DBZar</h1>
<h2 align="center">Agnostic DB Anonymizer 🔁👻</h2>

- [👻 DBZar](#-dbzar)
- [🔁 Basic Usage](#-basic-usage)
  - [Anonymizing a single column](#anonymizing-a-single-column)
- [✅ Supported Databases](#-supported-databases)
- [😎 Advanced Usage](#-advanced-usage)
  - [Anonymize entire database](#anonymize-entire-database)
- [🔧 Providers](#-providers)
  - [Current](#current)
  - [Future](#future)

## 👻 DBZar

DBZar (Database + "Foreign" in Hebrew) let you mask/scramble/fake some or all
of the fields in a given database, no matter if it's mongodb/postgres or anything else.
<br/><br/>

Just add a connection string URI and anonymize away!

## 🔁 Basic Usage

### Anonymizing a single column

For example: mask the `name` column in `users` table:

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

## ✅ Supported Databases

- MongoDB
- Postgres
- Future support
  - MariaDB / MySQL
  - SQLIte
  - CSV

## 😎 Advanced Usage

### Anonymize entire database

1. Create Configuration file

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

Run:

```
// mongo
dbzar dbzar anon-db --uri mongodb://example:example@mongo:27017 --db test1

// postgres
dbzar dbzar anon-db --uri postgresql://user:password@localhost/mydb --db test2
```

## 🔧 Providers

### Current

1. `mask` - will replaces some/all characters (default: `"*"`)

### Future

2. `fake` - will generate fake data
3. `scramble` - change the order randomly
4. `hash` - replace with hash
5. `const` - replace with constant string/number
