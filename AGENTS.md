# Project conventions

- Generate crawler-readable initial HTML through the Vite HTML transform from the same translation and project-link data as React; this keeps the static portfolio discoverable without duplicating its copy.
- Keep project destinations and technology tags in the shared project data module; both the React gallery and initial HTML must use the same records.
- Let React replace the initial HTML rather than hydrate it; the lightweight no-JavaScript content intentionally differs from the animated interactive layout.
- Hide only the initial fallback wrapper using an inline head script and style in JavaScript-enabled browsers; this prevents unformatted startup flashes while preserving no-JavaScript content and letting React reveal its own layout naturally.
- Derive inline startup theme tokens from global CSS and style the static fallback separately; this avoids white startup frames and keeps content readable when JavaScript is disabled or fails to load.