import React, { useState } from 'react';
import { CryptoToken, HotspotPin } from '../types';
import { HOTSPOT_PINS } from '../data';
import { Plus, Check, Info, TrendingUp, Sparkles, ChevronRight, Leaf, ArrowUpRight } from 'lucide-react';


interface HeroVisualCardProps {
  tokens: CryptoToken[];
}

export const HeroVisualCard: React.FC<HeroVisualCardProps> = ({
  tokens,
}) => {
  const [activeCategory, setActiveCategory] = useState<'major_markets'>('major_markets');
  const [activePin, setActivePin] = useState<HotspotPin | null>(null);
  const filteredTokens = tokens.filter(
    (t) => t.category === activeCategory || t.category === 'both'
  );

  return (
    <div 
     
      className="relative w-full h-full min-h-0 rounded-[28px] overflow-hidden p-4 sm:p-6 flex flex-col justify-between shadow-inner transition-all duration-300 group"
      style={{
        background: 'linear-gradient(180deg, #38bdf8 0%, #2563eb 40%, #1e3a8a 75%, #020617 100%)'
      }}
    >
      {/* Background Architectural Grid Simulation Overlay */}
      <div
        className="absolute inset-0 opacity-50 mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 30%, rgba(255,255,255,0.5) 0%, transparent 70%),
            repeating-linear-gradient(to right, transparent 0, transparent 6px, rgba(255,255,255,0.3) 6px, rgba(255,255,255,0.3) 7px, rgba(0,0,0,0.4) 7px, rgba(0,0,0,0.4) 8px)
          `,
          backgroundSize: '100% 100%, 8px 100%',
        }}
      />

      {/* Rotating Circular Stamp Badge */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 flex items-center justify-center shrink-0 w-16 h-16 sm:w-20 sm:h-20 xl:w-24 xl:h-24 z-20">
        <svg className="w-full h-full animate-spin-slow fill-white" viewBox="0 0 100 100">
          <path
            id="circlePathVisual"
            d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
            fill="none"
          />
          <text className="text-[7.5px] font-bold tracking-[1px] ">
            <textPath href="#circlePathVisual" startOffset="0%" textLength="232">
              GREENCOIN ★ GREENCOIN ★ GREENCOIN ★ 
            </textPath>
          </text>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <ArrowUpRight className="w-4 h-4 text-white stroke-[2.5]" />
        </div>
      </div>

      {/* Hotspot Floating Pin Pills on the isometric layout */}
      {HOTSPOT_PINS.map((pin) => (
        <div
          key={pin.id}
          style={{ top: pin.top, left: pin.left }}
          className="absolute z-20 transition-all duration-200"
        >
          <button
            onClick={() => setActivePin(activePin?.id === pin.id ? null : pin)}
            className="group/pin bg-white/85 hover:bg-white backdrop-blur-md px-2.5 py-1 rounded-full text-[9px]  font-bold tracking-wider text-slate-900 border border-white/90 shadow-xs flex items-center gap-1.5 cursor-pointer hover:scale-105 active:scale-95"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-slate-900 group-hover/pin:bg-sky-500"></span>
            <span>{pin.label}</span>
          </button>

          {/* Active Pin Info Popover */}
          {activePin?.id === pin.id && (
            <div className="absolute top-7 left-0 w-52 bg-slate-900/95 backdrop-blur-md text-white p-3 rounded-xl shadow-xl text-[11px] border border-white/20 z-30 animate-in fade-in duration-150">
              <div className="flex items-center justify-between font-bold  text-sky-300 pb-1 mb-1 border-b border-white/10">
                <span>{pin.label}</span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActivePin(null);
                  }}
                  className="text-slate-400 hover:text-white"
                >
                  ✕
                </button>
              </div>
              <p className="text-slate-300  leading-tight text-[10px]">
                {pin.description}
              </p>
            </div>
          )}
        </div>
      ))}

      {/* Floating Glass Market Card (Matching reference image) */}
      <div className="relative z-20 mt-auto max-w-[280px] sm:max-w-[300px] mx-auto lg:mx-0 w-full bg-white/90 backdrop-blur-xl border border-white/90 rounded-2xl p-3 sm:p-4 shadow-lg text-slate-900 transition-all duration-300 hover:bg-white">
        {/* Top Category Tabs */}
        <div className="flex items-center gap-2 mb-3  text-[10px] font-bold tracking-wider">
          <button
            onClick={() => setActiveCategory('major_markets')}
            className={`px-3 py-1 rounded-full transition-all cursor-pointer flex items-center gap-1 ${
              activeCategory === 'major_markets'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
            <span>MAJOR MARKETS</span>
          </button>
        </div>

        {/* Card Title */}
        <div className="mb-3">
          <h3 className=" font-extrabold text-slate-900 text-base sm:text-lg leading-tight  tracking-tight">
            SUCCESSFUL <br />
            TOKEN MARKET
          </h3>
        </div>

        {/* Market Tokens Table */}
        <div className="space-y-2 mb-4">
          {filteredTokens.slice(0, 3).map((token) => (
            <div
              key={token.id}
              
              className="flex items-center justify-between p-2 rounded-xl group/row"
            >
              {/* Icon & Name */}
              <div className="flex items-center gap-2.5">
                {token.symbol === 'GEC' ? (
                  <div className="w-7 h-7 rounded-full bg-[#ffea7d] text-[#3b7c0f] flex items-center justify-center shrink-0 shadow-xs border border-[#fef08a] overflow-hidden">
                    <Leaf className="w-4 h-4 fill-current transform rotate-12" />
                  </div>
                ) : token.logoUrl ? (
                  <img src={token.logoUrl} alt={token.name} className="w-7 h-7 rounded-full object-cover shadow-xs border border-slate-200" />
                ) : (
                  <div className={`w-7 h-7 rounded-full ${token.iconColor} text-white flex items-center justify-center font-bold text-xs shadow-xs`}>
                    {token.symbol[0]}
                  </div>
                )}
                <div>
                  <div className="font-bold text-slate-900 text-xs flex items-center gap-1">
                    <span>{token.name}</span>
                    <span className="text-[10px] text-slate-500 font-medium">({token.symbol})</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Learn More Expand Row */}
        <div className="pt-2 border-t border-slate-200/80 flex items-center justify-between  text-[11px]">
          <span className="text-slate-600 font-medium leading-tight">
            Learn more about the <br />
            successful token market
          </span>
        </div>
      </div>

      {/* Cardano emblem pattern in bottom right corner (from reference image) */}
      <div className="absolute bottom-4 right-4 z-10 opacity-75 pointer-events-none">
        <svg className="w-12 h-12 fill-white" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="10" />
          <circle cx="50" cy="22" r="6" />
          <circle cx="50" cy="78" r="6" />
          <circle cx="22" cy="50" r="6" />
          <circle cx="78" cy="50" r="6" />
          <circle cx="30" cy="30" r="4.5" />
          <circle cx="70" cy="70" r="4.5" />
          <circle cx="70" cy="30" r="4.5" />
          <circle cx="30" cy="70" r="4.5" />
        </svg>
      </div>
    </div>
  );
};
