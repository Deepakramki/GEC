import React, { useEffect, useState } from 'react';
import { Header } from '../components/Header';
import { FooterSection } from '../components/FooterSection';
import { FileText } from 'lucide-react';
import { AccountModal } from '../components/AccountModal';
import { DownloadModal } from '../components/DownloadModal';

const SECTIONS = [
  {
    id: "1",
    title: "Executive Summary",
    content: "Greencoin (GEC) is a BEP-20 digital asset deployed on the BNB Smart Chain (BSC), designed to support a blockchain ecosystem focused on environmental initiatives, renewable-energy development, community participation, treasury-based ecosystem funding, and future technology research.\n\nGreencoin operates under a zero transaction tax model. The token contract does not apply additional buy, sell, or transfer taxes, allowing users to transfer GEC without protocol-level transaction taxation. Users remain responsible for the standard network gas fees required by BNB Smart Chain.\n\nRather than relying on transaction-based taxation, Greencoin uses predefined token allocations, treasury resources, and vesting mechanisms to support long-term ecosystem development, environmental programs, operational requirements, strategic partnerships, and future research."
  },
  {
    id: "2",
    title: "Introduction",
    content: "Environmental sustainability and renewable-energy development require long-term funding, technological innovation, transparent resource management, and meaningful community participation. Blockchain technology provides programmable and transparent infrastructure that can support digital ownership, verifiable transactions, decentralized applications, and community coordination.\n\nGreencoin seeks to combine these capabilities with sustainability-focused objectives. The project is designed around sustainability, transparency, community, innovation, and decentralization, with the long-term objective of developing an ecosystem where blockchain infrastructure can support environmental initiatives and renewable-energy applications.\n\nThe mission of Greencoin is to connect blockchain technology with environmental initiatives and renewable-energy development through a transparent, community-driven ecosystem. Its vision is to build a sustainable decentralized ecosystem where digital assets, community participation, and clean-energy innovation can contribute to meaningful real-world impact."
  },
  {
    id: "3",
    title: "What is Greencoin?",
    content: "Greencoin (GEC) is a BEP-20 digital asset operating on the BNB Smart Chain. The token provides the digital-asset foundation for an ecosystem focused on environmental initiatives, renewable-energy development, ecosystem funding, community participation, and technology research.\n\nThe Greencoin model separates token transactions from ecosystem financing. Instead of charging users additional taxes when they buy, sell, or transfer GEC, ecosystem development is supported through predefined allocations and treasury mechanisms. This structure is intended to provide a transparent framework for managing resources while maintaining a zero transaction tax model."
  },
  {
    id: "4",
    title: "Blockchain Infrastructure",
    content: "Greencoin operates on the BNB Smart Chain using the BEP-20 token standard. BNB Smart Chain uses a Proof-of-Staked Authority (PoSA) consensus mechanism and provides an EVM-compatible environment for smart contracts and decentralized applications.\n\nBy operating on BNB Smart Chain, GEC benefits from compatibility with established blockchain infrastructure, decentralized finance applications, wallet infrastructure, and smart-contract technology. Users interacting with GEC are required to pay the applicable BNB Smart Chain network gas fees, while the GEC token contract itself does not impose additional transaction taxes."
  },
  {
    id: "5",
    title: "Smart Contracts",
    content: "Greencoin operates through smart contracts deployed on the BNB Smart Chain. The primary GEC token contract is 0xf65Fb2BFE01Bb1147816770766242f41Fc5b5410.\n\nDedicated vesting contracts have also been deployed for selected allocations. The Team Vesting contract is 0x80b1c5752a8A86D25f54087257CD10b1a07C81E1, and the Treasury Vesting contract is 0xBB8061992202D3Ae14f7D772D27d70488e149AF7.\n\nThe Ecosystem Vesting contract address previously provided for the project is incomplete at 0xD28d8499236a6cD289Ef41c5C8D and therefore should not be published as a final contract address until the complete 42-character address is confirmed.\n\nThe official contract addresses should always be independently verified through a BNB Smart Chain blockchain explorer before interacting with GEC or any related contract."
  },
  {
    id: "6",
    title: "Zero Transaction Tax Model",
    content: "Greencoin follows a 0% transaction tax model. The GEC token contract does not impose an additional buy tax, sell tax, or transfer tax. This means that the protocol does not deduct a percentage of GEC transactions for treasury, marketing, liquidity, or other project functions.\n\nUsers remain responsible for the standard BNB Smart Chain network gas fee associated with processing a blockchain transaction. Ecosystem funding is instead separated from normal token transfers through predefined allocations, treasury resources, and designated ecosystem funding mechanisms.\n\nThis approach is intended to provide users with a straightforward token-transfer structure while allowing Greencoin to maintain dedicated resources for ecosystem development."
  },
  {
    id: "7",
    title: "Token Supply and Distribution",
    content: "The total supply of Greencoin is 1,000,000,000 GEC. The project anticipates an initial circulating supply in the approximate range of 50 million to 100 million GEC, while the remaining supply is subject to applicable vesting schedules and ecosystem distribution mechanisms.\n\nThe token supply is allocated across areas including team development, treasury resources, ecosystem development, research, marketing, strategic partnerships, public and private distribution, and reserves. These allocations are intended to provide resources for long-term project development, environmental initiatives, operational activities, ecosystem growth, and future research.\n\nThe circulating supply may increase over time as tokens are released according to applicable vesting schedules and distribution arrangements."
  },
  {
    id: "8",
    title: "Vesting Mechanism",
    content: "Greencoin uses dedicated vesting mechanisms for selected token allocations. Vesting is designed to provide structured and predetermined token release schedules rather than allowing designated long-term allocations to enter circulation immediately.\n\nThe vesting structure is intended to support long-term project development, responsible token distribution, and greater transparency around the release of allocated tokens. Selected allocations, including Team, Treasury, and Ecosystem resources, are subject to their respective vesting arrangements.\n\nThe applicable release schedules are determined by the deployed vesting mechanisms and can be independently verified through the BNB Smart Chain where the relevant information is publicly available."
  },
  {
    id: "9",
    title: "Environmental Initiatives",
    content: "Environmental sustainability is a fundamental objective of the Greencoin ecosystem. The project intends to explore the use of ecosystem and treasury resources to support initiatives that contribute to environmental protection, renewable-energy development, and sustainable infrastructure.\n\nPotential areas of development include reforestation programs, renewable-energy infrastructure, community-scale solar projects, and other sustainability-focused initiatives. The objective is to create opportunities for blockchain-based resources to contribute toward real-world environmental activities.\n\nThe implementation, scale, timing, and funding of individual environmental initiatives depend on available resources, partnerships, technical feasibility, regulatory requirements, and the continued development of the Greencoin ecosystem."
  },
  {
    id: "10",
    title: "Community Participation",
    content: "Greencoin is designed to progressively increase community participation in ecosystem development. The project intends to provide mechanisms through which eligible GEC holders can participate in selected ecosystem decisions as the relevant infrastructure develops.\n\nCommunity participation may eventually involve ecosystem initiatives, environmental programs, community projects, strategic initiatives, treasury-related decisions, and other areas connected to the development of the Greencoin ecosystem.\n\nThe specific implementation of community participation mechanisms may evolve according to technical development, ecosystem requirements, and applicable governance structures."
  },
  {
    id: "11",
    title: "Governance Power",
    content: "Greencoin proposes a Governance Power (GP) mechanism intended to provide a framework for future community participation. Under the proposed model, eligible GEC holders may be able to stake GEC and receive Governance Power, which could subsequently be used to participate in eligible ecosystem decisions.\n\nThe future governance framework may include proposal participation, voting, ecosystem decision-making, environmental initiative selection, and treasury-related participation. The final methodology for calculating Governance Power, staking requirements, voting weight, proposal thresholds, quorum, delegation, and proposal execution will be determined when the corresponding governance infrastructure is implemented.\n\nGovernance Power and associated governance features described in this document should therefore be understood as proposed ecosystem functionality unless officially deployed and announced."
  },
  {
    id: "12",
    title: "Treasury",
    content: "The Greencoin treasury is intended to provide long-term resources for ecosystem development. Treasury resources may support environmental initiatives, renewable-energy projects, technology research, ecosystem development, strategic partnerships, operational requirements, and community initiatives.\n\nThe treasury is designed to operate separately from transaction taxation. Because GEC uses a zero transaction tax model, treasury resources are expected to originate from designated token allocations and other approved ecosystem funding mechanisms.\n\nTreasury-related wallets may utilize multi-signature controls to require multiple authorized participants to approve designated transactions. This structure is intended to reduce dependence on a single wallet controller and improve operational accountability."
  },
  {
    id: "13",
    title: "Liquidity and Market Infrastructure",
    content: "Liquidity is an important component of the GEC ecosystem because it supports the ability of market participants to buy and sell the token. Greencoin may utilize decentralized and centralized trading infrastructure to facilitate market access and liquidity.\n\nWhere applicable, liquidity provider tokens may be locked through an external liquidity-locking service for an extended period. Liquidity arrangements, lock periods, and related information should be independently verified through the applicable blockchain records and official project communications."
  },
  {
    id: "14",
    title: "Security Architecture",
    content: "Greencoin incorporates several mechanisms intended to improve operational security and transparency. Dedicated vesting contracts are used for selected allocations to establish predetermined token release mechanisms. Treasury and ecosystem wallets may utilize multi-signature authorization to require multiple approvals for designated transactions.\n\nWhere liquidity locks are implemented, liquidity provider tokens may be held through an external liquidity-locking service according to the applicable arrangement. The use of smart contracts and blockchain-based infrastructure also enables relevant transactions and contract activity to be independently inspected where information is publicly available.\n\nThese mechanisms are designed to improve operational controls, but no blockchain system can completely eliminate smart-contract, cybersecurity, market, operational, or network risks."
  },
  {
    id: "15",
    title: "Technology Research",
    content: "Greencoin intends to explore emerging technologies that may support its sustainability objectives. One area of research is the potential use of artificial intelligence for environmental visualization. AI-powered visualization tools could eventually help communicate environmental projects, renewable-energy infrastructure, and potential project impact to communities and stakeholders.\n\nAnother area of research involves smart-grid oracle technology. Greencoin may explore oracle infrastructure capable of connecting real-world renewable-energy information with blockchain systems. Potential applications could include renewable-energy production data, energy consumption information, energy pricing data, renewable-energy verification, peer-to-peer energy settlement, and smart-grid integrations.\n\nThese technologies represent areas of planned research and development and should not be considered operational products unless they are independently deployed and officially announced by Greencoin."
  },
  {
    id: "16",
    title: "Sustainability Model",
    content: "The Greencoin sustainability model separates token transactions from ecosystem funding. The project does not rely on buy, sell, or transfer taxes to generate protocol-level funding. Instead, structured token allocations and treasury resources are intended to provide funding for ecosystem development and sustainability-oriented initiatives.\n\nThe long-term model is based on connecting digital-asset infrastructure with community participation, treasury resources, environmental initiatives, renewable-energy development, and technology research. Through this structure, Greencoin aims to develop an ecosystem that can support sustainability-focused applications without imposing additional transaction taxation on GEC holders."
  },
  {
    id: "17",
    title: "Transparency",
    content: "Transparency is a core principle of Greencoin. Because GEC operates on the BNB Smart Chain, relevant blockchain activity can be independently inspected and verified through public blockchain infrastructure.\n\nThe GEC token contract, vesting contracts, token transactions, treasury-related activity, and other relevant on-chain information may be independently reviewed where the corresponding data is publicly available.\n\nGreencoin intends to maintain accessible information regarding its smart contracts, token distribution, ecosystem infrastructure, and other material project information to support independent verification and community confidence."
  },
  {
    id: "18",
    title: "Real-World Sustainability Focus",
    content: "Greencoin’s long-term objective extends beyond the digital-asset layer. The project seeks to explore how blockchain infrastructure can support real-world environmental and renewable-energy activities.\n\nThe broader concept is to connect digital assets and community participation with treasury resources, environmental programs, renewable-energy initiatives, and technology research. Through this approach, Greencoin aims to explore practical applications of blockchain technology within sustainability-focused ecosystems.\n\nThe success and implementation of these initiatives depend on project development, funding, partnerships, technical execution, regulatory requirements, and other external factors."
  },
  {
    id: "19",
    title: "Risk Disclosure",
    content: "Digital assets involve significant risks. The value of GEC may be affected by cryptocurrency market volatility, liquidity conditions, market sentiment, technological developments, regulatory changes, and broader economic conditions.\n\nSmart contracts may contain vulnerabilities or unforeseen technical issues. GEC also depends on BNB Smart Chain infrastructure and may be affected by network congestion, technical failures, blockchain-level events, or other infrastructure risks.\n\nFuture technologies and ecosystem initiatives may require substantial research, development, funding, partnerships, and regulatory approvals. Environmental projects may also face financing, operational, technical, regulatory, and execution risks.\n\nFuture features described in this whitepaper, including Governance Power, environmental infrastructure, AI applications, renewable-energy initiatives, and smart-grid oracle technology, represent planned or proposed development and are not guarantees of implementation, financial performance, profitability, or returns.\n\nUsers should conduct their own independent research and obtain appropriate professional advice before acquiring, holding, staking, or otherwise interacting with GEC."
  },
  {
    id: "20",
    title: "Disclaimer",
    content: "This whitepaper is provided for informational purposes only and does not constitute financial, investment, legal, tax, or other professional advice. Nothing contained in this document should be interpreted as a guarantee of financial returns, token appreciation, income, or profit.\n\nThe Greencoin ecosystem may evolve over time. Project features, technical implementations, allocations, governance mechanisms, environmental initiatives, and research priorities may change according to technical feasibility, funding, partnerships, regulatory requirements, community participation, and other relevant factors.\n\nAny forward-looking statement concerning environmental programs, renewable-energy infrastructure, governance, AI, smart-grid technology, or other future applications represents an intended direction or proposed development and should not be interpreted as a guarantee that such functionality will be implemented.\n\nParticipants are responsible for conducting their own due diligence and assessing all risks associated with digital assets before participating in the Greencoin ecosystem."
  },
  {
    id: "21",
    title: "Conclusion",
    content: "Greencoin (GEC) is designed to connect blockchain infrastructure with environmental initiatives, renewable-energy development, community participation, treasury-based ecosystem funding, and technology research.\n\nBuilt on BNB Smart Chain using the BEP-20 standard, GEC operates under a zero transaction tax model. The project separates token transactions from ecosystem financing through structured allocations, vesting mechanisms, and treasury resources.\n\nThe Greencoin ecosystem seeks to create a transparent and sustainability-focused framework through which blockchain technology can support environmental initiatives and explore future applications in renewable energy, artificial intelligence, and smart-grid infrastructure.\n\nGreencoin’s long-term vision is to build a decentralized ecosystem where digital assets, community participation, and clean-energy innovation can contribute to meaningful real-world environmental impact."
  }
];

export const WhitepaperPage: React.FC = () => {
  const [accountModalOpen, setAccountModalOpen] = useState(false);
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
              <FileText className="w-6 h-6" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">Whitepaper</h1>
          </div>
          
          <div className="prose prose-slate prose-lg max-w-none text-slate-600">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Greencoin (GEC)</h2>
            <p className="text-xl font-medium text-slate-800 mb-8">Powering a Sustainable Future Through Blockchain</p>
            
            <p className="mb-10 text-sm sm:text-base text-slate-500 leading-relaxed p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <strong>Project Name:</strong> Greencoin <br className="sm:hidden" />
              <span className="hidden sm:inline"> • </span><strong>Ticker:</strong> GEC <br className="sm:hidden" />
              <span className="hidden sm:inline"> • </span><strong>Blockchain:</strong> BNB Smart Chain <br className="sm:hidden" />
              <span className="hidden sm:inline"> • </span><strong>Token Standard:</strong> BEP-20 <br className="sm:hidden" />
              <span className="hidden sm:inline"> • </span><strong>Total Supply:</strong> 1,000,000,000 GEC <br className="sm:hidden" />
              <span className="hidden sm:inline"> • </span><strong>Transaction Tax:</strong> 0%
            </p>

            {SECTIONS.map((section) => (
              <div key={section.id} className="mb-10">
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {section.id}. {section.title}
                </h3>
                {section.content.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="mb-4 leading-relaxed">{paragraph}</p>
                ))}
              </div>
            ))}
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
