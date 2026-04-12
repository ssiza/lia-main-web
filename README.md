# Li'A Home Services — Next.js Website

Modern, SEO-optimized business website for Li'A Home Services built with **Next.js 16**, **React 19**, **TypeScript**, and **Tailwind CSS**.

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, services, testimonials, FAQ, CTA |
| `/services` | Full service detail pages |
| `/about` | About + contact info + map |
| `/book` | Multi-step booking form with email notification |
| `/api/book` | Server-side API route — sends emails via Resend |
| `/sitemap.xml` | Auto-generated XML sitemap |
| `/robots.txt` | Auto-generated robots.txt |

---

## Local Development

```bash
npm install
npm run dev
# → http://localhost:3000
```

---

## Email Setup (Required for bookings)

Booking emails are sent via **[Resend](https://resend.com)** (free tier available).

### 1. Sign up at resend.com and get an API key

### 2. Copy the env example file

```bash
cp .env.local.example .env.local
```

### 3. Fill in your values

```env
RESEND_API_KEY=re_your_key_here
NOTIFICATION_EMAIL=support@liahomeservices.com
FROM_EMAIL=onboarding@resend.dev        # or bookings@liahomeservices.com after domain verification
NEXT_PUBLIC_SITE_URL=https://liahomeservices.com
```

> **Free tier note:** On Resend's free tier, use `onboarding@resend.dev` as the `FROM_EMAIL`.
> To send from `bookings@liahomeservices.com`, verify your domain in the Resend dashboard.

---

## Deploy to Vercel

### 1. Push to GitHub
```bash
git add .
git commit -m "Next.js rebuild"
git push
```

### 2. Import on Vercel
1. Go to [vercel.com](https://vercel.com) → **Add New Project**
2. Import your GitHub repo
3. Framework will be **auto-detected** as Next.js
4. Click **Deploy**

### 3. Add Environment Variables on Vercel
In your Vercel project → **Settings → Environment Variables**, add:

| Key | Value |
|-----|-------|
| `RESEND_API_KEY` | Your Resend API key |
| `NOTIFICATION_EMAIL` | `support@liahomeservices.com` |
| `FROM_EMAIL` | `onboarding@resend.dev` (or verified domain) |
| `NEXT_PUBLIC_SITE_URL` | `https://yourdomain.com` |

### 4. Custom Domain
In Vercel → **Settings → Domains**, add `liahomeservices.com`.

---

## Project Structure

```
app/
  layout.tsx          ← Root layout, SEO metadata
  globals.css         ← Tailwind base styles + component classes
  page.tsx            ← Home page
  about/page.tsx      ← About page
  services/page.tsx   ← Services page
  book/page.tsx       ← Booking page
  api/book/route.ts   ← Email API (Resend)
  sitemap.ts          ← Auto sitemap
  robots.ts           ← Auto robots.txt

components/
  Header.tsx          ← Sticky nav with mobile menu
  Footer.tsx          ← Footer with links + contact
  BookingForm.tsx     ← 3-step booking form (client component)

public/
  img/                ← All business images + favicons
```

---

## Tech Stack

- **Next.js 16** (App Router + Turbopack)
- **React 19**
- **TypeScript**
- **Tailwind CSS 3**
- **Resend** (transactional email)
- **Lucide React** (icons)
- **Vercel** (hosting)
