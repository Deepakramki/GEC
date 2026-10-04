import React from 'react';


export const HumanitarianSection: React.FC = () => {
  return (
    <section id="about" className="w-full max-w-[1400px] mx-auto mt-6 bg-[#0B1021] rounded-[40px] p-6 sm:p-10 lg:p-12 shadow-sm overflow-hidden">
      <div className="hum-header flex flex-col items-center mb-16 text-center">
        <span className="bg-white/5 text-slate-300 px-5 py-2 rounded-full text-[13px] font-medium mb-8 border border-white/10">
          Humanitarian Impact
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white max-w-3xl leading-[1.2]">
          The value behind Greencoin is <span className="text-[#8cb4f9]">turning strategy into real-world impact</span>
        </h2>
      </div>

      <div className="hum-grid flex flex-col md:flex-row gap-4 lg:gap-5">
        {/* Left Column - Tall Card */}
        <div className="hum-card w-full md:w-1/3 bg-[#131B2F] rounded-3xl p-8 flex flex-col border border-white/5 relative overflow-hidden group hover:bg-[#161F36] transition-colors">
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-[22px] font-medium text-white">Cancer Research</h3>
            <span className="bg-white/5 text-slate-400 text-[11px] px-3 py-1.5 rounded-md border border-white/5">
              Health Initiative
            </span>
          </div>
          <p className="text-slate-400 text-[15px] leading-relaxed mb-12">
            We identify and fund groundbreaking cancer research opportunities without compromising value — from automation in labs to smart resource allocation for clinical trials.
          </p>
          <div className="mt-auto flex items-center gap-4">
            <span className="text-6xl font-medium text-white tracking-tight">2x</span>
            <span className="text-slate-400 text-[13px] max-w-[130px] leading-snug">
              Is an average result in research acceleration.
            </span>
          </div>
        </div>

        {/* Right Area - 2/3 width */}
        <div className="w-full md:w-2/3 flex flex-col gap-4 lg:gap-5">
          {/* Top Row of Right Area */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5 flex-1">
            {/* Middle Column */}
            <div className="flex flex-col gap-4 lg:gap-5">
              {/* Top Middle - Small Card */}
              <div className="hum-card bg-[#131B2F] rounded-3xl p-6 flex items-center justify-between border border-white/5 hover:bg-[#161F36] transition-colors">
                <div className="flex -space-x-3">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop" className="w-11 h-11 rounded-full border-[3px] border-[#131B2F] object-cover relative z-30" alt="Avatar" />
                  <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop" className="w-11 h-11 rounded-full border-[3px] border-[#131B2F] object-cover relative z-20" alt="Avatar" />
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" className="w-11 h-11 rounded-full border-[3px] border-[#131B2F] object-cover relative z-10" alt="Avatar" />
                  <div className="w-11 h-11 rounded-full border-[3px] border-[#131B2F] bg-[#1d2847] flex items-center justify-center text-white text-xs font-medium relative z-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
                  </div>
                </div>
                <span className="text-white font-medium text-[15px]">20+ Partners</span>
              </div>

              {/* Bottom Middle - Medium Card */}
              <div className="hum-card bg-[#131B2F] rounded-3xl p-8 flex flex-col flex-1 border border-white/5 hover:bg-[#161F36] transition-colors">
                <h3 className="text-[22px] font-medium text-white mb-4">Green Energy</h3>
                <p className="text-slate-400 text-[15px] leading-relaxed mb-8">
                  Even modest strategic investments in renewable resources can lead to visible improvements in global sustainability and community growth.
                </p>
                <div className="mt-auto">
                  <span className="text-[56px] font-medium text-white tracking-tight leading-none">$15M</span>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="hum-card bg-[#131B2F] rounded-3xl p-8 flex flex-col border border-white/5 hover:bg-[#161F36] transition-colors">
               <div className="flex items-start gap-4 mb-16">
                  <span className="text-6xl md:text-[72px] font-medium text-white tracking-tight leading-none">78%</span>
                  <p className="text-slate-400 text-[13px] max-w-[140px] leading-snug pt-3">
                    Of traditional businesses don't track their carbon footprint.
                  </p>
               </div>
               
               <div className="mt-auto pt-8 border-t border-white/5">
                 <div className="flex justify-between items-center mb-4">
                   <h3 className="text-lg font-medium text-white">Social Activities</h3>
                   <span className="bg-white/5 text-slate-400 text-[11px] px-3 py-1.5 rounded-md border border-white/5">
                     Measurable Results
                   </span>
                 </div>
                 <p className="text-slate-400 text-[15px] leading-relaxed">
                   We help you build a community-driven culture. Forget about blind decisions and support real social causes.
                 </p>
               </div>
            </div>
          </div>
          
          {/* Bottom Wide Card - Spanning Mid & Right on Desktop */}
          <div className="hum-card bg-[#131B2F] rounded-3xl p-8 flex flex-col sm:flex-row sm:items-center justify-between border border-white/5 gap-6 hover:bg-[#161F36] transition-colors">
            <div>
              <h3 className="text-[22px] font-medium text-white mb-2">Sustainable Solutions</h3>
              <p className="text-slate-400 text-[15px]">We analyze global challenges to build sustainable solutions that truly fit communities in need.</p>
            </div>
            <span className="bg-white/5 text-slate-400 text-[11px] px-4 py-2 rounded-md border border-white/5 whitespace-nowrap shrink-0">
              Personalized Plans
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
