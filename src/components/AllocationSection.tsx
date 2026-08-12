import React from 'react';
import { Users, Landmark, Shield, LineChart } from 'lucide-react';


export const AllocationSection: React.FC = () => {
  return (
    <section id="allocation" className="w-full max-w-[1400px] mx-auto mt-6 bg-white rounded-[40px] p-6 sm:p-10 lg:p-12 shadow-sm border border-slate-200/50 relative overflow-hidden">
      
      {/* Header Area */}
      <div className="flex justify-between items-center mb-16 relative z-10">
        <div className="flex items-center gap-4">
          <h2 className="text-3xl sm:text-[32px] font-medium text-slate-900 leading-none tracking-tight">Allocation Detail</h2>
        </div>
        <div className="w-8 h-8 rounded-full border-[3px] border-slate-200 border-t-slate-800"></div>
      </div>

      <div className="relative flex flex-col lg:flex-row items-center justify-between min-h-[600px] gap-16 lg:gap-0">
        
        {/* Left Side: Stats */}
        <div className="w-full lg:w-[35%] flex flex-col gap-10 relative z-10">
          
          {/* Item 1 */}
          <div className="relative group pr-8">
            <h3 className="text-[48px] font-medium text-slate-900 leading-none tracking-tighter mb-3">150M</h3>
            <p className="text-[13px] text-slate-500 leading-relaxed mb-3 max-w-[280px]">
              Team allocation for core development, marketing, and operations over a vesting period.
            </p>
            <span className="inline-block px-3 py-1 bg-white border border-slate-100 rounded-md text-xs font-medium text-slate-700 shadow-sm">
              Team (15%)
            </span>
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-6 left-[90%] w-[130%] xl:w-[170%] h-[1px] bg-[#0055ff]/30 -z-10">
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#0055ff]/50"></div>
            </div>
          </div>

          {/* Item 2 */}
          <div className="relative group pr-8">
            <h3 className="text-[48px] font-medium text-slate-900 leading-none tracking-tighter mb-3">200M</h3>
            <p className="text-[13px] text-slate-500 leading-relaxed mb-3 max-w-[280px]">
              Treasury funds reserved for future protocol development, grants, and expenses.
            </p>
            <span className="inline-block px-3 py-1 bg-white border border-slate-100 rounded-md text-xs font-medium text-slate-700 shadow-sm">
              Treasury (20%)
            </span>
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-6 left-[90%] w-[100%] xl:w-[140%] h-[1px] bg-[#0055ff]/30 -z-10">
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#0055ff]/50"></div>
            </div>
          </div>

          {/* Item 3 */}
          <div className="relative group pr-8">
            <h3 className="text-[48px] font-medium text-slate-900 leading-none tracking-tighter mb-3">200M</h3>
            <p className="text-[13px] text-slate-500 leading-relaxed mb-3 max-w-[280px]">
              Ecosystem growth, liquidity mining rewards, and incentives to drive adoption.
            </p>
            <span className="inline-block px-3 py-1 bg-white border border-slate-100 rounded-md text-xs font-medium text-slate-700 shadow-sm">
              Ecosystem (20%)
            </span>
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-6 left-[90%] w-[110%] xl:w-[150%] h-[1px] bg-[#0055ff]/30 -z-10">
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#0055ff]/50"></div>
            </div>
          </div>

          {/* Item 4 */}
          <div className="relative group pr-8">
            <h3 className="text-[48px] font-medium text-slate-900 leading-none tracking-tighter mb-3">100M</h3>
            <p className="text-[13px] text-slate-500 leading-relaxed mb-3 max-w-[280px]">
              Marketing and community initiatives to build brand awareness globally.
            </p>
            <span className="inline-block px-3 py-1 bg-white border border-slate-100 rounded-md text-xs font-medium text-slate-700 shadow-sm">
              Marketing (10%)
            </span>
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-6 left-[90%] w-[140%] xl:w-[180%] h-[1px] bg-[#0055ff]/30 -z-10">
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#0055ff]/50"></div>
            </div>
          </div>
        </div>

        {/* Center Graphic Area */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] pointer-events-none flex items-center justify-center opacity-30 lg:opacity-100 scale-75 sm:scale-100">
          
          {/* Dashed outer circle */}
          <div className="absolute inset-0 rounded-full border border-dashed border-[#0055ff]/40 animate-[spin_120s_linear_infinite]"></div>

          {/* Inner Ray Circle */}
          <div className="absolute inset-8 rounded-full flex items-center justify-center">
            {Array.from({ length: 72 }).map((_, i) => (
              <div key={i} className="absolute w-full h-[3px] flex justify-end" style={{ transform: `rotate(${i * 5}deg)` }}>
                <div className="w-[35px] h-full bg-[#0055ff]/40 rounded-full"></div>
              </div>
            ))}
          </div>

          {/* Massive right-aligned glow */}
          <div className="absolute right-[-100px] w-[350px] h-[350px] bg-[#0055ff] rounded-full blur-[80px] opacity-60"></div>
          
          {/* Total Supply Info inside circle */}
          <div className="relative z-10 flex flex-col items-center justify-center w-[180px] h-[180px] bg-white/40 backdrop-blur-md rounded-full shadow-[0_8px_32px_rgba(0,85,255,0.15)] border border-white/60">
             <span className="text-xs font-medium text-slate-700 mb-1 uppercase tracking-wider">Total Supply</span>
             <span className="text-3xl font-black text-slate-900 tracking-tighter">1,000M</span>
             <span className="text-xs font-bold text-[#0055ff] mt-1 tracking-widest">GEC</span>
          </div>
        </div>

        {/* Right Side: Cards */}
        <div className="w-full lg:w-[32%] flex flex-col gap-6 relative z-10 lg:pl-8">
          
          <AllocationCard 
            title="Strategic Partners"
            value="50M GEC (5%)"
            icon={<Users className="w-5 h-5" />}
          />
          <AllocationCard 
            title="Public & Private Sale"
            value="100M GEC (10%)"
            icon={<Landmark className="w-5 h-5" />}
          />
          <AllocationCard 
            title="Reserve"
            value="100M GEC (10%)"
            icon={<Shield className="w-5 h-5" />}
          />
          <AllocationCard 
            title="Circulating Supply"
            value="100M GEC (10%)"
            icon={<LineChart className="w-5 h-5" />}
          />
          
        </div>
      </div>
    </section>
  );
};

const AllocationCard = ({ title, value, icon }: { title: string, value: string, icon: React.ReactNode }) => (
  <div className="bg-white/90 backdrop-blur-xl rounded-[20px] p-5 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-white flex justify-between items-center relative overflow-hidden group">
    {/* Inner glow effect on the right side of the card */}
    <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#0055ff]/15 to-transparent transition-opacity group-hover:opacity-100"></div>
    
    <div className="relative z-10">
      <h4 className="text-[15px] font-medium text-slate-900 mb-1">{title}</h4>
      <p className="text-[13px] text-slate-500">{value}</p>
    </div>
    <div className="w-12 h-12 rounded-full bg-[#0055ff] text-white flex items-center justify-center shrink-0 shadow-lg shadow-[#0055ff]/30 relative z-10">
      {icon}
    </div>
  </div>
);