 // routes/cuaca.js
const express = require("express");
const router = express.Router();
const db = require("../db");

// GET semua riwayat
router.get("/", (req, res) => {
  db.query("SELECT * FROM riwayat_cuaca ORDER BY waktu_pencarian DESC", (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

// POST simpan data pencarian baru
router.post("/", (req, res) => {
  const { nama_kota } = req.body;
  if (!nama_kota) {
    return res.status(400).json({ error: "Field 'nama_kota' wajib diisi." });
}
  const waktu_pencarian = new Date();

  db.query(
    "INSERT INTO riwayat_cuaca (nama_kota, waktu_pencarian) VALUES (?, ?)",
    [nama_kota, waktu_pencarian],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: "Data berhasil disimpan", id: result.insertId });
    }
  );
});

// PUT update nama kota
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { nama_kota } = req.body;

  if (!nama_kota) {
    return res.status(400).json({ error: "Nama kota wajib diisi." });
  }

  db.query(
    "UPDATE riwayat_cuaca SET nama_kota = ? WHERE id = ?",
    [nama_kota, id],
    (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: "Data berhasil diupdate" });
    }
  );
});

// DELETE riwayat tertentu
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  db.query("DELETE FROM riwayat_cuaca WHERE id = ?", [id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Data berhasil dihapus" });
  });
});

// DELETE semua riwayat
router.delete("/", (req, res) => {
    db.query("DELETE FROM riwayat_cuaca", (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: "Semua data berhasil dihapus" });
    });
  });
  
module.exports = router;

