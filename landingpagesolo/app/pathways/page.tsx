"use client";

import { useState } from "react";
import Link from "next/link";
import NavBar from "../components/NavBar";
import FadeInSection from "../components/FadeInSection";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

export default function CareerPathwaysPage() {
  const [viewMode, setViewMode] = useState("standard");

  const pathwayItems = [
    {
      id: "C-760",
      step: 1,
      type: "CREDENTIAL",
      title: "ReactJS",
      badgeType: "Coursework",
      badgeColor: "#0099b8",
      code: "C-760",
      earned: true
    },
    {
      id: "C-779",
      step: 2,
      type: "CREDENTIAL",
      title: "React Fundamentals",
      badgeType: "Skills Validation",
      badgeColor: "#7c3aed",
      code: "C-779",
      earned: false
    },
    {
      id: "C-782",
      step: 3,
      type: "CREDENTIAL",
      title: "React Redux Toolkit",
      badgeType: "Coursework",
      badgeColor: "#0099b8",
      code: "C-782",
      earned: true
    },
    {
      id: "C-790",
      step: 4,
      type: "CREDENTIAL",
      title: "RTK Query Basics",
      badgeType: "Coursework",
      badgeColor: "#0099b8",
      code: "C-790",
      earned: false
    },
    {
      id: "C-795",
      step: 5,
      type: "CREDENTIAL",
      title: "Redux & RTK Query",
      badgeType: "Skills Validation",
      badgeColor: "#7c3aed",
      code: "C-795",
      earned: false
    },
    {
      id: "C-801",
      step: 6,
      type: "CREDENTIAL",
      title: "NextJS",
      badgeType: "Coursework",
      badgeColor: "#0099b8",
      code: "C-801",
      earned: false
    }
  ];

  return (
    <main
      className="career-pathway-page"
      style={{ background: "#ffffff", minHeight: "100vh" }}
    >
      <NavBar />

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
              STRUCTURED CAREER PATHWAYS
            </p>

            <h1
              style={{
                margin: "0",
                fontFamily: "var(--font-montserrat), sans-serif",
                fontSize: "clamp(44px, 3.8vw, 75px)",
                lineHeight: "1.04",
                letterSpacing: "-3px",
                fontWeight: "800",
                color: "#171717",
                maxWidth: "920px"
              }}
            >
              Turn what you learn into
              <span style={{ display: "block", color: "var(--orange)" }}>
                a guided path to employment.
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
              Follow structured roadmaps combining micro-courses, applied
              projects, and assessments. Track your journey step by step and
              collect industry-aligned credentials backed by Open Badges and
              Comprehensive Learner Records.
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
                href="#interactive-pathway"
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
                Explore Pathway Roadmaps
              </a>

              <a
                href="#pathway-benefits"
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
                How Pathways Work
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
                  title: "Milestone Tracking",
                  sub: "Clear stage-by-stage visibility"
                },
                {
                  title: "Credentials",
                  sub: "Open Badges 3.0 compliant"
                },
                {
                  title: "Applied Learning",
                  sub: "Live projects and capstones"
                },
                {
                  title: "Career Discovery",
                  sub: "Direct skill gap alignment"
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
          ></div>

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
          ></div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section
          id="pathway-benefits"
          style={{ padding: "90px 20px", background: "#ffffff" }}
        >
          <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "50px" }}>
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: "800",
                  color: "#ff5500",
                  letterSpacing: "1.5px",
                  textTransform: "uppercase"
                }}
              >
                LEARNER PATHWAY WORKFLOW
              </span>

              <h2
                style={{
                  fontFamily: "var(--font-montserrat), sans-serif",
                  fontSize: "clamp(26px, 3vw, 38px)",
                  fontWeight: "800",
                  color: "#0f172a",
                  margin: "8px 0 12px",
                  letterSpacing: "-1px"
                }}
              >
                From Curiosity to Hiring Readiness
              </h2>

              <p
                style={{
                  fontSize: "15px",
                  color: "#64748b",
                  maxWidth: "720px",
                  margin: "0 auto"
                }}
              >
                Career pathways map your target job role into ordered modules,
                making skill progression transparent and verifiable.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(260px, 1fr))",
                gap: "20px"
              }}
            >
              {[
                {
                  step: "01",
                  title: "Target Role Discovery",
                  desc: "Select pathways matching your career goals. View required hours, competencies, and badge milestones before enrolling."
                },
                {
                  step: "02",
                  title: "Step-by-Step Learning",
                  desc: "Progress through connected courses, virtual labs, and interactive assessments organized in sequential learning stages."
                },
                {
                  step: "03",
                  title: "Hands-on Experience",
                  desc: "Reinforce theory with live assignments, code repositories, and capstones that turn knowledge into visible proof of work."
                },
                {
                  step: "04",
                  title: "Portable Micro-Credentials",
                  desc: "Earn tamper-proof badges at each stage. Completed pathways assemble into verifiable records accepted across registries."
                }
              ].map((item, idx) => (
                <div key={idx} className="pathway-feature-card">
                  <span
                    style={{
                      fontSize: "14px",
                      fontWeight: "800",
                      color: "var(--orange)",
                      fontFamily: "var(--font-montserrat), sans-serif",
                      marginBottom: "12px",
                      display: "block"
                    }}
                  >
                    {item.step}
                  </span>

                  <h3
                    style={{
                      fontFamily: "var(--font-montserrat), sans-serif",
                      fontSize: "17px",
                      fontWeight: "750",
                      color: "#1e293b",
                      margin: "0 0 8px"
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    style={{
                      fontSize: "13.5px",
                      color: "#64748b",
                      lineHeight: "1.6",
                      margin: 0
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section
          id="interactive-pathway"
          style={{
            padding: "80px 20px 100px",
            background: "#f8fafc",
            borderTop: "1px solid #e2e8f0",
            borderBottom: "1px solid #e2e8f0"
          }}
        >
          <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
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
                CURATED LEARNING ROADMAP
              </span>

              <h2
                style={{
                  fontFamily: "var(--font-montserrat), sans-serif",
                  fontSize: "clamp(26px, 3vw, 38px)",
                  fontWeight: "800",
                  color: "#0f172a",
                  margin: "8px 0 12px",
                  letterSpacing: "-1px"
                }}
              >
                Interactive Career Pathway Navigator
              </h2>

              <p
                style={{
                  fontSize: "15px",
                  color: "#64748b",
                  maxWidth: "780px",
                  margin: "0 auto",
                  lineHeight: "1.6"
                }}
              >
                Career pathways break target job profiles down into progressive
                competency milestones. Switch between the{" "}
                <strong>Standard View</strong> to inspect individual credential
                modules and completion states, or the{" "}
                <strong>Pathway View</strong> to visualize how skills connect
                sequentially from foundational coursework to advanced
                capstones.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "16px",
                marginBottom: "40px"
              }}
            >
              <div
                style={{
                  background: "#ffffff",
                  border: "1px solid #e2e8f0",
                  borderRadius: "12px",
                  padding: "20px"
                }}
              >
                <h4
                  style={{
                    margin: "0 0 6px",
                    fontSize: "15px",
                    fontWeight: "800",
                    color: "#1e293b"
                  }}
                >
                  1. Role-Aligned Sequences
                </h4>

                <p
                  style={{
                    margin: 0,
                    fontSize: "13px",
                    color: "#64748b",
                    lineHeight: "1.5"
                  }}
                >
                  Each pathway aligns with global occupation frameworks (such
                  as O*NET and ESCO), ensuring that every badge you earn
                  corresponds directly to employer job requirements.
                </p>
              </div>

              <div
                style={{
                  background: "#ffffff",
                  border: "1px solid #e2e8f0",
                  borderRadius: "12px",
                  padding: "20px"
                }}
              >
                <h4
                  style={{
                    margin: "0 0 6px",
                    fontSize: "15px",
                    fontWeight: "800",
                    color: "#1e293b"
                  }}
                >
                  2. Verifiable Micro-Credentials
                </h4>

                <p
                  style={{
                    margin: 0,
                    fontSize: "13px",
                    color: "#64748b",
                    lineHeight: "1.5"
                  }}
                >
                  Milestones award tamper-proof digital credentials and Open
                  Badges. These contain embedded metadata verifying your
                  coursework, assessment rubrics, and project evidence.
                </p>
              </div>

              <div
                style={{
                  background: "#ffffff",
                  border: "1px solid #e2e8f0",
                  borderRadius: "12px",
                  padding: "20px"
                }}
              >
                <h4
                  style={{
                    margin: "0 0 6px",
                    fontSize: "15px",
                    fontWeight: "800",
                    color: "#1e293b"
                  }}
                >
                  3. Dynamic Profile Synchronization
                </h4>

                <p
                  style={{
                    margin: 0,
                    fontSize: "13px",
                    color: "#64748b",
                    lineHeight: "1.5"
                  }}
                >
                  As you complete milestones, acquired skills automatically
                  sync to your Lifelong Skills Portfolio, updating your
                  ATS-ready resume and skill gap matches in real time.
                </p>
              </div>
            </div>

            <div
              style={{
                marginBottom: "35px",
                background: "#ffffff",
                border: "1px solid #e2e8f0",
                borderRadius: "14px",
                padding: "24px"
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "12px",
                  flexWrap: "wrap",
                  gap: "10px"
                }}
              >
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-montserrat), sans-serif",
                      fontSize: "18px",
                      fontWeight: "800",
                      color: "#1e293b",
                      margin: "0 0 4px"
                    }}
                  >
                    Pathway Completion Progress
                  </h3>

                  <p
                    style={{
                      margin: 0,
                      fontSize: "13px",
                      color: "#64748b"
                    }}
                  >
                    Track your accumulated badges and milestones across the
                    React & Frontend Engineering track.
                  </p>
                </div>

                <div
                  style={{
                    display: "inline-flex",
                    background: "#f8fafc",
                    border: "1px solid #e2e8f0",
                    borderRadius: "8px",
                    padding: "3px"
                  }}
                >
                  <button
                    onClick={() => setViewMode("standard")}
                    style={{
                      background:
                        viewMode === "standard"
                          ? "#fff1ed"
                          : "transparent",
                      color:
                        viewMode === "standard" ? "#ea580c" : "#64748b",
                      border: "none",
                      borderRadius: "6px",
                      padding: "6px 14px",
                      fontSize: "13px",
                      fontWeight: "700",
                      cursor: "pointer",
                      transition: "all 0.2s ease"
                    }}
                  >
                    Standard View
                  </button>

                  <button
                    onClick={() => setViewMode("pathway")}
                    style={{
                      background:
                        viewMode === "pathway" ? "#fff1ed" : "transparent",
                      color:
                        viewMode === "pathway" ? "#ea580c" : "#64748b",
                      border: "none",
                      borderRadius: "6px",
                      padding: "6px 14px",
                      fontSize: "13px",
                      fontWeight: "700",
                      cursor: "pointer",
                      transition: "all 0.2s ease"
                    }}
                  >
                    Pathway View
                  </button>
                </div>
              </div>

              <div
                style={{
                  width: "100%",
                  height: "10px",
                  background: "#f1f5f9",
                  borderRadius: "999px",
                  overflow: "hidden",
                  marginBottom: "18px"
                }}
              >
                <div
                  style={{
                    width: "40%",
                    height: "100%",
                    background: "#22c55e",
                    borderRadius: "999px"
                  }}
                ></div>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    "repeat(auto-fit, minmax(180px, 1fr))",
                  gap: "14px"
                }}
              >
                <div
                  style={{
                    background: "#f8fafc",
                    border: "1px solid #e2e8f0",
                    borderRadius: "10px",
                    padding: "14px 18px"
                  }}
                >
                  <span
                    style={{
                      fontSize: "12px",
                      color: "#64748b",
                      fontWeight: "600",
                      display: "block",
                      marginBottom: "4px"
                    }}
                  >
                    Total badges
                  </span>

                  <strong
                    style={{
                      fontSize: "22px",
                      fontWeight: "800",
                      color: "#0f172a"
                    }}
                  >
                    10
                  </strong>
                </div>

                <div
                  style={{
                    background: "#f8fafc",
                    border: "1px solid #e2e8f0",
                    borderRadius: "10px",
                    padding: "14px 18px"
                  }}
                >
                  <span
                    style={{
                      fontSize: "12px",
                      color: "#64748b",
                      fontWeight: "600",
                      display: "block",
                      marginBottom: "4px"
                    }}
                  >
                    Badges earned
                  </span>

                  <strong
                    style={{
                      fontSize: "22px",
                      fontWeight: "800",
                      color: "#0f172a"
                    }}
                  >
                    4
                  </strong>
                </div>

                <div
                  style={{
                    background: "#f8fafc",
                    border: "1px solid #e2e8f0",
                    borderRadius: "10px",
                    padding: "14px 18px"
                  }}
                >
                  <span
                    style={{
                      fontSize: "12px",
                      color: "#64748b",
                      fontWeight: "600",
                      display: "block",
                      marginBottom: "4px"
                    }}
                  >
                    Progress
                  </span>

                  <strong
                    style={{
                      fontSize: "22px",
                      fontWeight: "800",
                      color: "#0f172a"
                    }}
                  >
                    40%
                  </strong>
                </div>
              </div>
            </div>

            {viewMode === "standard" ? (
              <div style={{ position: "relative", paddingLeft: "55px" }}>
                <div
                  style={{
                    position: "absolute",
                    left: "17px",
                    top: "20px",
                    bottom: "40px",
                    width: "2px",
                    background: "#ff7a45"
                  }}
                ></div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "22px"
                  }}
                >
                  {pathwayItems.slice(0, 3).map((item) => (
                    <div key={item.id} style={{ position: "relative" }}>
                      <div
                        style={{
                          position: "absolute",
                          left: "-55px",
                          top: "50%",
                          transform: "translateY(-50%)",
                          width: "36px",
                          height: "36px",
                          borderRadius: "50%",
                          background:
                            "linear-gradient(135deg, #ff6b3d 0%, #ff521d 100%)",
                          color: "#ffffff",
                          fontFamily:
                            "var(--font-montserrat), sans-serif",
                          fontWeight: "800",
                          fontSize: "14px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          boxShadow:
                            "0 4px 12px rgba(255, 85, 0, 0.25)",
                          zIndex: 2
                        }}
                      >
                        {item.step}
                      </div>

                      <div
                        className="platform-pathway-card"
                        style={{
                          background: "#ffffff",
                          border: item.earned
                            ? "1.5px solid #a7f3d0"
                            : "1.5px solid #e2e8f0",
                          borderRadius: "12px",
                          padding: "18px 24px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          gap: "20px",
                          boxShadow:
                            "0 2px 8px rgba(0, 0, 0, 0.02)"
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "20px"
                          }}
                        >
                          <div
                            style={{
                              width: "68px",
                              height: "68px",
                              borderRadius: "50%",
                              border: `2px solid ${item.badgeColor}`,
                              background: "#ffffff",
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                              justifyContent: "center",
                              textAlign: "center",
                              padding: "4px",
                              boxSizing: "border-box",
                              flexShrink: 0
                            }}
                          >
                            <span
                              style={{
                                fontSize: "7px",
                                fontWeight: "700",
                                color: item.badgeColor,
                                letterSpacing: "0.5px"
                              }}
                            >
                              ◇ academia
                            </span>

                            <span
                              style={{
                                fontSize: "8px",
                                fontWeight: "800",
                                color: "#1e293b",
                                margin: "2px 0"
                              }}
                            >
                              Credential
                            </span>

                            <span
                              style={{
                                fontSize: "6.5px",
                                fontWeight: "700",
                                background: item.badgeColor,
                                color: "#ffffff",
                                width: "100%",
                                textAlign: "center",
                                borderRadius: "2px",
                                padding: "1px 0"
                              }}
                            >
                              {item.badgeType}
                            </span>
                          </div>

                          <div>
                            <span
                              style={{
                                fontSize: "11px",
                                fontWeight: "700",
                                color: "#64748b",
                                letterSpacing: "0.5px",
                                display: "block",
                                marginBottom: "3px"
                              }}
                            >
                              {item.type}
                            </span>

                            <h3
                              style={{
                                margin: "0 0 6px",
                                fontSize: "17px",
                                fontWeight: "800",
                                color: "#0f172a",
                                fontFamily:
                                  "var(--font-montserrat), sans-serif"
                              }}
                            >
                              {item.title}
                            </h3>

                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "14px",
                                fontSize: "12px",
                                color: "#64748b"
                              }}
                            >
                              <span>{item.code}</span>

                              <a
                                href="#details"
                                onClick={(e) => {
                                  e.preventDefault();
                                  alert(
                                    `Viewing details for ${item.title} (${item.code})`
                                  );
                                }}
                                style={{
                                  color: "#475569",
                                  fontWeight: "600",
                                  textDecoration: "none"
                                }}
                                onMouseEnter={(e) =>
                                  (e.target.style.textDecoration =
                                    "underline")
                                }
                                onMouseLeave={(e) =>
                                  (e.target.style.textDecoration = "none")
                                }
                              >
                                View details
                              </a>
                            </div>
                          </div>
                        </div>

                        {item.earned && (
                          <span
                            style={{
                              background: "#166534",
                              color: "#ffffff",
                              fontSize: "11.5px",
                              fontWeight: "700",
                              padding: "4px 12px",
                              borderRadius: "999px"
                            }}
                          >
                            Earned
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div
                style={{
                  background:
                    "radial-gradient(#d1d5db 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                  backgroundColor: "#fafaf9",
                  border: "1px solid #e5e7eb",
                  borderRadius: "18px",
                  padding: "40px 24px",
                  overflowX: "auto"
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    minWidth: "920px",
                    gap: "12px"
                  }}
                >
                  {pathwayItems.map((node, i, arr) => (
                    <div
                      key={node.id}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        flex: 1
                      }}
                    >
                      <div
                        style={{
                          background: "#ffffff",
                          border: "1px solid #e2e8f0",
                          borderRadius: "14px",
                          padding: "16px 14px",
                          textAlign: "center",
                          width: "100%",
                          minWidth: "135px",
                          boxShadow: "0 4px 14px rgba(0,0,0,0.03)",
                          position: "relative"
                        }}
                      >
                        {node.earned && (
                          <span
                            style={{
                              position: "absolute",
                              top: "-8px",
                              right: "10px",
                              background: "#10b981",
                              color: "#ffffff",
                              fontSize: "9px",
                              fontWeight: "700",
                              padding: "2px 7px",
                              borderRadius: "10px"
                            }}
                          >
                            Earned
                          </span>
                        )}

                        <div
                          style={{
                            width: "52px",
                            height: "52px",
                            borderRadius: "50%",
                            border: `2.5px solid ${node.badgeColor}`,
                            margin: "0 auto 10px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            background: "#ffffff"
                          }}
                        >
                          <span
                            style={{
                              fontSize: "6px",
                              color: node.badgeColor,
                              fontWeight: "700"
                            }}
                          >
                            ◇ academia
                          </span>

                          <span
                            style={{
                              fontSize: "6.5px",
                              color: "#1e293b",
                              fontWeight: "700",
                              margin: "1px 0"
                            }}
                          >
                            Credential
                          </span>

                          <span
                            style={{
                              fontSize: "6px",
                              background: node.badgeColor,
                              color: "#ffffff",
                              width: "100%",
                              textAlign: "center",
                              marginTop: "1px"
                            }}
                          >
                            {node.badgeType}
                          </span>
                        </div>

                        <h4
                          style={{
                            margin: 0,
                            fontSize: "12px",
                            fontWeight: "700",
                            color: "#0f172a"
                          }}
                        >
                          {node.title}
                        </h4>
                      </div>

                      {i < arr.length - 1 && (
                        <div
                          style={{
                            width: "24px",
                            height: "2px",
                            background: "#cbd5e1",
                            flexShrink: 0,
                            margin: "0 4px"
                          }}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section
          style={{
            padding: "90px 20px",
            background: "#ffffff"
          }}
        >
          <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "50px" }}>
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: "800",
                  color: "#ff5500",
                  letterSpacing: "1.5px",
                  textTransform: "uppercase"
                }}
              >
                STANDARDS & EVIDENCE
              </span>

              <h2
                style={{
                  fontFamily: "var(--font-montserrat), sans-serif",
                  fontSize: "clamp(26px, 3vw, 38px)",
                  fontWeight: "800",
                  color: "#0f172a",
                  margin: "8px 0 12px",
                  letterSpacing: "-1px"
                }}
              >
                Curriculum Design That Employers Value
              </h2>

              <p
                style={{
                  fontSize: "15px",
                  color: "#64748b",
                  maxWidth: "750px",
                  margin: "0 auto"
                }}
              >
                SOLO pathways combine traditional subjects with real-world
                application, ensuring every module counts toward recognized
                outcomes.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "24px"
              }}
            >
              <div
                style={{
                  background: "#f8fafc",
                  border: "1px solid #e2e8f0",
                  borderRadius: "14px",
                  padding: "26px"
                }}
              >
                <h3
                  style={{
                    fontSize: "17px",
                    fontWeight: "750",
                    color: "#0f172a",
                    margin: "0 0 10px"
                  }}
                >
                  Academic & Technical Foundations
                </h3>

                <p
                  style={{
                    fontSize: "13.5px",
                    color: "#64748b",
                    lineHeight: "1.6",
                    margin: "0 0 16px"
                  }}
                >
                  Rigorous theoretical modules covering programming
                  principles, mathematics, statistics, and system architectures
                  required for long-term competence.
                </p>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "6px"
                  }}
                >
                  {[
                    "Mathematics",
                    "Computer Science",
                    "Algorithms",
                    "System Design"
                  ].map((item, idx) => (
                    <span
                      key={idx}
                      style={{
                        fontSize: "11.5px",
                        padding: "4px 10px",
                        background: "#ffffff",
                        border: "1px solid #cbd5e1",
                        borderRadius: "6px",
                        color: "#334155"
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div
                style={{
                  background: "#f8fafc",
                  border: "1px solid #e2e8f0",
                  borderRadius: "14px",
                  padding: "26px"
                }}
              >
                <h3
                  style={{
                    fontSize: "17px",
                    fontWeight: "750",
                    color: "#0f172a",
                    margin: "0 0 10px"
                  }}
                >
                  Experiential & Project Learning
                </h3>

                <p
                  style={{
                    fontSize: "13.5px",
                    color: "#64748b",
                    lineHeight: "1.6",
                    margin: "0 0 16px"
                  }}
                >
                  Applied assignments, collaborative hackathons, live lab
                  sessions, and capstones where learners produce tangible
                  artifacts.
                </p>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "6px"
                  }}
                >
                  {[
                    "Live Projects",
                    "Hackathons",
                    "Capstone Builds",
                    "Code Audits"
                  ].map((item, idx) => (
                    <span
                      key={idx}
                      style={{
                        fontSize: "11.5px",
                        padding: "4px 10px",
                        background: "#ffffff",
                        border: "1px solid #cbd5e1",
                        borderRadius: "6px",
                        color: "#334155"
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div
                style={{
                  background: "#f8fafc",
                  border: "1px solid #e2e8f0",
                  borderRadius: "14px",
                  padding: "26px"
                }}
              >
                <h3
                  style={{
                    fontSize: "17px",
                    fontWeight: "750",
                    color: "#0f172a",
                    margin: "0 0 10px"
                  }}
                >
                  Interoperable Standards
                </h3>

                <p
                  style={{
                    fontSize: "13.5px",
                    color: "#64748b",
                    lineHeight: "1.6",
                    margin: "0 0 16px"
                  }}
                >
                  Aligns directly with CTDL, Open Badges v3.0, and CLR v2.0
                  standards, ensuring records are recognized globally by
                  institutions and hiring teams.
                </p>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "6px"
                  }}
                >
                  {[
                    "Open Badges 3.0",
                    "CLR v2.0",
                    "W3C Standards",
                    "CTDL Alignment"
                  ].map((item, idx) => (
                    <span
                      key={idx}
                      style={{
                        fontSize: "11.5px",
                        padding: "4px 10px",
                        background: "#ffffff",
                        border: "1px solid #cbd5e1",
                        borderRadius: "6px",
                        color: "#334155"
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section
          style={{
            padding: "90px 20px",
            textAlign: "center",
            background: "#ffffff"
          }}
        >
          <div style={{ maxWidth: "750px", margin: "0 auto" }}>
            <h2
              style={{
                fontFamily: "var(--font-montserrat), sans-serif",
                fontSize: "clamp(28px, 3.5vw, 42px)",
                fontWeight: "800",
                color: "#0f172a",
                margin: "0 0 14px",
                letterSpacing: "-1px"
              }}
            >
              Ready to Follow Your Target Career Roadmap?
            </h2>

            <p
              style={{
                fontSize: "15.5px",
                color: "#64748b",
                lineHeight: "1.6",
                margin: "0 0 30px"
              }}
            >
              Choose a pathway, verify your skills with measurable outcomes,
              and showcase portable proof directly to employers.
            </p>

            <Link
              href="/explore?type=Career+Pathways#opportunity"
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
              Browse Career Pathways
            </Link>
          </div>
        </section>
      </FadeInSection>

      <Footer />
      <BackToTop />

      <style jsx global>{`
        .pathway-feature-card {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          padding: 26px 20px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          transition: all 0.25s ease;
        }

        .pathway-feature-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.05);
          border-color: rgba(249, 115, 22, 0.3);
        }

        .platform-pathway-card {
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .platform-pathway-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 22px rgba(0, 0, 0, 0.05);
        }
      `}</style>
    </main>
  );
}