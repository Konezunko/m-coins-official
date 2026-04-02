import React from 'react';
import { ShieldCheck, Clock, MonitorCheck } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-white pt-20 pb-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 opacity-10 pointer-events-none">
        <svg width="600" height="600" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#005A9C" d="M47.7,-57.2C59.4,-45.5,64.8,-27.2,66.9,-8.8C68.9,9.5,67.6,28,58.1,43.2C48.6,58.4,31.1,70.3,10.6,74.7C-9.9,79.1,-33.5,76,-48.6,62.8C-63.8,49.6,-70.5,26.3,-69.6,4.6C-68.7,-17.1,-60.1,-37.2,-46.2,-49.2C-32.3,-61.2,-13,-65,-1.3,-63.5C10.4,-61.9,20.8,-54.9,47.7,-57.2Z" transform="translate(100 100)" />
        </svg>
      </div>

      <div className="container-custom relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-block bg-blue-100 text-blue-800 px-4 py-1.5 rounded-full text-sm font-bold border border-blue-200 shadow-sm">
            札幌市の医師・クリニック様限定
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 leading-tight">
            診療を止めない。<br />
            <span className="text-blue-600 block mt-2">医療に特化したPCサポート</span>
          </h2>
          
          <p className="text-lg text-slate-600 leading-relaxed md:pr-8">
            電子カルテのトラブルから、最新AIを活用した診療効率化、Webサイトの保守運用まで、医療現場のIT課題をワンストップで解決。急なトラブルにも迅速に駆けつけます。
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-lg font-bold transition-all shadow-lg hover:shadow-xl text-center flex items-center justify-center gap-2 text-lg">
              無料診断を予約する
            </a>
            <a href="#services" className="bg-white border-2 border-slate-200 hover:border-blue-200 hover:bg-blue-50 text-slate-700 px-8 py-3.5 rounded-lg font-bold transition-all text-center">
              サービス詳細を見る
            </a>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200">
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                <Clock size={24} />
              </div>
              <p className="text-sm font-bold text-slate-700">最短即日対応</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                <ShieldCheck size={24} />
              </div>
              <p className="text-sm font-bold text-slate-700">安心のセキュリティ</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                <MonitorCheck size={24} />
              </div>
              <p className="text-sm font-bold text-slate-700">医療IT専門</p>
            </div>
          </div>
        </div>

        <div className="relative hidden md:block">
          <div className="aspect-square bg-gradient-to-tr from-blue-200 to-blue-50 rounded-2xl shadow-inner relative overflow-hidden">
            {/* Using a placeholder box that looks like an abstract medical/tech illustration */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-3/4 h-3/4 bg-white/50 backdrop-blur-sm shadow-xl rounded-xl border border-white p-6 relative">
                 <div className="w-1/3 h-4 bg-slate-200 rounded mb-4"></div>
                 <div className="space-y-2 mb-6">
                   <div className="w-full h-2 bg-slate-100 rounded"></div>
                   <div className="w-5/6 h-2 bg-slate-100 rounded"></div>
                   <div className="w-4/6 h-2 bg-slate-100 rounded"></div>
                 </div>
                 <div className="flex gap-4">
                   <div className="w-1/2 h-24 bg-blue-100 rounded-lg flex items-center justify-center">
                     <span className="text-blue-500 opacity-50"><MonitorCheck size={32}/></span>
                   </div>
                   <div className="w-1/2 h-24 bg-teal-50 rounded-lg flex items-center justify-center">
                     <span className="text-teal-500 opacity-50"><ShieldCheck size={32}/></span>
                   </div>
                 </div>
                 {/* Floating badge */}
                 <div className="absolute -right-6 -bottom-6 bg-white shadow-lg p-3 rounded-xl border border-blue-50 text-blue-600 font-bold flex items-center gap-2">
                   <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                   <span>System Normal</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
