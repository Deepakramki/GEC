import React from 'react';

export const TrustedPartnersSection: React.FC = () => {
  return (
    <section className="w-full max-w-[1400px] mx-auto mt-6 bg-white rounded-[40px] p-6 sm:p-10 lg:p-12 shadow-sm border border-slate-200/50 flex flex-col md:flex-row items-center">
      <div className="w-full md:w-1/3 md:pr-8 md:border-r border-slate-100 mb-8 md:mb-0 flex items-center min-h-[160px]">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
          Featured
        </h2>
      </div>
      
      <div className="w-full md:w-2/3 md:pl-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 items-center">
          {/* CoinMarketCap */}
          <div className="flex items-center justify-center p-4">
            <a href="https://coinmarketcap.com/currencies/greenen/" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform">
              <img src="https://s2.coinmarketcap.com/static/cloud/img/coinmarketcap_1.svg" alt="CoinMarketCap" className="max-h-16 opacity-70 hover:opacity-100 transition-opacity" />
            </a>
          </div>
          
          {/* Medium */}
          <div className="flex items-center justify-center p-4">
            <a href="https://medium.com/@greenencoin" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform flex items-center">
              <img src="https://cdn.worldvectorlogo.com/logos/medium-1.svg" alt="Medium" className="max-h-12 opacity-70 hover:opacity-100 transition-opacity" />
            </a>
          </div>
          
          {/* Binance Square */}
          <div className="flex items-center justify-center p-4">
            <a href="https://www.binance.com/en/square" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform flex items-center gap-2 opacity-70 hover:opacity-100 group">
              <div className="w-10 h-10 bg-[#F3BA2F] rounded-lg flex items-center justify-center p-2 shadow-sm transition-transform">
                <img src="https://cdn.worldvectorlogo.com/logos/binance.svg" alt="Binance Icon" className="w-full h-full" />
              </div>
              <span className="font-bold text-slate-800 text-lg tracking-tight">Square</span>
            </a>
          </div>
          
          {/* MetaMask */}
          <div className="flex items-center justify-center p-4">
            <a href="https://metamask.io/" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform">
              <img src="https://cdn.worldvectorlogo.com/logos/metamask.svg" alt="MetaMask" className="max-h-20 opacity-70 hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
