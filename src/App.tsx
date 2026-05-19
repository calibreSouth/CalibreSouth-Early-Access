import { BackgroundEffects } from './components/organisms/BackgroundEffects'
import { Navbar } from './components/organisms/Navbar'
import { HeroSection } from './components/organisms/HeroSection'
import { StatsSection } from './components/organisms/StatsSection'
import { ManifestoSection } from './components/organisms/ManifestoSection'
import { CTASection } from './components/organisms/CTASection'
import { Footer } from './components/organisms/Footer'

export default function App() {
  return (
    <main className="relative font-body bg-bg min-h-screen">
      <BackgroundEffects />
      <Navbar />
      <div className="page-frame relative z-10 flex flex-col px-2 sm:px-4 md:px-6 lg:px-8 py-3 md:py-4">
        <HeroSection />
      </div>
      <StatsSection />
      <ManifestoSection />
      <CTASection />
      <Footer />
    </main>
  )
}
