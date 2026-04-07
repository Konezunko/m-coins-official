import React from 'react';
import { Check } from 'lucide-react';

const Pricing = () => {
  return (
    <section id="pricing" className="section-padding bg-blue-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 tracking-tight">料金案内</h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto rounded mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
            医療機関様向けの明朗会計。スポット対応から、月額固定の保守サポートまでご用意しております。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Spot Plan */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 flex flex-col relative overflow-hidden">
            <h3 className="text-2xl font-bold text-slate-800 mb-2">スポットトラブル解決</h3>
            <p className="text-slate-500 mb-6">突発的なパソコントラブルやネットワーク障害に。</p>
            
            <div className="mb-8">
              <span className="text-sm font-bold text-slate-500">基本出張診断料</span>
              <div className="text-4xl font-bold text-slate-800 my-1">
                ¥5,500<span className="text-lg text-slate-500 font-medium">〜</span>
              </div>
              <p className="text-xs text-slate-400">※作業内容により別途お見積りとなります。</p>
            </div>

            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-start gap-3">
                <Check className="text-blue-500 shrink-0 mt-0.5" size={20} />
                <span className="text-slate-700">PC起動不可・ウイルス駆除</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-blue-500 shrink-0 mt-0.5" size={20} />
                <span className="text-slate-700">電子カルテ端末のネットワーク接続不良</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-blue-500 shrink-0 mt-0.5" size={20} />
                <span className="text-slate-700">プリンター・周辺機器の設定</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-blue-500 shrink-0 mt-0.5" size={20} />
                <span className="text-slate-700 text-sm">データ復旧（USB/HDD等 別途お見積り）</span>
              </li>
            </ul>

            <a href="#contact" className="w-full text-center bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-bold transition-colors">
              トラブルのご相談
            </a>
          </div>

          {/* Monthly Plan */}
          <div className="bg-blue-900 rounded-2xl shadow-xl border border-blue-800 p-8 flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-4 py-1 rounded-bl-lg">
              おすすめ
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">月額IT顧問サポート</h3>
            <p className="text-blue-200 mb-6">院内のIT全般を任せたい、AI導入を進めたいクリニック様に。</p>
            
            <div className="mb-8">
              <span className="text-sm font-bold text-blue-300">月額費用（端末5台まで）</span>
              <div className="text-4xl font-bold text-white my-1">
                ¥33,000<span className="text-lg text-blue-300 font-medium"> / 月</span>
              </div>
              <p className="text-xs text-blue-400">※6台以上は別途お見積りとなります。</p>
            </div>

            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-start gap-3">
                <Check className="text-blue-400 shrink-0 mt-0.5" size={20} />
                <span className="text-white relative">
                  月1回の定期点検・メンテ・リモート対応無制限
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-blue-400 shrink-0 mt-0.5" size={20} />
                <span className="text-white">AI問診・音声入力等の導入コンサルティング</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-blue-400 shrink-0 mt-0.5" size={20} />
                <span className="text-white">クリニックWebサイトの更新代行・簡易保守</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-blue-400 shrink-0 mt-0.5" size={20} />
                <span className="text-white">強固なセキュリティ環境の維持・提案</span>
              </li>
            </ul>

            <a href="#contact" className="w-full text-center bg-white text-blue-900 hover:bg-blue-50 px-6 py-3 rounded-lg font-bold transition-colors shadow-lg">
              プランの詳細を聞く
            </a>
          </div>

          {/* Web Maintenance Plan */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 flex flex-col relative overflow-hidden">
            <h3 className="text-2xl font-bold text-slate-800 mb-2">ホームページ保守プラン</h3>
            <p className="text-slate-500 mb-6">先生は触らずOK。更新依頼を受けて当方が代行します。</p>

            <div className="mb-8">
              <span className="text-sm font-bold text-slate-500">月額費用</span>
              <div className="text-4xl font-bold text-slate-800 my-1">
                ¥3,000<span className="text-lg text-slate-500 font-medium">〜 / 月</span>
              </div>
              <p className="text-xs text-slate-400">※更新頻度・ページ数に応じてご相談。</p>
            </div>

            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-start gap-3">
                <Check className="text-blue-500 shrink-0 mt-0.5" size={20} />
                <span className="text-slate-700">お知らせ・診療時間変更の更新し放題</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-blue-500 shrink-0 mt-0.5" size={20} />
                <span className="text-slate-700">休診情報・担当医変更などの即時反映</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-blue-500 shrink-0 mt-0.5" size={20} />
                <span className="text-slate-700">メール・LINEで依頼するだけのかんたん運用</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-blue-500 shrink-0 mt-0.5" size={20} />
                <span className="text-slate-700 text-sm">SSL・ドメイン等の基本監視</span>
              </li>
            </ul>

            <a href="#contact" className="w-full text-center bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-bold transition-colors">
              保守プランの相談
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
