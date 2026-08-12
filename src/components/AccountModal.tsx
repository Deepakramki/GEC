import React from 'react';
import { X, User, Shield, CreditCard, ChevronRight, Activity, ArrowUpRight } from 'lucide-react';

interface AccountModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AccountModal: React.FC<AccountModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative overflow-hidden space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-bold text-lg">
              ❖
            </div>
            <div>
              <h3 className=" font-extrabold text-xl text-slate-900">
                MY ACCOUNT
              </h3>
              <p className=" text-[10px] text-slate-500 font-bold tracking-wider">
                ID: #TK-883921 // VERIFIED
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Portfolio Overview */}
        <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-white space-y-2 shadow-lg">
          <span className=" text-[10px] font-bold text-slate-400 tracking-widest uppercase">
            ESTIMATED NET PORTFOLIO
          </span>
          <div className=" font-extrabold text-3xl tracking-tight">
            $148,250.80
          </div>
          <div className="flex items-center gap-2 text-xs text-emerald-400  font-bold pt-1">
            <span>↑ +18.4% THIS MONTH</span>
            <span className="text-slate-400">• 3 ACTIVE VAULTS</span>
          </div>
        </div>

        {/* Quick Menu */}
        <div className="space-y-2">
          <button className="w-full p-3 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-900  font-bold text-xs flex items-center justify-between cursor-pointer">
            <div className="flex items-center gap-2.5">
              <Activity className="w-4 h-4 text-slate-600" />
              <span>LIVE ORDER ROUTING HISTORY</span>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-400" />
          </button>

          <button className="w-full p-3 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-900  font-bold text-xs flex items-center justify-between cursor-pointer">
            <div className="flex items-center gap-2.5">
              <Shield className="w-4 h-4 text-slate-600" />
              <span>SECURITY & MULTI-FACTOR KEYS</span>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-400" />
          </button>

          <button className="w-full p-3 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-900  font-bold text-xs flex items-center justify-between cursor-pointer">
            <div className="flex items-center gap-2.5">
              <CreditCard className="w-4 h-4 text-slate-600" />
              <span>DEPOSIT & FIAT GATEWAY</span>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-400" />
          </button>
        </div>
      </div>
    </div>
  );
};
