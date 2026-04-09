import * as React from "react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { addPropertyControls, ControlType } from "framer"

export default function MedicalSupportSite(props) {
    const {
        heroTitle,
        heroSubtitle,
        heroImage,
        heroImage2,
        heroImage3,
        primaryColor,
        secondaryColor,
        phoneNumber,
    } = props

    const images = [
        heroImage || "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2070",
        heroImage2 || "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2053",
        heroImage3 || "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=2070",
    ].filter(Boolean)

    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    useEffect(() => {
        if (images.length <= 1) return
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
        }, 5000)
        return () => clearInterval(intervalId)
    }, [images.length])

    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    }

    // --- AI 5 Pillars + Front Product ---
    const services = [
        {
            icon: "🌐",
            title: "ホームページ制作",
            price: "1〜3万円",
            desc: "スマホ対応・SEO最適化済みのクリニック専用サイトを圧倒的低価格で。テンプレートベースで最短即日納品。",
            tag: "フロント商品",
            tagColor: "#16a34a",
        },
        {
            icon: "📅",
            title: "AI予約システム",
            price: "8〜15万円",
            desc: "24時間オンライン予約で電話対応を大幅削減。自動リマインダー機能付きで無断キャンセルも防止。",
            tag: "AI 5本柱",
            tagColor: primaryColor,
        },
        {
            icon: "💬",
            title: "AIチャットボット",
            price: "8〜15万円",
            desc: "患者さんからの「診療時間は？」「駐車場は？」を24時間自動応答。スタッフの電話負担をゼロに。",
            tag: "AI 5本柱",
            tagColor: primaryColor,
        },
        {
            icon: "📋",
            title: "AI問診システム",
            price: "10〜20万円",
            desc: "来院前にスマホで問診完了。AIが症状をトリアージし、医師の診察を効率化。待ち時間も削減。",
            tag: "AI 5本柱",
            tagColor: primaryColor,
        },
        {
            icon: "📦",
            title: "在庫管理システム",
            price: "5〜10万円",
            desc: "医療消耗品・薬剤の在庫をリアルタイム管理。発注忘れや過剰在庫を防ぎ、コストを最適化。",
            tag: "AI 5本柱",
            tagColor: primaryColor,
        },
        {
            icon: "💰",
            title: "補助金申請サポート",
            price: "成功報酬型",
            desc: "IT導入補助金を活用すれば、AI導入費用が実質半額に。申請書類の作成から採択までフルサポート。",
            tag: "コスト削減",
            tagColor: "#d97706",
        },
    ]

    const cases = [
        {
            badge: "サイト制作",
            title: "開業準備中に3日でサイト完成",
            desc: "開業1ヶ月前に相談。テンプレートベースで清潔感あるサイトを3日で納品。Google検索でも上位表示を実現。",
            result: "初月から新患20名獲得",
        },
        {
            badge: "AI導入",
            title: "AIチャットボットで電話対応60%減",
            desc: "1日50件以上あった電話問い合わせをAIチャットボットで自動化。スタッフの負担を大幅削減。",
            result: "電話対応に伴うスタッフ残業ゼロを達成",
        },
        {
            badge: "補助金活用",
            title: "補助金で予約+問診システムを実質半額導入",
            desc: "IT導入補助金を活用し、予約システムとAI問診を同時導入。自己負担15万円で30万円相当のシステムを実現。",
            result: "年間120万円の人件費削減",
        },
    ]

    const steps = [
        { num: "01", title: "無料相談", desc: "お電話・フォームでお気軽にご相談ください。現状のお悩みをヒアリングします。" },
        { num: "02", title: "ご提案・お見積り", desc: "最適なプランと明確なお見積りをご提示。補助金の活用可否もアドバイス。" },
        { num: "03", title: "導入・構築", desc: "最短即日〜2週間でシステムを構築。既存の業務フローに合わせてカスタマイズ。" },
        { num: "04", title: "運用サポート", desc: "導入後も月額3,000円〜の保守サポートで安心。トラブル時も迅速に対応。" },
    ]

    return (
        <div style={{ fontFamily: '"Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif', color: "#333", width: "100%", backgroundColor: "#fff", overflowX: "clip", lineHeight: 1.6 }}>

            {/* ===== Header ===== */}
            <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 40px", background: "linear-gradient(to right, #1e3a5f, #2563eb)", position: "sticky", top: 0, zIndex: 100 }}>
                <div style={{ cursor: "pointer", display: "flex", alignItems: "center" }} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                    <img src={`${import.meta.env.BASE_URL}logo.png`} alt="M-COINS" style={{ height: "40px", width: "auto" }} />
                </div>
                <nav style={{ display: "flex", gap: "28px", alignItems: "center" }}>
                    {[
                        ["#services", "サービス"],
                        ["#pricing", "料金"],
                        ["#cases", "導入事例"],
                        ["#flow", "導入の流れ"],
                        ["#contact", "お問い合わせ"],
                    ].map(([href, label]) => (
                        <a key={href} href={href} style={{ color: "#dbeafe", textDecoration: "none", fontSize: "14px", fontWeight: "500", letterSpacing: "0.05em" }}>
                            {label}
                        </a>
                    ))}
                </nav>
            </header>

            {/* ===== Hero ===== */}
            <section style={{ position: "relative", width: "100%", height: "85vh", minHeight: "600px", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
                <AnimatePresence initial={false}>
                    <motion.img
                        key={currentImageIndex}
                        src={images[currentImageIndex]}
                        alt="Hero"
                        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                    />
                </AnimatePresence>
                <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "linear-gradient(135deg, rgba(30,58,95,0.85) 0%, rgba(37,99,235,0.7) 100%)", zIndex: 1 }} />
                <div style={{ position: "relative", zIndex: 2, textAlign: "center", maxWidth: "800px", padding: "40px" }}>
                    <h1 style={{ fontSize: "42px", fontWeight: "bold", color: "#fff", lineHeight: 1.4, marginBottom: "24px", textShadow: "0 2px 10px rgba(0,0,0,0.2)" }}>
                        {heroTitle}
                    </h1>
                    <p style={{ fontSize: "18px", color: "#dbeafe", marginBottom: "36px", lineHeight: 1.8 }}>
                        {heroSubtitle}
                    </p>
                    <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
                        <motion.button
                            style={{ backgroundColor: "#fff", color: primaryColor, padding: "18px 40px", borderRadius: "8px", fontWeight: "bold", fontSize: "16px", border: "none", cursor: "pointer", boxShadow: "0 4px 20px rgba(0,0,0,0.15)" }}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            onClick={() => scrollTo("contact")}
                        >
                            無料相談してみる
                        </motion.button>
                        <motion.button
                            style={{ backgroundColor: "transparent", color: "#fff", padding: "18px 40px", borderRadius: "8px", fontWeight: "bold", fontSize: "16px", border: "2px solid rgba(255,255,255,0.6)", cursor: "pointer" }}
                            whileHover={{ scale: 1.03, borderColor: "#fff" }}
                            whileTap={{ scale: 0.97 }}
                            onClick={() => scrollTo("services")}
                        >
                            サービスを見る
                        </motion.button>
                    </div>
                </div>
            </section>

            {/* ===== Subsidy Banner ===== */}
            <section style={{ background: "linear-gradient(to right, #d97706, #f59e0b)", padding: "20px 24px", textAlign: "center" }}>
                <p style={{ color: "#fff", fontWeight: "bold", fontSize: "18px", margin: 0 }}>
                    🎉 IT導入補助金でAIシステムが<span style={{ fontSize: "24px", textDecoration: "underline" }}>実質半額</span>に！ 申請サポートも無料で対応中
                </p>
            </section>

            {/* ===== Numbers / Trust ===== */}
            <section style={{ padding: "80px 24px", backgroundColor: "#f8fbfe" }}>
                <div style={{ maxWidth: "1000px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "40px", justifyContent: "center", textAlign: "center" }}>
                    {[
                        { num: "1〜3万円", label: "サイト制作費用", sub: "業界最安水準" },
                        { num: "最短即日", label: "納品スピード", sub: "テンプレート対応" },
                        { num: "実質50%OFF", label: "補助金活用時", sub: "IT導入補助金対応" },
                        { num: "月3,000円〜", label: "保守サポート", sub: "導入後も安心" },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            style={{ flex: "1 1 200px", padding: "32px 16px" }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            <div style={{ fontSize: "36px", fontWeight: "bold", color: primaryColor, marginBottom: "8px" }}>{item.num}</div>
                            <div style={{ fontSize: "16px", fontWeight: "600", color: "#333", marginBottom: "4px" }}>{item.label}</div>
                            <div style={{ fontSize: "13px", color: "#888" }}>{item.sub}</div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ===== Problem → Solution ===== */}
            <section style={{ padding: "80px 24px", backgroundColor: "#fff" }}>
                <div style={{ maxWidth: "900px", margin: "0 auto" }}>
                    <h2 style={{ fontSize: "28px", fontWeight: "bold", textAlign: "center", marginBottom: "48px", color: "#1e3a5f" }}>
                        こんなお悩みありませんか？
                    </h2>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "32px" }}>
                        <div style={{ flex: "1 1 400px" }}>
                            {[
                                "電話が鳴りっぱなしでスタッフが疲弊している",
                                "ホームページが古く、スマホで見づらい",
                                "AI導入に興味はあるが、何から始めればいいか分からない",
                                "IT業者の見積りが高すぎて手が出ない",
                                "補助金があるらしいが、申請が複雑で諦めた",
                            ].map((q, i) => (
                                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px", marginBottom: "20px" }}>
                                    <span style={{ color: "#dc2626", fontSize: "20px", flexShrink: 0 }}>✕</span>
                                    <p style={{ margin: 0, fontSize: "15px", color: "#444", lineHeight: 1.7 }}>{q}</p>
                                </div>
                            ))}
                        </div>
                        <div style={{ flex: "1 1 400px", backgroundColor: "#f0f9ff", borderRadius: "16px", padding: "32px", borderLeft: `6px solid ${primaryColor}` }}>
                            <h3 style={{ fontSize: "20px", fontWeight: "bold", color: primaryColor, marginBottom: "20px" }}>
                                M-COINSがすべて解決します
                            </h3>
                            {[
                                "AIチャットボットで電話対応を60%以上削減",
                                "モバイル対応の美しいサイトを1〜3万円で制作",
                                "医療AIの専門家が最適なプランをご提案",
                                "業界最安水準の価格設定",
                                "補助金申請をフルサポート（成功報酬型）",
                            ].map((a, i) => (
                                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px", marginBottom: "16px" }}>
                                    <span style={{ color: "#16a34a", fontSize: "20px", flexShrink: 0 }}>✓</span>
                                    <p style={{ margin: 0, fontSize: "15px", color: "#333", lineHeight: 1.7 }}>{a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== Services ===== */}
            <section style={{ padding: "100px 24px", backgroundColor: "#f8fbfe" }} id="services">
                <div style={{ textAlign: "center", marginBottom: "60px" }}>
                    <h2 style={{ fontSize: "32px", fontWeight: "bold", color: "#1e3a5f", marginBottom: "16px" }}>サービス一覧</h2>
                    <div style={{ width: "60px", height: "3px", backgroundColor: primaryColor, margin: "0 auto", marginBottom: "16px" }} />
                    <p style={{ color: "#666", fontSize: "16px" }}>サイト制作を入口に、AI5本柱でクリニックのDXを支援します</p>
                </div>
                <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "28px" }} id="pricing">
                    {services.map((svc, i) => (
                        <motion.div
                            key={i}
                            style={{ backgroundColor: "#fff", padding: "36px 28px", borderRadius: "12px", boxShadow: "0 2px 12px rgba(0,0,0,0.05)", border: "1px solid #e8eef3", display: "flex", flexDirection: "column", position: "relative", overflow: "hidden" }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.08 }}
                        >
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
                                <span style={{ fontSize: "36px" }}>{svc.icon}</span>
                                <span style={{ display: "inline-block", padding: "4px 12px", backgroundColor: svc.tagColor + "15", color: svc.tagColor, fontSize: "12px", fontWeight: "bold", borderRadius: "20px" }}>{svc.tag}</span>
                            </div>
                            <h3 style={{ fontSize: "20px", fontWeight: "bold", color: "#1e3a5f", marginBottom: "8px" }}>{svc.title}</h3>
                            <div style={{ fontSize: "24px", fontWeight: "bold", color: primaryColor, marginBottom: "16px" }}>{svc.price}</div>
                            <p style={{ fontSize: "14px", color: "#555", lineHeight: 1.8, flexGrow: 1 }}>{svc.desc}</p>
                            <motion.button
                                style={{ marginTop: "20px", backgroundColor: primaryColor + "10", color: primaryColor, border: `1px solid ${primaryColor}30`, padding: "12px", borderRadius: "8px", fontWeight: "600", fontSize: "14px", cursor: "pointer", width: "100%" }}
                                whileHover={{ backgroundColor: primaryColor, color: "#fff" }}
                                onClick={() => scrollTo("contact")}
                            >
                                詳しく相談する
                            </motion.button>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ===== Why M-COINS (Blue Feature Section) ===== */}
            <section style={{ padding: "80px 24px", background: "linear-gradient(135deg, #1e3a5f 0%, #2563eb 100%)", color: "#fff" }}>
                <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
                    <h2 style={{ fontSize: "32px", fontWeight: "bold", textAlign: "center", marginBottom: "60px" }}>
                        M-COINSが選ばれる理由
                    </h2>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "40px", justifyContent: "center" }}>
                        {[
                            {
                                title: "医療AI専門のエンジニア",
                                desc: "北海道大学大学院 工学院で情報科学を専攻。医師との提携で医療×AIに特化した専門知識で、クリニックに最適なソリューションをご提案します。",
                            },

                            {
                                title: "圧倒的なコストパフォーマンス",
                                desc: "最新のAI開発ツールを駆使し、大手の1/10以下の価格でハイクオリティなシステムを提供。サイト制作は3万円から。",
                            },
                            {
                                title: "札幌密着・対面サポート",
                                desc: "札幌エリアなら直接お伺いしてヒアリング・導入支援が可能。地元だからこそのスピード感と安心感をお届けします。",
                            },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                style={{ flex: "1 1 300px", padding: "32px", backgroundColor: "rgba(255,255,255,0.1)", borderRadius: "12px", backdropFilter: "blur(10px)" }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.15 }}
                            >
                                <h3 style={{ fontSize: "22px", fontWeight: "bold", marginBottom: "16px" }}>{item.title}</h3>
                                <p style={{ fontSize: "15px", lineHeight: 2.0, color: "#dbeafe" }}>{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== Cases ===== */}
            <section style={{ padding: "100px 24px", backgroundColor: "#fff" }} id="cases">
                <div style={{ textAlign: "center", marginBottom: "60px" }}>
                    <h2 style={{ fontSize: "32px", fontWeight: "bold", color: "#1e3a5f", marginBottom: "16px" }}>導入事例</h2>
                    <div style={{ width: "60px", height: "3px", backgroundColor: primaryColor, margin: "0 auto" }} />
                </div>
                <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "32px", justifyContent: "center" }}>
                    {cases.map((c, i) => (
                        <motion.div
                            key={i}
                            style={{ flex: "1 1 300px", backgroundColor: "#fff", borderRadius: "12px", boxShadow: "0 4px 20px rgba(0,0,0,0.06)", border: "1px solid #e8eef3", overflow: "hidden" }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            <div style={{ padding: "32px" }}>
                                <span style={{ display: "inline-block", padding: "4px 14px", backgroundColor: secondaryColor, color: primaryColor, fontSize: "12px", fontWeight: "bold", borderRadius: "20px", marginBottom: "16px" }}>{c.badge}</span>
                                <h3 style={{ fontSize: "18px", fontWeight: "bold", color: "#1e3a5f", marginBottom: "12px", lineHeight: 1.5 }}>{c.title}</h3>
                                <p style={{ fontSize: "14px", color: "#555", lineHeight: 1.8, marginBottom: "16px" }}>{c.desc}</p>
                            </div>
                            <div style={{ padding: "16px 32px", backgroundColor: "#f0fdf4", borderTop: "1px solid #dcfce7" }}>
                                <p style={{ margin: 0, fontSize: "14px", fontWeight: "bold", color: "#16a34a" }}>📈 {c.result}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ===== Flow ===== */}
            <section style={{ padding: "100px 24px", backgroundColor: "#f8fbfe" }} id="flow">
                <div style={{ textAlign: "center", marginBottom: "60px" }}>
                    <h2 style={{ fontSize: "32px", fontWeight: "bold", color: "#1e3a5f", marginBottom: "16px" }}>導入の流れ</h2>
                    <div style={{ width: "60px", height: "3px", backgroundColor: primaryColor, margin: "0 auto" }} />
                </div>
                <div style={{ maxWidth: "900px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "24px", justifyContent: "center" }}>
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            style={{ flex: "1 1 200px", textAlign: "center", padding: "32px 20px", backgroundColor: "#fff", borderRadius: "12px", boxShadow: "0 2px 10px rgba(0,0,0,0.04)", position: "relative" }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            <div style={{ fontSize: "40px", fontWeight: "bold", color: primaryColor + "20", marginBottom: "8px" }}>{step.num}</div>
                            <h3 style={{ fontSize: "18px", fontWeight: "bold", color: "#1e3a5f", marginBottom: "12px" }}>{step.title}</h3>
                            <p style={{ fontSize: "13px", color: "#666", lineHeight: 1.7, margin: 0 }}>{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ===== Contact ===== */}
            <section style={{ padding: "100px 24px", backgroundColor: "#fff" }} id="contact">
                <div style={{ textAlign: "center", marginBottom: "60px" }}>
                    <h2 style={{ fontSize: "32px", fontWeight: "bold", color: "#1e3a5f", marginBottom: "16px" }}>お問い合わせ</h2>
                    <div style={{ width: "60px", height: "3px", backgroundColor: primaryColor, margin: "0 auto", marginBottom: "16px" }} />
                    <p style={{ color: "#666", fontSize: "16px" }}>まずは無料相談から。お気軽にお問い合わせください。</p>
                </div>
                <div style={{ maxWidth: "800px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "32px", justifyContent: "center" }}>
                    {/* Phone */}
                    <motion.div
                        style={{ flex: "1 1 350px", padding: "48px 32px", textAlign: "center", backgroundColor: "#f8fbfe", borderRadius: "16px", border: `2px solid ${secondaryColor}` }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div style={{ fontSize: "36px", marginBottom: "12px" }}>📞</div>
                        <h3 style={{ fontSize: "18px", color: "#333", marginBottom: "16px" }}>お電話での無料相談</h3>
                        <div style={{ fontSize: "36px", fontWeight: "bold", color: primaryColor, marginBottom: "8px", letterSpacing: "0.05em" }}>{phoneNumber}</div>
                        <p style={{ color: "#888", fontSize: "14px", margin: 0 }}>受付時間：9:00〜18:00（土日祝も対応可）</p>
                        <div style={{ marginTop: "20px", paddingTop: "20px", borderTop: "1px solid #e2e8f0" }}>
                            <div style={{ fontSize: "24px", marginBottom: "8px" }}>✉️</div>
                            <a href="mailto:Hero@m-coinsjp.com" style={{ fontSize: "18px", fontWeight: "bold", color: primaryColor, textDecoration: "none" }}>Hero@m-coinsjp.com</a>
                        </div>
                    </motion.div>
                    {/* Free Diagnosis */}
                    <motion.div
                        style={{ flex: "1 1 350px", padding: "48px 32px", textAlign: "center", background: `linear-gradient(135deg, ${primaryColor}, #2563eb)`, borderRadius: "16px", color: "#fff" }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <div style={{ fontSize: "36px", marginBottom: "12px" }}>🔍</div>
                        <h3 style={{ fontSize: "18px", marginBottom: "16px" }}>無料サイト診断</h3>
                        <p style={{ fontSize: "15px", color: "#dbeafe", marginBottom: "24px", lineHeight: 1.7 }}>
                            今のホームページ、スマホで見やすいですか？<br />
                            無料で改善点をレポートします。
                        </p>
                        <motion.button
                            style={{ backgroundColor: "#fff", color: primaryColor, padding: "14px 36px", borderRadius: "8px", fontWeight: "bold", fontSize: "15px", border: "none", cursor: "pointer" }}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            無料診断を申し込む
                        </motion.button>
                    </motion.div>
                </div>
            </section>

            {/* ===== CTA Banner ===== */}
            <section style={{ padding: "60px 24px", background: "linear-gradient(135deg, #1e3a5f, #2563eb)", textAlign: "center" }}>
                <h2 style={{ fontSize: "28px", fontWeight: "bold", color: "#fff", marginBottom: "16px" }}>
                    クリニックのIT・AI化、まずは相談から
                </h2>
                <p style={{ color: "#dbeafe", fontSize: "16px", marginBottom: "32px" }}>
                    サイト制作1万円〜 / AI導入は補助金で実質半額 / 札幌エリア対面対応
                </p>
                <motion.button
                    style={{ backgroundColor: "#fff", color: primaryColor, padding: "18px 48px", borderRadius: "8px", fontWeight: "bold", fontSize: "18px", border: "none", cursor: "pointer", boxShadow: "0 4px 20px rgba(0,0,0,0.15)" }}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => scrollTo("contact")}
                >
                    無料相談する
                </motion.button>
            </section>

            {/* ===== Footer ===== */}
            <footer style={{ backgroundColor: "#0f172a", color: "#94a3b8", padding: "60px 24px 40px", fontSize: "14px" }}>
                <div style={{ maxWidth: "1000px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "40px", justifyContent: "space-between", marginBottom: "40px" }}>
                    <div style={{ flex: "1 1 300px" }}>
                        <div style={{ marginBottom: "16px" }}>
                            <img src={`${import.meta.env.BASE_URL}logo.png`} alt="M-COINS" style={{ height: "36px", width: "auto" }} />
                        </div>
                        <p style={{ lineHeight: 1.8, color: "#64748b" }}>
                            医療特化型 IT・AIソリューション<br />
                            クリニックのDXをワンストップで支援
                        </p>
                    </div>
                    <div style={{ flex: "1 1 200px" }}>
                        <h4 style={{ color: "#e2e8f0", fontWeight: "bold", marginBottom: "16px" }}>サービス</h4>
                        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                            {["ホームページ制作", "AI予約システム", "AIチャットボット", "AI問診システム", "補助金サポート"].map((s, i) => (
                                <a key={i} href="#services" style={{ color: "#64748b", textDecoration: "none", fontSize: "13px" }}>{s}</a>
                            ))}
                        </div>
                    </div>
                    <div style={{ flex: "1 1 200px" }}>
                        <h4 style={{ color: "#e2e8f0", fontWeight: "bold", marginBottom: "16px" }}>お問い合わせ</h4>
                        <p style={{ color: "#64748b", lineHeight: 1.8, fontSize: "13px" }}>
                            TEL: {phoneNumber}<br />
                            Mail: <a href="mailto:Hero@m-coinsjp.com" style={{ color: "#93c5fd", textDecoration: "none" }}>Hero@m-coinsjp.com</a><br />
                            受付: 9:00〜18:00<br />
                            札幌エリア対応
                        </p>
                    </div>
                </div>
                <div style={{ borderTop: "1px solid #1e293b", paddingTop: "24px", textAlign: "center", color: "#475569" }}>
                    <p style={{ margin: 0 }}>&copy; {new Date().getFullYear()} M-COINS. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}

// ==========================================
// Property Controls configuration
// ==========================================
addPropertyControls(MedicalSupportSite, {
    heroTitle: {
        type: ControlType.String,
        title: "ヒーロータイトル",
        defaultValue: "クリニックのIT・AI化を\n圧倒的コスパで実現",
        displayTextArea: true,
    },
    heroSubtitle: {
        type: ControlType.String,
        title: "ヒーローの補足文",
        defaultValue: "ホームページ制作1万円〜。AI予約・チャットボット・問診システムまで。\n補助金活用で実質半額。札幌の医療AIの専門家にお任せください。",
        displayTextArea: true,
    },
    heroImage: {
        type: ControlType.Image,
        title: "ヒーロー画像1",
    },
    heroImage2: {
        type: ControlType.Image,
        title: "ヒーロー画像2",
    },
    heroImage3: {
        type: ControlType.Image,
        title: "ヒーロー画像3",
    },
    primaryColor: {
        type: ControlType.Color,
        title: "メインカラー",
        defaultValue: "#005A9C",
    },
    secondaryColor: {
        type: ControlType.Color,
        title: "サブカラー",
        defaultValue: "#E6F3FF",
    },
    phoneNumber: {
        type: ControlType.String,
        title: "電話番号",
        defaultValue: "080-9976-6543",
    },
})
