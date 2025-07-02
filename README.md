# 🌦️ WeatherCheck — Aplikasi Cuaca Berbasis Web

WeatherCheck adalah aplikasi cuaca sederhana berbasis HTML, CSS, JavaScript, Node.js + Express, serta MySQL. Aplikasi ini dapat menampilkan data cuaca dari API publik OpenWeatherMap dan menyimpan riwayat pencarian ke dalam database.

## ✨ Fitur Utama
✅ Cek cuaca real-time berdasarkan nama kota  
✅ Menyimpan nama kota dan waktu pencarian ke database  
✅ Menampilkan daftar riwayat pencarian dalam bentuk tabel  
✅ Fitur hapus satu per satu atau hapus semua  
✅ Halaman utama dan halaman riwayat terpisah  
✅ Tampilan UI modern dan responsif

## 🧭 Alur Sistem

1. Pengguna memasukkan nama kota
2. Aplikasi akan mengambil data cuaca dari OpenWeatherMap API
3. Data ditampilkan di halaman utama (suhu, cuaca, kelembapan, angin, dll)
4. Nama kota + waktu pencarian disimpan ke MySQL melalui REST API
5. Halaman `/riwayat.html` menampilkan semua pencarian yang pernah dilakukan dalam bentuk tabel
6. Pengguna dapat menghapus 1 atau semua riwayat

## 📡 REST API Endpoint

| Metode | URL                        | Deskripsi                        |
|--------|----------------------------|----------------------------------|
| GET    | `/api/cuaca`              | Ambil semua riwayat cuaca        |
| POST   | `/api/cuaca`              | Simpan data pencarian baru       |
| DELETE | `/api/cuaca/:id`          | Hapus riwayat berdasarkan ID     |
| DELETE | `/api/cuaca`              | Hapus semua riwayat              |
| PUT    | `/api/cuaca/:id`          | (opsional) Edit nama kota        |

