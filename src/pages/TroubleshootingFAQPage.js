import React from 'react';
import { Link } from 'react-router-dom';
import Accordion from '../components/ui/Accordion';
import CodeBlock from '../components/ui/CodeBlock';
import { troubleshootingData, faqData } from '../data/faqTroubleshootingData';

const TroubleshootingFAQPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center p-4">
      <div className="container max-w-4xl w-full bg-card-bg rounded-xl shadow-xl p-8 md:p-10 my-8 border border-border transform transition-all duration-300 hover:shadow-accent-glow hover:scale-[1.005]">
        <h1 className="text-4xl md:text-5xl font-extrabold text-accent mb-6 text-center tracking-tight leading-tight drop-shadow-lg text-shadow-accent">
          Troubleshooting & FAQ
        </h1>
        <p className="text-lg text-text mb-8 text-center max-w-2xl mx-auto">
          Encountering issues during or after an Arch Linux installation is common. This section provides solutions to frequently asked questions and common troubleshooting steps.
        </p>

        <h2 className="text-3xl font-bold text-text mt-10 mb-6 border-b-2 border-border pb-3">
          Common Troubleshooting
        </h2>
        <div className="space-y-4">
          {troubleshootingData.map((item, index) => (
            <Accordion key={index} title={item.question}>
              {item.answer.map((contentItem, contentIndex) => {
                if (contentItem.type === 'paragraph') {
                  return <p key={contentIndex} className="mb-3 text-text last:mb-0">{contentItem.text}</p>;
                } else if (contentItem.type === 'code') {
                  return <CodeBlock key={contentIndex} command={contentItem.code} />; // CodeBlock already handles copy
                } else if (contentItem.type === 'list') {
                  return (
                    <ul key={contentIndex} className="list-disc list-inside pl-4 mb-3 text-text last:mb-0">
                      {contentItem.items.map((listItem, listIndex) => (
                        <li key={listIndex} className="mb-1">{listItem}</li>
                      ))}
                    </ul>
                  );
                }
                return null;
              })}
            </Accordion>
          ))}
        </div>

        <h2 className="text-3xl font-bold text-text mt-10 mb-6 border-b-2 border-border pb-3">
          Frequently Asked Questions (FAQ)
        </h2>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <Accordion key={index} title={item.question}>
              {item.answer.map((contentItem, contentIndex) => {
                if (contentItem.type === 'paragraph') {
                  return <p key={contentIndex} className="mb-3 text-text last:mb-0">{contentItem.text}</p>;
                } else if (contentItem.type === 'list') {
                  return (
                    <ul key={contentIndex} className="list-disc list-inside pl-4 mb-3 text-text last:mb-0">
                      {contentItem.items.map((listItem, listIndex) => (
                        <li key={listIndex} className="mb-1">{listItem}</li>
                      ))}
                    </ul>
                  );
                }
                return null;
              })}
            </Accordion>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-12">
          <Link to="/" className="bg-button-bg hover:bg-button-hover-bg text-text font-semibold py-2 px-6 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg hover:shadow-accent-glow-md">
            Back to Home
          </Link>
          <Link to="/install" className="bg-button-bg hover:bg-button-hover-bg text-text font-semibold py-2 px-6 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg hover:shadow-accent-glow-md">
            Installation Guide
          </Link>
          <Link to="/prerequisites" className="bg-button-bg hover:bg-button-hover-bg text-text font-semibold py-2 px-6 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg hover:shadow-accent-glow-md">
            Prerequisites & Tools
          </Link>
          <Link to="/post-install" className="bg-button-bg hover:bg-button-hover-bg text-text font-semibold py-2 px-6 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg hover:shadow-accent-glow-md">
            Post-Installation Guide
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TroubleshootingFAQPage;