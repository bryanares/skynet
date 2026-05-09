'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import SkynetLogo from './SkynetLogo'
import LoginModal from './LoginModal'

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/packages', label: 'Packages' },
  { href: '/get-connected', label: 'Get Connected' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [loginOpen, setLoginOpen] = useState(false)

  return (
    <>
      <nav className="sticky top-0 z-50 bg-brand-blue shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 flex-shrink-0">
              <SkynetLogo />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-md text-sm font-semibold transition-colors ${
                    pathname === link.href
                      ? 'bg-white/20 text-white'
                      : 'text-blue-100 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={() => setLoginOpen(true)}
                className="text-sm font-semibold text-blue-100 hover:text-white transition-colors"
              >
                Login
              </button>
              <Link
                href="/get-connected"
                className="bg-brand-orange hover:bg-brand-orange-dark text-white text-sm font-bold px-5 py-2 rounded-md transition-colors"
              >
                Get Connected
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-md text-blue-100 hover:text-white hover:bg-white/10 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-blue-700 bg-brand-blue">
            <div className="px-4 py-3 space-y-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-sm font-semibold transition-colors ${
                    pathname === link.href
                      ? 'bg-white/20 text-white'
                      : 'text-blue-100 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2 pb-1 space-y-2">
                <button
                  onClick={() => { setLoginOpen(true); setMenuOpen(false) }}
                  className="block w-full text-left px-3 py-2 text-sm font-semibold text-blue-100 hover:text-white"
                >
                  Login / Create Account
                </button>
                <Link
                  href="/get-connected"
                  onClick={() => setMenuOpen(false)}
                  className="block bg-brand-orange hover:bg-brand-orange-dark text-white text-sm font-bold px-4 py-2.5 rounded-md text-center transition-colors"
                >
                  Get Connected
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {loginOpen && <LoginModal onClose={() => setLoginOpen(false)} />}
    </>
  )
}
