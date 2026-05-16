import { Home } from 'lucide-react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import MethodologyGrid from './components/MethodologyGrid';
import BenefitsList from './components/BenefitsList';
import ContactSection from './components/ContactSection';
import descSow from './assets/desc_SOW.png';
import logoSow from './assets/logo_SOW.jpg';


function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src={descSow} alt="Logo SOW" className="h-20 w-auto object-contain mix-blend-multiply" />
          </div>
          <div className="hidden md:flex items-center gap-8 font-medium text-gray-600">
            <a href="#" className="hover:text-green-600 transition-colors flex items-center gap-1">
              <Home size={18} />
              Home
            </a>
            <a href="#sobre" className="hover:text-green-600 transition-colors">Sobre</a>
            <a href="#metodologia" className="hover:text-green-600 transition-colors">Metodologia</a>
            <a href="#contato" className="px-5 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors">Contato</a>
          </div>
        </nav>
      </header>

      <main>
        <HeroSection />
        <AboutSection />
        <MethodologyGrid />
        <BenefitsList />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
