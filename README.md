<h1 align="center">DBZar</h1>
<h2 align="center">Agnostic DB Anonymizer 👻</h2>

- [Why?](#why)
- [Supported Databases](#supported-databases)
  - [Future support](#future-support)
- [Usage](#usage)
  - [Create Configuration file](#create-configuration-file)
  - [Anonymize existing db](#anonymize-existing-db)
- [Providers](#providers)

## Why?

When anonymizing databases (either for local development or other reasons) usually we write the same script again and again:

1. Connect to the DB
2. Scramble parts of the DB
3. Save the DB in a new file

DBZar (Database + "Foreign" in Hebrew) let's you scramble some or all
of the fields in a given database, no matter what it is:
Just setup a configuration file, add your connection URI and scramble
away.

## Supported Databases

- MongoDB
- Postgres

### Future support

- MariaDB / MySQL
- SQLIte
- CSV

## Usage

### Create Configuration file

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

### Anonymize existing db

```
// mongo
dbzar anon-db --uri mongodb://example:example@mongo:27017 --db test1

// postgres
dbzar anon-db --uri postgresql://user:password@localhost/mydb --db test2
```

Will change all records to:

Users:

```json
{
  "name": "Fake1 Fake2", // fake
  "email": "mar*@****.com", // masked
  "password": "REMOVED!" // const
}
```

Products:

```json
{
  "productName": "az5sA", // fake
  "price": 533 // random
}
```

## Providers

1. `fake` - will generate fake data
2. `mask` - will replaces some/all characters (default: `"*"`)
3. `scramble` - change the order randomly
4. `hash` - replace with hash
5. `const` - replace with constant string/number
