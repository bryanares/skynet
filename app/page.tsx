import type { Metadata } from 'next'
import Link from 'next/link'
import PackageCard, { type PackageData } from '@/components/PackageCard'
import ComparisonCard from '@/components/ComparisonCard'

export const metadata: Metadata = {
  title: 'High-Speed Internet in Nairobi',
  description:
    'SKYNET delivers blazing-fast, reliable home and office internet across Nairobi. Plans start at KES 1,500/mo. Get connected today.',
}

const PACKAGES: PackageData[] = [
  {
    name: 'Lite',
    price: 1500,
    speed: 15,
    features: ['15 Mbps Download', 'Up to 5 Devices', 'Standard Support', 'No Data Caps'],
  },
  {
    name: 'Standard',
    price: 2000,
    speed: 25,
    features: ['25 Mbps Download', 'Up to 10 Devices', 'Priority Support', 'No Data Caps'],
    highlight: true,
    badge: 'Most Popular',
  },
  {
    name: 'Premium',
    price: 3000,
    speed: 35,
    features: ['35 Mbps Download', 'Unlimited Devices', '24/7 Support', 'Includes Netflix'],
  },
]

function StatBadge({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <p className="text-3xl font-extrabold text-brand-orange">{value}</p>
      <p className="text-sm text-brand-text-secondary font-medium mt-0.5">{label}</p>
    </div>
  )
}

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="bg-white border-b border-brand-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
              <span className="text-xs font-bold text-brand-orange uppercase tracking-widest">
                Now serving Nairobi
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-brand-text-primary leading-tight">
              Always Connected —{' '}
              <span className="text-brand-orange">High Speed</span>{' '}
              |{' '}
              <span className="text-brand-blue">Wide Coverage</span>
            </h1>

            <p className="mt-6 text-lg text-brand-text-secondary max-w-xl leading-relaxed">
              SKYNET delivers rock-solid internet to Nairobi homes and offices. No outages, no throttling — just blazing-fast speeds you can count on every day.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/get-connected"
                className="inline-flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-white font-bold px-7 py-3.5 rounded-md text-base transition-colors"
              >
                Get Connected
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/packages"
                className="inline-flex items-center justify-center gap-2 border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white font-bold px-7 py-3.5 rounded-md text-base transition-colors"
              >
                View Packages
              </Link>
            </div>
          </div>

          {/* Stats row */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-brand-border">
            <StatBadge value="35 Mbps" label="Max Speed" />
            <StatBadge value="99.9%" label="Uptime Guarantee" />
            <StatBadge value="KES 1,500" label="Starting Price/mo" />
            <StatBadge value="24/7" label="Premium Support" />
          </div>
        </div>
      </section>

      {/* ─── COMPARISON ─── */}
      <section className="py-20 bg-brand-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-text-primary">
              Why Choose <span className="text-brand-orange">SKYNET</span>?
            </h2>
            <p className="mt-3 text-brand-text-secondary max-w-lg mx-auto">
              We&apos;re not just another ISP. See how we compare to the competition.
            </p>
          </div>
          <div className="relative">
            <ComparisonCard />
          </div>
        </div>
      </section>

      {/* ─── PACKAGES ─── */}
      <section className="py-20 bg-white border-t border-brand-border" id="packages">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-text-primary">
              Simple, Transparent Pricing
            </h2>
            <p className="mt-3 text-brand-text-secondary max-w-md mx-auto">
              No hidden fees. No contracts. Cancel anytime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            {PACKAGES.map((pkg) => (
              <PackageCard key={pkg.name} pkg={pkg} compact />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/packages"
              className="inline-flex items-center gap-2 text-brand-blue hover:text-brand-blue-dark font-semibold text-sm transition-colors"
            >
              See full plan comparison
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── BOTTOM CTA ─── */}
      <section className="bg-brand-blue py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">
            Ready to experience fast internet?
          </h2>
          <p className="text-blue-200 mb-8 text-base">
            Join thousands of Nairobi households already on SKYNET. Installation within 24 hours.
          </p>
          <Link
            href="/get-connected"
            className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-white font-bold px-8 py-4 rounded-md text-base transition-colors"
          >
            Request Installation
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <p className="mt-5 text-blue-300 text-sm">
            Or call us directly:{' '}
            <a href="tel:0791053188" className="text-white font-bold hover:underline">
              0791 053 188
            </a>
          </p>
        </div>
      </section>
    </>
  )
}
