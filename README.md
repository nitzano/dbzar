# dbzar

Agnostic DB Anonymizer 👻

## Example

Given the following `dbzar.config.yml` file:

```yaml
engine: "mongodb"
connectionString: mongodb://mongodb0.example.com:27017
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

Running `dbzar` will turn all documents into:

```json
{
  "firstName": "John", // fake
  "lastName": "Flowers", // fake
  "email": "mar*@****.com",
  "age": 33,
  "password": "REMOVED!"
}
```

## Engines

- MongoDB
- Postgres
- More soon

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
