"use client";

import { useState } from "react";
import Link from "next/link";
import NavBar from "../components/NavBar";
import FadeInSection from "../components/FadeInSection";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

export default function LifelongSkillsPortfolioPage() {
  const [selectedTemplate, setSelectedTemplate] = useState("classic");
  const [isGenerating, setIsGenerating] = useState(false);
  const [resumeGenerated, setResumeGenerated] = useState(false);
  const [showImportModal, setShowImportModal] = useState(false);
  const [showTemplateModal, setShowTemplateModal] = useState(false);

  const handleGenerateResume = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setResumeGenerated(true);
    }, 1100);
  };

  return (
    <main className="portfolio-page" style={{ background: "#ffffff", minHeight: "100vh" }}>
      <NavBar />

      {/* HERO SECTION */}
      <FadeInSection>
        <section className="explore-hero" style={{
          minHeight: "calc(100vh - 65px)",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
          background: "radial-gradient(circle at 75% 25%, rgba(245, 158, 11, 0.22), transparent 30%), radial-gradient(circle at 15% 75%, rgba(239, 68, 68, 0.12), transparent 28%), radial-gradient(circle at 50% 5%, rgba(37, 99, 235, 0.10), transparent 22%), linear-gradient(120deg, #fff7ed 0%, #fffaf5 40%, #eff6ff 65%, #fff7ed 100%)"
        }}>
          <div className="explore-hero-content" style={{
            width: "100%",
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "80px 58px",
            position: "relative",
            zIndex: 2,
            boxSizing: "border-box"
          }}>
            <p className="explore-label" style={{
              fontFamily: "var(--font-montserrat), sans-serif",
              fontSize: "12px",
              fontWeight: "800",
              letterSpacing: "2px",
              color: "var(--coral)",
              margin: "0 0 20px"
            }}>
              LIFELONG SKILLS PORTFOLIO
            </p>

            <h1 style={{
              margin: "0",
              fontFamily: "var(--font-montserrat), sans-serif",
              fontSize: "clamp(44px, 3.8vw, 75px)",
              lineHeight: "1.04",
              letterSpacing: "-3px",
              fontWeight: "800",
              color: "#171717",
              maxWidth: "920px"
            }}>
              Showcase, validate, and reuse your skills
              <span style={{ display: "block", color: "var(--orange)" }}>
                across education, career, and life.
              </span>
            </h1>

            <p className="explore-hero-description" style={{
              maxWidth: "680px",
              margin: "28px 0 35px",
              color: "#5d6470",
              fontSize: "16px",
              lineHeight: "1.7"
            }}>
              Build a dynamic, verified professional identity. Unlike traditional resumes with self-reported claims, SOLO binds every skill to cryptographic credentials, coursework artifacts, and real-world project deliverables.
            </p>

            <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap", marginBottom: "40px" }}>
              <a href="#how-it-works" className="hero-primary" style={{
                display: "inline-block",
                background: "var(--orange)",
                color: "#ffffff",
                border: "2px solid var(--orange)",
                padding: "14px 28px",
                borderRadius: "9px",
                fontFamily: "var(--font-montserrat), sans-serif",
                fontSize: "14px",
                fontWeight: "700",
                textDecoration: "none",
                boxShadow: "0 10px 25px rgba(249, 115, 22, 0.25)"
              }}>
                Start Your Journey Now
              </a>
            </div>

            <div style={{ display: "flex", gap: "24px", flexWrap: "wrap", borderTop: "1px solid rgba(226, 232, 240, 0.8)", paddingTop: "24px" }}>
              {[
                { title: "Manage Achievements", sub: "Centralized credential records" },
                { title: "Verifiable & Portable", sub: "W3C & Open Badges compliant" },
                { title: "AI Recommendations", sub: "Role and pathway matching" },
                { title: "Showcase & Share", sub: "ATS resumes & portfolio links" }
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                  <span style={{ fontSize: "13.5px", fontWeight: "700", color: "#1e293b", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#10b981" viewBox="0 0 24 24">
                      <path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"/>
                    </svg>
                    {item.title}
                  </span>
                  <small style={{ fontSize: "11px", color: "#64748b", paddingLeft: "22px" }}>{item.sub}</small>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-glow hero-glow-one" style={{
            position: "absolute",
            borderRadius: "50%",
            filter: "blur(80px)",
            pointerEvents: "none",
            width: "450px",
            height: "450px",
            right: "5%",
            top: "10%",
            background: "rgba(18, 85, 255, 0.12)"
          }}></div>
          <div className="hero-glow hero-glow-two" style={{
            position: "absolute",
            borderRadius: "50%",
            filter: "blur(80px)",
            pointerEvents: "none",
            width: "350px",
            height: "350px",
            left: "30%",
            bottom: "-150px",
            background: "rgba(253, 67, 34, 0.10)"
          }}></div>
        </section>
      </FadeInSection>

      {/* HOW IT WORKS */}
      <FadeInSection>
        <section id="how-it-works" style={{ padding: "90px 20px", background: "#ffffff" }}>
          <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "50px" }}>
              <span style={{ fontSize: "12px", fontWeight: "800", color: "#ff5500", letterSpacing: "1.5px", textTransform: "uppercase" }}>
                STEP-BY-STEP WORKFLOW
              </span>
              <h2 style={{
                fontFamily: "var(--font-montserrat), sans-serif",
                fontSize: "clamp(26px, 3vw, 38px)",
                fontWeight: "800",
                color: "#0f172a",
                margin: "8px 0 12px",
                letterSpacing: "-1px"
              }}>
                How It Works: Your Career Powered by SOLO
              </h2>
              <p style={{ fontSize: "15px", color: "#64748b", margin: 0 }}>
                Connecting education, continuous skilling, and job placement into one seamless portfolio.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px" }}>
              {[
                {
                  step: "01",
                  title: "Create & Import",
                  desc: "Build your profile by importing credentials or adding achievements manually. AI-driven extraction maps everything to recognized skills."
                },
                {
                  step: "02",
                  title: "Showcase & Endorse",
                  desc: "Organize and display your verified credentials. Connect with peers & employers to receive endorsements and validate skills."
                },
                {
                  step: "03",
                  title: "Generate Resumes & Share",
                  desc: "Quickly generate ATS-friendly resumes. Share your profile and track engagement for personalized job matching."
                },
                {
                  step: "04",
                  title: "Connect & Advance",
                  desc: "Access SOLO's ecosystem seamlessly. Use your portfolio data for learning, job placement, and credential management."
                }
              ].map((col, idx) => (
                <div key={idx} className="interactive-feature-card">
                  <span style={{
                    fontSize: "14px",
                    fontWeight: "800",
                    color: "var(--orange)",
                    fontFamily: "var(--font-montserrat), sans-serif",
                    marginBottom: "14px",
                    display: "block"
                  }}>
                    {col.step}
                  </span>
                  <h3 style={{
                    fontFamily: "var(--font-montserrat), sans-serif",
                    fontSize: "18px",
                    fontWeight: "750",
                    color: "#1e293b",
                    margin: "0 0 10px"
                  }}>
                    {col.title}
                  </h3>
                  <p style={{ fontSize: "13.5px", color: "#64748b", lineHeight: "1.6", margin: 0 }}>
                    {col.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* BUILD YOUR PORTFOLIO */}
      <FadeInSection>
        <section style={{ padding: "90px 20px", background: "#fffaf5", borderTop: "1px solid #f1f5f9", borderBottom: "1px solid #f1f5f9" }}>
          <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "50px" }}>
              <span style={{ fontSize: "12px", fontWeight: "800", color: "#ff5500", letterSpacing: "1.5px", textTransform: "uppercase" }}>
                BUILD YOUR PORTFOLIO
              </span>
              <h2 style={{
                fontFamily: "var(--font-montserrat), sans-serif",
                fontSize: "clamp(26px, 3vw, 38px)",
                fontWeight: "800",
                color: "#0f172a",
                margin: "8px 0 12px",
                letterSpacing: "-1px"
              }}>
                Import & AI Extract Your Achievements
              </h2>
              <p style={{ fontSize: "15px", color: "#64748b", maxWidth: "780px", margin: "0 auto" }}>
                Effortlessly import your professional data from LinkedIn, GitHub, or upload your resume to get instant parsing of your education, work experience, certifications, trainings, live projects, and badges.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px" }}>
              <div style={{ background: "#ffffff", borderRadius: "14px", border: "1px solid #e2e8f0", padding: "28px" }}>
                <div style={{ display: "flex", gap: "10px", marginBottom: "18px", flexWrap: "wrap" }}>
                  {["LinkedIn", "GitHub", "Resume Upload", "AI Extraction"].map((btn, i) => (
                    <span key={i} style={{ padding: "5px 12px", borderRadius: "6px", background: "#eff6ff", color: "#2563eb", fontSize: "12px", fontWeight: "700" }}>
                      {btn}
                    </span>
                  ))}
                </div>
                <h3 style={{ fontSize: "18px", fontWeight: "750", color: "#0f172a", margin: "0 0 10px" }}>
                  Instant Parsing & Verification
                </h3>
                <p style={{ fontSize: "13.5px", color: "#64748b", lineHeight: "1.6", margin: "0 0 20px" }}>
                  Upload an existing resume or connect external accounts. SOLO identifies and extracts competencies, auto-populating your profile and grouping them into recognized skill categories.
                </p>
                <div 
                  onClick={() => setShowImportModal(true)}
                  style={{ border: "2px dashed #cbd5e1", borderRadius: "8px", padding: "20px", textAlign: "center", background: "#f8fafc", cursor: "pointer" }}
                >
                  <strong style={{ fontSize: "13px", color: "#1e293b", display: "block" }}>Resume & Profile Data Extractor</strong>
                  <small style={{ color: "#94a3b8" }}>Supported formats: PDF, DOCX, LinkedIn Profile JSON</small>
                </div>
              </div>

              <div style={{ background: "#ffffff", borderRadius: "14px", border: "1px solid #e2e8f0", padding: "28px" }}>
                <div style={{ display: "flex", gap: "10px", marginBottom: "18px", flexWrap: "wrap" }}>
                  {["Manual Entry", "Personal Projects", "Interest Tags", "Skill Frameworks"].map((btn, i) => (
                    <span key={i} style={{ padding: "5px 12px", borderRadius: "6px", background: "#ecfdf5", color: "#059669", fontSize: "12px", fontWeight: "700" }}>
                      {btn}
                    </span>
                  ))}
                </div>
                <h3 style={{ fontSize: "18px", fontWeight: "750", color: "#0f172a", margin: "0 0 10px" }}>
                  Manual Addition & Skill Mapping
                </h3>
                <p style={{ fontSize: "13.5px", color: "#64748b", lineHeight: "1.6", margin: "0 0 20px" }}>
                  Add achievements, career interests, or practical coursework manually. Our intelligent platform maps entries against recognized skill frameworks, giving you validated, searchable capabilities.
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {["React.js", "Python", "Docker", "Node.js", "SQL", "Cloud Architecture"].map((sk, i) => (
                    <span key={i} style={{
                      padding: "6px 12px",
                      borderRadius: "20px",
                      background: "#fff7ed",
                      border: "1px solid #fed7aa",
                      color: "var(--orange)",
                      fontSize: "12px",
                      fontWeight: "600"
                    }}>
                      + {sk}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* SHOWCASE & MANAGE SKILLS */}
      <FadeInSection>
        <section style={{ padding: "90px 20px", background: "#ffffff" }}>
          <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "50px" }}>
              <span style={{ fontSize: "12px", fontWeight: "800", color: "#ff5500", letterSpacing: "1.5px", textTransform: "uppercase" }}>
                CENTRALIZED HUB
              </span>
              <h2 style={{
                fontFamily: "var(--font-montserrat), sans-serif",
                fontSize: "clamp(26px, 3vw, 38px)",
                fontWeight: "800",
                color: "#0f172a",
                margin: "8px 0 12px",
                letterSpacing: "-1px"
              }}>
                Showcase & Manage Skills
              </h2>
              <p style={{ fontSize: "15px", color: "#64748b", maxWidth: "780px", margin: "0 auto" }}>
                Your portfolio houses a comprehensive and organized hub for credentials, badges, projects, and recognitions. Attach verifiable documents with granular privacy controls.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px" }}>
              <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "14px", padding: "24px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
                  <strong style={{ fontSize: "15px", color: "#0f172a" }}>Software Development</strong>
                  <span style={{ background: "#e2e8f0", color: "#334155", padding: "2px 8px", borderRadius: "10px", fontSize: "11px", fontWeight: "700" }}>
                    24 Verified
                  </span>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "7px" }}>
                  {["React.js", "Python", "Node.js", "JavaScript", "TypeScript", "Docker", "AWS", "MongoDB"].map((item, idx) => (
                    <span key={idx} style={{ padding: "5px 10px", background: "#ffffff", border: "1px solid #cbd5e1", borderRadius: "6px", fontSize: "12px", color: "#334155" }}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "14px", padding: "24px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
                  <strong style={{ fontSize: "15px", color: "#0f172a" }}>Data Science & Analytics</strong>
                  <span style={{ background: "#e2e8f0", color: "#334155", padding: "2px 8px", borderRadius: "10px", fontSize: "11px", fontWeight: "700" }}>
                    18 Verified
                  </span>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "7px" }}>
                  {["Machine Learning", "TensorFlow", "PyTorch", "Pandas", "Scikit-learn", "Data Analysis", "SQL"].map((item, idx) => (
                    <span key={idx} style={{ padding: "5px 10px", background: "#ffffff", border: "1px solid #cbd5e1", borderRadius: "6px", fontSize: "12px", color: "#334155" }}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "14px", padding: "24px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
                  <strong style={{ fontSize: "15px", color: "#0f172a" }}>Peer Endorsements</strong>
                  <span style={{ background: "#ecfdf5", color: "#059669", padding: "2px 8px", borderRadius: "10px", fontSize: "11px", fontWeight: "700" }}>
                    Active
                  </span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", background: "#ffffff", padding: "10px 12px", borderRadius: "8px", border: "1px solid #e2e8f0" }}>
                    <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "#2563eb", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "700" }}>JD</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: "12px", fontWeight: "700", color: "#0f172a" }}>John Doe</div>
                      <div style={{ fontSize: "11px", color: "#64748b" }}>endorsed React.js</div>
                    </div>
                    <span style={{ fontSize: "11px", fontWeight: "700", color: "#059669" }}>+5</span>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: "10px", background: "#ffffff", padding: "10px 12px", borderRadius: "8px", border: "1px solid #e2e8f0" }}>
                    <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "var(--orange)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "700" }}>AS</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: "12px", fontWeight: "700", color: "#0f172a" }}>Alice Smith</div>
                      <div style={{ fontSize: "11px", color: "#64748b" }}>endorsed Machine Learning</div>
                    </div>
                    <span style={{ fontSize: "11px", fontWeight: "700", color: "#059669" }}>+3</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* RESUME BUILDER SECTION */}
      <FadeInSection>
        <section id="resume-builder" style={{ padding: "90px 20px", background: "#f8fafc", borderTop: "1px solid #e2e8f0", borderBottom: "1px solid #e2e8f0" }}>
          <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "50px" }}>
              <span style={{ fontSize: "12px", fontWeight: "800", color: "#ff5500", letterSpacing: "1.5px", textTransform: "uppercase" }}>
                ATS-READY RESUME GENERATION
              </span>
              <h2 style={{
                fontFamily: "var(--font-montserrat), sans-serif",
                fontSize: "clamp(26px, 3vw, 38px)",
                fontWeight: "800",
                color: "#0f172a",
                margin: "8px 0 12px",
                letterSpacing: "-1px"
              }}>
                Role-Specific, Optimized Templates
              </h2>
              <p style={{ fontSize: "15px", color: "#64748b", maxWidth: "780px", margin: "0 auto" }}>
                Transform your portfolio into polished resumes optimized to navigate applicant tracking systems. Every credential includes clickable verification links for hiring teams.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px", marginBottom: "36px" }}>
              {[
                { id: "classic", name: "Modern", desc: "Clean and professional layout" },
                { id: "split", name: "Creative", desc: "Two-tone profile sidebar design" },
                { id: "technical", name: "Technical", desc: "Developer and skill matrix focused" },
                { id: "executive", name: "Executive", desc: "Dense layout for senior positions" }
              ].map((tpl) => (
                <div
                  key={tpl.id}
                  onClick={() => setSelectedTemplate(tpl.id)}
                  className={`template-selector-card ${selectedTemplate === tpl.id ? "active" : ""}`}
                >
                  <strong style={{ display: "block", fontSize: "15px", color: "#0f172a", marginBottom: "4px" }}>{tpl.name}</strong>
                  <p style={{ margin: 0, fontSize: "12.5px", color: "#64748b" }}>{tpl.desc}</p>
                </div>
              ))}
            </div>

            <div style={{ background: "#ffffff", borderRadius: "14px", border: "1px solid #e2e8f0", padding: "30px", maxWidth: "800px", margin: "0 auto", boxShadow: "0 6px 24px rgba(0,0,0,0.03)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #f1f5f9", paddingBottom: "16px", marginBottom: "20px", flexWrap: "wrap", gap: "10px" }}>
                <div>
                  <h4 style={{ margin: "0 0 4px", fontSize: "16px", fontWeight: "750", color: "#0f172a" }}>Generation Process</h4>
                  <p style={{ margin: 0, fontSize: "12.5px", color: "#64748b" }}>1. Analyze Data to 2. Format Content to 3. Generate PDF</p>
                </div>
                <button
                  onClick={handleGenerateResume}
                  style={{
                    background: "var(--orange)",
                    color: "#ffffff",
                    border: "none",
                    padding: "10px 22px",
                    borderRadius: "8px",
                    fontSize: "13.5px",
                    fontWeight: "700",
                    cursor: "pointer"
                  }}
                >
                  {isGenerating ? "Processing..." : "Generate Resume"}
                </button>
              </div>

              {resumeGenerated && (
                <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "8px", padding: "20px", marginBottom: "20px", animation: "slideUp 0.3s ease" }}>
                  <span style={{ display: "inline-block", background: "#ecfdf5", color: "#059669", padding: "3px 8px", borderRadius: "4px", fontSize: "11px", fontWeight: "700", marginBottom: "10px" }}>
                    RESUME PREVIEW READY
                  </span>
                  <h3 style={{ margin: "0 0 2px", fontSize: "18px", color: "#0f172a" }}>Anushka Abhilash B</h3>
                  <p style={{ margin: "0 0 10px", fontSize: "13px", color: "#64748b" }}>Information Technology • Goa College of Engineering</p>
                  <ul style={{ margin: 0, paddingLeft: "18px", fontSize: "13px", color: "#334155", lineHeight: "1.6" }}>
                    <li>BE In Information Technology: 14 verified skills mapped to coursework</li>
                    <li>Verified Badges: React Navigation, Virtual Lab Automation, Online Engineering</li>
                  </ul>
                </div>
              )}

              <div>
                <span style={{ fontSize: "12px", fontWeight: "700", color: "#475569", display: "block", marginBottom: "10px" }}>SHARE & EXPORT</span>
                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                  {["Email", "LinkedIn", "Share Link", "Download", "Cloud Save", "Print"].map((action, i) => (
                    <button key={i} style={{
                      background: "#f1f5f9",
                      border: "none",
                      borderRadius: "6px",
                      padding: "7px 14px",
                      fontSize: "12px",
                      fontWeight: "600",
                      color: "#334155",
                      cursor: "pointer"
                    }}>
                      {action}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* STANDARDS & INTEROPERABILITY */}
      <FadeInSection>
        <section style={{ padding: "90px 20px", background: "#ffffff" }}>
          <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "50px" }}>
              <span style={{ fontSize: "12px", fontWeight: "800", color: "#ff5500", letterSpacing: "1.5px", textTransform: "uppercase" }}>
                GLOBAL STANDARDS & INTEROPERABILITY
              </span>
              <h2 style={{
                fontFamily: "var(--font-montserrat), sans-serif",
                fontSize: "clamp(26px, 3vw, 38px)",
                fontWeight: "800",
                color: "#0f172a",
                margin: "8px 0 12px",
                letterSpacing: "-1px"
              }}>
                Recognized Global Frameworks
              </h2>
              <p style={{ fontSize: "15px", color: "#64748b", maxWidth: "780px", margin: "0 auto" }}>
                Each skill and certificate aligns with leading standards such as ESCO, O*NET, ISO, and W3C Verifiable Credentials, ensuring international recognition.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px", marginBottom: "40px" }}>
              {[
                { label: "Global Standards", sub: "Industry compliance" },
                { label: "OpenBadges", sub: "100% Cryptographic verification" },
                { label: "CLR v2.0", sub: "Comprehensive Learner Record" },
                { label: "W3C VC", sub: "Verifiable Credential Standard" }
              ].map((item, idx) => (
                <div key={idx} style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "10px", padding: "18px", textAlign: "center" }}>
                  <div style={{ fontSize: "15px", fontWeight: "750", color: "#0f172a", marginBottom: "4px" }}>{item.label}</div>
                  <div style={{ fontSize: "12px", color: "#64748b" }}>{item.sub}</div>
                </div>
              ))}
            </div>

            <div style={{ background: "#fffaf5", border: "1px solid #fed7aa", borderRadius: "14px", padding: "28px" }}>
              <h4 style={{ margin: "0 0 14px", fontSize: "16px", fontWeight: "750", color: "#0f172a" }}>
                Data Synchronization Status
              </h4>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px" }}>
                <div>
                  <span style={{ fontSize: "13px", fontWeight: "700", color: "#1e293b", display: "block" }}>Education Records</span>
                  <small style={{ color: "#64748b" }}>Synchronized 2 min ago</small>
                </div>
                <div>
                  <span style={{ fontSize: "13px", fontWeight: "700", color: "#1e293b", display: "block" }}>Professional Credentials</span>
                  <small style={{ color: "#64748b" }}>Syncing in progress...</small>
                </div>
                <div>
                  <span style={{ fontSize: "13px", fontWeight: "700", color: "#1e293b", display: "block" }}>Achievements</span>
                  <small style={{ color: "#64748b" }}>Last sync: 5 min ago</small>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* ECOSYSTEM INTEGRATION */}
      <FadeInSection>
        <section style={{ padding: "90px 20px", background: "#f8fafc", borderTop: "1px solid #e2e8f0" }}>
          <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "50px" }}>
              <span style={{ fontSize: "12px", fontWeight: "800", color: "#ff5500", letterSpacing: "1.5px", textTransform: "uppercase" }}>
                SOLO ECOSYSTEM INTEGRATION
              </span>
              <h2 style={{
                fontFamily: "var(--font-montserrat), sans-serif",
                fontSize: "clamp(26px, 3vw, 38px)",
                fontWeight: "800",
                color: "#0f172a",
                margin: "8px 0 12px",
                letterSpacing: "-1px"
              }}>
                Connected Platform Modules
              </h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px" }}>
              <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "14px", padding: "26px" }}>
                <h3 style={{ fontSize: "18px", fontWeight: "750", color: "#0f172a", margin: "0 0 8px" }}>Single Sign-On (SSO)</h3>
                <p style={{ fontSize: "13.5px", color: "#64748b", lineHeight: "1.6", margin: 0 }}>
                  Seamlessly access Learning Hub, Employment Hub, Credential Wallet, and other SOLO modules with one secure login. Your portfolio auto-syncs across all platforms.
                </p>
              </div>

              <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "14px", padding: "26px" }}>
                <h3 style={{ fontSize: "18px", fontWeight: "750", color: "#0f172a", margin: "0 0 8px" }}>Credential Wallet</h3>
                <p style={{ fontSize: "13.5px", color: "#64748b", lineHeight: "1.6", margin: 0 }}>
                  Export verifiable achievements and badges to your personal wallet using Open Badges or CLR format. Control and share your credentials anytime, anywhere.
                </p>
              </div>

              <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "14px", padding: "26px" }}>
                <h3 style={{ fontSize: "18px", fontWeight: "750", color: "#0f172a", margin: "0 0 8px" }}>Learning & Employment Hub</h3>
                <p style={{ fontSize: "13.5px", color: "#64748b", lineHeight: "1.6", margin: 0 }}>
                  Your portfolio feeds into curated learning programs, internships, and job opportunities personalized based on your verified skills and interests.
                </p>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* FINAL CTA */}
      <FadeInSection>
        <section style={{ padding: "90px 20px", textAlign: "center", background: "#ffffff" }}>
          <div style={{ maxWidth: "750px", margin: "0 auto" }}>
            <h2 style={{
              fontFamily: "var(--font-montserrat), sans-serif",
              fontSize: "clamp(28px, 3.5vw, 42px)",
              fontWeight: "800",
              color: "#0f172a",
              margin: "0 0 14px",
              letterSpacing: "-1px"
            }}>
              Ready to Take Control of Your Career?
            </h2>
            <p style={{ fontSize: "15.5px", color: "#64748b", lineHeight: "1.6", margin: "0 0 30px" }}>
              Join thousands of learners and professionals worldwide using SOLO's Lifelong Skills Portfolio to showcase their real capabilities, unlock new opportunities, and build long-term success.
            </p>
            <Link href="/signup" style={{
              display: "inline-block",
              background: "var(--orange)",
              color: "#ffffff",
              padding: "14px 34px",
              borderRadius: "9px",
              fontFamily: "var(--font-montserrat), sans-serif",
              fontSize: "14.5px",
              fontWeight: "700",
              textDecoration: "none",
              boxShadow: "0 8px 24px rgba(249, 115, 22, 0.25)"
            }}>
              Start Your Journey Now
            </Link>
          </div>
        </section>
      </FadeInSection>

      {/* MODAL: SELECT RESUME TEMPLATE */}
      {showTemplateModal && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(15, 23, 42, 0.65)", backdropFilter: "blur(4px)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1100, padding: "20px" }}>
          <div style={{ background: "#ffffff", borderRadius: "14px", maxWidth: "880px", width: "100%", maxHeight: "92vh", overflowY: "auto", padding: "28px", boxShadow: "0 25px 60px rgba(0,0,0,0.2)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
              <h2 style={{ margin: 0, fontSize: "22px", fontWeight: "800", fontFamily: "var(--font-montserrat), sans-serif", color: "#1e293b" }}>
                Select Resume Template
              </h2>
              <button onClick={() => setShowTemplateModal(false)} style={{ background: "transparent", border: "none", fontSize: "20px", cursor: "pointer", color: "#64748b" }}>✕</button>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))", gap: "20px", marginBottom: "26px" }}>
              {[
                { id: "classic", name: "Modern Single-Column", sub: "Clean serif header with chronological experience and hyperlinked badges" },
                { id: "split", name: "Two-Tone Sidebar", sub: "Left identity panel with skill chips, right column for education and work" },
                { id: "technical", name: "Skills-First Technical", sub: "Prominent top skill matrix categorized by framework, followed by projects" },
                { id: "executive", name: "Compact Executive Format", sub: "Dense typography optimized for high-volume automated corporate ATS parsers" }
              ].map((tpl) => (
                <div
                  key={tpl.id}
                  className={`template-picker-card ${selectedTemplate === tpl.id ? "active" : ""}`}
                  onClick={() => setSelectedTemplate(tpl.id)}
                >
                  <div style={{ width: "100%", height: "180px", background: "#f1f5f9", borderRadius: "8px", marginBottom: "12px", border: "1px solid #e2e8f0", overflow: "hidden", display: "flex", flexDirection: "column", padding: "12px" }}>
                    <div style={{ height: "12px", width: "40%", background: "#cbd5e1", borderRadius: "3px", marginBottom: "8px" }}></div>
                    <div style={{ height: "6px", width: "80%", background: "#e2e8f0", borderRadius: "2px", marginBottom: "6px" }}></div>
                    <div style={{ height: "6px", width: "60%", background: "#e2e8f0", borderRadius: "2px", marginBottom: "12px" }}></div>
                    <div style={{ height: "8px", width: "30%", background: "#ff7a32", borderRadius: "2px", marginBottom: "6px" }}></div>
                    <div style={{ display: "flex", gap: "4px", flexWrap: "wrap" }}>
                      <span style={{ width: "30px", height: "12px", background: "#fed7aa", borderRadius: "3px" }}></span>
                      <span style={{ width: "45px", height: "12px", background: "#fed7aa", borderRadius: "3px" }}></span>
                      <span style={{ width: "35px", height: "12px", background: "#fed7aa", borderRadius: "3px" }}></span>
                    </div>
                  </div>
                  <strong style={{ fontSize: "14.5px", color: "#0f172a", display: "block", marginBottom: "4px" }}>{tpl.name}</strong>
                  <p style={{ margin: 0, fontSize: "12px", color: "#64748b", lineHeight: "1.5" }}>{tpl.sub}</p>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", justifyContent: "flex-end", gap: "12px" }}>
              <button onClick={() => setShowTemplateModal(false)} style={{ background: "#f1f5f9", border: "none", borderRadius: "8px", padding: "10px 20px", fontSize: "13px", fontWeight: "600", cursor: "pointer" }}>
                Cancel
              </button>
              <button
                onClick={() => {
                  alert(`Generating ${selectedTemplate} ATS resume with clickable credential verification links.`);
                  setShowTemplateModal(false);
                }}
                style={{ background: "#ff5500", color: "#ffffff", border: "none", borderRadius: "8px", padding: "10px 24px", fontSize: "13px", fontWeight: "750", cursor: "pointer", boxShadow: "0 6px 20px rgba(255, 85, 0, 0.28)" }}
              >
                Download ATS Resume
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL: IMPORT RESUME */}
      {showImportModal && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(15, 23, 42, 0.65)", backdropFilter: "blur(4px)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1100, padding: "20px" }}>
          <div style={{ background: "#ffffff", borderRadius: "14px", maxWidth: "500px", width: "100%", padding: "26px", boxShadow: "0 25px 60px rgba(0,0,0,0.2)" }}>
            <h3 style={{ margin: "0 0 6px", fontSize: "18px", fontWeight: "800", fontFamily: "var(--font-montserrat), sans-serif", color: "#1e293b" }}>
              Import from Resume
            </h3>
            <p style={{ margin: "0 0 20px", fontSize: "13px", color: "#64748b", lineHeight: "1.5" }}>
              Upload your resume in PDF or DOCX format. The parser extracts your coursework, skills, and projects automatically.
            </p>

            <div style={{ border: "2px dashed #cbd5e1", borderRadius: "10px", padding: "30px 20px", textAlign: "center", background: "#f8fafc", marginBottom: "20px" }}>
              <input type="file" accept=".pdf,.docx" id="resume-file" style={{ display: "none" }} onChange={() => alert("Resume parsed! Extracted education, coursework, and 14 verified skills.")} />
              <label htmlFor="resume-file" style={{ cursor: "pointer" }}>
                <strong style={{ fontSize: "14px", color: "#0f172a", display: "block" }}>Click to select your PDF/DOCX file</strong>
                <small style={{ color: "#94a3b8" }}>Max file size 10MB</small>
              </label>
            </div>

            <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
              <button onClick={() => setShowImportModal(false)} style={{ background: "#f1f5f9", border: "none", borderRadius: "7px", padding: "8px 18px", fontSize: "13px", fontWeight: "600", cursor: "pointer" }}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
      <BackToTop />

      <style jsx global>{`
        .svg-action-btn {
          background: transparent;
          border: none;
          padding: 0;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.2s ease;
        }
        .svg-action-btn:hover {
          transform: scale(1.15);
        }

        .platform-action-pill {
          background: #ffffff;
          border: 1.5px solid #ff7a32;
          color: #ff5500;
          border-radius: 999px;
          padding: 7px 18px;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .platform-action-pill:hover {
          background: #ff5500;
          color: #ffffff;
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(255, 85, 0, 0.22);
        }

        .interactive-skill-pill {
          display: inline-flex;
          align-items: center;
          padding: 6px 14px;
          border-radius: 8px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          font-size: 12.5px;
          color: #334155;
          font-weight: 500;
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: default;
        }
        .interactive-skill-pill:hover {
          border-color: #ff5500;
          color: #ff5500;
          background: #fff7ed;
          transform: translateY(-2px);
        }

        .platform-tab-button {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          padding: 10px 8px;
          font-size: 12.5px;
          font-weight: 600;
          color: #475569;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          transition: all 0.2s ease;
        }
        .platform-tab-button:hover {
          border-color: #cbd5e1;
          background: #f8fafc;
          transform: translateY(-2px);
        }
        .platform-tab-button.active {
          border-color: #ff5500;
          color: #ff5500;
          background: #ffffff;
          box-shadow: 0 4px 14px rgba(255, 85, 0, 0.12);
          border-bottom: 2.5px solid #ff5500;
        }

        .live-record-card {
          background: #ffffff;
          border: 1px solid #dfe3e8;
          border-radius: 14px;
          padding: 22px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
        }
        .live-record-card:hover {
          transform: translateY(-5px);
          border-color: rgba(255, 85, 0, 0.4);
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.08);
        }

        .credential-star-badge {
          width: 76px;
          height: 76px;
          border-radius: 50%;
          border: 3.5px solid #ff7a32;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #ffffff;
          flex-shrink: 0;
          transition: transform 0.35s ease;
        }
        .live-record-card:hover .credential-star-badge {
          transform: rotate(10deg) scale(1.05);
        }
        .credential-star-badge::before {
          content: "";
          position: absolute;
          inset: 4px;
          border-radius: 50%;
          border: 1.5px dashed #ff9e66;
        }

        .interactive-feature-card {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          padding: 26px 20px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          transition: all 0.25s ease;
        }
        .interactive-feature-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.05);
          border-color: rgba(249, 115, 22, 0.3);
        }

        .template-selector-card {
          background: #ffffff;
          border: 2px solid #e2e8f0;
          border-radius: 12px;
          padding: 20px;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .template-selector-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.06);
        }
        .template-selector-card.active {
          border-color: #ff5500;
          background: #fff7ed;
          box-shadow: 0 6px 20px rgba(255, 85, 0, 0.15);
        }

        .template-picker-card {
          border: 2px solid #e2e8f0;
          border-radius: 12px;
          padding: 16px;
          background: #ffffff;
          cursor: pointer;
          transition: all 0.25s ease;
        }
        .template-picker-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.08);
        }
        .template-picker-card.active {
          border-color: #ff5500;
          background: #fffaf5;
          box-shadow: 0 6px 20px rgba(255, 85, 0, 0.15);
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </main>
  );
}