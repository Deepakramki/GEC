import React from 'react';
import { X, ShieldCheck } from 'lucide-react';

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TermsModal: React.FC<TermsModalProps> = ({ isOpen, onClose }) => {
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
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold text-slate-900">Terms & Conditions</h2>
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
            
            <h3 className="text-lg font-bold text-slate-900 mb-3">1. Acceptance of Terms</h3>
            <p className="text-slate-600 mb-6">
              By accessing and using the Greencoin platform, you accept and agree to be bound by the terms and provision of this agreement.
            </p>

            <h3 className="text-lg font-bold text-slate-900 mb-3">2. Use License</h3>
            <p className="text-slate-600 mb-6">
              Permission is granted to temporarily download one copy of the materials (information or software) on Greencoin's website for personal, non-commercial transitory viewing only.
            </p>

            <h3 className="text-lg font-bold text-slate-900 mb-3">3. Disclaimer</h3>
            <p className="text-slate-600 mb-6">
              The materials on Greencoin's website are provided on an 'as is' basis. Greencoin makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>

            <h3 className="text-lg font-bold text-slate-900 mb-3">4. Limitations</h3>
            <p className="text-slate-600 mb-6">
              In no event shall Greencoin or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Greencoin's website.
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
