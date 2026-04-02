import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 tracking-tight">無料相談・お問い合わせ</h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto rounded mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
            パソコントラブルのレスキューや、Webサイト・AI導入に関するご相談など、お気軽にお問い合わせください。
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
              <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center gap-2">
                <Phone className="text-blue-600" />
                お電話でのご相談（お急ぎの方）
              </h3>
              <p className="text-3xl font-bold text-blue-600 tracking-wider mb-2">011-000-0000</p>
              <p className="text-sm font-medium text-slate-600 mb-6">受付時間：9:00〜18:00（土日祝も対応可）</p>
              
              <div className="space-y-4 pt-6 border-t border-blue-200">
                <div className="flex items-start gap-3">
                  <Mail className="text-blue-500 shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-bold text-slate-800 text-sm">メールアドレス</p>
                    <p className="text-slate-600 text-sm">support@sapporo-medical-pc.demo</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="text-blue-500 shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-bold text-slate-800 text-sm">対応エリア</p>
                    <p className="text-slate-600 text-sm">札幌市（中央区・北区・東区・白石区・豊平区・南区・西区・厚別区・手稲区・清田区）および近郊市町村</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="clinicName" className="block text-sm font-bold text-slate-700 mb-2">
                    クリニック名・法人名 <span className="text-red-500 text-xs font-normal ml-1">必須</span>
                  </label>
                  <input type="text" id="clinicName" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="例：札幌中央内科クリニック" />
                </div>
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2">
                    ご担当者様名 <span className="text-red-500 text-xs font-normal ml-1">必須</span>
                  </label>
                  <input type="text" id="name" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="例：山田 太郎" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2">
                    メールアドレス <span className="text-red-500 text-xs font-normal ml-1">必須</span>
                  </label>
                  <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="例：info@example.com" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-slate-700 mb-2">
                    お電話番号 <span className="text-red-500 text-xs font-normal ml-1">必須</span>
                  </label>
                  <input type="tel" id="phone" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="例：090-0000-0000" />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="category" className="block text-sm font-bold text-slate-700 mb-2">
                  ご相談の種類
                </label>
                <div className="relative">
                  <select id="category" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-transparent relative z-10 transition-all">
                    <option value="">選択してください</option>
                    <option value="trouble">パソコントラブル・修理・データ復旧</option>
                    <option value="web">Webサイト制作・保守</option>
                    <option value="ai">AI導入・IT顧問サポート</option>
                    <option value="other">その他のお問い合わせ</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none z-0 text-slate-400">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2">
                  詳細な内容
                </label>
                <textarea id="message" rows="5" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-y transition-all" placeholder="現在のトラブルの状況や、ご検討中の要件などをご自由にお書きください。"></textarea>
              </div>

              <div className="text-center">
                <button type="button" className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl w-full sm:w-auto min-w-[200px]">
                  入力内容を確認する
                </button>
                <p className="text-xs text-slate-400 mt-4">
                  ※送信いただいた内容はプライバシーポリシーに基づき適切に管理いたします。
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
