# TomatKU - Tomato Leaf Disease Detection Web App (Frontend)

**TomatKU** adalah aplikasi web modern berbasis React dan Tailwind CSS yang dirancang untuk membantu petani dan penghobi tanaman dalam mengenali kondisi kesehatan daun tanaman tomat secara cepat dan praktis. Aplikasi ini berfokus pada pengenalan daun tomat sehat serta deteksi dini penyakit **Bercak Kering (*Early Blight / Alternaria solani*)** melalui kamera maupun unggah foto.

---

## Fitur Utama

1. **Splash Screen & Onboarding Interaktif**
   - Halaman pembuka (*Landing*) dengan animasi logo TomatKU.
   - Dialog konfirmasi edukasi (*PageOne*) sebelum memulai pemindaian.

2. **Katalog Edukasi Daun (*Home Page*)**
   - Panduan visual interaktif (*carousel*) untuk mengenali perbedaan karakteristik:
     - **Daun Sehat**: Ciri visual warna hijau segar, helaian kokoh, serta pertanda nutrisi tercukupi.
     - **Early Blight**: Gejala bercak cokelat konsentris akibat jamur *Alternaria solani* dan dampaknya terhadap tanaman.
   - Desain tata letak kartu dinamis yang mengembang ke bawah tanpa mengganggu posisi judul atas.

3. **Pemindai Kamera Pintar (*Camera Page*)**
   - **Live Viewfinder**: Akses langsung ke kamera perangkat dengan reticle pemandu fokus dan efek animasi laser scan.
   - **Switch Camera**: Kemudahan berpindah antara kamera depan dan kamera belakang.
   - **Alternatif Unggah Galeri**: Fitur upload foto langsung dari penyimpanan jika akses kamera tidak diizinkan atau tidak tersedia.
   - **Mode Preview & Verifikasi**: Tinjau ulang foto sebelum diproses untuk analisis.
   - **Navigasi Kembali Cerdas (*Previous Page Tracking*)**: Jika perizinan kamera ditolak atau memilih *"Nanti Saja"*, sistem otomatis mengembalikan pengguna ke halaman yang dibuka sebelumnya (Summary, History, atau Home), tidak selalu dipaksa ke halaman Home.

4. **Dashboard Statistik Deteksi (*Summary Page*)**
   - **Banner Riwayat**: Tombol pintas (*"See the history?"*) untuk langsung menuju halaman riwayat pemindaian.
   - **Filter Periode Dinamis**: Pilihan filter data (*Hari ini*, *Minggu ini*, *Bulan ini*) dan tombol kalender dengan pembaruan data secara dinamis.
   - **Kartu Total Deteksi**: Ringkasan total pemindaian daun dengan ilustrasi daun bersinar dan kaca pembesar.
   - **Donut Chart Distribusi Hasil Klasifikasi**: Visualisasi rasio persentase daun *Healthy*, *Early Blight*, dan *Unknown*.
   - **Speedometer Gauge Distribusi Keparahan**: Indikator tingkat keparahan tanaman dari level **PARAH** hingga **NORMAL** dengan jarum penunjuk interaktif.

5. **Halaman Riwayat Pemindaian (*History Page*)**
   - Diakses langsung dari halaman Summary dengan tombol kembali (`←`).
   - Tombol **"Pilih Hari"** dan pemilih tanggal interaktif (*Date Carousel*) untuk menelusuri data deteksi hari-hari sebelumnya.
   - Rekap kartu statistik harian, donut chart, dan speedometer keparahan per tanggal terpilih.

6. **Bilah Navigasi Bawah Terkunci (*Fixed Bottom Navigation*)**
   - Komponen navigasi bawah (**Home**, **Camera**, **Summary**) dibuat *fixed* dan selalu terlihat di posisi bawah layar.
   - Konten halaman dapat di-scroll dengan lancar ke atas maupun ke bawah tanpa membuat bilah navigasi ikut berpindah atau tertutup.

---

## Teknologi yang Digunakan

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

## Memulai Proyek (Getting Started)

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

## Struktur Direktori

```text
tomatku-fe/
├── public/              # File statis publik
├── src/
│   ├── assets/          # Aset gambar daun sehat, bercak daun, & ikon
│   ├── App.tsx          # Navigasi utama, state root, & previousPage tracking
│   ├── camera.tsx       # Halaman deteksi kamera & upload foto
│   ├── history.tsx      # Halaman riwayat deteksi harian
│   ├── index.tsx        # Halaman Home (Katalog edukasi kondisi daun)
│   ├── landing.tsx      # Halaman splash screen pembuka
│   ├── pageone.tsx      # Halaman konfirmasi / info edukasi
│   ├── summary.tsx      # Halaman ringkasan statistik & dashboard deteksi
│   ├── index.css        # Konfigurasi Tailwind CSS v4 & custom animasi
│   └── main.tsx         # Entry point React
├── package.json
└── README.md
```

---

## Lisensi

Proyek ini dikembangkan untuk kebutuhan pemantauan dan edukasi kesehatan tanaman tomat. Silahkan digunakan dan dikembangkan sesuai kebutuhan.
