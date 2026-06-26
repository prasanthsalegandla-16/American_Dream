# American Dream Interactive Sales Deck

A cinematic, browser-based sales deck for American Dream Mall in East Rutherford, New Jersey. The experience is designed as a non-linear pitch tool for retail tenants, corporate sponsors, and event partners, with section anchors, scroll-triggered reveals, animated stats, interactive retail modules, and luxury-grade visual pacing.

## Tech Stack

- Next.js 16 with App Router
- TypeScript
- Tailwind CSS with custom CSS variables
- Framer Motion
- Lucide React
- Native HTML5 video with YouTube fallback placeholder
- Google Fonts: Playfair Display and DM Sans
- Deployment target: Vercel

## Local Setup

```bash
npm install
npm run dev
```

Then open:

```bash
http://localhost:3000
```

For a production check:

```bash
npm run build
npm run start
```

## Folder Structure

```text
app/
  globals.css
  layout.tsx
  page.tsx
components/
  nav/
    GlobalNav.tsx
  sections/
    CTASection.tsx
    DiningSection.tsx
    EntertainmentSection.tsx
    EventsSection.tsx
    HeroSection.tsx
    LuxurySection.tsx
    RetailSection.tsx
    SalesDeck.tsx
    SponsorshipSection.tsx
    WhySection.tsx
  ui/
    CTAButton.tsx
    ModuleCard.tsx
    SectionWrapper.tsx
    StatCard.tsx
    VideoEmbed.tsx
lib/
  animations.ts
  constants.ts
```

## Swapping Real Assets

Hero video:

- Add a real MP4 to `public/american-dream-hero.mp4`.
- Add a poster image to `public/hero-poster.webp`.
- Update the fallback URL in `components/sections/HeroSection.tsx` from `https://www.youtube.com/embed/YOUR_VIDEO_ID` to the approved American Dream video.

Image placeholders:

- Current image surfaces are intentionally implemented as styled placeholder divs with gold labels.
- Replace them with `next/image` once final photography or rendered campaign imagery is approved.
- Keep explicit width, height, or responsive aspect ratio values to avoid layout shift.

Video placeholders:

- Replace placeholder panels with `VideoEmbed` or native video elements.
- Use poster images for all videos.
- Keep `loading="lazy"` on below-fold iframe embeds.

## AI Tools Used

- Midjourney would be used for temporary cinematic image exploration and moodboard-quality visual directions.
- Claude was referenced as the code-generation assistant in the requested project documentation context.
- Final implementation in this workspace was assembled as production-ready Next.js, TypeScript, Tailwind, and Framer Motion code.

## Known Limitations

- The hero video and event thumbnails use placeholder assets until official American Dream media is supplied.
- Tenant logos are text placeholders and should be replaced with approved brand assets.
- Sponsor metrics and occupancy claims should be validated against the latest leasing and partnership materials before external use.
- A full QA pass should include real-device testing on iOS Safari, Android Chrome, and presentation display resolutions.
- With more time, this could add presenter mode, keyboard navigation, downloadable leave-behind PDFs, analytics events, and a CMS-backed content layer.

## Deploying To Vercel

1. Push the project to a Git repository.
2. Import the repository in Vercel.
3. Use the default Next.js framework preset.
4. Confirm the build command is `npm run build`.
5. Confirm the output is managed by Next.js.
6. Add final media assets to `public/` or configure a remote image domain if assets are served from a CDN.
7. Deploy and run a Lighthouse pass on the production URL.

## Quality Checklist

- All sections are present and linked through navigation anchors.
- Desktop navigation uses a fixed vertical section rail.
- Mobile and tablet navigation use a full-screen menu.
- Stat cards animate on scroll-enter.
- Retail category pills crossfade the active panel.
- Brand ticker scrolls continuously.
- CTAs use accessible links and visible focus/hover states.
- Entertainment is dynamically imported.
- Build is verified with `npm run build`.
- Production dependencies are verified with `npm audit --omit=dev`.
