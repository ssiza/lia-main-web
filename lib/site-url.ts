/**
 * NEXT_PUBLIC_SITE_URL must be usable with `new URL()` (absolute URL with scheme).
 * Accepts values like "https://example.com" or "www.example.com".
 */
export function getSiteUrl(): string {
  const raw =
    process.env.NEXT_PUBLIC_SITE_URL?.trim() || 'https://liahomeservices.com'
  if (/^https?:\/\//i.test(raw)) return raw
  return `https://${raw.replace(/^\/+/, '')}`
}
