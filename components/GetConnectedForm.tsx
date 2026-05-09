'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import LocationSelect from './LocationSelect'
import ThankYou from './ThankYou'

// Replace this with your actual Formspree form ID
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/REPLACE_WITH_YOUR_FORM_ID'

type HouseType = 'Apartment' | 'Home' | 'Office'
type PackageType = 'Lite' | 'Standard' | 'Premium'

interface FormState {
  name: string
  phone: string
  email: string
  region: string
  location: string
  houseType: HouseType
  package: PackageType
  message: string
}

interface FormErrors {
  name?: string
  phone?: string
  region?: string
  location?: string
}

const HOUSE_TYPES: HouseType[] = ['Apartment', 'Home', 'Office']
const PACKAGES: { value: PackageType; price: string; speed: string }[] = [
  { value: 'Lite', price: 'KES 1,500/mo', speed: '15 Mbps' },
  { value: 'Standard', price: 'KES 2,000/mo', speed: '25 Mbps' },
  { value: 'Premium', price: 'KES 3,000/mo', speed: '35 Mbps' },
]

export default function GetConnectedForm() {
  const searchParams = useSearchParams()
  const preselectedPackage = searchParams.get('package') as PackageType | null

  const defaultForm: FormState = {
    name: '',
    phone: '',
    email: '',
    region: '',
    location: '',
    houseType: 'Apartment',
    package: preselectedPackage && ['Lite', 'Standard', 'Premium'].includes(preselectedPackage)
      ? preselectedPackage
      : 'Standard',
    message: '',
  }

  const [form, setForm] = useState<FormState>(defaultForm)
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [serverError, setServerError] = useState('')

  useEffect(() => {
    if (preselectedPackage && ['Lite', 'Standard', 'Premium'].includes(preselectedPackage)) {
      setForm((prev) => ({ ...prev, package: preselectedPackage as PackageType }))
    }
  }, [preselectedPackage])

  const validate = (): boolean => {
    const newErrors: FormErrors = {}
    if (!form.name.trim()) newErrors.name = 'Full name is required.'
    if (!form.phone.trim()) newErrors.phone = 'Phone number is required.'
    if (!form.region) newErrors.region = 'Please select a region.'
    if (!form.location) newErrors.location = 'Please select a location.'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setLoading(true)
    setServerError('')

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          email: form.email || 'Not provided',
          region: form.region,
          location: form.location,
          houseType: form.houseType,
          package: form.package,
          message: form.message || 'No additional message.',
          _subject: `SKYNET Installation Request — ${form.name} (${form.package})`,
        }),
      })

      if (res.ok) {
        setSubmitted(true)
      } else {
        const data = await res.json()
        setServerError(data?.error || 'Something went wrong. Please try again.')
      }
    } catch {
      setServerError('Network error. Please check your connection and try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleReset = () => {
    setForm(defaultForm)
    setErrors({})
    setServerError('')
    setSubmitted(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (submitted) return <ThankYou onReset={handleReset} />

  const inputClass = (error?: string) =>
    `w-full border rounded-md px-3 py-2.5 text-sm text-brand-text-primary placeholder:text-brand-text-secondary focus:outline-none focus:ring-1 transition ${
      error
        ? 'border-red-400 focus:border-red-400 focus:ring-red-400'
        : 'border-brand-border focus:border-brand-blue focus:ring-brand-blue'
    }`

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {/* Name + Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-brand-text-primary mb-1">
            Full Name <span className="text-brand-orange">*</span>
          </label>
          <input
            id="name"
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
            placeholder="John Kamau"
            className={inputClass(errors.name)}
          />
          {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-brand-text-primary mb-1">
            Phone Number <span className="text-brand-orange">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            required
            value={form.phone}
            onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
            placeholder="0712 345 678"
            className={inputClass(errors.phone)}
          />
          {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-brand-text-primary mb-1">
          Email Address{' '}
          <span className="text-brand-text-secondary font-normal">(optional)</span>
        </label>
        <input
          id="email"
          type="email"
          value={form.email}
          onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
          placeholder="john@example.com"
          className={inputClass()}
        />
      </div>

      {/* Region + Location */}
      <LocationSelect
        region={form.region}
        location={form.location}
        onRegionChange={(r) => setForm((p) => ({ ...p, region: r }))}
        onLocationChange={(l) => setForm((p) => ({ ...p, location: l }))}
        regionError={errors.region}
        locationError={errors.location}
      />

      {/* House Type */}
      <div>
        <label className="block text-sm font-semibold text-brand-text-primary mb-2">
          House Type <span className="text-brand-orange">*</span>
        </label>
        <div className="flex rounded-md border border-brand-border overflow-hidden">
          {HOUSE_TYPES.map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => setForm((p) => ({ ...p, houseType: type }))}
              className={`flex-1 py-2.5 text-sm font-semibold transition-colors ${
                form.houseType === type
                  ? 'bg-brand-blue text-white'
                  : 'bg-white text-brand-text-secondary hover:bg-gray-50'
              } ${type !== 'Apartment' ? 'border-l border-brand-border' : ''}`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Package */}
      <div>
        <label className="block text-sm font-semibold text-brand-text-primary mb-2">
          Preferred Package <span className="text-brand-orange">*</span>
        </label>
        <div className="space-y-2">
          {PACKAGES.map((pkg) => (
            <label
              key={pkg.value}
              className={`flex items-center gap-4 p-4 rounded-lg border-2 cursor-pointer transition-all ${
                form.package === pkg.value
                  ? 'border-brand-orange bg-orange-50'
                  : 'border-brand-border bg-white hover:border-gray-300'
              }`}
            >
              <input
                type="radio"
                name="package"
                value={pkg.value}
                checked={form.package === pkg.value}
                onChange={() => setForm((p) => ({ ...p, package: pkg.value }))}
                className="accent-brand-orange w-4 h-4"
              />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm text-brand-text-primary">{pkg.value}</span>
                  <span className="text-sm font-bold text-brand-orange">{pkg.price}</span>
                </div>
                <p className="text-xs text-brand-text-secondary mt-0.5">{pkg.speed} speed</p>
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-brand-text-primary mb-1">
          Additional Message{' '}
          <span className="text-brand-text-secondary font-normal">(optional)</span>
        </label>
        <textarea
          id="message"
          rows={3}
          value={form.message}
          onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
          placeholder="Any specific requirements or questions…"
          className="w-full border border-brand-border rounded-md px-3 py-2.5 text-sm text-brand-text-primary placeholder:text-brand-text-secondary focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition resize-none"
        />
      </div>

      {/* Server error */}
      {serverError && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-md px-4 py-3">
          {serverError}
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-brand-orange hover:bg-brand-orange-dark disabled:opacity-60 disabled:cursor-not-allowed text-white font-extrabold py-4 rounded-md text-base transition-colors"
      >
        {loading ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending…
          </span>
        ) : (
          'Request Installation'
        )}
      </button>

      <p className="text-center text-xs text-brand-text-secondary">
        By submitting, you agree to be contacted by our team at{' '}
        <a href="tel:0791053188" className="text-brand-blue hover:underline font-medium">
          0791 053 188
        </a>
      </p>
    </form>
  )
}
