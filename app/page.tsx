import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  Shield, Star, Clock, CheckCircle2, ArrowRight,
  SprayCan, ShoppingBag, ChefHat, Shirt, Phone,
} from 'lucide-react'

export const metadata: Metadata = {
  title: "Li'A Home Services | Professional Cleaning & Home Care in Everett, MA",
  description:
    'Licensed & insured home services in Everett, MA. Cleaning, laundry, meal preparation, and shopping assistance. Book your service today.',
}

const services = [
  {
    id: 'cleaning',
    icon: SprayCan,
    title: 'House Cleaning',
    description:
      'Deep cleaning, regular maintenance, kitchen, bathrooms, bedrooms and more — done right, every time.',
    image: '/img/hero-background-1.png',
    features: ['Deep & standard cleaning', 'Kitchen & bathroom focus', 'Eco-friendly products', 'Flexible scheduling'],
    href: '/services#cleaning',
  },
  {
    id: 'laundry',
    icon: Shirt,
    title: 'Laundry',
    description:
      'We wash, dry, fold, and organize your clothes so they\'re ready when you are.',
    image: '/img/full-care-laundry-image.png',
    features: ['Wash, dry & fold', 'Delicate care', 'Ironing available', 'Same-day options'],
    href: '/services#laundry',
  },
  {
    id: 'meals',
    icon: ChefHat,
    title: 'Meal Preparation',
    description:
      'Weekly meal prep, daily cooking, or special dietary accommodations — we\'ve got you covered.',
    image: '/img/meal-preparation.png',
    features: ['Weekly meal prep', 'Dietary accommodations', 'Grocery coordination', 'Kitchen cleanup included'],
    href: '/services#meals',
  },
  {
    id: 'shopping',
    icon: ShoppingBag,
    title: 'Shopping Assistance',
    description:
      'Groceries, errands, and essential supply runs — handled efficiently on your schedule.',
    image: '/img/shopping-image.png',
    features: ['Grocery runs', 'Errand services', 'Supply procurement', 'Contactless delivery'],
    href: '/services#shopping',
  },
]

const trustBadges = [
  { icon: Shield, label: 'Licensed & Insured' },
  { icon: Star, label: '5-Star Rated' },
  { icon: Clock, label: 'Flexible Scheduling' },
  { icon: CheckCircle2, label: '100% Satisfaction Guarantee' },
]

const stats = [
  { value: '500+', label: 'Homes Served' },
  { value: '4.9★', label: 'Average Rating' },
  { value: '5+', label: 'Years Experience' },
  { value: '100%', label: 'Satisfaction Rate' },
]

const faqs = [
  {
    q: 'How do I book a service?',
    a: 'You can book online through our booking form, or call us directly at (646) 261-6917. We\'ll confirm your appointment within a few hours.',
  },
  {
    q: 'Are your team members background-checked?',
    a: 'Yes. Every member of our team goes through a thorough background check and training process before serving any client.',
  },
  {
    q: 'What areas do you serve?',
    a: 'We primarily serve Everett, MA and surrounding areas including Somerville, Cambridge, Medford, and Malden.',
  },
  {
    q: 'Do you bring your own cleaning supplies?',
    a: 'Yes, we bring professional-grade, eco-friendly supplies. If you have specific product preferences, just let us know.',
  },
  {
    q: 'What is your cancellation policy?',
    a: 'We ask for at least 24 hours notice for cancellations. Cancellations with less than 24 hours may incur a small fee.',
  },
  {
    q: 'What if I\'m not satisfied with the service?',
    a: 'Your satisfaction is our priority. If anything isn\'t right, contact us within 24 hours and we\'ll come back to make it right — at no extra charge.',
  },
]

const testimonials = [
  {
    name: 'Maria S.',
    location: 'Everett, MA',
    rating: 5,
    text: 'Absolutely wonderful service! My home has never looked this clean. The team is professional, thorough, and a pleasure to work with.',
  },
  {
    name: 'James T.',
    location: 'Somerville, MA',
    rating: 5,
    text: 'I use their meal prep service weekly and it\'s been a game changer. Fresh, healthy meals ready for the week. Highly recommend!',
  },
  {
    name: 'Priya R.',
    location: 'Medford, MA',
    rating: 5,
    text: 'Reliable, trustworthy, and detail-oriented. The laundry service saves me so much time. Worth every penny.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/img/hero-background-1.png"
            alt="Clean modern home"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 via-primary/80 to-primary/60" />
        </div>

        <div className="relative z-10 section-container pt-32 pb-20">
          <div className="max-w-2xl">
            <p className="inline-block px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-sm text-white/90 text-sm font-medium mb-6 border border-white/20">
              Serving Everett, MA &amp; Surrounding Areas
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.08] mb-6">
              A Cleaner Home.<br />
              <span className="text-gold-light">A Happier Life.</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed mb-10 max-w-xl">
              Licensed &amp; insured home services — cleaning, laundry, meal prep, and shopping — done by professionals who care.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/book" className="btn-primary text-base px-8 py-4">
                Book a Service
                <ArrowRight size={18} />
              </Link>
              <Link href="/services" className="btn-ghost text-base px-8 py-4">
                Our Services
              </Link>
            </div>
          </div>

          {/* Floating trust card */}
          <div className="mt-16 inline-flex flex-wrap gap-4">
            {trustBadges.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2.5 bg-white/15 backdrop-blur-sm border border-white/25 rounded-full px-5 py-2.5 text-white text-sm font-medium"
              >
                <Icon size={15} className="text-gold-light" />
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="bg-primary py-14">
        <div className="section-container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center text-white">
                <div className="text-4xl lg:text-5xl font-bold mb-2">{s.value}</div>
                <div className="text-primary-100 text-sm font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="py-24 bg-gray-50">
        <div className="section-container">
          <div className="text-center mb-16">
            <p className="section-label mb-3">What We Do</p>
            <h2 className="section-title mb-4">Services Built Around Your Life</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Every service is performed by trained, background-checked professionals using high-quality supplies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <div key={service.id} className="card group flex flex-col">
                  <div className="flex items-start gap-4 mb-5">
                    <div className="shrink-0 w-12 h-12 flex items-center justify-center rounded-2xl bg-primary-50 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <Icon size={22} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{service.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                  <ul className="grid grid-cols-2 gap-2 mb-6">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle2 size={14} className="text-primary shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={service.href}
                    className="mt-auto flex items-center gap-1.5 text-primary font-semibold text-sm hover:gap-2.5 transition-all duration-200"
                  >
                    Learn more <ArrowRight size={15} />
                  </Link>
                </div>
              )
            })}
          </div>

          <div className="text-center mt-12">
            <Link href="/book" className="btn-primary text-base px-10 py-4">
              Book Any Service
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="py-24 bg-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <p className="section-label mb-3">Simple Process</p>
            <h2 className="section-title mb-4">Three Steps to a Cleaner Home</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { step: '01', title: 'Book Online', desc: 'Fill out our quick booking form with your service, date, and details. Takes under 2 minutes.' },
              { step: '02', title: 'We Show Up', desc: 'Our trained, background-checked team arrives on time with everything needed to get the job done.' },
              { step: '03', title: 'Relax & Enjoy', desc: 'Sit back while we handle the work. We\'ll send you a confirmation when everything is complete.' },
            ].map(({ step, title, desc }) => (
              <div key={step} className="text-center px-4">
                <div className="w-14 h-14 rounded-2xl bg-primary-50 text-primary font-bold text-lg flex items-center justify-center mx-auto mb-5">
                  {step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-24 bg-gray-50">
        <div className="section-container">
          <div className="text-center mb-16">
            <p className="section-label mb-3">Client Reviews</p>
            <h2 className="section-title mb-4">What Our Clients Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="card">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={15} className="fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-5 italic">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="w-9 h-9 rounded-full bg-primary-100 flex items-center justify-center text-primary font-bold text-sm">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                    <div className="text-gray-400 text-xs">{t.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 bg-white">
        <div className="section-container max-w-3xl">
          <div className="text-center mb-16">
            <p className="section-label mb-3">FAQ</p>
            <h2 className="section-title mb-4">Common Questions</h2>
          </div>

          <div className="flex flex-col gap-3">
            {faqs.map((faq) => (
              <details key={faq.q} className="faq-item">
                <summary className="hover:text-primary transition-colors">
                  <span>{faq.q}</span>
                  <span className="shrink-0 text-gray-400 text-xl font-light transition-transform duration-200">+</span>
                </summary>
                <p>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-primary">
        <div className="section-container text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-5">
            Ready for a Cleaner Home?
          </h2>
          <p className="text-primary-100 text-lg mb-10 max-w-xl mx-auto">
            Book your first service today. No contracts, no hassle — just results.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/book" className="btn-primary bg-white text-primary hover:bg-gray-100 text-base px-10 py-4">
              Book a Service
              <ArrowRight size={18} />
            </Link>
            <a href="tel:+16462616917" className="btn-ghost text-base px-10 py-4">
              <Phone size={18} />
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
