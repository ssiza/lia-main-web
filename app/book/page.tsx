import type { Metadata } from 'next'
import BookingForm from '@/components/BookingForm'
import { Phone, Mail, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Book a Service',
  description:
    "Book a professional home service with Li'A Home Services. Cleaning, laundry, meal prep, and shopping in Everett, MA.",
}

export default function BookPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary pt-36 pb-20">
        <div className="section-container">
          <div className="max-w-xl">
            <p className="section-label text-primary-100 mb-3">Book Online</p>
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-5">
              Schedule Your Service
            </h1>
            <p className="text-primary-100 text-lg leading-relaxed">
              Fill out the form below and we&apos;ll confirm your appointment within a few hours.
            </p>
          </div>
        </div>
      </section>

      {/* Form + sidebar */}
      <section className="py-20 bg-gray-50">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <BookingForm />
            </div>

            {/* Sidebar */}
            <div className="flex flex-col gap-6">
              {/* Quick contact */}
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-5">Prefer to Call?</h3>
                <div className="space-y-4">
                  <a
                    href="tel:+16462616917"
                    className="flex items-center gap-3 text-sm text-gray-600 hover:text-primary transition-colors"
                  >
                    <div className="w-9 h-9 rounded-xl bg-primary-50 text-primary flex items-center justify-center shrink-0">
                      <Phone size={16} />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">(646) 261-6917</div>
                      <div className="text-xs text-gray-400">Call or text anytime</div>
                    </div>
                  </a>
                  <a
                    href="mailto:info@liahomeservices.com"
                    className="flex items-center gap-3 text-sm text-gray-600 hover:text-primary transition-colors"
                  >
                    <div className="w-9 h-9 rounded-xl bg-primary-50 text-primary flex items-center justify-center shrink-0">
                      <Mail size={16} />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">info@liahomeservices.com</div>
                      <div className="text-xs text-gray-400">We reply within a few hours</div>
                    </div>
                  </a>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <div className="w-9 h-9 rounded-xl bg-primary-50 text-primary flex items-center justify-center shrink-0">
                      <Clock size={16} />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Mon–Sat, 8 AM – 6 PM</div>
                      <div className="text-xs text-gray-400">Service hours</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* What to expect */}
              <div className="bg-primary-50 rounded-3xl p-6 border border-primary-100">
                <h3 className="font-bold text-gray-900 mb-4">What Happens Next?</h3>
                <ol className="space-y-3">
                  {[
                    'We receive your booking request.',
                    'Our team confirms availability within a few hours.',
                    'You\'ll get a confirmation email with all details.',
                    'Our team shows up on time, ready to work.',
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                      <span className="w-5 h-5 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>

              {/* Guarantee */}
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
                <div className="text-3xl mb-3">✓</div>
                <h3 className="font-bold text-gray-900 mb-2">100% Satisfaction Guarantee</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Not satisfied? We&apos;ll come back and make it right — free of charge. No questions asked.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
