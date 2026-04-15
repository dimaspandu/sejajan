# Sejajan

Sejajan adalah aplikasi patungan jajan dengan frontend berbasis SolidStart. Project ini sedang bergerak dari struktur lama ke monorepo `apps/`, dengan fokus saat ini pada pengalaman frontend untuk eksplorasi patungan, detail patungan, dan komponen UI yang lebih rapi serta reusable.

## Status

- Versi rilis awal: `1.0.0`
- Frontend aktif berada di `apps/frontend`
- Backend berada di `apps/backend` dan masih tahap awal

## Struktur Project

```text
sejajan/
  apps/
    backend/
      master/        # Eksperimen service Go
      mono/          # Eksperimen service PHP
      transaction/   # Eksperimen service Node.js
    frontend/        # Aplikasi SolidStart
      public/
      src/
        components/
        routes/
        styles/
```

## Frontend Stack

- SolidStart
- SolidJS
- Vite
- Sass
- pnpm

## Frontend Highlights

- Landing page dengan hero section dan daftar patungan
- Halaman detail patungan dengan summary card dan daftar penyetor
- Struktur komponen makin modular dengan CSS Module
- Font default menggunakan `Nunito Sans`
- Styling sudah dimigrasikan ke unit `rem`

## Menjalankan Frontend

Masuk ke folder frontend:

```bash
cd apps/frontend
```

Install dependency:

```bash
pnpm install
```

Jalankan mode development:

```bash
pnpm run dev
```

Build production:

```bash
pnpm run build
```

Preview hasil build:

```bash
pnpm run preview
```

## Scripts Frontend

- `pnpm run dev` untuk menjalankan development server
- `pnpm run build` untuk build production
- `pnpm run preview` untuk preview hasil build
- `pnpm run format` untuk format file style di `src`

## Catatan Backend

Folder `apps/backend` saat ini belum menjadi sistem backend yang final. Isinya masih berupa beberapa pendekatan awal lintas bahasa untuk eksplorasi arsitektur dan implementasi service.

## Release

Rilis awal project didokumentasikan di `CHANGELOG.md` dengan tag `v1.0.0`.
