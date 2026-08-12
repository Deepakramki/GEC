import React, { useState } from 'react';
import { Header } from '../components/Header';
import { FooterSection } from '../components/FooterSection';
import { Lock } from 'lucide-react';
import { AccountModal } from '../components/AccountModal';
import { DownloadModal } from '../components/DownloadModal';

export const PrivacyPage: React.FC = () => {
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
              <Lock className="w-6 h-6" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">Privacy Policy</h1>
          </div>

          <div className="prose prose-slate prose-lg max-w-none text-slate-600">
            <p className="mb-8">
              Last updated: August 2026
            </p>
            
            <h3 className="text-xl font-bold text-slate-900 mb-4">1. Information We Collect</h3>
            <p className="mb-8">
              We collect information that you provide directly to us, including when you create an account, make a purchase, or communicate with us. This may include your name, email address, and other contact details.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mb-4">2. How We Use Your Information</h3>
            <p className="mb-8">
              We use the information we collect to provide, maintain, and improve our services, to process transactions, and to send you related information, including confirmations and technical notices.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mb-4">3. Information Sharing</h3>
            <p className="mb-8">
              We do not share your personal information with third parties except as described in this privacy policy, such as with vendors, consultants, and other service providers who need access to such information to carry out work on our behalf.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mb-4">4. Security</h3>
            <p className="mb-8">
              We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction.
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
