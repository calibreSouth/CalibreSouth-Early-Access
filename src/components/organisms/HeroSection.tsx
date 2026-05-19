import { useCallback, useEffect } from 'react'
import { useLineScramble } from '../../hooks/useLineScramble'
import { AnimatedItem } from '../atoms/AnimatedItem'
import { PhoneForm } from '../molecules/PhoneForm'

export function HeroSection() {
  const line1 = useLineScramble('calibre', 0)
  const line2 = useLineScramble('south', 100)

  useEffect(() => {
    const t = window.setTimeout(() => { line1.trigger(); line2.trigger() }, 1500)
    return () => clearTimeout(t)
  }, [line1, line2])

  const handleMouseEnter = useCallback(() => {
    line1.trigger(); line2.trigger()
  }, [line1, line2])

  return (
    <section
      className="flex-1 flex flex-col justify-end relative overflow-hidden"
      style={{ paddingTop: 'clamp(5rem, 12vh, 8rem)', paddingBottom: 'clamp(3rem, 9vh, 5.5rem)' }}
    >
      <AnimatedItem delay={250}>
        <div className="mb-10 inline-flex items-center gap-3 font-display text-[0.66rem] font-semibold uppercase tracking-[0.28em] text-accent">
          <span className="h-px w-10 bg-accent shadow-[0_0_12px_rgba(127,212,245,0.75)]" />
          Kozhikode / 2026
        </div>
      </AnimatedItem>

      <AnimatedItem delay={350}>
        <h1
          className="font-display font-black leading-[0.82] cursor-default select-none text-fg text-hero uppercase"
          onMouseEnter={handleMouseEnter}
          style={{ letterSpacing: '0' }}
        >
          <span ref={line1.elRef} className="block">calibre</span>
          <span ref={line2.elRef} className="block text-accent drop-shadow-[0_0_28px_rgba(127,212,245,0.55)]">south</span>
        </h1>
      </AnimatedItem>

      <AnimatedItem delay={600}>
        <p className="font-body font-medium tracking-[0.25em] uppercase text-muted text-caption"
          style={{ marginTop: 'clamp(1.2rem, 2vh, 2rem)' }}>
          Every way to move.
        </p>
      </AnimatedItem>

      <AnimatedItem delay={850} className="h-px overflow-hidden"
        style={{ width: '4rem', marginTop: 'clamp(1.4rem, 2.4vh, 2.25rem)', marginBottom: 'clamp(1.4rem, 2.4vh, 2.25rem)' }}>
        <div className="animate-divider h-full bg-accent shadow-[0_0_14px_rgba(127,212,245,0.8)]" style={{ animationDelay: '850ms' }} />
      </AnimatedItem>

      <AnimatedItem delay={1000}>
        <div className="flex flex-wrap items-start gap-[clamp(2rem,5vw,5rem)]">
          <div className="shrink-0">
            <div className="font-display font-black leading-[0.9] uppercase"
              style={{ fontSize: 'clamp(2rem, 4.6vw, 4.6rem)', marginBottom: 'clamp(0.8rem, 1.2vh, 1rem)', letterSpacing: '0' }}>
              <span className="block text-fg">The next</span>
              <span className="block text-accent drop-shadow-[0_0_24px_rgba(127,212,245,0.55)]">movement</span>
              <span className="block text-fg">starts here.</span>
            </div>
            <p className="font-body font-normal leading-relaxed text-muted text-caption" style={{ maxWidth: '340px' }}>
              Designed for an active generation.
              <br />
              <span className="text-fg font-semibold">Be among the first to experience it.</span>
            </p>
          </div>
          <div className="flex-1 pt-1" style={{ minWidth: '260px', maxWidth: '460px' }}>
            <PhoneForm />
          </div>
        </div>
      </AnimatedItem>
    </section>
  )
}
