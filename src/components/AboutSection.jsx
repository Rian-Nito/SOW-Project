import { motion } from 'framer-motion';
import { Users, Target, ShieldCheck } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2"
          >
            <div className="relative">
              <div className="bg-green-100 rounded-3xl w-full h-80 md:h-96 flex items-center justify-center">
                <Users size={120} className="text-green-500 opacity-50" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-green-50">
                <span className="text-3xl font-bold text-green-600">5-6</span>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Anos de idade</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2"
          >
            <span className="inline-block px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-bold mb-4 uppercase tracking-widest">
              Sobre o Projeto
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Consultores Ambientais Mirins em Ação
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              O projeto propõe uma experiência lúdica e educativa onde as crianças assumem o papel de consultores ambientais. O foco é envolver os pequenos no diagnóstico do ambiente escolar, promovendo a consciência desde cedo.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-50 rounded-lg text-green-600">
                  <Target size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Público-Alvo</h4>
                  <p className="text-gray-500">Especialmente desenhado para crianças de <strong>5 e 6 anos</strong>.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-50 rounded-lg text-green-600">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Educação Ativa</h4>
                  <p className="text-gray-500">Metodologia participativa e foco no protagonismo infantil.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
