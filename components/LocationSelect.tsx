'use client'

import { REGIONS, getLocations, type Region } from '@/lib/locations'

interface LocationSelectProps {
  region: string
  location: string
  onRegionChange: (region: string) => void
  onLocationChange: (location: string) => void
  regionError?: string
  locationError?: string
}

export default function LocationSelect({
  region,
  location,
  onRegionChange,
  onLocationChange,
  regionError,
  locationError,
}: LocationSelectProps) {
  const locations = region ? getLocations(region as Region) : []

  const handleRegionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onRegionChange(e.target.value)
    onLocationChange('') // reset location when region changes
  }

  const selectClass = (hasError?: string) =>
    `w-full border rounded-md px-3 py-2.5 text-sm bg-white text-brand-text-primary focus:outline-none focus:ring-1 transition appearance-none cursor-pointer ${
      hasError
        ? 'border-red-400 focus:border-red-400 focus:ring-red-400'
        : 'border-brand-border focus:border-brand-blue focus:ring-brand-blue'
    }`

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {/* Region */}
      <div>
        <label htmlFor="region" className="block text-sm font-semibold text-brand-text-primary mb-1">
          Region <span className="text-brand-orange">*</span>
        </label>
        <div className="relative">
          <select
            id="region"
            name="region"
            required
            value={region}
            onChange={handleRegionChange}
            className={selectClass(regionError)}
          >
            <option value="">Select region…</option>
            {REGIONS.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
            <svg className="w-4 h-4 text-brand-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
        {regionError && <p className="mt-1 text-xs text-red-500">{regionError}</p>}
      </div>

      {/* Location */}
      <div>
        <label htmlFor="location" className="block text-sm font-semibold text-brand-text-primary mb-1">
          Location <span className="text-brand-orange">*</span>
        </label>
        <div className="relative">
          <select
            id="location"
            name="location"
            required
            value={location}
            onChange={(e) => onLocationChange(e.target.value)}
            disabled={!region}
            className={`${selectClass(locationError)} ${!region ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            <option value="">
              {region ? 'Select location…' : 'Select a region first'}
            </option>
            {locations.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
            <svg className="w-4 h-4 text-brand-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
        {locationError && <p className="mt-1 text-xs text-red-500">{locationError}</p>}
      </div>
    </div>
  )
}
