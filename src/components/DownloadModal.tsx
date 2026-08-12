import React from 'react';
import { X, Smartphone, Monitor, Shield, Download, Check } from 'lucide-react';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DownloadModal: React.FC<DownloadModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative overflow-hidden space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div>
            <span className=" text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-1">
              TOKENIZED // TERMINAL
            </span>
            <h3 className=" font-extrabold text-2xl text-slate-900 uppercase">
              DOWNLOAD APPLICATION
            </h3>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Downloads list */}
        <div className="space-y-3">
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between hover:bg-slate-100/80 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold">
                
              </div>
              <div>
                <h4 className=" font-bold text-sm text-slate-900">iOS App Store</h4>
                <p className=" text-[11px] text-slate-500">v3.4.2 • iPhone & iPad</p>
              </div>
            </div>
            <button className="bg-slate-900 hover:bg-slate-800 text-white  font-bold text-xs px-3 py-1.5 rounded-lg flex items-center gap-1 cursor-pointer">
              <Download className="w-3.5 h-3.5" />
              <span>GET</span>
            </button>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between hover:bg-slate-100/80 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-sm">
                ▶
              </div>
              <div>
                <h4 className=" font-bold text-sm text-slate-900">Google Play Store</h4>
                <p className=" text-[11px] text-slate-500">v3.4.2 • Android APK</p>
              </div>
            </div>
            <button className="bg-slate-900 hover:bg-slate-800 text-white  font-bold text-xs px-3 py-1.5 rounded-lg flex items-center gap-1 cursor-pointer">
              <Download className="w-3.5 h-3.5" />
              <span>GET</span>
            </button>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between hover:bg-slate-100/80 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold">
                <Monitor className="w-5 h-5" />
              </div>
              <div>
                <h4 className=" font-bold text-sm text-slate-900">Desktop Pro Terminal</h4>
                <p className=" text-[11px] text-slate-500">macOS, Windows, Linux</p>
              </div>
            </div>
            <button className="bg-slate-900 hover:bg-slate-800 text-white  font-bold text-xs px-3 py-1.5 rounded-lg flex items-center gap-1 cursor-pointer">
              <Download className="w-3.5 h-3.5" />
              <span>GET</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
