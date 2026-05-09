const SKYNET_PROS = [
  'Blazing Fast Speeds',
  'Reliable Connection',
  'Consistent Uptime',
  'Dedicated Customer Support',
  'No Hidden Charges',
]

const OTHERS_CONS = [
  'Slow & Unstable',
  'Frequent Outages',
  'Poor Support',
  'Hidden Fees & Throttling',
  'Inconsistent Speeds',
]

function CheckIcon() {
  return (
    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
      <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
      </svg>
    </div>
  )
}

function CrossIcon() {
  return (
    <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
      <svg className="w-3 h-3 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
      </svg>
    </div>
  )
}

export default function ComparisonCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-xl overflow-hidden border-2 border-brand-border shadow-sm max-w-3xl mx-auto">
      {/* SKYNET Side */}
      <div className="bg-white p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
            <svg className="w-4 h-4 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01" />
            </svg>
          </div>
          <div>
            <h3 className="font-extrabold text-brand-text-primary text-lg">SKYNET</h3>
            <p className="text-xs text-brand-orange font-semibold uppercase tracking-wide">Your ISP</p>
          </div>
        </div>
        <ul className="space-y-3.5">
          {SKYNET_PROS.map((item) => (
            <li key={item} className="flex items-center gap-3">
              <CheckIcon />
              <span className="text-sm font-medium text-brand-text-primary">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Divider */}
      <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-9 h-9 bg-brand-bg rounded-full border-2 border-brand-border flex items-center justify-center">
        <span className="text-xs font-bold text-brand-text-secondary">VS</span>
      </div>

      {/* Others Side */}
      <div className="bg-gray-50 p-8 border-l border-brand-border">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.143 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
            </svg>
          </div>
          <div>
            <h3 className="font-extrabold text-brand-text-secondary text-lg">Other Providers</h3>
            <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide">The Competition</p>
          </div>
        </div>
        <ul className="space-y-3.5">
          {OTHERS_CONS.map((item) => (
            <li key={item} className="flex items-center gap-3">
              <CrossIcon />
              <span className="text-sm font-medium text-brand-text-secondary">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
