# AiWeeb

Static site untuk Nebula — bot Discord. Dibangun dengan [Astro](https://astro.build) dan di-deploy ke [Firebase Hosting](https://firebase.google.com/docs/hosting).

## Perintah

```sh
npm install        # install dependencies
npm run dev        # development server
npm run build      # build statis ke dist/
npm run preview    # pratinjau hasil build
npm run typecheck  # cek tipe TypeScript (tsc --noEmit)
npm run lint       # lint dengan Biome
```

## Deploy ke Firebase Hosting

### Otomatis (GitHub Actions)

Workflow `.github/workflows/firebase.yml` menjalankan `typecheck` → `lint` → `build` lalu deploy ke channel `live` setiap push ke `main`.

Siapkan tiga secrets di repository:

| Secret | Deskripsi |
| --- | --- |
| `FIREBASE_SERVICE_ACCOUNT` | Service account key JSON (Roles: `Firebase Admin`, `Firebase Hosting Admin`) |
| `FIREBASE_PROJECT_ID` | Project ID Firebase Hosting (contoh: `nebulabot`) |
| `GITHUB_TOKEN` | Otomatis disediakan GitHub — tidak perlu diisi |

### Manual (Firebase CLI)

```sh
npm i -g firebase-tools
firebase login
firebase deploy --only hosting --project <FIREBASE_PROJECT_ID>
```

Konfigurasi hosting ada di `firebase.json` (`public: "dist"`, `cleanUrls`, caching immutable untuk `_astro/**`). Script `predeploy` tidak dipakai — build dijalankan eksplisit di CI agar hasilnya terjamin fresh.