---
sidebar_position: 5
sidebar_label: ⚙ Configuration
hide_title: true
---

## Configuration

dbzar can be configured by creating on the configuration
files below which identifies how to anonymize a database

Create any one of these files:

- `.dbzarrc`
- `.dbzarrc.json`
- `.dbzarrc.yaml`
- `.dbzarrc.yml`
- `.dbzarrc.js`
- `.dbzarrc.cjs`
- `dbzar.config.js`
- `dbzar.config.cjs`

## Example

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

## Structure

1. `uri`\* (string) - connection string, where to connect to
2. `dbName`\* (string) - database name to process
3. `tables` (list of `Table`) - tables to process within the database

### Table

1. `name`\* (string) - table name
2. `columns`\* (list of `Column`) - columns to be processed

### Column

- `name`\* (string) - column name
- `provider` - (`ProviderType` or `Provider`) - how to anonymize the column.

### ProviderType

An enum (string) with one of the fields: `mask`, `fake`, `scramble`

### Provider

Contains a more detailed provider with options

1. `type`\* (`ProviderType`) - type of the provider
2. `options` - provider options, see the different [providers](/docs/providers) for more info

`*` - required field
