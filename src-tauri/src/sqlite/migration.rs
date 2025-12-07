use tauri_plugin_sql::{Migration, MigrationKind};

use crate::sqlite::sqlite_query::ddl::{FOLDERS_DDL, MACROS_DDL};

/**
 * 마이그레이션 함수
 * 각 migration에는 고유한 version번호가 존재해야하고 순서대로 실행되어야함.
 * https://v2.tauri.app/ko/plugin/sql/
 */
pub fn migrations() -> Vec<Migration> {
    vec![
        Migration {
            version: 1,
            description: "create_folders_table",
            sql: FOLDERS_DDL,
            kind: MigrationKind::Up,
        },
        Migration {
            version: 2,
            description: "create_macros_table",
            sql: MACROS_DDL,
            kind: MigrationKind::Up,
        },
    ]
}
