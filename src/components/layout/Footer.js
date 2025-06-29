import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-card-bg-transparent py-6 px-4 sm:px-6 mt-10 border-t border-border">
      <div className="container mx-auto text-center text-text text-sm opacity-80">
        <p>&copy; {currentYear} Arch Linux Unveiled. All rights reserved.</p>
        <p className="mt-2">Inspired by the official <a href="https://wiki.archlinux.org/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Arch Wiki</a>.</p>
      </div>
    </footer>
  );
};

export default Footer;