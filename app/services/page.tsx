import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle2, ArrowRight, SprayCan, Shirt, ChefHat, ShoppingBag } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'Explore Li\'A Home Services — professional house cleaning, laundry, meal preparation, and shopping assistance in Everett, MA.',
}

const services = [
  {
    id: 'cleaning',
    icon: SprayCan,
    title: 'House Cleaning',
    tagline: 'A spotless home, every time.',
    description:
      'Our professional cleaning team handles everything from quick tidies to deep cleans. We use eco-friendly, professional-grade products and follow a detailed checklist to make sure nothing is missed.',
    image: '/img/hero-background-1.png',
    features: [
      'Standard & deep cleaning',
      'Kitchen deep clean',
      'Bathroom sanitization',
      'Bedroom & living areas',
      'Dusting, mopping & vacuuming',
      'Interior window cleaning',
      'Trash removal',
      'Eco-friendly products available',
    ],
  },
  {
    id: 'laundry',
    icon: Shirt,
    title: 'Laundry',
    tagline: 'Fresh, folded, and ready.',
    description:
      'We handle your laundry from start to finish — washing, drying, folding, and organizing. Whether it\'s everyday clothes or delicates, we treat every item with care.',
    image: '/img/full-care-laundry-image.png',
    features: [
      'Wash, dry & fold',
      'Delicate & specialty care',
      'Ironing & pressing',
      'Clothing organization',
      'Same-day options available',
      'Separate loads by color/fabric',
      'Stain pre-treatment',
      'Closet organization',
    ],
  },
  {
    id: 'meals',
    icon: ChefHat,
    title: 'Meal Preparation',
    tagline: 'Nutritious meals, zero effort.',
    description:
      'We plan and prepare fresh, delicious meals tailored to your dietary preferences. Whether you need weekly batch cooking or daily meals, we take care of it all — including kitchen cleanup.',
    image: '/img/meal-preparation.png',
    features: [
      'Weekly meal planning',
      'Fresh ingredient prep',
      'Dietary accommodations',
      'Batch cooking',
      'Portion-controlled meals',
      'Kitchen cleanup included',
      'Groceries coordination',
      'Special occasion cooking',
    ],
  },
  {
    id: 'shopping',
    icon: ShoppingBag,
    title: 'Shopping Assistance',
    tagline: 'Errands handled. Time reclaimed.',
    description:
      'From grocery runs to picking up prescriptions, we handle your errands efficiently and reliably. You give us the list — we take care of the rest.',
    image: '/img/shopping-image.png',
    features: [
      'Grocery shopping',
      'Pharmacy pickup',
      'General errands',
      'Household supply runs',
      'Receipt & change provided',
      'Contactless delivery option',
      'Budget-conscious shopping',
      'Price comparison',
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary pt-36 pb-20">
        <div className="section-container text-center">
          <p className="section-label text-primary-100 mb-3">What We Offer</p>
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-5">
            Our Services
          </h1>
          <p className="text-primary-100 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            Every service is performed by trained, background-checked professionals using high-quality supplies — so you can relax knowing the job is done right.
          </p>
          <Link href="/book" className="btn-primary bg-white text-primary hover:bg-gray-100 px-8 py-4 text-base">
            Book a Service
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="flex flex-col gap-24">
            {services.map((service, idx) => {
              const Icon = service.icon
              const isEven = idx % 2 === 0
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className={`scroll-mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    !isEven ? 'lg:grid-flow-dense' : ''
                  }`}
                >
                  {/* Image */}
                  <div className={`relative rounded-3xl overflow-hidden aspect-[4/3] ${!isEven ? 'lg:col-start-2' : ''}`}>
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-primary/20" />
                    <div className="absolute bottom-6 left-6">
                      <div className="flex items-center gap-2.5 bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-2.5 shadow-lg">
                        <div className="w-8 h-8 flex items-center justify-center rounded-xl bg-primary-50 text-primary">
                          <Icon size={16} />
                        </div>
                        <span className="font-semibold text-gray-900 text-sm">{service.title}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={!isEven ? 'lg:col-start-1' : ''}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 flex items-center justify-center rounded-2xl bg-primary-50 text-primary">
                        <Icon size={18} />
                      </div>
                      <p className="section-label">{service.title}</p>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
                      {service.tagline}
                    </h2>
                    <p className="text-gray-500 leading-relaxed mb-8">{service.description}</p>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-center gap-2.5 text-sm text-gray-700">
                          <CheckCircle2 size={15} className="text-primary shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>

                    <Link href="/book" className="btn-primary">
                      Book {service.title}
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="section-container text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Not Sure Which Service You Need?</h2>
          <p className="text-gray-500 text-lg mb-8 max-w-xl mx-auto">
            Give us a call and we&apos;ll help you figure out the best plan for your home.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/book" className="btn-primary px-8 py-4 text-base">
              Book Online
              <ArrowRight size={18} />
            </Link>
            <a href="tel:+16462616917" className="btn-secondary px-8 py-4 text-base">
              Call (646) 261-6917
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
