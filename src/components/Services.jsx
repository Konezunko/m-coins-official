import React from 'react';
import { Laptop, Globe, BrainCircuit } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <Laptop size={40} strokeWidth={1.5} />,
      title: 'AI・ITトラブル即日解決',
      description: '「PCが起動しない」「電子カルテの動作が異常に遅い」「ネットワークが繋がらない」など、診療を止める致命的なトラブルに最短で駆けつけ、原因究明と復旧を行います。SSD換装やデータ復旧も対応可能です。',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      id: 2,
      icon: <Globe size={40} strokeWidth={1.5} />,
      title: 'クリニックWeb制作・保守',
      description: '患者様が安心して来院できる、清潔感と信頼感を備えたWebサイトを制作します。古いサイトのリニューアル、お知らせの更新代行、SEO対策（MEO含む）など、地域で選ばれるクリニック作りをITからサポートします。',
      color: 'text-teal-600',
      bgColor: 'bg-teal-50'
    },
    {
      id: 3,
      icon: <BrainCircuit size={40} strokeWidth={1.5} />,
      title: 'AIを活用した診療効率化',
      description: '最新の医療向け音声入力AIや、問診票の自動テキスト化システムなどの導入支援を行います。医師やスタッフの事務作業時間を大幅に削減し、患者様と向き合う時間を創出するためのDX（デジタルトランスフォーメーション）を伴走支援します。',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50'
    }
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 tracking-tight">サービス案内</h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto rounded mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
            医療現場の特殊な環境を理解した上で、セキュリティと安定性を最優先にしたサポートを提供します。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-shadow group relative overflow-hidden">
              <div className={`w-20 h-20 ${service.bgColor} ${service.color} rounded-2xl flex items-center justify-center mb-6 shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
              
              <div className="mt-8">
                <a href="#" className="text-blue-600 font-bold text-sm inline-flex items-center gap-1 hover:text-blue-800 transition-colors">
                  詳細を見る
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
