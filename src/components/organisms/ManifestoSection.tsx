import { useEffect, useRef } from 'react'

export function ManifestoSection() {
  const quoteRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = quoteRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('manifesto-visible') },
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative z-10 overflow-hidden bg-black px-[clamp(1.4rem,4vw,3rem)] py-24 md:py-36 border-b border-white/10">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none" aria-hidden>
        <span
          className="font-display font-black uppercase whitespace-nowrap text-white/[0.12] drop-shadow-[0_0_28px_rgba(127,212,245,0.12)]"
          style={{ fontSize: 'clamp(4.8rem, 12vw, 15rem)', letterSpacing: '0' }}
        >
          CALIBRESOUTH
        </span>
      </div>

      <div className="absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl" />

      <div className="relative flex flex-col items-center text-center">
        <div
          ref={quoteRef}
          className="manifesto-item font-display font-black leading-[0.92] uppercase text-fg"
          style={{ fontSize: 'clamp(2.8rem, 7vw, 7rem)', letterSpacing: '0' }}
        >
          One city.<br />
          <span className="text-accent drop-shadow-[0_0_24px_rgba(127,212,245,0.55)]">
            Every way to move.
          </span>
        </div>
      </div>
    </section>
  )
}
