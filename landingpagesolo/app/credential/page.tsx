"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import NavBar from "../components/NavBar";
import FadeInSection from "../components/FadeInSection";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

export default function CredentialsInformationPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeWorkflow, setActiveWorkflow] = useState("receive");

  const credentialDemos = [
    {
      title: "Professional Skill Credential",
      issuer: "Authorized Learning Partner",
      skills: "3 Skills",
      issuedOn: "Sept 20, 2026",
      expiresOn: "Sept 20, 2031",
      description: "Demonstrated competence in software architecture, state stores, and component lifecycles.",
      tagType: "Verified"
    },
    {
      title: "Course Completion Certificate",
      issuer: "Accredited Technical Institute",
      skills: "5 Skills",
      issuedOn: "Aug 15, 2026",
      expiresOn: "Aug 15, 2031",
      description: "Foundational mastery in networking, cloud services, and secure API communication.",
      tagType: "Verified"
    },
    {
      title: "Learning Pathway Achievement",
      issuer: "SOLO Learning Ecosystem",
      skills: "6 Skills",
      issuedOn: "July 10, 2026",
      expiresOn: "July 10, 2031",
      description: "Completion of sequential pathway modules, interactive labs, and practical code reviews.",
      tagType: "Verified"
    },
    {
      title: "Applied Project Milestone",
      issuer: "Experiential Learning Program",
      skills: "4 Skills",
      issuedOn: "June 25, 2026",
      expiresOn: "June 25, 2031",
      description: "Evaluated production capstone deliverable featuring collaborative version control.",
      tagType: "Self-Issued"
    },
    {
      title: "Specialized Technical Badge",
      issuer: "Industry Evaluator",
      skills: "2 Skills",
      issuedOn: "May 18, 2026",
      expiresOn: "May 18, 2031",
      description: "Database normalization, query caching, and automated endpoint testing validation.",
      tagType: "Verified"
    }
  ];

  const workflowGuides = {
    receive: {
      title: "Receiving Your Credentials",
      badge: "Step 01",
      path: "Dashboard > Manage > Credential Wallet",
      image: "/images/cred1.png",
      points: [
        "Issued automatically after assessment of your course completion.",
        "Upload external certificates directly when submitting external course completion requests.",
        "Stored permanently in your sovereign wallet with lifetime access."
      ]
    },
    verify: {
      title: "Checking Credential Details",
      badge: "Step 02",
      path: "Credential Wallet > View Credential",
      image: "/images/cred2.png",
      points: [
        "Audit learner name, issuing partner, and issue/expiry dates.",
        "Verify attached skills, performance rubrics, and project evidence.",
        "Ensure all metadata matches before requesting public peer endorsements."
      ]
    },
    endorse: {
      title: "Requesting Endorsements",
      badge: "Step 03",
      path: "Credential Wallet > View Credentials > Ask for Endorsement",
      image: "/images/cred3.png",
      points: [
        "Request teammates, mentors, or instructors to publicly endorse your achievements.",
        "Copy and share the unique endorsement URL with your peers.",
        "Control endorsement display under Manage > Endorsements > Show on Profile."
      ]
    },
    share: {
      title: "Sharing & Distributing",
      badge: "Step 04",
      path: "View Credential > Share OR Checkbox > Email",
      image: "/images/cred4.png",
      points: [
        "Add directly to LinkedIn under Licenses & Certifications.",
        "Share achievements as posts to highlight real project outcomes.",
        "Check any credential box to send tamper-proof links directly via email."
      ]
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % credentialDemos.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [credentialDemos.length]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + credentialDemos.length) % credentialDemos.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % credentialDemos.length);
  };

  const getCardPositionStyle = (index) => {
    const total = credentialDemos.length;
    const diff = (index - activeIndex + total) % total;

    if (diff === 0) {
      return {
        transform: "translateX(0%) scale(1)",
        zIndex: 10,
        opacity: 1,
        pointerEvents: "auto"
      };
    } else if (diff === 1) {
      return {
        transform: "translateX(54%) scale(0.86)",
        zIndex: 5,
        opacity: 0.5,
        pointerEvents: "none"
      };
    } else if (diff === total - 1) {
      return {
        transform: "translateX(-54%) scale(0.86)",
        zIndex: 5,
        opacity: 0.5,
        pointerEvents: "none"
      };
    } else {
      return {
        transform: "translateX(0%) scale(0.7)",
        zIndex: 1,
        opacity: 0,
        pointerEvents: "none"
      };
    }
  };

  return (
    <main style={{ background: "#ffffff", minHeight: "100vh" }}>
      <NavBar />

      {/* FULLSCREEN HERO SECTION */}
      <FadeInSection>
        <section
          style={{
            height: "calc(100vh - 65px)",
            minHeight: "600px",
            display: "flex",
            alignItems: "center",
            position: "relative",
            overflow: "hidden",
            background:
              "radial-gradient(circle at 75% 25%, rgba(245, 158, 11, 0.18), transparent 30%), radial-gradient(circle at 15% 75%, rgba(239, 68, 68, 0.10), transparent 28%), linear-gradient(120deg, #fff7ed 0%, #ffffff 50%, #eff6ff 100%)",
            padding: "0 24px",
            boxSizing: "border-box"
          }}
        >
          <div style={{ maxWidth: "1200px", margin: "0 auto", width: "100%" }}>
            <span
              style={{
                display: "inline-block",
                background: "#fff",
                border: "1px solid #fed7aa",
                color: "var(--orange)",
                padding: "4px 12px",
                borderRadius: "999px",
                fontSize: "12px",
                fontWeight: "800",
                letterSpacing: "1px",
                marginBottom: "18px"
              }}
            >
              DIGITAL CREDENTIALING PLATFORM
            </span>

            <h1
              style={{
                margin: "0 0 16px",
                fontFamily: "var(--font-montserrat), sans-serif",
                fontSize: "clamp(34px, 3.8vw, 54px)",
                fontWeight: "800",
                color: "#0f172a",
                lineHeight: "1.08",
                maxWidth: "850px"
              }}
            >
              Proof of what you know, <span style={{ color: "var(--orange)" }}>verified and ready to share.</span>
            </h1>

            <p style={{ fontSize: "16px", color: "#64748b", maxWidth: "640px", lineHeight: "1.6", margin: "0 0 32px" }}>
              Access your digital badges, request peer endorsements, and export verified records directly to LinkedIn or resumes.
            </p>

            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", marginBottom: "40px" }}>
              <a
                href="#wallet-preview"
                style={{
                  background: "var(--orange)",
                  color: "#ffffff",
                  padding: "12px 26px",
                  borderRadius: "8px",
                  fontWeight: "700",
                  fontSize: "14px",
                  textDecoration: "none",
                  boxShadow: "0 6px 20px rgba(249, 115, 22, 0.25)"
                }}
              >
                View Wallet Demo
              </a>
              <a
                href="#learner-guide"
                style={{
                  background: "#ffffff",
                  color: "#1e293b",
                  border: "1px solid #cbd5e1",
                  padding: "12px 26px",
                  borderRadius: "8px",
                  fontWeight: "700",
                  fontSize: "14px",
                  textDecoration: "none"
                }}
              >
                How to Use & Share
              </a>
            </div>

            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", borderTop: "1px solid #e2e8f0", paddingTop: "20px" }}>
              {["Open Badges 2.0 & 3.0", "CLR v2.0 Records", "LinkedIn 1-Click Sync", "W3C Cryptographic Proof"].map((item, idx) => (
                <span key={idx} style={{ fontSize: "13px", color: "#334155", fontWeight: "600", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                  <span style={{ color: "#16a34a" }}>✓</span> {item}
                </span>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* 3D DEPTH CAROUSEL DEMO */}
      <FadeInSection>
        <section id="wallet-preview" style={{ padding: "80px 20px", background: "#f8fafc", borderTop: "1px solid #e2e8f0", borderBottom: "1px solid #e2e8f0" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
            <span style={{ fontSize: "11px", fontWeight: "800", color: "var(--orange)", letterSpacing: "1.5px", textTransform: "uppercase" }}>
              CREDENTIAL REPOSITORY
            </span>
            <h2 style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: "28px", fontWeight: "800", color: "#0f172a", margin: "6px 0 10px" }}>
              Your Wallet at a Glance
            </h2>
            <p style={{ fontSize: "14px", color: "#64748b", margin: "0 auto 35px", maxWidth: "600px" }}>
              Credentials display your completed competencies, verified issue dates, and attached skill tags.
            </p>

            <div className="carousel-stage-container">
              <div className="carousel-track">
                {credentialDemos.map((item, idx) => {
                  const cardStyle = getCardPositionStyle(idx);
                  return (
                    <div
                      key={idx}
                      className="platform-credential-demo-card carousel-stacked-card"
                      style={{
                        ...cardStyle,
                        position: "absolute",
                        width: "100%",
                        maxWidth: "420px",
                        left: "calc(50% - 210px)",
                        transition: "all 0.65s cubic-bezier(0.25, 1, 0.5, 1)"
                      }}
                    >
                      <div style={{ padding: "18px" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "12px", marginBottom: "12px" }}>
                          <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                            <div
                              style={{
                                width: "60px",
                                height: "60px",
                                borderRadius: "10px",
                                background: "#f8fafc",
                                border: "1px solid #e2e8f0",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                padding: "4px",
                                flexShrink: 0
                              }}
                            >
                              <Image src="/images/badge.png" alt="Badge" width={50} height={50} style={{ objectFit: "contain" }} />
                            </div>
                            <div style={{ textAlign: "left" }}>
                              <h3 style={{ margin: "0 0 2px", fontSize: "15px", fontWeight: "750", color: "#0f172a" }}>{item.title}</h3>
                              <p style={{ margin: "0 0 6px", fontSize: "12px", color: "#64748b" }}>{item.issuer}</p>
                              <div style={{ display: "flex", gap: "6px" }}>
                                <span style={{ background: "#ffe5df", color: "#ff4b23", fontSize: "10.5px", fontWeight: "700", padding: "2px 6px", borderRadius: "4px" }}>
                                  {item.skills}
                                </span>
                                <span style={{ background: "#ff9500", color: "#ffffff", fontSize: "10.5px", fontWeight: "700", padding: "2px 6px", borderRadius: "4px" }}>
                                  Openbadge
                                </span>
                              </div>
                            </div>
                          </div>
                          <div style={{ width: "16px", height: "16px", border: "1.5px solid #cbd5e1", borderRadius: "3px" }}></div>
                        </div>

                        <div style={{ display: "flex", gap: "12px", fontSize: "11px", color: "#64748b", margin: "10px 0", textAlign: "left" }}>
                          <span>Issued: <strong>{item.issuedOn}</strong></span>
                          <span>Expires: <strong>{item.expiresOn}</strong></span>
                        </div>
                        <p style={{ margin: 0, fontSize: "12px", color: "#475569", lineHeight: "1.5", textAlign: "left" }}>
                          {item.description}
                        </p>
                      </div>

                      <div
                        style={{
                          padding: "10px 18px",
                          borderTop: "1px solid #f1f5f9",
                          background: "#ffffff",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between"
                        }}
                      >
                        <span
                          style={{
                            background: item.tagType === "Self-Issued" ? "#ff9500" : "#16a34a",
                            color: "#ffffff",
                            fontSize: "10.5px",
                            fontWeight: "700",
                            padding: "2px 8px",
                            borderRadius: "4px"
                          }}
                        >
                          {item.tagType}
                        </span>
                        <span style={{ color: "#ff4b23", fontSize: "12px", fontWeight: "700" }}>View Credential →</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "14px", marginTop: "24px" }}>
                <button onClick={handlePrev} className="carousel-nav-btn" aria-label="Previous">←</button>
                <div style={{ display: "flex", gap: "6px" }}>
                  {credentialDemos.map((_, idx) => (
                    <span
                      key={idx}
                      onClick={() => setActiveIndex(idx)}
                      style={{
                        width: idx === activeIndex ? "18px" : "6px",
                        height: "6px",
                        borderRadius: "999px",
                        background: idx === activeIndex ? "var(--orange)" : "#cbd5e1",
                        cursor: "pointer",
                        transition: "all 0.2s ease"
                      }}
                    />
                  ))}
                </div>
                <button onClick={handleNext} className="carousel-nav-btn" aria-label="Next">→</button>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* INTERACTIVE ACTION GUIDE WITH STEP IMAGES */}
      <FadeInSection>
        <section id="learner-guide" style={{ padding: "80px 20px", background: "#ffffff" }}>
          <div style={{ maxWidth: "1150px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "40px" }}>
              <span style={{ fontSize: "11px", fontWeight: "800", color: "var(--orange)", letterSpacing: "1.5px", textTransform: "uppercase" }}>
                SIMPLE 4-STEP GUIDE
              </span>
              <h2 style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: "28px", fontWeight: "800", color: "#0f172a", margin: "6px 0 8px" }}>
                Managing & Sharing Your Achievements
              </h2>
              <p style={{ fontSize: "14px", color: "#64748b", margin: 0 }}>
                Click a stage below to view navigation routes, screenshot demonstrations, and step-by-step instructions.
              </p>
            </div>

            {/* Interactive Selector Tabs */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "10px", marginBottom: "22px" }}>
              {[
                { id: "receive", title: "1. Receive", sub: "Wallet delivery" },
                { id: "verify", title: "2. Verify", sub: "Check certificate details" },
                { id: "endorse", title: "3. Endorse", sub: "Peer recommendations" },
                { id: "share", title: "4. Share", sub: "LinkedIn & direct email" }
              ].map((tab) => {
                const isSelected = activeWorkflow === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveWorkflow(tab.id)}
                    style={{
                      padding: "14px 16px",
                      borderRadius: "10px",
                      border: `1.5px solid ${isSelected ? "var(--orange)" : "#e2e8f0"}`,
                      background: isSelected ? "#fffaf5" : "#ffffff",
                      cursor: "pointer",
                      textAlign: "left",
                      transition: "all 0.2s ease"
                    }}
                  >
                    <strong style={{ display: "block", fontSize: "14px", color: isSelected ? "#0f172a" : "#475569" }}>{tab.title}</strong>
                    <span style={{ fontSize: "12px", color: isSelected ? "var(--orange)" : "#94a3b8" }}>{tab.sub}</span>
                  </button>
                );
              })}
            </div>

            {/* Dynamic Step Content with Image Showcase */}
            <div
              style={{
                background: "#f8fafc",
                border: "1px solid #e2e8f0",
                borderRadius: "16px",
                padding: "30px",
                display: "grid",
                gridTemplateColumns: "1.2fr 1fr",
                gap: "28px",
                alignItems: "center"
              }}
              className="step-content-grid"
            >
              {/* Left Side: Step Details */}
              <div>
                <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "14px" }}>
                  <span style={{ background: "#eff6ff", color: "#2563eb", fontSize: "11px", fontWeight: "800", padding: "4px 8px", borderRadius: "4px" }}>
                    {workflowGuides[activeWorkflow].badge}
                  </span>
                  <code style={{ fontSize: "12px", background: "#ffffff", border: "1px solid #cbd5e1", padding: "4px 10px", borderRadius: "6px", color: "#334155" }}>
                    📍 {workflowGuides[activeWorkflow].path}
                  </code>
                </div>

                <h3 style={{ margin: "0 0 12px", fontSize: "20px", fontWeight: "800", color: "#0f172a" }}>
                  {workflowGuides[activeWorkflow].title}
                </h3>

                <ul style={{ margin: 0, paddingLeft: "18px", fontSize: "13.5px", color: "#475569", lineHeight: "1.7" }}>
                  {workflowGuides[activeWorkflow].points.map((pt, pIdx) => (
                    <li key={pIdx} style={{ marginBottom: "8px" }}>{pt}</li>
                  ))}
                </ul>
              </div>

              {/* Right Side: Step Interface Screenshot */}
              <div
                style={{
                  background: "#ffffff",
                  border: "1px solid #e2e8f0",
                  borderRadius: "12px",
                  overflow: "hidden",
                  padding: "10px",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.04)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center"
                }}
              >
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "220px",
                    borderRadius: "8px",
                    overflow: "hidden"
                  }}
                >
                  <Image
                    src={workflowGuides[activeWorkflow].image}
                    alt={`${workflowGuides[activeWorkflow].title} Demonstration`}
                    fill
                    sizes="(max-width: 768px) 100vw, 500px"
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <span style={{ fontSize: "11px", color: "#94a3b8", marginTop: "8px", fontWeight: "600" }}>
                  Screenshot preview: {workflowGuides[activeWorkflow].title}
                </span>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* COMBINED CLR CREDENTIAL - FORMULA BANNER */}
      <FadeInSection>
        <section style={{ padding: "0 20px 80px", background: "#ffffff" }}>
          <div
            style={{
              maxWidth: "1150px",
              margin: "0 auto",
              background: "linear-gradient(135deg, #fff7ed 0%, #ffffff 50%, #eff6ff 100%)",
              border: "1.5px solid #fed7aa",
              borderRadius: "16px",
              padding: "32px 28px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "24px",
              alignItems: "center"
            }}
          >
            <div>
              <span style={{ fontSize: "11px", fontWeight: "800", color: "var(--orange)", letterSpacing: "1px", textTransform: "uppercase" }}>
                FEATURE HIGHLIGHT
              </span>
              <h3 style={{ margin: "6px 0 10px", fontSize: "22px", fontWeight: "800", color: "#0f172a" }}>
                Combined Internship Credential (CLR)
              </h3>
              <p style={{ margin: "0 0 16px", fontSize: "13.5px", color: "#64748b", lineHeight: "1.6" }}>
                Instead of managing multiple certificates, SOLO synthesizes your complete journey into one master credential.
              </p>

              <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap", fontSize: "12px", fontWeight: "700", color: "#1e293b" }}>
                <span style={{ background: "#ffffff", border: "1px solid #cbd5e1", padding: "4px 10px", borderRadius: "6px" }}>Courses</span>
                <span>+</span>
                <span style={{ background: "#ffffff", border: "1px solid #cbd5e1", padding: "4px 10px", borderRadius: "6px" }}>Internships</span>
                <span>+</span>
                <span style={{ background: "#ffffff", border: "1px solid #cbd5e1", padding: "4px 10px", borderRadius: "6px" }}>Badges</span>
                <span>=</span>
                <span style={{ background: "var(--orange)", color: "#fff", padding: "4px 10px", borderRadius: "6px" }}>1 Master CLR Record</span>
              </div>
            </div>

            <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "20px" }}>
              <strong style={{ fontSize: "14px", color: "#0f172a", display: "block", marginBottom: "8px" }}>
                Why Sharing Your Badges Matters
              </strong>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "12.5px", color: "#475569" }}>
                <span>• Demonstrates verified proof beyond traditional resumes.</span>
                <span>• Increases discoverability by hiring recruiters.</span>
                <span>• Builds peer credibility across LinkedIn and networks.</span>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* COMPACT STANDARDS & FRAMEWORKS */}
      <FadeInSection>
        <section style={{ padding: "70px 20px", background: "#f8fafc", borderTop: "1px solid #e2e8f0" }}>
          <div style={{ maxWidth: "1150px", margin: "0 auto", textAlign: "center" }}>
            <span style={{ fontSize: "11px", fontWeight: "800", color: "var(--orange)", letterSpacing: "1.5px", textTransform: "uppercase" }}>
              GLOBAL INTEROPERABILITY
            </span>
            <h2 style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: "26px", fontWeight: "800", color: "#0f172a", margin: "6px 0 24px" }}>
              Built on Recognized Standards
            </h2>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px" }}>
              <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "20px", textAlign: "left" }}>
                <strong style={{ fontSize: "14px", color: "#0f172a", display: "block", marginBottom: "4px" }}>Open Badges & CLR</strong>
                <p style={{ margin: "0 0 10px", fontSize: "12.5px", color: "#64748b" }}>Cryptographic, tamper-proof portable records.</p>
                <div style={{ display: "flex", gap: "4px", flexWrap: "wrap" }}>
                  <span className="tiny-chip">Open Badges 2.0</span>
                  <span className="tiny-chip">CLR v2.0</span>
                </div>
              </div>

              <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "20px", textAlign: "left" }}>
                <strong style={{ fontSize: "14px", color: "#0f172a", display: "block", marginBottom: "4px" }}>Skill Taxonomies</strong>
                <p style={{ margin: "0 0 10px", fontSize: "12.5px", color: "#64748b" }}>Mapped to recognized labor market skills.</p>
                <div style={{ display: "flex", gap: "4px", flexWrap: "wrap" }}>
                  <span className="tiny-chip">O*NET</span>
                  <span className="tiny-chip">Lightcast</span>
                  <span className="tiny-chip">OSN</span>
                </div>
              </div>

              <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "20px", textAlign: "left" }}>
                <strong style={{ fontSize: "14px", color: "#0f172a", display: "block", marginBottom: "4px" }}>Registry Discovery</strong>
                <p style={{ margin: "0 0 10px", fontSize: "12.5px", color: "#64748b" }}>Public verification across partner platforms.</p>
                <div style={{ display: "flex", gap: "4px", flexWrap: "wrap" }}>
                  <span className="tiny-chip">Credential Engine</span>
                  <span className="tiny-chip">Credly</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* FINAL CALL TO ACTION */}
      <FadeInSection>
        <section style={{ padding: "80px 20px", textAlign: "center", background: "#ffffff" }}>
          <div style={{ maxWidth: "650px", margin: "0 auto" }}>
            <h2 style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: "30px", fontWeight: "800", color: "#0f172a", margin: "0 0 12px" }}>
              Ready to Own Your Verified Credentials?
            </h2>
            <p style={{ fontSize: "14.5px", color: "#64748b", margin: "0 0 26px", lineHeight: "1.6" }}>
              Turn learning milestones into cryptographic credentials ready for job applications.
            </p>
            <Link
              href="/signup"
              style={{
                display: "inline-block",
                background: "var(--orange)",
                color: "#ffffff",
                padding: "12px 30px",
                borderRadius: "8px",
                fontWeight: "700",
                fontSize: "14px",
                textDecoration: "none",
                boxShadow: "0 6px 20px rgba(249, 115, 22, 0.25)"
              }}
            >
              Get Started Now
            </Link>
          </div>
        </section>
      </FadeInSection>

      <Footer />
      <BackToTop />

      <style jsx global>{`
        .carousel-stage-container {
          position: relative;
          width: 100%;
          max-width: 900px;
          margin: 0 auto;
          padding: 10px 0;
        }

        .carousel-track {
          position: relative;
          width: 100%;
          height: 320px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .carousel-stacked-card {
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
        }

        .carousel-nav-btn {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: #ffffff;
          border: 1px solid #cbd5e1;
          color: #1e293b;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-weight: 700;
          transition: all 0.2s ease;
        }

        .carousel-nav-btn:hover {
          background: var(--orange);
          color: #ffffff;
          border-color: var(--orange);
        }

        .platform-credential-demo-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          overflow: hidden;
        }

        .tiny-chip {
          font-size: 11px;
          font-weight: 700;
          background: #f1f5f9;
          color: #475569;
          padding: 3px 8px;
          border-radius: 4px;
        }

        @media (max-width: 820px) {
          .step-content-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  );
}