import React from 'react';
import { Sparkles, Package, Map, MessageSquare, Flag } from 'lucide-react';

const MethodologyGrid = () => {
  const steps = [
    {
      icon: <Sparkles />,
      title: "Introdução Lúdica",
      description: "Contação de história e contextualização do papel do consultor mirim."
    },
    {
      icon: <Package />,
      title: "Entrega de Materiais",
      description: "Distribuição dos 'kits de consultoria' para cada pequeno explorador."
    },
    {
      icon: <Map />,
      title: "Caminhada Diagnóstica",
      description: "Exploração guiada pelos espaços da escola para identificar pontos de melhoria."
    },
    {
      icon: <MessageSquare />,
      title: "Discussão Coletiva",
      description: "Roda de conversa para compartilhar descobertas e propor soluções."
    },
    {
      icon: <Flag />,
      title: "Encerramento",
      description: "Finalização com registro das propostas e certificação simbólica."
    }
  ];

  return (
    <section id="metodologia" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-bold mb-4 uppercase tracking-widest">
          Passo a Passo
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Como funciona a atividade?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative group">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                {index + 1}
              </div>
              <div className="mb-6 text-green-600 flex justify-center group-hover:scale-110 transition-transform">
                {React.cloneElement(step.icon, { size: 40 })}
              </div>
              <h3 className="font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodologyGrid;
