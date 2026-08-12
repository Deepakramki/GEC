import React from 'react';
import { Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';


export const FooterSection: React.FC = () => {
  return (
    <footer className="w-full max-w-[1400px] mx-auto mt-6 mb-6 rounded-[40px] bg-gradient-to-b from-[#eff5ff] to-[#e2efff] p-2 pb-0 flex flex-col shadow-sm border border-slate-200/50 overflow-hidden">
      
      {/* Top CTA Area */}
      <div className="flex flex-col items-center justify-center py-20 px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-[52px] leading-[1.1] font-medium text-slate-900 mb-5 tracking-tight">
          Contact for OTC Sales
        </h2>
        <p className="text-slate-600 text-[15px] md:text-[17px] mb-8 max-w-lg mx-auto leading-relaxed">
          For the discount up to 16% from the market price of Greencoin GEC. No insurance needed.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a href="#footer-contact" className="bg-white text-slate-800 px-8 py-3.5 rounded-full font-medium text-[15px] hover:bg-slate-50 transition-colors shadow-sm border border-slate-200/50 inline-block">
            Contact Us
          </a>
        </div>
      </div>

      {/* Bottom White Card */}
      <div className="bg-[#fafafa] rounded-t-[36px] rounded-b-[40px] p-10 lg:p-14 w-full shadow-[0_-10px_40px_rgba(0,0,0,0.02)] relative z-20">
        
        <div className="flex items-center gap-2 mb-10">
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
          <span className="text-xl font-bold text-slate-900 tracking-tight">Greencoin</span>
        </div>

        <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-8 border-b border-slate-200/60 pb-12">
          
          {/* Newsletter / Left Side */}
          <div className="w-full lg:w-[32%] flex flex-col">
            <p className="text-slate-900 font-medium text-[15px] mb-4">
              Sign up to receive ecosystem updates.
            </p>
            <div className="flex items-center gap-2 mb-4 bg-white border border-slate-200 rounded-full p-1.5 shadow-sm">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-transparent text-slate-900 text-[14px] px-4 py-2 w-full focus:outline-none"
              />
              <button className="bg-slate-900 text-white font-medium px-6 py-2.5 rounded-full hover:bg-slate-800 transition-colors text-[14px] whitespace-nowrap">
                Submit
              </button>
            </div>
            <p className="text-slate-500 text-[12px] leading-relaxed max-w-[90%] mb-6">
              By subscribing you agree to with our Privacy Policy and provide consent to receive updates from our company.
            </p>

            {/* Contact & Location */}
            <div id="footer-contact" className="flex flex-col gap-4 mt-4">
              <div>
                <h4 className="font-medium text-slate-900 mb-1 text-[14px]">Mail</h4>
                <a href="mailto:info@greenen.co.uk" className="text-slate-600 hover:text-[#0055ff] transition-colors text-[14px]">
                  info@greenen.co.uk
                </a>
              </div>
              <div>
                <h4 className="font-medium text-slate-900 mb-1 text-[14px]">Address</h4>
                <p className="text-slate-500 text-[13px] leading-relaxed max-w-[250px]">
                  Meydan Grandstant , 6th Floor,<br />
                  Meydan Road , Nad Al Sheba<br />
                  Dubai UAE
                </p>
              </div>
            </div>
          </div>

          {/* Links / Right Side */}
          <div className="w-full lg:w-[60%] grid grid-cols-2 md:grid-cols-3 gap-8">
            
            <div className="footer-section">
              <h4 className="font-medium text-slate-900 mb-5 text-[14px]">Listed Platforms</h4>
              <ul className="flex flex-col gap-3.5">
                <li><a href="https://coinmarketcap.com/currencies/greenen/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-900 text-[13px] transition-colors">CoinMarketCap</a></li>
                <li><a href="https://vindax.com/exchange?symbol=GEC_USDT" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-900 text-[13px] transition-colors">VinDAX</a></li>
                <li><a href="https://www.bifinance.com/en_us/trade?symbol=GEC/USDT" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-900 text-[13px] transition-colors">BiFinance</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4 className="font-medium text-slate-900 mb-5 text-[14px]">Navigation</h4>
              <ul className="flex flex-col gap-3.5">
                <li><Link to="/#mission" className="text-slate-500 hover:text-slate-900 text-[13px] transition-colors">Mission</Link></li>
                <li><Link to="/#about" className="text-slate-500 hover:text-slate-900 text-[13px] transition-colors">About</Link></li>
                <li><Link to="/#roadmap" className="text-slate-500 hover:text-slate-900 text-[13px] transition-colors">Roadmap</Link></li>
                <li><Link to="/whitepaper" className="text-slate-500 hover:text-slate-900 text-[13px] transition-colors">Whitepaper</Link></li>
                <li><Link to="/otc" className="text-slate-500 hover:text-slate-900 text-[13px] transition-colors">OTC</Link></li>
                <li><Link to="/#allocation" className="text-slate-500 hover:text-slate-900 text-[13px] transition-colors">Allocation</Link></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4 className="font-medium text-slate-900 mb-5 text-[14px]">Legal</h4>
              <ul className="flex flex-col gap-3.5">
                <li><Link to="/terms" className="text-slate-500 hover:text-slate-900 text-[13px] transition-colors">Terms & Conditions</Link></li>
                <li><Link to="/privacy" className="text-slate-500 hover:text-slate-900 text-[13px] transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright & Socials */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 pb-4">
          <p className="text-slate-400 text-[12px]">
            © 2026 Greencoin, All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-slate-400">
            <a href="https://www.linkedin.com/company/greenencoin" target="_blank" rel="noopener noreferrer" className="hover:text-[#0a66c2] transition-colors" aria-label="LinkedIn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="https://www.facebook.com/greenencoin/" target="_blank" rel="noopener noreferrer" className="hover:text-[#1877F2] transition-colors" aria-label="Facebook">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="https://www.instagram.com/greenencoin/" target="_blank" rel="noopener noreferrer" className="hover:text-[#E4405F] transition-colors" aria-label="Instagram">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="https://x.com/greenencoin" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors" aria-label="X (Twitter)">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="https://t.me/greenencoin" target="_blank" rel="noopener noreferrer" className="hover:text-[#229ED9] transition-colors" aria-label="Telegram">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.19-.08-.05-.19-.02-.27 0-.11.03-1.9 1.22-5.36 3.56-.51.35-.97.52-1.39.51-.46-.01-1.35-.26-2.01-.48-.81-.27-1.46-.42-1.4-.88.03-.24.32-.49.88-.75 3.44-1.5 5.73-2.49 6.87-2.96 3.26-1.36 3.94-1.59 4.38-1.59.1 0 .31.02.45.13.12.09.15.22.16.32-.01.07-.01.18-.02.24z"/></svg>
            </a>
            <a href="https://medium.com/@greenencoin" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors" aria-label="Medium">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42c1.87 0 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/></svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
