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
dbzar --conectionUri mongodb://root:example@mongo:27017
```

Will turn all documents into:

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

1. `fake` - generate fake strings,
   1. `firstName`
   2. `lastName`
   3. `alphaNumeric`
   4. ` number`
   5. `start`
   6. `end`
2. `mask` - replaces all characters, default: `*`
   1. Options
      1. `exclude` - don't mask these chars
      2. `excludeEnd` - don't exclude X chars from end
      3. `excludeStart` - don't exclude X chars from start
3. `scramble` - change the order randomly
4. `hash` - replace with hash
   1. `algo` (required): `sha1`, `sha256`
5.
