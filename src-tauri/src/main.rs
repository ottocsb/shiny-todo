// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use tauri::{generate_handler, Builder, command, generate_context};

fn main(){

    Builder::default()
        .plugin(tauri_plugin_sql::Builder::default().build()) // sql 插件
        .invoke_handler(generate_handler![greet])
        .run(generate_context!())
        .expect("error while running tauri application");

}

// 入参为字符串，返回值为字符串
#[command]
fn greet(name: &str) -> String {
    println!("Hello, {}!", name);
    format!("Hello, {}!", name)
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn greet_returns_correct_greeting() {
        let name = "Alice";
        let expected = "Hello, Alice!";
        assert_eq!(greet(name), expected);
    }

    #[test]
    fn greet_handles_empty_string() {
        let name = "";
        let expected = "Hello, !";
        assert_eq!(greet(name), expected);
    }
}
