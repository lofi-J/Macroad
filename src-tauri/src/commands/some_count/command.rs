use crate::sqlite::db_state::DbState;
use serde::Serialize;
use tauri::State;

/// some_count 테이블의 레코드 구조체
#[derive(Debug, Serialize)]
pub struct SomeCount {
    pub id: i64,
    pub count: i64,
    pub created_at: Option<String>,
    pub updated_at: Option<String>,
}

/// some_count 테이블의 모든 레코드를 조회합니다.
#[tauri::command]
pub fn get_some_count(db: State<'_, DbState>) -> Result<Vec<SomeCount>, String> {
    let conn = db
        .connection
        .lock()
        .map_err(|e| format!("DB 락 획득 실패: {}", e))?;

    let mut stmt = conn
        .prepare("SELECT id, count, created_at, updated_at FROM some_count")
        .map_err(|e| format!("쿼리 준비 실패: {}", e))?;

    let rows = stmt
        .query_map([], |row| {
            Ok(SomeCount {
                id: row.get(0)?,
                count: row.get(1)?,
                created_at: row.get(2)?,
                updated_at: row.get(3)?,
            })
        })
        .map_err(|e| format!("쿼리 실행 실패: {}", e))?;

    let mut results = Vec::new();
    for row in rows {
        results.push(row.map_err(|e| format!("행 파싱 실패: {}", e))?);
    }

    Ok(results)
}
