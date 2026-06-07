import { useEffect, useRef } from 'react'

interface StatItemProps {
  number: string
  accentPart?: string
  suffix: string
  label: string
  delay?: number
}

export function StatItem({ number, accentPart, suffix, label, delay = 0 }: StatItemProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('stat-visible') },
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="stat-item py-10 sm:py-5 sm:px-8 first:pl-0 last:pr-0" style={{ transitionDelay: `${delay}ms` }}>
      <div className="font-display font-black leading-none text-stat mb-3 uppercase">
        <span className="text-accent drop-shadow-[0_0_20px_rgba(239,68,68,0.55)]">{number}</span>
        {accentPart && <span className="text-fg">{accentPart}</span>}
        <span className="text-accent drop-shadow-[0_0_20px_rgba(239,68,68,0.55)]">{suffix}</span>
      </div>
      <div className="font-body text-[0.64rem] font-semibold tracking-[0.28em] uppercase text-muted">{label}</div>
    </div>
  )
}
