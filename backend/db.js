const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./employees.db");

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS employees (
      id INTEGER PRIMARY KEY,
      name TEXT,
      department TEXT
    )
  `);
});

module.exports = db;