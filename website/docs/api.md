---
sidebar_position: 6
sidebar_label: 📃 API
---

# API

```typescript
import { anonCol, anonDb, Config } from "dbzar";

// Anonymize a single column
await anonCol("mongodb://localhost", "db1", "table1", "col1", { type: "mask" });

// Anonymize an entire database
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
