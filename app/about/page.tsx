import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Shield, Star, Users, Heart, Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    "Learn about Li'A Home Services — a licensed, insured, and community-driven home services company based in Everett, MA.",
}

const values = [
  {
    icon: Shield,
    title: 'Licensed & Insured',
    desc: 'Every service is fully covered so you have complete peace of mind.',
  },
  {
    icon: Star,
    title: 'Quality First',
    desc: 'We don\'t consider a job done until you\'re 100% satisfied with the results.',
  },
  {
    icon: Users,
    title: 'Trusted Team',
    desc: 'Background-checked, trained professionals who respect your home and privacy.',
  },
  {
    icon: Heart,
    title: 'Community Driven',
    desc: 'We\'re local to Everett, MA and invested in the communities we serve.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary pt-36 pb-20">
        <div className="section-container">
          <div className="max-w-2xl">
            <p className="section-label text-primary-100 mb-3">Our Story</p>
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-5">
              About Li&apos;A Home Services
            </h1>
            <p className="text-primary-100 text-lg leading-relaxed">
              A local, licensed, and insured team dedicated to helping families in Everett, MA and surrounding areas enjoy cleaner, more comfortable homes.
            </p>
          </div>
        </div>
      </section>

      {/* Story section */}
      <section className="py-24 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label mb-3">Who We Are</p>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Home Services Done With Purpose
              </h2>
              <div className="space-y-4 text-gray-500 leading-relaxed">
                <p>
                  Li&apos;A Home Services was founded with a simple mission: to give families back their time by handling the household tasks that pile up. We started in Everett, MA and have grown through word-of-mouth — proof that when you do the job right, clients notice.
                </p>
                <p>
                  Our team is made up of trained, background-checked professionals who treat every client&apos;s home as if it were their own. We take pride in our attention to detail, reliability, and genuine care for the people we serve.
                </p>
                <p>
                  From a single cleaning visit to ongoing weekly services, we adapt to your schedule and your needs. No long-term contracts, no hidden fees — just honest, high-quality work.
                </p>
              </div>
              <Link href="/book" className="btn-primary mt-8">
                Book a Service
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
                <Image
                  src="/img/hero-background-1.png"
                  alt="Li'A Home Services team"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-primary/20" />
              </div>
              {/* Stats overlay */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 border border-gray-100">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: '500+', label: 'Clients' },
                    { value: '5+', label: 'Years' },
                    { value: '4.9★', label: 'Rating' },
                    { value: '100%', label: 'Insured' },
                  ].map((s) => (
                    <div key={s.label} className="text-center">
                      <div className="text-xl font-bold text-primary">{s.value}</div>
                      <div className="text-xs text-gray-500">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gray-50">
        <div className="section-container">
          <div className="text-center mb-16">
            <p className="section-label mb-3">Our Values</p>
            <h2 className="section-title mb-4">What We Stand For</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="card text-center">
                <div className="w-12 h-12 rounded-2xl bg-primary-50 text-primary flex items-center justify-center mx-auto mb-4">
                  <Icon size={22} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-24 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="section-label mb-3">Get In Touch</p>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">We&apos;d Love to Hear From You</h2>
              <p className="text-gray-500 leading-relaxed mb-10">
                Whether you have questions, want to discuss your needs, or are ready to book — reach out anytime. We typically respond within a few hours.
              </p>

              <div className="space-y-5">
                <a
                  href="tel:+16462616917"
                  className="flex items-center gap-4 p-4 rounded-2xl border border-gray-100 hover:border-primary-100 hover:bg-primary-50 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary-50 text-primary group-hover:bg-primary group-hover:text-white flex items-center justify-center transition-colors">
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-medium uppercase tracking-wide">Phone</div>
                    <div className="font-semibold text-gray-900">(646) 261-6917</div>
                  </div>
                </a>

                <a
                  href="mailto:info@liahomeservices.com"
                  className="flex items-center gap-4 p-4 rounded-2xl border border-gray-100 hover:border-primary-100 hover:bg-primary-50 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary-50 text-primary group-hover:bg-primary group-hover:text-white flex items-center justify-center transition-colors">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-medium uppercase tracking-wide">Email</div>
                    <div className="font-semibold text-gray-900">info@liahomeservices.com</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-2xl border border-gray-100">
                  <div className="w-10 h-10 rounded-xl bg-primary-50 text-primary flex items-center justify-center">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-medium uppercase tracking-wide">Service Area</div>
                    <div className="font-semibold text-gray-900">Everett, MA &amp; Surrounding Areas</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-2xl border border-gray-100">
                  <div className="w-10 h-10 rounded-xl bg-primary-50 text-primary flex items-center justify-center">
                    <Clock size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-medium uppercase tracking-wide">Hours</div>
                    <div className="font-semibold text-gray-900">
                      Mon–Fri: 8AM–6PM · Sat: 9AM–4PM
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-3xl overflow-hidden h-96 lg:h-auto border border-gray-100 shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23753.97!2d-71.069!3d42.408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e37029b76bbd47%3A0x7e8d6c1a4b9f8a84!2sEverett%2C%20MA!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '380px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Li'A Home Services location"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="section-container text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-primary-100 text-lg mb-8 max-w-xl mx-auto">
            Book your first service online in under 2 minutes.
          </p>
          <Link href="/book" className="btn-primary bg-white text-primary hover:bg-gray-100 px-10 py-4 text-base">
            Book a Service
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}
