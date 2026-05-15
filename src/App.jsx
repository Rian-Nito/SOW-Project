import React from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import MethodologyGrid from './components/MethodologyGrid';
import BenefitsList from './components/BenefitsList';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-green-600 rounded-lg"></div>
            <span className="font-bold text-xl tracking-tight">SOW Consultoria</span>
          </div>
          <div className="hidden md:flex items-center gap-8 font-medium text-gray-600">
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
