# LifetimeArt Landing Page - Frontend Developer Assignment

Ini adalah _take-home assignment_ untuk membuat landing page LifetimeArt. Proyek ini merupakan implementasi _pixel-perfect_ dari desain Figma yang diberikan, dengan fokus pada _layout_ yang responsif, animasi yang halus, dan _codebase_ yang bersih serta _scalable_.

---

## 🚀 Live Demo

**[https://lifetime-art-tes.vercel.app/]**

---

## ✨ Fitur Utama

- ✅ **Pixel-Perfect**: Implementasi yang presisi sesuai dengan desain Figma.
- ✅ **Fully Responsive**: Tampilan optimal di semua perangkat, dari desktop hingga mobile.
- ✅ **Smooth Animations**: Animasi yang elegan dan beperforma tinggi menggunakan Framer Motion.
- ✅ **Clean Codebase**: Struktur proyek yang rapi dan mudah dikelola untuk skalabilitas.

---

## 🔧 Tech Stack

- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Linting**: ESLint

---

## 📂 Struktur Folder

Proyek ini diorganisir dengan pemisahan tugas (_separation of concerns_) yang jelas untuk memastikan kemudahan pemeliharaan dan skalabilitas:

- `src/app/sections/`: Berisi bagian-bagian utama halaman (misalnya, `HeroSection`, `AboutUsSection`).
- `src/app/layout/`: Menyimpan komponen layout global seperti `SiteHeader` (Desktop & Mobile).
- `src/app/components/ui/`: Menyimpan komponen UI kecil yang dapat digunakan kembali, terutama dari shadcn/ui (misalnya, `Button`, `Input`).
- `src/lib/`: Untuk logika bersama, _utilities_ (`utils.ts`), dan data statis terpusat (`data.ts`).
- `src/app/page.tsx`: Titik masuk yang merakit semua bagian menjadi satu halaman.

---

## 🚀 Memulai Proyek Lokal

Untuk menjalankan proyek ini di komputermu, ikuti langkah-langkah berikut:

1.  **Clone repositori:**

    ```bash
    git clone (https://github.com/rioanggoro/LifetimeArt-Tes/)
    cd LifetimeArt-Tes
    ```

2.  **Install dependensi:**

    ```bash
    npm install
    ```

3.  **Jalankan development server:**
    ```bash
    npm run dev
    ```

Buka `http://localhost:3000` di browser untuk melihat hasilnya.

---

## 💡 Pendekatan Animasi Mobile

Pendekatan saya untuk animasi mobile berpusat pada penciptaan pengalaman yang tidak hanya menarik secara visual tetapi juga lancar dan berperforma tinggi.

- **Viewport-Triggered Animations**: Animasi hanya dipicu saat komponen masuk ke _viewport_, menggunakan _hook_ `useInView` dari Framer Motion. Ini adalah pendekatan _performance-first_ untuk mencegah animasi berjalan di luar layar.

- **Declarative & Orchestrated Sequences**: Saya memanfaatkan `variants` dari Framer Motion untuk mendefinisikan status animasi (`hidden`, `visible`) dan `staggerChildren` untuk mengatur urutan kemunculan elemen. Ini menjaga JSX tetap bersih dan membuat animasi kompleks mudah dikelola.

- **Hybrid Animation Strategy (JS + CSS)**: Sementara Framer Motion digunakan untuk sebagian besar animasi berbasis _state_, saya memilih _keyframes_ CSS murni untuk efek _marquee_ yang berulang (misalnya, di bagian Testimonials). Ini adalah metode paling performan untuk animasi tak terbatas karena sepenuhnya dilepaskan dari _thread_ JavaScript.

- **Adaptive Components for Mobile UX**: Beberapa komponen mengubah model interaksinya di perangkat mobile. Misalnya, bagian "Our Work" dan "Testimonials" berubah dari daftar pasif atau _marquee_ di desktop menjadi _slider_ yang ramah sentuhan dan memiliki paginasi di mobile untuk pengalaman yang lebih intuitif.
