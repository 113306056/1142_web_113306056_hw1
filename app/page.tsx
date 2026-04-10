"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// ── Inline SVG Icons ──────────────────────────────────────────────────────────
const MailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);
const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);
const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
const ChevronRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m9 18 6-6-6-6" />
  </svg>
);

// ── Data ──────────────────────────────────────────────────────────────────────
const education = [
  { degree: "國立政治大學 資訊管理學系", detail: "大二在學中", icon: "🎓" },
  { degree: "雙主修 數位內容科技學士學位學程", detail: "修習中", icon: "📐" },
  { degree: "錄取 金融科技專長學程", detail: "進修中", icon: "💳" },
];

const courses = ["資料結構", "統計學", "管理科學", "資料庫管理", "程式設計"];

const skills = [
  { label: "#活動策劃", color: "#3b82f6" },
  { label: "#UI / UX 設計", color: "#06b6d4" },
  { label: "#溝通協調", color: "#8b5cf6" },
  { label: "#美編、設計排版", color: "#10b981" },
];

const experiences = [
  {
    title: "資管系系學會　公關長",
    period: "2025 –",
    desc: "統籌系學會對外公關事務，負責對外形象管理及社群媒體內容規劃、對外合作洽談。",
    tag: "社團職務",
    color: "#3b82f6",
  },
  {
    title: "政大創業聯會　活動組 組員",
    period: "2025",
    desc: "負責籌辦創客松等創新創業相關活動，統籌活動流程、聯繫講師與評審資源。透過與創業者的密集互動，培養對市場需求的實務理解，磨練在高壓時程下的多工協調能力。",
    tag: "社團職務",
    color: "#06b6d4",
  },
  {
    title: "攝影社 社員",
    period: "2025–",
    desc: " ",
    tag: "社團經歷",
    color: "#8b5cf6",
  },
  {
    title: "台大向日葵服務社　出隊",
    period: "2024",
    desc: "前往偏鄉帶領國小學童參與課程與活動。培養對不同背景群體的同理心與現場應變能力，學會如何在有限時間內與陌生孩子建立信任關係。",
    tag: "志工服務",
    color: "#10b981",
  },
];

const achievements = [
  { title: "114-1 資管系書卷獎", detail: "專案規劃、執行", year: "2025", icon: "🏅" },
  { title: "2025 ATCC", detail: "進入第二輪複賽", year: "2025", icon: "🏆" },
  { title: "2025 玉山商業競賽", detail: "參賽", year: "2025", icon: "⭐" },
  { title: "2026 L'ORÉAL BRANDSTORM", detail: "參賽", year: "2026", icon: "💡" },
];

// ── Glass Card helper ─────────────────────────────────────────────────────────
const glass: React.CSSProperties = {
  background: "rgba(255,255,255,0.45)",
  backdropFilter: "blur(20px)",
  WebkitBackdropFilter: "blur(20px)",
  border: "1px solid rgba(255,255,255,0.7)",
  boxShadow: "0 8px 32px rgba(59,130,246,0.10), 0 1px 0 rgba(255,255,255,0.8) inset",
};

// ── Component ─────────────────────────────────────────────────────────────────
export default function Home() {
  const [activeSection, setActiveSection] = useState<"education" | "experience" | "achievements" | "projects">("education");
  const [hoveredExp, setHoveredExp] = useState<number | null>(null);

  return (
    <>
      {/* ── Global styles ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400;500;700&family=DM+Serif+Display:ital@0;1&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          font-family: 'Noto Sans TC', sans-serif;
          background: linear-gradient(135deg, #dbeeff 0%, #eaf5ff 35%, #c5e4f5 65%, #d9f0ff 100%);
          min-height: 100vh;
        }

        @keyframes floatBlob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(20px, -30px) scale(1.05); }
          66% { transform: translate(-15px, 15px) scale(0.97); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.93); }
          to   { opacity: 1; transform: scale(1); }
        }
        .animate-fade-up  { animation: fadeUp 0.6s ease both; }
        .animate-scale-in { animation: scaleIn 0.5s ease both; }

        .nav-btn {
          transition: all 0.25s ease;
          cursor: pointer;
          border: none;
          font-family: 'Noto Sans TC', sans-serif;
          font-size: 0.85rem;
          font-weight: 500;
          letter-spacing: 0.02em;
        }
        .nav-btn:hover { transform: translateX(4px); }

        .exp-card {
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .exp-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 16px 40px rgba(59,130,246,0.18), 0 1px 0 rgba(255,255,255,0.8) inset !important;
        }

        .skill-tag {
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          cursor: default;
        }
        .skill-tag:hover {
          transform: translateY(-2px) scale(1.04);
          box-shadow: 0 6px 18px rgba(59,130,246,0.25);
        }

        .social-btn {
          transition: all 0.2s ease;
          cursor: pointer;
        }
        .social-btn:hover {
          transform: translateY(-2px);
          background: rgba(59,130,246,0.15) !important;
        }

        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(59,130,246,0.3); border-radius: 3px; }
      `}</style>

      {/* ── Background blobs ── */}
      <div style={{ position: "fixed", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0 }}>
        {[
          { w: 500, h: 500, top: "-10%", left: "-8%", color: "rgba(147,210,255,0.35)", delay: "0s" },
          { w: 400, h: 400, top: "50%", left: "70%", color: "rgba(186,230,255,0.3)", delay: "2s" },
          { w: 350, h: 350, top: "75%", left: "10%", color: "rgba(167,220,255,0.28)", delay: "4s" },
          { w: 300, h: 300, top: "20%", left: "55%", color: "rgba(219,243,255,0.3)", delay: "1.5s" },
        ].map((b, i) => (
          <div key={i} style={{
            position: "absolute", borderRadius: "50%",
            width: b.w, height: b.h, top: b.top, left: b.left,
            background: b.color, filter: "blur(60px)",
            animation: `floatBlob ${10 + i * 2}s ease-in-out infinite`,
            animationDelay: b.delay,
          }} />
        ))}
      </div>

      {/* ── Layout ── */}
      <div style={{ position: "relative", zIndex: 1, maxWidth: 1140, margin: "0 auto", padding: "2rem 1.5rem", display: "flex", gap: "1.5rem", minHeight: "100vh", alignItems: "flex-start" }}>

        {/* ══ SIDEBAR ══════════════════════════════════════════════════════════ */}
        <aside
          className="animate-fade-up"
          style={{
            background: "rgba(255, 255, 255, 0.25)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            border: "1px solid rgba(255, 255, 255, 0.55)",
            boxShadow: "0 8px 32px rgba(59,130,246,0.15), inset 0 1px 0 rgba(255,255,255,0.8)",
            borderRadius: 28,
            padding: "2rem 1.5rem",
            width: 300,
            flexShrink: 0,
            display: "flex",
            flexDirection: "column" as const,
            gap: "1.5rem",
            animationDelay: "0.1s",
            position: "sticky" as const,
            top: "2rem",
          }}
        >
          {/* Avatar + name */}
          <div style={{ textAlign: "center" }}>
            <div style={{ position: "relative", display: "inline-block", marginBottom: "1rem" }}>
              <div style={{ width: 110, height: 110, borderRadius: "50%", overflow: "hidden", margin: "0 auto", border: "3px solid rgba(255,255,255,0.9)", boxShadow: "0 8px 24px rgba(59,130,246,0.22)" }}>
                <Image src="/IMG_4342.jpg" alt="吳雨珊" width={110} height={110} style={{ objectFit: "cover", width: "100%", height: "100%" }} />
              </div>
              <div style={{ position: "absolute", bottom: 4, right: 4, width: 20, height: 20, borderRadius: "50%", background: "#34d399", border: "2px solid white" }} />
            </div>
            <h1 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.9rem", color: "#1e3a5f", letterSpacing: "-0.01em", lineHeight: 1.1 }}>吳雨珊</h1>
            <p style={{ marginTop: 6, fontSize: "0.78rem", color: "#5a8abf", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase" }}>NCCU MIS · 大二</p>
          </div>

          {/* Divider */}
          <div style={{ height: 1, background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.25), transparent)" }} />

          {/* About me */}
          <div>
            <p style={{ fontSize: "0.8rem", color: "#3a6a9a", lineHeight: 1.8, letterSpacing: "0.01em" }}>
              資管系二年級。雙主修數位內容科技學士學位學程，並修讀金融科技專長學程。
            </p>
          </div>

          {/* Skills */}
          <div>
            <p style={{ fontSize: "0.7rem", fontWeight: 700, color: "#93c5e8", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 10 }}>SKILLS</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
              {skills.map((s) => (
                <span key={s.label} className="skill-tag" style={{
                  fontSize: "0.72rem", fontWeight: 500, padding: "4px 11px", borderRadius: 20,
                  background: `${s.color}18`, color: s.color,
                  border: `1px solid ${s.color}40`,
                }}>{s.label}</span>
              ))}
            </div>
          </div>

          {/* Courses */}
          <div>
            <p style={{ fontSize: "0.7rem", fontWeight: 700, color: "#93c5e8", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 10 }}>相關修課</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {courses.map((c) => (
                <span key={c} style={{ fontSize: "0.72rem", padding: "3px 10px", borderRadius: 20, background: "rgba(59,130,246,0.08)", color: "#4a7fbf", border: "1px solid rgba(59,130,246,0.18)" }}>{c}</span>
              ))}
            </div>
          </div>

          {/* Social links */}
          <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
            {[
              { icon: <MailIcon />, href: "mailto:sammi0911717@gmail.com", label: "Mail" },
              { icon: <GithubIcon />, href: "https://github.com/113306056", label: "GitHub" },
              { icon: <LinkedinIcon />, href: "https://www.linkedin.com/in/yushan-wu-173a66346?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app", label: "LinkedIn" },
            ].map(({ icon, href, label }) => (
              <Link key={label} href={href} title={label} className="social-btn" style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 38, height: 38, borderRadius: 12, background: "rgba(255,255,255,0.5)", color: "#4a7fbf", border: "1px solid rgba(255,255,255,0.7)", textDecoration: "none" }}>
                {icon}
              </Link>
            ))}
          </div>

          {/* Divider */}
          <div style={{ height: 1, background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.25), transparent)" }} />

          {/* Nav */}
          <nav style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {(["education", "experience", "achievements", "projects"] as const).map((sec) => {
              const labels: Record<string, string> = { education: "課業學習", experience: "社團經歷", achievements: "獎項競賽", projects: "專案經驗" };
              const active = activeSection === sec;
              return (
                <button key={sec} className="nav-btn" onClick={() => setActiveSection(sec)} style={{
                  padding: "10px 14px", borderRadius: 14, textAlign: "left",
                  background: active ? "rgba(59,130,246,0.15)" : "rgba(255,255,255,0.35)",
                  color: active ? "#2563eb" : "#5a8abf",
                  border: active ? "1px solid rgba(59,130,246,0.35)" : "1px solid rgba(255,255,255,0.6)",
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                }}>
                  <span>{labels[sec]}</span>
                  <span style={{ opacity: active ? 1 : 0.4 }}><ChevronRight /></span>
                </button>
              );
            })}
          </nav>
        </aside>

        {/* ══ MAIN ═════════════════════════════════════════════════════════════ */}
        <main style={{ flex: 1, display: "flex", flexDirection: "column", gap: "1.25rem" }}>

          {/* ── Header card ── */}
          <div className="animate-fade-up" style={{ ...glass, borderRadius: 24, padding: "1.5rem 2rem", animationDelay: "0.2s" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
              <div>
                <p style={{ fontSize: "0.7rem", fontWeight: 700, color: "#93c5e8", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 4 }}>DIGITAL RESUME</p>
                <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "2rem", color: "#1e3a5f", letterSpacing: "-0.02em" }}>Know about me ✦</h2>
              </div>
              <div style={{ display: "flex", gap: 10 }}>
                {["🎓 學業", "💼 實習", "🤝 合作"].map((t) => (
                  <span key={t} style={{ fontSize: "0.75rem", padding: "6px 14px", borderRadius: 20, background: "rgba(59,130,246,0.1)", color: "#3b82f6", border: "1px solid rgba(59,130,246,0.2)", fontWeight: 500 }}>{t}</span>
                ))}
              </div>
            </div>
          </div>

          {/* ── EDUCATION ── */}
          {activeSection === "education" && (
            <div className="animate-scale-in" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <SectionLabel>EDUCATION　學歷</SectionLabel>
              {education.map((e, i) => (
                <div key={i} className="exp-card animate-fade-up" style={{ ...glass, borderRadius: 20, padding: "1.25rem 1.5rem", display: "flex", alignItems: "center", gap: 16, animationDelay: `${i * 0.1}s` }}>
                  <div style={{ fontSize: "1.8rem", width: 50, height: 50, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(59,130,246,0.1)", borderRadius: 14, flexShrink: 0 }}>{e.icon}</div>
                  <div>
                    <p style={{ fontWeight: 600, color: "#1e3a5f", fontSize: "0.95rem" }}>{e.degree}</p>
                    <p style={{ fontSize: "0.78rem", color: "#6ba3cc", marginTop: 3 }}>{e.detail}</p>
                  </div>
                </div>
              ))}

              {/* About me extended */}
              <div className="exp-card animate-fade-up" style={{ ...glass, borderRadius: 20, padding: "1.5rem", animationDelay: "0.35s" }}>
                <p style={{ fontSize: "0.7rem", fontWeight: 700, color: "#93c5e8", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}>ABOUT ME</p>
                <p style={{ fontSize: "0.86rem", color: "#2d5a8a", lineHeight: 2, letterSpacing: "0.02em" }}>
                  修課及參與商業競賽的過程中，培養從資料分析到簡報提案的完整專案能力。進而啟發對數據分析的興趣，希望有機會能進入數據分析社與夥伴們一起學習，建立具組織力與影響力的社團。
                </p>
              </div>
            </div>
          )}

          {/* ── EXPERIENCE ── */}
          {activeSection === "experience" && (
            <div className="animate-scale-in" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <SectionLabel>EXPERIENCE　社團經歷</SectionLabel>
              {experiences.map((exp, i) => (
                <div key={i} className="exp-card animate-fade-up" onMouseEnter={() => setHoveredExp(i)} onMouseLeave={() => setHoveredExp(null)} style={{ ...glass, borderRadius: 20, padding: "1.5rem", borderLeft: `4px solid ${exp.color}`, animationDelay: `${i * 0.1}s`, cursor: "default" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10, flexWrap: "wrap", gap: 8 }}>
                    <h3 style={{ fontWeight: 700, color: "#1e3a5f", fontSize: "1rem" }}>{exp.title}</h3>
                    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                      <span style={{ fontSize: "0.72rem", padding: "3px 10px", borderRadius: 20, background: `${exp.color}18`, color: exp.color, border: `1px solid ${exp.color}30` }}>{exp.tag}</span>
                      <span style={{ fontSize: "0.78rem", color: "#93c5e8", fontWeight: 500 }}>{exp.period}</span>
                    </div>
                  </div>
                  <p style={{ fontSize: "0.84rem", color: hoveredExp === i ? "#2d5a8a" : "#4a7abf", lineHeight: 1.85, transition: "color 0.2s ease" }}>{exp.desc}</p>
                </div>
              ))}
            </div>
          )}

          {/* ── ACHIEVEMENTS ── */}
          {activeSection === "achievements" && (
            <div className="animate-scale-in" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <SectionLabel>ACHIEVEMENTS　獎項與競賽</SectionLabel>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "1rem" }}>
                {achievements.map((a, i) => (
                  <div key={i} className="exp-card animate-fade-up" style={{ ...glass, borderRadius: 20, padding: "1.5rem", textAlign: "center", animationDelay: `${i * 0.1}s` }}>
                    <div style={{ fontSize: "2.4rem", marginBottom: 12 }}>{a.icon}</div>
                    <p style={{ fontWeight: 700, color: "#1e3a5f", fontSize: "0.92rem", marginBottom: 6 }}>{a.title}</p>
                    <p style={{ fontSize: "0.78rem", color: "#6ba3cc", marginBottom: 8 }}>{a.detail}</p>
                    <span style={{ fontSize: "0.7rem", padding: "3px 10px", borderRadius: 20, background: "rgba(59,130,246,0.1)", color: "#3b82f6", border: "1px solid rgba(59,130,246,0.2)" }}>{a.year}</span>
                  </div>
                ))}
              </div>

              {/* Competition insight */}
              <div className="exp-card animate-fade-up" style={{ ...glass, borderRadius: 20, padding: "1.5rem", animationDelay: "0.45s" }}>
                <p style={{ fontSize: "0.7rem", fontWeight: 700, color: "#93c5e8", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}>競賽收穫</p>
                <p style={{ fontSize: "0.86rem", color: "#2d5a8a", lineHeight: 2 }}>
                  透過競賽參與，增進市場分析、策略提案、消費者洞察與產品概念發想能力。培養如何強化市場定位與目標族群之分析能力，以及在限時條件下進行資料蒐集、競品分析與簡報呈現的實戰經驗。
                </p>
              </div>
            </div>
          )}

          {/* ── PROJECTS ── */}
          {activeSection === "projects" && (
            <div className="animate-scale-in" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <SectionLabel>PROJECTS　專案經驗</SectionLabel>

              {[
                {
                  title: "區塊鏈應用",
                  period: "114-1",
                  tag: "課程專案",
                  color: "#3b82f6",
                  desc: "進行生成式藝術設計，於 Threads 撰寫區塊鏈見習週記，成功將作品上鏈至 akaSwap。",
                  tools: ["生成式藝術", "區塊鏈", "NFT 上鏈"],
                  link: "https://akaswap.com/akaobj/27119",
                  preview: "/summerDaydream_GIF.gif",
                },
        
                {
                  title: "2025 政大創客松 NCCU Maker 活動籌辦",
                  period: "2025",
                  tag: "活動企劃",
                  color: "#8b5cf6",
                  desc: "於政大創業聯會籌辦創客松，負責活動流程規劃、聯繫講師與評審資源，與團隊、主辦方溝通。",
                  tools: ["活動策劃", "資源協調", "團隊溝通"],
                },
                {
                  title: "系學會社群經營",
                  period: "2025–",
                  tag: "品牌行銷",
                  color: "#10b981",
                  desc: "統籌系學會對外公關事務，負責社群媒體內容規劃、對外形象定位及跨系學會合作洽談，維繫師長與夥伴的長期關係。",
                  tools: ["社群內容", "品牌定位", "跨部門協作"],
                },
              ].map((proj: {
                title: string; period: string; tag: string; color: string;
                desc: string; tools: string[]; link?: string; preview?: string;
              }, i) => (
                <div key={i} className="exp-card animate-fade-up" style={{
                  background: "rgba(255,255,255,0.45)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: "1px solid rgba(255,255,255,0.7)",
                  boxShadow: "0 8px 32px rgba(59,130,246,0.10), 0 1px 0 rgba(255,255,255,0.8) inset",
                  borderRadius: 20,
                  overflow: "hidden",
                  borderLeft: `4px solid ${proj.color}`,
                  animationDelay: `${i * 0.1}s`,
                }}>
                  {proj.preview && (
                    <div style={{ position: "relative", width: "100%", height: 200, background: "rgba(59,130,246,0.06)", overflow: "hidden" }}>
                      <img src={proj.preview} alt={proj.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 50%, rgba(220,240,255,0.6) 100%)" }} />
                      {proj.link && (
                        <a href={proj.link} target="_blank" rel="noopener noreferrer" style={{
                          position: "absolute", top: 12, right: 12,
                          background: "rgba(255,255,255,0.88)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)",
                          border: "1px solid rgba(59,130,246,0.3)", borderRadius: 10, padding: "5px 13px",
                          fontSize: "0.72rem", color: "#2563eb", fontWeight: 600, textDecoration: "none",
                          display: "flex", alignItems: "center", gap: 5,
                        }}>
                          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                            <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
                          </svg>
                          akaSwap 查看
                        </a>
                      )}
                    </div>
                  )}
                  <div style={{ padding: "1.25rem 1.5rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10, flexWrap: "wrap", gap: 8 }}>
                      <h3 style={{ fontWeight: 700, color: "#1e3a5f", fontSize: "1rem" }}>{proj.title}</h3>
                      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                        <span style={{ fontSize: "0.72rem", padding: "3px 10px", borderRadius: 20, background: `${proj.color}18`, color: proj.color, border: `1px solid ${proj.color}30` }}>{proj.tag}</span>
                        <span style={{ fontSize: "0.78rem", color: "#93c5e8", fontWeight: 500 }}>{proj.period}</span>
                      </div>
                    </div>
                    <p style={{ fontSize: "0.84rem", color: "#4a7abf", lineHeight: 1.85, marginBottom: 14 }}>{proj.desc}</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6, alignItems: "center" }}>
                      {proj.tools.map((t) => (
                        <span key={t} style={{ fontSize: "0.7rem", padding: "3px 10px", borderRadius: 20, background: "rgba(59,130,246,0.08)", color: "#3b82f6", border: "1px solid rgba(59,130,246,0.2)" }}>{t}</span>
                      ))}
                      {proj.link && !proj.preview && (
                        <a href={proj.link} target="_blank" rel="noopener noreferrer" style={{
                          marginLeft: "auto", fontSize: "0.72rem", color: "#2563eb", fontWeight: 600, textDecoration: "none",
                          display: "flex", alignItems: "center", gap: 4,
                          background: "rgba(37,99,235,0.08)", padding: "3px 12px",
                          borderRadius: 20, border: "1px solid rgba(37,99,235,0.2)",
                        }}>
                          akaswap 連結
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ── Footer ── */}
          <div className="animate-fade-up" style={{ ...glass, borderRadius: 20, padding: "1rem 1.5rem", display: "flex", alignItems: "center", justifyContent: "center", animationDelay: "0.5s" }}>
            <p style={{ fontSize: "0.75rem", color: "#93c5e8", letterSpacing: "0.05em" }}>
              © 2025 &nbsp;·&nbsp; Built with Next.js &nbsp;·&nbsp; 持續更新中 ✦
            </p>
          </div>
        </main>
      </div>
    </>
  );
}

// ── Section label helper ──────────────────────────────────────────────────────
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 4 }}>
      <div style={{ height: 2, width: 28, background: "linear-gradient(90deg, #3b82f6, #06b6d4)", borderRadius: 2 }} />
      <p style={{ fontSize: "0.72rem", fontWeight: 700, color: "#7ab8de", letterSpacing: "0.15em", textTransform: "uppercase" }}>{children}</p>
      <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, rgba(59,130,246,0.2), transparent)" }} />
    </div>
  );
}