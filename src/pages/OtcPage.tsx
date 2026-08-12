import React from 'react';
import { Header } from '../components/Header';
import { FooterSection } from '../components/FooterSection';
import { ArrowUpRight } from 'lucide-react';

export const OtcPage = () => {
  return (
    <div className="min-h-screen bg-[#f0f2f5] text-slate-900 flex flex-col items-center selection:bg-slate-900 selection:text-white p-4 sm:p-8">
      {/* Main Content Container */}
      <main className="w-full max-w-[1400px] bg-white rounded-[40px] p-4 sm:p-6 shadow-sm border border-slate-200/50 flex flex-col gap-6">
        
        <Header 
          onOpenAccount={() => {}} 
          onOpenDownload={() => {}} 
        />

        <div className="w-full max-w-4xl mx-auto py-12 px-4 sm:px-8">
          <div className="text-center mb-16">
            <h1 className="font-black text-4xl sm:text-5xl lg:text-[60px] leading-[0.95] tracking-tighter text-slate-900 uppercase mb-4">
              OTC Investment
            </h1>
            <h2 className="font-black text-2xl sm:text-3xl lg:text-[40px] leading-[0.95] tracking-tighter text-slate-900 uppercase mt-2 mb-6">
              Strategic OTC Access to Greencoin (GEC)
            </h2>
            <p className="text-xl font-bold text-slate-900 mb-8 uppercase tracking-wide">
              Invest Early. Build Long-Term Value.
            </p>
            <p className="text-slate-900 text-lg leading-relaxed mb-6 max-w-3xl mx-auto">
              Greencoin (GEC) offers strategic investors and institutional partners access to OTC token allocations designed for long-term participation in the Greencoin ecosystem.
            </p>
            <p className="text-slate-900 text-lg leading-relaxed mb-10 max-w-3xl mx-auto">
              Our OTC program is structured for qualified investors seeking substantial GEC allocations with negotiated pricing, structured vesting, and direct engagement with the Greencoin team.
            </p>
            <div className="inline-block bg-slate-50 border border-slate-200 rounded-2xl p-6 mb-10 shadow-sm">
              <p className="text-slate-900 font-bold text-xl uppercase tracking-wider mb-2">Investment Range</p>
              <p className="text-slate-900 font-black text-3xl sm:text-4xl">$250,000 – $5,000,000+</p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:info@greenen.co.uk"
                className="bg-[#cce3f0] hover:bg-[#b0d2e6] text-slate-900 font-bold text-sm tracking-wider uppercase px-8 py-4 rounded-full transition-all duration-200 flex items-center gap-2 shadow-xs hover:shadow-md active:scale-95 cursor-pointer"
              >
                <span>Request OTC Terms</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </a>
              <a
                href="mailto:info@greenen.co.uk"
                className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm tracking-wider uppercase px-8 py-4 rounded-full transition-all duration-200 flex items-center gap-2 shadow-xs hover:shadow-md active:scale-95 cursor-pointer"
              >
                <span>Contact BD Team</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </a>
            </div>
          </div>

          <hr className="border-slate-200 my-16" />

          {/* Why OTC? */}
          <div className="mb-16">
            <h3 className="font-black text-3xl sm:text-4xl tracking-tighter text-slate-900 uppercase mb-6">Why OTC?</h3>
            <p className="text-slate-900 text-lg leading-relaxed mb-6">
              OTC allocations provide investors with a structured alternative to acquiring large token positions through open-market trading.
            </p>
            <p className="text-slate-900 text-lg leading-relaxed mb-6">
              Through direct allocation, eligible investors can access:
            </p>
            <ul className="list-disc list-inside text-slate-900 text-lg leading-relaxed mb-8 space-y-2 ml-4">
              <li>Negotiated OTC pricing</li>
              <li>Large-volume token allocations</li>
              <li>Structured vesting schedules</li>
              <li>Reduced market-impact execution</li>
              <li>Direct communication with the Greencoin team</li>
              <li>Strategic partnership opportunities</li>
              <li>Institutional-level transaction documentation</li>
            </ul>
            <p className="text-slate-900 text-lg leading-relaxed">
              OTC transactions are designed around transparency, responsible allocation, and long-term ecosystem alignment.
            </p>
          </div>

          <hr className="border-slate-200 my-16" />

          {/* Investment Opportunities */}
          <div className="mb-16">
            <h3 className="font-black text-3xl sm:text-4xl tracking-tighter text-slate-900 uppercase mb-6">Investment Opportunities</h3>
            <p className="text-slate-900 text-lg leading-relaxed mb-10">
              Greencoin OTC allocations are available for strategic investors, funds, family offices, institutions, market participants, and ecosystem partners.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                <h4 className="font-bold text-xl text-slate-900 mb-3">$250K – $500K</h4>
                <p className="text-slate-900">Designed for strategic investors seeking an initial substantial GEC position.</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                <h4 className="font-bold text-xl text-slate-900 mb-3">$500K – $1M</h4>
                <p className="text-slate-900">Enhanced allocation and structured vesting opportunities for larger strategic participation.</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                <h4 className="font-bold text-xl text-slate-900 mb-3">$1M – $2.5M</h4>
                <p className="text-slate-900">Institutional-scale allocation with customized commercial and vesting structures.</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                <h4 className="font-bold text-xl text-slate-900 mb-3">$2.5M – $5M+</h4>
                <p className="text-slate-900">Large strategic allocations negotiated directly with the Greencoin team.</p>
              </div>
            </div>
            
            <p className="text-slate-900 italic text-sm">
              * Final pricing, allocation size, vesting, and transaction terms are subject to due diligence and mutual agreement.
            </p>
          </div>

          <hr className="border-slate-200 my-16" />

          {/* Structured Vesting */}
          <div className="mb-16">
            <h3 className="font-black text-3xl sm:text-4xl tracking-tighter text-slate-900 uppercase mb-6">Structured Vesting</h3>
            <p className="text-slate-900 text-lg leading-relaxed mb-6">
              Large OTC allocations may be subject to a structured vesting schedule to support healthy market development and long-term alignment.
            </p>
            <p className="text-slate-900 text-lg leading-relaxed mb-6">
              Vesting structures can be customized according to the investment size and strategic nature of the transaction.
            </p>
            <p className="text-slate-900 text-lg leading-relaxed mb-4">Potential structures may include:</p>
            <div className="bg-slate-900 text-white p-6 rounded-2xl mb-6 text-center font-bold tracking-wider">
              Initial Allocation → Lock-up Period → Linear Vesting → Periodic Token Release
            </div>
            <p className="text-slate-900 text-lg leading-relaxed">
              The final vesting schedule will be documented in the applicable OTC agreement before the transaction is completed.
            </p>
          </div>

          <hr className="border-slate-200 my-16" />

          {/* Built for Strategic Investors */}
          <div className="mb-16">
            <h3 className="font-black text-3xl sm:text-4xl tracking-tighter text-slate-900 uppercase mb-6">Built for Strategic Investors</h3>
            <p className="text-slate-900 text-lg leading-relaxed mb-6">
              Greencoin is developing a blockchain-based ecosystem focused on connecting digital assets with sustainable energy infrastructure and real-world applications.
            </p>
            <p className="text-slate-900 text-lg leading-relaxed mb-8">
              The OTC program is intended not simply as a token sale, but as a mechanism for establishing long-term relationships with strategic capital partners.
            </p>
            <p className="text-slate-900 text-lg leading-relaxed mb-6">Investors may participate as:</p>
            
            <div className="space-y-6">
              <div className="border-l-4 border-[#3b7c0f] pl-4">
                <h4 className="font-bold text-lg text-slate-900">Strategic Investors</h4>
                <p className="text-slate-900">Support the long-term growth and development of the Greencoin ecosystem.</p>
              </div>
              <div className="border-l-4 border-[#3b7c0f] pl-4">
                <h4 className="font-bold text-lg text-slate-900">Institutional Participants</h4>
                <p className="text-slate-900">Access structured GEC allocations through negotiated OTC transactions.</p>
              </div>
              <div className="border-l-4 border-[#3b7c0f] pl-4">
                <h4 className="font-bold text-lg text-slate-900">Ecosystem Partners</h4>
                <p className="text-slate-900">Explore opportunities to integrate with Greencoin’s developing ecosystem.</p>
              </div>
              <div className="border-l-4 border-[#3b7c0f] pl-4">
                <h4 className="font-bold text-lg text-slate-900">Liquidity & Market Participants</h4>
                <p className="text-slate-900">Participate in the broader market infrastructure surrounding GEC.</p>
              </div>
            </div>
          </div>

          <hr className="border-slate-200 my-16" />

          {/* OTC Process */}
          <div className="mb-16">
            <h3 className="font-black text-3xl sm:text-4xl tracking-tighter text-slate-900 uppercase mb-8">OTC Process</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="text-2xl font-black text-slate-900">01</div>
                <div>
                  <h4 className="font-bold text-lg text-slate-900 mb-1">Submit Inquiry</h4>
                  <p className="text-slate-900 text-sm">Provide your intended investment amount and preferred allocation range.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-2xl font-black text-slate-900">02</div>
                <div>
                  <h4 className="font-bold text-lg text-slate-900 mb-1">Initial Discussion</h4>
                  <p className="text-slate-900 text-sm">Our Business Development team reviews your requirements and discusses the proposed OTC structure.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-2xl font-black text-slate-900">03</div>
                <div>
                  <h4 className="font-bold text-lg text-slate-900 mb-1">Due Diligence</h4>
                  <p className="text-slate-900 text-sm">Both parties complete the necessary verification and compliance procedures.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-2xl font-black text-slate-900">04</div>
                <div>
                  <h4 className="font-bold text-lg text-slate-900 mb-1">Term Sheet</h4>
                  <p className="text-slate-900 text-sm">Pricing, allocation, vesting, payment structure, and other commercial terms are agreed upon.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-2xl font-black text-slate-900">05</div>
                <div>
                  <h4 className="font-bold text-lg text-slate-900 mb-1">Agreement</h4>
                  <p className="text-slate-900 text-sm">The OTC agreement and supporting documentation are executed by both parties.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-2xl font-black text-slate-900">06</div>
                <div>
                  <h4 className="font-bold text-lg text-slate-900 mb-1">Settlement</h4>
                  <p className="text-slate-900 text-sm">Funds and GEC are transferred according to the agreed settlement and vesting structure.</p>
                </div>
              </div>
            </div>
          </div>

          <hr className="border-slate-200 my-16" />

          {/* Investor Due Diligence */}
          <div className="mb-16">
            <h3 className="font-black text-3xl sm:text-4xl tracking-tighter text-slate-900 uppercase mb-6">Investor Due Diligence</h3>
            <p className="text-slate-900 text-lg leading-relaxed mb-6">
              To maintain a professional and transparent OTC process, investors may be requested to provide appropriate information and documentation, including:
            </p>
            <ul className="list-disc list-inside text-slate-900 text-lg leading-relaxed mb-8 space-y-2 ml-4 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
              <li>Investor / company identification</li>
              <li>Proof of funds</li>
              <li>Source of funds information</li>
              <li>Company registration documents</li>
              <li>Authorized representative details</li>
              <li>Wallet information</li>
              <li>Applicable KYC / AML documentation</li>
              <li>Signed OTC agreement</li>
            </ul>
            <p className="text-slate-900 italic text-sm">
              * Documentation requirements may vary depending on the investor profile, jurisdiction, and transaction size.
            </p>
          </div>

          <hr className="border-slate-200 my-16" />

          {/* Transparency & Investor Protection */}
          <div className="mb-16 bg-slate-50 p-8 rounded-3xl border border-slate-200">
            <h3 className="font-black text-2xl sm:text-3xl tracking-tighter text-slate-900 uppercase mb-6">Transparency & Investor Protection</h3>
            <p className="text-slate-900 text-lg leading-relaxed mb-4">
              Every OTC transaction is individually documented.
            </p>
            <p className="text-slate-900 text-lg leading-relaxed mb-4">
              Before settlement, investors receive the applicable transaction terms covering allocation, pricing, vesting, settlement procedures, wallet information, and other agreed conditions.
            </p>
            <p className="text-slate-900 text-lg leading-relaxed font-medium">
              Greencoin does not guarantee token price appreciation, returns, liquidity, or future market performance. OTC participation involves market and investment risk, and investors should conduct their own independent due diligence before participating.
            </p>
          </div>

          <hr className="border-slate-200 my-16" />

          {/* CTA Footer */}
          <div className="text-center">
            <h3 className="font-black text-3xl sm:text-4xl tracking-tighter text-slate-900 uppercase mb-4">Become a Strategic GEC Investor</h3>
            <p className="text-slate-900 text-lg leading-relaxed mb-6 max-w-2xl mx-auto">
              Looking to acquire a significant GEC allocation? Speak directly with the Greencoin Business Development team to discuss your investment size, preferred structure, pricing, and vesting requirements.
            </p>
            
            <div className="inline-block bg-slate-50 border border-slate-200 rounded-2xl p-6 mb-8 shadow-sm">
              <p className="text-slate-900 font-bold text-xl uppercase tracking-wider mb-2">Investment Range</p>
              <p className="text-slate-900 font-black text-2xl sm:text-3xl">$250,000 – $5,000,000+</p>
            </div>
            
            <div className="mb-10 text-slate-900">
              <p className="font-bold text-slate-900 mb-2 uppercase tracking-widest">OTC & Business Development</p>
              <p>Email: <a href="mailto:info@greenen.co.uk" className="text-slate-900 hover:underline">info@greenen.co.uk</a></p>
              <p>BD Team: <a href="mailto:info@greenen.co.uk" className="text-slate-900 hover:underline">deepak@greenen.co.uk</a></p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:info@greenen.co.uk"
                className="bg-[#cce3f0] hover:bg-[#b0d2e6] text-slate-900 font-bold text-sm tracking-wider uppercase px-8 py-4 rounded-full transition-all duration-200 flex items-center gap-2 shadow-xs hover:shadow-md active:scale-95 cursor-pointer"
              >
                <span>Request OTC Allocation</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </a>
              <a
                href="mailto:info@greenen.co.uk"
                className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm tracking-wider uppercase px-8 py-4 rounded-full transition-all duration-200 flex items-center gap-2 shadow-xs hover:shadow-md active:scale-95 cursor-pointer"
              >
                <span>Schedule a Meeting</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </a>
            </div>
          </div>

        </div>
      </main>

      <FooterSection />
    </div>
  );
};
