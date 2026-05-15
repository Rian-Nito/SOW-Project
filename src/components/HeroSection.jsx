import React from 'react';
import { Leaf } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative bg-green-50 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-64 h-64 bg-green-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-64 h-64 bg-green-300 rounded-full opacity-20 blur-3xl"></div>

      <div className="container mx-auto px-6 py-20 md:py-32 flex flex-col items-center text-center relative z-10">
        <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-2xl mb-8 text-green-600">
          <Leaf size={32} />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
          Projeto <span className="text-green-600">Escola Sustentável</span>
          <br />
          <span className="text-3xl md:text-4xl font-medium text-gray-600">
            Diagnóstico Ambiental Infantil
          </span>
        </h1>
        
        <p className="max-w-2xl text-lg md:text-xl text-gray-600 mb-10">
          Transformando alunos em Consultores Ambientais Mirins para construir um futuro mais verde e consciente.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <a 
            href="#contato" 
            className="px-8 py-4 bg-green-600 text-white rounded-xl font-bold text-lg hover:bg-green-700 transition-all hover:scale-105 shadow-lg shadow-green-200"
          >
            Quero na minha escola
          </a>
          <a 
            href="#sobre" 
            className="px-8 py-4 bg-white text-green-700 border-2 border-green-100 rounded-xl font-bold text-lg hover:bg-green-50 transition-all"
          >
            Saiba mais
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
