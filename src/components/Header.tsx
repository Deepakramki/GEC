import React, { useState, useEffect } from 'react';
import { Leaf, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface HeaderProps {
  onOpenAccount: () => void;
  onOpenDownload: () => void;
}

export const Header: React.FC<HeaderProps> = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header className="w-full flex justify-center text-slate-800 text-[12px] font-medium tracking-tight relative z-50">
      {/* Capsule Header */}
      <div className="bg-white/40 backdrop-blur-md border border-white/50 shadow-sm rounded-full px-4 sm:px-6 py-2.5 flex items-center justify-between gap-4 sm:gap-8 max-w-fit w-full">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2 pr-2 sm:pr-4 hover:opacity-80 transition-opacity shrink-0">
          <div className="w-8 h-8 rounded-full overflow-hidden shrink-0 shadow-sm border border-slate-200 flex items-center justify-center bg-[#ffea7d]">
            <img 
              src="/logo.png" 
              alt="Greencoin" 
              className="w-full h-full object-cover scale-[1.4]"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
                (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
              }}
            />
            <div className="hidden w-full h-full bg-[#ffea7d] text-[#3b7c0f] flex items-center justify-center overflow-hidden">
              <Leaf className="w-5 h-5 fill-current transform rotate-12" />
            </div>
          </div>
          <span className="font-extrabold text-sm sm:text-base tracking-wider text-slate-900">
            Greencoin
          </span>
        </Link>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center gap-5 sm:gap-6 text-slate-900 font-bold overflow-x-auto whitespace-nowrap scrollbar-hide">
          <Link
            to="/#mission"
            className="hover:text-slate-600 transition-colors flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-slate-900"></span>
            <span>MISSION</span>
          </Link>
          <Link
            to="/#about"
            className="hover:text-slate-600 transition-colors flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-slate-900"></span>
            <span>ABOUT</span>
          </Link>
          <Link
            to="/#roadmap"
            className="hover:text-slate-600 transition-colors flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-slate-900"></span>
            <span>ROADMAP</span>
          </Link>
          <Link
            to="/whitepaper"
            className="hover:text-slate-600 transition-colors flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-slate-900"></span>
            <span>WHITEPAPER</span>
          </Link>

          <Link
            to="/#allocation"
            className="hover:text-slate-600 transition-colors flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-slate-900"></span>
            <span>ALLOCATION</span>
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden ml-auto p-1 text-slate-900 hover:text-slate-600 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-[60px] left-1/2 -translate-x-1/2 w-[90%] max-w-sm bg-white/80 backdrop-blur-md border border-white/50 rounded-2xl p-4 shadow-lg lg:hidden flex flex-col gap-4 z-50">
          <Link
            to="/#mission"
            className="hover:text-slate-600 transition-colors flex items-center gap-3 text-slate-900 font-bold"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span className="w-2 h-2 rounded-full bg-slate-900"></span>
            <span>MISSION</span>
          </Link>
          <Link
            to="/#about"
            className="hover:text-slate-600 transition-colors flex items-center gap-3 text-slate-900 font-bold"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span className="w-2 h-2 rounded-full bg-slate-900"></span>
            <span>ABOUT</span>
          </Link>
          <Link
            to="/#roadmap"
            className="hover:text-slate-600 transition-colors flex items-center gap-3 text-slate-900 font-bold"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span className="w-2 h-2 rounded-full bg-slate-900"></span>
            <span>ROADMAP</span>
          </Link>
          <Link
            to="/whitepaper"
            className="hover:text-slate-600 transition-colors flex items-center gap-3 text-slate-900 font-bold"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span className="w-2 h-2 rounded-full bg-slate-900"></span>
            <span>WHITEPAPER</span>
          </Link>

          <Link
            to="/#allocation"
            className="hover:text-slate-600 transition-colors flex items-center gap-3 text-slate-900 font-bold"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span className="w-2 h-2 rounded-full bg-slate-900"></span>
            <span>ALLOCATION</span>
          </Link>
        </div>
      )}
    </header>
  );
};
