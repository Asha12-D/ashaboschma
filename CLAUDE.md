# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Website van Asha Boschma: **https://www.ashaboschma.nl**. Communiceer in het Nederlands.

## Commands

```bash
npm run setup   # installeer + start dev-server (eerste keer)
npm run dev     # start dev-server op localhost:3000
npm run build   # productie-build
```

Preview in de Claude-app: `.claude/launch.json` → `ashaboschma-dev` (poort 3002).

## Stack en hosting

Next.js 15 / React 19 / TypeScript / Tailwind CSS v4 (App Router).

- **GitHub:** Asha12-D/ashaboschma. Elke push naar `main` gaat automatisch live via Vercel (project `ashaboschma`, Hobby). Commit en push alleen na akkoord van Asha.
- **Domein/DNS:** bij Vimexx. `@` A-record → Vercel (`216.198.79.1`, stuurt door naar www), `www` CNAME → Vercel.
- **Mail (info@ashaboschma.nl)** draait op de Vimexx-hosting. Laat bij DNS-wijzigingen de records voor MX, `mail`, `smtp`, `pop`, SPF/DKIM/DMARC, `checkout` (Plug&Pay) en de ActiveCampaign-domainkeys ongemoeid.
- Dit project staat los van Thuishaven (thuishavendeventer.nl, repo Asha12-D/thuishaven). Daar niets aan wijzigen vanuit dit project.

## Pagina's

| Route | Status |
|---|---|
| `/` , `/over-mij`, `/contact` | Tijdelijk: `components/ComingSoon.tsx` ("Hier wordt gewerkt!") |
| `/aanbod` | Overzicht met een kaart naar De Idealen Koers |
| `/aanbod/de-idealen-koers` | Landingspagina De Idealen Koers (6-wekenprogramma in Deventer, wachtlijst via mail) |

`app/aanbod/de-idealen-koers/layout.tsx` voegt alleen op die pagina de gele wachtlijstbalk en het handschrift-lettertype (Caveat, `--font-handschrift`) toe. De pagina heeft eigen metadata (canonical en og:url naar `/aanbod/de-idealen-koers`); `metadataBase` staat in `app/layout.tsx`.

## Structuur

- `app/globals.css` — huisstijl (geldt voor de hele site): kleuren, Larken-koppen, hero, knoppen, twee-kolom, parallax-banner
- `app/layout.tsx` — sitebrede metadata, Header en Footer
- `components/Header.tsx` — naam "Asha Boschma" + navigatie (Home, Over mij, Aanbod, Contact), met mobiel menu
- `components/Footer.tsx` — copyright + mailadres
- `components/ComingSoon.tsx` — tijdelijke inhoud voor pagina's die nog niet af zijn
- `components/AutoPlayVideo.tsx` — video die speelt zodra hij in beeld komt
- `components/ScrollReveal.tsx` — scroll-animaties (zie hieronder)
- `lib/links.ts` — `CONTACT_EMAIL` (info@ashaboschma.nl) en `WACHTLIJST_URL` (mailto); gebruik deze i.p.v. losse adressen
- `public/fotos/web/` — geoptimaliseerde foto's, video en OG-afbeelding van De Idealen Koers
- `public/fotos/portret.jpg` — hero-achtergrond van De Idealen Koers
- `public/fonts/Larken/` — Larken (variabel lettertype wordt gebruikt)
- `foto's/` — niet gecommit; bronfoto's van Asha (o.a. profielfoto). Verklein een foto eerst voordat hij in `public/fotos/` komt.

## Huisstijl

Kleuren in `@theme` in `app/globals.css`, te gebruiken als Tailwind-utilities (`bg-primair`, `text-tekst`, enz.):

| Naam | Kleur | Gebruik |
|---|---|---|
| `primair` | `#b26135` | terracotta: koppen, knoppen, vlakken |
| `achtergrond` | `#faf8ef` | pagina-achtergrond |
| `tekst` | `#414141` | lopende tekst |
| `accent` | `#E4FF1A` | limoen: opvallende knoppen op donker vlak (niet als tekstkleur op licht) |
| `mosterd` | `#E0A526` | wachtlijstbalk, details |
| `secundair-kleur` | `#99a890` | saliegroen: vinkjes, tweede knoppen |
| `wit` | `#ffffff` | |

Lettertypes: `font-koppen` (Larken; `h1` krijgt dit automatisch) en Inter voor tekst.

## CSS-patronen in globals.css

### Hero met foto
```tsx
<div className="hero-section" style={{ backgroundImage: "url('/fotos/portret.jpg')" }}>
  <div className="hero-overlay">
    <h1 className="text-white ...">Headline</h1>
    <a href="#meer" className="hero-btn-outline">Lees meer</a>
    <a href="/aanbod" className="hero-btn">Bekijk mijn aanbod</a>
  </div>
</div>
```
Ontbreekt de foto? De achtergrond valt automatisch terug op `--color-primair`.

### Twee kolommen (foto naast tekst)
```tsx
<div className="two-col">           {/* of: two-col flip voor foto links */}
  <div className="col-text">
    <h2>...</h2>
    <p>...</p>
  </div>
  <div className="col-image">
    <img src="/fotos/web/2.jpg" alt="..." />
  </div>
</div>
```

### Parallax-banner
```tsx
<div className="parallax-banner" style={{ backgroundImage: "url('/fotos/web/banner.jpg')" }} role="img" aria-label="..." />
```

### Scroll-animaties
Voeg `className="reveal"` toe aan elk element dat moet infaden. Voor een lijst die item voor item verschijnt: geef de lijst een id. Zet `ScrollReveal` onderaan de pagina:
```tsx
import ScrollReveal from '@/components/ScrollReveal';

<ScrollReveal singles={['.reveal']} grids={['#mijn-lijst']} />
```
