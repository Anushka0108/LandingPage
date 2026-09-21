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

  const credentialDemos = [
    {
      title: "Professional Skill Credential",
      issuer: "Authorized Learning Partner",
      skills: "3 Skills",
      issuedOn: "September 20, 2026",
      expiresOn: "September 20, 2031",
      description:
        "Recognizes verified technical competence across software development methodologies, state management, and modern component lifecycle architecture.",
      tagType: "Verified"
    },
    {
      title: "Course Completion Certificate",
      issuer: "Accredited Technical Institute",
      skills: "5 Skills",
      issuedOn: "August 15, 2026",
      expiresOn: "August 15, 2031",
      description:
        "Validates foundational understanding of system networking, security principles, and backend integration through structured evaluative assessments.",
      tagType: "Verified"
    },
    {
      title: "Learning Pathway Achievement",
      issuer: "SOLO Learning Ecosystem",
      skills: "6 Skills",
      issuedOn: "July 10, 2026",
      expiresOn: "July 10, 2031",
      description:
        "Demonstrates completion of sequential learning modules, hands-on lab exercises, and practical project builds mapped to industry frameworks.",
      tagType: "Verified"
    },
    {
      title: "Applied Project Milestone",
      issuer: "Experiential Learning Program",
      skills: "4 Skills",
      issuedOn: "June 25, 2026",
      expiresOn: "June 25, 2031",
      description:
        "Represents project-based execution, collaborative team development, and implementation of production-ready deliverables with attached evidence.",
      tagType: "Self-Issued"
    },
    {
      title: "Specialized Technical Badge",
      issuer: "Verified Industry Evaluator",
      skills: "2 Skills",
      issuedOn: "May 18, 2026",
      expiresOn: "May 18, 2031",
      description:
        "Confirms competency in API integration, query optimization, and structured database management based on defined rubric evaluations.",
      tagType: "Verified"
    },
    {
      title: "Competency Validation",
      issuer: "Authorized Assessment Body",
      skills: "4 Skills",
      issuedOn: "April 12, 2026",
      expiresOn: "April 12, 2031",
      description:
        "Provides verifiable proof of problem-solving skills, algorithmic design, and architectural best practices verified through automated rubrics.",
      tagType: "Verified"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % credentialDemos.length);
    }, 3800);
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
        pointerEvents: "auto",
        filter: "none"
      };
    } else if (diff === 1) {
      return {
        transform: "translateX(55%) scale(0.86)",
        zIndex: 5,
        opacity: 0.55,
        pointerEvents: "none",
        filter: "blur(0.5px)"
      };
    } else if (diff === total - 1) {
      return {
        transform: "translateX(-55%) scale(0.86)",
        zIndex: 5,
        opacity: 0.55,
        pointerEvents: "none",
        filter: "blur(0.5px)"
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
    <main className="credentials-page" style={{ background: "#ffffff", minHeight: "100vh" }}>
      <NavBar />

      {/* HERO SECTION */}
      <FadeInSection>
        <section
          className="explore-hero"
          style={{
            minHeight: "calc(100vh - 65px)",
            display: "flex",
            alignItems: "center",
            position: "relative",
            overflow: "hidden",
            background:
              "radial-gradient(circle at 75% 25%, rgba(245, 158, 11, 0.22), transparent 30%), radial-gradient(circle at 15% 75%, rgba(239, 68, 68, 0.12), transparent 28%), radial-gradient(circle at 50% 5%, rgba(37, 99, 235, 0.10), transparent 22%), linear-gradient(120deg, #fff7ed 0%, #fffaf5 40%, #eff6ff 65%, #fff7ed 100%)"
          }}
        >
          <div
            className="explore-hero-content"
            style={{
              width: "100%",
              maxWidth: "1400px",
              margin: "0 auto",
              padding: "80px 58px",
              position: "relative",
              zIndex: 2,
              boxSizing: "border-box"
            }}
          >
            <p
              className="explore-label"
              style={{
                fontFamily: "var(--font-montserrat), sans-serif",
                fontSize: "12px",
                fontWeight: "800",
                letterSpacing: "2px",
                color: "var(--coral)",
                margin: "0 0 20px"
              }}
            >
              DIGITAL CREDENTIALING PLATFORM
            </p>

            <h1
              style={{
                margin: "0",
                fontFamily: "var(--font-montserrat), sans-serif",
                fontSize: "clamp(42px, calc(3.8vw - 2px), 73px)",
                lineHeight: "1.04",
                letterSpacing: "-3px",
                fontWeight: "800",
                color: "#171717",
                maxWidth: "920px"
              }}
            >
              Standards-driven credential issuance
              <span style={{ display: "block", color: "var(--orange)" }}>
                for comprehensive lifelong achievement.
              </span>
            </h1>

            <p
              className="explore-hero-description"
              style={{
                maxWidth: "680px",
                margin: "28px 0 35px",
                color: "#5d6470",
                fontSize: "16px",
                lineHeight: "1.7"
              }}
            >
              Access your credentials via Dashboard &gt; Manage &gt; Credential Wallet. Receive cryptographically verified Open Badges, collect peer endorsements, and export unified CLR-based credentials across your learning journey.
            </p>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                flexWrap: "wrap",
                marginBottom: "40px"
              }}
            >
              <a
                href="#credentials-demo-wallet"
                className="hero-primary"
                style={{
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
                }}
              >
                Explore Credential Wallet
              </a>

              <a
                href="#wallet-management-guide"
                className="hero-secondary"
                style={{
                  display: "inline-block",
                  background: "rgba(255, 255, 255, 0.85)",
                  color: "var(--blue)",
                  border: "2px solid #dbe5f8",
                  padding: "14px 28px",
                  borderRadius: "9px",
                  fontFamily: "var(--font-montserrat), sans-serif",
                  fontSize: "14px",
                  fontWeight: "700",
                  textDecoration: "none"
                }}
              >
                Managing & Sharing Guide
              </a>
            </div>

            <div
              style={{
                display: "flex",
                gap: "24px",
                flexWrap: "wrap",
                borderTop: "1px solid rgba(226, 232, 240, 0.8)",
                paddingTop: "24px"
              }}
            >
              {[
                {
                  title: "Open Badges & CLR v2.0",
                  sub: "Interoperable, portable formats"
                },
                {
                  title: "Peer Endorsements",
                  sub: "Public recommendations on your profile"
                },
                {
                  title: "Combined Milestone Records",
                  sub: "Unify courses & internship badges"
                },
                {
                  title: "Targeted Distribution",
                  sub: "Direct LinkedIn and email sharing"
                }
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "2px"
                  }}
                >
                  <span
                    style={{
                      fontSize: "13.5px",
                      fontWeight: "700",
                      color: "#1e293b",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px"
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#10b981"
                      viewBox="0 0 24 24"
                    >
                      <path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z" />
                    </svg>
                    {item.title}
                  </span>

                  <small
                    style={{
                      fontSize: "11px",
                      color: "#64748b",
                      paddingLeft: "22px"
                    }}
                  >
                    {item.sub}
                  </small>
                </div>
              ))}
            </div>
          </div>

          <div
            className="hero-glow hero-glow-one"
            style={{
              position: "absolute",
              borderRadius: "50%",
              filter: "blur(80px)",
              pointerEvents: "none",
              width: "450px",
              height: "450px",
              right: "5%",
              top: "10%",
              background: "rgba(18, 85, 255, 0.12)"
            }}
          />

          <div
            className="hero-glow hero-glow-two"
            style={{
              position: "absolute",
              borderRadius: "50%",
              filter: "blur(80px)",
              pointerEvents: "none",
              width: "350px",
              height: "350px",
              left: "30%",
              bottom: "-150px",
              background: "rgba(253, 67, 34, 0.10)"
            }}
          />
        </section>
      </FadeInSection>

      {/* 3-CARD 3D DEPTH CAROUSEL SECTION */}
      <FadeInSection>
        <section
          id="credentials-demo-wallet"
          style={{
            padding: "80px 20px 100px",
            background: "#f8fafc",
            borderTop: "1px solid #e2e8f0",
            borderBottom: "1px solid #e2e8f0",
            overflow: "hidden"
          }}
        >
          <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "40px" }}>
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: "800",
                  color: "#ff5500",
                  letterSpacing: "1.5px",
                  textTransform: "uppercase"
                }}
              >
                CREDENTIAL WALLET PREVIEW
              </span>

              <h2
                style={{
                  fontFamily: "var(--font-montserrat), sans-serif",
                  fontSize: "clamp(24px, calc(3vw - 2px), 36px)",
                  fontWeight: "800",
                  color: "#0f172a",
                  margin: "8px 0 12px",
                  letterSpacing: "-1px"
                }}
              >
                Verified Achievements & Micro-Badges
              </h2>

              <p
                style={{
                  fontSize: "15px",
                  color: "#64748b",
                  maxWidth: "720px",
                  margin: "0 auto"
                }}
              >
                Explore representative credentials issued across courses, assessments, and practical capstones stored in your digital repository.
              </p>
            </div>

            {/* 3D Depth Card Carousel Viewport */}
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
                        maxWidth: "460px",
                        left: "calc(50% - 230px)",
                        transition: "all 0.65s cubic-bezier(0.25, 1, 0.5, 1)"
                      }}
                    >
                      {/* Card Content */}
                      <div style={{ padding: "20px 20px 16px" }}>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "flex-start",
                            gap: "12px",
                            marginBottom: "14px"
                          }}
                        >
                          <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                            {/* Visual Badge Icon Box using /images/badge.png */}
                            <div
                              style={{
                                width: "74px",
                                height: "74px",
                                borderRadius: "10px",
                                background: "#f8fafc",
                                border: "1px solid #e2e8f0",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexShrink: 0,
                                position: "relative",
                                overflow: "hidden",
                                padding: "6px",
                                boxSizing: "border-box"
                              }}
                            >
                              <Image
                                src="/images/badge.png"
                                alt="Credential Badge"
                                width={62}
                                height={62}
                                style={{ objectFit: "contain" }}
                              />
                            </div>

                            {/* Title, Organization, and Skill Badges */}
                            <div>
                              <h3 style={{ margin: "0 0 3px", fontSize: "14px", fontWeight: "750", color: "#0f172a" }}>
                                {item.title}
                              </h3>
                              <p style={{ margin: "0 0 10px", fontSize: "12.5px", color: "#64748b" }}>
                                {item.issuer}
                              </p>

                              <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                                {item.skills && (
                                  <span
                                    style={{
                                      background: "#ffe5df",
                                      color: "#ff4b23",
                                      fontSize: "11px",
                                      fontWeight: "700",
                                      padding: "3px 8px",
                                      borderRadius: "4px"
                                    }}
                                  >
                                    {item.skills}
                                  </span>
                                )}
                                <span
                                  style={{
                                    background: "#ff9500",
                                    color: "#ffffff",
                                    fontSize: "11px",
                                    fontWeight: "700",
                                    padding: "3px 8px",
                                    borderRadius: "4px"
                                  }}
                                >
                                  Openbadge
                                </span>
                              </div>
                            </div>
                          </div>

                          <div
                            style={{
                              width: "16px",
                              height: "16px",
                              border: "1.5px solid #94a3b8",
                              borderRadius: "3px",
                              background: "#ffffff",
                              flexShrink: 0
                            }}
                          />
                        </div>

                        {/* Dates */}
                        <div
                          style={{
                            display: "flex",
                            gap: "16px",
                            fontSize: "11.5px",
                            color: "#64748b",
                            marginBottom: "10px",
                            flexWrap: "wrap"
                          }}
                        >
                          <span>Issued On <strong style={{ color: "#334155", fontWeight: "600" }}>{item.issuedOn}</strong></span>
                          <span>Expires On <strong style={{ color: "#334155", fontWeight: "600" }}>{item.expiresOn}</strong></span>
                        </div>

                        {/* Description */}
                        <p style={{ margin: 0, fontSize: "12px", color: "#64748b", lineHeight: "1.55" }}>
                          {item.description}
                        </p>
                      </div>

                      {/* Card Footer */}
                      <div
                        style={{
                          padding: "12px 20px",
                          borderTop: "1px solid #f1f5f9",
                          background: "#ffffff",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          borderRadius: "0 0 14px 14px"
                        }}
                      >
                        <span
                          style={{
                            background: item.tagType === "Self-Issued" ? "#ff9500" : "#16a34a",
                            color: "#ffffff",
                            fontSize: "11px",
                            fontWeight: "700",
                            padding: "3px 9px",
                            borderRadius: "4px"
                          }}
                        >
                          {item.tagType}
                        </span>

                        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                          <span
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "5px",
                              color: "#ff4b23",
                              fontSize: "12px",
                              fontWeight: "750",
                              cursor: "default"
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="13"
                              height="13"
                              fill="#ff4b23"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm7.931 9h-2.764a14.656 14.656 0 0 0-.86-4.012A8.003 8.003 0 0 1 19.931 11zM12.03 4.07c.883 1.464 1.503 3.896 1.697 6.93H10.27c.195-3.034.814-5.466 1.76-6.93zM4.069 13h2.764c.241 1.442.548 2.808.86 4.012A8.003 8.003 0 0 1 4.069 13zm2.764-2H4.069a8.003 8.003 0 0 1 3.562-4.012c-.312 1.204-.619 2.57-.86 4.012zm5.2 8.93c-.946-1.464-1.565-3.896-1.76-6.93h3.456c-.194 3.034-.814 5.466-1.696 6.93zm2.237-1.918c.312-1.204.619-2.57.86-4.012h2.764a8.003 8.003 0 0 1-3.624 4.012z" />
                            </svg>
                            View Credential
                          </span>

                          <span
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "3px",
                              color: "#ff4b23",
                              fontSize: "12px",
                              fontWeight: "750",
                              cursor: "default"
                            }}
                          >
                            More
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="12"
                              height="12"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 15l-5-5h10z" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Carousel Navigation Buttons */}
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "16px", marginTop: "32px" }}>
                <button onClick={handlePrev} className="carousel-nav-btn" aria-label="Previous Credential">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
                  </svg>
                </button>

                <div style={{ display: "flex", gap: "8px" }}>
                  {credentialDemos.map((_, dotIdx) => (
                    <span
                      key={dotIdx}
                      onClick={() => setActiveIndex(dotIdx)}
                      style={{
                        width: dotIdx === activeIndex ? "24px" : "8px",
                        height: "8px",
                        borderRadius: "999px",
                        background: dotIdx === activeIndex ? "var(--orange)" : "#cbd5e1",
                        cursor: "pointer",
                        transition: "all 0.3s ease"
                      }}
                    />
                  ))}
                </div>

                <button onClick={handleNext} className="carousel-nav-btn" aria-label="Next Credential">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* Standards & Registry Summary Details */}
            <div
              style={{
                marginTop: "50px",
                background: "#ffffff",
                border: "1px solid #e2e8f0",
                borderRadius: "14px",
                padding: "28px"
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "18px",
                  flexWrap: "wrap",
                  gap: "10px"
                }}
              >
                <div>
                  <h4
                    style={{
                      margin: "0 0 4px",
                      fontSize: "14px",
                      fontWeight: "800",
                      color: "#0f172a"
                    }}
                  >
                    Global Registry & Taxonomical Alignment
                  </h4>
                  <p style={{ margin: 0, fontSize: "13px", color: "#64748b" }}>
                    All badges issued through SOLO follow international schemas to ensure cross-platform utility and employer verification.
                  </p>
                </div>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                  gap: "16px"
                }}
              >
                <div style={{ background: "#f8fafc", padding: "16px", borderRadius: "8px", border: "1px solid #e2e8f0" }}>
                  <span style={{ fontSize: "11.5px", color: "#64748b", display: "block", marginBottom: "4px" }}>Standards Framework</span>
                  <strong style={{ fontSize: "14px", color: "#0f172a" }}>Open Badges 2.0 & CLR v2.0</strong>
                  <small style={{ display: "block", color: "#16a34a", fontSize: "11px", marginTop: "2px" }}>Active Standard</small>
                </div>

                <div style={{ background: "#f8fafc", padding: "16px", borderRadius: "8px", border: "1px solid #e2e8f0" }}>
                  <span style={{ fontSize: "11.5px", color: "#64748b", display: "block", marginBottom: "4px" }}>Skill Taxonomy</span>
                  <strong style={{ fontSize: "14px", color: "#0f172a" }}>O*NET & Lightcast</strong>
                  <small style={{ display: "block", color: "#16a34a", fontSize: "11px", marginTop: "2px" }}>Industry Standard</small>
                </div>

                <div style={{ background: "#f8fafc", padding: "16px", borderRadius: "8px", border: "1px solid #e2e8f0" }}>
                  <span style={{ fontSize: "11.5px", color: "#64748b", display: "block", marginBottom: "4px" }}>Connected Registries</span>
                  <strong style={{ fontSize: "14px", color: "#0f172a" }}>Credential Engine & Credly</strong>
                  <small style={{ display: "block", color: "#16a34a", fontSize: "11px", marginTop: "2px" }}>Public Discovery</small>
                </div>

                <div style={{ background: "#f8fafc", padding: "16px", borderRadius: "8px", border: "1px solid #e2e8f0" }}>
                  <span style={{ fontSize: "11.5px", color: "#64748b", display: "block", marginBottom: "4px" }}>Wallet Security</span>
                  <strong style={{ fontSize: "14px", color: "#0f172a" }}>Granular Privacy Vault</strong>
                  <small style={{ display: "block", color: "#16a34a", fontSize: "11px", marginTop: "2px" }}>Selective Sharing</small>
                </div>
              </div>
            </div>

          </div>
        </section>
      </FadeInSection>

      {/* COMPREHENSIVE LEARNER CREDENTIAL MANAGEMENT & SHARING GUIDE */}
      <FadeInSection>
        <section
          id="wallet-management-guide"
          style={{
            padding: "90px 20px",
            background: "#ffffff"
          }}
        >
          <div
            style={{
              maxWidth: "1240px",
              margin: "0 auto"
            }}
          >
            <div
              style={{
                textAlign: "center",
                marginBottom: "50px"
              }}
            >
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: "800",
                  color: "#ff5500",
                  letterSpacing: "1.5px",
                  textTransform: "uppercase"
                }}
              >
                LEARNER WORKFLOW GUIDE
              </span>

              <h2
                style={{
                  fontFamily: "var(--font-montserrat), sans-serif",
                  fontSize: "clamp(24px, calc(3vw - 2px), 36px)",
                  fontWeight: "800",
                  color: "#0f172a",
                  margin: "8px 0 12px",
                  letterSpacing: "-1px"
                }}
              >
                Receiving, Endorsing & Sharing Your Credentials
              </h2>

              <p
                style={{
                  fontSize: "15px",
                  color: "#64748b",
                  maxWidth: "760px",
                  margin: "0 auto"
                }}
              >
                Clear instructions on managing your achievements from the moment a course or external credential is assessed to social distribution and peer verification.
              </p>
            </div>

            {/* Detailed 4-Step Practical Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "24px",
                marginBottom: "40px"
              }}
            >
              <div className="standard-feature-box">
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "8px",
                    background: "#fff7ed",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "14px"
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#f97316" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zm-7 14-5-5 1.414-1.414L12 14.172l5.586-5.586L19 10l-7 7z"/>
                  </svg>
                </div>
                <h3>Receiving Credentials</h3>
                <p>
                  Once course completion is assessed, view your badge under <strong>Dashboard &gt; Manage &gt; Credential Wallet</strong>. For external courses listed on SOLO, upload your external completion certificate directly during the completion request.
                </p>
              </div>

              <div className="standard-feature-box">
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "8px",
                    background: "#eff6ff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "14px"
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#2563eb" viewBox="0 0 24 24">
                    <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm1 16h-2v-6h2v6zm0-8h-2V7h2v3z"/>
                  </svg>
                </div>
                <h3>Verifying Certificate Details</h3>
                <p>
                  Immediately review your issued credential to confirm your name, issuing institution, and completion criteria are accurate before requesting public recommendations or attaching it to job applications.
                </p>
              </div>

              <div className="standard-feature-box">
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "8px",
                    background: "#ecfdf5",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "14px"
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#059669" viewBox="0 0 24 24">
                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                  </svg>
                </div>
                <h3>Peer & Mentor Endorsements</h3>
                <p>
                  In <strong>Manage &gt; Credential Wallet</strong>, click <strong>More &gt; Ask for Endorsement</strong>. Copy and share the endorsement link with instructors or teammates. Manage visibility anytime via <strong>Manage &gt; Endorsements &gt; Show on Profile</strong>.
                </p>
              </div>

              <div className="standard-feature-box">
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "8px",
                    background: "#fdf4ff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "14px"
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#a855f7" viewBox="0 0 24 24">
                    <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92z"/>
                  </svg>
                </div>
                <h3>Sharing Options</h3>
                <p>
                  <strong>Social:</strong> Click <em>View Credential &gt; Share</em> to publish to LinkedIn Licenses or feed posts. <strong>Direct Email:</strong> Click the credential checkbox to trigger the recipient email pop-up for instant transmission.
                </p>
              </div>
            </div>

            {/* COMBINED INTERNSHIP CREDENTIAL (CLR-BASED) BANNER */}
            <div
              style={{
                background: "linear-gradient(135deg, #fff7ed 0%, #ffffff 50%, #eff6ff 100%)",
                border: "1.5px solid #fed7aa",
                borderRadius: "16px",
                padding: "32px",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "24px",
                alignItems: "center"
              }}
            >
              <div>
                <span
                  style={{
                    fontSize: "11.5px",
                    fontWeight: "800",
                    color: "var(--orange)",
                    letterSpacing: "1px",
                    textTransform: "uppercase"
                  }}
                >
                  MILESTONE ARCHITECTURE
                </span>
                <h3
                  style={{
                    margin: "8px 0 10px",
                    fontSize: "20px",
                    fontWeight: "800",
                    color: "#0f172a"
                  }}
                >
                  Combined Internship Credential (CLR-Based)
                </h3>
                <p
                  style={{
                    margin: "0 0 16px",
                    fontSize: "13.5px",
                    color: "#64748b",
                    lineHeight: "1.6"
                  }}
                >
                  Instead of managing multiple individual certificates, SOLO synthesizes your complete journey into a single Comprehensive Learner Record milestone credential. It consolidates completed coursework, applied internship experiences, and all earned badges into one unified, employer-verifiable record.
                </p>
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                  {["Completed Courses", "Internship Experiences", "Earned Badges", "W3C Cryptographic Signature"].map((item, idx) => (
                    <span
                      key={idx}
                      style={{
                        fontSize: "11px",
                        fontWeight: "700",
                        padding: "5px 10px",
                        background: "#ffffff",
                        border: "1px solid #fed7aa",
                        borderRadius: "6px",
                        color: "#c2410c"
                      }}
                    >
                      ✓ {item}
                    </span>
                  ))}
                </div>
              </div>

              <div
                style={{
                  background: "#ffffff",
                  border: "1px solid #e2e8f0",
                  borderRadius: "12px",
                  padding: "22px",
                  boxShadow: "0 4px 14px rgba(0, 0, 0, 0.03)"
                }}
              >
                <h4 style={{ margin: "0 0 8px", fontSize: "15px", fontWeight: "750", color: "#0f172a" }}>
                  Why Sharing Credentials Matters
                </h4>
                <ul
                  style={{
                    margin: 0,
                    paddingLeft: "16px",
                    fontSize: "12.5px",
                    color: "#475569",
                    lineHeight: "1.65"
                  }}
                >
                  <li>Demonstrate verified skills and authentic outcomes beyond self-reported claims</li>
                  <li>Build credible professional presence across LinkedIn and partner networks</li>
                  <li>Increase discoverability by recruiters actively filtering for validated capabilities</li>
                  <li>Communicate clear project evidence and competencies to hiring teams</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* DEFINING CREDENTIALS & SKILLS FRAMEWORK INTEGRATION */}
      <FadeInSection>
        <section
          style={{
            padding: "90px 20px",
            background: "#f8fafc",
            borderTop: "1px solid #e2e8f0",
            borderBottom: "1px solid #e2e8f0"
          }}
        >
          <div
            style={{
              maxWidth: "1240px",
              margin: "0 auto"
            }}
          >
            <div
              style={{
                textAlign: "center",
                marginBottom: "50px"
              }}
            >
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: "800",
                  color: "#ff5500",
                  letterSpacing: "1.5px",
                  textTransform: "uppercase"
                }}
              >
                COMPREHENSIVE CREDENTIAL DESIGN
              </span>

              <h2
                style={{
                  fontFamily: "var(--font-montserrat), sans-serif",
                  fontSize: "clamp(24px, calc(3vw - 2px), 36px)",
                  fontWeight: "800",
                  color: "#0f172a",
                  margin: "8px 0 12px",
                  letterSpacing: "-1px"
                }}
              >
                Credential Creation & Standards Alignment
              </h2>

              <p
                style={{
                  fontSize: "15px",
                  color: "#64748b",
                  maxWidth: "760px",
                  margin: "0 auto"
                }}
              >
                Create comprehensive digital credentials using industry standards like Open Badges and CLR. Design professional certificates, credentials, and learning records that connect seamlessly with assessments and learning pathways.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "24px"
              }}
            >
              <div className="standard-feature-box white">
                <h3>Skill Framework Integration</h3>
                <p>
                  Align credentials to recognized skill frameworks including Open Skills Network, Lightcast, and O*NET, or create custom skill taxonomies. Ensure industry recognition and interoperability across platforms and employers.
                </p>
                <div className="feature-tags">
                  {[
                    "Open Skills Network",
                    "Lightcast",
                    "O*NET",
                    "Custom Taxonomies"
                  ].map((item, idx) => (
                    <span key={idx}>{item}</span>
                  ))}
                </div>
              </div>

              <div className="standard-feature-box white">
                <h3>Evidence, Rubrics & Endorsements</h3>
                <p>
                  Support comprehensive evidence collection with assessment rubrics, peer reviews, and professional endorsements. Create transparent validation processes that build trust and credibility in your credentials.
                </p>
                <div className="feature-tags">
                  {[
                    "Assessment Results",
                    "Project Portfolios",
                    "Peer Reviews",
                    "Skill Demonstrations"
                  ].map((item, idx) => (
                    <span key={idx}>{item}</span>
                  ))}
                </div>
              </div>

              <div className="standard-feature-box white">
                <h3>Registry Integration & Publishing</h3>
                <p>
                  Publish credentials to supported registries and enable employers and institutions to verify achievements through standardized credential information.
                </p>
                <div className="feature-tags">
                  {[
                    "Credential Engine",
                    "Badgr",
                    "Credly",
                    "Canvas Badges"
                  ].map((item, idx) => (
                    <span key={idx}>{item}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* STORAGE, PRIVACY & ECOSYSTEM INTEGRATION */}
      <FadeInSection>
        <section
          style={{
            padding: "90px 20px",
            background: "#ffffff"
          }}
        >
          <div
            style={{
              maxWidth: "1240px",
              margin: "0 auto"
            }}
          >
            <div
              style={{
                textAlign: "center",
                marginBottom: "50px"
              }}
            >
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: "800",
                  color: "#ff5500",
                  letterSpacing: "1.5px",
                  textTransform: "uppercase"
                }}
              >
                SOLO ECOSYSTEM INTEGRATION
              </span>

              <h2
                style={{
                  fontFamily: "var(--font-montserrat), sans-serif",
                  fontSize: "clamp(24px, calc(3vw - 2px), 36px)",
                  fontWeight: "800",
                  color: "#0f172a",
                  margin: "8px 0 12px",
                  letterSpacing: "-1px"
                }}
              >
                Connected Platform Modules
              </h2>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "24px"
              }}
            >
              <div className="standard-feature-box">
                <h3>Unified Platform Access</h3>
                <p>
                  Seamlessly integrate with SOLO&apos;s Learning Hub, Employment Hub, and Skills Portfolio. Your credentialing platform auto-syncs with ecosystem components for a unified learner experience and comprehensive skill tracking.
                </p>
              </div>

              <div className="standard-feature-box">
                <h3>Learning Pathway Integration</h3>
                <p>
                  Connect credentials directly to learning pathways and employment opportunities. Learners can earn credentials as they progress, with updates to their skills portfolio and career opportunities.
                </p>
              </div>

              <div className="standard-feature-box">
                <h3>Granular Privacy Controls</h3>
                <p>
                  Store achievements in secure digital wallets. Choose between private personal storage, public shareable portfolios, or selective sharing based on the audience and application context.
                </p>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* FINAL CALL TO ACTION */}
      <FadeInSection>
        <section
          style={{
            padding: "90px 20px",
            textAlign: "center",
            background: "#ffffff"
          }}
        >
          <div
            style={{
              maxWidth: "750px",
              margin: "0 auto"
            }}
          >
            <h2
              style={{
                fontFamily: "var(--font-montserrat), sans-serif",
                fontSize: "clamp(26px, calc(3.5vw - 2px), 40px)",
                fontWeight: "800",
                color: "#0f172a",
                margin: "0 0 14px",
                letterSpacing: "-1px"
              }}
            >
              Ready to Start Your Credentialing Journey?
            </h2>

            <p
              style={{
                fontSize: "15.5px",
                color: "#64748b",
                lineHeight: "1.6",
                margin: "0 0 30px"
              }}
            >
              Use SOLO&apos;s Digital Credentialing Platform to turn learning achievements into portable, verified outcomes that can be showcased across learning and career opportunities.
            </p>

            <Link
              href="/signup"
              style={{
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
              }}
            >
              Start Credentialing Now
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
          max-width: 1000px;
          margin: 0 auto;
          padding: 20px 0;
        }

        .carousel-track {
          position: relative;
          width: 100%;
          height: 380px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .carousel-stacked-card {
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
        }

        .carousel-nav-btn {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: #ffffff;
          border: 1px solid #cbd5e1;
          color: #1e293b;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
        }

        .carousel-nav-btn:hover {
          background: var(--orange);
          color: #ffffff;
          border-color: var(--orange);
          transform: scale(1.05);
        }

        .platform-credential-demo-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          overflow: hidden;
        }

        .standard-feature-box {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          padding: 26px;
        }

        .standard-feature-box.white {
          background: #ffffff;
        }

        .standard-feature-box h3 {
          font-size: 15px;
          font-weight: 750;
          color: #0f172a;
          margin: 0 0 10px;
        }

        .standard-feature-box p {
          font-size: 13.5px;
          color: #64748b;
          line-height: 1.6;
          margin: 0 0 16px;
        }

        .feature-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .feature-tags span {
          font-size: 11.5px;
          padding: 4px 10px;
          background: #ffffff;
          border: 1px solid #cbd5e1;
          border-radius: 6px;
          color: #334155;
        }
      `}</style>
    </main>
  );
}