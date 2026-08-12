import React, { useState } from 'react';
import { Header } from '../components/Header';
import { FooterSection } from '../components/FooterSection';
import { ShieldCheck } from 'lucide-react';
import { AccountModal } from '../components/AccountModal';
import { DownloadModal } from '../components/DownloadModal';

export const TermsPage: React.FC = () => {
  const [accountModalOpen, setAccountModalOpen] = useState(false);
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f0f2f5] text-slate-900 flex flex-col items-center selection:bg-slate-900 selection:text-white p-4 sm:p-8">
      {/* Main Plain Hero Card Frame Container */}
      <main className="w-full max-w-[1400px] bg-white rounded-[40px] p-4 sm:p-6 shadow-sm border border-slate-200/50 flex flex-col gap-6 min-h-[70vh]">
        {/* Top Header Capsule Bar */}
        <Header
          onOpenAccount={() => setAccountModalOpen(true)}
          onOpenDownload={() => setDownloadModalOpen(true)}
        />

        <div className="flex-1 px-4 sm:px-10 py-10 max-w-4xl mx-auto w-full">
          <div className="flex items-center gap-4 mb-10 pb-6 border-b border-slate-100">
            <div className="w-12 h-12 rounded-full bg-[#f4f7eb] text-[#3b7c0f] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">Terms & Conditions</h1>
          </div>

          <div className="prose prose-slate prose-lg max-w-none text-slate-600">
            <p className="mb-8">
              Last updated: August 2026
            </p>
            
            <h3 className="text-xl font-bold text-slate-900 mb-4">1. Acceptance of Terms</h3>
            <p className="mb-8">
              By accessing and using the Greencoin platform, you accept and agree to be bound by the terms and provision of this agreement.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mb-4">2. Use License</h3>
            <p className="mb-8">
              Permission is granted to temporarily download one copy of the materials (information or software) on Greencoin's website for personal, non-commercial transitory viewing only.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mb-4">3. Disclaimer</h3>
            <p className="mb-8">
              The materials on Greencoin's website are provided on an 'as is' basis. Greencoin makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mb-4">4. Limitations</h3>
            <p className="mb-8">
              In no event shall Greencoin or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Greencoin's website.
            </p>
          </div>
        </div>
      </main>

      {/* Footer Section */}
      <FooterSection />

      {/* Modals for Header */}
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
};
