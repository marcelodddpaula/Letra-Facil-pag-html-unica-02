
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <main>
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-3 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-light dark:text-text-dark leading-tight"
              dangerouslySetInnerHTML={{ __html: 'Estamos <span class="text-primary">Ampliando</span> e <br/><span class="text-primary">Modernizando</span> nosso site.' }}>
            </h1>
            <p className="mt-6 text-3xl text-subtle-light dark:text-subtle-dark">
              Ah, e tem novidade chegando: NOVOS PRODUTOS estão sendo adicionados.
            </p>

            <div className="mt-12 bg-gray-100 dark:bg-gray-800/50 p-6 md:p-8 rounded-xl border border-gray-200 dark:border-gray-700">
              <p className="text-lg font-semibold text-text-light dark:text-text-dark">
                Enquanto isso, clientes de Piracicaba - SP, acessem o site de
                nossa Matriz e Fábrica.
              </p>
              <a
                href="http://www.depaulavisual.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block bg-primary text-white font-bold py-3 px-8 rounded-lg hover:opacity-90 transition-opacity text-lg"
              >
                Acessar www.depaulavisual.com.br
              </a>
            </div>

            <p className="mt-10 text-lg text-subtle-light dark:text-subtle-dark">
              Para demais localidades, nosso atendimento continua via WhatsApp:{' '}
              <strong className="text-text-light dark:text-text-dark whitespace-nowrap">
                (19) 99219-6666
              </strong>
            </p>
          </div>
          <div className="md:col-span-2">
            <img
              src="./imagens/kit-letra-facil.png"
              alt="Kit Letra Fácil com letras, gabarito para instalação e embalagem do produto."
              className="rounded-xl shadow-lg w-full object-cover aspect-[4/3]"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default HeroSection;
