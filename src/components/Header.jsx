import React from 'react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-800 to-blue-600 shadow-md sticky top-0 z-50">
      <div className="container-custom py-4 flex justify-between items-center">
        {/* Logo area */}
        <div className="flex items-center gap-3">
          <img src={`${import.meta.env.BASE_URL}logo.png`} alt="M-COINS 札幌メディカルPCサポート" className="h-10 w-auto" />
          <div className="hidden sm:block">
            <p className="text-xs text-blue-100 font-medium tracking-wider">医療特化型IT・AIトラブル解決</p>
          </div>
        </div>

        {/* Navigation - hidden on mobile */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#services" className="text-blue-100 hover:text-white font-medium transition-colors">サービス内容</a>
          <a href="#cases" className="text-blue-100 hover:text-white font-medium transition-colors">解決事例</a>
          <a href="#news" className="text-blue-100 hover:text-white font-medium transition-colors">お知らせ</a>
          <a href="#pricing" className="text-blue-100 hover:text-white font-medium transition-colors">料金案内</a>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a href="#contact" className="bg-white hover:bg-blue-50 text-blue-700 px-6 py-2.5 rounded-md font-bold transition-all shadow-md hover:shadow-lg flex items-center gap-2">
            無料相談・お問い合わせ
          </a>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden text-blue-100 hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
