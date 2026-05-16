import { useState } from 'react';
import { Home, ChevronDown, Menu, X } from 'lucide-react';
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

          {/* Botão Menu Mobile */}
          <button
            className="md:hidden p-2 text-gray-600 hover:text-green-600 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* Menu Mobile Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
            >
              <div className="flex flex-col p-6 gap-4 font-medium text-gray-600">
                <a
                  href="#"
                  onClick={() => setIsMenuOpen(false)}
                  className="hover:text-green-600 transition-colors flex items-center gap-2 py-2"
                >
                  <Home size={20} />
                  Home
                </a>
                <a
                  href="#sobre"
                  onClick={() => setIsMenuOpen(false)}
                  className="hover:text-green-600 transition-colors py-2"
                >
                  Sobre
                </a>
                <a
                  href="#metodologia"
                  onClick={() => setIsMenuOpen(false)}
                  className="hover:text-green-600 transition-colors py-2"
                >
                  Metodologia
                </a>
                <div className="py-2">
                  <span className="text-sm font-semibold text-green-600 flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    Projetos (Em processo)
                  </span>
                </div>
                <a
                  href="#contato"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full py-3 bg-green-600 text-white rounded-xl text-center hover:bg-green-700 transition-colors mt-2"
                >
                  Contato
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
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
