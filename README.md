# dbzar

Agnostic DB Anonymizer 👻

- [dbzar](#dbzar)
  - [Supported Databases](#supported-databases)
  - [Usage](#usage)
    - [Anonymize existing db](#anonymize-existing-db)
  - [Configuration](#configuration)
  - [Providers](#providers)

## Supported Databases

- MongoDB
- Postgres

## Usage

### Anonymize existing db

```
// mongo
dbzar anon-db --uri mongodb://example:example@mongo:27017

// postgres
dbzar anon-db --uri postgresql://user:password@localhost/mydb
```

## Configuration

1. `dbzar.config.yaml` file

Example:

```yaml
// dbzar.config.yml
engine: "mongodb"
collections:
    - name: users
      properties:
        - name: firstName
          provider: fake
          fakeValue: firstName
        - name: lastName
          provider: fake
          fakeValue: lastName
        - name: email
          provider: mask
          maskType: middle
          exclude: '@'
          excludeEnd: 4
          excludeStart: 3
        - name: age
          provider: random_number
          min: 20
          max: 99
        - name: password:
          provider: const
          value: REMOVED!
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
