import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { TermsPage } from './pages/TermsPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { WhitepaperPage } from './pages/WhitepaperPage';
import { OtcPage } from './pages/OtcPage';
import { Loader } from './components/Loader';

const ScrollToAnchor = () => {
  const { hash } = useLocation();
  React.useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash, useLocation().pathname]);
  return null;
};

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return <Loader onComplete={() => setIsLoading(false)} />;
  }

  return (
    <Router>
      <ScrollToAnchor />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/whitepaper" element={<WhitepaperPage />} />
        <Route path="/otc" element={<OtcPage />} />
      </Routes>
    </Router>
  );
}
