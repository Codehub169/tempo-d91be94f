import React, { useState } from 'react';

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`accordion-item bg-code-bg border border-border rounded-lg mb-4 overflow-hidden shadow-md transition-all duration-300 ease-in-out ${isOpen ? 'active' : ''}`}>
      <div
        className={`accordion-header flex justify-between items-center p-5 cursor-pointer font-semibold text-lg text-text bg-card-bg border-b border-border transition-colors duration-300 hover:bg-button-bg hover:text-accent ${isOpen ? 'bg-button-hover-bg text-bg' : ''}`}
        onClick={toggleAccordion}
      >
        {title}
        <span className={`icon text-2xl text-accent transition-transform duration-300 ${isOpen ? 'rotate-90 text-bg' : ''}`}>&#9654;</span>
      </div>
      <div
        className={`accordion-content overflow-hidden transition-all duration-400 ease-out ${isOpen ? 'max-h-[500px] py-4 border-t border-border' : 'max-h-0 py-0'}`}
      >
        <div className="px-6 text-text opacity-90">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
