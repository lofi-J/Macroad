use rusqlite::Connection;
use std::path::PathBuf;
use std::sync::Mutex;

/// 앱 전역에서 공유되는 DB 연결 상태
pub struct DbState {
    pub connection: Mutex<Connection>,
}

impl DbState {
    /// 새로운 DbState를 생성합니다.
    pub fn new(app_data_dir: PathBuf) -> Result<Self, String> {
        let db_path = app_data_dir.join("macroad.db");

        let conn = Connection::open(&db_path).map_err(|e| format!("DB 연결 실패: {}", e))?;

        Ok(Self {
            connection: Mutex::new(conn),
        })
    }
}
