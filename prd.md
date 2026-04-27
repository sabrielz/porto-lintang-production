# Product Requirements Document (PRD) - Lintang Production (LP)

## 1. Ringkasan Eksekutif
Proyek ini adalah pembuatan *website landing page* *company profile* untuk **Lintang Production (LP)**, penyedia jasa vendor multimedia. Website ini bertujuan untuk *branding*, etalase portofolio B2B, dan *lead generation*. Proyek ini juga dirancang sebagai portofolio *fullstack web developer*, mengedepankan teknologi modern, efisiensi serverless, dan UI/UX tingkat lanjut.

## 2. Model Bisnis & Afiliasi
Website ini merepresentasikan tiga pilar layanan terintegrasi:
1.  **Lintang Production (LP):** Dokumentasi acara (foto/video), rekaman, dan *live streaming* (termasuk YouTube).
2.  **AM Lighting:** Penyedia jasa *lighting* panggung dan tata cahaya acara.
3.  **Vendor Videotron & Animasi:** Penyewaan videotron dan pembuatan aset video animasi visual.
*Semua entitas beroperasi dengan model B2B/Tender untuk acara indoor dan outdoor.*

## 3. Spesifikasi Teknis (Tech Stack)
Arsitektur dipilih untuk performa maksimal, *development* yang cepat (*vibe coding*), dan *hosting* gratis yang aman.
* **Framework:** Next.js (App Router) diinisialisasi via Antigravity.
* **Headless CMS:** Payload CMS (Terintegrasi langsung dengan Next.js, sangat *developer-friendly*).
* **Database:** Turso (Edge SQLite / libSQL) - Ideal untuk *serverless* dan sinkronisasi Payload.
* **Styling & UI:** Tailwind CSS, Aceternity UI / Magic UI (untuk komponen modern yang siap pakai).
* **Animasi:** Framer Motion (Transisi, Parallax) & React Three Fiber (Efek 3D minimalis).
* **Deployment:** Vercel atau Netlify.
* **Utilities:** `clsx`, `tailwind-merge`, Zod (Validasi), Lucide React (Ikon).

## 4. Konsep Desain & UI/UX (Premium & Tech-Savvy)
* **Tema:** *Dark Mode* dengan *Neon Accents*.
* **Palet Warna:** * Background: Hitam Pekat (`#09090B`).
    * Aksen Utama (LP/Video): Electric Blue (`#3B82F6`) / Magenta.
    * Aksen Sekunder (Lighting): Amber (`#F59E0B`).
* **Tipografi:** `Clash Display` atau `Syne` (Heading modern), `Inter` (Body).
* **Layout:** *Bento Grid* (bersudut melengkung, *glassmorphism*).
* **Interaksi:** *Smooth scrolling* (Lenis), *Hover glow effects*, *Reveal text*.

## 5. Struktur Halaman & Fitur (Single Page Application - SPA Vibe)

| Section | Deskripsi Fungsional & Visual | Teknologi Spesifik |
| :--- | :--- | :--- |
| **1. Hero Section** | Headline utama, CTA, dan impresi pertama yang kuat. | Aceternity *Spotlight* / R3F (Efek partikel debu cahaya) + Framer Motion (teks muncul perlahan). |
| **2. Partner Marquee** | Menampilkan logo AM Lighting & Vendor Videotron. | CSS *Infinite Scroll Animation* (Logo *grayscale* ke warna saat di-*hover*). |
| **3. The Trio Services** | Tiga kartu interaktif menjelaskan LP, AM Lighting, & Videotron. | *Bento Grid Layout*. Klik/Hover untuk ekspansi deskripsi singkat. |
| **4. Portfolio Grid** | Etalase karya/event (Foto & Video YouTube *embed*). | Integrasi CMS Payload. Filter kategori (Semua/Live/Lighting). *Masonry grid*. |
| **5. Stats & Experience** | Angka pencapaian (Jumlah event, Jam tayang, dll). | *Scroll-triggered counter* (Framer Motion). |
| **6. Social & Contact** | Tautan platform komunikasi (WA, IG, YouTube, dll). | Data diambil dari CMS (CRUD). Tampilan *floating card/dock* ikon. |
| **7. Developer Footer** | Logo LP, Copyright, dan *Developer Badge* ("Designed & Engineered by [Nama] - GitHub Repo"). | Link GitHub Portofolio. |

## 6. Skema Database (Payload CMS)
Dikelola melalui `/admin` dashboard.

* **`Portfolios` (Collection):**
    * `title` (Text), `slug` (Text), `category` (Select), `thumbnail` (Upload), `youtubeUrl` (Text), `description` (Rich Text), `eventDate` (Date).
* **`SocialMedia` (Collection):**
    * `platformName` (Text), `url` (Text), `iconName` (Text), `isActive` (Checkbox).
* **`Partners` (Collection):**
    * `name` (Text), `logo` (Upload), `websiteUrl` (Text).
* **`SiteSettings` (Global):**
    * `heroHeadline` (Text), `heroSubheadline` (Text), `githubRepoUrl` (Text).

## 7. Kebutuhan Non-Fungsional (Kinerja & Kualitas)
* **SEO:** Implementasi *Metadata* API Next.js, sitemap otomatis, *JSON-LD Structured Data* untuk profil bisnis.
* **Performa:** Skor Lighthouse > 90. Penggunaan `next/image` (WebP), dan *React Server Components* (RSC) untuk meminimalkan *bundle size*.
* **Keamanan:** Variabel lingkungan terenkripsi, proteksi rute API.
* **Responsif:** Tampilan optimal dari *smartphone* hingga monitor *ultrawide*.