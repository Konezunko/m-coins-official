import React from 'react';

const News = () => {
  const newsItems = [
    {
      id: 1,
      date: '2026.03.15',
      category: 'お知らせ',
      title: 'ゴールデンウィーク期間中のサポート体制について'
    },
    {
      id: 2,
      date: '2026.03.01',
      category: 'サービス',
      title: '医療向け生成AI導入サポートパックの提供を開始しました'
    },
    {
      id: 3,
      date: '2026.02.10',
      category: 'セキュリティ',
      title: '【重要】Emotetなどのマルウェア感染を狙う不審なメールへの注意喚起'
    },
    {
      id: 4,
      date: '2026.01.25',
      category: '事例',
      title: '「導入事例」に市内A皮膚科クリニック様のAI音声入力対応事例を追加しました'
    }
  ];

  return (
    <section id="news" className="section-padding bg-white">
      <div className="container-custom max-w-4xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b-2 border-slate-100">
          <div>
            <h2 className="text-3xl font-bold text-blue-900 tracking-tight">お知らせ</h2>
            <p className="text-slate-500 mt-2">News & Updates</p>
          </div>
          <a href="#" className="hidden md:inline-flex text-blue-600 font-bold hover:text-blue-800 transition-colors items-center gap-1">
            一覧を見る
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </a>
        </div>

        <div className="space-y-4">
          {newsItems.map((item) => (
            <a key={item.id} href="#" className="block group">
              <div className="flex flex-col md:flex-row md:items-center py-4 border-b border-slate-100 group-hover:bg-slate-50 transition-colors px-2 -mx-2 rounded">
                <div className="flex items-center gap-4 mb-2 md:mb-0 md:w-48 shrink-0">
                  <span className="text-slate-500 font-medium tabular-nums">{item.date}</span>
                  <span className={`text-xs font-bold px-2 py-1 rounded w-20 text-center
                    ${item.category === 'お知らせ' ? 'bg-slate-200 text-slate-700' : ''}
                    ${item.category === 'サービス' ? 'bg-blue-100 text-blue-700' : ''}
                    ${item.category === 'セキュリティ' ? 'bg-red-100 text-red-700' : ''}
                    ${item.category === '事例' ? 'bg-teal-100 text-teal-700' : ''}
                  `}>
                    {item.category}
                  </span>
                </div>
                <h3 className="text-slate-800 font-medium group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <a href="#" className="inline-flex text-blue-600 font-bold hover:text-blue-800 transition-colors items-center gap-1">
            一覧を見る
          </a>
        </div>
      </div>
    </section>
  );
};

export default News;
