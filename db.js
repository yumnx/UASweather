 // db.js
const mysql = require("mysql2");

// Buat koneksi ke database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",       // sesuaikan dengan user MySQL kamu
  password: "",       // isi kalau kamu punya password
  database: "cuaca_app"  // kita akan buat DB ini nanti
});

// Coba koneksi
connection.connect((err) => {
  if (err) {
    console.error("❌ Gagal koneksi ke database:", err.message);
    return;
  }
  console.log("✅ Terhubung ke database MySQL.");
});

module.exports = connection;

