import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from 'lucide-react'

const services = [
  { label: 'House Cleaning', href: '/services#cleaning' },
  { label: 'Laundry', href: '/services#laundry' },
  { label: 'Meal Preparation', href: '/services#meals' },
  { label: 'Shopping Assistance', href: '/services#shopping' },
]

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About Us', href: '/about' },
  { label: 'Book a Service', href: '/book' },
]

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="section-container py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image src="/img/logo.png" alt="Li'A Home Services" width={40} height={40} className="rounded-xl" />
              <span className="font-bold text-white text-lg">Li&apos;A Home Services</span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Professional, licensed &amp; insured home services in Everett, MA. We keep your home spotless so you can focus on what matters.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-primary transition-colors"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-primary transition-colors"
              >
                <Facebook size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Our Services</h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+16462616917"
                  className="flex items-start gap-3 text-sm text-gray-400 hover:text-white transition-colors"
                >
                  <Phone size={15} className="mt-0.5 shrink-0 text-primary-light" />
                  (646) 261-6917
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@liahomeservices.com"
                  className="flex items-start gap-3 text-sm text-gray-400 hover:text-white transition-colors"
                >
                  <Mail size={15} className="mt-0.5 shrink-0 text-primary-light" />
                  info@liahomeservices.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin size={15} className="mt-0.5 shrink-0 text-primary-light" />
                Everett, MA 02149
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <Clock size={15} className="mt-0.5 shrink-0 text-primary-light" />
                <span>
                  Mon–Fri: 8 AM – 6 PM<br />
                  Sat: 9 AM – 4 PM
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="section-container py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Li&apos;A Home Services. All rights reserved.</p>
          <p>Licensed &amp; Insured · Serving Everett, MA &amp; Surrounding Areas</p>
        </div>
      </div>
    </footer>
  )
}
