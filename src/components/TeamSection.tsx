import React from 'react';
import { ArrowLeft, ArrowRight, Linkedin, Twitter, Instagram } from 'lucide-react';


export const TeamSection: React.FC = () => {
  return (
    <section id="about" className="w-full max-w-[1400px] mx-auto mt-6 bg-white rounded-[40px] p-6 sm:p-10 lg:p-12 shadow-sm border border-slate-200/50">

      {/* Header */}
      <div className="team-header flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
        <div>
          <span className="inline-block px-5 py-1.5 rounded-full border border-slate-200 text-xs font-semibold text-slate-700 tracking-wider mb-5 uppercase shadow-sm">
            Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-medium text-slate-900 leading-tight tracking-tight">
            Explore our comprehensive leadership team
          </h2>
        </div>
      </div>

      {/* Grid */}
      <div className="team-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">

        {/* Photo Card 1 (Werner) */}
        <div className="team-card relative rounded-[32px] overflow-hidden h-[400px] lg:h-[440px] group shadow-sm bg-slate-100 border border-slate-200/50">
          <img
            src="/team/werner.jpg"
            alt="Werner Kräutlein"
            className="absolute inset-0 w-full h-full object-cover object-[center_15%] scale-105 transition-transform duration-700 group-hover:scale-115"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/90 via-[#111827]/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full p-8 text-center flex flex-col items-center">
            <h3 className="text-lg font-medium text-white mb-1">Werner Kräutlein</h3>
            <p className="text-[13px] text-slate-400 mb-3">Managing Director</p>
            <a href="https://www.linkedin.com/in/werner-kr%C3%A4utlein?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#0055ff] hover:text-white transition-all backdrop-blur-sm" aria-label="LinkedIn">
              <Linkedin className="w-4 h-4 fill-current" />
            </a>
          </div>
        </div>

        {/* Photo Card 2 (Robert) */}
        <div className="team-card relative rounded-[32px] overflow-hidden h-[400px] lg:h-[440px] group shadow-sm bg-slate-100 border border-slate-200/50">
          <img
            src="/team/robert.jpg"
            alt="Robert William Jenner"
            className="absolute inset-0 w-full h-full object-cover object-[center_15%] scale-105 transition-transform duration-700 group-hover:scale-115"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/90 via-[#111827]/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full p-8 text-center flex flex-col items-center">
            <h3 className="text-lg font-medium text-white mb-1">Robert William Jenner</h3>
            <p className="text-[13px] text-slate-400 mb-3">Vice President</p>
            <a href="https://www.linkedin.com/in/johanneswillamjenner?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#0055ff] hover:text-white transition-all backdrop-blur-sm" aria-label="LinkedIn">
              <Linkedin className="w-4 h-4 fill-current" />
            </a>
          </div>
        </div>

        {/* Photo Card 3 (Arun) */}
        <div className="team-card relative rounded-[32px] overflow-hidden h-[400px] lg:h-[440px] group shadow-sm bg-slate-100 border border-slate-200/50">
          <img
            src="/team/arun.jpg"
            alt="Arun Dev Pillappan"
            className="absolute inset-0 w-full h-full object-cover object-[center_15%] scale-105 transition-transform duration-700 group-hover:scale-115"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/90 via-[#111827]/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full p-8 text-center flex flex-col items-center">
            <h3 className="text-lg font-medium text-white mb-1">Arun Dev Pillappan</h3>
            <p className="text-[13px] text-slate-400 mb-3">CEO</p>
            <a href="https://www.linkedin.com/in/arun-p-7b233a260/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#0055ff] hover:text-white transition-all backdrop-blur-sm" aria-label="LinkedIn">
              <Linkedin className="w-4 h-4 fill-current" />
            </a>
          </div>
        </div>

        {/* Photo Card 3 (Deepak) */}
        <div className="team-card relative rounded-[32px] overflow-hidden h-[400px] lg:h-[440px] group shadow-sm bg-slate-100 border border-slate-200/50">
          <img
            src="/team/deepak.jpg"
            alt="Deepak"
            className="absolute inset-0 w-full h-full object-cover object-[center_10%] scale-150 transition-transform duration-700 group-hover:scale-160"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/90 via-[#111827]/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full p-8 text-center flex flex-col items-center">
            <h3 className="text-lg font-medium text-white mb-1">Deepak</h3>
            <p className="text-[13px] text-slate-400 mb-3">CTO and Project Manager</p>
            <a href="https://www.linkedin.com/in/deepakramki?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#0055ff] hover:text-white transition-all backdrop-blur-sm" aria-label="LinkedIn">
              <Linkedin className="w-4 h-4 fill-current" />
            </a>
          </div>
        </div>

        {/* Photo Card 4 (Inba) */}
        <div className="team-card relative rounded-[32px] overflow-hidden h-[400px] lg:h-[440px] group shadow-sm bg-slate-100 border border-slate-200/50">
          <img
            src="/team/inba.jpg"
            alt="Inba"
            className="absolute inset-0 w-full h-full object-cover object-[center_15%] scale-120 transition-transform duration-700 group-hover:scale-130"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/90 via-[#111827]/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full p-8 text-center flex flex-col items-center">
            <h3 className="text-lg font-medium text-white mb-1">Inba</h3>
            <p className="text-[13px] text-slate-400 mb-3">CMO and Co Operation Manager</p>
            <a href="https://www.linkedin.com/in/inbazer?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#0055ff] hover:text-white transition-all backdrop-blur-sm" aria-label="LinkedIn">
              <Linkedin className="w-4 h-4 fill-current" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
