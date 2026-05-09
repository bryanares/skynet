interface ThankYouProps {
  onReset: () => void
}

export default function ThankYou({ onReset }: ThankYouProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-16 px-6 animate-fade-in">
      {/* Checkmark */}
      <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mb-6">
        <svg
          className="w-10 h-10 text-brand-blue"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>

      <h2 className="text-3xl font-extrabold text-brand-text-primary mb-3">Thank you!</h2>
      <p className="text-brand-text-secondary text-base max-w-sm leading-relaxed mb-8">
        Your request has been received. Our team will contact you shortly!
      </p>

      {/* Call Us */}
      <a
        href="tel:0791053188"
        className="flex items-center gap-2 bg-brand-blue text-white font-bold px-6 py-3 rounded-md mb-4 hover:bg-brand-blue-dark transition-colors"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        Call Us: 0791 053 188
      </a>

      <button
        onClick={onReset}
        className="text-sm text-brand-blue hover:text-brand-blue-dark font-semibold underline underline-offset-2 transition-colors"
      >
        Submit another request
      </button>
    </div>
  )
}
