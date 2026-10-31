# Thai Massage ENJOY – Website

Website for **Thai Massage ENJOY** in Bad Endorf, Germany. The landing page
keeps its single-page scroll experience, and the privacy policy lives on its
own route.

## Tech stack

- React 19 (Create React App)
- React Router for the landing page and the privacy policy route
- Tailwind CSS 3
- GSAP + ScrollTrigger for scroll reveals and parallax effects
- Self-hosted DM Sans and Cormorant Garamond fonts

## Routes

- `/` – landing page with all sections
- `/datenschutzerklärung` – privacy policy (Datenschutzerklärung)

## Requirements

- Node.js 18 or newer
- npm

## Local development

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000). The page reloads when you
edit source files.

## Production build

```bash
npm run build
```

The optimized static site is written to `build/`. To preview it locally:

```bash
npx serve -s build
```

## Deployment

The build is a static site. Deploy the `build/` directory to any static host
(Netlify, Vercel, Cloudflare Pages, GitHub Pages, a classic web host, etc.).

Typical settings:

- **Build command:** `npm run build`
- **Publish directory:** `build`
- **Node version:** 18 or newer

`homepage` is set to `"."` in `package.json`, so the generated asset paths are
relative and work both at a domain root and under a subpath.

### SPA fallback for deep links

Because the site uses `BrowserRouter`, a direct request to
`/datenschutzerklärung` must return `index.html`. The build includes:

- `public/.htaccess` for Apache/IONOS hosting (copied to `build/.htaccess`)
- `public/_redirects` for Netlify (copied to `build/_redirects`)

For other hosts, configure a rewrite of all unknown paths to `/index.html`
with status 200. The `.htaccess` assumes deployment at the domain root; adjust
`RewriteBase` and the trailing-slash redirect when deploying under a subpath.

### Before going live

- Replace the relative Open Graph/Twitter image URL in `public/index.html`
  with an absolute URL once the final domain is known, and add `og:url` plus a
  canonical link.
- Review the **Datenschutzerklärung** on `/datenschutzerklärung` and confirm
  that its contact details match the Impressum. See the legal section below.

## Content

- Navigation, services, prices, packages, and gift cards:
  `src/data/siteData.js`
- Contact and Impressum: `src/components/Contact.jsx`
- Landing page composition: `src/pages/Home.jsx`
- Privacy policy: `src/pages/Datenschutz.jsx`
- Shared layout, navigation, and footer: `src/components/Layout.jsx`,
  `src/components/Navbar.jsx`, `src/components/Footer.jsx`
- Page sections: `src/components/`
- Shared buttons, sections, and cards: `src/components/ui/`
- Global styles: `src/index.css`
- Font faces: `src/fonts.css`

## Assets

- Optimized site images: `public/assets/`
- Brand icons: `public/logo192.png`, `public/logo512.png`,
  `public/apple-touch-icon.png`, `public/favicon.svg`,
  `public/favicon-32.png`
- Open Graph image: `public/assets/og-image.jpg`
- High-resolution source images and unused design assets: `design-assets/`
  (not included in the production build)

## Fonts

DM Sans and Cormorant Garamond are self-hosted from `src/fonts/` and licensed
under the SIL Open Font License 1.1. See `src/fonts/README.md` for attribution.

## Legal

The Impressum is included in the contact section. The
**Datenschutzerklärung** is available at `/datenschutzerklärung` and is linked
from the footer.

Before publishing, have the privacy policy reviewed and confirm that its
contact data matches the Impressum. The privacy text currently supplied for the
page uses slightly different details than the contact section (address,
telephone number, and email address), so those differences must be resolved by
the site owner.

The site itself does not use cookies, analytics, or tracking scripts. Fonts are
self-hosted, so opening the site does not contact Google Fonts. The Google Maps
link is a normal external link, not an embedded map.
