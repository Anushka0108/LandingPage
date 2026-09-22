"use client";

import { useState } from "react";
import Link from "next/link";
import NavBar from "../components/NavBar";
import FadeInSection from "../components/FadeInSection";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

export default function CareerPathwaysPage() {
  const [viewMode, setViewMode] = useState("standard");
  const [selectedTrack, setSelectedTrack] = useState("react");
  const [expandedId, setExpandedId] = useState(null);

  const pathwayTracks = [
    {
      id: "react",
      name: "React & Frontend Engineering",
      items: [
        {
          id: "C-760",
          step: 1,
          type: "CREDENTIAL",
          title: "ReactJS",
          badgeType: "Coursework",
          badgeColor: "#0099b8",
          code: "C-760",
          earned: true,
          description:
            "Learn component-based UI architecture and build interactive interfaces with React."
        },
        {
          id: "C-779",
          step: 2,
          type: "CREDENTIAL",
          title: "React Fundamentals",
          badgeType: "Skills Validation",
          badgeColor: "#7c3aed",
          code: "C-779",
          earned: true,
          description:
            "A hands-on assessment validating your core React skills — hooks, state, and props."
        },
        {
          id: "C-782",
          step: 3,
          type: "CREDENTIAL",
          title: "React Redux Toolkit",
          badgeType: "Coursework",
          badgeColor: "#0099b8",
          code: "C-782",
          earned: true,
          description:
            "Manage complex application state using Redux Toolkit's modern patterns."
        },
        {
          id: "C-790",
          step: 4,
          type: "CREDENTIAL",
          title: "RTK Query Basics",
          badgeType: "Coursework",
          badgeColor: "#0099b8",
          code: "C-790",
          earned: true,
          description:
            "Fetch, cache, and sync server data efficiently using RTK Query."
        },
        {
          id: "C-795",
          step: 5,
          type: "CREDENTIAL",
          title: "Redux & RTK Query",
          badgeType: "Skills Validation",
          badgeColor: "#7c3aed",
          code: "C-795",
          earned: false,
          description:
            "Prove you can combine Redux state management with RTK Query in a real app."
        },
        {
          id: "C-801",
          step: 6,
          type: "CREDENTIAL",
          title: "NextJS",
          badgeType: "Coursework",
          badgeColor: "#0099b8",
          code: "C-801",
          earned: false,
          description:
            "Build fast, server-rendered, production-ready React apps with Next.js."
        }
      ]
    },
    {
      id: "data",
      name: "Data Analytics Foundation",
      items: [
        {
          id: "C-410",
          step: 1,
          type: "CREDENTIAL",
          title: "Python for Data Analysis",
          badgeType: "Coursework",
          badgeColor: "#0099b8",
          code: "C-410",
          earned: true,
          description:
            "Work with real datasets using Python, Pandas, and NumPy."
        },
        {
          id: "C-418",
          step: 2,
          type: "CREDENTIAL",
          title: "Statistics Fundamentals",
          badgeType: "Coursework",
          badgeColor: "#0099b8",
          code: "C-418",
          earned: true,
          description:
            "Build the statistical foundation every analyst needs — distributions, correlation, and inference."
        },
        {
          id: "C-425",
          step: 3,
          type: "CREDENTIAL",
          title: "SQL for Analysts",
          badgeType: "Skills Validation",
          badgeColor: "#7c3aed",
          code: "C-425",
          earned: false,
          description:
            "Query, join, and shape relational data confidently with SQL."
        },
        {
          id: "C-431",
          step: 4,
          type: "CREDENTIAL",
          title: "Data Visualization Basics",
          badgeType: "Coursework",
          badgeColor: "#0099b8",
          code: "C-431",
          earned: false,
          description:
            "Turn raw numbers into charts and dashboards people can actually understand."
        }
      ]
    },
    {
      id: "design",
      name: "UI/UX Design Pathway",
      items: [
        {
          id: "C-510",
          step: 1,
          type: "CREDENTIAL",
          title: "Design Thinking Basics",
          badgeType: "Coursework",
          badgeColor: "#0099b8",
          code: "C-510",
          earned: true,
          description:
            "Learn the problem-first mindset behind every great product design."
        },
        {
          id: "C-517",
          step: 2,
          type: "CREDENTIAL",
          title: "Figma Essentials",
          badgeType: "Coursework",
          badgeColor: "#0099b8",
          code: "C-517",
          earned: true,
          description:
            "Design and prototype real interfaces using Figma's core tools."
        },
        {
          id: "C-524",
          step: 3,
          type: "CREDENTIAL",
          title: "Wireframing & Prototyping",
          badgeType: "Skills Validation",
          badgeColor: "#7c3aed",
          code: "C-524",
          earned: false,
          description:
            "Turn a rough idea into a clickable, testable prototype."
        },
        {
          id: "C-531",
          step: 4,
          type: "CREDENTIAL",
          title: "User Research Methods",
          badgeType: "Coursework",
          badgeColor: "#0099b8",
          code: "C-531",
          earned: false,
          description:
            "Learn to run interviews and usability tests that actually improve a product."
        },
        {
          id: "C-538",
          step: 5,
          type: "CREDENTIAL",
          title: "Portfolio Capstone",
          badgeType: "Skills Validation",
          badgeColor: "#7c3aed",
          code: "C-538",
          earned: false,
          description:
            "Bring everything together into a polished, employer-ready design portfolio piece."
        }
      ]
    }
  ];

  const activeTrack =
    pathwayTracks.find((t) => t.id === selectedTrack) || pathwayTracks[0];
  const pathwayItems = activeTrack.items;
  const totalBadges = pathwayItems.length;
  const earnedBadges = pathwayItems.filter((i) => i.earned).length;
  const progressPercent = Math.round((earnedBadges / totalBadges) * 100);

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
              Follow a clear, step-by-step roadmap of courses, real
              projects, and assessments — built for the job you actually
              want. Track your progress and earn verified badges you can
              proudly show employers.
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
                  title: "Pick Your Goal",
                  desc: "Choose a pathway that matches the career you want. See what you'll learn, how long it takes, and which badges you'll earn — before you commit.",
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="9" />
                      <circle cx="12" cy="12" r="4.5" />
                      <circle cx="12" cy="12" r="0.6" fill="currentColor" />
                    </svg>
                  )
                },
                {
                  step: "02",
                  title: "Learn, One Step at a Time",
                  desc: "Move through courses and mini-lessons in order, each one building on the last, so nothing feels overwhelming.",
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                    </svg>
                  )
                },
                {
                  step: "03",
                  title: "Build Real Work",
                  desc: "Practice on real assignments and projects — proof you can actually show, not just a certificate that says you 'know' something.",
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="16 18 22 12 16 6" />
                      <polyline points="8 6 2 12 8 18" />
                    </svg>
                  )
                },
                {
                  step: "04",
                  title: "Earn Your Badges",
                  desc: "Get a verified badge every time you complete a stage. Finish the pathway and all your badges combine into one shareable record.",
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="8" r="6" />
                      <path d="M9 13.5 7 22l5-3 5 3-2-8.5" />
                    </svg>
                  )
                }
              ].map((item, idx) => (
                <div key={idx} className="pathway-feature-card">
                  <div className="pathway-icon-circle">
                    {item.icon}
                  </div>

                  <span
                    style={{
                      fontSize: "12.5px",
                      fontWeight: "800",
                      color: "var(--orange)",
                      fontFamily: "var(--font-montserrat), sans-serif",
                      marginBottom: "10px",
                      display: "block",
                      letterSpacing: "1px"
                    }}
                  >
                    STEP {item.step}
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
                Every pathway breaks your target job down into simple,
                ordered milestones. Switch to <strong>Standard View</strong>{" "}
                to see each credential and where you stand, or{" "}
                <strong>Pathway View</strong> to see how everything connects —
                from your first lesson to your final project.
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
              {[
                {
                  n: "1",
                  title: "Built Around Real Jobs",
                  desc: "Every pathway is mapped to what employers actually look for. Each badge you earn lines up directly with the skills a real job needs — no guesswork.",
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="7" width="18" height="13" rx="2" />
                      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                      <path d="M3 12h18" />
                    </svg>
                  )
                },
                {
                  n: "2",
                  title: "Badges You Can Prove",
                  desc: "Every badge is digitally verified. Anyone — a recruiter, a college, an employer — can check it's real and see exactly what you did to earn it.",
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m9 12 2 2 4-4" />
                      <circle cx="12" cy="12" r="9" />
                    </svg>
                  )
                },
                {
                  n: "3",
                  title: "Your Profile Updates Itself",
                  desc: "Finish a stage, and your skills, resume, and profile update automatically — no forms to fill out, your progress just shows up where it matters.",
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 12a9 9 0 1 1-3-6.7" />
                      <polyline points="21 3 21 9 15 9" />
                    </svg>
                  )
                }
              ].map((card) => (
                <div
                  key={card.n}
                  className="navigator-mini-card"
                >
                  <div className="navigator-mini-icon">
                    {card.icon}
                  </div>

                  <h4
                    style={{
                      margin: "0 0 6px",
                      fontSize: "15px",
                      fontWeight: "800",
                      color: "#1e293b"
                    }}
                  >
                    {card.title}
                  </h4>

                  <p
                    style={{
                      margin: 0,
                      fontSize: "13px",
                      color: "#64748b",
                      lineHeight: "1.55"
                    }}
                  >
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                flexWrap: "wrap",
                marginBottom: "18px"
              }}
            >
              <span
                style={{
                  fontSize: "12.5px",
                  fontWeight: "700",
                  color: "#64748b"
                }}
              >
                Preview a pathway:
              </span>

              {pathwayTracks.map((track) => (
                <button
                  key={track.id}
                  onClick={() => {
                    setSelectedTrack(track.id);
                    setExpandedId(null);
                  }}
                  className="track-switch-pill"
                  style={{
                    background:
                      selectedTrack === track.id ? "var(--orange)" : "#ffffff",
                    color: selectedTrack === track.id ? "#ffffff" : "#475569",
                    border:
                      selectedTrack === track.id
                        ? "1.5px solid var(--orange)"
                        : "1.5px solid #e2e8f0"
                  }}
                >
                  {track.name}
                </button>
              ))}
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
                    Track your accumulated badges and milestones across the{" "}
                    {activeTrack.name} track.
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
                    width: `${progressPercent}%`,
                    height: "100%",
                    background: "#22c55e",
                    borderRadius: "999px",
                    transition: "width 0.6s cubic-bezier(0.16, 1, 0.3, 1)"
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
                    {totalBadges}
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
                    {earnedBadges}
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
                    {progressPercent}%
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
                  {pathwayItems.map((item) => (
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
                          flexDirection: "column",
                          gap: "0",
                          boxShadow:
                            "0 2px 8px rgba(0, 0, 0, 0.02)"
                        }}
                      >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          gap: "20px"
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

                              <button
                                onClick={() =>
                                  setExpandedId(
                                    expandedId === item.id ? null : item.id
                                  )
                                }
                                style={{
                                  color: "#475569",
                                  fontWeight: "600",
                                  background: "transparent",
                                  border: "none",
                                  padding: 0,
                                  cursor: "pointer",
                                  display: "inline-flex",
                                  alignItems: "center",
                                  gap: "4px"
                                }}
                              >
                                {expandedId === item.id
                                  ? "Hide details"
                                  : "View details"}
                                <svg
                                  width="11"
                                  height="11"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="3"
                                  style={{
                                    transform:
                                      expandedId === item.id
                                        ? "rotate(180deg)"
                                        : "rotate(0deg)",
                                    transition: "transform 0.2s ease"
                                  }}
                                >
                                  <polyline points="6 9 12 15 18 9" />
                                </svg>
                              </button>
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
                              borderRadius: "999px",
                              flexShrink: 0
                            }}
                          >
                            Earned
                          </span>
                        )}
                      </div>

                      {expandedId === item.id && (
                        <div
                          style={{
                            marginTop: "16px",
                            paddingTop: "16px",
                            borderTop: "1px solid #f1f5f9",
                            fontSize: "13px",
                            color: "#64748b",
                            lineHeight: "1.6"
                          }}
                        >
                          {item.description}
                        </div>
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
                Every SOLO pathway mixes solid fundamentals with real-world
                practice — so what you learn actually counts toward
                something employers recognize.
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
                  Strong Fundamentals
                </h3>

                <p
                  style={{
                    fontSize: "13.5px",
                    color: "#64748b",
                    lineHeight: "1.6",
                    margin: "0 0 16px"
                  }}
                >
                  Solid grounding in programming, math, and system design —
                  the core skills every tech career is built on.
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
                  Learn by Doing
                </h3>

                <p
                  style={{
                    fontSize: "13.5px",
                    color: "#64748b",
                    lineHeight: "1.6",
                    margin: "0 0 16px"
                  }}
                >
                  Real assignments, hackathons, and capstone projects where
                  you build things you can actually show off.
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
                  Recognized Everywhere
                </h3>

                <p
                  style={{
                    fontSize: "13.5px",
                    color: "#64748b",
                    lineHeight: "1.6",
                    margin: "0 0 16px"
                  }}
                >
                  Your badges follow global education standards, so colleges,
                  recruiters, and employers anywhere can trust and verify
                  them instantly.
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

        .pathway-icon-circle {
          width: 46px;
          height: 46px;
          border-radius: 12px;
          background: linear-gradient(135deg, #fff1e6 0%, #ffe0c7 100%);
          color: var(--orange);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
          flex-shrink: 0;
          transition: transform 0.25s ease, background 0.25s ease;
        }

        .pathway-feature-card:hover .pathway-icon-circle {
          transform: scale(1.08) rotate(-4deg);
          background: linear-gradient(135deg, var(--orange) 0%, #ea580c 100%);
          color: #ffffff;
        }

        .navigator-mini-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          padding: 22px;
          transition: all 0.25s ease;
        }

        .navigator-mini-card:hover {
          transform: translateY(-3px);
          border-color: rgba(37, 99, 235, 0.3);
          box-shadow: 0 14px 32px rgba(37, 99, 235, 0.08);
        }

        .navigator-mini-icon {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: #eff6ff;
          color: var(--blue);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 14px;
          transition: transform 0.25s ease, background 0.25s ease, color 0.25s ease;
        }

        .navigator-mini-card:hover .navigator-mini-icon {
          transform: scale(1.08);
          background: var(--blue);
          color: #ffffff;
        }

        .platform-pathway-card {
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .platform-pathway-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 22px rgba(0, 0, 0, 0.05);
        }

        .track-switch-pill {
          padding: 8px 16px;
          border-radius: 999px;
          font-size: 12.5px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s ease;
          font-family: var(--font-montserrat), sans-serif;
        }

        .track-switch-pill:hover {
          border-color: var(--orange) !important;
          transform: translateY(-1px);
        }
      `}</style>
    </main>
  );
}