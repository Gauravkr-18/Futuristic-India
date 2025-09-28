# India 2047 — A Vision for the Future

A static, multi-page, informative website that visualises a concept project called "India 2047" — showcasing India's journey from 1947 to a possible future in 2047. The site is built with plain HTML, CSS and JavaScript and uses GSAP (via CDN) for scroll animations.

## Preview

- Open `index.html` in your browser to view the site locally.

## Features

- Multi-section landing page with timeline, farming, space vision and future vision sections.
- Additional pages: `future-space.html`, `space.html`, `futuristic-farming.html`, and `memories.html`.
- Image gallery (memories) with a simple lightbox.
- Animated sections and graphs using simple CSS/JS and GSAP (loaded from CDN).
- Responsive layout with a mobile navigation fallback.

## Technologies

- HTML5
- CSS3
- JavaScript (vanilla) + GSAP ScrollTrigger (CDN)

## Project structure (key files)

- `index.html` — main landing page
- `future-space.html`, `space.html`, `futuristic-farming.html`, `memories.html` — additional pages
- `styles.css` — primary stylesheet used by the main site
- `script.js` — main JavaScript (animation, slider, interactions)
- several images / gifs used as visual content (e.g. `Smart Cities.jpg`, `farming.jpg`, `space.jpg`, `memory*.jpeg`)

Note: Some HTML pages reference other stylesheet filenames such as `india2047.css`, `space.css`, `farming.css`, and `memories.css`. Those files are not required for the site to work (styles are inlined in those pages) but you may consolidate styles into dedicated CSS files for better maintainability.

## How to run locally

1. Clone or copy the repository to your machine.
2. Open the project folder and open `index.html` with your browser.

On Windows PowerShell you can run:

```powershell
# open the default browser with the main page
Start-Process -FilePath "index.html"
```

Or simply right-click `index.html` and choose "Open with" → your browser.

