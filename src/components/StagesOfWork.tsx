import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';


interface RoadmapItem {
  date: string;
  title: string;
  desc: string;
}

const ROADMAP: RoadmapItem[] = [
  {
    date: "Dec 31, 2025",
    title: "Greencoin Ecosystem Launching",
    desc: "Launch the GreenCoin ecosystem, publish the whitepaper, deploy the smart contract, expand the community, and establish the project’s digital infrastructure"
  },
  {
    date: "Mar 31, 2026",
    title: "Hydrogen Plant Proposal & Licensing",
    desc: "Continue advancing the proposed Green Hydrogen Plant project by engaging with relevant authorities and pursuing the required regulatory approvals and operating licenses."
  },
  {
    date: "Jun 30, 2026",
    title: "Engineering & Feasibility",
    desc: "Complete technical feasibility studies, engineering assessments, environmental evaluations, and preliminary project planning to support future development."
  },
  {
    date: "Sep 30, 2026",
    title: "Strategic Partnerships",
    desc: "Expand partnerships with technology providers, renewable energy companies, engineering firms, and ecosystem collaborators to strengthen project development"
  },
  {
    date: "Dec 31, 2026",
    title: "Ecosystem Development",
    desc: "Enhance GreenCoin’s ecosystem through utility expansion, improved infrastructure, community growth, and preparation for real-world renewable energy applications."
  },
  {
    date: "Dec 31, 2026",
    title: "Infrastructure Preparation",
    desc: "Prepare for infrastructure development through engineering finalization, procurement planning, and project execution activities following receipt of the necessary approvals."
  },
  {
    date: "Jun 30, 2027",
    title: "Project Financing",
    desc: "Pursue strategic investment opportunities, project financing, and commercial partnerships to support future infrastructure development, subject to regulatory approvals."
  },
  {
    date: "Dec 31, 2028",
    title: "Renewable Energy Infrastructure",
    desc: "Begin phased development of renewable energy infrastructure in accordance with approved project plans and regulatory requirements."
  },
  {
    date: "Dec 31, 2030",
    title: "Commercial Operations",
    desc: "Target the commencement of commercial operations for renewable energy infrastructure, subject to regulatory approvals, financing, and successful project execution."
  },
  {
    date: "Dec 31, 2031",
    title: "Regional Expansion",
    desc: "Expand GreenCoin-supported renewable energy initiatives into additional regions while strengthening strategic partnerships and ecosystem adoption."
  }
];

export const StagesOfWork: React.FC = () => {
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="roadmap" className="w-full max-w-[1400px] mx-auto mt-6 bg-[#f8fafc] rounded-[40px] p-6 sm:p-10 lg:p-12 shadow-sm border border-slate-200/50 overflow-hidden">
      <div className="roadmap-header flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 relative z-10">
        <div className="flex flex-col">
          <h2 className="text-4xl sm:text-5xl lg:text-[64px] font-medium text-slate-900 leading-[1.1] tracking-tight">
            Roadmap
          </h2>
          <p className="text-slate-500 mt-4 max-w-2xl text-lg font-medium">
            Our strategic plan and milestones for building a sustainable decentralized ecosystem.
          </p>
        </div>
        
        {/* Navigation Buttons */}
        <div className="flex items-center gap-3">
          <button 
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className={`w-12 h-12 rounded-full flex items-center justify-center border transition-all ${canScrollLeft ? 'bg-white border-slate-200 text-slate-800 hover:bg-slate-50 hover:shadow-sm cursor-pointer' : 'bg-slate-50 border-slate-100 text-slate-300 cursor-not-allowed'}`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className={`w-12 h-12 rounded-full flex items-center justify-center border transition-all ${canScrollRight ? 'bg-white border-slate-200 text-slate-800 hover:bg-slate-50 hover:shadow-sm cursor-pointer' : 'bg-slate-50 border-slate-100 text-slate-300 cursor-not-allowed'}`}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="relative">
        {/* Continuous Line background for timeline effect */}
        <div className="absolute top-[38px] left-0 right-0 h-0.5 bg-slate-200 z-0 hidden md:block"></div>

        <div 
         
          ref={scrollContainerRef} onScroll={checkScroll}
          className="flex overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden pb-8 gap-6 pr-8 sm:pr-12 lg:pr-16"
        >
          {ROADMAP.map((item, index) => (
            <div key={index} className="roadmap-card w-[85vw] max-w-[320px] md:w-[320px] shrink-0 snap-start bg-white rounded-3xl p-8 flex flex-col shadow-sm border border-slate-100 min-h-[260px] relative group hover:shadow-md transition-all hover:-translate-y-1 z-10">
              
              {/* Timeline Connector Dot */}
              <div className="flex items-center gap-3 mb-6 relative">
                <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center shrink-0 border-[3px] border-white shadow-sm z-10 relative group-hover:bg-blue-500 transition-colors">
                   <div className="w-1.5 h-1.5 rounded-full bg-blue-500 group-hover:bg-white transition-colors"></div>
                </div>
                <span className="text-sm font-bold tracking-wider text-slate-400 uppercase">{item.date}</span>
              </div>
              
              <h3 className="text-xl font-bold text-slate-800 mb-4 leading-tight group-hover:text-blue-600 transition-colors">
                {item.title}
              </h3>
              
              <p className="text-[14px] text-slate-500 leading-relaxed mt-auto">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
