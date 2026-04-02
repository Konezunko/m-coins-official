import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="container-custom grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="mb-4 bg-white inline-block p-1.5 rounded-md">
            <img src="/logo.png" alt="M-COINS 札幌メディカルPCサポート" className="h-8 w-auto" />
          </div>
          <p className="text-sm leading-relaxed text-slate-400 mb-4">
            札幌市のクリニック・医療機関に特化したPC・ITサポート。電子カルテのトラブルからAI導入による診療効率化まで、経験豊富なプロが迅速に解決します。
          </p>
          <p className="text-sm font-medium">営業時間: 9:00 - 18:00 (日・祝対応可)</p>
          <p className="text-sm font-medium">対応エリア: 札幌市内および近郊</p>
        </div>

        <div>
          <h3 className="text-white font-bold mb-4 border-b border-slate-700 pb-2 inline-block">サービス</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#services" className="hover:text-blue-400 transition-colors">パソコントラブル即日解決</a></li>
            <li><a href="#services" className="hover:text-blue-400 transition-colors">ネットワーク・セキュリティ構築</a></li>
            <li><a href="#services" className="hover:text-blue-400 transition-colors">クリニックWebサイト制作・保守</a></li>
            <li><a href="#services" className="hover:text-blue-400 transition-colors">医療AI導入・運用サポート</a></li>
            <li><a href="#services" className="hover:text-blue-400 transition-colors">データ復旧（SSD/HDD/USB）</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold mb-4 border-b border-slate-700 pb-2 inline-block">お問い合わせ</h3>
          <p className="text-sm mb-4">
            お急ぎのパソコントラブルは、お電話またはフォームより「今すぐ」ご連絡ください。
          </p>
          <a href="#contact" className="inline-block bg-white text-slate-900 hover:bg-blue-50 px-6 py-2 rounded font-bold transition-colors text-sm text-center w-full">
            フォームからのお問い合わせ
          </a>
        </div>
      </div>
      
      <div className="container-custom mt-12 pt-6 border-t border-slate-800 text-center text-xs text-slate-500">
        <p>&copy; {new Date().getFullYear()} 札幌メディカルPCサポート All Rights Reserved.</p>
        <p className="mt-2">※当サイトの内容はデモ用のものであり、実際の企業・サービス等とは関係ありません。</p>
      </div>
    </footer>
  );
};

export default Footer;
