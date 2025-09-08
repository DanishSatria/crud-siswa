## 📚 CRUD Siswa dengan NestJS

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

## 🚀 Hasil Uji Coba dengan Postman

### 🔹 POST - Tambah Data
![POST](Screenshot%202025-09-08%20225816.png)

### 🔹 GET - Lihat Data
![GET](Screenshot%202025-09-08%20225958.png)

### 🔹 PUT - Update Data
![PUT](Screenshot%202025-09-08%20230051.png)

### 🔹 DELETE - Hapus Data
![DELETE](Screenshot%202025-09-08%20230210.png)

### 🔹 GET setelah Update/Hapus
![GET2](Screenshot%202025-09-08%20230214.png)

### 🔹 Semua Data
![ALL](Screenshot%202025-09-08%20230313.png)


👨‍💻 Author

Danish Satria – XI RPL 1
📍 SMK Telkom Malang
