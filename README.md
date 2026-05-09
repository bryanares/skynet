# SKYNET — ISP Website

A production-ready Next.js 14 website for **SKYNET**, a Nairobi-based Internet Service Provider. Lead generation focused, mobile-first, deployable to Vercel in minutes.

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS |
| Forms | Formspree |
| Auth (Phase 2) | NextAuth.js + Google OAuth |
| Deployment | Vercel |
| Language | TypeScript |
| Font | Plus Jakarta Sans (Google Fonts) |

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure Formspree

1. Create a free account at [formspree.io](https://formspree.io/)
2. Create two forms: **Installation Request** and **Login / Account**
3. Replace the placeholder IDs in:
   - `components/GetConnectedForm.tsx` — `REPLACE_WITH_YOUR_FORM_ID`
   - `components/LoginModal.tsx` — `REPLACE_WITH_YOUR_LOGIN_FORM_ID`

### 3. Run locally

```bash
npm run dev
# → http://localhost:3000
```

### 4. Build for production

```bash
npm run build
npm start
```

---

## Deploying to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Login & deploy
vercel

# Production deploy
vercel --prod
```

Or simply connect your GitHub repo in the [Vercel dashboard](https://vercel.com/new) — auto-deploys on every push.

---

## Project Structure

```
skynet/
├── app/
│   ├── layout.tsx              # Root layout (Navbar + Footer)
│   ├── page.tsx                # Home page (/)
│   ├── packages/page.tsx       # Packages page (/packages)
│   ├── get-connected/page.tsx  # Lead form page (/get-connected)
│   ├── api/auth/[...nextauth]/ # Phase 2 NextAuth scaffold
│   └── globals.css             # Global styles + font import
├── components/
│   ├── Navbar.tsx              # Sticky nav with mobile menu
│   ├── Footer.tsx              # Footer with contact info
│   ├── SkynetLogo.tsx          # SVG logo (WiFi arc + wordmark)
│   ├── LoginModal.tsx          # Phase 1 Formspree login modal
│   ├── PackageCard.tsx         # Reusable pricing card
│   ├── ComparisonCard.tsx      # SKYNET vs Others comparison
│   ├── GetConnectedForm.tsx    # Full lead capture form
│   ├── LocationSelect.tsx      # Dynamic Region/Location dropdowns
│   └── ThankYou.tsx            # Post-submission success screen
├── lib/
│   └── locations.ts            # Data-driven regions & locations config
├── .env.example                # Environment variable template
├── vercel.json                 # Vercel deployment config
└── README.md
```

---

## Adding New Regions & Locations

Open `lib/locations.ts` and add entries to the `LOCATIONS` object — no other code changes needed:

```typescript
export const LOCATIONS = {
  Nairobi: ['Westlands', 'Upperhill', 'Karen', 'Thika Road'],
  Mombasa: ['Nyali', 'Bamburi', 'Shanzu', 'Likoni'],   // ← add here
  Nakuru:  ['Milimani', 'Section 58', 'Lanet'],         // ← and here
}
```

---

## Brand Guidelines

| Token | Value |
|---|---|
| Primary (Orange) | `#F97316` |
| Secondary (Blue) | `#2563EB` |
| Background | `#F9FAFB` |
| Surface | `#FFFFFF` |
| Text Primary | `#111827` |
| Text Secondary | `#6B7280` |
| Border | `#E5E7EB` |
| Font | Plus Jakarta Sans |

Rules: **No gradients. No purple. Solid flat colors only.**

---

## Phase 2: NextAuth Setup

When ready to activate Google OAuth:

1. Create a Google OAuth app in [Google Cloud Console](https://console.cloud.google.com/)
2. Add credentials to `.env.local`:
   ```
   NEXTAUTH_SECRET=<generated>
   NEXTAUTH_URL=https://skynet.co.ke
   GOOGLE_CLIENT_ID=<your-id>
   GOOGLE_CLIENT_SECRET=<your-secret>
   ```
3. Uncomment the provider code in `app/api/auth/[...nextauth]/route.ts`
4. Update `LoginModal.tsx` to use `signIn('google')` from `next-auth/react`

---

## Contact

**Phone:** 0791 053 188  
**Email:** info@skynet.co.ke  
**Location:** Nairobi, Kenya

© 2025 SKYNET
