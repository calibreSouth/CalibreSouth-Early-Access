import { useEffect, useRef } from 'react'
import { PhoneForm } from '../molecules/PhoneForm'

export function CTASection() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('cta-visible') },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="early-access" ref={ref}
      className="cta-section relative z-10 flex flex-col items-center overflow-hidden bg-white px-[clamp(1.4rem,4vw,3rem)] py-24 text-center text-black md:py-36">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 45% 42% at 50% 42%, rgba(127,212,245,0.22) 0%, transparent 70%)' }} />
      <p className="cta-item font-display text-[0.68rem] font-semibold tracking-[0.3em] uppercase text-[#2B8FB8] mb-7">
        Be the first to know
      </p>
      <h2 className="cta-item font-display font-black leading-[0.88] text-black mb-7 uppercase"
        style={{ fontSize: 'clamp(3.2rem, 8vw, 7.5rem)', letterSpacing: '0' }}>
        Be first.
      </h2>
      <p className="cta-item font-body font-normal text-black/55 leading-relaxed mb-10 max-w-md text-caption">
        Something is about to change in Kozhikode.
        <br />
        Leave your email or WhatsApp number — we'll find you when it's time.
      </p>
      <div className="cta-item w-full max-w-md [&_.form-input-row]:bg-black [&_.form-input-row]:border-black/15 [&_label_span]:text-black/55 [&_input]:text-white [&_button]:bg-accent">
        <PhoneForm
          buttonText="I'm In ->"
          successMessage="Perfect. You will hear from us before anyone else does."
          note="Kozhikode only / Launching Soon 2026"
        />
      </div>
    </section>
  )
}
