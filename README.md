# ReadMe

open -a "DBeaver" ~/Library/Application\ Support/com.jera.macroad/macroad.db

## DDL(SQLite)

folders definition

```sql
  CREATE TABLE folders (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  parent_id INTEGER,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (parent_id) REFERENCES folders(id) ON DELETE CASCADE
);
```

macros definition

```sql
CREATE TABLE macros (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  description TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  duration_ms INTEGER,
  event_count INTEGER DEFAULT 0,
  is_favorite BOOLEAN DEFAULT 0,
  folder_id INTEGER,
  is_cloud_synced BOOLEAN DEFAULT 0,
  cloud_sync_at DATETIME,
  FOREIGN KEY (folder_id) REFERENCES folders(id) ON DELETE SET NULL
);
```
