import { StatItem } from '../molecules/StatItem'

const STATS = [
  { number: 'SOON',  suffix: '.',      label: '2026 / Launch',            delay: 0   },
  { number: '1',     suffix: '.',      label: 'Starting with Kozhikode',  delay: 100, accentPart: ' CITY' },
  { number: '0',     suffix: '.',      label: 'Compromises on quality',   delay: 200 },
]

export function StatsSection() {
  return (
    <section className="relative z-10 border-y border-white/10 px-[clamp(1.4rem,4vw,3rem)] py-9 bg-black">
      <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
        {STATS.map((stat) => (
          <StatItem key={stat.label} {...stat} />
        ))}
      </div>
    </section>
  )
}
