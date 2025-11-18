import Header from './components/Header'
import HeroSection from './components/HeroSection'
import SkillsSection from './components/SkillsSection'
import ExperienceSection from './components/ExperienceSection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'

export default () => (
  <div className="w-full bg-gray-100">
    <div className="max-w-7xl mx-auto px-0">
      <Header />
      <HeroSection />
      <SkillsSection />
      <CTASection />
      <ExperienceSection />
      <Footer />
    </div>
  </div>
)
