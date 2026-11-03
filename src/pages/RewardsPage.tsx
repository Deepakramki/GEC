import React, { useState } from 'react';
import { Header } from '../components/Header';
import { FooterSection } from '../components/FooterSection';
import { AccountModal } from '../components/AccountModal';
import { DownloadModal } from '../components/DownloadModal';
import { 
  Gift, 
  ExternalLink, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  ShieldAlert, 
  HelpCircle, 
  Sparkles, 
  ChevronDown, 
  Coins, 
  FileCheck2, 
  BadgeCheck, 
  Lock,
  Share2,
  Calendar,
  Layers
} from 'lucide-react';

const FAQ_ITEMS = [
  {
    q: 'How much GEC do I need to hold?',
    a: 'You must maintain at least $100 worth of GEC in your BingX Spot Account.',
  },
  {
    q: 'How long do I need to hold GEC?',
    a: 'You must maintain the required balance for 15 consecutive days.',
  },
  {
    q: 'Where should I hold my GEC?',
    a: 'Your GEC must be held in your BingX Spot Account.',
  },
  {
    q: 'How do I claim my rewards?',
    a: 'Complete the official GreenCoin reward claim form and submit the required information for verification.',
  },
  {
    q: 'Will everyone who submits the form receive rewards?',
    a: 'No. Participants must meet the campaign requirements and pass verification to become eligible.',
  },
  {
    q: 'When will rewards be distributed?',
    a: 'Rewards will be distributed to approved participants according to the official campaign reward structure and distribution schedule.',
  },
];

const REQUIRED_INFO = [
  'Full Name',
  'Telegram Username',
  'BingX UID',
  'Registered Email ID',
  'GEC Holding Amount',
  'Date of First Holding',
  'BingX Spot Account Screenshot',
  'Current GEC Balance Screenshot',
];

const ELIGIBILITY_POINTS = [
  'Hold a minimum of $100 worth of GEC.',
  'Maintain the required holding for 15 consecutive days.',
  'Hold GEC in their BingX Spot Account.',
  'Submit the official reward claim form.',
  'Provide accurate participation information and required screenshots.',
  'Meet all applicable campaign Terms & Conditions.',
];

const TERMS_LIST = [
  'Participants must hold a minimum of $100 worth of GEC in their BingX Spot Account for 15 consecutive days.',
  "The campaign holding period begins from the participant's eligible holding date, subject to verification.",
  'GEC held outside the BingX Spot Account may not qualify for this campaign.',
  'Participants must submit the official GreenCoin reward claim form.',
  'Participants are responsible for providing accurate information and authentic screenshots.',
  'GreenCoin reserves the right to verify submitted information and holding history.',
  'Participants who fail to meet the holding requirements or provide incomplete or inaccurate information may be deemed ineligible.',
  'Reward distribution will be subject to successful verification and the official campaign reward structure.',
  'Submission of a claim form does not guarantee approval or reward distribution.',
  'Campaign rewards, distribution timelines, and eligibility are subject to the official campaign rules.',
  'GreenCoin reserves the right to review, suspend, or disqualify submissions involving suspected fraudulent activity or manipulation.',
  'GreenCoin may modify or terminate the campaign in accordance with applicable requirements and official campaign announcements.',
];

const SECURITY_POINTS = [
  'BingX account password',
  'OTP or verification codes',
  'API secret keys',
  'Wallet recovery phrases',
  'Private keys',
];

export const RewardsPage: React.FC = () => {
  const [accountModalOpen, setAccountModalOpen] = useState(false);
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const BINGX_TRADE_URL = 'https://www.bingx.com/en/spot/GECUSDT';
  const CLAIM_FORM_URL = 'https://forms.gle/24JRGRMmViCkeXW66';

  return (
    <div className="min-h-screen bg-[#f0f2f5] text-slate-900 flex flex-col items-center selection:bg-slate-900 selection:text-white p-3 sm:p-6 lg:p-8">
      {/* Main Container */}
      <main className="w-full max-w-[1400px] bg-white rounded-[32px] sm:rounded-[40px] p-4 sm:p-6 lg:p-10 shadow-sm border border-slate-200/50 flex flex-col gap-8 min-h-[70vh]">
        {/* Top Header */}
        <Header
          onOpenAccount={() => setAccountModalOpen(true)}
          onOpenDownload={() => setDownloadModalOpen(true)}
        />

        {/* Hero Section */}
        <section className="relative overflow-hidden rounded-[28px] sm:rounded-[36px] bg-slate-950 text-white border border-white/10 shadow-2xl">
          {/* Banner Graphic Image Container */}
          <div className="relative aspect-[1024/512] sm:aspect-[1024/450] lg:aspect-[1024/400] w-full overflow-hidden bg-slate-950">
            <img
              src="/banners/hold-and-earn.png"
              alt="GreenCoin Hold GEC & Earn Rewards"
              className="w-full h-full object-cover"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
          </div>

          {/* Hero Content Overlay */}
          <div className="relative z-10 p-6 sm:p-10 lg:p-12 -mt-16 sm:-mt-24 lg:-mt-32">
            <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-emerald-400 text-xs sm:text-sm font-semibold mb-4 backdrop-blur-md">
                <Sparkles className="w-4 h-4" />
                <span>OFFICIAL CAMPAIGN • GREENCOIN (GEC)</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4 leading-tight">
                Hold GEC. Earn Rewards. <br className="hidden sm:block" />
                <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300 bg-clip-text text-transparent">
                  Grow Together.
                </span>
              </h1>

              <p className="text-slate-300 text-base sm:text-xl font-medium max-w-2xl mb-8 leading-relaxed">
                <strong className="text-white">Your GEC journey starts here.</strong> Hold GEC in your BingX Spot Account, complete the campaign requirements, and submit your participation details to become eligible for exclusive GreenCoin rewards.
              </p>

              {/* Campaign Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 w-full max-w-2xl mb-8">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-md flex flex-col items-center justify-center">
                  <Coins className="w-6 h-6 text-amber-400 mb-1" />
                  <span className="text-xs text-slate-400 font-medium">Minimum Holding</span>
                  <span className="text-lg font-bold text-white">$100 worth of GEC</span>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-md flex flex-col items-center justify-center">
                  <Clock className="w-6 h-6 text-emerald-400 mb-1" />
                  <span className="text-xs text-slate-400 font-medium">Holding Period</span>
                  <span className="text-lg font-bold text-white">15 consecutive days</span>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-md flex flex-col items-center justify-center">
                  <Layers className="w-6 h-6 text-sky-400 mb-1" />
                  <span className="text-xs text-slate-400 font-medium">Platform</span>
                  <span className="text-lg font-bold text-white">BingX Spot Account</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full justify-center">
                <a
                  href={CLAIM_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-bold text-sm sm:text-base transition-all shadow-lg hover:shadow-emerald-500/25 hover:scale-105 active:scale-95"
                >
                  <Gift className="w-4 h-4" />
                  <span>JOIN THE CAMPAIGN →</span>
                </a>
                <a
                  href={BINGX_TRADE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-white font-semibold text-sm sm:text-base border border-white/20 backdrop-blur-md transition-all hover:scale-105 active:scale-95"
                >
                  <span>Trade GEC on BingX</span>
                  <ExternalLink className="w-4 h-4 text-slate-400" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Anchor Navigation */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 overflow-x-auto py-2 px-1 scrollbar-hide text-xs sm:text-sm font-semibold text-slate-600">
          <a href="#how-to-participate" className="px-4 py-2 rounded-full bg-slate-100 hover:bg-slate-200 hover:text-slate-900 transition-colors whitespace-nowrap">
            01. How to Participate
          </a>
          <a href="#claim-rewards" className="px-4 py-2 rounded-full bg-slate-100 hover:bg-slate-200 hover:text-slate-900 transition-colors whitespace-nowrap">
            02. Claim Rewards
          </a>
          <a href="#eligibility" className="px-4 py-2 rounded-full bg-slate-100 hover:bg-slate-200 hover:text-slate-900 transition-colors whitespace-nowrap">
            03. Eligibility
          </a>
          <a href="#terms-and-conditions" className="px-4 py-2 rounded-full bg-slate-100 hover:bg-slate-200 hover:text-slate-900 transition-colors whitespace-nowrap">
            04. Terms & Conditions
          </a>
          <a href="#faqs" className="px-4 py-2 rounded-full bg-slate-100 hover:bg-slate-200 hover:text-slate-900 transition-colors whitespace-nowrap">
            05. FAQs
          </a>
        </div>

        {/* 01 — How to Participate */}
        <section id="how-to-participate" className="scroll-mt-24">
          <div className="flex flex-col mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 mb-1">Step-by-Step Guide</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
              01 — How to Participate
            </h2>
            <p className="text-slate-500 text-sm sm:text-base mt-2">
              Follow these simple steps to participate in the GreenCoin Hold & Earn campaign.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* Step 1 */}
            <div className="bg-slate-50 hover:bg-slate-100/80 transition-all border border-slate-200/70 rounded-3xl p-6 sm:p-7 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-10 h-10 rounded-2xl bg-emerald-500 text-white font-extrabold flex items-center justify-center text-base shadow-sm">
                    1
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-200/70 text-slate-700">Step 1</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Get GEC</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Log in to your BingX account and buy or deposit GEC into your BingX Spot Account.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-200/60">
                <a
                  href={BINGX_TRADE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-emerald-600 hover:text-emerald-700 group-hover:underline"
                >
                  <span>Trade GEC on BingX</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-slate-50 hover:bg-slate-100/80 transition-all border border-slate-200/70 rounded-3xl p-6 sm:p-7 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-10 h-10 rounded-2xl bg-teal-500 text-white font-extrabold flex items-center justify-center text-base shadow-sm">
                    2
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-200/70 text-slate-700">Step 2</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Hold Your GEC</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Maintain a minimum balance of <strong className="text-slate-900">$100 worth of GEC for 15 consecutive days</strong> in your BingX Spot Account. Your GEC must remain eligible throughout the required holding period.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-200/60">
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500">
                  <Calendar className="w-3.5 h-3.5 text-teal-600" />
                  <span>15 Consecutive Days Minimum</span>
                </span>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-slate-50 hover:bg-slate-100/80 transition-all border border-slate-200/70 rounded-3xl p-6 sm:p-7 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-10 h-10 rounded-2xl bg-sky-500 text-white font-extrabold flex items-center justify-center text-base shadow-sm">
                    3
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-200/70 text-slate-700">Step 3</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Submit Your Details</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Complete the official GreenCoin Hold & Earn Reward Claim Form. Provide your BingX UID, holding information, and required screenshots so our team can verify your participation.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-200/60">
                <a
                  href={CLAIM_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-sky-600 hover:text-sky-700 group-hover:underline"
                >
                  <span>Open Claim Form</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-slate-50 hover:bg-slate-100/80 transition-all border border-slate-200/70 rounded-3xl p-6 sm:p-7 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-10 h-10 rounded-2xl bg-indigo-500 text-white font-extrabold flex items-center justify-center text-base shadow-sm">
                    4
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-200/70 text-slate-700">Step 4</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Get Verified</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Our team will review your submitted information and verify your holding eligibility. Participants who successfully meet the requirements will be eligible for reward distribution, subject to the campaign terms.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-200/60">
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500">
                  <FileCheck2 className="w-3.5 h-3.5 text-indigo-600" />
                  <span>Manual & On-chain Verification</span>
                </span>
              </div>
            </div>

            {/* Step 5 */}
            <div className="bg-slate-50 hover:bg-slate-100/80 transition-all border border-slate-200/70 rounded-3xl p-6 sm:p-7 flex flex-col justify-between group md:col-span-2 lg:col-span-2">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-10 h-10 rounded-2xl bg-amber-500 text-white font-extrabold flex items-center justify-center text-base shadow-sm">
                    5
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-200/70 text-slate-700">Step 5</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Receive Your Rewards</h3>
                <p className="text-slate-600 text-sm leading-relaxed max-w-xl">
                  Once your participation is approved, eligible rewards will be distributed according to the official campaign reward structure.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-800 tracking-wide uppercase">
                  Hold GEC. Earn Rewards. Grow Together.
                </span>
                <BadgeCheck className="w-5 h-5 text-amber-500" />
              </div>
            </div>
          </div>
        </section>

        {/* 02 — Claim Your GEC Rewards */}
        <section id="claim-rewards" className="scroll-mt-24 rounded-[32px] bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950 p-6 sm:p-10 lg:p-12 text-white border border-white/10 shadow-xl">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">Claim Portal</span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mt-1">
                  02 — Claim Your GEC Rewards
                </h2>
                <p className="text-slate-300 text-sm sm:text-base mt-2">
                  <strong>Your participation. Your rewards.</strong> Already holding GEC on BingX? Submit your details through our official claim form to help our team verify your campaign eligibility.
                </p>
              </div>
            </div>

            {/* Checklist of required info */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-md mb-8">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span>Required Information</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mb-6">
                Please ensure that all information is accurate and that your screenshots clearly show the relevant account and GEC balance details.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {REQUIRED_INFO.map((info, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 text-sm text-slate-200">
                    <span className="w-5 h-5 rounded-full bg-emerald-400/20 text-emerald-300 text-xs font-bold flex items-center justify-center shrink-0">
                      ✓
                    </span>
                    <span>{info}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Submit Banner */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-6 rounded-2xl bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-400/30">
              <div className="text-center sm:text-left">
                <h4 className="text-lg font-bold text-white mb-1">Submit Your Claim</h4>
                <p className="text-xs sm:text-sm text-slate-300 max-w-md">
                  After submission, our team will review your information and verify your holding history. Submitting the form does not automatically guarantee reward approval.
                </p>
              </div>
              <a
                href={CLAIM_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-sm sm:text-base transition-all shadow-lg hover:scale-105 active:scale-95 shrink-0"
              >
                <span>SUBMIT REWARD CLAIM →</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* 03 — Campaign Eligibility */}
        <section id="eligibility" className="scroll-mt-24">
          <div className="flex flex-col mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-600 mb-1">Criteria</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
              03 — Campaign Eligibility
            </h2>
            <p className="text-slate-500 text-sm sm:text-base mt-2">
              To participate in the GreenCoin Hold & Earn campaign, participants must meet all of the following criteria:
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-6 sm:p-10 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {ELIGIBILITY_POINTS.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-slate-200/60 shadow-xs">
                  <div className="w-6 h-6 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-sm sm:text-[15px] font-medium text-slate-800 leading-snug">{point}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm flex items-center gap-3">
              <span className="font-bold text-amber-700 shrink-0">Note:</span>
              <span>Only participants who meet the campaign requirements and successfully pass verification will qualify for rewards.</span>
            </div>
          </div>
        </section>

        {/* 04 — Terms & Conditions */}
        <section id="terms-and-conditions" className="scroll-mt-24">
          <div className="flex flex-col mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Official Rules</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
              04 — Terms & Conditions
            </h2>
          </div>

          <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-6 sm:p-10 shadow-sm flex flex-col gap-8">
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-6">Campaign Requirements</h3>
              <ol className="flex flex-col gap-4">
                {TERMS_LIST.map((term, idx) => (
                  <li key={idx} className="flex items-start gap-3.5 text-sm sm:text-[15px] text-slate-700 leading-relaxed">
                    <span className="w-6 h-6 rounded-full bg-slate-200 text-slate-800 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span>{term}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Important Security Notice Card */}
            <div className="bg-rose-50 border-2 border-rose-200/80 rounded-2xl p-6 sm:p-8 text-rose-950">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-rose-500 text-white flex items-center justify-center shrink-0 shadow-sm">
                  <ShieldAlert className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-rose-900">Important Security Notice</h4>
                  <p className="text-xs sm:text-sm text-rose-700 font-medium">Protect yourself from phishing and scams</p>
                </div>
              </div>

              <p className="text-sm font-semibold text-rose-900 mb-4">
                GreenCoin will never ask you to provide:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 mb-5">
                {SECURITY_POINTS.map((sec, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-3 bg-white/80 rounded-xl border border-rose-200 text-xs sm:text-sm font-medium text-rose-900">
                    <Lock className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                    <span>{sec}</span>
                  </div>
                ))}
              </div>

              <p className="text-xs sm:text-sm font-bold text-rose-800">
                ⚠️ Never share sensitive account credentials or recovery information.
              </p>
            </div>
          </div>
        </section>

        {/* 05 — Frequently Asked Questions */}
        <section id="faqs" className="scroll-mt-24">
          <div className="flex flex-col mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 mb-1">Help & Answers</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
              05 — Frequently Asked Questions
            </h2>
          </div>

          <div className="flex flex-col gap-3">
            {FAQ_ITEMS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="border border-slate-200/70 rounded-2xl bg-white overflow-hidden transition-all shadow-xs"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left font-bold text-sm sm:text-base text-slate-900 hover:text-emerald-600 transition-colors cursor-pointer"
                  >
                    <span className="flex items-center gap-3">
                      <HelpCircle className="w-5 h-5 text-emerald-500 shrink-0" />
                      <span>{faq.q}</span>
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 transition-transform duration-200 shrink-0 ${
                        isOpen ? 'rotate-180 text-emerald-500' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 text-slate-600 text-sm sm:text-[15px] leading-relaxed border-t border-slate-100 bg-slate-50/50">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Footer Campaign CTA Banner */}
        <section className="rounded-[32px] bg-slate-900 text-white p-8 sm:p-12 text-center relative overflow-hidden shadow-xl border border-white/10">
          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-2">Join Today</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-2">
              GREENCOIN (GEC)
            </h2>
            <h3 className="text-lg sm:text-xl font-semibold text-slate-300 mb-4">
              Hold GEC. Earn Rewards. Grow Together.
            </h3>
            <p className="text-slate-400 text-sm sm:text-base mb-8">
              Be part of the GreenCoin community and participate in our Hold & Earn campaign.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full justify-center mb-8">
              <a
                href={CLAIM_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-sm sm:text-base transition-all shadow-lg hover:scale-105 active:scale-95"
              >
                <span>Submit Your Reward Claim</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={BINGX_TRADE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-white font-semibold text-sm sm:text-base border border-white/20 transition-all hover:scale-105 active:scale-95"
              >
                <span>Trade GEC on BingX</span>
                <ExternalLink className="w-4 h-4 text-slate-400" />
              </a>
            </div>

            {/* Social Links */}
            <div className="pt-6 border-t border-white/10 w-full flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-slate-400 font-medium">Follow GreenCoin Official</span>
              <div className="flex items-center gap-4 text-slate-400">
                <a href="https://www.linkedin.com/company/greenencoin" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="LinkedIn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                <a href="https://www.facebook.com/greenencoin/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Facebook">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="https://www.instagram.com/greenencoin/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Instagram">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href="https://x.com/greenencoin" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="X (Twitter)">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                <a href="https://t.me/greenencoin" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Telegram">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.19-.08-.05-.19-.02-.27 0-.11.03-1.9 1.22-5.36 3.56-.51.35-.97.52-1.39.51-.46-.01-1.35-.26-2.01-.48-.81-.27-1.46-.42-1.4-.88.03-.24.32-.49.88-.75 3.44-1.5 5.73-2.49 6.87-2.96 3.26-1.36 3.94-1.59 4.38-1.59.1 0 .31.02.45.13.12.09.15.22.16.32-.01.07-.01.18-.02.24z"/></svg>
                </a>
                <a href="https://medium.com/@greenencoin" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Medium">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42c1.87 0 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/></svg>
                </a>
              </div>
            </div>

            <div className="mt-4 text-[11px] text-slate-500 flex flex-wrap justify-center gap-2">
              <span>#GreenCoin</span>
              <span>#GEC</span>
              <span>#BingX</span>
              <span>#HoldAndEarn</span>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <FooterSection />

      {/* Header Modals */}
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
