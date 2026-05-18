import React from 'react';
import { MessageCircle, Mail } from 'lucide-react';

const ContactSection = () => {
  const whatsappNumber = "5511999999999"; // Placeholder
  const email = "contato@sowconsultoria.com.br"; // Placeholder
  const message = encodeURIComponent("Olá! Gostaria de saber mais sobre o Projeto Escola Sustentável para minha escola.");

  return (
    <section id="contato" className="py-20 bg-green-800 scroll-mt-28 relative">
      {/* Wavy top divider */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-[0] -translate-y-[99%] z-10 pointer-events-none rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[40px] md:h-[60px] text-green-800 fill-current transform rotate-180">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C26.9,8.75,53.05,22,79.52,34.35,149.6,67,227.87,73.81,321.39,56.44Z"></path>
        </svg>
      </div>
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-fredoka">
          Pronto para transformar sua escola?
        </h2>
        <p className="text-xl text-green-100/90 mb-12 max-w-2xl mx-auto">
          Entre em contato conosco para agendar uma atividade ou tirar suas dúvidas.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a
            href={`https://wa.me/${whatsappNumber}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-10 py-5 bg-white text-green-900 rounded-2xl font-bold text-lg hover:bg-green-50 hover:-translate-y-1 hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl shadow-green-950/20"
          >
            <MessageCircle size={24} />
            Falar no WhatsApp
          </a>

          <a
            href={`mailto:${email}?subject=Interesse no Projeto Escola Sustentável`}
            className="flex items-center justify-center gap-3 px-10 py-5 bg-green-700/40 text-green-100 border-2 border-green-700/60 rounded-2xl font-bold text-lg hover:bg-green-700/60 hover:text-white hover:-translate-y-1 hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <Mail size={24} />
            Enviar E-mail
          </a>
        </div>

        <p className="mt-12 text-white text-sm">
          © 2026 SOW Consultoria Ambiental. Todos os direitos reservados.
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
