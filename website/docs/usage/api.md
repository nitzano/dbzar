---
sidebar_position: 2
sidebar_label: 📃 API
---

# API

## Anonymize a single column

```typescript
import { anonCol } from "dbzar";

await anonCol("mongodb://localhost", "db1", "table1", "col1", { type: "mask" });
```

## Anonymize database

```typescript
import { anonDb, Config } from "dbzar";

const config: Config = {
  uri: "mongodb//localhost",
  dbName: "db1",
  tables: [
    {
      name: "table1",
      columns: [
        {
          name: "col1",
          provider: "mask",
        },
      ],
    },
  ],
};

await anonDb(config);
```
