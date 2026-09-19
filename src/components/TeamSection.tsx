import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Linkedin, RotateCw } from 'lucide-react';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  linkedin: string;
  bio: string;
  objectPosition: string;
  scale: string;
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'werner',
    name: 'Werner Kräutlein',
    role: 'Managing Director',
    image: '/team/werner.jpg',
    linkedin: 'https://www.linkedin.com/in/werner-kr%C3%A4utlein?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
    bio: 'Over 25 years of global executive leadership in sustainable technology and corporate governance, pioneering blockchain-driven environmental impact and European regulatory compliance.',
    objectPosition: 'center 15%',
    scale: 'scale-100 group-hover:scale-105',
  },
  {
    id: 'robert',
    name: 'Robert William Jenner',
    role: 'Vice President',
    image: '/team/robert.jpg',
    linkedin: 'https://www.linkedin.com/in/johanneswillamjenner?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
    bio: 'Seasoned venture architect with extensive expertise in international business development, renewable energy transition, and cross-border strategic partnerships across Europe.',
    objectPosition: 'center 15%',
    scale: 'scale-100 group-hover:scale-105',
  },
  {
    id: 'arun',
    name: 'Arun Dev Pillappan',
    role: 'CEO',
    image: '/team/arun.jpg',
    linkedin: 'https://www.linkedin.com/in/arun-p-7b233a260/',
    bio: "Visionary founder driving GreenCoin's mission to bridge decentralized finance with real-world carbon reduction, empowering communities toward a cleaner, verifiable future.",
    objectPosition: 'center 12%',
    scale: 'scale-[1.30] group-hover:scale-[1.35]',
  },
  {
    id: 'deepak',
    name: 'Deepak',
    role: 'CTO and Project Manager',
    image: '/team/deepak.jpg',
    linkedin: 'https://www.linkedin.com/in/deepakramki?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
    bio: 'Lead systems architect specializing in high-throughput blockchain networks, smart contract security, and full-stack decentralized infrastructure for green assets.',
    objectPosition: 'center 10%',
    scale: 'scale-[1.18] group-hover:scale-[1.24]',
  },
  {
    id: 'inba',
    name: 'Inba',
    role: 'CMO and Co Operation Manager',
    image: '/team/inba.jpg',
    linkedin: 'https://www.linkedin.com/in/inbazer?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
    bio: 'Brand strategist and operational leader spearheading global community engagement, viral marketing strategies, and strategic alliances across eco-conscious ecosystems.',
    objectPosition: 'center 15%',
    scale: 'scale-105 group-hover:scale-110',
  },
];

export const TeamSection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Toggle card flip
  const toggleFlip = (id: string) => {
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Scroll tracking for progress bar
  const handleScroll = () => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const maxScroll = el.scrollWidth - el.clientWidth;
    if (maxScroll > 0) {
      const progress = (el.scrollLeft / maxScroll) * 100;
      setScrollProgress(progress);
      setCanScrollLeft(el.scrollLeft > 10);
      setCanScrollRight(el.scrollLeft < maxScroll - 10);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const scrollAmount = direction === 'left' ? -340 : 340;
    el.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (el) {
      handleScroll();
      el.addEventListener('scroll', handleScroll, { passive: true });
      return () => el.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <section
      id="about"
      className="w-full max-w-[1400px] mx-auto mt-6 bg-[#FAF7F2] rounded-[40px] p-6 sm:p-10 lg:p-14 shadow-sm border border-slate-200/60 transition-all duration-300 relative overflow-hidden"
    >
      {/* Decorative Subtle Background Orbit Ring */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full border border-slate-300/40 pointer-events-none opacity-50" />

      {/* Header with normal site font */}
      <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-14 relative z-10">
        <span className="inline-flex items-center px-4 py-1.5 rounded-full text-[11px] sm:text-xs font-semibold tracking-wider uppercase bg-slate-200/70 text-slate-700 border border-slate-300/60 mb-5 shadow-xs">
          Leadership Team
        </span>

        <h2 className="text-3xl sm:text-5xl lg:text-[56px] font-medium text-slate-900 leading-tight tracking-tight">
          Explore our comprehensive leadership team
        </h2>

        <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-xl mx-auto mt-4">
          Meet our dedicated leadership team steering GreenCoin towards a sustainable, decentralized, and greener tomorrow.
        </p>
      </div>

      {/* Swipe Module Carousel with Left / Right Navigation */}
      <div className="relative z-10 px-2 sm:px-6">
        {/* Left Arrow Button */}
        <button
          onClick={() => scroll('left')}
          disabled={!canScrollLeft}
          className={`absolute -left-2 sm:-left-3 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-slate-900/80 hover:bg-slate-950 text-white border border-white/20 shadow-xl flex items-center justify-center backdrop-blur-md transition-all duration-300 ${
            !canScrollLeft ? 'opacity-30 cursor-not-allowed' : 'hover:scale-105 active:scale-95'
          }`}
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Right Arrow Button */}
        <button
          onClick={() => scroll('right')}
          disabled={!canScrollRight}
          className={`absolute -right-2 sm:-right-3 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-slate-900/80 hover:bg-slate-950 text-white border border-white/20 shadow-xl flex items-center justify-center backdrop-blur-md transition-all duration-300 ${
            !canScrollRight ? 'opacity-30 cursor-not-allowed' : 'hover:scale-105 active:scale-95'
          }`}
          aria-label="Scroll right"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Scrollable Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-5 sm:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory py-4 px-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {TEAM_MEMBERS.map((member) => {
            const isFlipped = !!flippedCards[member.id];

            return (
              <div
                key={member.id}
                className="w-[280px] sm:w-[310px] lg:w-[320px] h-[470px] sm:h-[490px] shrink-0 snap-center [perspective:1000px] cursor-pointer select-none group"
                onClick={() => toggleFlip(member.id)}
              >
                {/* 3D Flipping Card Body */}
                <div
                  className={`relative w-full h-full rounded-[28px] transition-transform duration-700 shadow-xl ${
                    isFlipped ? '[transform:rotateY(180deg)]' : ''
                  }`}
                  style={{
                    transformStyle: 'preserve-3d',
                    WebkitTransformStyle: 'preserve-3d',
                  }}
                >
                  {/* FRONT FACE: Real Color Portrait with Clean Dark Bottom Gradient */}
                  <div
                    className={`absolute inset-0 w-full h-full rounded-[28px] overflow-hidden border border-slate-300/40 shadow-lg bg-slate-900 flex flex-col justify-end p-6 transition-opacity duration-300 ${
                      isFlipped ? 'opacity-0 pointer-events-none z-0' : 'opacity-100 z-10'
                    }`}
                    style={{
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                      transform: 'rotateY(0deg)',
                      WebkitTransform: 'rotateY(0deg)',
                    }}
                  >
                    {/* Portrait Image in 100% Real, Natural Colors (no blend mode or tint) */}
                    <img
                      src={member.image}
                      alt={member.name}
                      className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ${member.scale}`}
                      style={{ objectPosition: member.objectPosition }}
                    />

                    {/* Smooth Bottom Gradient for Name & Role Legibility */}
                    <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black/90 via-black/45 to-transparent pointer-events-none" />

                    {/* Flip Indicator Tag */}
                    <div className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md flex items-center justify-center text-white/90 border border-white/20 transition-all shadow-sm">
                      <RotateCw className="w-3.5 h-3.5" />
                    </div>

                    {/* Bottom Member Info (Normal clean font) */}
                    <div className="relative z-10 text-left">
                      <h3 className="text-xl sm:text-[22px] font-medium text-white tracking-tight leading-tight drop-shadow-sm">
                        {member.name}
                      </h3>
                      <p className="text-xs sm:text-[13px] text-slate-300 font-normal tracking-wide mt-1 drop-shadow-sm">
                        {member.role}
                      </p>
                    </div>
                  </div>

                  {/* BACK FACE: Deep Blue with Grid Pattern & Bio */}
                  <div
                    className={`absolute inset-0 w-full h-full rounded-[28px] overflow-hidden border border-indigo-500/30 shadow-2xl p-7 flex flex-col justify-between transition-opacity duration-300 ${
                      isFlipped ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 pointer-events-none z-0'
                    }`}
                    style={{
                      backgroundColor: '#0f1738',
                      backgroundImage:
                        'linear-gradient(to right, rgba(99, 102, 241, 0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(99, 102, 241, 0.12) 1px, transparent 1px)',
                      backgroundSize: '28px 28px',
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)',
                      WebkitTransform: 'rotateY(180deg)',
                    }}
                  >
                    {/* Top Member Header */}
                    <div>
                      <div className="flex items-start justify-between mb-1">
                        <h3 className="text-xl sm:text-[22px] font-medium text-white tracking-tight leading-tight">
                          {member.name}
                        </h3>
                        <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-white/80 border border-white/15 shrink-0 ml-2">
                          <RotateCw className="w-3.5 h-3.5" />
                        </div>
                      </div>
                      <p className="text-xs sm:text-[13px] text-indigo-300 font-normal tracking-wide">
                        {member.role}
                      </p>
                    </div>

                    {/* Bio Description */}
                    <div className="my-auto py-2">
                      <p className="text-xs sm:text-[13px] text-indigo-100/90 leading-relaxed font-normal">
                        {member.bio}
                      </p>
                    </div>

                    {/* Bottom Action: LinkedIn Connect Pill */}
                    <div className="pt-2">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-indigo-600 hover:bg-[#0055ff] text-white border border-indigo-400/30 text-xs font-medium backdrop-blur-sm transition-all duration-300 shadow-md group/btn"
                      >
                        <span>Connect on LinkedIn</span>
                        <Linkedin className="w-3.5 h-3.5 fill-current text-white" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Swipe Progress Indicator Bar */}
        <div className="mt-8 flex justify-center items-center">
          <div className="w-48 h-1 bg-slate-300/60 rounded-full overflow-hidden relative">
            <div
              className="h-full bg-slate-900 rounded-full transition-all duration-150 ease-out"
              style={{
                width: '35%',
                transform: `translateX(${(scrollProgress * 1.85)}%)`,
              }}
            />
          </div>
        </div>
      </div>

      {/* Section Footer Sub-Bar */}
      <div className="mt-12 sm:mt-14 text-center relative z-10">
        <span className="inline-block px-4 py-1.5 rounded-full bg-slate-200/60 text-slate-600 text-xs font-medium mb-3">
          Why GreenCoin
        </span>
        <p className="text-xs sm:text-sm text-slate-500 font-medium tracking-wide uppercase">
          Sustainable • Transparent • Decentralized
        </p>
      </div>
    </section>
  );
};
