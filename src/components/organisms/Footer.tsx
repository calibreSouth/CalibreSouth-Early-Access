export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-black px-[clamp(1.4rem,4vw,3rem)] py-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <span className="font-display font-black tracking-[0.08em] uppercase text-dim text-brand">
          CALIBRESOUTH
        </span>
        <span className="font-body text-[0.62rem] tracking-[0.25em] uppercase text-dim">
          (C) 2026 CalibreSouth / All rights reserved
        </span>
        <span className="font-body text-[0.62rem] tracking-[0.25em] uppercase text-dim sm:text-right">
          Kozhikode, Kerala
        </span>
      </div>
    </footer>
  )
}
