# dbzar

Make every db

## Example

Given the following `dbzar.config.yml` file:

```yaml
engine: "mongodb"
connectionString: mongodb://mongodb0.example.com:27017
collections:
    - users:
        - name: firstName
          provider: fake
          value: firstName
        - name: lastName
          provider: fake
          value: lastName
	    - name: email
          provider: mask
          value: "*"
          exclude: '@'
          excludeEnd: 4
          excludeStart: 3
        - name: age
          provider: randomNumber
          min: 20
          max: 99
        - name: password
          provider: const
          value: REMOVED!

```

Running

```
dbzar
```

Will turn all documents into:

```json
{
  "firstName": "John", // fake
  "lastName": "Flowers", // fake
  "email": "mar*@****.com",
  "age": 33,
  "password": "REMOVED!"
}
```

## Providers

1. `fake` - generate fake strings,
   1. `faker`
      1. `firstName`
   2. ` lastName`
      1. `alphaNumeric`
   3. ` number`
      1. `start`
      2. `end`
2. `mask` - replaces all characters, default: `*`
   1. Options
      1. `exclude` - don't mask these chars
      2. `excludeEnd` - don't exclude X chars from end
      3. `excludeStart` - don't exclude X chars from start
3. `scramble` - change the order randomly
4. `hash` - replace with hash
   1. `algo` (required): `sha1`, `sha256`
5.
