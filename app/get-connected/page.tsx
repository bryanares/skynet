import type { Metadata } from 'next'
import { Suspense } from 'react'
import GetConnectedForm from '@/components/GetConnectedForm'

export const metadata: Metadata = {
  title: 'Get Connected',
  description:
    'Request a SKYNET internet installation in Nairobi. Fill in your details and our team will contact you within 24 hours.',
}

function FormSkeleton() {
  return (
    <div className="space-y-4 animate-pulse">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="h-12 bg-gray-100 rounded-md" />
      ))}
      <div className="h-14 bg-gray-200 rounded-md" />
    </div>
  )
}

export default function GetConnectedPage() {
  return (
    <div className="bg-brand-bg min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Left column — info */}
          <div className="lg:col-span-2 lg:sticky lg:top-24">
            <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 rounded-full px-4 py-1.5 mb-5">
              <span className="w-2 h-2 rounded-full bg-brand-orange" />
              <span className="text-xs font-bold text-brand-orange uppercase tracking-widest">
                Free Installation
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-extrabold text-brand-text-primary leading-tight">
              Get Connected<br />
              <span className="text-brand-orange">in 24 Hours</span>
            </h1>

            <p className="mt-4 text-brand-text-secondary leading-relaxed">
              Fill in your details below and our team will reach out to schedule your installation at a time that works for you.
            </p>

            {/* Steps */}
            <div className="mt-8 space-y-5">
              {[
                { step: '01', title: 'Submit your request', desc: 'Fill the form with your details and preferred package.' },
                { step: '02', title: 'We call you back', desc: 'Our team contacts you within 2 hours to confirm.' },
                { step: '03', title: 'Installation day', desc: 'We install your connection — usually within 24 hours.' },
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-50 border-2 border-brand-blue flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-extrabold text-brand-blue">{item.step}</span>
                  </div>
                  <div>
                    <p className="font-bold text-brand-text-primary text-sm">{item.title}</p>
                    <p className="text-xs text-brand-text-secondary mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Call box */}
            <div className="mt-10 p-5 bg-brand-blue rounded-xl text-white">
              <p className="text-xs font-bold uppercase tracking-widest text-blue-300 mb-1">Prefer to call?</p>
              <a
                href="tel:0791053188"
                className="text-2xl font-extrabold hover:text-blue-200 transition-colors"
              >
                0791 053 188
              </a>
              <p className="text-blue-300 text-xs mt-1">Mon – Sat, 8am – 6pm</p>
            </div>
          </div>

          {/* Right column — form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl border border-brand-border shadow-sm p-6 sm:p-8">
              <h2 className="text-xl font-bold text-brand-text-primary mb-1">Installation Request</h2>
              <p className="text-sm text-brand-text-secondary mb-6">
                All fields marked <span className="text-brand-orange font-semibold">*</span> are required.
              </p>

              <Suspense fallback={<FormSkeleton />}>
                <GetConnectedForm />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
