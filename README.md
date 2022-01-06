# dbzar

Make every db

## Example

Given the following `dbzar.config.yml` file:

```yaml
engine: "mongodb"
connectionString: mongodb://mongodb0.example.com:27017
collections:
    users:
        - property: firstName
          policy: fake.firstNae
        - property: lastName
          policy: fake.lastName
	    - property: email
          policy: mask
          exclude: '@'
          excludeEnd: 4
          excludeStart: 3

```

Running

```
dbzar
```

Will turn all documents to something like:

```json
{
  "firstName": "Fake FirstName1",
  "lastName": "Fake LastName2",
  "email": "mar*@****.com",
  "age": 33
}
```
