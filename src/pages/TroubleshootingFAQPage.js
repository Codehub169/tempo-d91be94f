import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Accordion from '../components/ui/Accordion';
import CodeBlock from '../components/ui/CodeBlock';
import { troubleshootingData, faqData } from '../data/faqTroubleshootingData';

const TroubleshootingFAQPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-gray-100 flex flex-col items-center p-4">
      <Header />
      <div className="container max-w-4xl w-full bg-gray-800 rounded-xl shadow-2xl p-8 md:p-10 my-8 border border-gray-700 transform transition-all duration-300 hover:shadow-cyan-500/30 hover:scale-[1.005]">
        <h1 className="text-4xl md:text-5xl font-extrabold text-cyan-400 mb-6 text-center tracking-tight leading-tight drop-shadow-lg">
          Troubleshooting & FAQ
        </h1>
        <p className="text-lg text-gray-300 mb-8 text-center max-w-2xl mx-auto">
          Encountering issues during or after an Arch Linux installation is common. This section provides solutions to frequently asked questions and common troubleshooting steps.
        </p>

        <h2 className="text-3xl font-bold text-gray-100 mt-10 mb-6 border-b-2 border-gray-700 pb-3">
          Common Troubleshooting
        </h2>
        <div className="space-y-4">
          {troubleshootingData.map((item, index) => (
            <Accordion key={index} header={item.question}>
              {item.answer.map((contentItem, contentIndex) => {
                if (contentItem.type === 'paragraph') {
                  return <p key={contentIndex} className="mb-3 text-gray-300 last:mb-0">{contentItem.text}</p>;
                } else if (contentItem.type === 'code') {
                  return <CodeBlock key={contentIndex} command={contentItem.code} />; // CodeBlock already handles copy
                } else if (contentItem.type === 'list') {
                  return (
                    <ul key={contentIndex} className="list-disc list-inside pl-4 mb-3 text-gray-300 last:mb-0">
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

        <h2 className="text-3xl font-bold text-gray-100 mt-10 mb-6 border-b-2 border-gray-700 pb-3">
          Frequently Asked Questions (FAQ)
        </h2>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <Accordion key={index} header={item.question}>
              {item.answer.map((contentItem, contentIndex) => {
                if (contentItem.type === 'paragraph') {
                  return <p key={contentIndex} className="mb-3 text-gray-300 last:mb-0">{contentItem.text}</p>;
                } else if (contentItem.type === 'list') {
                  return (
                    <ul key={contentIndex} className="list-disc list-inside pl-4 mb-3 text-gray-300 last:mb-0">
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
          <Link to="/" className="bg-blue-700 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg hover:shadow-cyan-500/40">
            Back to Home
          </Link>
          <Link to="/install" className="bg-blue-700 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg hover:shadow-cyan-500/40">
            Installation Guide
          </Link>
          <Link to="/prerequisites" className="bg-blue-700 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg hover:shadow-cyan-500/40">
            Prerequisites & Tools
          </Link>
          <Link to="/post-install" className="bg-blue-700 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg hover:shadow-cyan-500/40">
            Post-Installation Guide
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TroubleshootingFAQPage;