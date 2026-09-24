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
          <div className="hero-content">
            <div className="hero-split">
              {/* Left: value proposition */}
              <div className="hero-text">
                <p className="hero-label">LEARN • PROVE • ADVANCE</p>

                <h1>
                  Turn What You Learn Into
                  <span>Proof of What You Can Do.</span>
                </h1>

                <p className="hero-description">
                  SOLO bridges learning and employment by turning your courses,
                  projects, and certificates into verified credentials,
                  ATS-ready resumes, and real career opportunities.
                </p>

                <div className="hero-buttons">
                  <Link href="/signup" className="hero-primary">
                    Get Started
                  </Link>
                  
                </div>
              </div>

              {/* Right: how it works, at a glance */}
              <div className="hero-journey-card">
                <div className="hero-journey-head">
                  <p className="hero-journey-label">HOW SOLO WORKS</p>
                  <h2>
                    From Learning to <span>Career-Ready</span>
                  </h2>
                  <p>Every step becomes verified proof employers can trust.</p>
                </div>

                <div className="journey-compact">
                  <div className="journey-item">
                    <div className="journey-circle">
                      <div className="journey-icon">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M12 6v14M4 6c2-1 5-1.5 8-1.5s6 .5 8 1.5v13c-2-1-5-1.5-8-1.5s-6 .5-8 1.5V6Z" />
                        </svg>
                      </div>
                    </div>
                    <h3>Learn</h3>
                    <p>Courses, hackathons & live projects.</p>
                  </div>

                  <div className="journey-line" />

                  <div className="journey-item">
                    <div className="journey-circle">
                      <div className="journey-icon">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M12 3 2 9l10 6 10-6-10-6Z" />
                          <path d="m2 15 10 6 10-6" />
                          <path d="m2 12 10 6 10-6" />
                        </svg>
                      </div>
                    </div>
                    <h3>Build Skills</h3>
                    <p>Submit proof of your work.</p>
                  </div>

                  <div className="journey-line" />

                  <div className="journey-item">
                    <div className="journey-circle">
                      <div className="journey-icon">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M12 2 4 5v6c0 5 3.5 9 8 11 4.5-2 8-6 8-11V5l-8-3Z" />
                          <path d="m8.5 12 2.5 2.5L16 9" />
                        </svg>
                      </div>
                    </div>
                    <h3>Get Verified</h3>
                    <p>Earn credentials & digital badges.</p>
                  </div>

                  <div className="journey-line" />

                  <div className="journey-item">
                    <div className="journey-circle">
                      <div className="journey-icon">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect x="3" y="7" width="18" height="13" rx="2" />
                          <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                          <path d="M3 13h18" />
                        </svg>
                      </div>
                    </div>
                    <h3>Get Discovered</h3>
                    <p>Land internships & jobs.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>
      </section>
        
            {/* ========================= YOUR JOURNEY (12-STEP ROADMAP) ========================= */}
      <FadeInSection>
        <section className="solo-journey-section" id="journey">
          <div className="solo-journey-wrapper">
            {/* HEADING */}
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

            {/* PROGRESS RAIL */}
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
                        {/* ROADMAP — only the active phase renders */}
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

            {/* FINAL MESSAGE */}
            <div className="solo-roadmap-result">
              <div className="roadmap-result-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 18 10 12l4 3 6-8" />
                  <path d="M15 7h5v5" />
                </svg>
              </div>
              <div>
                <span>YOUR NEXT STEP</span>
                <h3>Build. Learn. Achieve. Grow.</h3>
                <p>SOLO is with you at every step of your career journey.</p>
              </div>
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

          <div className="marquee-wrapper">
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
                      <Link href={"/signup"} className="view-btn">
                        View more
                      </Link>
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

            <p>
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

          <div
            className="profile-preview"
            style={{
              padding: "0",
              background: "#f8fafc",
              border: "1px solid #e2e8f0",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 8px 30px rgba(15, 23, 42, 0.04)",
            }}
          >
            <div style={{ padding: "16px 20px 0" }}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 2fr",
                  gap: "14px",
                  alignItems: "stretch",
                }}
              >
                <div
                  style={{
                    background: "#fff",
                    padding: "16px",
                    borderRadius: "12px",
                    border: "1px solid #edf2f7",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "8px",
                    }}
                  >
                    <h3
                      style={{
                        margin: 0,
                        fontSize: "14px",
                        fontWeight: "700",
                      }}
                    >
                      About Learner
                    </h3>

                    <span
                      style={{
                        color: "var(--orange)",
                        fontSize: "12px",
                      }}
                    >
                      ✎
                    </span>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      margin: "6px 0",
                    }}
                  >
                    <span
                      style={{
                        color: "var(--orange)",
                        fontSize: "12px",
                        fontWeight: "600",
                      }}
                    >
                      Add social link
                    </span>

                    <span
                      style={{
                        color: "var(--orange)",
                        fontSize: "12px",
                      }}
                    >
                      ✎
                    </span>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginTop: "6px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "12px",
                        color: "#4b5563",
                      }}
                    >
                      Location
                    </span>

                    <span
                      style={{
                        color: "var(--orange)",
                        fontSize: "12px",
                      }}
                    >
                      ✎
                    </span>
                  </div>
                </div>

                <div
                  style={{
                    background:
                      "linear-gradient(135deg, #0284c7 0%, #38bdf8 30%, #7c3aed 100%)",
                    borderRadius: "12px",
                    padding: "14px 16px",
                    color: "#fff",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "14px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "11px",
                        fontWeight: "600",
                        opacity: 0.9,
                      }}
                    >
                      @learner.profile ✎
                    </span>

                    {/* DISPLAY ONLY */}
                    <div
                      style={{
                        background: "#fff",
                        color: "#1f2937",
                        border: "none",
                        borderRadius: "6px",
                        padding: "4px 8px",
                        fontSize: "10px",
                        fontWeight: "600",
                        cursor: "default",
                        pointerEvents: "none",
                      }}
                    >
                      📷 Edit cover photo
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-end",
                    }}
                  >
                    <div>
                      <h4
                        style={{
                          margin: "0 0 2px",
                          fontSize: "14px",
                          fontWeight: "700",
                        }}
                      >
                        Learner Profile ✎
                      </h4>

                      <p
                        style={{
                          margin: 0,
                          fontSize: "11px",
                          opacity: 0.9,
                        }}
                      >
                        Motivated and detail-oriented student ✎
                      </p>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        gap: "12px",
                        textAlign: "center",
                      }}
                    >
                      <div>
                        <strong
                          style={{
                            display: "block",
                            fontSize: "12px",
                          }}
                        >
                          0
                        </strong>
                        <small
                          style={{
                            fontSize: "9px",
                            opacity: 0.85,
                          }}
                        >
                          Posts
                        </small>
                      </div>

                      <div>
                        <strong
                          style={{
                            display: "block",
                            fontSize: "12px",
                          }}
                        >
                          0
                        </strong>
                        <small
                          style={{
                            fontSize: "9px",
                            opacity: 0.85,
                          }}
                        >
                          Followers
                        </small>
                      </div>

                      <div>
                        <strong
                          style={{
                            display: "block",
                            fontSize: "12px",
                          }}
                        >
                          0
                        </strong>
                        <small
                          style={{
                            fontSize: "9px",
                            opacity: 0.85,
                          }}
                        >
                          Following
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                style={{
                  background: "#fff7ed",
                  border: "1px solid #fed7aa",
                  borderRadius: "10px",
                  padding: "10px 14px",
                  margin: "14px 0",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <h4
                    style={{
                      margin: 0,
                      fontSize: "12px",
                      fontWeight: "700",
                      color: "#1f2937",
                    }}
                  >
                    Resume & profile
                  </h4>

                  <p
                    style={{
                      margin: 0,
                      fontSize: "10.5px",
                      color: "#6b7280",
                    }}
                  >
                    Build a resume from your profile or pull in details by
                    uploading a file.
                  </p>
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: "8px",
                  }}
                >
                  {/* DISPLAY ONLY */}
                  <div
                    style={{
                      background: "var(--orange)",
                      color: "#fff",
                      border: "none",
                      borderRadius: "6px",
                      padding: "5px 10px",
                      fontSize: "10.5px",
                      fontWeight: "700",
                      cursor: "default",
                      pointerEvents: "none",
                    }}
                  >
                    Generate resume ✨
                  </div>

                  {/* DISPLAY ONLY */}
                  <div
                    style={{
                      background: "#fff",
                      color: "var(--orange)",
                      border: "1px solid var(--orange)",
                      borderRadius: "6px",
                      padding: "5px 10px",
                      fontSize: "10.5px",
                      fontWeight: "700",
                      cursor: "default",
                      pointerEvents: "none",
                    }}
                  >
                    Import from resume 📄
                  </div>
                </div>
              </div>

              <div
                style={{
                  background: "#fff",
                  padding: "14px 16px",
                  borderRadius: "12px",
                  border: "1px solid #edf2f7",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    marginBottom: "10px",
                  }}
                >
                  <h4
                    style={{
                      margin: 0,
                      fontSize: "13px",
                      fontWeight: "700",
                    }}
                  >
                    Acquired Skills
                  </h4>

                  <span
                    style={{
                      color: "var(--orange)",
                      fontSize: "12px",
                    }}
                  >
                    ✎
                  </span>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "6px",
                  }}
                >
                  <span
                    style={{
                      padding: "4px 8px",
                      background: "#f8fafc",
                      border: "1px solid #e2e8f0",
                      borderRadius: "6px",
                      fontSize: "10.5px",
                      color: "#374151",
                    }}
                  >
                    Artificial Intelligence (AI) And Machine Learning
                  </span>

                  <span
                    style={{
                      padding: "4px 8px",
                      background: "#f8fafc",
                      border: "1px solid #e2e8f0",
                      borderRadius: "6px",
                      fontSize: "10.5px",
                      color: "#374151",
                    }}
                  >
                    Information And Communications Technology
                  </span>

                  <span
                    style={{
                      padding: "4px 8px",
                      background: "#f8fafc",
                      border: "1px solid #e2e8f0",
                      borderRadius: "6px",
                      fontSize: "10.5px",
                      color: "#374151",
                    }}
                  >
                    Online Engineering
                  </span>

                  <span
                    style={{
                      padding: "4px 8px",
                      background: "#f8fafc",
                      border: "1px solid #e2e8f0",
                      borderRadius: "6px",
                      fontSize: "10.5px",
                      color: "#374151",
                    }}
                  >
                    React Navigation
                  </span>

                  <span
                    style={{
                      padding: "4px 8px",
                      background: "#f8fafc",
                      border: "1px solid #e2e8f0",
                      borderRadius: "6px",
                      fontSize: "10.5px",
                      color: "#374151",
                    }}
                  >
                    Virtual Lab Automation
                  </span>

                  <span
                    style={{
                      padding: "4px 8px",
                      background: "#f8fafc",
                      border: "1px solid #e2e8f0",
                      borderRadius: "6px",
                      fontSize: "10.5px",
                      color: "#6b7280",
                    }}
                  >
                    42 More Skills
                  </span>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  gap: "8px",
                  margin: "14px 0 16px",
                  flexWrap: "wrap",
                }}
              >
                {/* DISPLAY ONLY */}
                <div
                  style={{
                    background: "#fff",
                    color: "var(--orange)",
                    border: "1px solid var(--orange)",
                    borderRadius: "999px",
                    padding: "4px 10px",
                    fontSize: "10px",
                    fontWeight: "600",
                    cursor: "default",
                    pointerEvents: "none",
                  }}
                >
                  Verify Government ID
                </div>

                {/* DISPLAY ONLY */}
                <div
                  style={{
                    background: "#fff",
                    color: "var(--orange)",
                    border: "1px solid var(--orange)",
                    borderRadius: "999px",
                    padding: "4px 10px",
                    fontSize: "10px",
                    fontWeight: "600",
                    cursor: "default",
                    pointerEvents: "none",
                  }}
                >
                  Ask for endorsement
                </div>

                {/* DISPLAY ONLY */}
                <div
                  style={{
                    background: "#fff",
                    color: "var(--orange)",
                    border: "1px solid var(--orange)",
                    borderRadius: "999px",
                    padding: "4px 10px",
                    fontSize: "10px",
                    fontWeight: "600",
                    cursor: "default",
                    pointerEvents: "none",
                  }}
                >
                  Profile CLR
                </div>

                {/* DISPLAY ONLY */}
                <div
                  style={{
                    background: "#fff",
                    color: "var(--orange)",
                    border: "1px solid var(--orange)",
                    borderRadius: "999px",
                    padding: "4px 10px",
                    fontSize: "10px",
                    fontWeight: "600",
                    cursor: "default",
                    pointerEvents: "none",
                  }}
                >
                  Copy Profile Link
                </div>
              </div>
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
          <div className="credential-visual">
            <div className="credential-card">
              <div className="credential-main">
                <div className="certificate-badge">
                  <div className="certificate-inner">
                    <span className="certificate-brand">◇ SOLO Network</span>

                    <strong>ReactJS</strong>

                    <span>Coursework</span>
                  </div>
                </div>

                <div className="credential-content">
                  <div className="credential-title">
                    <h3>ReactJS</h3>
                    <p>SPARK+</p>
                  </div>

                  <div className="credential-status">
                    <span className="skills-count">8 Skills</span>
                    <span className="verified-status">Verified</span>
                  </div>

                  <p className="credential-description">
                    This badge represents completion of the ReactJS
                    Certification Course. It reflects understanding of component
                    lifecycle, hooks, and verified web development coursework.
                  </p>
                </div>
              </div>

              <div className="credential-actions">
                {/* DISPLAY ONLY */}
                <div
                  className="open-badge"
                  style={{
                    cursor: "default",
                    pointerEvents: "none",
                  }}
                >
                  Open badge
                </div>

                {/* DISPLAY ONLY */}
                <span
                  className="view-credential"
                  style={{
                    cursor: "default",
                    pointerEvents: "none",
                  }}
                >
                  View Credential
                </span>

                <span className="credential-platform">◈</span>
              </div>
            </div>
          </div>

          <div className="credential-text">
            <p className="section-label">VERIFIED ACHIEVEMENTS</p>

            <h2>
              Turn your learning into <span>trusted proof.</span>
            </h2>

            <p>
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
        </section>
      </FadeInSection>

      {/* ========================= CAREER PATHWAYS ========================= */}
      <FadeInSection>
        <section
          className="career-pathway-explorer"
          style={{
            padding: "80px 70px",
            background: "#ffffff",
            borderTop: "1px solid #eef2f6",
            borderBottom: "1px solid #eef2f6",
          }}
        >
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
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

            <div
              style={{
                background: "radial-gradient(#d1d5db 1px, transparent 1px)",
                backgroundSize: "20px 20px",
                backgroundColor: "#fafaf9",
                border: "1px solid #e5e7eb",
                borderRadius: "18px",
                padding: "40px 24px",
                overflowX: "auto",
                boxShadow: "0 6px 24px rgba(15, 23, 42, 0.03)",
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

      {/* ========================= COMMUNITY ========================= */}
      <FadeInSection>
        <section
          className="community-section"
          style={{
            borderBottom: "1px solid #eef2f6",
          }}
        >
          <div className="section-heading center">
            <p className="section-label">THE SOLO COMMUNITY</p>

            <h2>
              Learn together. <span>Grow together.</span>
            </h2>

            <p>
              Connect with learners, mentors, institutions and employers through
              the SOLO ecosystem.
            </p>
          </div>

          <div className="community-grid">
            <div>
              <strong>Learners</strong>
              <p>Connect, share credentials, and learn from your peers.</p>
            </div>

            <div>
              <strong>Mentors</strong>
              <p>Learn from professionals and experienced experts.</p>
            </div>

            <div>
              <strong>Institutions</strong>
              <p>Discover programs and opportunities from partner colleges.</p>
            </div>

            <div>
              <strong>Employers</strong>
              <p>
                Discover opportunities and showcase your verified capabilities.
              </p>
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

            <Link href="/signup" className="cta-button">
              Get Started →
            </Link>
          </div>
        </section>
      </FadeInSection>

      <Footer />
      <BackToTop />
    </main>
  );
}
