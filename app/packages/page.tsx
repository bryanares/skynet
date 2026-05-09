import type { Metadata } from 'next'
import Link from 'next/link'
import PackageCard, { type PackageData } from '@/components/PackageCard'

export const metadata: Metadata = {
  title: 'Packages & Pricing',
  description:
    'Compare SKYNET internet plans: Lite at KES 1,500/mo (15 Mbps), Standard at KES 2,000/mo (25 Mbps), and Premium at KES 3,000/mo (35 Mbps + Netflix).',
}

const PACKAGES: PackageData[] = [
  {
    name: 'Lite',
    price: 1500,
    speed: 15,
    features: [
      '15 Mbps Download Speed',
      'Up to 5 Connected Devices',
      'Standard Business Support',
      'Unlimited Data — No Caps',
      'Free Router Setup',
    ],
  },
  {
    name: 'Standard',
    price: 2000,
    speed: 25,
    features: [
      '25 Mbps Download Speed',
      'Up to 10 Connected Devices',
      'Priority Customer Support',
      'Unlimited Data — No Caps',
      'Free Router Setup',
      'Faster Response Times',
    ],
    highlight: true,
    badge: 'Most Popular',
  },
  {
    name: 'Premium',
    price: 3000,
    speed: 35,
    features: [
      '35 Mbps Download Speed',
      'Unlimited Connected Devices',
      '24/7 Dedicated Support',
      'Unlimited Data — No Caps',
      'Netflix Subscription Included',
      'Free Router Setup',
      'Priority Installation',
    ],
  },
]

const TABLE_FEATURES = [
  {
    label: 'Download Speed',
    lite: '15 Mbps',
    standard: '25 Mbps',
    premium: '35 Mbps',
  },
  {
    label: 'Monthly Cost',
    lite: 'KES 1,500',
    standard: 'KES 2,000',
    premium: 'KES 3,000',
  },
  {
    label: 'Netflix Included',
    lite: false,
    standard: false,
    premium: true,
  },
  {
    label: 'Support Level',
    lite: 'Standard',
    standard: 'Priority',
    premium: '24/7',
  },
  {
    label: 'Connected Devices',
    lite: 'Up to 5',
    standard: 'Up to 10',
    premium: 'Unlimited',
  },
  {
    label: 'Data Cap',
    lite: 'None',
    standard: 'None',
    premium: 'None',
  },
  {
    label: 'Router Setup',
    lite: true,
    standard: true,
    premium: true,
  },
  {
    label: 'Priority Install',
    lite: false,
    standard: false,
    premium: true,
  },
]

function TableCell({ value }: { value: string | boolean }) {
  if (typeof value === 'boolean') {
    return value ? (
      <td className="px-6 py-4 text-center">
        <svg className="w-5 h-5 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
        </svg>
      </td>
    ) : (
      <td className="px-6 py-4 text-center">
        <svg className="w-5 h-5 text-gray-300 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </td>
    )
  }
  return <td className="px-6 py-4 text-center text-sm text-brand-text-primary font-medium">{value}</td>
}

export default function PackagesPage() {
  return (
    <>
      {/* ─── HEADER ─── */}
      <section className="bg-white border-b border-brand-border py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-brand-text-primary">
            Choose Your Plan
          </h1>
          <p className="mt-4 text-brand-text-secondary text-lg max-w-xl mx-auto">
            Honest pricing, no contracts. Pick the speed that matches your lifestyle.
          </p>
        </div>
      </section>

      {/* ─── PRICING CARDS ─── */}
      <section className="py-16 bg-brand-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PACKAGES.map((pkg) => (
              <PackageCard key={pkg.name} pkg={pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── COMPARISON TABLE ─── */}
      <section className="py-16 bg-white border-t border-brand-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-brand-text-primary mb-8 text-center">
            Full Feature Comparison
          </h2>

          <div className="overflow-x-auto rounded-xl border border-brand-border shadow-sm">
            <table className="w-full min-w-[560px] border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-brand-border">
                  <th className="px-6 py-4 text-left text-sm font-bold text-brand-text-secondary uppercase tracking-wide">
                    Feature
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-bold text-brand-text-primary">Lite</th>
                  <th className="px-6 py-4 text-center text-sm font-bold text-brand-orange bg-orange-50">
                    Standard ★
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-bold text-brand-text-primary">Premium</th>
                </tr>
              </thead>
              <tbody>
                {TABLE_FEATURES.map((row, i) => (
                  <tr
                    key={row.label}
                    className={`border-b border-brand-border last:border-0 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                  >
                    <td className="px-6 py-4 text-sm font-semibold text-brand-text-secondary">
                      {row.label}
                    </td>
                    <TableCell value={row.lite} />
                    <td className="px-6 py-4 text-center bg-orange-50/50">
                      {typeof row.standard === 'boolean' ? (
                        row.standard ? (
                          <svg className="w-5 h-5 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5 text-gray-300 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        )
                      ) : (
                        <span className="text-sm font-bold text-brand-orange">{row.standard}</span>
                      )}
                    </td>
                    <TableCell value={row.premium} />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <section className="bg-brand-blue py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-3">
            Ready to get connected?
          </h2>
          <p className="text-blue-200 mb-8">
            Fill in your details and our team will have you up and running within 24 hours.
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
            Questions? Call:{' '}
            <a href="tel:0791053188" className="text-white font-bold hover:underline">
              0791 053 188
            </a>
          </p>
        </div>
      </section>
    </>
  )
}
