mod commands;
mod sqlite;

use commands::some_count;
use sqlite::db_state::DbState;
use sqlite::migration::migrations;
use tauri::Manager;
use tauri_plugin_sql::Builder;

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(
            Builder::new()
                .add_migrations("sqlite:macroad.db", migrations()) // 데이터베이스(SQLite) 파일명
                .build(),
        )
        .plugin(tauri_plugin_opener::init())
        // 앱 초기화 시 DB State 설정
        .setup(|app| {
            let app_data_dir = app.path().app_data_dir()?;
            let db_state = DbState::new(app_data_dir).expect("DB 초기화 실패");
            app.manage(db_state);
            Ok(())
        })
        // 명령어 등록
        .invoke_handler(tauri::generate_handler![
            some_count::command::get_some_count
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
