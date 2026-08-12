import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface HeroTextSectionProps {
  onWatchVideo: () => void;
}

export const HeroTextSection: React.FC<HeroTextSectionProps> = ({
  onWatchVideo,
}) => {
  return (
    <div className="w-full h-full flex flex-col justify-between py-2 sm:py-4 px-6 sm:px-8 text-slate-900 relative">
      {/* Top Container */}
      <div className="flex flex-col items-center justify-center text-center flex-1 max-w-4xl mx-auto">
        {/* Massive Typographic Display Headline */}
        <div className="my-2 select-none w-full flex flex-col items-center overflow-hidden">
          <h1 className="font-black text-4xl sm:text-5xl lg:text-[60px] xl:text-[72px] leading-[0.95] tracking-tighter text-slate-900 uppercase">
            POWERING A
          </h1>
          <h2 className="font-black text-4xl sm:text-5xl lg:text-[60px] xl:text-[72px] leading-[0.95] tracking-tighter text-slate-900 uppercase mt-2">
            GREENER FUTURE
          </h2>
        </div>

        {/* Subtitle Paragraph */}
        <p className="text-slate-600 text-[15px] sm:text-lg font-medium max-w-lg mt-2 sm:mt-8 mb-3 sm:mb-8 leading-relaxed text-center">
          Join the decentralized ecosystem where digital assets and clean-energy innovation create meaningful real-world environmental impact.
        </p>

        {/* Primary CTA */}
        <div className="relative flex items-center justify-center mb-3 sm:mb-10 w-full">
          <a
            href="#mission"
            className="bg-[#cce3f0] hover:bg-[#b0d2e6] text-slate-900 font-bold text-sm tracking-wider uppercase px-8 py-3.5 rounded-full transition-all duration-200 flex items-center gap-2 shadow-xs hover:shadow-md active:scale-95 cursor-pointer z-10"
          >
            <span>GET STARTED</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </a>
        </div>
      </div>

      <div className="flex flex-col mt-auto w-full">
        {/* Bottom Listing & Network Icons Bar */}
        <div className="pt-5 border-t border-slate-200/90 flex flex-col sm:flex-row items-center justify-center sm:justify-end gap-4 px-6 sm:px-8">
          <div className="flex items-center gap-5 sm:gap-6 text-slate-900">
            <a href="https://www.linkedin.com/company/greenencoin" target="_blank" rel="noopener noreferrer" className="hover:text-[#0a66c2] transition-colors cursor-pointer" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="https://www.facebook.com/greenencoin/" target="_blank" rel="noopener noreferrer" className="hover:text-[#1877F2] transition-colors cursor-pointer" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.35L15.9 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"/></svg>
            </a>
            <a href="https://www.instagram.com/greenencoin/" target="_blank" rel="noopener noreferrer" className="hover:text-[#E4405F] transition-colors cursor-pointer" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="https://x.com/greenencoin" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors cursor-pointer" aria-label="X (Twitter)">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="https://t.me/greenencoin" target="_blank" rel="noopener noreferrer" className="hover:text-[#229ED9] transition-colors cursor-pointer" aria-label="Telegram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.19-.08-.05-.19-.02-.27 0-.11.03-1.9 1.22-5.36 3.56-.51.35-.97.52-1.39.51-.46-.01-1.35-.26-2.01-.48-.81-.27-1.46-.42-1.4-.88.03-.24.32-.49.88-.75 3.44-1.5 5.73-2.49 6.87-2.96 3.26-1.36 3.94-1.59 4.38-1.59.1 0 .31.02.45.13.12.09.15.22.16.32-.01.07-.01.18-.02.24z"/></svg>
            </a>
            <a href="https://medium.com/@greenencoin" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors cursor-pointer" aria-label="Medium">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42c1.87 0 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/></svg>
            </a>
          </div>
        </div>
        
        {/* Footer Copyright Tag */}
      </div>
    </div>
  );
};