import React from 'react';
import { X, Lock } from 'lucide-react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh] animate-in fade-in zoom-in duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#f4f7eb] text-[#3b7c0f] flex items-center justify-center shrink-0">
              <Lock className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold text-slate-900">Privacy Policy</h2>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto">
          <div className="prose prose-slate prose-sm sm:prose-base">
            <p className="text-slate-600 mb-6">
              Last updated: August 2026
            </p>
            
            <h3 className="text-lg font-bold text-slate-900 mb-3">1. Information We Collect</h3>
            <p className="text-slate-600 mb-6">
              We collect information that you provide directly to us, including when you create an account, make a purchase, or communicate with us. This may include your name, email address, and other contact details.
            </p>

            <h3 className="text-lg font-bold text-slate-900 mb-3">2. How We Use Your Information</h3>
            <p className="text-slate-600 mb-6">
              We use the information we collect to provide, maintain, and improve our services, to process transactions, and to send you related information, including confirmations and technical notices.
            </p>

            <h3 className="text-lg font-bold text-slate-900 mb-3">3. Information Sharing</h3>
            <p className="text-slate-600 mb-6">
              We do not share your personal information with third parties except as described in this privacy policy, such as with vendors, consultants, and other service providers who need access to such information to carry out work on our behalf.
            </p>

            <h3 className="text-lg font-bold text-slate-900 mb-3">4. Security</h3>
            <p className="text-slate-600 mb-6">
              We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-slate-100 bg-slate-50 flex justify-end">
          <button 
            onClick={onClose}
            className="bg-slate-900 text-white px-6 py-2.5 rounded-full font-medium hover:bg-slate-800 transition-colors"
          >
            I Understand
          </button>
        </div>

      </div>
    </div>
  );
};
