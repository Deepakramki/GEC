import React, { useState, useEffect } from 'react';

interface LoaderProps {
  onComplete: () => void;
}

export const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.floor(Math.random() * 8) + 2;
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 400);
          return 100;
        }
        return next;
      });
    }, 60);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col justify-end p-8 md:p-16 overflow-hidden">
      {/* Purple Mesh Gradient Background */}
      <div className="absolute inset-0 z-0 bg-[#e8d5fc] overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-[#d2a8ff] rounded-full filter blur-[100px] opacity-70 animate-pulse"></div>
        <div 
          className="absolute top-[20%] right-[-20%] w-[80%] h-[80%] bg-[#b87afc] rounded-full filter blur-[120px] opacity-60 animate-pulse" 
          style={{ animationDelay: '1.5s' }}
        ></div>
        <div 
          className="absolute bottom-[-30%] left-[20%] w-[70%] h-[70%] bg-[#dca8ff] rounded-full filter blur-[100px] opacity-70 animate-pulse" 
          style={{ animationDelay: '3s' }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center gap-6 sm:gap-8">
        {/* Circle with Progress */}
        <div className="relative w-28 h-28 sm:w-40 sm:h-40 rounded-full border border-slate-900/15 flex items-center justify-center shrink-0 bg-white/5 backdrop-blur-sm shadow-sm text-slate-900">
          <svg className="absolute inset-0 w-full h-full animate-spin-slow fill-current" viewBox="0 0 100 100">
            <path
              id="circlePathLoader"
              d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
              fill="none"
            />
            <text className="text-[7.5px] font-bold tracking-[1px] ">
              <textPath href="#circlePathLoader" startOffset="0%" textLength="232">
                GREENCOIN ★ GREENCOIN ★ GREENCOIN ★ 
              </textPath>
            </text>
          </svg>
          <span className="text-2xl sm:text-4xl font-medium text-slate-900 tracking-tighter relative z-10">
            {progress}%
          </span>
        </div>
        
        {/* Text */}
        <div className="max-w-[220px] text-[10px] sm:text-xs font-semibold text-slate-900/80  tracking-widest leading-relaxed">
          WELCOME TO GREENCOIN.<br/>
          POWERING A GREENER FUTURE<br/>
          WITH DECENTRALIZED ASSETS.
        </div>
      </div>
    </div>
  );
};
