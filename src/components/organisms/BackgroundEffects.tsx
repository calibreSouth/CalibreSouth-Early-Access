function DotGrid() {
  return (
    <svg className="fixed inset-0 w-full h-full pointer-events-none opacity-[0.09] z-1">
      <defs>
        <pattern id="dots" patternUnits="userSpaceOnUse" width="32" height="32">
          <circle cx="1" cy="1" r="0.75" fill="white" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dots)" />
    </svg>
  )
}

function Vignette() {
  return (
    <div className="fixed inset-0 pointer-events-none z-3"
      style={{ background: 'radial-gradient(ellipse 80% 72% at 50% 48%, transparent 0%, rgba(0,0,0,0.36) 54%, rgba(0,0,0,0.94) 100%)' }} />
  )
}

function CenterGlow() {
  return (
    <div className="fixed inset-0 pointer-events-none animate-breathe z-1"
      style={{ background: 'radial-gradient(ellipse 62% 50% at 50% 50%, rgba(127,212,245,0.24) 0%, rgba(127,212,245,0.08) 34%, transparent 70%)' }} />
  )
}

function ScanLines() {
  return (
    <div className="fixed inset-0 pointer-events-none z-2 opacity-[0.18]"
      style={{ background: 'repeating-linear-gradient(0deg, transparent 0 2px, rgba(127,212,245,0.05) 2px 3px)' }} />
  )
}

function EdgeLines() {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 h-px pointer-events-none z-2"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(127,212,245,0.65), transparent)' }} />
      <div className="fixed bottom-0 left-0 right-0 h-px pointer-events-none z-2"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(127,212,245,0.3), transparent)' }} />
    </>
  )
}

function CornerBrackets() {
  const size = 22, offset = 20
  const stroke = 'rgba(127,212,245,0.32)', sw = '0.8'
  const s: React.CSSProperties = { position: 'fixed', pointerEvents: 'none', zIndex: 2 }
  return (
    <>
      <svg className="corner-bracket" style={{ ...s, top: offset, left: offset }} width={size} height={size} fill="none">
        <polyline points={`${size},0 0,0 0,${size}`} stroke={stroke} strokeWidth={sw} />
      </svg>
      <svg className="corner-bracket" style={{ ...s, top: offset, right: offset }} width={size} height={size} fill="none">
        <polyline points={`0,0 ${size},0 ${size},${size}`} stroke={stroke} strokeWidth={sw} />
      </svg>
      <svg className="corner-bracket" style={{ ...s, bottom: offset, left: offset }} width={size} height={size} fill="none">
        <polyline points={`${size},${size} 0,${size} 0,0`} stroke={stroke} strokeWidth={sw} />
      </svg>
      <svg className="corner-bracket" style={{ ...s, bottom: offset, right: offset }} width={size} height={size} fill="none">
        <polyline points={`0,${size} ${size},${size} ${size},0`} stroke={stroke} strokeWidth={sw} />
      </svg>
    </>
  )
}

function GrainOverlay() {
  const svg = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`
  return (
    <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.04] mix-blend-overlay"
      style={{ backgroundImage: svg, backgroundRepeat: 'repeat', backgroundSize: '256px 256px' }} />
  )
}

export function BackgroundEffects() {
  return (
    <>
      <GrainOverlay />
      <DotGrid />
      <ScanLines />
      <Vignette />
      <CenterGlow />
      <EdgeLines />
      <CornerBrackets />
    </>
  )
}
