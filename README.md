# 🚀 Frontend Interview Test — React CRUD App

> **Estimasi waktu pengerjaan: 3–4 jam**

Selamat datang di interview test Front End Engineer! Kamu akan membangun aplikasi CRUD sederhana menggunakan React, React Router v6, dan Axios yang terkoneksi dengan [JSONPlaceholder](https://jsonplaceholder.typicode.com/) sebagai fake REST API.

---

## 📋 Deskripsi Tugas

Buatlah aplikasi manajemen **Posts** dengan fitur-fitur berikut:

| Fitur | Route | Keterangan |
|---|---|---|
| List Posts | `/posts` | Menampilkan semua posts, ada tombol hapus per item |
| Detail Post | `/posts/:id` | Menampilkan detail satu post |
| Create Post | `/posts/create` | Form untuk membuat post baru |
| Edit Post | `/posts/:id/edit` | Form untuk mengubah post yang ada |

### API yang Digunakan

Base URL: `https://jsonplaceholder.typicode.com`

| Method | Endpoint | Keterangan |
|---|---|---|
| GET | `/posts` | Ambil semua posts |
| GET | `/posts/:id` | Ambil satu post |
| POST | `/posts` | Buat post baru |
| PUT | `/posts/:id` | Update post |
| DELETE | `/posts/:id` | Hapus post |

> ⚠️ JSONPlaceholder adalah fake API — data tidak benar-benar tersimpan. Response tetap valid dan bisa digunakan untuk simulasi CRUD.

---

## ✅ Yang Harus Dikerjakan

Semua bagian `TODO` sudah tersedia di dalam kode. Tugasmu adalah **melengkapi** bagian tersebut.

### 1. `src/api/posts.js`
Lengkapi semua fungsi API:
- `getPosts()` — fetch semua posts
- `getPostById(id)` — fetch single post
- `createPost(data)` — buat post baru
- `updatePost(id, data)` — update post
- `deletePost(id)` — hapus post

### 2. `src/pages/posts/PostList.jsx`
- Fetch dan tampilkan semua posts saat komponen pertama kali di-render
- Implementasi `handleDelete` — hapus post dan update state

### 3. `src/pages/posts/PostDetail.jsx`
- Fetch dan tampilkan detail satu post berdasarkan `id` dari URL
- Implementasi `handleDelete` — hapus post lalu redirect ke `/posts`

### 4. `src/pages/posts/PostCreate.jsx`
- Implementasi `handleSubmit` — validasi form, kirim data ke API, redirect setelah sukses

### 5. `src/pages/posts/PostEdit.jsx`
- Fetch data post saat komponen mount (untuk pre-fill form)
- Implementasi `handleSubmit` — validasi, kirim update, redirect ke detail setelah sukses

---

## 📦 Struktur Folder

```
src/
├── api/
│   ├── axiosInstance.js   # Konfigurasi Axios (sudah jadi)
│   └── posts.js           # Fungsi-fungsi API ← KERJAKAN INI
├── components/
│   └── Navbar.jsx         # Navigasi (sudah jadi)
├── pages/
│   ├── Home.jsx           # Halaman beranda (sudah jadi)
│   └── posts/
│       ├── PostList.jsx   # ← KERJAKAN INI
│       ├── PostDetail.jsx # ← KERJAKAN INI
│       ├── PostCreate.jsx # ← KERJAKAN INI
│       └── PostEdit.jsx   # ← KERJAKAN INI
├── App.js                 # Router setup (sudah jadi)
└── index.js               # Entry point (sudah jadi)
```

---

## ⭐ Poin Bonus (Opsional)

- [ ] **Loading skeleton** — Tampilkan skeleton UI saat data sedang di-fetch
- [ ] **Search / Filter** — Tambahkan fitur pencarian post berdasarkan judul
- [ ] **Pagination** — Batasi tampilan posts per halaman (misal 10 per halaman)
- [ ] **Toast Notification** — Notifikasi sukses/gagal setelah CRUD
- [ ] **Custom Hook** — Buat `useFetch` atau `usePost` custom hook

---

## 🛠️ Cara Menjalankan Project

### Prasyarat
- Node.js >= 16
- npm atau yarn

### Langkah-langkah

```bash
# 1. Clone repo ini (setelah fork)
git clone https://github.com/<username-kamu>/fe-interview-test.git

# 2. Masuk ke folder project
cd fe-interview-test

# 3. Install dependencies
npm install

# 4. Jalankan development server
npm start
```

Buka browser di `http://localhost:3000`

---

## 📤 Cara Pengumpulan

### Langkah-langkah Pengumpulan

**1. Fork repo ini**

Klik tombol **Fork** di pojok kanan atas halaman repo ini.

**2. Clone hasil fork-mu**
```bash
git clone https://github.com/<username-kamu>/fe-interview-test.git
cd fe-interview-test
```

**3. Buat branch baru dengan namamu**
```bash
git checkout -b submission/<nama-kamu>
# Contoh: git checkout -b submission/budi-santoso
```

**4. Kerjakan semua TODO yang ada**

**5. Commit pekerjaanmu**
```bash
git add .
git commit -m "feat: complete CRUD implementation - <nama-kamu>"
```

**6. Push ke fork-mu**
```bash
git push origin submission/<nama-kamu>
```

**7. Buat Pull Request**

- Buka halaman fork-mu di GitHub
- Klik **"Compare & pull request"**
- Set target: repo asli → branch `main`
- **Judul PR:** `[Submission] <Nama Lengkap> - Frontend Interview Test`
- **Deskripsi PR** wajib mencantumkan:

```
## Yang Sudah Diselesaikan
- [ ] API functions (posts.js)
- [ ] PostList — fetch & delete
- [ ] PostDetail — fetch & delete
- [ ] PostCreate — form & submit
- [ ] PostEdit — pre-fill & update

## Bonus yang Dikerjakan (jika ada)
- ...

## Catatan
(Tulis jika ada kendala, asumsi, atau hal yang ingin disampaikan)
```

---

## 📝 Penilaian

| Kriteria | Bobot |
|---|---|
| Fungsionalitas CRUD berjalan dengan benar | 50% |
| Pengelolaan state (loading, error, data) | 20% |
| Kode bersih dan mudah dibaca | 20% |
| Bonus fitur | 10% |

---

## ❓ FAQ

**Q: Apakah boleh menggunakan library tambahan?**
A: Boleh, asal tidak menggantikan teknologi inti (React, React Router v6, Axios).

**Q: Data tidak tersimpan setelah create/update/delete, apakah ini masalah?**
A: Tidak. JSONPlaceholder adalah fake API. Yang dinilai adalah cara kamu memanggil API dan mengelola state di frontend.

**Q: Boleh mengubah tampilan/styling?**
A: Boleh! Bahkan diapresiasi jika kamu mempercantik tampilan selama fungsionalitas tetap berjalan.

---

Semangat mengerjakan! 💪
