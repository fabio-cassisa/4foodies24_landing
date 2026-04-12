# 4foodies

landing page for a food-tech brand based in Turin, Italy.

## context

4Foodies is a real food startup — pizza, poke, burger, pasta — that's been evolving since 2021. I've handled everything from brand identity to web presence: logo, brand guidelines, mobile app prototypes in Figma, and this landing page. the web stack shifted over the years from WordPress → custom PHP → Next.js as the project grew.

this repo is the Next.js landing page. it's a work-in-progress — the core sections are built and the layout patterns work, but the full content isn't in yet. shipping it honest rather than half-faking it.

## what works

- **hero slider** — auto-rotating 3-slide hero with Italian copy, 4s interval
- **sticky pill nav** — Framer Motion animated header, frosted glass effect, smooth scroll anchors
- **featured products** — horizontal-scroll product grid with hover rotate animation, 9 items from data layer
- **menu sections** — alternating image/text layout for Poke and Pizza categories
- **notification banner** — promotional strip with discount CTA
- **responsive** — mobile-first layout with Tailwind breakpoints (sm/md/lg/xl/2xl)
- **SEO basics** — proper Italian metadata, semantic HTML, accessible alt tags

## what's not done yet

- menu section copy is still lorem ipsum (layout is real, text isn't)
- product images are placeholders in `/public/temporary/`
- no about section or offers page
- no online ordering flow (buttons are static)
- no backend or CMS — all data is hardcoded in `data.ts`

## stack

`next.js 14` · `react 18` · `typescript` · `tailwind css` · `framer motion`

## structure

```
src/
├── app/
│   ├── layout.tsx      # root layout, Inter font, header + footer
│   ├── page.tsx        # home — slider, featured, menu composition
│   └── globals.css     # tailwind directives + no-scrollbar utility
├── components/
│   ├── Slider.tsx      # auto-rotating hero with slide data
│   ├── HeaderPill.tsx  # sticky pill nav with framer motion
│   ├── Featured.tsx    # horizontal scroll product grid
│   ├── Menu.tsx        # alternating image/text sections
│   ├── Notification.tsx # promotional banner
│   └── Footer.tsx      # simple footer with Italian copy
└── lib/
    └── data.ts         # product data layer (typed)
```

## run locally

```bash
npm install
npm run dev
```

## roadmap

- [ ] replace placeholder images with final food photography
- [ ] write real Italian copy for menu sections
- [ ] add about section with brand story
- [ ] add offers/promotions page
- [ ] connect to a headless CMS (Sanity or Strapi) for menu management
- [ ] deploy to Vercel with custom domain
- [ ] add online ordering flow or delivery partner integration

---

<sub>brand, design, and code by [fabio cassisa](https://github.com/fabio-cassisa)</sub>
