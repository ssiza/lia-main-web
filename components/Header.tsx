'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
]

export default function Header() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const syncMenu = () => {
      if (mq.matches) setMenuOpen(false)
    }
    syncMenu()
    mq.addEventListener('change', syncMenu)
    return () => mq.removeEventListener('change', syncMenu)
  }, [])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100'
          : 'bg-transparent'
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between min-h-[4.5rem] py-4">
          {/* Logo */}
          <Link href="/" prefetch={false} className="flex items-center gap-3 shrink-0">
            <Image
              src="/img/logo.png"
              alt="Li'A Home Services"
              width={44}
              height={44}
              className="rounded-xl"
              priority
            />
            <span
              className={`font-bold text-lg transition-colors duration-300 ${
                scrolled ? 'text-gray-900' : 'text-white'
              }`}
            >
              Li&apos;A Home Services
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                prefetch={false}
                className={`font-medium transition-colors duration-200 hover:text-primary ${
                  scrolled ? 'text-gray-700' : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+16462616917"
              className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                scrolled ? 'text-gray-600 hover:text-primary' : 'text-white/80 hover:text-white'
              }`}
            >
              <Phone size={15} />
              (646) 261-6917
            </a>
            <Link href="/book" prefetch={false} className="btn-primary text-sm px-5 py-2.5">
              Book Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <nav className="section-container py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                prefetch={false}
                className="px-4 py-3 text-gray-700 font-medium rounded-xl hover:bg-primary-50 hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 pt-3 border-t border-gray-100 flex flex-col gap-2">
              <a
                href="tel:+16462616917"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-2 px-4 py-3 text-gray-600 font-medium rounded-xl hover:bg-gray-50"
              >
                <Phone size={16} />
                (646) 261-6917
              </a>
              <Link
                href="/book"
                prefetch={false}
                className="btn-primary text-center"
              >
                Book Now
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
