import { useState } from 'react'

interface PhoneFormProps {
  buttonText?: string
  successMessage?: string
  note?: string
}

export function PhoneForm({
  buttonText = 'Stay in the Loop',
  successMessage = "You're on the list. We'll reach out before launch.",
  note,
}: PhoneFormProps) {
  const [contact,   setContact]   = useState('')
  const [agreed,    setAgreed]    = useState(false)
  const [submitted, setSubmitted] = useState(() => {
    const leads = JSON.parse(localStorage.getItem('cs_leads') || '[]') as unknown[]
    return leads.length > 0
  })
  const [loading,   setLoading]   = useState(false)
  const [error,     setError]     = useState('')

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (/[a-zA-Z@]/.test(value)) {
      setContact(value.replace(/\s/g, '').slice(0, 254))
    } else {
      setContact(value.replace(/\D/g, '').slice(0, 10))
    }
    setError('')
  }

  const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
  const isValidPhone = (value: string) => /^\d{10}$/.test(value)

  const handleSubmit = async (e: React.BaseSyntheticEvent) => {
    e.preventDefault()
    const trimmed = contact.trim()
    const isEmail = /[a-zA-Z@]/.test(trimmed)
    if (isEmail ? !isValidEmail(trimmed) : !isValidPhone(trimmed)) {
      setError('Please enter a valid email or 10-digit WhatsApp number.')
      return
    }
    if (!agreed) { setError('Please accept the consent to continue.'); return }

    setLoading(true)

    const payload = isEmail
      ? { email: trimmed, ts: new Date().toISOString() }
      : { phone: trimmed, ts: new Date().toISOString() }

    const existing = JSON.parse(localStorage.getItem('cs_leads') || '[]') as unknown[]
    existing.push(payload)
    localStorage.setItem('cs_leads', JSON.stringify(existing))

    const endpoint = import.meta.env.VITE_SHEET_ENDPOINT as string | undefined
    if (endpoint) {
      try {
        await fetch(endpoint, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        })
      } catch {
        // localStorage backup already saved
      }
    }

    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="inline-flex items-center gap-3 rounded-full border border-accent/35 bg-accent/10 px-5 py-[14px] shadow-[0_0_24px_rgba(127,212,245,0.12)]">
        <svg className="text-accent" width="13" height="13" viewBox="0 0 13 13" fill="none">
          <path d="M1.5 6.5L5 10L11.5 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="text-[0.8rem] text-muted font-body font-normal">{successMessage}</span>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="form-input-row">
        <input
          type="text"
          inputMode="text"
          autoComplete="email tel"
          value={contact}
          onChange={handleContactChange}
          placeholder="Email or WhatsApp number"
          className="flex-1 bg-transparent border-none outline-none px-6 h-14 font-body text-[0.9rem] font-normal text-fg placeholder:text-muted caret-accent"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-accent font-display font-bold text-[0.68rem] tracking-[0.22em] text-bg uppercase whitespace-nowrap px-7 h-14 hover:tracking-[0.26em] hover:shadow-[0_0_30px_rgba(127,212,245,0.45)] cursor-pointer transition-all duration-300 disabled:opacity-60"
        >
          {loading ? '...' : buttonText}
        </button>
      </div>

      <label className="flex items-start gap-3 mt-7 cursor-pointer text-left">
        <input
          type="checkbox"
          checked={agreed}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setAgreed(e.target.checked); setError('') }}
        />
        <span className="font-body text-[0.68rem] text-muted leading-relaxed tracking-[0.02em]">
          I agree to be contacted by email or WhatsApp with early access updates about CalibreSouth. No spam, ever.
        </span>
      </label>

      {error && (
        <p className="mt-2 text-[0.68rem] font-body tracking-[0.02em] text-accent text-left">{error}</p>
      )}
      {note && (
        <p className="mt-3 text-center font-display text-[0.62rem] tracking-[0.24em] uppercase text-dim">{note}</p>
      )}
    </form>
  )
}
