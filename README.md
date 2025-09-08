📚 CRUD Siswa dengan NestJS

Proyek ini adalah implementasi CRUD (Create, Read, Update, Delete) sederhana untuk data Siswa menggunakan NestJS.
Aplikasi ini digunakan untuk belajar dasar-dasar REST API dengan framework NestJS.

⚡ Fitur

➕ Tambah data siswa (POST)

📖 Lihat semua data siswa (GET)

📝 Update data siswa (PUT)

❌ Hapus data siswa (DELETE)

🛠️ Teknologi yang Digunakan

NestJS
 – Framework backend berbasis Node.js

TypeScript
 – Bahasa pemrograman

Postman
 – Testing API

📂 Struktur Project
src/
│── app.controller.ts
│── app.module.ts
│── app.service.ts
│── main.ts
│
└── siswa/
    ├── dto/
    │   ├── create-siswa.dto.ts
    │   └── update-siswa.dto.ts
    ├── siswa.controller.ts
    ├── siswa.module.ts
    ├── siswa.service.ts
    └── entities/
        └── siswa.entity.ts

🚀 Cara Menjalankan

Clone repository ini:

git clone https://github.com/DanishSatria/crud-siswa.git
cd crud-siswa


Install dependencies:

npm install


Jalankan server:

npm run start:dev


API berjalan di:
👉 http://localhost:3000/siswa

📌 Contoh Request
Tambah Data Siswa

Endpoint:
POST http://localhost:3000/siswa

Body (JSON):

{
  "nisn": "12345",
  "nama": "Danish",
  "alamat": "Malang",
  "umur": 17
}


Response:

[
  {
    "nisn": "12345",
    "nama": "Danish",
    "alamat": "Malang",
    "umur": 17
  }
]

🖼️ Screenshot Hasil

Letakkan screenshot hasil Postman di sini 👇
(kamu bisa simpan gambar ke folder project, lalu tampilkan dengan markdown)

![Hasil Testing Postman](./screenshot/postman.png)

👨‍💻 Author

Danish Satria – XI RPL 1
📍 SMK Telkom Malang
