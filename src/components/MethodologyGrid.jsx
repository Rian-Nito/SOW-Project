import React from 'react';
import { Sparkles, Package, Map, MessageSquare, Flag } from 'lucide-react';

const MethodologyGrid = () => {
  const steps = [
    {
      icon: <Sparkles />,
      title: "Introdução Lúdica",
      description: "Contação de história e contextualização do papel do consultor mirim.",
      bgClass: "bg-purple-50",
      colorClass: "text-purple-600",
      borderClass: "border-purple-100"
    },
    {
      icon: <Package />,
      title: "Entrega de Materiais",
      description: "Distribuição dos 'kits de consultoria' para cada pequeno explorador.",
      bgClass: "bg-amber-50",
      colorClass: "text-amber-600",
      borderClass: "border-amber-100"
    },
    {
      icon: <Map />,
      title: "Caminhada Diagnóstica",
      description: "Exploração guiada pelos espaços da escola para identificar pontos de melhoria.",
      bgClass: "bg-sky-50",
      colorClass: "text-sky-600",
      borderClass: "border-sky-100"
    },
    {
      icon: <MessageSquare />,
      title: "Discussão Coletiva",
      description: "Roda de conversa para compartilhar descobertas e propor soluções.",
      bgClass: "bg-rose-50",
      colorClass: "text-rose-600",
      borderClass: "border-rose-100"
    },
    {
      icon: <Flag />,
      title: "Encerramento",
      description: "Finalização com registro das propostas e certificação simbólica.",
      bgClass: "bg-emerald-50",
      colorClass: "text-emerald-600",
      borderClass: "border-emerald-100"
    }
  ];

  return (
    <section id="metodologia" className="py-20 bg-gray-50 scroll-mt-28">
      <div className="container mx-auto px-6 text-center">
        <span className="inline-block px-4 py-2 bg-green-800 text-green-100 border border-green-700/30 rounded-full text-sm font-bold mb-4 uppercase tracking-widest">
          Passo a Passo
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 font-fredoka">
          Como funciona a atividade?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 active:scale-98 transition-all duration-300 relative group flex flex-col items-center">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 bg-green-800 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md">
                {index + 1}
              </div>
              
              {/* Playful Colorful Icon Blob */}
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mt-2 border ${step.bgClass} ${step.colorClass} ${step.borderClass} group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-inner`}>
                {React.cloneElement(step.icon, { size: 30, className: "stroke-[2.5]" })}
              </div>

              <h3 className="font-bold text-gray-900 mb-3 font-fredoka text-lg">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodologyGrid;
