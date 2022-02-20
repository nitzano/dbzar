---
sidebar_position: 5
sidebar_label: ⚙ Configuration
---

## Configuration file

Create any one of these files:

- `.dbzarrc`
- `.dbzarrc.json`
- `.dbzarrc.yaml`
- `.dbzarrc.yml`
- `.dbzarrc.js`
- `.dbzarrc.cjs`
- `dbzar.config.js`
- `dbzar.config.cjs`

## Example Config

```yaml
// .dbzarrc
uri:  mongodb://example:example@localhost
dbName: db1
tables:
  - name: users
    columns:
      - name: firstName
        provider: mask
      - name: lastName
        provider:
          type: mask
          options:
            character: "#"
  - name: products
    columns:
      - name: name
        provider: fake
      - name: price
        provider:
          type: random_number
          options: { min: 100, max: 999 }
```
