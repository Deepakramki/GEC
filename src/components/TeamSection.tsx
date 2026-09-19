import React, { useState } from 'react';
import { Linkedin } from 'lucide-react';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  linkedin: string;
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
    objectPosition: 'center 15%',
    scale: 'scale-100',
  },
  {
    id: 'robert',
    name: 'Robert William Jenner',
    role: 'Vice President',
    image: '/team/robert.jpg',
    linkedin: 'https://www.linkedin.com/in/johanneswillamjenner?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
    objectPosition: 'center 15%',
    scale: 'scale-100',
  },
  {
    id: 'arun',
    name: 'Arun Dev Pillappan',
    role: 'CEO',
    image: '/team/arun.jpg',
    linkedin: 'https://www.linkedin.com/in/arun-p-7b233a260/',
    objectPosition: 'center 15%',
    scale: 'scale-100',
  },
  {
    id: 'deepak',
    name: 'Deepak',
    role: 'CTO and Project Manager',
    image: '/team/deepak.jpg',
    linkedin: 'https://www.linkedin.com/in/deepakramki?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
    objectPosition: 'center 10%',
    scale: 'scale-115',
  },
  {
    id: 'inba',
    name: 'Inba',
    role: 'CMO and Co Operation Manager',
    image: '/team/inba.jpg',
    linkedin: 'https://www.linkedin.com/in/inbazer?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
    objectPosition: 'center 15%',
    scale: 'scale-105',
  },
];

export const TeamSection: React.FC = () => {
  // Center card (Arun Dev Pillappan, CEO) is active by default
  const [activeId, setActiveId] = useState<string>('arun');

  return (
    <section
      id="about"
      className="w-full max-w-[1400px] mx-auto mt-6 bg-[#FAF7F2] rounded-[40px] p-6 sm:p-10 lg:p-14 shadow-sm border border-stone-200/60 transition-all duration-300"
    >
      {/* Centered Header */}
      <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-14">
        <span className="inline-flex items-center px-4 py-1.5 rounded-full text-[11px] sm:text-xs font-semibold tracking-wider uppercase bg-stone-200/70 text-stone-700 border border-stone-300/60 mb-5 shadow-xs">
          Leadership Team
        </span>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-stone-900 leading-[1.12] tracking-tight mb-4">
          The Minds.
          <br />
          Behind GreenCoin.
        </h2>

        <p className="text-sm sm:text-base text-stone-600 font-normal leading-relaxed max-w-xl mx-auto mb-7">
          Meet our dedicated leadership team steering GreenCoin towards a sustainable, decentralized, and greener tomorrow.
        </p>

        {/* Small CTA Pill */}
        <div className="flex justify-center items-center">
          <a
            href="#footer"
            className="inline-flex items-center px-5 py-2 rounded-full bg-stone-200/80 hover:bg-stone-300/90 text-stone-800 text-xs sm:text-sm font-medium transition-colors shadow-xs"
          >
            Connect With Our Team
          </a>
        </div>
      </div>

      {/* 5-Card Full-Cover Portrait Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5 lg:gap-5">
        {TEAM_MEMBERS.map((member) => {
          const isActive = activeId === member.id;

          return (
            <div
              key={member.id}
              onClick={() => setActiveId(member.id)}
              onMouseEnter={() => setActiveId(member.id)}
              className={`group relative rounded-[28px] overflow-hidden h-[440px] sm:h-[470px] lg:h-[490px] cursor-pointer transition-all duration-500 bg-slate-900 border ${
                isActive
                  ? 'ring-2 ring-stone-900/30 shadow-2xl scale-[1.01]'
                  : 'hover:shadow-xl border-stone-300/40'
              }`}
            >
              {/* Full-Cover Member Portrait Image */}
              <img
                src={member.image}
                alt={member.name}
                className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${member.scale}`}
                style={{ objectPosition: member.objectPosition }}
              />

              {/* Clean Top Gradient for Text Legibility (Neutral Dark to Transparent) */}
              <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/80 via-black/40 to-transparent z-10 pointer-events-none" />

              {/* Clean Bottom Gradient for Grounding and Pill Contrast */}
              <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black/85 via-black/40 to-transparent z-10 pointer-events-none" />

              {/* Top Text: Name & Role */}
              <div className="relative z-20 pt-6 px-4 text-center">
                <h3 className="text-[15px] sm:text-[16px] font-medium text-white leading-snug tracking-tight drop-shadow-sm">
                  {member.name}
                </h3>
                <p className="text-[11px] sm:text-[12px] text-slate-200/90 font-normal tracking-wide mt-0.5 drop-shadow-sm">
                  {member.role}
                </p>
              </div>

              {/* Bottom Interactive Pill (Delphi-style audio/connect bar) */}
              <div
                className={`absolute bottom-5 left-1/2 -translate-x-1/2 z-20 w-max transition-all duration-300 ${
                  isActive
                    ? 'opacity-100 translate-y-0 scale-100'
                    : 'opacity-0 translate-y-2 scale-95 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100'
                }`}
              >
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-2.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-black/75 hover:bg-[#0055ff] text-white border border-white/20 shadow-xl backdrop-blur-md transition-all duration-300 group/btn"
                  aria-label={`${member.name} LinkedIn`}
                >
                  {/* Animated Audio Equalizer Bars */}
                  <div className="flex items-center gap-[2.5px] h-3">
                    <span
                      className="w-[2.5px] h-2.5 bg-sky-400 rounded-full animate-pulse"
                      style={{ animationDuration: '0.8s', animationDelay: '0ms' }}
                    />
                    <span
                      className="w-[2.5px] h-3.5 bg-emerald-400 rounded-full animate-pulse"
                      style={{ animationDuration: '0.8s', animationDelay: '150ms' }}
                    />
                    <span
                      className="w-[2.5px] h-2 bg-amber-400 rounded-full animate-pulse"
                      style={{ animationDuration: '0.8s', animationDelay: '300ms' }}
                    />
                    <span
                      className="w-[2.5px] h-3 bg-indigo-400 rounded-full animate-pulse"
                      style={{ animationDuration: '0.8s', animationDelay: '450ms' }}
                    />
                  </div>

                  <span className="text-[11px] sm:text-xs font-medium tracking-tight text-slate-200 group-hover/btn:text-white">
                    Connect
                  </span>

                  <Linkedin className="w-3.5 h-3.5 fill-current text-slate-300 group-hover/btn:text-white" />
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Section Footer Sub-Bar */}
      <div className="mt-14 sm:mt-16 text-center">
        <span className="inline-block px-4 py-1.5 rounded-full bg-stone-200/60 text-stone-600 text-xs font-medium mb-3">
          Why GreenCoin
        </span>
        <p className="text-xs sm:text-sm text-stone-500 font-medium tracking-wide uppercase">
          Sustainable • Transparent • Decentralized
        </p>
      </div>
    </section>
  );
};
