"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import NavBar from "../components/NavBar";
import FadeInSection from "../components/FadeInSection";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

type WorkflowKey = "receive" | "verify" | "endorse" | "share";

export default function CredentialsInformationPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeWorkflow, setActiveWorkflow] =
    useState<WorkflowKey>("receive");

  const credentialDemos = [
    {
      title: "Professional Skill Credential",
      issuer: "Authorized Learning Partner",
      skills: "3 Skills",
      issuedOn: "Sept 20, 2026",
      expiresOn: "Sept 20, 2031",
      description:
        "Demonstrated competence in software architecture, state stores, and component lifecycles.",
      tagType: "Verified",
    },
    {
      title: "Course Completion Certificate",
      issuer: "Accredited Technical Institute",
      skills: "5 Skills",
      issuedOn: "Aug 15, 2026",
      expiresOn: "Aug 15, 2031",
      description:
        "Foundational mastery in networking, cloud services, and secure API communication.",
      tagType: "Verified",
    },
    {
      title: "Learning Pathway Achievement",
      issuer: "SOLO Learning Ecosystem",
      skills: "6 Skills",
      issuedOn: "July 10, 2026",
      expiresOn: "July 10, 2031",
      description:
        "Completion of sequential pathway modules, interactive labs, and practical code reviews.",
      tagType: "Verified",
    },
    {
      title: "Applied Project Milestone",
      issuer: "Experiential Learning Program",
      skills: "4 Skills",
      issuedOn: "June 25, 2026",
      expiresOn: "June 25, 2031",
      description:
        "Evaluated production capstone deliverable featuring collaborative version control.",
      tagType: "Self-Issued",
    },
    {
      title: "Specialized Technical Badge",
      issuer: "Industry Evaluator",
      skills: "2 Skills",
      issuedOn: "May 18, 2026",
      expiresOn: "May 18, 2031",
      description:
        "Database normalization, query caching, and automated endpoint testing validation.",
      tagType: "Verified",
    },
  ];

  const workflowGuides: Record<
    WorkflowKey,
    {
      title: string;
      badge: string;
      path: string;
      image: string;
      points: string[];
    }
  > = {
    receive: {
      title: "Receiving Your Credentials",
      badge: "Step 01",
      path: "Dashboard > Manage > Credential Wallet",
      image: "/images/cred1.png",
      points: [
        "Issued automatically after assessment of your course completion.",
        "Upload external certificates directly when submitting external course completion requests.",
        "Stored permanently in your sovereign wallet with lifetime access.",
      ],
    },

    verify: {
      title: "Checking Credential Details",
      badge: "Step 02",
      path: "Credential Wallet > View Credential",
      image: "/images/cred2.png",
      points: [
        "Audit learner name, issuing partner, and issue/expiry dates.",
        "Verify attached skills, performance rubrics, and project evidence.",
        "Ensure all metadata matches before requesting public peer endorsements.",
      ],
    },

    endorse: {
      title: "Requesting Endorsements",
      badge: "Step 03",
      path: "Credential Wallet > View Credentials > Ask for Endorsement",
      image: "/images/cred3.png",
      points: [
        "Request teammates, mentors, or instructors to publicly endorse your achievements.",
        "Copy and share the unique endorsement URL with your peers.",
        "Control endorsement display under Manage > Endorsements > Show on Profile.",
      ],
    },

    share: {
      title: "Sharing & Distributing",
      badge: "Step 04",
      path: "View Credential > Share OR Checkbox > Email",
      image: "/images/cred4.png",
      points: [
        "Add directly to LinkedIn under Licenses & Certifications.",
        "Share achievements as posts to highlight real project outcomes.",
        "Check any credential box to send tamper-proof links directly via email.",
      ],
    },
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex(
        (prev) => (prev + 1) % credentialDemos.length
      );
    }, 4500);

    return () => clearInterval(timer);
  }, [credentialDemos.length]);

  const handlePrev = () => {
    setActiveIndex(
      (prev) =>
        (prev - 1 + credentialDemos.length) %
        credentialDemos.length
    );
  };

  const handleNext = () => {
    setActiveIndex(
      (prev) => (prev + 1) % credentialDemos.length
    );
  };

  const getCardPositionStyle = (index: number) => {
    const total = credentialDemos.length;
    const diff = (index - activeIndex + total) % total;

    if (diff === 0) {
      return {
        transform: "translateX(0%) scale(1)",
        zIndex: 10,
        opacity: 1,
        pointerEvents: "auto" as const,
      };
    }

    if (diff === 1) {
      return {
        transform: "translateX(54%) scale(0.86)",
        zIndex: 5,
        opacity: 0.42,
        pointerEvents: "none" as const,
      };
    }

    if (diff === total - 1) {
      return {
        transform: "translateX(-54%) scale(0.86)",
        zIndex: 5,
        opacity: 0.42,
        pointerEvents: "none" as const,
      };
    }

    return {
      transform: "translateX(0%) scale(0.7)",
      zIndex: 1,
      opacity: 0,
      pointerEvents: "none" as const,
    };
  };

  return (
    <main className="credentials-page">
      <NavBar />

      {/* =========================================================
          HERO
      ========================================================= */}
      <FadeInSection>
        <section className="credentials-hero">


          <div className="credentials-hero-content">
            <div className="hero-copy">
              <span className="section-eyebrow">
                DIGITAL CREDENTIALING PLATFORM
              </span>

              <h1>
                Proof of what you know,
                <span> verified and ready to share.</span>
              </h1>

              <p>
                Access your digital badges, request peer endorsements,
                and export verified records directly to LinkedIn or
                resumes.
              </p>

              <div className="hero-actions">
                <a
                  href="#wallet-preview"
                  className="primary-action"
                >
                  View Wallet Demo
                  <span>→</span>
                </a>

                <a
                  href="#learner-guide"
                  className="secondary-action"
                >
                  How to Use & Share
                </a>
              </div>
            </div>

            {/* Floating credential preview */}
            <div className="hero-visual">

              <div className="hero-credential-card">
                <div className="credential-top">
                  <div className="mini-badge">
                    <Image
                      src="/images/badge.png"
                      alt="Credential badge"
                      width={54}
                      height={54}
                    />
                  </div>

                  <div>
                    <span className="verified-pill">
                      ✓ VERIFIED
                    </span>

                    <h3>Professional Skill Credential</h3>
                    <p>Authorized Learning Partner</p>
                  </div>
                </div>

                <div className="credential-preview-divider" />

                <div className="preview-skills">
                  <span>Software Architecture</span>
                  <span>State Stores</span>
                  <span>Component Lifecycles</span>
                </div>

                <div className="preview-footer">
                  <span>Issued Sept 20, 2026</span>
                  <strong>View Credential →</strong>
                </div>
              </div>

              <div className="floating-status status-one">
                <span className="status-dot" />
                Credential Verified
              </div>

              <div className="floating-status status-two">
                <span>✓</span>
                Ready to Share
              </div>
            </div>
          </div>

        </section>
      </FadeInSection>

      {/* =========================================================
          INTRO STRIP
      ========================================================= */}
      <FadeInSection>
        <section className="credential-intro">
          <div className="section-container intro-container">
            <div>
              <span className="section-eyebrow">
                YOUR DIGITAL PROOF
              </span>

              <h2>
                Turn learning milestones into
                <span> trusted credentials.</span>
              </h2>
            </div>

            <p>
              SOLO brings your badges, certificates, skills and
              achievements into a professional credential experience
              that can be viewed, verified and shared.
            </p>
          </div>
        </section>
      </FadeInSection>

      {/* =========================================================
          WALLET CAROUSEL
      ========================================================= */}
      <FadeInSection>
        <section
          id="wallet-preview"
          className="wallet-section"
        >
          <div className="section-container">
            <div className="section-heading centered">
              <span className="section-eyebrow">
                CREDENTIAL REPOSITORY
              </span>

              <h2>Your Wallet at a Glance</h2>

              <p>
                Credentials display your completed competencies,
                verified issue dates, and attached skill tags.
              </p>
            </div>

            <div className="wallet-layout">
              <div className="wallet-side-copy">

                <h3>
                  Everything you have achieved,
                  <span> in one place.</span>
                </h3>

                <p>
                  Explore the credentials you have earned through
                  courses, learning pathways, projects and other
                  experiences.
                </p>

                <div className="wallet-feature-list">
                  <div>
                    <span>✓</span>
                    <p>
                      View credential details and issuing
                      information.
                    </p>
                  </div>

                  <div>
                    <span>✓</span>
                    <p>
                      See associated skills and achievement
                      evidence.
                    </p>
                  </div>

                  <div>
                    <span>✓</span>
                    <p>
                      Share verified achievements with your
                      professional network.
                    </p>
                  </div>
                </div>
              </div>

              <div className="carousel-wrapper">
                <div className="carousel-stage-container">
                  <div className="carousel-track">
                    {credentialDemos.map((item, idx) => {
                      const cardStyle =
                        getCardPositionStyle(idx);

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
                            transition:
                              "all 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
                          }}
                        >
                          <div className="credential-card-main">
                            <div className="credential-card-header">
                              <div className="credential-card-identity">
                                <div className="credential-image-box">
                                  <Image
                                    src="/images/badge.png"
                                    alt="Badge"
                                    width={55}
                                    height={55}
                                  />
                                </div>

                                <div>
                                  <h3>{item.title}</h3>
                                  <p>{item.issuer}</p>

                                  <div className="credential-tags">
                                    <span className="skill-tag">
                                      {item.skills}
                                    </span>

                                    <span className="openbadge-tag">
                                      Openbadge
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="credential-date-row">
                              <span>
                                Issued:{" "}
                                <strong>{item.issuedOn}</strong>
                              </span>

                              <span>
                                Expires:{" "}
                                <strong>{item.expiresOn}</strong>
                              </span>
                            </div>

                            <p className="credential-card-description">
                              {item.description}
                            </p>
                          </div>

                          <div className="credential-card-footer">
                            <span
                              className={
                                item.tagType === "Self-Issued"
                                  ? "self-issued-tag"
                                  : "verified-card-tag"
                              }
                            >
                              {item.tagType}
                            </span>

                            <span className="view-credential">
                              View Credential →
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="carousel-controls">
                    <button
                      onClick={handlePrev}
                      className="carousel-nav-btn"
                      aria-label="Previous credential"
                    >
                      ←
                    </button>

                    <div className="carousel-dots">
                      {credentialDemos.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setActiveIndex(idx)}
                          aria-label={`Go to credential ${
                            idx + 1
                          }`}
                          className={
                            idx === activeIndex
                              ? "carousel-dot active"
                              : "carousel-dot"
                          }
                        />
                      ))}
                    </div>

                    <button
                      onClick={handleNext}
                      className="carousel-nav-btn"
                      aria-label="Next credential"
                    >
                      →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* =========================================================
          WORKFLOW
      ========================================================= */}
      <FadeInSection>
        <section
          id="learner-guide"
          className="workflow-section"
        >
          <div className="section-container">
            <div className="section-heading centered">
              <span className="section-eyebrow">
                SIMPLE 4-STEP GUIDE
              </span>

              <h2>
                Managing & Sharing Your Achievements
              </h2>

              <p>
                Click a stage below to view navigation routes,
                screenshot demonstrations, and step-by-step
                instructions.
              </p>
            </div>

            <div className="workflow-tabs">
              {[
                {
                  id: "receive" as WorkflowKey,
                  number: "01",
                  title: "Receive",
                  sub: "Wallet delivery",
                },
                {
                  id: "verify" as WorkflowKey,
                  number: "02",
                  title: "Verify",
                  sub: "Check certificate details",
                },
                {
                  id: "endorse" as WorkflowKey,
                  number: "03",
                  title: "Endorse",
                  sub: "Peer recommendations",
                },
                {
                  id: "share" as WorkflowKey,
                  number: "04",
                  title: "Share",
                  sub: "LinkedIn & direct email",
                },
              ].map((tab) => {
                const isSelected =
                  activeWorkflow === tab.id;

                return (
                  <button
                    key={tab.id}
                    onClick={() =>
                      setActiveWorkflow(tab.id)
                    }
                    className={
                      isSelected
                        ? "workflow-tab active"
                        : "workflow-tab"
                    }
                  >
                    <span className="workflow-number">
                      {tab.number}
                    </span>

                    <div>
                      <strong>{tab.title}</strong>
                      <small>{tab.sub}</small>
                    </div>

                    <span className="workflow-arrow">
                      →
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="workflow-content">
              <div className="workflow-details">
                <div className="workflow-step-label">
                  {workflowGuides[activeWorkflow].badge}
                </div>

                <h3>
                  {workflowGuides[activeWorkflow].title}
                </h3>

                <div className="workflow-path">
                  <span>⌖</span>
                  {workflowGuides[activeWorkflow].path}
                </div>

                <ul>
                  {workflowGuides[
                    activeWorkflow
                  ].points.map((point, idx) => (
                    <li key={idx}>
                      <span>✓</span>
                      <p>{point}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="workflow-image-wrapper">
                <div className="browser-bar">
                  <div className="browser-dots">
                    <span />
                    <span />
                    <span />
                  </div>

                  <div className="browser-title">
                    SOLO Credential Wallet
                  </div>
                </div>

                <div className="workflow-image">
                  <Image
                    src={
                      workflowGuides[activeWorkflow].image
                    }
                    alt={`${workflowGuides[activeWorkflow].title} Demonstration`}
                    fill
                    sizes="(max-width: 768px) 100vw, 600px"
                    style={{
                      objectFit: "contain",
                    }}
                  />
                </div>

                <div className="image-caption">
                  Screenshot preview:{" "}
                  {workflowGuides[activeWorkflow].title}
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* =========================================================
          WHY CREDENTIALS
      ========================================================= */}
      <FadeInSection>
        <section className="benefits-section">
          <div className="section-container">
            <div className="section-heading centered">
              <span className="section-eyebrow">
                WHY IT MATTERS
              </span>

              <h2>
                More than a certificate.
                <span> Proof you can carry.</span>
              </h2>

              <p>
                Your credentials can become part of a broader
                professional identity that demonstrates what you
                have learned and achieved.
              </p>
            </div>

            <div className="benefits-grid">
              <div className="benefit-card">
                <div className="benefit-icon">✓</div>

                <span>01</span>

                <h3>Verified Skills</h3>

                <p>
                  Demonstrate verified skills and achievements
                  beyond a traditional resume.
                </p>
              </div>

              <div className="benefit-card">
                <div className="benefit-icon">↗</div>

                <span>02</span>

                <h3>Professional Presence</h3>

                <p>
                  Build a stronger professional presence by
                  sharing your learning outcomes and achievements.
                </p>
              </div>

              <div className="benefit-card">
                <div className="benefit-icon">◎</div>

                <span>03</span>

                <h3>Greater Discoverability</h3>

                <p>
                  Make your achievements easier for recruiters,
                  employers and professional networks to discover.
                </p>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* =========================================================
          CLR FEATURE
      ========================================================= */}
      <FadeInSection>
        <section className="clr-section">
          <div className="section-container">
            <div className="clr-card">
              <div className="clr-glow" />

              <div className="clr-content">
                <span className="section-eyebrow">
                  FEATURE HIGHLIGHT
                </span>

                <h2>
                  Combined Internship
                  <span> Credential (CLR)</span>
                </h2>

                <p>
                  Instead of managing multiple certificates, SOLO
                  synthesizes your complete journey into one master
                  credential.
                </p>

                <div className="clr-formula">
                  <span>Courses</span>
                  <b>+</b>
                  <span>Internships</span>
                  <b>+</b>
                  <span>Badges</span>
                  <b>=</b>
                  <strong>1 Master CLR Record</strong>
                </div>
              </div>

              <div className="clr-visual">
                <div className="clr-document">
                  <div className="document-header">
                    <div className="document-logo">
                      S
                    </div>

                    <div>
                      <small>SOLO NETWORK</small>
                      <strong>
                        Combined Internship Credential
                      </strong>
                    </div>
                  </div>

                  <div className="document-line large" />
                  <div className="document-line" />
                  <div className="document-line short" />

                  <div className="document-badges">
                    <span>COURSES</span>
                    <span>INTERNSHIP</span>
                    <span>BADGES</span>
                  </div>

                  <div className="document-verified">
                    ✓ VERIFIED RECORD
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>


      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <FadeInSection>
        <section className="final-cta">

          <div className="section-container">
            <div className="cta-content">
              <span className="section-eyebrow">
                YOUR ACHIEVEMENTS. YOUR PROOF.
              </span>

              <h2>
                Ready to own your
                <span> verified credentials?</span>
              </h2>

              <p>
                Turn learning milestones into credentials ready
                to showcase across your professional journey.
              </p>

              <Link
                href="/signup"
                className="cta-button"
              >
                Get Started Now
                <span>→</span>
              </Link>
            </div>
          </div>
        </section>
      </FadeInSection>

      <Footer />
      <BackToTop />

      {/* =========================================================
          STYLES
      ========================================================= */}
      <style jsx global>{`
        :root {
          --credentials-orange: #ff6500;
          --credentials-orange-light: #fff4ec;
          --credentials-orange-soft: #ffe5d7;
          --credentials-dark: #101828;
          --credentials-text: #475569;
          --credentials-muted: #64748b;
          --credentials-border: #e2e8f0;
          --credentials-background: #f8fafc;
        }

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
        }

        .credentials-page {
          background: #ffffff;
          color: var(--credentials-dark);
          overflow: hidden;
        }

        /* =====================================================
           GLOBAL
        ===================================================== */

        .section-container {
          width: min(1240px, calc(100% - 48px));
          margin: 0 auto;
        }

        .section-eyebrow {
          align-items: center;
          gap: 8px;
          font-family: var(--font-montserrat), sans-serif;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1.8px;
          color: var(--credentials-orange);
          text-transform: uppercase;
        }

        .section-eyebrow::before {
          content: "";
          width: 24px;
          height: 2px;
          background: var(--credentials-orange);
          border-radius: 999px;
        }

        .section-heading {
          max-width: 720px;
          margin: 0 auto;
        }

        .section-heading.centered {
          text-align: center;
        }

        .section-heading h2 {
          margin: 10px 0 12px;
          font-family: var(--font-montserrat), sans-serif;
          font-size: clamp(30px, 4vw, 46px);
          line-height: 1.1;
          font-weight: 800;
          color: var(--credentials-dark);
          letter-spacing: -1.2px;
        }

        .section-heading h2 span {
          color: var(--credentials-orange);
        }

        .section-heading p {
          margin: 0;
          color: var(--credentials-muted);
          font-size: 15px;
          line-height: 1.7;
        }

        /* =====================================================
           HERO
        ===================================================== */

        .credentials-hero {
          min-height: calc(100vh - 65px);
          position: relative;
          display: flex;
          align-items: center;
          overflow: hidden;
          background:
            radial-gradient(
              circle at 75% 25%,
              rgba(245, 158, 11, 0.22),
              transparent 28%
            ),
            radial-gradient(
              circle at 15% 75%,
              rgba(239, 68, 68, 0.13),
              transparent 27%
            ),
            radial-gradient(
              circle at 55% 0%,
              rgba(37, 99, 235, 0.09),
              transparent 25%
            ),
            linear-gradient(
              120deg,
              #fff7ed 0%,
              #fffaf5 40%,
              #eff6ff 68%,
              #ffffff 100%
            );
        }

        .credentials-hero-content {
          position: relative;
          z-index: 3;
          width: min(1450px, calc(100% - 100px));
          margin: 0 auto;
          padding: 90px 30px;
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 70px;
          align-items: center;
        }

        .hero-copy {
          max-width: 720px;
        }

        .hero-copy h1 {
          margin: 18px 0 20px;
          font-family: var(--font-montserrat), sans-serif;
          font-size: clamp(42px, 5.3vw, 72px);
          line-height: 1.02;
          font-weight: 800;
          letter-spacing: -2.8px;
          color: #0f172a;
        }

        .hero-copy h1 span {
          color: var(--credentials-orange);
        }

        .hero-copy > p {
          max-width: 650px;
          margin: 0 0 30px;
          color: #64748b;
          font-size: 17px;
          line-height: 1.7;
        }

        .hero-actions {
          display: flex;
          align-items: center;
          gap: 13px;
          flex-wrap: wrap;
          margin-bottom: 38px;
        }

        .primary-action,
        .secondary-action {
          min-height: 48px;
          padding: 0 22px;
          border-radius: 9px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          font-size: 14px;
          font-weight: 700;
          text-decoration: none;
          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease,
            background 0.25s ease;
        }

        .primary-action {
          background: var(--credentials-orange);
          color: white;
          box-shadow: 0 12px 30px rgba(255, 101, 0, 0.22);
        }

        .primary-action:hover {
          transform: translateY(-3px);
          box-shadow: 0 18px 36px rgba(255, 101, 0, 0.3);
        }

        .primary-action span {
          transition: transform 0.25s ease;
        }

        .primary-action:hover span {
          transform: translateX(4px);
        }

        .secondary-action {
          color: #334155;
          background: rgba(255, 255, 255, 0.75);
          border: 1px solid #cbd5e1;
        }

        .secondary-action:hover {
          transform: translateY(-3px);
          border-color: var(--credentials-orange);
          color: var(--credentials-orange);
          background: #ffffff;
        }

        .hero-proof-row {
          display: flex;
          flex-wrap: wrap;
          gap: 13px 22px;
          padding-top: 22px;
          border-top: 1px solid rgba(148, 163, 184, 0.28);
        }

        .hero-proof-row span {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #475569;
          font-size: 12px;
          font-weight: 600;
        }

        .hero-proof-row b {
          color: #16a34a;
          font-size: 14px;
        }

        /* Hero visual */

        .hero-visual {
          min-height: 480px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          perspective: 1000px;
        }

        .hero-credential-card {
          position: relative;
          width: min(490px, 90%);
          padding: 25px;
          border: 1px solid rgba(255, 255, 255, 0.9);
          border-radius: 22px;
          background: rgba(255, 255, 255, 0.82);
          box-shadow:
            0 30px 80px rgba(15, 23, 42, 0.13),
            0 10px 25px rgba(255, 101, 0, 0.08);
          backdrop-filter: blur(18px);
          animation: credentialFloat 5s ease-in-out infinite;
          transform: rotateY(-5deg) rotateX(2deg);
        }

        .credential-top {
          display: flex;
          gap: 17px;
          align-items: center;
        }

        .mini-badge {
          width: 76px;
          height: 76px;
          flex-shrink: 0;
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #fff7ed;
          border: 1px solid #fed7aa;
        }

        .verified-pill {
          display: inline-flex;
          padding: 4px 8px;
          margin-bottom: 7px;
          border-radius: 5px;
          background: #dcfce7;
          color: #15803d;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.8px;
        }

        .credential-top h3 {
          margin: 0 0 3px;
          font-size: 17px;
          font-weight: 800;
          color: #0f172a;
        }

        .credential-top p {
          margin: 0;
          color: #64748b;
          font-size: 12px;
        }

        .credential-preview-divider {
          height: 1px;
          background: #e2e8f0;
          margin: 23px 0;
        }

        .preview-skills {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .preview-skills span {
          padding: 7px 10px;
          border-radius: 7px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          color: #475569;
          font-size: 10px;
          font-weight: 600;
        }

        .preview-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 15px;
          margin-top: 26px;
          padding-top: 17px;
          border-top: 1px solid #f1f5f9;
        }

        .preview-footer span {
          color: #94a3b8;
          font-size: 10px;
        }

        .preview-footer strong {
          color: var(--credentials-orange);
          font-size: 11px;
        }

        .floating-ring {
          position: absolute;
          border-radius: 50%;
          border: 1px dashed rgba(255, 101, 0, 0.25);
          animation: rotateRing 18s linear infinite;
        }

        .ring-one {
          width: 430px;
          height: 430px;
        }

        .ring-two {
          width: 340px;
          height: 340px;
          border-color: rgba(37, 99, 235, 0.18);
          animation-direction: reverse;
          animation-duration: 13s;
        }

        .floating-status {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 11px 14px;
          border-radius: 11px;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          box-shadow: 0 15px 30px rgba(15, 23, 42, 0.1);
          color: #334155;
          font-size: 11px;
          font-weight: 700;
          animation: statusFloat 4s ease-in-out infinite;
        }

        .status-one {
          left: 1%;
          top: 20%;
        }

        .status-two {
          right: 1%;
          bottom: 18%;
          animation-delay: 1s;
        }

        .status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #22c55e;
          box-shadow: 0 0 0 5px rgba(34, 197, 94, 0.12);
        }

        .status-two span {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #fff7ed;
          color: var(--credentials-orange);
        }

        .hero-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(1px);
          pointer-events: none;
        }

        .hero-orb-one {
          width: 160px;
          height: 160px;
          right: 5%;
          top: 8%;
          background: rgba(249, 115, 22, 0.08);
        }

        .hero-orb-two {
          width: 100px;
          height: 100px;
          left: 5%;
          bottom: 12%;
          background: rgba(37, 99, 235, 0.08);
        }

        .hero-orb-three {
          width: 60px;
          height: 60px;
          right: 35%;
          bottom: 10%;
          background: rgba(239, 68, 68, 0.08);
        }

        .hero-grid-pattern {
          position: absolute;
          inset: 0;
          opacity: 0.22;
          background-image:
            linear-gradient(
              rgba(148, 163, 184, 0.09) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(148, 163, 184, 0.09) 1px,
              transparent 1px
            );
          background-size: 55px 55px;
          mask-image: linear-gradient(
            to right,
            black,
            transparent 70%
          );
        }

        .hero-scroll-indicator {
          position: absolute;
          z-index: 5;
          bottom: 22px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          gap: 9px;
          color: #94a3b8;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.7px;
          text-transform: uppercase;
        }

        .hero-scroll-indicator span {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--credentials-orange);
          animation: scrollPulse 1.5s ease-in-out infinite;
        }

        /* =====================================================
           INTRO
        ===================================================== */

        .credential-intro {
          padding: 75px 0;
          background: #ffffff;
          border-bottom: 1px solid #f1f5f9;
        }

        .intro-container {
          display: grid;
          grid-template-columns: 1fr 0.8fr;
          gap: 80px;
          align-items: center;
        }

        .intro-container h2 {
          margin: 12px 0 0;
          max-width: 650px;
          font-family: var(--font-montserrat), sans-serif;
          font-size: clamp(28px, 4vw, 43px);
          line-height: 1.1;
          letter-spacing: -1.4px;
          font-weight: 800;
        }

        .intro-container h2 span {
          color: var(--credentials-orange);
        }

        .intro-container > p {
          margin: 0;
          color: #64748b;
          font-size: 15px;
          line-height: 1.8;
        }

        /* =====================================================
           WALLET
        ===================================================== */

        .wallet-section {
          padding: 110px 0;
          background:
            radial-gradient(
              circle at 85% 25%,
              rgba(255, 101, 0, 0.06),
              transparent 25%
            ),
            #f8fafc;
          border-top: 1px solid #e2e8f0;
          border-bottom: 1px solid #e2e8f0;
        }

        .wallet-layout {
          display: grid;
          grid-template-columns: 0.75fr 1.25fr;
          gap: 70px;
          align-items: center;
          margin-top: 70px;
        }

        .wallet-side-copy {
          max-width: 390px;
        }

        .side-number {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: #fff1e6;
          color: var(--credentials-orange);
          font-size: 12px;
          font-weight: 800;
          margin-bottom: 20px;
        }

        .wallet-side-copy h3 {
          margin: 0 0 15px;
          font-family: var(--font-montserrat), sans-serif;
          font-size: 30px;
          line-height: 1.15;
          font-weight: 800;
          letter-spacing: -0.8px;
        }

        .wallet-side-copy h3 span {
          color: var(--credentials-orange);
        }

        .wallet-side-copy > p {
          margin: 0 0 28px;
          color: #64748b;
          font-size: 14px;
          line-height: 1.7;
        }

        .wallet-feature-list {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .wallet-feature-list > div {
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }

        .wallet-feature-list span {
          width: 21px;
          height: 21px;
          flex-shrink: 0;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #dcfce7;
          color: #16a34a;
          font-size: 10px;
          font-weight: 800;
        }

        .wallet-feature-list p {
          margin: 1px 0 0;
          color: #475569;
          font-size: 12.5px;
          line-height: 1.5;
        }

        .carousel-wrapper {
          min-width: 0;
        }

        .carousel-stage-container {
          position: relative;
          width: 100%;
          padding: 10px 0;
        }

        .carousel-track {
          position: relative;
          width: 100%;
          height: 345px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .platform-credential-demo-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 17px;
          overflow: hidden;
          box-shadow:
            0 20px 45px rgba(15, 23, 42, 0.07),
            0 5px 15px rgba(15, 23, 42, 0.03);
        }

        .credential-card-main {
          padding: 23px;
        }

        .credential-card-header {
          display: flex;
          justify-content: space-between;
          gap: 15px;
        }

        .credential-card-identity {
          display: flex;
          gap: 13px;
          min-width: 0;
        }

        .credential-image-box {
          width: 62px;
          height: 62px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 13px;
          background: #fffaf5;
          border: 1px solid #e2e8f0;
        }

        .credential-card-identity h3 {
          margin: 0 0 4px;
          color: #0f172a;
          font-size: 14px;
          line-height: 1.35;
          font-weight: 800;
        }

        .credential-card-identity p {
          margin: 0 0 7px;
          color: #64748b;
          font-size: 11px;
        }

        .credential-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 5px;
        }

        .skill-tag,
        .openbadge-tag,
        .verified-card-tag,
        .self-issued-tag {
          display: inline-flex;
          align-items: center;
          border-radius: 5px;
          padding: 4px 7px;
          font-size: 9px;
          font-weight: 800;
        }

        .skill-tag {
          background: #ffe5df;
          color: #ff4b23;
        }

        .openbadge-tag {
          background: #ff9500;
          color: #ffffff;
        }

        .verified-card-tag {
          background: #16a34a;
          color: #ffffff;
        }

        .self-issued-tag {
          background: #ff9500;
          color: #ffffff;
        }

        .credential-checkbox {
          width: 17px;
          height: 17px;
          flex-shrink: 0;
          border: 1.5px solid #cbd5e1;
          border-radius: 4px;
        }

        .credential-date-row {
          display: flex;
          flex-wrap: wrap;
          gap: 18px;
          margin-top: 22px;
          color: #94a3b8;
          font-size: 10px;
        }

        .credential-date-row strong {
          color: #475569;
        }

        .credential-card-description {
          margin: 17px 0 0;
          color: #64748b;
          font-size: 11.5px;
          line-height: 1.6;
        }

        .credential-card-footer {
          min-height: 57px;
          padding: 0 23px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          border-top: 1px solid #f1f5f9;
          background: #ffffff;
        }

        .view-credential {
          color: #ff4b23;
          font-size: 11px;
          font-weight: 800;
          transition: transform 0.2s ease;
        }

        .platform-credential-demo-card:hover .view-credential {
          transform: translateX(4px);
        }

        .carousel-controls {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 15px;
          margin-top: 18px;
        }

        .carousel-nav-btn {
          width: 37px;
          height: 37px;
          border: 1px solid #cbd5e1;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #ffffff;
          color: #334155;
          cursor: pointer;
          font-weight: 800;
          transition:
            transform 0.2s ease,
            background 0.2s ease,
            color 0.2s ease;
        }

        .carousel-nav-btn:hover {
          background: var(--credentials-orange);
          color: white;
          border-color: var(--credentials-orange);
          transform: translateY(-2px);
        }

        .carousel-dots {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .carousel-dot {
          width: 6px;
          height: 6px;
          padding: 0;
          border: 0;
          border-radius: 999px;
          background: #cbd5e1;
          cursor: pointer;
          transition:
            width 0.25s ease,
            background 0.25s ease;
        }

        .carousel-dot.active {
          width: 20px;
          background: var(--credentials-orange);
        }

        /* =====================================================
           WORKFLOW
        ===================================================== */

        .workflow-section {
          padding: 110px 0;
          background: #ffffff;
        }

        .workflow-tabs {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
          margin-top: 55px;
        }

        .workflow-tab {
          position: relative;
          display: flex;
          align-items: center;
          gap: 12px;
          min-height: 80px;
          padding: 15px;
          border: 1px solid #e2e8f0;
          border-radius: 13px;
          background: #ffffff;
          text-align: left;
          cursor: pointer;
          transition:
            transform 0.25s ease,
            border-color 0.25s ease,
            box-shadow 0.25s ease,
            background 0.25s ease;
        }

        .workflow-tab:hover {
          transform: translateY(-4px);
          border-color: #fdba74;
          box-shadow: 0 12px 25px rgba(15, 23, 42, 0.07);
        }

        .workflow-tab.active {
          border-color: var(--credentials-orange);
          background: #fffaf5;
          box-shadow: 0 10px 25px rgba(255, 101, 0, 0.1);
        }

        .workflow-number {
          width: 36px;
          height: 36px;
          flex-shrink: 0;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f8fafc;
          color: #94a3b8;
          font-size: 10px;
          font-weight: 800;
          transition:
            background 0.25s ease,
            color 0.25s ease;
        }

        .workflow-tab.active .workflow-number {
          background: var(--credentials-orange);
          color: white;
        }

        .workflow-tab strong {
          display: block;
          margin-bottom: 3px;
          color: #334155;
          font-size: 13px;
        }

        .workflow-tab small {
          display: block;
          color: #94a3b8;
          font-size: 10px;
        }

        .workflow-arrow {
          margin-left: auto;
          color: #cbd5e1;
          transition:
            transform 0.25s ease,
            color 0.25s ease;
        }

        .workflow-tab:hover .workflow-arrow,
        .workflow-tab.active .workflow-arrow {
          color: var(--credentials-orange);
          transform: translateX(4px);
        }

        .workflow-content {
          margin-top: 18px;
          padding: 30px;
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 45px;
          align-items: center;
          border: 1px solid #e2e8f0;
          border-radius: 20px;
          background:
            radial-gradient(
              circle at 90% 10%,
              rgba(255, 101, 0, 0.05),
              transparent 30%
            ),
            #f8fafc;
          animation: contentReveal 0.45s ease;
        }

        .workflow-step-label {
          display: inline-flex;
          padding: 5px 9px;
          border-radius: 5px;
          background: #fff1e6;
          color: var(--credentials-orange);
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.6px;
          margin-bottom: 15px;
        }

        .workflow-details h3 {
          margin: 0 0 12px;
          color: #0f172a;
          font-family: var(--font-montserrat), sans-serif;
          font-size: 27px;
          font-weight: 800;
        }

        .workflow-path {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          max-width: 100%;
          padding: 7px 10px;
          border: 1px solid #e2e8f0;
          border-radius: 7px;
          background: #ffffff;
          color: #475569;
          font-family: monospace;
          font-size: 10px;
        }

        .workflow-path span {
          color: var(--credentials-orange);
        }

        .workflow-details ul {
          display: flex;
          flex-direction: column;
          gap: 14px;
          padding: 0;
          margin: 27px 0 0;
          list-style: none;
        }

        .workflow-details li {
          display: flex;
          gap: 10px;
          align-items: flex-start;
        }

        .workflow-details li > span {
          width: 20px;
          height: 20px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 1px;
          border-radius: 50%;
          background: #dcfce7;
          color: #16a34a;
          font-size: 9px;
          font-weight: 800;
        }

        .workflow-details li p {
          margin: 0;
          color: #475569;
          font-size: 12.5px;
          line-height: 1.6;
        }

        .workflow-image-wrapper {
          padding: 9px;
          overflow: hidden;
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          background: #ffffff;
          box-shadow: 0 18px 40px rgba(15, 23, 42, 0.07);
          transition: transform 0.35s ease;
        }

        .workflow-image-wrapper:hover {
          transform: translateY(-5px);
        }

        .browser-bar {
          height: 31px;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 0 10px;
          border-bottom: 1px solid #f1f5f9;
        }

        .browser-dots {
          display: flex;
          gap: 4px;
        }

        .browser-dots span {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #cbd5e1;
        }

        .browser-title {
          color: #94a3b8;
          font-size: 8px;
          font-weight: 700;
        }

        .workflow-image {
          position: relative;
          width: 100%;
          height: 300px;
          overflow: hidden;
          border-radius: 8px;
          background: #f8fafc;
        }

        .image-caption {
          padding: 9px 4px 3px;
          text-align: center;
          color: #94a3b8;
          font-size: 9px;
          font-weight: 600;
        }

        /* =====================================================
           BENEFITS
        ===================================================== */

        .benefits-section {
          padding: 110px 0;
          background: #f8fafc;
          border-top: 1px solid #e2e8f0;
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
          margin-top: 55px;
        }

        .benefit-card {
          position: relative;
          min-height: 260px;
          padding: 27px;
          overflow: hidden;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          background: #ffffff;
          transition:
            transform 0.3s cubic-bezier(0.16, 1, 0.3, 1),
            box-shadow 0.3s ease,
            border-color 0.3s ease;
        }

        .benefit-card::after {
          content: "";
          position: absolute;
          width: 120px;
          height: 120px;
          right: -45px;
          bottom: -45px;
          border-radius: 50%;
          background: rgba(255, 101, 0, 0.05);
          transition: transform 0.35s ease;
        }

        .benefit-card:hover {
          transform: translateY(-7px);
          border-color: rgba(255, 101, 0, 0.35);
          box-shadow: 0 20px 40px rgba(15, 23, 42, 0.08);
        }

        .benefit-card:hover::after {
          transform: scale(1.7);
        }

        .benefit-icon {
          width: 45px;
          height: 45px;
          margin-bottom: 25px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          background: #fff1e6;
          color: var(--credentials-orange);
          font-size: 18px;
          font-weight: 800;
          transition:
            transform 0.3s ease,
            background 0.3s ease;
        }

        .benefit-card:hover .benefit-icon {
          transform: rotate(-5deg) scale(1.08);
          background: var(--credentials-orange);
          color: white;
        }

        .benefit-card > span {
          color: #cbd5e1;
          font-size: 10px;
          font-weight: 800;
        }

        .benefit-card h3 {
          margin: 8px 0 8px;
          color: #0f172a;
          font-family: var(--font-montserrat), sans-serif;
          font-size: 19px;
          font-weight: 800;
        }

        .benefit-card p {
          max-width: 310px;
          margin: 0;
          color: #64748b;
          font-size: 12.5px;
          line-height: 1.7;
        }

        /* =====================================================
           CLR
        ===================================================== */

        .clr-section {
          padding: 110px 0;
          background: #ffffff;
        }

        .clr-card {
          position: relative;
          display: grid;
          grid-template-columns: 1fr 0.8fr;
          gap: 60px;
          align-items: center;
          overflow: hidden;
          padding: 50px;
          border: 1px solid #fed7aa;
          border-radius: 24px;
          background:
            radial-gradient(
              circle at 90% 20%,
              rgba(37, 99, 235, 0.08),
              transparent 30%
            ),
            linear-gradient(
              135deg,
              #fff7ed,
              #ffffff 55%,
              #eff6ff
            );
        }

        .clr-glow {
          position: absolute;
          width: 260px;
          height: 260px;
          left: -100px;
          bottom: -130px;
          border-radius: 50%;
          background: rgba(255, 101, 0, 0.08);
          filter: blur(20px);
        }

        .clr-content {
          position: relative;
          z-index: 2;
        }

        .clr-content h2 {
          margin: 10px 0 14px;
          font-family: var(--font-montserrat), sans-serif;
          font-size: clamp(29px, 4vw, 43px);
          line-height: 1.1;
          letter-spacing: -1.2px;
          font-weight: 800;
        }

        .clr-content h2 span {
          color: var(--credentials-orange);
        }

        .clr-content > p {
          max-width: 600px;
          margin: 0 0 25px;
          color: #64748b;
          font-size: 14px;
          line-height: 1.7;
        }

        .clr-formula {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 7px;
          color: #334155;
          font-size: 11px;
          font-weight: 700;
        }

        .clr-formula span {
          padding: 7px 10px;
          border: 1px solid #cbd5e1;
          border-radius: 6px;
          background: #ffffff;
        }

        .clr-formula b {
          color: #94a3b8;
        }

        .clr-formula strong {
          padding: 7px 10px;
          border-radius: 6px;
          background: var(--credentials-orange);
          color: #ffffff;
        }

        .clr-visual {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
        }

        .clr-document {
          width: min(340px, 100%);
          padding: 23px;
          border: 1px solid #e2e8f0;
          border-radius: 15px;
          background: #ffffff;
          box-shadow: 0 25px 50px rgba(15, 23, 42, 0.11);
          transform: rotate(3deg);
          transition: transform 0.35s ease;
        }

        .clr-document:hover {
          transform: rotate(0deg) translateY(-7px);
        }

        .document-header {
          display: flex;
          gap: 12px;
          align-items: center;
        }

        .document-logo {
          width: 42px;
          height: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          background: #fff1e6;
          color: var(--credentials-orange);
          font-size: 18px;
          font-weight: 900;
        }

        .document-header small {
          display: block;
          margin-bottom: 3px;
          color: #94a3b8;
          font-size: 7px;
          font-weight: 800;
          letter-spacing: 1px;
        }

        .document-header strong {
          display: block;
          color: #0f172a;
          font-size: 11px;
        }

        .document-line {
          height: 6px;
          width: 70%;
          margin-top: 18px;
          border-radius: 999px;
          background: #f1f5f9;
        }

        .document-line.large {
          width: 90%;
          height: 8px;
          background: #e2e8f0;
        }

        .document-line.short {
          width: 48%;
        }

        .document-badges {
          display: flex;
          gap: 5px;
          margin-top: 22px;
        }

        .document-badges span {
          padding: 5px 7px;
          border-radius: 4px;
          background: #fff7ed;
          color: #ea580c;
          font-size: 6px;
          font-weight: 800;
        }

        .document-verified {
          margin-top: 20px;
          padding-top: 13px;
          border-top: 1px solid #f1f5f9;
          color: #16a34a;
          font-size: 8px;
          font-weight: 800;
        }

        /* =====================================================
           STANDARDS
        ===================================================== */

        .standards-section {
          padding: 100px 0;
          background: #f8fafc;
          border-top: 1px solid #e2e8f0;
        }

        .standards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 17px;
          margin-top: 55px;
        }

        .standard-card {
          padding: 27px;
          border: 1px solid #e2e8f0;
          border-radius: 15px;
          background: #ffffff;
          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease,
            border-color 0.3s ease;
        }

        .standard-card:hover {
          transform: translateY(-5px);
          border-color: #fdba74;
          box-shadow: 0 17px 35px rgba(15, 23, 42, 0.07);
        }

        .standard-number {
          margin-bottom: 35px;
          color: #cbd5e1;
          font-size: 10px;
          font-weight: 800;
        }

        .standard-card h3 {
          margin: 0 0 8px;
          color: #0f172a;
          font-family: var(--font-montserrat), sans-serif;
          font-size: 17px;
          font-weight: 800;
        }

        .standard-card p {
          min-height: 63px;
          margin: 0 0 17px;
          color: #64748b;
          font-size: 12px;
          line-height: 1.7;
        }

        .standard-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .standard-tags span {
          padding: 5px 8px;
          border-radius: 5px;
          background: #f1f5f9;
          color: #475569;
          font-size: 9px;
          font-weight: 700;
        }

        /* =====================================================
           CTA
        ===================================================== */

        .final-cta {
          position: relative;
          padding: 120px 0;
          overflow: hidden;
          text-align: center;
          background:
            radial-gradient(
              circle at 50% 0%,
              rgba(255, 101, 0, 0.12),
              transparent 35%
            ),
            #ffffff;
        }

        .cta-orb {
          position: absolute;
          width: 350px;
          height: 350px;
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
          border: 1px solid rgba(255, 101, 0, 0.1);
          border-radius: 50%;
          animation: slowPulse 5s ease-in-out infinite;
        }

        .cta-content {
          position: relative;
          z-index: 2;
          max-width: 720px;
          margin: 0 auto;
        }

        .cta-content h2 {
          margin: 13px 0 14px;
          font-family: var(--font-montserrat), sans-serif;
          font-size: clamp(34px, 5vw, 52px);
          line-height: 1.08;
          font-weight: 800;
          letter-spacing: -1.8px;
        }

        .cta-content h2 span {
          color: var(--credentials-orange);
        }

        .cta-content p {
          max-width: 570px;
          margin: 0 auto 30px;
          color: #64748b;
          font-size: 14px;
          line-height: 1.7;
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          min-height: 49px;
          padding: 0 27px;
          border-radius: 9px;
          background: var(--credentials-orange);
          color: #ffffff;
          text-decoration: none;
          font-size: 13px;
          font-weight: 800;
          box-shadow: 0 12px 30px rgba(255, 101, 0, 0.22);
          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease;
        }

        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 18px 38px rgba(255, 101, 0, 0.3);
        }

        .cta-button span {
          transition: transform 0.25s ease;
        }

        .cta-button:hover span {
          transform: translateX(4px);
        }

        /* =====================================================
           ANIMATIONS
        ===================================================== */

        @keyframes credentialFloat {
          0%,
          100% {
            transform: translateY(0) rotateY(-5deg)
              rotateX(2deg);
          }

          50% {
            transform: translateY(-13px) rotateY(-5deg)
              rotateX(2deg);
          }
        }

        @keyframes statusFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes rotateRing {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        @keyframes scrollPulse {
          0%,
          100% {
            opacity: 0.35;
            transform: scale(0.8);
          }

          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }

        @keyframes contentReveal {
          from {
            opacity: 0;
            transform: translateY(8px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slowPulse {
          0%,
          100% {
            transform: translateX(-50%) scale(0.95);
            opacity: 0.6;
          }

          50% {
            transform: translateX(-50%) scale(1.08);
            opacity: 1;
          }
        }

        /* =====================================================
           RESPONSIVE
        ===================================================== */

        @media (max-width: 1100px) {
          .credentials-hero-content {
            width: min(100% - 50px, 1100px);
            grid-template-columns: 1fr;
            text-align: center;
            gap: 30px;
          }

          .hero-copy {
            max-width: 800px;
            margin: 0 auto;
          }

          .hero-copy > p {
            margin-left: auto;
            margin-right: auto;
          }

          .hero-actions,
          .hero-proof-row {
            justify-content: center;
          }

          .hero-visual {
            min-height: 400px;
          }

          .wallet-layout {
            grid-template-columns: 1fr;
          }

          .wallet-side-copy {
            max-width: 650px;
            margin: 0 auto;
            text-align: center;
          }

          .wallet-feature-list {
            max-width: 500px;
            margin: 0 auto;
            text-align: left;
          }
        }

        @media (max-width: 900px) {
          .workflow-tabs {
            grid-template-columns: repeat(2, 1fr);
          }

          .workflow-content {
            grid-template-columns: 1fr;
          }

          .benefits-grid,
          .standards-grid {
            grid-template-columns: 1fr;
          }

          .benefit-card {
            min-height: auto;
          }

          .clr-card {
            grid-template-columns: 1fr;
          }

          .clr-visual {
            margin-top: 10px;
          }

          .intro-container {
            grid-template-columns: 1fr;
            gap: 25px;
          }
        }

        @media (max-width: 680px) {
          .section-container {
            width: min(100% - 30px, 1240px);
          }

          .credentials-hero-content {
            width: calc(100% - 30px);
            padding: 70px 10px;
          }

          .credentials-hero {
            min-height: auto;
          }

          .hero-copy h1 {
            font-size: 40px;
            letter-spacing: -1.7px;
          }

          .hero-copy > p {
            font-size: 14px;
          }

          .hero-proof-row {
            gap: 10px 15px;
          }

          .hero-visual {
            min-height: 340px;
          }

          .hero-credential-card {
            width: 94%;
            padding: 18px;
          }

          .floating-status {
            display: none;
          }

          .ring-one {
            width: 310px;
            height: 310px;
          }

          .ring-two {
            width: 250px;
            height: 250px;
          }

          .credential-intro,
          .wallet-section,
          .workflow-section,
          .benefits-section,
          .clr-section,
          .standards-section,
          .final-cta {
            padding: 75px 0;
          }

          .wallet-layout {
            margin-top: 45px;
          }

          .carousel-track {
            height: 360px;
          }

          .carousel-stacked-card {
            left: calc(50% - 45%) !important;
            max-width: 90% !important;
          }

          .carousel-stacked-card[style*="translateX(54%)"] {
            transform: translateX(30%) scale(0.82) !important;
          }

          .carousel-stacked-card[style*="translateX(-54%)"] {
            transform: translateX(-30%) scale(0.82) !important;
          }

          .workflow-tabs {
            grid-template-columns: 1fr;
          }

          .workflow-content {
            padding: 18px;
          }

          .workflow-image {
            height: 220px;
          }

          .clr-card {
            padding: 28px 22px;
          }

          .clr-formula {
            gap: 5px;
          }

          .clr-formula span,
          .clr-formula strong {
            padding: 6px 7px;
            font-size: 9px;
          }

          .hero-scroll-indicator {
            display: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </main>
  );
}