import React from 'react';
import { MessageCircle, Mail } from 'lucide-react';

const ContactSection = () => {
  const whatsappNumber = "5511999999999"; // Placeholder
  const email = "contato@sowconsultoria.com.br"; // Placeholder
  const message = encodeURIComponent("Olá! Gostaria de saber mais sobre o Projeto Escola Sustentável para minha escola.");

  return (
    <section id="contato" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Pronto para transformar sua escola?
        </h2>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Entre em contato conosco para agendar uma atividade ou tirar suas dúvidas.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a
            href={`https://wa.me/${whatsappNumber}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-10 py-5 bg-green-600 text-white rounded-2xl font-bold text-lg hover:bg-green-700 transition-all shadow-xl shadow-green-100"
          >
            <MessageCircle size={24} />
            Falar no WhatsApp
          </a>

          <a
            href={`mailto:${email}?subject=Interesse no Projeto Escola Sustentável`}
            className="flex items-center justify-center gap-3 px-10 py-5 bg-white text-gray-700 border-2 border-gray-200 rounded-2xl font-bold text-lg hover:border-green-200 hover:text-green-600 transition-all"
          >
            <Mail size={24} />
            Enviar E-mail
          </a>
        </div>

        <p className="mt-12 text-gray-400 text-sm">
          © 2026 SOW Consultoria Ambiental. Todos os direitos reservados.
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
