import { motion } from 'framer-motion';
import imgSOW from '../assets/img_SOW.png';

const HeroSection = () => {
  return (
    <section className="relative bg-green-800 overflow-hidden pt-28 pb-20 md:pb-32">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-64 h-64 bg-green-400 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-64 h-64 bg-green-500 rounded-full opacity-10 blur-3xl"></div>

      <div className="container mx-auto px-6 py-12 md:py-20 flex flex-col items-center text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.12, rotate: 6, transition: { type: "spring", stiffness: 300, damping: 15 } }}
          className="flex items-center justify-center w-20 h-20 bg-white/95 border border-green-800/25 rounded-2xl mb-8 p-2 shadow-lg cursor-default"
        >
          <img src={imgSOW} alt="Logo SOW" className="h-16 w-auto object-contain mix-blend-multiply" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6 font-fredoka"
        >
          Projeto <span className="text-green-300">Escola Sustentável</span>
          <br />
          <span className="text-3xl md:text-4xl font-medium text-green-200 mt-2 block">
            Diagnóstico Ambiental Infantil
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl text-lg md:text-xl text-green-100/90 mb-10"
        >
          Transformando alunos em Consultores Ambientais Mirins para construir um futuro mais verde e consciente.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#contato"
            className="px-8 py-4 bg-white text-green-900 rounded-xl font-bold text-lg hover:bg-green-50 hover:-translate-y-1 hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl shadow-green-950/20"
          >
            Quero na minha escola
          </a>
          <a
            href="#sobre"
            className="px-8 py-4 bg-green-700/40 text-green-100 border-2 border-green-700/60 rounded-xl font-bold text-lg hover:bg-green-700/60 hover:-translate-y-1 hover:scale-105 active:scale-95 transition-all duration-300"
          >
            Saiba mais
          </a>
        </motion.div>
      </div>

      {/* Wavy bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-[0] z-10">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[40px] md:h-[60px] text-white fill-current">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C26.9,8.75,53.05,22,79.52,34.35,149.6,67,227.87,73.81,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
