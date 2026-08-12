import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';


const contracts = [
  {
    id: 'main',
    title: 'Greencoin Contract',
    value: '1,000M',
    address: '0xf65Fb2BFE01Bb1147816770766242f41Fc5b5410'
  },
  {
    id: 'team',
    title: 'Team Vesting',
    value: '150M',
    address: '0x80b1c5752a8A86D25f54087257CD10b1a07C81E1'
  },
  {
    id: 'treasury',
    title: 'Treasury Vesting',
    value: '200M',
    address: '0xBB8061992202D3Ae14f7D772D27d70488e149AF7'
  },
  {
    id: 'ecosystem',
    title: 'Ecosystem Vesting',
    value: '200M',
    address: '0xd28d8499236a6cd289ef41c5c8d3682febe0969b'
  }
];

export const VestingSection: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const handleCopy = (address: string, id: string) => {
    navigator.clipboard.writeText(address);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const truncate = (addr: string) => `${addr.slice(0, 6)}...${addr.slice(-4)}`;

  return (
    <section className="w-full max-w-[1400px] mx-auto mt-6 bg-white rounded-[40px] pt-16 sm:pt-24 overflow-hidden relative shadow-sm border border-slate-200/50">
      
      <div className="vesting-header px-8 sm:px-12 lg:px-16 relative z-10">
        <h2 className="text-4xl md:text-[56px] leading-[1.1] font-medium text-center text-slate-900 mb-6 tracking-tight">
          Transparent <br /> Vesting Contracts
        </h2>
        <p className="text-center text-slate-500 max-w-2xl mx-auto mb-16 text-[17px] leading-relaxed">
          These are the vesting details and contracts. Copy the contract addresses below to verify on-chain allocations for the team, treasury, and ecosystem.
        </p>
      </div>

      {/* Stats / Contracts Grid */}
      <div className="vesting-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 py-12 border-y border-slate-200/80 relative px-8 sm:px-12 lg:px-16">
        {/* Subtle gradient line on top border to match reference */}
        <div className="absolute top-[-1px] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-400 to-transparent opacity-50"></div>
        
        {contracts.map((contract) => (
          <div key={contract.id} className="vesting-item flex flex-col items-center text-center z-10">
            <span className="text-[40px] font-medium text-slate-900 mb-2 leading-none tracking-tighter">
              {contract.value}
            </span>
            <span className="text-[14px] font-medium text-slate-500 mb-4 h-5">
              {contract.title}
            </span>
            
            <div className="flex items-center gap-2 bg-slate-50 hover:bg-slate-100 transition-colors rounded-full py-1.5 pl-4 pr-1.5 border border-slate-200 shadow-sm mt-auto">
              <span className="text-[13px] font-mono text-slate-600">
                {truncate(contract.address)}
              </span>
              <button 
                onClick={() => handleCopy(contract.address, contract.id)}
                className="w-7 h-7 rounded-full bg-white shadow-sm border border-slate-200 flex items-center justify-center text-slate-600 hover:text-[#0055ff] transition-colors"
                title="Copy Address"
              >
                {copiedId === contract.id ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Abstract Graphic */}
      <div className="vesting-graphic relative w-full h-[350px] mt-12 flex justify-center items-end overflow-hidden pointer-events-none">
        {/* Core Blue Glow */}
        <div className="absolute bottom-[-150px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,_rgba(0,132,255,0.15)_0%,_transparent_70%)] blur-2xl"></div>
        <div className="absolute bottom-[-50px] left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-[#0055ff] opacity-10 blur-3xl rounded-full"></div>
        
        {/* Radiating lines mimicking the reference's network/globe */}
        <div className="relative w-full h-full flex justify-center items-end">
          {Array.from({ length: 70 }).map((_, i) => {
            // Distribute lines in a semi-circle from -85 to 85 degrees
            const angle = (i * (170 / 70)) - 85; 
            // Randomize length to create an organic burst shape
            const length = 150 + Math.random() * 200;
            const opacity = 0.2 + Math.random() * 0.6;
            
            return (
              <div 
                key={i}
                className="absolute bottom-[-20px] origin-bottom"
                style={{
                  width: '1px',
                  height: `${length}px`,
                  transform: `rotate(${angle}deg)`,
                  background: `linear-gradient(to top, rgba(0, 85, 255, ${opacity}), transparent)`,
                }}
              >
                {/* Dot at the end of the line */}
                <div 
                  className="absolute top-0 left-1/2 -translate-x-1/2 rounded-full bg-[#0055ff]"
                  style={{
                    width: '2.5px',
                    height: '2.5px',
                    opacity: opacity + 0.2
                  }}
                ></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
