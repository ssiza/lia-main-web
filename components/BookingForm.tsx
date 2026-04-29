'use client'

import { useState } from 'react'
import { CheckCircle2, ArrowRight, ArrowLeft, Loader2, Send } from 'lucide-react'

interface FormData {
  name: string
  email: string
  phone: string
  address: string
  services: string[]
  date: string
  time: string
  notes: string
}

const SERVICES = [
  { id: 'cleaning', label: 'House Cleaning' },
  { id: 'laundry', label: 'Laundry' },
  { id: 'meals', label: 'Meal Preparation' },
  { id: 'shopping', label: 'Shopping Assistance' },
]

const TIME_SLOTS = [
  '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM',
  '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM',
  '4:00 PM', '5:00 PM',
]

const INITIAL: FormData = {
  name: '', email: '', phone: '', address: '',
  services: [], date: '', time: '', notes: '',
}

type Step = 'contact' | 'service' | 'review' | 'success'

export default function BookingForm() {
  const [step, setStep] = useState<Step>('contact')
  const [form, setForm] = useState<FormData>(INITIAL)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const update = (field: keyof FormData, value: string | string[]) =>
    setForm((prev) => ({ ...prev, [field]: value }))

  const toggleService = (id: string) => {
    setForm((prev) => ({
      ...prev,
      services: prev.services.includes(id)
        ? prev.services.filter((s) => s !== id)
        : [...prev.services, id],
    }))
  }

  const getTodayDate = () => {
    const d = new Date()
    d.setDate(d.getDate() + 1)
    return d.toISOString().split('T')[0]
  }

  const contactValid =
    form.name.trim() && form.email.trim() && form.phone.trim() && form.address.trim()
  const serviceValid = form.services.length > 0 && form.date && form.time

  const submit = async () => {
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          services: form.services.map(
            (id) => SERVICES.find((s) => s.id === id)?.label ?? id
          ),
        }),
      })
      if (!res.ok) throw new Error('Failed to submit')
      setStep('success')
    } catch {
      setError('Something went wrong. Please try again or call us at (646) 261-6917.')
    } finally {
      setLoading(false)
    }
  }

  if (step === 'success') {
    return (
      <div className="text-center py-16 px-6">
        <div className="w-20 h-20 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 size={40} className="text-primary" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-3">Booking Received!</h2>
        <p className="text-gray-500 text-lg mb-2">
          Thanks, <strong>{form.name}</strong>! We&apos;ve received your booking request.
        </p>
        <p className="text-gray-500 mb-8">
          We&apos;ll confirm your appointment via email at <strong>{form.email}</strong> within a few hours.
          If you need anything sooner, call us at{' '}
          <a href="tel:+16462616917" className="text-primary font-semibold">(646) 261-6917</a>.
        </p>
        <button
          onClick={() => { setStep('contact'); setForm(INITIAL) }}
          className="btn-secondary"
        >
          Book Another Service
        </button>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress */}
      <div className="flex items-center gap-2 mb-10">
        {(['contact', 'service', 'review'] as Step[]).map((s, i) => (
          <div key={s} className="flex items-center gap-2 flex-1">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                step === s
                  ? 'bg-primary text-white'
                  : (step === 'review' && i < 2) || (step === 'service' && i === 0)
                  ? 'bg-primary-100 text-primary'
                  : 'bg-gray-100 text-gray-400'
              }`}
            >
              {(step === 'review' && i < 2) || (step === 'service' && i === 0) ? (
                <CheckCircle2 size={16} />
              ) : (
                i + 1
              )}
            </div>
            <span className={`text-sm font-medium capitalize hidden sm:block ${step === s ? 'text-gray-900' : 'text-gray-400'}`}>
              {s === 'contact' ? 'Your Info' : s === 'service' ? 'Service' : 'Review'}
            </span>
            {i < 2 && <div className={`flex-1 h-0.5 ${(step === 'service' && i === 0) || step === 'review' ? 'bg-primary-200' : 'bg-gray-100'}`} />}
          </div>
        ))}
      </div>

      {/* Step 1: Contact */}
      {step === 'contact' && (
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-1">Your Information</h2>
          <p className="text-gray-500 text-sm mb-8">Tell us a bit about yourself so we can reach you.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name *</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => update('name', e.target.value)}
                placeholder="Jane Smith"
                className="input-field"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone *</label>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => update('phone', e.target.value)}
                placeholder="(617) 555-0100"
                className="input-field"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Email *</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => update('email', e.target.value)}
              placeholder="jane@example.com"
              className="input-field"
            />
          </div>
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Service Address *</label>
            <input
              type="text"
              value={form.address}
              onChange={(e) => update('address', e.target.value)}
              placeholder="123 Main St, Everett, MA 02149"
              className="input-field"
            />
          </div>
          <button
            onClick={() => setStep('service')}
            disabled={!contactValid}
            className="btn-primary w-full py-4 text-base disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0"
          >
            Continue
            <ArrowRight size={18} />
          </button>
        </div>
      )}

      {/* Step 2: Service */}
      {step === 'service' && (
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-1">Choose Your Service</h2>
          <p className="text-gray-500 text-sm mb-8">Select all services you need and pick a date &amp; time.</p>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-3">Services Needed *</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {SERVICES.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => toggleService(s.id)}
                  className={`flex items-center gap-3 p-4 rounded-xl border-2 text-left transition-all duration-200 ${
                    form.services.includes(s.id)
                      ? 'border-primary bg-primary-50 text-primary'
                      : 'border-gray-200 hover:border-gray-300 text-gray-700'
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-md border-2 flex items-center justify-center shrink-0 transition-colors ${
                      form.services.includes(s.id) ? 'border-primary bg-primary' : 'border-gray-300'
                    }`}
                  >
                    {form.services.includes(s.id) && (
                      <CheckCircle2 size={12} className="text-white" strokeWidth={3} />
                    )}
                  </div>
                  <span className="font-medium text-sm">{s.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Preferred Date *</label>
              <input
                type="date"
                value={form.date}
                min={getTodayDate()}
                onChange={(e) => update('date', e.target.value)}
                className="input-field"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Preferred Time *</label>
              <select
                value={form.time}
                onChange={(e) => update('time', e.target.value)}
                className="input-field"
              >
                <option value="">Select a time</option>
                {TIME_SLOTS.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Additional Notes</label>
            <textarea
              value={form.notes}
              onChange={(e) => update('notes', e.target.value)}
              rows={4}
              placeholder="Any special instructions, access codes, allergies, or details we should know..."
              className="input-field resize-none"
            />
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => setStep('contact')}
              className="btn-secondary flex items-center gap-2 px-6"
            >
              <ArrowLeft size={16} />
              Back
            </button>
            <button
              onClick={() => setStep('review')}
              disabled={!serviceValid}
              className="btn-primary flex-1 py-4 text-base disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0"
            >
              Review Booking
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Review */}
      {step === 'review' && (
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-1">Review Your Booking</h2>
          <p className="text-gray-500 text-sm mb-8">Make sure everything looks correct before submitting.</p>

          <div className="bg-gray-50 rounded-2xl divide-y divide-gray-200 mb-8">
            {[
              { label: 'Name', value: form.name },
              { label: 'Email', value: form.email },
              { label: 'Phone', value: form.phone },
              { label: 'Address', value: form.address },
              {
                label: 'Services',
                value: form.services
                  .map((id) => SERVICES.find((s) => s.id === id)?.label)
                  .join(', '),
              },
              { label: 'Date', value: new Date(form.date + 'T12:00:00').toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) },
              { label: 'Time', value: form.time },
              ...(form.notes ? [{ label: 'Notes', value: form.notes }] : []),
            ].map(({ label, value }) => (
              <div key={label} className="flex justify-between gap-4 px-5 py-3.5">
                <span className="text-sm font-medium text-gray-500">{label}</span>
                <span className="text-sm text-gray-900 text-right">{value}</span>
              </div>
            ))}
          </div>

          {error && (
            <div className="mb-4 p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl text-sm">
              {error}
            </div>
          )}

          <div className="flex gap-3">
            <button
              onClick={() => setStep('service')}
              className="btn-secondary flex items-center gap-2 px-6"
            >
              <ArrowLeft size={16} />
              Edit
            </button>
            <button
              onClick={submit}
              disabled={loading}
              className="btn-primary flex-1 py-4 text-base disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Confirm Booking
                  <Send size={16} />
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
