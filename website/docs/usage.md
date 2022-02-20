---
sidebar_position: 3
sidebar_label: 👻 Usage
---

# Usage

### `anon-col` : anonymize a single column in a table

(⚠ Changes whichever db provided so use with caution)

```bash
Usage: dbzar anon-col <provider> [options] <uri> <db> <table> <column>
```

```
// postgres
npx dbzar anon-col mask postgresql://example:example@localhost test users firstName
// { "firstName": "John" } => { "firstName": "****" }

// mongo
npx dbzar anon-col scramble mongodb://example:example@localhost test users firstName
// { "firstName": "John" } => { "firstName": "nhJo" }
```

### `anon-db` : anonymize entire database

```
Usage: dbzar anon-db [options] [uri]
```

1. Create Configuration file (see [Configuration](#-configuration))

2. Run the anonymizer

```
yarn dbzar anon-db mongodb://example:example@localhost
```
