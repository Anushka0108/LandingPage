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
  return (
    <main>
      <NavBar></NavBar>

      <section className="hero hero-fullscreen">
        <FadeInSection>
          <div className="hero-fullscreen-inner">
            <div className="hero-pill-badge">
              <span>●</span> SKILLS-FIRST INFRASTRUCTURE FOR LEARNERS
            </div>

            <h1 className="hero-title-compact">
              Turn What You Learn Into <br />
              <span>Proof of What You Can Do.</span>
            </h1>

            <p className="hero-desc-compact">
              SOLO bridges learning and employment by turning skills into verified credentials, ATS-ready resumes, and real career opportunities.
            </p>

            <div className="hero-cta-group">
              <Link href="/signup" className="hero-btn-primary">
                Get Started
              </Link>

              <Link href="/contact" className="hero-btn-contact">
                Contact Us
              </Link>
            </div>
          </div>
        </FadeInSection>
      </section>

      <section style={{ padding: "60px 20px 80px", background: "#ffffff" }}>
        <FadeInSection>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "40px" }}>
              <h2 style={{
                fontFamily: "var(--font-montserrat), sans-serif",
                fontSize: "clamp(24px, 2.5vw, 34px)",
                fontWeight: "800",
                color: "#0f172a",
                margin: "0 0 10px",
                letterSpacing: "-1px"
              }}>
                Your Complete Learning-to-Employment Flywheel
              </h2>
              <p style={{ fontSize: "15px", color: "#64748b", margin: 0 }}>
                From curiosity to verified hiring readiness across six unified steps.
              </p>
            </div>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
              gap: "16px"
            }}>
              {[
                { num: "1", title: "Discover", desc: "Explore target roles & courses" },
                { num: "2", title: "Learn", desc: "Enroll in courses, hackathons & projects" },
                { num: "3", title: "Build Skills", desc: "Work on live projects & assignments" },
                { num: "4", title: "Prove Skills", desc: "Submit certificates & open evidence" },
                { num: "5", title: "Grow", desc: "Identify skill gaps against live market roles" },
                { num: "6", title: "Showcase", desc: "Verifiable credentials & ATS resumes" }
              ].map((step) => (
                <div key={step.num} style={{
                  background: "#ffffff",
                  border: "1px solid #e2e8f0",
                  borderRadius: "14px",
                  padding: "20px 16px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  boxShadow: "0 3px 15px rgba(0, 0, 0, 0.02)"
                }}>
                  <div style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    background: "var(--orange)",
                    color: "#ffffff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-montserrat), sans-serif",
                    fontWeight: "800",
                    fontSize: "13px",
                    marginBottom: "14px"
                  }}>
                    {step.num}
                  </div>
                  <h3 style={{
                    fontFamily: "var(--font-montserrat), sans-serif",
                    fontSize: "16px",
                    fontWeight: "750",
                    color: "#1e293b",
                    margin: "0 0 6px"
                  }}>
                    {step.title}
                  </h3>
                  <p style={{ fontSize: "12px", color: "#64748b", lineHeight: "1.5", margin: 0 }}>
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeInSection>
      </section>

      <section className="opportunities-section" style={{ background: "#fffaf5", padding: "70px 0", overflow: "hidden" }}>
        <FadeInSection>
          <div id="explore" style={{ maxWidth: "1280px", margin: "0 auto 35px", padding: "0 20px" }}>
            <div className="section-heading center" style={{ margin: "0 auto" }}>
              <p className="section-label">EXPLORE OPPORTUNITIES</p>
              <h2>
                Opportunities that <span>move you forward.</span>
              </h2>
              <p>Discover experiences that help you learn, build, and prepare for your career.</p>
            </div>
          </div>

          <div className="marquee-wrapper">
            <div className="marquee-track">
              {[...opportunities, ...opportunities].map((item, index) => (
                <div key={index} className="opportunity-card-compact">
                  <div className="compact-card-content">
                    <div className="compact-card-header">
                      <div className="compact-avatar">
                        <Image src="/images/profilepic.png" alt="Organization logo" width={32} height={32} style={{ borderRadius: "50%" }} />
                      </div>
                      <div className="compact-title-col">
                        <h3>{item.title}</h3>
                        <p>{item.organization}</p>
                      </div>
                    </div>

                    <div className="compact-tags-row">
                      <span className="skills-badge">{item.skills.length} Skills</span>
                      <span className="type-badge">{item.type}</span>
                      <span className="posted-badge">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.58 2 2 6.58 2 12s4.58 10 10 10 10-4.58 10-10S17.42 2 12 2m0 18c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8-3.66 8-8 8"></path>
                          <path d="M13 7h-2v6h6v-2h-4z"></path>
                        </svg>
                        {item.posted}
                      </span>
                    </div>

                    <div className="compact-details-row">
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 15c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2"></path>
                          <path d="M11.65 21.94a1.03 1.03 0 0 0 .7 0C12.7 21.81 21 18.61 21 11c0-4.96-4.04-9-9-9s-9 4.04-9 9c0 7.6 8.3 10.8 8.65 10.94M12 4c3.86 0 7 3.14 7 7 0 5.42-5.53 8.26-7 8.91-1.47-.66-7-3.5-7-8.91 0-3.86 3.14-7 7-7"></path>
                        </svg>
                        {item.location}
                      </span>
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M21 7h-1.4L18 5.4V3c0-.55-.45-1-1-1h-1c-1.44 0-2.75.78-3.45 2H9c-3.86 0-7 3.14-7 7 0 .25.02 6.28 2.11 10.45A1 1 0 0 0 5 22h4c.55 0 1-.45 1-1v-3h2v3c0 .55.45 1 1 1h4c.33 0 .65-.17.83-.45 1.54-2.31 2.08-5.11 2.27-6.55h.9c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1m-1 6h-.81c-.53 0-.97.42-1 .95 0 .04-.19 3.38-1.75 6.05h-2.45v-3c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v3H5.63c-1.61-3.73-1.64-8.95-1.64-9 0-2.76 2.24-5 5-5h4.18c.42 0 .8-.27.94-.67A1.99 1.99 0 0 1 15.98 4v1.81c0 .27.11.52.29.71l2.19 2.19c.19.19.44.29.71.29h.81v4Z"></path>
                        </svg>
                        {item.payment}
                      </span>
                    </div>

                    <div className="compact-action-row">
                      <Link href={`/explore/opportunity/${item.id}`} className="view-btn">
                        View more
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: "35px" }}>
            <Link href="/signin" className="hero-primary" style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "12px 28px",
              borderRadius: "8px",
              textDecoration: "none",
              fontSize: "14px",
              fontWeight: "700"
            }}>
              Login to Explore More
            </Link>
          </div>
        </FadeInSection>
      </section>

      <FadeInSection>
        <section className="profile-section">
          <div className="profile-text">
            <p className="section-label">YOUR PROFESSIONAL IDENTITY</p>
            <h2>
              More than a resume. <span>A profile that grows with you.</span>
            </h2>
            <p>
              Build a dynamic professional profile that brings together your education, skills, projects, internships, experiences, achievements and credentials.
            </p>
            <ul>
              <li>✓ Import your existing resume or fill your profile manually</li>
              <li>✓ Add skills and career interests for personalized recommendations</li>
              <li>✓ Showcase coursework, live projects, internships, and volunteering</li>
              <li>✓ Submit certificates and receive verifiable digital badges</li>
              <li>✓ Generate an ATS-ready resume with embedded proof</li>
            </ul>
            <Link href="/profile" className="section-button">
              Learn More
            </Link>
          </div>

          <div className="profile-preview" style={{ padding: "0", background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "16px", overflow: "hidden" }}>
            <div style={{ padding: "16px 20px 0" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "14px", alignItems: "stretch" }}>
                <div style={{ background: "#fff", padding: "16px", borderRadius: "12px", border: "1px solid #edf2f7" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                    <h3 style={{ margin: 0, fontSize: "14px", fontWeight: "700" }}>About Learner</h3>
                    <span style={{ color: "var(--orange)", fontSize: "12px" }}>✎</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "6px 0" }}>
                    <span style={{ color: "var(--orange)", fontSize: "12px", fontWeight: "600" }}>Add social link</span>
                    <span style={{ color: "var(--orange)", fontSize: "12px" }}>✎</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "6px" }}>
                    <span style={{ fontSize: "12px", color: "#4b5563" }}>Location</span>
                    <span style={{ color: "var(--orange)", fontSize: "12px" }}>✎</span>
                  </div>
                </div>

                <div style={{ background: "linear-gradient(135deg, #0284c7 0%, #38bdf8 30%, #7c3aed 100%)", borderRadius: "12px", padding: "14px 16px", color: "#fff" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
                    <span style={{ fontSize: "11px", fontWeight: "600", opacity: 0.9 }}>@learner.profile ✎</span>
                    <button style={{ background: "#fff", color: "#1f2937", border: "none", borderRadius: "6px", padding: "4px 8px", fontSize: "10px", fontWeight: "600", cursor: "pointer" }}>📷 Edit cover photo</button>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                    <div>
                      <h4 style={{ margin: "0 0 2px", fontSize: "14px", fontWeight: "700" }}>Learner Profile ✎</h4>
                      <p style={{ margin: 0, fontSize: "11px", opacity: 0.9 }}>Motivated and detail-oriented student ✎</p>
                    </div>
                    <div style={{ display: "flex", gap: "12px", textAlign: "center" }}>
                      <div>
                        <strong style={{ display: "block", fontSize: "12px" }}>0</strong>
                        <small style={{ fontSize: "9px", opacity: 0.85 }}>Posts</small>
                      </div>
                      <div>
                        <strong style={{ display: "block", fontSize: "12px" }}>0</strong>
                        <small style={{ fontSize: "9px", opacity: 0.85 }}>Followers</small>
                      </div>
                      <div>
                        <strong style={{ display: "block", fontSize: "12px" }}>0</strong>
                        <small style={{ fontSize: "9px", opacity: 0.85 }}>Following</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ background: "#fff7ed", border: "1px solid #fed7aa", borderRadius: "10px", padding: "10px 14px", margin: "14px 0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <h4 style={{ margin: 0, fontSize: "12px", fontWeight: "700", color: "#1f2937" }}>Resume & profile</h4>
                  <p style={{ margin: 0, fontSize: "10.5px", color: "#6b7280" }}>Build a resume from your profile or pull in details by uploading a file.</p>
                </div>
                <div style={{ display: "flex", gap: "8px" }}>
                  <button style={{ background: "var(--orange)", color: "#fff", border: "none", borderRadius: "6px", padding: "5px 10px", fontSize: "10.5px", fontWeight: "700", cursor: "pointer" }}>Generate resume ✨</button>
                  <button style={{ background: "#fff", color: "var(--orange)", border: "1px solid var(--orange)", borderRadius: "6px", padding: "5px 10px", fontSize: "10.5px", fontWeight: "700", cursor: "pointer" }}>Import from resume 📄</button>
                </div>
              </div>

              <div style={{ background: "#fff", padding: "14px 16px", borderRadius: "12px", border: "1px solid #edf2f7" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "10px" }}>
                  <h4 style={{ margin: 0, fontSize: "13px", fontWeight: "700" }}>Acquired Skills</h4>
                  <span style={{ color: "var(--orange)", fontSize: "12px" }}>✎</span>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  <span style={{ padding: "4px 8px", background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "6px", fontSize: "10.5px", color: "#374151" }}>Artificial Intelligence (AI) And Machine Learning</span>
                  <span style={{ padding: "4px 8px", background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "6px", fontSize: "10.5px", color: "#374151" }}>Information And Communications Technology</span>
                  <span style={{ padding: "4px 8px", background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "6px", fontSize: "10.5px", color: "#374151" }}>Online Engineering</span>
                  <span style={{ padding: "4px 8px", background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "6px", fontSize: "10.5px", color: "#374151" }}>React Navigation</span>
                  <span style={{ padding: "4px 8px", background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "6px", fontSize: "10.5px", color: "#374151" }}>Virtual Lab Automation</span>
                  <span style={{ padding: "4px 8px", background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "6px", fontSize: "10.5px", color: "#6b7280" }}>42 More Skills</span>
                </div>
              </div>

              <div style={{ display: "flex", justifyContent: "flex-end", gap: "8px", margin: "14px 0 16px", flexWrap: "wrap" }}>
                <button style={{ background: "#fff", color: "var(--orange)", border: "1px solid var(--orange)", borderRadius: "999px", padding: "4px 10px", fontSize: "10px", fontWeight: "600", cursor: "pointer" }}>Verify Government ID</button>
                <button style={{ background: "#fff", color: "var(--orange)", border: "1px solid var(--orange)", borderRadius: "999px", padding: "4px 10px", fontSize: "10px", fontWeight: "600", cursor: "pointer" }}>Ask for endorsement</button>
                <button style={{ background: "#fff", color: "var(--orange)", border: "1px solid var(--orange)", borderRadius: "999px", padding: "4px 10px", fontSize: "10px", fontWeight: "600", cursor: "pointer" }}>Profile CLR</button>
                <button style={{ background: "#fff", color: "var(--orange)", border: "1px solid var(--orange)", borderRadius: "999px", padding: "4px 10px", fontSize: "10px", fontWeight: "600", cursor: "pointer" }}>Copy Profile Link</button>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section className="credentials-section">
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
                    This badge represents completion of the ReactJS Certification Course. It reflects understanding of component lifecycle, hooks, and verified web development coursework.
                  </p>
                </div>
              </div>
              <div className="credential-actions">
                <button className="open-badge">Open badge</button>
                <a href="#" className="view-credential">View Credential</a>
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
              Your achievements shouldn&apos;t disappear inside a folder of certificates. SOLO turns learning experiences into verifiable digital credentials and Open Badges that you can showcase.
            </p>
            <div style={{ marginTop: "24px" }}>
              <Link href="/credential" className="section-button">
                Learn More
              </Link>
            </div>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section className="career-pathway-explorer" style={{ padding: "80px 70px", background: "#ffffff", borderTop: "1px solid #eef2f6", borderBottom: "1px solid #eef2f6" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div className="section-heading center">
              <p className="section-label">STRUCTURED CAREER PATHWAYS</p>
              <h2>
                Explore guided paths from <span>curiosity to career.</span>
              </h2>
              <p>
                Follow structured learning pathways with interlinked digital course badges to systematically build and verify in-demand competencies.
              </p>
            </div>

            <div style={{
              background: "radial-gradient(#d1d5db 1px, transparent 1px)",
              backgroundSize: "20px 20px",
              backgroundColor: "#fafaf9",
              border: "1px solid #e5e7eb",
              borderRadius: "18px",
              padding: "40px 24px",
              overflowX: "auto"
            }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", minWidth: "900px", gap: "12px", position: "relative" }}>
                {[
                  { name: "ReactJS", badge: "◇ academia", type: "Coursework", color: "#0284c7" },
                  { name: "React Fundamentals", badge: "◇ academia", type: "Skills Validation", color: "#7c3aed" },
                  { name: "React Redux Toolkit", badge: "◇ academia", type: "Coursework", color: "#0284c7" },
                  { name: "RTK Query Basics", badge: "◇ academia", type: "Coursework", color: "#0284c7" },
                  { name: "Redux & RTK Query", badge: "◇ academia", type: "Skills Validation", color: "#7c3aed" },
                  { name: "NextJS", badge: "◇ academia", type: "Coursework", color: "#0284c7" }
                ].map((node, i, arr) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", flex: 1 }}>
                    <div style={{
                      background: "#ffffff",
                      border: "1px solid #e2e8f0",
                      borderRadius: "14px",
                      padding: "16px 14px",
                      textAlign: "center",
                      width: "100%",
                      minWidth: "135px",
                      boxShadow: "0 4px 14px rgba(0,0,0,0.03)",
                      position: "relative"
                    }}>
                      <span style={{
                        position: "absolute",
                        top: "-8px",
                        right: "10px",
                        background: "#10b981",
                        color: "#ffffff",
                        fontSize: "9px",
                        fontWeight: "700",
                        padding: "2px 7px",
                        borderRadius: "10px"
                      }}>
                        Earned
                      </span>
                      <div style={{
                        width: "52px",
                        height: "52px",
                        borderRadius: "50%",
                        border: `2.5px solid ${node.color}`,
                        margin: "0 auto 10px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "#ffffff"
                      }}>
                        <span style={{ fontSize: "6px", color: node.color, fontWeight: "700" }}>{node.badge}</span>
                        <span style={{ fontSize: "7px", color: "#1e293b", fontWeight: "700" }}>Credential</span>
                        <span style={{ fontSize: "6px", background: node.color, color: "#ffffff", width: "100%", textAlign: "center", marginTop: "2px" }}>{node.type}</span>
                      </div>
                      <h4 style={{ margin: 0, fontSize: "12px", fontWeight: "700", color: "#0f172a" }}>{node.name}</h4>
                    </div>
                    {i < arr.length - 1 && (
                      <div style={{ width: "24px", height: "2px", background: "#cbd5e1", flexShrink: 0, margin: "0 4px" }} />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "center", marginTop: "32px" }}>
              <Link href="/pathways" className="section-button">
                Learn More
              </Link>
            </div>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section className="community-section">
          <div className="section-heading center">
            <p className="section-label">THE SOLO COMMUNITY</p>
            <h2>
              Learn together. <span>Grow together.</span>
            </h2>
            <p>Connect with learners, mentors, institutions and employers through the SOLO ecosystem.</p>
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
              <p>Discover opportunities and showcase your verified capabilities.</p>
            </div>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section id="success-stories" className="success-stories-section">
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
                    <Link href={`/success-stories/${story.id}`} className="story-readmore">
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

      <FadeInSection>
        <section className="final-cta">
          <div>
            <p className="section-label">START YOUR JOURNEY</p>
            <h2>
              Your skills can take <span>you further.</span>
            </h2>
            <p>Build your skills. Prove what you can do. Discover where you can go next.</p>
            <Link href="/signup" className="cta-button">
              Get Started →
            </Link>
          </div>
        </section>
      </FadeInSection>

      <Footer></Footer>
      <BackToTop></BackToTop>
    </main>
  );
}