// index.js

const express = require('express');
const app = express();
// Menggunakan port dari lingkungan (untuk deployment) atau default 3000 (untuk lokal)
const PORT = process.env.PORT || 3000;

// Middleware: Mengizinkan aplikasi menggunakan JSON dari request body
app.use(express.json());

// --- Simulasi Data ---
const dummyUsers = [
  { id: 101, name: 'Adi Santoso', role: 'Developer' },
  { id: 102, name: 'Bunga Citra', role: 'Designer' },
  { id: 103, name: 'Cahyo Wibowo', role: 'Manager' }
];
// ---------------------

// 1. Endpoint Root (Testing koneksi dasar) - METHOD GET
app.get('/', (req, res) => {
  res.send('Web Service Node.js sudah berjalan!');
});

// 2. Endpoint API untuk mendapatkan semua data pengguna - METHOD GET
app.get('/api/users', (req, res) => {
  console.log('Permintaan GET ke /api/users diterima.');
  // Mengirim data dalam format JSON dengan status 200 (OK)
  res.status(200).json({ 
    message: 'Data pengguna berhasil diambil',
    data: dummyUsers
  });
});

// Jalankan server
app.listen(PORT, () => {
  console.log(`Server AKTIF di port ${PORT}`);
  console.log(`Untuk lokal: http://localhost:${PORT}`);
});