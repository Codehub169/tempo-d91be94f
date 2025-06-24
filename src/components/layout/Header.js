import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="w-full bg-card-bg-transparent shadow-lg py-4 px-4 sm:px-6 fixed top-0 left-0 z-50 border-b border-border">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <Link to="/" className="text-accent text-2xl sm:text-3xl font-bold tracking-tight mb-4 md:mb-0 hover:text-button-hover-bg transition-colors duration-300">
          Arch Linux Unveiled
        </Link>
        <nav>
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-base sm:text-lg font-medium">
            <li>
              <Link to="/" className="text-text hover:text-accent transition-colors duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/install" className="text-text hover:text-accent transition-colors duration-300">
                Installation
              </Link>
            </li>
            <li>
              <Link to="/prerequisites" className="text-text hover:text-accent transition-colors duration-300">
                Prerequisites
              </Link>
            </li>
            <li>
              <Link to="/post-install" className="text-text hover:text-accent transition-colors duration-300">
                Post-Install
              </Link>
            </li>
            <li>
              <Link to="/faq-troubleshooting" className="text-text hover:text-accent transition-colors duration-300">
                Troubleshooting
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-text hover:text-accent transition-colors duration-300">
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;