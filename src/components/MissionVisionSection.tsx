import React from 'react';
import { ArrowRight } from 'lucide-react';


export const MissionVisionSection: React.FC = () => {
  return (
    <section id="mission" className="w-full max-w-[1400px] mx-auto mt-6 bg-[#f4f7fb] rounded-[40px] p-6 sm:p-10 lg:p-12 shadow-sm border border-slate-200/50">
      <div className="mb-8">
        <span className="text-slate-700 font-medium text-lg">The Foundation includes:</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        {/* Card 01 - Mission */}
        <div className="mv-card bg-white rounded-3xl p-8 flex flex-col h-full shadow-sm min-h-[240px]">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-4xl font-light text-slate-800 tracking-tight">01</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#60a5fa" className="opacity-70">
              <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-slate-800 mb-4 leading-tight">Our<br/>Mission</h3>
          <p className="text-[13px] text-slate-500 leading-relaxed mt-auto pr-4">
            To connect blockchain technology with environmental initiatives and renewable-energy development through a transparent, community-driven ecosystem.
          </p>
        </div>

        {/* Card 02 - Vision */}
        <div className="mv-card bg-white rounded-3xl p-8 flex flex-col h-full shadow-sm min-h-[240px]">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-4xl font-light text-slate-800 tracking-tight">02</span>
          </div>
          <h3 className="text-lg font-medium text-slate-800 mb-4 leading-tight">Our<br/>Vision</h3>
          <p className="text-[13px] text-slate-500 leading-relaxed mt-auto pr-4">
            To build a sustainable decentralized ecosystem where digital assets, community governance, and clean-energy innovation create meaningful real-world impact.
          </p>
        </div>

        {/* Card 03 - Values */}
        <div className="mv-card bg-[#3b82f6] rounded-3xl p-8 flex flex-col h-full shadow-sm text-white min-h-[240px]">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-4xl font-light tracking-tight">03</span>
          </div>
          <h3 className="text-lg font-medium mb-4 leading-tight">Core<br/>Values</h3>
          <p className="text-[13px] text-blue-100 leading-relaxed mt-auto pr-2">
            Sustainability, Transparency, Community, Innovation, and Decentralization. Building long-term value through responsible technology and real-world environmental impact.
          </p>
        </div>

        {/* Image Card */}
        <div className="mv-card relative rounded-3xl overflow-hidden h-full min-h-[240px] shadow-sm">
          <img 
            src="https://images.unsplash.com/photo-1634152962476-4b8a00e1915c?q=80&w=1000&auto=format&fit=crop" 
            alt="Abstract Texture" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <a href="#roadmap" className="absolute bottom-6 left-6 w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-slate-50 transition-colors cursor-pointer shadow-md">
            <ArrowRight className="w-6 h-6 text-[#3b82f6]" />
          </a>
        </div>
      </div>
      
      <div className="mv-text-container flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 lg:gap-8">
        <div className="flex items-center gap-6 lg:gap-12 flex-1">
          <h2 className="text-4xl sm:text-5xl lg:text-[64px] font-medium text-slate-900 leading-[1.1] tracking-tight max-w-2xl">
            Empowering Real-World Environmental Impact
          </h2>
        </div>
        
        <div className="lg:w-[320px] shrink-0">
          <p className="text-sm text-slate-700 leading-relaxed border-b border-slate-300 pb-6 font-medium">
            GreenCoin bridges the gap between digital assets and renewable energy. We are building an ecosystem that supports sustainable initiatives, directly contributing to green hydrogen projects and global energy transitions.
          </p>
        </div>
      </div>
    </section>
  );
};
