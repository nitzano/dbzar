<h1 align="center">DBZar</h1>
<h2 align="center">Agnostic DB Anonymizer 👻</h2>

- [Supported Databases](#supported-databases)
- [Usage](#usage)
  - [Create Configuration file](#create-configuration-file)
  - [Anonymize existing db](#anonymize-existing-db)
- [Providers](#providers)

## Supported Databases

- MongoDB
- Postgres

## Usage

### Create Configuration file

Example:

```yaml
// dbzar.config.yml
engine: "mongodb"
collections:
    - name: users
      properties:
        - name: firstName
          provider: fake
          options: { fakeValue: firstName }
        - name: lastName
          provider: fake
          options: { fakeValue: lastName }
        - name: email
          provider: mask
          options: { exclude: '@', excludeEnd: 4, excludeStart: 3}
        - name: age
          provider: random_number
          options: { min: 20, max: 99 }
        - name: password:
          provider: const
          options: { value: "RESERVED!"}
```

### Anonymize existing db

```
// mongo
dbzar anon-db --uri mongodb://example:example@mongo:27017

// postgres
dbzar anon-db --uri postgresql://user:password@localhost/mydb
```

Will change all records to:

```json
{
  "firstName": "Fake1",
  "lastName": "Fake2",
  "email": "mar*@****.com",
  "age": 33,
  "password": "REMOVED!"
}
```

## Providers

1. `fake` - will generate fake data
2. `mask` - will replaces some/all characters (default: `"*"`)
3. `scramble` - change the order randomly
4. `hash` - replace with hash
5. `const` - replace with constant string/number
