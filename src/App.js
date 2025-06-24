import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import InstallationGuidePage from './pages/InstallationGuidePage';
import PrerequisitesPage from './pages/PrerequisitesPage';
import AboutPage from './pages/AboutPage';
import PostInstallationPage from './pages/PostInstallationPage';
import TroubleshootingFAQPage from './pages/TroubleshootingFAQPage';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8 pt-20">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/install" element={<InstallationGuidePage />} />
            <Route path="/prerequisites" element={<PrerequisitesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/post-install" element={<PostInstallationPage />} />
            <Route path="/faq-troubleshooting" element={<TroubleshootingFAQPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
