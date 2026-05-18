import { motion } from 'framer-motion';
import { Users, Target, ShieldCheck } from 'lucide-react';
import childrenPlanting from '../assets/children_planting.png';

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 bg-white scroll-mt-28 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-green-50 rounded-full opacity-60 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-emerald-50 rounded-full opacity-60 blur-3xl pointer-events-none"></div>
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
              <div className="bg-green-100 rounded-3xl w-full h-80 md:h-96 overflow-hidden flex items-center justify-center shadow-inner relative group border-4 border-green-800">
                <img
                  src={childrenPlanting}
                  alt="Crianças plantando uma muda no jardim da escola"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-green-50">
                <span className="text-3xl font-bold text-green-800">5-6</span>
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
            <span className="inline-block px-4 py-2 bg-green-800 text-green-100 border border-green-700/30 rounded-full text-sm font-bold mb-4 uppercase tracking-widest">
              Sobre o Projeto
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-fredoka">
              Consultores Ambientais Mirins em Ação
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              O projeto propõe uma experiência lúdica e educativa onde as crianças assumem o papel de consultores ambientais. O foco é envolver os pequenos no diagnóstico do ambiente escolar, promovendo a consciência desde cedo.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4 group cursor-default">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center border bg-sky-50 text-sky-600 border-sky-100 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-inner flex-shrink-0 mt-1">
                  <Target size={26} className="stroke-[2.5]" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg group-hover:text-green-800 transition-colors">Público-Alvo</h4>
                  <p className="text-gray-500">Especialmente desenhado para crianças de <strong>5 e 6 anos</strong>.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 group cursor-default">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center border bg-purple-50 text-purple-600 border-purple-100 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-inner flex-shrink-0 mt-1">
                  <ShieldCheck size={26} className="stroke-[2.5]" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg group-hover:text-green-800 transition-colors">Educação Ativa</h4>
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
