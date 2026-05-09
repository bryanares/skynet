'use client'

// TODO: Replace with NextAuth.js + Google OAuth in Phase 2
// See /app/api/auth/[...nextauth]/route.ts for the scaffolded provider

import { useState } from 'react'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/REPLACE_WITH_YOUR_LOGIN_FORM_ID'

interface LoginModalProps {
  onClose: () => void
}

export default function LoginModal({ onClose }: LoginModalProps) {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...formData, _subject: 'SKYNET: New Account Request' }),
      })
      if (res.ok) {
        setSubmitted(true)
      } else {
        setError('Something went wrong. Please try again.')
      }
    } catch {
      setError('Network error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md animate-scale-in">
        <div className="flex items-center justify-between p-6 border-b border-brand-border">
          <h2 className="text-lg font-bold text-brand-text-primary">Create Account / Login</h2>
          <button
            onClick={onClose}
            className="p-1.5 rounded-md text-brand-text-secondary hover:bg-gray-100 transition-colors"
            aria-label="Close"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-6">
          {submitted ? (
            <div className="text-center py-6 space-y-3">
              <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-7 h-7 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="font-bold text-brand-text-primary">You&apos;re on the list!</p>
              <p className="text-sm text-brand-text-secondary">We&apos;ll reach out to set up your account shortly.</p>
              <button
                onClick={onClose}
                className="mt-4 bg-brand-orange hover:bg-brand-orange-dark text-white font-bold px-6 py-2.5 rounded-md text-sm transition-colors"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-sm text-brand-text-secondary">
                Enter your details and our team will set up your account.
              </p>

              <div>
                <label htmlFor="login-name" className="block text-sm font-semibold text-brand-text-primary mb-1">
                  Full Name <span className="text-brand-orange">*</span>
                </label>
                <input
                  id="login-name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Kamau"
                  className="w-full border border-brand-border rounded-md px-3 py-2.5 text-sm text-brand-text-primary placeholder:text-brand-text-secondary focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition"
                />
              </div>

              <div>
                <label htmlFor="login-phone" className="block text-sm font-semibold text-brand-text-primary mb-1">
                  Phone Number <span className="text-brand-orange">*</span>
                </label>
                <input
                  id="login-phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="0712 345 678"
                  className="w-full border border-brand-border rounded-md px-3 py-2.5 text-sm text-brand-text-primary placeholder:text-brand-text-secondary focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition"
                />
              </div>

              <div>
                <label htmlFor="login-email" className="block text-sm font-semibold text-brand-text-primary mb-1">
                  Email Address
                </label>
                <input
                  id="login-email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full border border-brand-border rounded-md px-3 py-2.5 text-sm text-brand-text-primary placeholder:text-brand-text-secondary focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition"
                />
              </div>

              {error && (
                <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-md px-3 py-2">{error}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-brand-orange hover:bg-brand-orange-dark disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-3 rounded-md text-sm transition-colors"
              >
                {loading ? 'Submitting…' : 'Create Account'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
