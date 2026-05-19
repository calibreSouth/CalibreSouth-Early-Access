import logo from '../../assets/logo_v2.png'

export function Navbar() {
  return (
    <header className="sticky top-0 z-20 animate-fade-up bg-black/85 backdrop-blur-xl border-b border-white/10" style={{ animationDelay: '100ms' }}>
      <div className="px-[clamp(1.4rem,4vw,3rem)] py-4 flex items-center justify-between gap-5">
        <div className="flex items-center gap-3 min-w-0">
          <img
            src={logo}
            alt="CalibreSouth"
            className="w-9 h-9 object-contain drop-shadow-[0_0_24px_rgba(127,212,245,0.9)]"
          />
          <span className="font-display font-bold tracking-[0.08em] uppercase text-fg text-brand truncate">
            Calibre<span className="text-accent drop-shadow-[0_0_12px_rgba(127,212,245,0.68)]">South</span>
          </span>
        </div>
          <a href="#early-access" className="rounded-full bg-accent px-5 py-3 font-display text-[0.68rem] font-bold uppercase tracking-[0.22em] text-bg transition-all duration-300 hover:-translate-y-px hover:shadow-[0_0_32px_rgba(127,212,245,0.45)]">
            Join
          </a>
        </div>
      </div>
    </header>
  )
}


