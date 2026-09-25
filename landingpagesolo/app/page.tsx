"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavBar from "./components/NavBar";
import FadeInSection from "./components/FadeInSection";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import { successStories } from "./data/successStories";
import { opportunities } from "./data/opportunties";

export default function Home() {
  const [activeJourneyPhase, setActiveJourneyPhase] = useState("profile");

  return (
    <main>
      <NavBar />

      {/* ========================= HERO ========================= */}
      <section className="hero">
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />

        <FadeInSection>
          <div className="hero-content hero-content-v2">
            <a href="/profile" className="floating-pill pill-learner">
              <span className="pill-icon pill-orange">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3 2 9l10 6 10-6-10-6Z" /><path d="M6 12v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5" />
                </svg>
              </span>
              <span className="pill-text"><strong>Learner</strong><small>Build your profile</small></span>
              <span className="pill-chevron">›</span>
            </a>

            <a href="/credential" className="floating-pill pill-verified">
              <span className="pill-icon pill-green">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2 4 5v6c0 5 3.5 9 8 11 4.5-2 8-6 8-11V5l-8-3Z" /><path d="m8.5 12 2.5 2.5L16 9" />
                </svg>
              </span>
              <span className="pill-text"><strong>Verified Profile</strong><small>Get verified credentials</small></span>
              <span className="pill-chevron">›</span>
            </a>

            <a href="#" className="floating-pill pill-community">
              <span className="pill-icon pill-purple">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="9" cy="8" r="3" /><path d="M2 20c.6-3.2 2.7-5 7-5s6.4 1.8 7 5" />
                  <circle cx="17" cy="9" r="2.3" /><path d="M16 14.2c2.9.4 4.3 1.8 4.8 4" />
                </svg>
              </span>
              <span className="pill-text"><strong>Community</strong><small>Learn &amp; grow</small></span>
              <span className="pill-chevron">›</span>
            </a>

            <a href="#" className="floating-pill pill-institutions">
              <span className="pill-icon pill-indigo">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 21h16M4 21V9l8-5 8 5v12M9 21v-7h6v7" />
                </svg>
              </span>
              <span className="pill-text"><strong>Institutions</strong><small>Manage your programs</small></span>
              <span className="pill-chevron">›</span>
            </a>

            <a href="/explore?type=Jobs" className="floating-pill pill-opportunities">
              <span className="pill-icon pill-coral">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /><path d="M3 13h18" />
                </svg>
              </span>
              <span className="pill-text"><strong>Opportunities</strong><small>Hire top talent</small></span>
              <span className="pill-chevron">›</span>
            </a>

            <a href="#" className="floating-pill pill-collaborate">
              <span className="pill-icon pill-teal">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m12 3 2.6 5.5 6 .8-4.4 4.2 1.1 6-5.3-3-5.3 3 1.1-6L3.4 9.3l6-.8L12 3Z" />
                </svg>
              </span>
              <span className="pill-text"><strong>Collaborate</strong><small>Build together</small></span>
              <span className="pill-chevron">›</span>
            </a>

            <div className="hero-text hero-text-centered">
              <p className="hero-label">LEARN • PROVE • ADVANCE</p>

              <h1>
                Turn What You Learn Into
                <span> Proof of What You Can Do.</span>
              </h1>

              <p className="hero-description">
                SOLO bridges learning and employment by turning your courses,
                projects, and certificates into verified credentials,
                ATS-ready resumes, and real career opportunities.
              </p>

              <div className="hero-buttons">
                <a href="/signup" className="hero-primary">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* ========================= YOUR JOURNEY ========================= */}
      <FadeInSection>
        <section className="solo-journey-section" id="journey">
          <div className="solo-journey-wrapper">
            <div className="section-heading center solo-journey-heading">
              <p className="section-label">YOUR JOURNEY</p>
              <h2>
                Your Journey. Your Growth.
                <span> Your Future.</span>
              </h2>
              <p>
                SOLO helps learners build a trusted profile and move toward
                the right opportunities.
              </p>
            </div>

            <div className="roadmap-progress-rail">
              {[
                { id: "profile", num: "01", label: "PROFILE", accent: "orange" },
                { id: "discover", num: "02", label: "DISCOVER", accent: "blue" },
                { id: "achieve", num: "03", label: "ACHIEVE", accent: "gold" },
                { id: "grow", num: "04", label: "GROW", accent: "coral" },
              ].map((phase, i, arr) => (
                <span key={phase.id} style={{ display: "flex", alignItems: "flex-start" }}>
                  <button
                    type="button"
                    className={`progress-node accent-${phase.accent} ${
                      activeJourneyPhase === phase.id ? "active" : ""
                    } ${
                      arr.findIndex((p) => p.id === activeJourneyPhase) > i ? "done" : ""
                    }`}
                    onClick={() => setActiveJourneyPhase(phase.id)}
                  >
                    <span className="progress-node-circle">{phase.num}</span>
                    <span className="progress-node-label">{phase.label}</span>
                  </button>
                  {i < arr.length - 1 && (
                    <span
                      className={`progress-connector ${
                        arr.findIndex((p) => p.id === activeJourneyPhase) > i ? "filled" : ""
                      }`}
                    />
                  )}
                </span>
              ))}
            </div>

            <div className="solo-roadmap">
              {activeJourneyPhase === "profile" && (
                <div className="solo-roadmap-phase accent-orange phase-open">
                  <button
                    type="button"
                    className="roadmap-phase-header"
                    onClick={() => setActiveJourneyPhase("profile")}
                  >
                    <div className="roadmap-phase-title">
                      <div className="roadmap-phase-number">01</div>
                      <div>
                        <span className="roadmap-phase-label">PROFILE</span>
                        <h3>Build your foundation</h3>
                      </div>
                    </div>
                    <p className="roadmap-phase-desc">
                      Create your trusted professional identity.
                    </p>
                  </button>

                  <div className="roadmap-steps-wrapper steps-open">
                    <div className="roadmap-steps">
                      <div className="roadmap-step">
                        <span className="step-number">01</span>
                        <div className="step-icon">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="8" r="3.5" />
                            <path d="M5 20c.8-3.7 3.1-5.5 7-5.5s6.2 1.8 7 5.5" />
                          </svg>
                        </div>
                        <div className="step-body">
                          <h4>Sign Up</h4>
                          <p>Create your SOLO account and begin your professional journey.</p>
                        </div>
                      </div>

                      <div className="roadmap-step">
                        <span className="step-number">02</span>
                        <div className="step-icon">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M6 3h9l4 4v14H6z" />
                            <path d="M14 3v5h5" />
                            <path d="M9 12h6M9 15h5M9 18h4" />
                          </svg>
                        </div>
                        <div className="step-body">
                          <h4>Add Profile</h4>
                          <p>Import your resume or manually build your professional profile.</p>
                        </div>
                      </div>

                      <div className="roadmap-step">
                        <span className="step-number">03</span>
                        <div className="step-icon">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="3" />
                            <circle cx="5" cy="7" r="2" />
                            <circle cx="19" cy="7" r="2" />
                            <circle cx="19" cy="18" r="2" />
                            <path d="M10 10 7 8M14 10l3-2M14 14l3 2" />
                          </svg>
                        </div>
                        <div className="step-body">
                          <h4>Understand Skills</h4>
                          <p>SOLO understands your skills and creates a clearer picture of your capabilities.</p>
                        </div>
                      </div>

                      <div className="roadmap-step">
                        <span className="step-number">04</span>
                        <div className="step-icon">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20.5 8.8c0 5-8.5 10-8.5 10s-8.5-5-8.5-10A4.6 4.6 0 0 1 12 6.2a4.6 4.6 0 0 1 8.5 2.6Z" />
                            <path d="M17 13.5v4M15 15.5h4" />
                          </svg>
                        </div>
                        <div className="step-body">
                          <h4>Add Interests</h4>
                          <p>Add your interests and preferences to make your journey more relevant.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeJourneyPhase === "discover" && (
                <div className="solo-roadmap-phase accent-blue phase-open">
                  <button
                    type="button"
                    className="roadmap-phase-header"
                    onClick={() => setActiveJourneyPhase("discover")}
                  >
                    <div className="roadmap-phase-title">
                      <div className="roadmap-phase-number">02</div>
                      <div>
                        <span className="roadmap-phase-label">DISCOVER</span>
                        <h3>Find the right opportunities</h3>
                      </div>
                    </div>
                    <p className="roadmap-phase-desc">
                      Discover opportunities matched to your interests.
                    </p>
                  </button>

                  <div className="roadmap-steps-wrapper steps-open">
                    <div className="roadmap-steps">
                      <div className="roadmap-step">
                        <span className="step-number">05</span>
                        <div className="step-icon">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="4" y="4" width="16" height="16" rx="3" />
                            <path d="M8 9h4M8 13h4M8 17h7" />
                            <circle cx="17" cy="9" r="1.5" />
                          </svg>
                        </div>
                        <div className="step-body">
                          <h4>Recommendations</h4>
                          <p>Discover relevant courses, internships, and jobs based on your profile.</p>
                        </div>
                      </div>

                      <div className="roadmap-step">
                        <span className="step-number">06</span>
                        <div className="step-icon">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="4" y="4" width="16" height="16" rx="3" />
                            <path d="m8 12 3 3 5-6" />
                          </svg>
                        </div>
                        <div className="step-body">
                          <h4>Enroll &amp; Complete</h4>
                          <p>Enroll in relevant opportunities and complete them to build real experience.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeJourneyPhase === "achieve" && (
                <div className="solo-roadmap-phase accent-gold phase-open">
                  <button
                    type="button"
                    className="roadmap-phase-header"
                    onClick={() => setActiveJourneyPhase("achieve")}
                  >
                    <div className="roadmap-phase-title">
                      <div className="roadmap-phase-number">03</div>
                      <div>
                        <span className="roadmap-phase-label">ACHIEVE</span>
                        <h3>Turn your work into proof</h3>
                      </div>
                    </div>
                    <p className="roadmap-phase-desc">
                      Verify your achievements and showcase your progress.
                    </p>
                  </button>

                  <div className="roadmap-steps-wrapper steps-open">
                    <div className="roadmap-steps">
                      <div className="roadmap-step">
                        <span className="step-number">07</span>
                        <div className="step-icon">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M6 3h9l4 4v14H6z" />
                            <path d="M14 3v5h5" />
                            <path d="M9 13h5M9 16h4" />
                            <circle cx="18" cy="18" r="3" />
                          </svg>
                        </div>
                        <div className="step-body">
                          <h4>Submit Certificate</h4>
                          <p>Submit your certificate so your achievement can be verified.</p>
                        </div>
                      </div>

                      <div className="roadmap-step">
                        <span className="step-number">08</span>
                        <div className="step-icon">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 3 20 6v6c0 4.4-3.2 7.8-8 9-4.8-1.2-8-4.6-8-9V6z" />
                            <path d="m8.5 12 2.2 2.2 4.8-5" />
                          </svg>
                        </div>
                        <div className="step-body">
                          <h4>Earn Verified Badge</h4>
                          <p>Receive a verifiable badge that represents your achievement.</p>
                        </div>
                      </div>

                      <div className="roadmap-step">
                        <span className="step-number">09</span>
                        <div className="step-icon">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="6" cy="12" r="2.5" />
                            <circle cx="18" cy="6" r="2.5" />
                            <circle cx="18" cy="18" r="2.5" />
                            <path d="m8.2 10.8 7.5-3.7M8.2 13.2l7.5 3.7" />
                          </svg>
                        </div>
                        <div className="step-body">
                          <h4>Share Credentials</h4>
                          <p>Share your verified credentials and professional profile with others.</p>
                        </div>
                      </div>

                      <div className="roadmap-step">
                        <span className="step-number">10</span>
                        <div className="step-icon">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="5" y="3" width="14" height="18" rx="2" />
                            <circle cx="10" cy="9" r="2" />
                            <path d="M13 8h3M13 11h3M8 15h8M8 18h5" />
                          </svg>
                        </div>
                        <div className="step-body">
                          <h4>Build Resume</h4>
                          <p>Turn your profile, skills, and achievements into a professional resume.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeJourneyPhase === "grow" && (
                <div className="solo-roadmap-phase accent-coral phase-open">
                  <button
                    type="button"
                    className="roadmap-phase-header"
                    onClick={() => setActiveJourneyPhase("grow")}
                  >
                    <div className="roadmap-phase-title">
                      <div className="roadmap-phase-number">04</div>
                      <div>
                        <span className="roadmap-phase-label">GROW</span>
                        <h3>Keep moving forward</h3>
                      </div>
                    </div>
                    <p className="roadmap-phase-desc">
                      Compare your skills and define your next career goal.
                    </p>
                  </button>

                  <div className="roadmap-steps-wrapper steps-open">
                    <div className="roadmap-steps">
                      <div className="roadmap-step">
                        <span className="step-number">11</span>
                        <div className="step-icon">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 19V9M10 19V5M16 19v-8M22 19V3" />
                            <path d="m5 7 5-3 6 4 5-4" />
                          </svg>
                        </div>
                        <div className="step-body">
                          <h4>Compare to Job Roles</h4>
                          <p>Compare your profile and skills against relevant job roles.</p>
                        </div>
                      </div>

                      <div className="roadmap-step">
                        <span className="step-number">12</span>
                        <div className="step-icon">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="8" />
                            <circle cx="12" cy="12" r="4" />
                            <path d="m16 8 5-5M21 3h-4M21 3v4" />
                          </svg>
                        </div>
                        <div className="step-body">
                          <h4>Set Career Goals</h4>
                          <p>Set target roles and career goals for your next stage of growth.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* ========================= OPPORTUNITIES ========================= */}
      <section
        className="opportunities-section"
        style={{
          background: "#fffaf5",
          padding: "75px 0 80px",
          overflow: "hidden",
          borderBottom: "1px solid #f1e8df",
        }}
      >
        <FadeInSection>
          <div
            id="explore"
            style={{
              maxWidth: "1280px",
              margin: "0 auto 38px",
              padding: "0 20px",
            }}
          >
            <div
              className="section-heading center"
              style={{ margin: "0 auto" }}
            >
              <p className="section-label">EXPLORE OPPORTUNITIES</p>

              <h2>
                Opportunities that <span>move you forward.</span>
              </h2>

              <p>
                Discover experiences that help you learn, build, and prepare for
                your career.
              </p>
            </div>
          </div>

          <div className="marquee-wrapper" style={{ padding: "20px 0" }}>
            <div className="marquee-track">
              {[...opportunities, ...opportunities].map((item, index) => (
                <div key={index} className="opportunity-card-compact">
                  <div className="compact-card-content">
                    <div className="compact-card-header">
                      <div className="compact-avatar">
                        <Image
                          src="/images/profilepic.png"
                          alt="Organization logo"
                          width={32}
                          height={32}
                          style={{ borderRadius: "50%" }}
                        />
                      </div>

                      <div className="compact-title-col">
                        <h3>{item.title}</h3>
                        <p>{item.organization}</p>
                      </div>
                    </div>

                    <div className="compact-tags-row">
                      <span className="skills-badge">
                        {item.skills.length} Skills
                      </span>

                      <span className="type-badge">{item.type}</span>

                      <span className="posted-badge">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2C6.58 2 2 6.58 2 12s4.58 10 10 10 10-4.58 10-10S17.42 2 12 2m0 18c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8-3.66 8-8 8"></path>
                          <path d="M13 7h-2v6h6v-2h-4z"></path>
                        </svg>

                        {item.posted}
                      </span>
                    </div>

                    <div className="compact-details-row">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="13"
                          height="13"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 15c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 2-2 2-2"></path>
                          <path d="M11.65 21.94a1.03 1.03 0 0 0 .7 0C12.7 21.81 21 18.61 21 11c0-4.96-4.04-9-9-9s-9 4.04-9 9c0 7.6 8.3 10.8 8.65 10.94M12 4c3.86 0 7 3.14 7 7 0 5.42-5.53 8.26-7 8.91-1.47-.66-7-3.5-7-8.91 0-3.86 3.14-7 7-7"></path>
                        </svg>

                        {item.location}
                      </span>

                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="13"
                          height="13"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 7h-1.4L18 5.4V3c0-.55-.45-1-1-1h-1c-1.44 0-2.75.78-3.45 2H9c-3.86 0-7 3.14-7 7 0 .25.02 6.28 2.11 10.45A1 1 0 0 0 5 22h4c.55 0 1-.45 1-1v-3h2v3c0 .55.45 1 1 1h4c.33 0 .65-.17.83-.45 1.54-2.31 2.08-5.11 2.27-6.55h.9c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1m-1 6h-.81c-.53 0-.97.42-1 .95 0 .04-.19 3.38-1.75 6.05h-2.45v-3c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v3H5.63c-1.61-3.73-1.64-8.95-1.64-9 0-2.76 2.24-5 5-5h4.18c.42 0 .8-.27.94-.67A1.99 1.99 0 0 1 15.98 4v1.81c0 .27.11.52.29.71l2.19 2.19c.19.19.44.29.71.29h.81v4Z"></path>
                        </svg>

                        {item.payment}
                      </span>
                    </div>

                    <div className="compact-action-row">
                      <a href="https://app.thesolo.network/" className="view-btn">
                        View more
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              textAlign: "center",
              marginTop: "38px",
            }}
          >
            <Link
              href="/explore"
              className="hero-primary"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "12px 28px",
                borderRadius: "8px",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: "700",
              }}
            >
              Explore More
            </Link>
          </div>
        </FadeInSection>
      </section>

      {/* ========================= CAREER PATHWAYS ========================= */}
      <FadeInSection>
        <section
          className="career-pathway-explorer"
          style={{
            padding: "80px 20px",
            background: "#ffffff",
            borderTop: "1px solid #eef2f6",
            borderBottom: "1px solid #eef2f6",
          }}
        >
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <div className="section-heading center">
              <p className="section-label">STRUCTURED CAREER PATHWAYS</p>

              <h2>
                Explore guided paths from <span>curiosity to career.</span>
              </h2>

              <p>
                Follow structured learning pathways with interlinked digital
                course badges to systematically build and verify in-demand
                competencies.
              </p>
            </div>

            <div className="display-browser-frame frame-wide">
              <div className="browser-topbar">
                <div className="browser-dots">
                  <span className="dot-standard" />
                  <span className="dot-standard" />
                  <span className="dot-standard" />
                </div>
              </div>

              <div
                style={{
                  background: "radial-gradient(#d1d5db 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                  backgroundColor: "#fafaf9",
                  padding: "40px 24px",
                  overflowX: "auto",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    minWidth: "900px",
                    gap: "12px",
                    position: "relative",
                  }}
                >
                  {[
                    {
                      name: "ReactJS",
                      badge: "◇ academia",
                      type: "Coursework",
                      color: "#0284c7",
                    },
                    {
                      name: "React Fundamentals",
                      badge: "◇ academia",
                      type: "Skills Validation",
                      color: "#7c3aed",
                    },
                    {
                      name: "React Redux Toolkit",
                      badge: "◇ academia",
                      type: "Coursework",
                      color: "#0284c7",
                    },
                    {
                      name: "RTK Query Basics",
                      badge: "◇ academia",
                      type: "Coursework",
                      color: "#0284c7",
                    },
                    {
                      name: "Redux & RTK Query",
                      badge: "◇ academia",
                      type: "Skills Validation",
                      color: "#7c3aed",
                    },
                    {
                      name: "NextJS",
                      badge: "◇ academia",
                      type: "Coursework",
                      color: "#0284c7",
                    },
                  ].map((node, i, arr) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        flex: 1,
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
                          position: "relative",
                        }}
                      >
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
                            borderRadius: "10px",
                          }}
                        >
                          Earned
                        </span>

                        <div
                          style={{
                            width: "52px",
                            height: "52px",
                            borderRadius: "50%",
                            border: `2.5px solid ${node.color}`,
                            margin: "0 auto 10px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            background: "#ffffff",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "6px",
                              color: node.color,
                              fontWeight: "700",
                            }}
                          >
                            {node.badge}
                          </span>

                          <span
                            style={{
                              fontSize: "7px",
                              color: "#1e293b",
                              fontWeight: "700",
                            }}
                          >
                            Credential
                          </span>

                          <span
                            style={{
                              fontSize: "6px",
                              background: node.color,
                              color: "#ffffff",
                              width: "100%",
                              textAlign: "center",
                              marginTop: "2px",
                            }}
                          >
                            {node.type}
                          </span>
                        </div>

                        <h4
                          style={{
                            margin: 0,
                            fontSize: "12px",
                            fontWeight: "700",
                            color: "#0f172a",
                          }}
                        >
                          {node.name}
                        </h4>
                      </div>

                      {i < arr.length - 1 && (
                        <div
                          style={{
                            width: "24px",
                            height: "2px",
                            background: "#cbd5e1",
                            flexShrink: 0,
                            margin: "0 4px",
                          }}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "32px",
              }}
            >
              <Link href="/pathways" className="section-button">
                Learn More
              </Link>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* ========================= PROFILE ========================= */}
      <FadeInSection>
        <section
          className="profile-section"
          style={{
            borderBottom: "1px solid #eef2f6",
          }}
        >
          <div className="profile-text">
            <p className="section-label">YOUR PROFESSIONAL IDENTITY</p>

            <h2>
              More than a resume. <span>A profile that grows with you.</span>
            </h2>

            <p className="section-description-text">
              Build a dynamic professional profile that brings together your
              education, skills, projects, internships, experiences,
              achievements and credentials.
            </p>

            <ul>
              <li>
                ✓ Import your existing resume or fill your profile manually
              </li>
              <li>
                ✓ Add skills and career interests for personalized
                recommendations
              </li>
              <li>
                ✓ Showcase coursework, live projects, internships, and
                volunteering
              </li>
              <li>
                ✓ Submit certificates and receive verifiable digital badges
              </li>
              <li>✓ Generate an ATS-ready resume with embedded proof</li>
            </ul>

            <Link href="/profile" className="section-button">
              Learn More
            </Link>
          </div>

          <div className="display-browser-frame">
            <div className="browser-topbar">
              <div className="browser-dots">
                <span className="dot-standard" />
                <span className="dot-standard" />
                <span className="dot-standard" />
              </div>
            </div>

            <div className="browser-screenshot-container">
              <Image
                src="/images/profile/profile-overview.png"
                alt="SOLO Professional Profile and Skills Verification Interface"
                width={1200}
                height={800}
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                }}
                priority
              />
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* ========================= CREDENTIALS ========================= */}
      <FadeInSection>
        <section
          className="credentials-section"
          style={{
            borderBottom: "1px solid #eef2f6",
          }}
        >
          <div className="credential-text">
            <p className="section-label">VERIFIED ACHIEVEMENTS</p>

            <h2>
              Turn your learning into <span>trusted proof.</span>
            </h2>

            <p className="section-description-text">
              Your achievements shouldn&apos;t disappear inside a folder of
              certificates. SOLO turns learning experiences into verifiable
              digital credentials and Open Badges that you can showcase.
            </p>

            <div style={{ marginTop: "24px" }}>
              <Link href="/credential" className="section-button">
                Learn More
              </Link>
            </div>
          </div>

          <div className="display-browser-frame">
            <div className="browser-topbar">
              <div className="browser-dots">
                <span className="dot-standard" />
                <span className="dot-standard" />
                <span className="dot-standard" />
              </div>
            </div>

            <div className="browser-screenshot-container">
              <Image
                src="/images/cred1.png"
                alt="SOLO Verified Achievement Badge and Credential Detail Interface"
                width={1200}
                height={800}
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                }}
              />
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* ========================= REAL-TIME SKILL GAP ========================= */}
      <FadeInSection>
        <section className="job-skill-gap-section" style={{ padding: "95px 20px", background: "#f8fafc", borderBottom: "1px solid #eef2f6" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <div className="section-heading center" style={{ textAlign: "center", margin: "0 auto 50px" }}>
              <p className="section-label">GROWTH & CAREER READINESS</p>
              <h2>
                Target Opportunities with <span>Skill Gap Analysis</span>
              </h2>
              <p style={{ maxWidth: "760px", margin: "0 auto", color: "#64748b", fontSize: "15px", lineHeight: "1.7" }}>
                SOLO benchmarks your sovereign profile directly against live employer requirements. Review the three evaluation tiers and your qualification curve before hitting apply.
              </p>
            </div>

            <div className="gap-side-by-side-grid">
              <div className="gap-content-column">
                <div className="role-headline-box">
                  <span className="role-context-badge">Active Benchmark: Javascript Developer</span>
                  <h3>Three-Tier Skill Compatibility Framework</h3>
                  <p>
                    Every opportunity breaks your abilities down into actionable insight so you never apply blindly.
                  </p>
                </div>

                <div className="tier-cards-list">
                  <div className="tier-card tier-matched">
                    <div className="tier-header">
                      <span className="tier-dot green" />
                      <strong>Matched Skills (Validated Proof)</strong>
                    </div>
                    <p>
                      Competencies fully validated by completed courses, verified credentials, and capstone project evidence that satisfy the employer criteria.
                    </p>
                    <div className="tier-examples">
                      <span>✓ Verified Course Badges</span>
                      <span>✓ Evidence Files</span>
                    </div>
                  </div>

                  <div className="tier-card tier-partial">
                    <div className="tier-header">
                      <span className="tier-dot yellow" />
                      <strong>Partially Matched Skills (In Progress)</strong>
                    </div>
                    <p>
                      Related competencies or modules you have begun. For instance, holding JavaScript fundamentals while the role requires specific framework libraries.
                    </p>
                    <div className="tier-examples">
                      <span>◐ Framework Software</span>
                      <span>◐ Partial Milestones</span>
                    </div>
                  </div>

                  <div className="tier-card tier-missing">
                    <div className="tier-header">
                      <span className="tier-dot red" />
                      <strong>Non-Matched Skills (Identified Gap)</strong>
                    </div>
                    <p>
                      Mandatory employer requirements not yet present on your record. SOLO links these directly to recommended courses to bridge the exact deficit.
                    </p>
                    <div className="tier-examples">
                      <span>✕ Specialized Libraries</span>
                      <span>✕ One-Click Enrollment</span>
                    </div>
                  </div>

                  <div className="trend-explainer-card">
                    <div className="tier-header">
                      <span className="tier-dot orange" />
                      <strong>Readiness Curve & Target Goal</strong>
                    </div>
                    <p>
                      Track your monthly match percentage trajectory as you earn badges. Set target jobs as goals to receive direct course recommendations that boost your hiring score.
                    </p>
                  </div>
                </div>

                <div className="gap-action-row">
                  <Link href="/explore?type=Jobs#opportunity" className="hero-primary" style={{ padding: "12px 24px", fontSize: "13.5px" }}>
                    Explore Active Jobs
                  </Link>
                </div>
              </div>

              <div className="gap-image-column">
                <div className="display-browser-frame compact-side-frame">
                  <div className="browser-topbar">
                    <div className="browser-dots">
                      <span className="dot-standard" />
                      <span className="dot-standard" />
                      <span className="dot-standard" />
                    </div>
                  </div>

                  <div className="side-screenshot-scrollable">
                    <Image
                      src="/images/skill-match.png"
                      alt="SOLO Platform Skill Match Analysis, Gauge Score, and Course Recommendations"
                      width={1000}
                      height={1420}
                      style={{
                        width: "100%",
                        height: "auto",
                        display: "block",
                      }}
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* ========================= COMMUNITY & SOCIAL PLATFORM ========================= */}
      <FadeInSection>
        <section className="merged-community-section" style={{ padding: "95px 20px", background: "#ffffff", borderBottom: "1px solid #eef2f6" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <div className="section-heading center" style={{ textAlign: "center", margin: "0 auto 50px" }}>
              <p className="section-label">PEER RECOGNITION & COLLABORATION</p>
              <h2>
                The SOLO Community: <span>Learn Together. Grow Together.</span>
              </h2>
              <p style={{ maxWidth: "780px", margin: "0 auto", color: "#64748b", fontSize: "15px", lineHeight: "1.7" }}>
                Professional development thrives on collaboration. Engage in real-time community feeds, share verified milestones, connect with faculty mentors, and build partnerships across the entire ecosystem.
              </p>
            </div>

            <div className="community-showcase-split">
              <div className="community-showcase-text">
                <span className="role-context-badge">Interactive Social Feed</span>
                <h3>Share Milestones & Exchange Proof</h3>
                <p>
                  Publish your latest projects, earned Open Badges, and course completion updates to your campus and professional peers. Celebrate team achievements, comment on new milestones, and gather verified recommendations.
                </p>
                <ul className="social-perks-list" style={{ marginTop: "18px" }}></ul>
              </div>

              <div className="display-browser-frame community-feed-frame">
                <div className="browser-topbar">
                  <div className="browser-dots">
                    <span className="dot-standard" />
                    <span className="dot-standard" />
                    <span className="dot-standard" />
                  </div>
                </div>

                <div className="community-screenshot-inner">
                  <Image
                    src="/images/community-feed.png"
                    alt="SOLO Social Community Platform and Peer Recommendations Interface"
                    width={1100}
                    height={520}
                    style={{
                      width: "100%",
                      height: "auto",
                      display: "block",
                    }}
                    priority
                  />
                </div>
              </div>
            </div>

            <div className="community-grid" style={{ marginTop: "55px" }}>
              <div>
                <strong>Learners</strong>
                <p>Connect, share verified credentials, and learn alongside your peers.</p>
              </div>

              <div>
                <strong>Mentors</strong>
                <p>Receive guidance from seasoned industry professionals and academic experts.</p>
              </div>

              <div>
                <strong>Institutions</strong>
                <p>Discover tailored academic programs and opportunities from partner universities.</p>
              </div>

              <div>
                <strong>Employers</strong>
                <p>Explore opportunities and showcase your verified competencies directly to recruiters.</p>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* ========================= SUCCESS STORIES ========================= */}
      <FadeInSection>
        <section
          id="success-stories"
          className="success-stories-section"
          style={{
            borderBottom: "1px solid #eef2f6",
          }}
        >
          <div className="story-heading">
            <h2>Success Stories</h2>
            <p>See how organizations are transforming with SOLO</p>
          </div>

          <div className="story-grid-wrapper">
            <Link href="/success-stories" className="story-view-all-link">
              View All →
            </Link>

            <div className="story-grid">
              {successStories.map((story) => (
                <div className="story-card" key={story.id}>
                  <div className="story-card-top">
                    <span className="story-name">{story.partnerName}</span>
                    <span className="story-tag">{story.category}</span>
                  </div>

                  <h3>{story.cardTitle}</h3>

                  <p>{story.cardDescription}</p>

                  <div className="story-card-bottom">
                    <Link
                      href={`/success-stories/${story.id}`}
                      className="story-readmore"
                    >
                      Read More
                    </Link>

                    <span className="story-logo">{story.partnerLogoText}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* ========================= FINAL CTA ========================= */}
      <FadeInSection>
        <section className="final-cta">
          <div>
            <p className="section-label">START YOUR JOURNEY</p>

            <h2>
              Your skills can take <span>you further.</span>
            </h2>

            <p>
              Build your skills. Prove what you can do. Discover where you can
              go next.
            </p>

            <a href="https://app.thesolo.network/" className="cta-button">
              Get Started →
            </a>
          </div>
        </section>
      </FadeInSection>

      <Footer />
      <BackToTop />

      {/* ========================= GLOBAL STYLES ========================= */}
      <style jsx global>{`
        .hero {
          position: relative;
          overflow: hidden;
        }

        .hero-content {
          position: relative;
          width: 100%;
        }

        .hero-content-v2 {
          position: relative;
          min-height: 560px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-text-centered {
          max-width: 700px;
          text-align: center;
          margin: 0 auto;
          position: relative;
          z-index: 3;
        }

        .hero-text-centered .hero-description {
          margin-left: auto;
          margin-right: auto;
        }

        .hero-text-centered .hero-buttons {
          justify-content: center;
        }

        /* ---------- Floating Pills (Desktop Only) ---------- */
        .floating-pill {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 11px 16px;
          min-width: 185px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.55);
          border: 1px solid rgba(255, 255, 255, 0.7);
          box-shadow: 0 10px 26px rgba(15, 23, 42, 0.05);
          backdrop-filter: blur(8px);
          text-decoration: none;
          opacity: 0.75;
          transition: opacity 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
          z-index: 1;
        }

        .floating-pill:hover {
          opacity: 1;
          transform: translateY(-4px);
          box-shadow: 0 16px 34px rgba(15, 23, 42, 0.1);
        }

        .pill-icon {
          width: 32px;
          height: 32px;
          border-radius: 10px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0.9;
        }
        .pill-icon svg { width: 17px; height: 17px; }

        .pill-orange  { background: #fff1e6; color: var(--orange); }
        .pill-green   { background: #ecfdf5; color: #10b981; }
        .pill-purple  { background: #f3f0ff; color: #7c3aed; }
        .pill-indigo  { background: #eef2ff; color: #4f46e5; }
        .pill-coral   { background: #fff0ef; color: var(--coral); }
        .pill-teal    { background: #ecfeff; color: #0d9488; }
        .pill-blue    { background: #eff6ff; color: var(--blue); }

        .pill-text { display: flex; flex-direction: column; gap: 1px; }
        .pill-text strong { font-family: var(--font-montserrat), sans-serif; font-size: 12.5px; color: #2b2f38; }
        .pill-text small { font-size: 10.5px; color: #8a8f99; }
        .pill-chevron { margin-left: auto; color: #c3c8d1; font-size: 14px; }

        .pill-learner       { top: 6%;   left: 5%; }
        .pill-verified      { top: 32%;  left: 1%; }
        .pill-community     { top: 58%;  left: 7%; }
        .pill-institutions  { top: 10%;  right: 5%; }
        .pill-opportunities { top: 36%;  right: 1%; }
        .pill-collaborate   { top: 60%;  right: 7%; }

        .hero h1 {
          font-family: var(--font-montserrat), sans-serif;
          font-size: clamp(38px, 5.2vw, 68px);
          line-height: 1.1;
          letter-spacing: -2px;
          font-weight: 800;
        }

        /* ---------- Solo Journey (Original Design Tokens) ---------- */
        .solo-journey-section {
          padding: 120px 70px;
          background: #ffffff;
        }

        .solo-journey-wrapper {
          max-width: 1250px;
          margin: 0 auto;
        }

        .solo-journey-heading {
          margin-bottom: 60px;
        }

        .accent-orange {
          --phase-accent: var(--orange);
          --phase-accent-light: var(--orange-light);
        }

        .accent-blue {
          --phase-accent: var(--blue);
          --phase-accent-light: var(--blue-light);
        }

        .accent-gold {
          --phase-accent: var(--gold);
          --phase-accent-light: var(--gold-light);
        }

        .accent-coral {
          --phase-accent: var(--coral);
          --phase-accent-light: var(--coral-light);
        }

        .roadmap-progress-rail {
          display: flex;
          align-items: flex-start;
          justify-content: center;
          gap: 0;
          width: 100%;
          max-width: 900px;
          margin: 0 auto 56px;
        }

        .progress-node {
          flex: 0 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0;
        }

        .progress-node-circle {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #fff;
          border: 2px solid var(--border);
          color: var(--text-muted);
          font-family: var(--font-montserrat), sans-serif;
          font-weight: 800;
          font-size: 13px;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .progress-node-label {
          font-family: var(--font-montserrat), sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.4px;
          color: var(--text-muted);
          transition: color 0.3s ease;
        }

        .progress-node.active .progress-node-circle {
          border-color: var(--phase-accent);
          color: var(--phase-accent);
          background: var(--phase-accent-light);
          transform: scale(1.12);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
        }

        .progress-node.active .progress-node-label,
        .progress-node.done .progress-node-label {
          color: var(--phase-accent);
        }

        .progress-node.done .progress-node-circle {
          border-color: var(--phase-accent);
          background: var(--phase-accent);
          color: #fff;
        }

        .progress-connector {
          flex: 1 1 auto;
          height: 2px;
          margin: 23px 8px 0;
          background: var(--border);
          min-width: 20px;
        }

        .progress-connector.filled {
          background: var(--orange);
        }

        .solo-roadmap {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 70px;
        }

        .solo-roadmap-phase {
          border: 1px solid var(--border);
          border-radius: 18px;
          background: #fff;
          overflow: hidden;
          transition:
            border-color 0.4s ease,
            box-shadow 0.4s ease,
            transform 0.3s ease;
        }

        .solo-roadmap-phase.phase-open {
          border-color: var(--phase-accent);
          box-shadow: 0 18px 45px rgba(23, 23, 23, 0.06);
        }

        .roadmap-phase-header {
          width: 100%;
          border: none;
          background: transparent;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          padding: 24px 28px;
          text-align: left;
        }

        .roadmap-phase-title {
          display: flex;
          align-items: center;
          gap: 18px;
        }

        .roadmap-phase-number {
          width: 50px;
          height: 50px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 14px;
          background: var(--phase-accent-light);
          color: var(--phase-accent);
          font-family: var(--font-montserrat), sans-serif;
          font-weight: 800;
          font-size: 14px;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .phase-open .roadmap-phase-number {
          transform: rotate(-8deg) scale(1.05);
        }

        .roadmap-phase-label {
          display: block;
          margin-bottom: 4px;
          font-family: var(--font-montserrat), sans-serif;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1.8px;
          color: var(--phase-accent);
        }

        .roadmap-phase-title h3 {
          margin: 0;
          font-family: var(--font-montserrat), sans-serif;
          font-size: 22px;
          font-weight: 750;
          color: var(--foreground);
        }

        .roadmap-phase-desc {
          display: none;
        }

        .roadmap-steps-wrapper {
          display: grid;
          grid-template-rows: 0fr;
          opacity: 0;
          transition:
            grid-template-rows 0.6s cubic-bezier(0.16, 1, 0.3, 1),
            opacity 0.4s ease;
        }

        .roadmap-steps-wrapper.steps-open {
          grid-template-rows: 1fr;
          opacity: 1;
        }

        .roadmap-steps-wrapper > .roadmap-steps {
          min-height: 0;
          overflow: visible;
        }

        .roadmap-steps {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
          gap: 16px;
          padding: 0 28px 28px 28px;
          padding-top: 14px;
        }

        .roadmap-step {
          position: relative;
          flex: 1 1 260px;
          width: 100%;
          min-height: 100%;
          box-sizing: border-box;
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 20px;
          border: 1px solid var(--border);
          border-radius: 14px;
          background: var(--background);
          animation: stepPopIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) both;
          transition:
            transform 0.3s cubic-bezier(0.16, 1, 0.3, 1),
            box-shadow 0.3s ease,
            border-color 0.3s ease;
        }

        .roadmap-step:hover {
          transform: translateY(-4px);
          border-color: var(--phase-accent);
          box-shadow: 0 14px 30px rgba(0, 0, 0, 0.07);
        }

        @keyframes stepPopIn {
          from {
            opacity: 0;
            transform: translateY(14px) scale(0.97);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .step-number {
          position: absolute;
          top: -8px;
          right: -8px;
          min-width: 26px;
          height: 26px;
          padding: 0 6px;
          border-radius: 999px;
          background: #fff;
          border: 1.5px solid var(--phase-accent);
          color: var(--phase-accent);
          font-family: var(--font-montserrat), sans-serif;
          font-size: 10.5px;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.06);
        }

        .step-icon {
          flex-shrink: 0;
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          background: var(--phase-accent-light);
          color: var(--phase-accent);
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .roadmap-step:hover .step-icon {
          transform: scale(1.1) rotate(-4deg);
        }

        .step-icon svg {
          width: 22px;
          height: 22px;
          fill: none;
          stroke: currentColor;
          stroke-width: 1.8;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .step-body h4 {
          margin: 0 0 6px;
          font-family: var(--font-montserrat), sans-serif;
          font-size: 15px;
          font-weight: 700;
          color: var(--foreground);
        }

        .step-body p {
          margin: 0;
          font-size: 13px;
          line-height: 1.6;
          color: var(--text-muted);
        }

        /* ---------- Display Browser Frames ---------- */
        .display-browser-frame {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 16px 45px rgba(15, 23, 42, 0.08);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .display-browser-frame:hover {
          box-shadow: 0 20px 55px rgba(15, 23, 42, 0.11);
        }

        .browser-screenshot-container {
          width: 100%;
          background: #f8fafc;
          overflow: hidden;
        }

        .frame-wide {
          max-width: 1240px;
          margin: 0 auto;
        }

        .browser-topbar {
          height: 38px;
          background: #f8fafc;
          border-bottom: 1px solid #e2e8f0;
          display: flex;
          align-items: center;
          padding: 0 16px;
        }

        .browser-dots {
          display: flex;
          gap: 6px;
          flex-shrink: 0;
        }

        .dot-standard {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: #cbd5e1;
        }

        .profile-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
          align-items: center;
          padding: 80px 20px;
          max-width: 1280px;
          margin: 0 auto;
        }

        .credentials-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
          align-items: center;
          padding: 80px 20px;
          max-width: 1280px;
          margin: 0 auto;
        }

        .section-description-text {
          font-size: 16px;
          line-height: 1.75;
          color: #5d6470;
        }

        .gap-side-by-side-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 40px;
          align-items: start;
        }

        .role-headline-box {
          margin-bottom: 22px;
        }

        .role-context-badge {
          display: inline-block;
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          color: var(--orange, #ff6500);
          background: #fff7ed;
          border: 1px solid #fed7aa;
          padding: 4px 10px;
          border-radius: 6px;
          margin-bottom: 10px;
        }

        .role-headline-box h3 {
          margin: 0 0 6px;
          font-family: var(--font-montserrat), sans-serif;
          font-size: 24px;
          font-weight: 800;
          color: #0f172a;
        }

        .role-headline-box p {
          margin: 0;
          color: #64748b;
          font-size: 14px;
        }

        .tier-cards-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .tier-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 16px 18px;
          box-shadow: 0 2px 10px rgba(15, 23, 42, 0.02);
        }

        .tier-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 6px;
          font-size: 13.5px;
          color: #0f172a;
        }

        .tier-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .tier-dot.green { background: #16a34a; }
        .tier-dot.yellow { background: #eab308; }
        .tier-dot.red { background: #ef4444; }
        .tier-dot.orange { background: var(--orange, #ff6500); }

        .tier-card p {
          margin: 0 0 10px;
          font-size: 12.5px;
          color: #64748b;
          line-height: 1.55;
        }

        .tier-examples {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .tier-examples span {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 6px;
          padding: 3px 8px;
          font-size: 11px;
          font-weight: 600;
          color: #475569;
        }

        .trend-explainer-card {
          background: #fff7ed;
          border: 1px solid #fed7aa;
          border-radius: 12px;
          padding: 16px 18px;
        }

        .trend-explainer-card p {
          margin: 0;
          font-size: 12.5px;
          color: #64748b;
          line-height: 1.55;
        }

        .gap-action-row {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: 24px;
        }

        .compact-side-frame {
          width: 100%;
          max-width: 480px;
          margin: 0 auto;
        }

        .side-screenshot-scrollable {
          width: 100%;
          max-height: 540px;
          overflow-y: auto;
          background: #ffffff;
          scrollbar-width: thin;
          scrollbar-color: #cbd5e1 #f8fafc;
        }

        .side-screenshot-scrollable::-webkit-scrollbar {
          width: 6px;
        }

        .side-screenshot-scrollable::-webkit-scrollbar-thumb {
          background-color: #cbd5e1;
          border-radius: 4px;
        }

        /* Community Split Desktop */
        .community-showcase-split {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 45px;
          align-items: center;
        }

        .community-showcase-text h3 {
          margin: 0 0 10px;
          font-size: 26px;
          font-weight: 800;
          color: #0f172a;
        }

        .community-showcase-text > p {
          color: #64748b;
          font-size: 15px;
          line-height: 1.7;
          margin: 0 0 20px;
        }

        .community-feed-frame {
          width: 100%;
          overflow: hidden;
        }

        .community-screenshot-inner {
          width: 100%;
          background: #f8fafc;
          overflow: hidden;
        }

        .community-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .community-grid > div {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          padding: 22px 20px;
          transition: transform 0.25s ease, border-color 0.25s ease;
        }

        .community-grid > div strong {
          display: block;
          font-family: var(--font-montserrat), sans-serif;
          font-size: 16px;
          color: #0f172a;
          margin-bottom: 8px;
        }

        .community-grid > div p {
          margin: 0;
          font-size: 13px;
          line-height: 1.6;
          color: #64748b;
        }

        /* Success Stories */
        .story-heading {
          text-align: center;
          margin-bottom: 45px;
        }

        .story-heading h2 {
          font-family: var(--font-montserrat), sans-serif;
          font-size: 36px;
          font-weight: 800;
          color: #0f172a;
          margin: 0 0 12px;
        }

        .story-heading p {
          color: #64748b;
          font-size: 15px;
          margin: 0;
        }

        .story-grid-wrapper {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 20px;
          position: relative;
        }

        .story-view-all-link {
          display: inline-block;
          margin-bottom: 20px;
          color: var(--orange);
          font-weight: 700;
          text-decoration: none;
          font-size: 14px;
        }

        .story-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 24px;
        }

        .story-card {
          background: #ffffff;
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 26px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          box-shadow: 0 4px 18px rgba(0, 0, 0, 0.03);
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
        }

        .story-card:hover {
          transform: translateY(-4px);
          border-color: #fed7aa;
          box-shadow: 0 12px 30px rgba(249, 115, 22, 0.08);
        }

        .story-card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 14px;
        }

        .story-name {
          font-size: 13px;
          font-weight: 700;
          color: var(--orange);
        }

        .story-tag {
          font-size: 10.5px;
          font-weight: 700;
          padding: 3px 8px;
          background: #f1f5f9;
          color: #475569;
          border-radius: 6px;
        }

        .story-card h3 {
          margin: 0 0 10px;
          font-size: 18px;
          font-weight: 800;
          color: #0f172a;
          line-height: 1.35;
        }

        .story-card p {
          color: #64748b;
          font-size: 13.5px;
          line-height: 1.6;
          margin: 0 0 20px;
          flex-grow: 1;
        }

        .story-card-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid #f1f5f9;
          padding-top: 14px;
        }

        .story-readmore {
          color: var(--orange);
          font-weight: 700;
          font-size: 13px;
          text-decoration: none;
        }

        .story-logo {
          font-size: 11px;
          font-weight: 700;
          color: #94a3b8;
        }

        /* ============================================================
           RESPONSIVE & MOBILE
        ============================================================ */
        @media (max-width: 1024px) {
          .gap-side-by-side-grid,
          .community-showcase-split,
          .profile-section,
          .credentials-section {
            display: flex !important;
            flex-direction: column !important;
            gap: 36px !important;
            padding: 55px 20px !important;
          }

          .profile-text,
          .credential-text,
          .community-showcase-text,
          .gap-content-column {
            order: 1 !important;
            width: 100% !important;
          }

          .display-browser-frame,
          .gap-image-column,
          .community-feed-frame {
            order: 2 !important;
            width: 100% !important;
          }

          .compact-side-frame {
            max-width: 100%;
          }

          .community-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (max-width: 900px) {
          /* Original Roadmap Responsive Behavior */
          .solo-journey-section {
            padding: 90px 24px;
          }

          .roadmap-progress-rail {
            flex-wrap: wrap;
            row-gap: 20px;
          }

          .progress-connector {
            display: none;
          }

          .roadmap-phase-header {
            flex-wrap: wrap;
          }

          .roadmap-steps {
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          }
        }

        @media (max-width: 768px) {
          /* 1. Remove floating pills on mobile */
          .floating-pill {
            display: none !important;
          }

          /* 2. Hero Section */
          .hero-content-v2 {
            min-height: auto !important;
            padding: 50px 14px 45px !important;
          }

          .hero-text h1 {
            font-size: 42px !important;
            line-height: 1.1 !important;
            letter-spacing: -1.8px !important;
            margin-bottom: 18px !important;
          }

          .hero-description {
            font-size: 15px !important;
            line-height: 1.65 !important;
            margin: 18px auto 26px !important;
          }

          /* 3. Profile & Credentials Text */
          .section-description-text {
            font-size: 13.5px !important;
            line-height: 1.6 !important;
            color: #64748b !important;
          }

          .profile-text ul li {
            font-size: 12.5px !important;
            line-height: 1.5 !important;
            margin-bottom: 8px !important;
          }

          .profile-text h2,
          .credential-text h2 {
            font-size: 25px !important;
            line-height: 1.2 !important;
          }

          /* 4. Community Section: Mobile containment & responsiveness */
          .merged-community-section {
            padding: 60px 16px !important;
            overflow: hidden !important;
          }

          .merged-community-section .section-heading {
            margin-bottom: 30px !important;
          }

          .merged-community-section .section-heading h2 {
            font-size: 27px !important;
            line-height: 1.2 !important;
          }

          .merged-community-section .section-heading p {
            font-size: 13.5px !important;
            line-height: 1.6 !important;
          }

          .community-showcase-split {
            gap: 28px !important;
            margin: 0 !important;
            width: 100% !important;
          }

          .community-showcase-text {
            width: 100% !important;
            padding: 0 !important;
          }

          .community-showcase-text h3 {
            font-size: 22px !important;
            line-height: 1.25 !important;
            margin-bottom: 12px !important;
          }

          .community-showcase-text > p {
            font-size: 13.5px !important;
            line-height: 1.6 !important;
            margin-bottom: 16px !important;
          }

          .community-feed-frame {
            width: 100% !important;
            max-width: 100% !important;
            box-sizing: border-box !important;
            border-radius: 14px !important;
          }

          .community-screenshot-inner {
            width: 100% !important;
            overflow: hidden !important;
          }

          .community-screenshot-inner img {
            width: 100% !important;
            height: auto !important;
            display: block !important;
            object-fit: cover !important;
          }

          .community-grid {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
            margin-top: 36px !important;
            width: 100% !important;
          }

          .community-grid > div {
            padding: 16px 14px !important;
            border-radius: 12px !important;
          }

          .community-grid > div strong {
            font-size: 15px !important;
            margin-bottom: 4px !important;
          }

          .community-grid > div p {
            font-size: 12.5px !important;
            line-height: 1.5 !important;
          }

          /* 5. Success Stories */
          .success-stories-section {
            padding: 60px 16px !important;
          }

          .story-heading {
            margin-bottom: 26px !important;
          }

          .story-heading h2 {
            font-size: 27px !important;
            line-height: 1.2 !important;
          }

          .story-heading p {
            font-size: 13px !important;
          }

          .story-grid {
            display: flex !important;
            flex-direction: column !important;
            gap: 16px !important;
          }

          .story-card {
            padding: 18px 16px !important;
            border-radius: 14px !important;
          }

          .story-card h3 {
            font-size: 16px !important;
            margin-bottom: 8px !important;
          }

          .story-card p {
            font-size: 12.5px !important;
            line-height: 1.55 !important;
            margin-bottom: 14px !important;
          }

          .story-view-all-link {
            font-size: 13px !important;
            margin-bottom: 14px !important;
          }
        }

        @media (max-width: 560px) {
          .hero-text h1 {
            font-size: 38px !important;
            letter-spacing: -1.5px !important;
          }

          /* Original Roadmap Mobile Behavior */
          .roadmap-steps {
            grid-template-columns: 1fr;
          }

          .roadmap-step {
            flex-direction: column;
          }

          .step-icon {
            margin-bottom: 4px;
          }
        }
      `}</style>
    </main>
  );
}