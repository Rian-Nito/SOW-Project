import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const BenefitsList = () => {
  const benefits = [
    "Protagonismo infantil no ambiente escolar",
    "Desenvolvimento de consciência ambiental crítica",
    "Estímulo ao trabalho em equipe e colaboração",
    "Melhoria na percepção espacial e cuidado com o entorno",
    "Engajamento lúdico com temas de sustentabilidade",
    "Fortalecimento do vínculo entre aluno e escola"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-green-600 rounded-3xl p-8 md:p-16 text-white flex flex-col md:flex-row items-center gap-12 overflow-hidden relative">
          {/* Decorative background shape */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="md:w-1/2 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Por que levar o projeto para sua escola?
            </h2>
            <p className="text-green-100 text-lg mb-8">
              Além de atender diretrizes educacionais, criamos uma conexão real entre a criança e a preservação do planeta.
            </p>
          </div>
          
          <div className="md:w-1/2 relative z-10">
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-1 bg-green-500 rounded-full p-1">
                    <CheckCircle2 size={18} />
                  </div>
                  <span className="text-lg font-medium">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsList;
