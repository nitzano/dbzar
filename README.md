# dbzar

Agnostic DB Anonymizer 👻

## Supported Databases

- MongoDB
- Postgres

## Example

```yaml
// dbzar.config.yml
engine: "mongodb"
collections:
    - users:
        - firstName:
            provider: fake
            value: firstName
        - lastName:
            provider: fake
            value: lastName
	    - email:
            provider: mask
            exclude: '@'
            excludeEnd: 4
            excludeStart: 3
        - age:
            provider: random_number
            min: 20
            max: 99
        - password:
            provider: const
            value: REMOVED!

```

Running

```
dbzar anon-db --conectionUri mongodb://example:example@mongo:27017
```

Will turn all documents in the db to:

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

1. `fake` - generate fake data,
2. `mask` - replaces some or all characters (default: `"*"`)
3. `scramble` - change the order randomly
4. `hash` - replace with hash
5. `const` - replace with constant string/number
