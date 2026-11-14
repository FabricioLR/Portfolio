# SEO report improvements

- [x] Improve title, description, canonical URL, social URL, and structured data.
- [x] Include existing portfolio content and links in the initial HTML for crawlers.
- [x] Add a sitemap and improve image loading and production minification.
- [x] Verify English/Portuguese navigation and SEO output; document hosting-only limitations.

## External limitations

- Image cache/expiry headers require changes at the live hosting service; Lovable does not process hosting-specific header configuration files.
- No custom social preview image was added because no absolute HTTPS image URL was supplied; Lovable hosting supplies its preview automatically.
- The deployed bundle is already compact; explicit production minification is configured, but the report's warning is not a verified minification failure.
- Publish/deploy these changes and rerun the report to obtain a new score; the existing live website has not been changed by editing the preview.