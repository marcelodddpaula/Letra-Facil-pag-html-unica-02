
import React from 'react';

const Header: React.FC = () => {
  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Galeria', href: '#' },
    { name: 'Contato', href: '#' },
  ];

  return (
    <header className="bg-background-light dark:bg-background-dark border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3">
            <img 
              src="./imagens/logo-lf-laranja-.png" 
              alt="Placas e Letreiros"
              className="h-16 w-auto"
            />
            <span className="font-bold text-2xl text-text-light dark:text-text-dark">
              Placas e Letreiros
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-subtle-light dark:text-subtle-dark hover:text-primary dark:hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
