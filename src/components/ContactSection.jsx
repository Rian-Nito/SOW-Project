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

        {/* Botões de Contato Principais */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-20 relative z-20">
          <a
            href={`https://wa.me/${whatsappNumber}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-10 py-5 bg-white text-green-900 rounded-2xl font-bold text-lg hover:bg-green-50 hover:-translate-y-1 hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl shadow-green-950/20 cursor-pointer"
          >
            <MessageCircle size={24} />
            Falar no WhatsApp
          </a>

          <a
            href={`mailto:${email}?subject=Interesse no Projeto Escola Sustentável`}
            className="flex items-center justify-center gap-3 px-10 py-5 bg-green-700/40 text-green-100 border-2 border-green-700/60 rounded-2xl font-bold text-lg hover:bg-green-700/60 hover:text-white hover:-translate-y-1 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
          >
            <Mail size={24} />
            Enviar E-mail
          </a>
        </div>

        {/* Rodapé Reestruturado e Suave */}
        <div className="mt-16 pt-12 border-t border-green-700/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 text-left max-w-4xl mx-auto">
            {/* Coluna 1: Menu */}
            <div className="flex flex-col">
              <h4 className="text-green-300/80 font-bold uppercase tracking-widest text-xs mb-4 font-fredoka">
                Menu
              </h4>
              <ul className="space-y-2.5">
                <li>
                  <a href="#" className="text-green-200/60 hover:text-white transition-colors duration-200 text-sm">
                    Início
                  </a>
                </li>
                <li>
                  <a href="#sobre" className="text-green-200/60 hover:text-white transition-colors duration-200 text-sm">
                    Sobre
                  </a>
                </li>
                <li>
                  <a href="#metodologia" className="text-green-200/60 hover:text-white transition-colors duration-200 text-sm">
                    Metodologia
                  </a>
                </li>
              </ul>
            </div>

            {/* Coluna 2: Sociais e Contatos */}
            <div className="flex flex-col">
              <h4 className="text-green-300/80 font-bold uppercase tracking-widest text-xs mb-4 font-fredoka">
                Redes & Contato
              </h4>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="https://www.instagram.com/sow.consultoria.ambiental/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-green-200/60 hover:text-white transition-colors duration-200 text-sm group"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="16" 
                      height="16" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="text-green-300 group-hover:scale-110 transition-transform"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                    <span>Instagram</span>
                  </a>
                </li>
                <li>
                  <a 
                    href={`https://wa.me/${whatsappNumber}?text=${message}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-green-200/60 hover:text-white transition-colors duration-200 text-sm group"
                  >
                    <MessageCircle size={16} className="text-green-300 group-hover:scale-110 transition-transform" />
                    <span>WhatsApp</span>
                  </a>
                </li>
                <li>
                  <a 
                    href={`mailto:${email}?subject=Interesse no Projeto Escola Sustentável`}
                    className="flex items-center gap-2.5 text-green-200/60 hover:text-white transition-colors duration-200 text-sm group"
                  >
                    <Mail size={16} className="text-green-300 group-hover:scale-110 transition-transform" />
                    <span>E-mail</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Coluna 3: Legal */}
            <div className="flex flex-col">
              <h4 className="text-green-300/80 font-bold uppercase tracking-widest text-xs mb-4 font-fredoka">
                Legal
              </h4>
              <ul className="space-y-2.5">
                <li>
                  <a 
                    href="#" 
                    onClick={(e) => { e.preventDefault(); alert("Os Termos de Uso estarão disponíveis em breve!"); }}
                    className="text-green-200/60 hover:text-white transition-colors duration-200 text-sm"
                  >
                    Termos & Condições
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    onClick={(e) => { e.preventDefault(); alert("A Política de Privacidade estará disponível em breve!"); }}
                    className="text-green-200/60 hover:text-white transition-colors duration-200 text-sm"
                  >
                    Política de Privacidade
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-6 border-t border-green-700/10 flex flex-col md:flex-row justify-between items-center gap-4 text-green-200/40 text-xs max-w-4xl mx-auto">
            <p>© 2026 SOW Consultoria Ambiental. Todos os direitos reservados.</p>
            <p className="text-green-200/30">
              Transformando o futuro através da educação infantil 🌱
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
