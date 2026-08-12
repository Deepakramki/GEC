import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Header } from '../components/Header';
import { HeroVisualCard } from '../components/HeroVisualCard';
import { HeroTextSection } from '../components/HeroTextSection';
import { VideoModal } from '../components/VideoModal';
import { AccountModal } from '../components/AccountModal';
import { DownloadModal } from '../components/DownloadModal';
import { MissionVisionSection } from '../components/MissionVisionSection';
import { StagesOfWork } from '../components/StagesOfWork';
import { HumanitarianSection } from '../components/HumanitarianSection';
import { AllocationSection } from '../components/AllocationSection';
import { TeamSection } from '../components/TeamSection';
import { VestingSection } from '../components/VestingSection';
import { FooterSection } from '../components/FooterSection';
import { FAQSection } from '../components/FAQSection';
import { INITIAL_TOKENS } from '../data';
import { CryptoToken } from '../types';

const ScrollReveal = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    className="w-full flex justify-center"
  >
    {children}
  </motion.div>
);

export const HomePage = () => {
  const [tokens] = useState<CryptoToken[]>(INITIAL_TOKENS);
  
  // Modals state
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [accountModalOpen, setAccountModalOpen] = useState(false);
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f0f2f5] text-slate-900 flex flex-col items-center selection:bg-slate-900 selection:text-white p-4 sm:p-6 lg:p-8">
      {/* Main Plain Hero Card Frame Container */}
      <main 
        className="w-full max-w-[1400px] rounded-[40px] p-4 sm:p-6 shadow-sm border border-slate-200/50 flex flex-col gap-4 sm:gap-6 relative overflow-hidden min-h-[calc(100svh-2rem)] sm:min-h-[calc(100svh-3rem)] lg:min-h-[calc(100svh-4rem)]"
        style={{
          background: 'linear-gradient(135deg, #a8eee2 0%, #e0fcf9 35%, #9ed6fc 70%, #6cb1fa 100%)'
        }}
      >
        {/* Top Header Capsule Bar */}
        <Header
          onOpenAccount={() => setAccountModalOpen(true)}
          onOpenDownload={() => setDownloadModalOpen(true)}
        />

        <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 gap-4 sm:gap-6 items-stretch flex-1 min-h-0">
          {/* LEFT COLUMN: Isometric 3D Showcase Card */}
          <div className="lg:col-span-5 xl:col-span-4 flex flex-col min-h-[260px] sm:min-h-[350px] lg:min-h-0">
            <HeroVisualCard
              tokens={tokens}
            />
          </div>

          {/* RIGHT COLUMN: Bold Typographic Hero Headline & CTA */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col flex-1 min-h-0">
            <HeroTextSection
              onWatchVideo={() => setVideoModalOpen(true)}
            />
          </div>
        </div>
      </main>

      {/* Mission & Vision Section */}
      <ScrollReveal><MissionVisionSection /></ScrollReveal>

      {/* Stages of Work Section */}
      <ScrollReveal><StagesOfWork /></ScrollReveal>

      {/* Humanitarian Section */}
      <ScrollReveal><HumanitarianSection /></ScrollReveal>

      {/* Allocation Section */}
      <ScrollReveal><AllocationSection /></ScrollReveal>

      {/* Team Section */}
      <ScrollReveal><TeamSection /></ScrollReveal>

      {/* Vesting Section */}
      <ScrollReveal><VestingSection /></ScrollReveal>

      {/* FAQ Section */}
      <ScrollReveal><FAQSection /></ScrollReveal>

      {/* Footer Section */}
      <ScrollReveal><FooterSection /></ScrollReveal>

      {/* Interactive Modals */}
      <VideoModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
      />
      
      <AccountModal
        isOpen={accountModalOpen}
        onClose={() => setAccountModalOpen(false)}
      />
      <DownloadModal
        isOpen={downloadModalOpen}
        onClose={() => setDownloadModalOpen(false)}
      />
    </div>
  );
}
