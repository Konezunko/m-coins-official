import React from 'react';

const Cases = () => {
  const caseStudies = [
    {
      id: 1,
      clinic: '札幌市中央区 内科クリニック様',
      title: '突然の電子カルテサーバーダウンから2時間で復旧',
      category: 'トラブル解決',
      description: '朝一番に電子カルテの親機が立ち上がらないというSOS。即座に駆けつけ、HDDの物理障害と特定。クローン作成と代替機へのシステム移行を行い、午前中の診療に間に合わせました。'
    },
    {
      id: 2,
      clinic: '札幌市豊平区 耳鼻咽喉科様',
      title: 'AI問診・音声入力導入により、残業時間を月40時間削減',
      category: 'AI・DX化',
      description: '医師のカルテ入力負担を軽減するため、医療辞書特化のAI音声入力とWeb問診システムを連携導入。スタッフの転記作業もなくなり、クリニック全体の残業時間が劇的に減少しました。'
    },
    {
      id: 3,
      clinic: '札幌市西区 歯科医院様',
      title: 'スマートフォン対応のWebサイトリニューアルで新患が1.5倍に',
      category: 'Web制作',
      description: '10年前の古いままだったホームページを、清潔感のあるデザインとスマートフォン完全対応の構成にリニューアル。同時にGoogleマップ（MEO）の最適化を行い、近隣からの新患者数が大幅に増加しました。'
    }
  ];

  return (
    <section id="cases" className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 tracking-tight">解決事例・お客様Voice</h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto rounded mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
            これまで多くの医療機関様のIT課題を解決してきました。その一部をご紹介します。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {caseStudies.map((item) => (
            <div key={item.id} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col h-full">
              <div className="mb-4 flex items-center gap-2">
                <span className="text-xs font-bold px-2 py-1 bg-blue-100 text-blue-700 rounded text-center inline-block">
                  {item.category}
                </span>
                <span className="text-sm font-medium text-slate-500">{item.clinic}</span>
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-4 leading-tight">
                {item.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                {item.description}
              </p>
              
              <div className="mt-auto border-t border-slate-100 pt-4">
                 <div className="flex items-center gap-3">
                   <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center text-slate-400">
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                       <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                     </svg>
                   </div>
                   <div>
                     <p className="text-xs text-slate-500">院長先生の声</p>
                     <p className="text-sm font-bold text-slate-700">「素早い対応で本当に助かりました」</p>
                   </div>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cases;
