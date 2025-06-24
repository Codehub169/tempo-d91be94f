import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-card-bg py-6 px-6 mt-10 border-t border-border-color">
      <div className="container mx-auto text-center text-text-color text-sm opacity-80">
        <p>&copy; {currentYear} Arch Linux Unveiled. All rights reserved.</p>
        <p className="mt-2">Inspired by the official <a href="https://wiki.archlinux.org/" target="_blank" rel="noopener noreferrer" className="text-accent-color hover:underline">Arch Wiki</a>.</p>
      </div>
    </footer>
  );
};

export default Footer;
