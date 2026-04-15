# Sejajan

Sejajan is a group-buying application for shared snack and food orders, with a SolidStart-based frontend. The project is currently transitioning from the older `app/` structure to the newer `apps/` monorepo layout, with the current focus on frontend experience, reusable UI components, and a cleaner project organization.

## Status

- Initial release version: `1.0.0`
- Active frontend application: `apps/frontend`
- Backend workspace: `apps/backend`

## Project Structure

```text
sejajan/
  apps/
    backend/
      master/        # Early Go service experiment
      mono/          # Early PHP service experiment
      transaction/   # Early Node.js service experiment
    frontend/        # SolidStart frontend application
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

- Home page with a hero section and patungan listing
- Patungan detail page with a summary card and contributor list
- Modular component structure with colocated CSS Modules
- Default interface font set to `Nunito Sans`
- Styling migrated to `rem`-based sizing for better consistency

## Running the Frontend

Move into the frontend app:

```bash
cd apps/frontend
```

Install dependencies:

```bash
pnpm install
```

Start the development server:

```bash
pnpm run dev
```

Build for production:

```bash
pnpm run build
```

Preview the production build:

```bash
pnpm run preview
```

## Frontend Scripts

- `pnpm run dev` starts the development server
- `pnpm run build` builds the frontend for production
- `pnpm run preview` previews the production build
- `pnpm run format` formats style files inside `src`

## Backend Notes

The `apps/backend` directory is not yet a finalized backend system. It currently contains a few early implementation experiments across multiple languages while the project direction is still being shaped.

## Release Notes

The first documented release is recorded in `CHANGELOG.md` under tag `v1.0.0`.
