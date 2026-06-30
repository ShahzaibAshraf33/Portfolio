import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import ParticleBackground from './effects/ParticleBackground';
import CustomCursor from './effects/CustomCursor';
import ScrollProgress from './effects/ScrollProgress';

function App() {
  return (
    <div className="relative bg-bg-primary min-h-screen overflow-hidden">
      <ParticleBackground />
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
