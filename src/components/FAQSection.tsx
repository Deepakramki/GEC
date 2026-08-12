import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';


const FAQ_DATA = [
  {
    question: "What is Greencoin (GEC)?",
    answer: "Greencoin is a BEP-20 digital asset operating on the BNB Smart Chain. It is designed to support a blockchain ecosystem focused on environmental initiatives, renewable-energy development, treasury-based ecosystem funding, and community participation."
  },
  {
    question: "Does Greencoin charge a transaction tax?",
    answer: "No, Greencoin operates under a 0% transaction tax model. The token contract does not impose any additional buy, sell, or transfer taxes. Users only pay the standard BNB Smart Chain network gas fees required to process transactions."
  },
  {
    question: "How is the ecosystem funded without transaction taxes?",
    answer: "The project separates token transfers from ecosystem financing. Ecosystem development, environmental programs, and operational activities are supported through predefined token allocations, treasury resources, and vesting mechanisms rather than transaction taxes."
  },
  {
    question: "What blockchain does Greencoin use?",
    answer: "Greencoin is built on the BNB Smart Chain (BSC) using the BEP-20 token standard. This provides an EVM-compatible environment with established decentralized infrastructure, smart-contract functionality, and efficient transaction capabilities."
  },
  {
    question: "What is the total supply of Greencoin?",
    answer: "The total supply is 1,000,000,000 GEC. The circulating supply increases over time as tokens are released according to applicable vesting schedules and distribution arrangements for areas like ecosystem development, treasury resources, and strategic partnerships."
  },
  {
    question: "What kind of environmental initiatives does the project support?",
    answer: "Greencoin intends to explore the use of treasury and ecosystem resources to support sustainability-focused initiatives. Potential areas of development include reforestation programs, renewable-energy infrastructure, and community-scale solar projects."
  }
];

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full max-w-[900px] mx-auto mt-20 mb-10 px-4 sm:px-6">
      <div className="faq-header flex flex-col items-center mb-10 text-center">
        <span className="text-slate-900 font-bold text-[10px] tracking-[0.2em] uppercase mb-4">
          TRUSTED BY
        </span>
        <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-medium text-slate-900 leading-tight">
          Frequently <br className="hidden sm:block" />
          Asked Questions
        </h2>
      </div>

      <div className="faq-list flex flex-col gap-3">
        {FAQ_DATA.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div 
              key={index}
              className={`w-full rounded-[24px] transition-all duration-300 overflow-hidden cursor-pointer ${
                isOpen ? 'bg-white border border-slate-100 shadow-sm' : 'bg-[#f4f7fa] hover:bg-[#eef2f6]'
              }`}
              onClick={() => toggleOpen(index)}
            >
              <div className="flex items-center justify-between p-5 sm:p-6 select-none">
                <h3 className={`text-base sm:text-lg font-medium pr-4 ${isOpen ? 'text-slate-900' : 'text-slate-800'}`}>
                  {faq.question}
                </h3>
                <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                  isOpen ? 'bg-[#eef2f6] text-slate-900' : 'bg-white text-slate-900 shadow-sm'
                }`}>
                  {isOpen ? <X className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </div>
              
              <div 
                className={`px-5 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 pb-0 opacity-0'
                }`}
              >
                <p className="text-slate-500 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
