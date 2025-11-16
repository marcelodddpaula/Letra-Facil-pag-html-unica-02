
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1d2430] text-subtle-dark">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Company Info */}
          <div>
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <img 
                src="./imagens/logo-lf-laranja-.png" 
                alt="Letra Fácil"
                className="h-16 w-auto"
              />
            </div>
            <p className="mt-4 text-sm">
              Comunicação visual de alto impacto. <br/>Letreiros, placas e identidade visual personalizada.
            </p>
          </div>

          {/* Contact Info */}
          <div className="text-sm">
            <h3 className="font-bold text-lg text-text-dark mb-4">Contato</h3>
            <p><strong>Endereço:</strong><br/> Rua Dona Santina, 644 <br/>• Piracicaba • SP</p>
            <p className="mt-2"><strong>Telefone:</strong><br/> (19) 3421-7790</p>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-bold text-lg text-text-dark mb-4">Siga-nos</h3>
            <div className="flex items-center justify-center md:justify-start space-x-4">
              <a href="https://www.instagram.com/depaula.placas.letreiros" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-subtle-dark hover:text-primary transition-colors">
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.048 1.066.06 1.405.06 4.122s-.012 3.056-.06 4.122c-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772c-.556.556-1.112.9-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.048-1.405.06-4.122.06s-3.056-.01-4.122-.06c-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12s.01-3.056.06-4.122c.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 3.535c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2Zm0 1.622c-2.67 0-2.987.01-4.043.058-1.05.048-1.62.21-2.073.385a3.27 3.27 0 0 0-1.18 1.18c-.174.453-.337 1.023-.385 2.073-.048 1.056-.058 1.373-.058 4.043s.01 2.987.058 4.043c.048 1.05.21 1.62.385 2.073a3.28 3.28 0 0 0 1.18 1.18c.453.174 1.023.337 2.073.385 1.056.048 1.373.058 4.043.058s2.987-.01 4.043-.058c1.05-.048 1.62-.21 2.073-.385a3.27 3.27 0 0 0 1.18-1.18c.174-.453.337-1.023.385-2.073.048-1.056.058-1.373.058-4.043s-.01-2.987-.058-4.043c-.048-1.05-.21-1.62-.385-2.073a3.27 3.27 0 0 0-1.18-1.18c-.453-.174-1.023-.337-2.073-.385C14.987 3.632 14.67 3.622 12 3.622ZM12 7.278a4.722 4.722 0 1 0 0 9.444 4.722 4.722 0 0 0 0-9.444Zm0 1.622a3.1 3.1 0 1 1 0 6.2 3.1 3.1 0 0 1 0-6.2ZM16.338 6.2a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Z" clipRule="evenodd"/>
                </svg>
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-gray-700 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Letra Fácil. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
