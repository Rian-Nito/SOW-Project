import { useState } from 'react';
import { Home, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import MethodologyGrid from './components/MethodologyGrid';
import BenefitsList from './components/BenefitsList';
import ContactSection from './components/ContactSection';
import descSow from './assets/desc_SOW.png';
import logoSow from './assets/logo_SOW.jpg';


function App() {
  const [showProjects, setShowProjects] = useState(false);

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

            <div className="relative">
              <button
                onMouseOver={() => setShowProjects(!showProjects)}
                className="hover:text-green-600 transition-colors flex items-center gap-1 focus:outline-none"
              >
                Projetos
                <motion.div
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown size={16} />
                </motion.div>
              </button>

              <AnimatePresence>
                {showProjects && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-white border border-gray-100 shadow-xl rounded-xl py-3 px-6 whitespace-nowrap"
                  >
                    <span className="text-sm font-semibold text-green-600 flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      Em processo
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a href="#contato" className="px-5 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors ml-2">Contato</a>
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
