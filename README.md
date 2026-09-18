# 🍅 TomatKU - Tomato Leaf Disease Detection Web App (Frontend)

**TomatKU** adalah aplikasi web modern berbasis React dan Tailwind CSS yang dirancang untuk membantu petani dan penghobi tanaman dalam mengenali kondisi kesehatan daun tanaman tomat secara cepat dan praktis. Aplikasi ini berfokus pada pengenalan daun tomat sehat serta deteksi dini penyakit **Bercak Kering (*Early Blight / Alternaria solani*)** melalui kamera maupun unggah foto.

---

## 🌟 Fitur Utama

1. **Splash Screen & Onboarding Interaktif**
   - Halaman pembuka dengan animasi logo TomatKU.
   - Dialog panduan pengenalan sistem sebelum memulai pemindaian.

2. **Katalog Edukasi Daun (*Home Page*)**
   - Panduan visual interaktif (*carousel*) untuk mengenali perbedaan karakteristik:
     - **Daun Sehat**: Ciri visual warna hijau segar, helaian kokoh, serta pertanda nutrisi tercukupi.
     - **Early Blight**: Gejala bercak cokelat konsentris akibat jamur *Alternaria solani* dan dampaknya terhadap tanaman.

3. **Pemindai Kamera (*Camera Page*)**
   - **Live Viewfinder**: Akses langsung ke kamera perangkat dengan reticle pemandu fokus dan efek animasi laser scan.
   - **Switch Camera**: Kemudahan berpindah antara kamera depan dan kamera belakang pada perangkat mobile.
   - **Alternatif Unggah Galeri**: Fitur upload foto langsung dari penyimpanan perangkat jika akses kamera tidak diizinkan atau tidak tersedia.
   - **Mode Preview & Verifikasi**: Tinjau ulang foto sebelum diproses untuk analisis.

4. **Ringkasan Deteksi (*Summary Page*)**
   - Menampilkan hasil diagnosis kondisi daun tomat beserta status kesehatan tanaman (*Kondisi Prima* / *Perlu Perawatan*).

---

## 🛠️ Teknologi yang Digunakan

* **Framework & Library:**
  * [React 19](https://react.dev/)
  * [TypeScript](https://www.typescriptlang.org/)
  * [Vite 8](https://vite.dev/)
* **Styling & Desain:**
  * [Tailwind CSS v4](https://tailwindcss.com/)
  * Font Poppins & Plus Jakarta Sans
* **Kamera:**
  * [react-webcam](https://www.npmjs.com/package/react-webcam)
* **Code Quality & Linter:**
  * [Oxlint](https://oxc.rs/docs/guide/usage/linter.html)

---

## 🚀 Memulai Proyek (Getting Started)

### Prasyarat
Pastikan Anda telah menginstal:
* [Node.js](https://nodejs.org/) (versi 18 ke atas disarankan)
* Paket manajer `npm`

### Instalasi & Menjalankan

1. **Clone repositori:**
   ```bash
   git clone https://github.com/ayunisay/tomatku-fe.git
   cd tomatku-fe
   ```

2. **Instal dependensi:**
   ```bash
   npm install
   ```

3. **Jalankan server pengembangan (Dev Server):**
   ```bash
   npm run dev
   ```
   Buka browser dan akses alamat yang ditampilkan di terminal (default: `http://localhost:5173`).

4. **Build untuk Produksi:**
   ```bash
   npm run build
   ```

5. **Menjalankan Linter:**
   ```bash
   npm run lint
   ```

---

## 📁 Struktur Direktori

```text
tomatku-fe/
├── public/              # File statis publik
├── src/
│   ├── assets/          # Aset gambar daun sehat, bercak daun, & ikon
│   ├── App.tsx          # Navigasi & state root aplikasi
│   ├── camera.tsx       # Halaman deteksi kamera & upload foto
│   ├── index.tsx        # Halaman Home (Katalog kondisi daun)
│   ├── landing.tsx      # Halaman splash screen pembuka
│   ├── pageone.tsx      # Halaman konfirmasi / info edukasi
│   ├── summary.tsx      # Halaman ringkasan hasil deteksi
│   ├── index.css        # Konfigurasi Tailwind CSS v4 & custom animasi
│   └── main.tsx         # Entry point React
├── package.json
└── README.md
```

---

## 📄 Lisensi

Proyek ini dikembangkan untuk kebutuhan pemantauan dan edukasi kesehatan tanaman tomat. Silakan gunakan dan kembangkan sesuai kebutuhan.
