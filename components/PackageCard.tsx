import Link from 'next/link'

export type PackageTier = 'Lite' | 'Standard' | 'Premium'

export interface PackageData {
  name: PackageTier
  price: number
  speed: number
  features: string[]
  highlight?: boolean
  badge?: string
}

function WifiIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12.55a11 11 0 0 1 14.08 0" />
      <path d="M1.42 9a16 16 0 0 1 21.16 0" />
      <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
      <line x1="12" y1="20" x2="12.01" y2="20" strokeWidth={3} strokeLinecap="round" />
    </svg>
  )
}

export default function PackageCard({
  pkg,
  compact = false,
}: {
  pkg: PackageData
  compact?: boolean
}) {
  const isHighlighted = pkg.highlight

  return (
    <div
      className={`relative bg-white rounded-xl border-2 flex flex-col transition-shadow hover:shadow-lg ${
        isHighlighted
          ? 'border-brand-orange shadow-md'
          : 'border-brand-border shadow-sm'
      }`}
    >
      {/* Badge */}
      {pkg.badge && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="bg-brand-orange text-white text-xs font-bold px-4 py-1 rounded-full tracking-wide uppercase">
            {pkg.badge}
          </span>
        </div>
      )}

      <div className={`p-6 flex flex-col flex-1 ${pkg.badge ? 'pt-7' : ''}`}>
        {/* Icon */}
        <div
          className={`w-11 h-11 rounded-lg flex items-center justify-center mb-4 ${
            isHighlighted ? 'bg-orange-50' : 'bg-blue-50'
          }`}
        >
          <WifiIcon
            className={`w-6 h-6 ${isHighlighted ? 'text-brand-orange' : 'text-brand-blue'}`}
          />
        </div>

        {/* Plan name */}
        <h3 className="text-lg font-bold text-brand-text-primary">{pkg.name}</h3>
        <p className="text-brand-text-secondary text-sm mt-0.5">Internet Plan</p>

        {/* Speed */}
        <div className="mt-4 flex items-baseline gap-1.5">
          <span className={`text-4xl font-extrabold ${isHighlighted ? 'text-brand-orange' : 'text-brand-blue'}`}>
            {pkg.speed}
          </span>
          <span className="text-brand-text-secondary font-medium text-sm">Mbps</span>
        </div>

        {/* Price */}
        <div className="mt-2 flex items-baseline gap-1">
          <span className="text-xl font-bold text-brand-text-primary">
            KES {pkg.price.toLocaleString()}
          </span>
          <span className="text-brand-text-secondary text-sm">/mo</span>
        </div>

        {/* Features */}
        {!compact && (
          <ul className="mt-5 space-y-2.5 flex-1">
            {pkg.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2.5 text-sm text-brand-text-secondary">
                <svg
                  className={`w-4 h-4 mt-0.5 flex-shrink-0 ${isHighlighted ? 'text-brand-orange' : 'text-brand-blue'}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}

        {/* CTA */}
        <div className="mt-6">
          <Link
            href={`/get-connected?package=${pkg.name}`}
            className={`block w-full text-center font-bold text-sm py-3 rounded-md transition-colors ${
              isHighlighted
                ? 'bg-brand-orange hover:bg-brand-orange-dark text-white'
                : 'border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white'
            }`}
          >
            Get Connected
          </Link>
        </div>
      </div>
    </div>
  )
}
