"use client";

import { useState } from "react";
import Link from "next/link";
import NavBar from "../components/NavBar";
import FadeInSection from "../components/FadeInSection";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

export default function CareerPathwaysPage() {
  const [activeEnrollStep, setActiveEnrollStep] = useState(0);
  const [activeViewTab, setActiveViewTab] = useState<"standard" | "pathway">("standard");
  const [activeCompletionStep, setActiveCompletionStep] = useState(0);

  const enrollPathwaySteps = [
    {
      step: "01",
      title: "Explore Career Pathways",
      path: "Explore > Opportunities > Career Pathways",
      desc: "Search for a pathway using filters such as name, source, skills, or institution, or scroll through the available opportunities to find one that interests you.",
      image: "/images/pathways/enroll-step-1.png",
      caption: "Search and filter Career Pathways under Opportunities"
    },
    {
      step: "02",
      title: "View Details & Take Pathway",
      path: "Career Pathway Details > Take Pathway",
      desc: "Click on 'View More' to view the pathway and its complete details, then click on 'Take Pathway' to register.",
      image: "/images/pathways/enroll-step-2.png",
      caption: "Inspect role competencies and click Take Pathway"
    },
    {
      step: "03",
      title: "Access via Dashboard",
      path: "User Dashboard > Manage > My Career Pathways",
      desc: "Select the pathway you want to proceed with and click on 'View More' to open your registered pathway details.",
      image: "/images/pathways/enroll-step-3.png",
      caption: "Manage registered tracks in My Career Pathways"
    },
    {
      step: "04",
      title: "Select Course Badge & Enroll",
      path: "Pathway Section > Interlinked Course Badges > Enroll",
      desc: "Scroll down to the Pathway section to locate the interlinked course badges. Click the chosen badge to view opportunities, click 'View More' on the course, and click 'Enroll'.",
      image: "/images/pathways/enroll-step-4.png",
      caption: "Select milestone badges to start learning"
    }
  ];

  const completionWorkflowSteps = [
    {
      step: "01",
      tag: "Step 1",
      title: "Complete the Course",
      action: "External Learning Platform (ScholarHat / IBM)",
      desc: "Complete all required Modules, Assignments, Quizzes, Assessments, and Exercises on the external learning platform using your registered SOLO email ID.",
      image: "/images/pathways/completion-step-1.png",
      caption: "Complete modules and generate completion certificate on external platform"
    },
    {
      step: "02",
      tag: "Step 2",
      title: "Return to SOLO & Request Completion",
      path: "SOLO Dashboard > Manage > Enrollments > More",
      desc: "Return to SOLO, navigate to Manage > Enrollments, locate your course, click the 'More' options button, and choose 'Request Completion'.",
      image: "/images/pathways/completion-step-2.png",
      caption: "Select Request Completion under Course Enrollment action dropdown"
    },
    {
      step: "03",
      tag: "Step 3",
      title: "Submit Evidence & Verify",
      path: "Request Completion Modal > Submit",
      desc: "Upload verifiable evidence of your course completion (certificate, badge, or summary of work), provide a concise description of your work, and click Submit.",
      image: "/images/pathways/completion-step-3.png",
      caption: "Attach verification certificate document and submit completion request"
    }
  ];

  return (
    <main
      className="career-pathway-page"
      style={{ background: "#ffffff", minHeight: "100vh", overflowX: "visible" }}
    >
      <NavBar />

      {/* =========================================================
          HERO SECTION
      ========================================================= */}
      <FadeInSection>
        <section className="pathway-hero">
          <div className="hero-background-glow glow-one" />
          <div className="hero-background-glow glow-two" />
          <div className="hero-background-glow glow-three" />

          <div className="pathway-hero-inner">
            <div className="hero-copy">
              <p className="hero-label">CAREER PATHWAYS</p>

              <h1>
                Follow a guided sequence of courses
                <span className="orange-text"> designed for a specific role or domain.</span>
              </h1>

              <p className="hero-description">
                Career pathways help learners build skills in a structured manner and
                progress toward long-term career goals. Learn, build credentials,
                track progress via badges and pathways, and showcase your work.
              </p>

              <div className="hero-buttons">
                <a href="#how-to-enroll" className="hero-primary">
                  How to Enroll in a Pathway
                </a>
                <a href="#interactive-pathway" className="hero-secondary">
                  View Pathway Progress
                </a>
              </div>

            </div>
          </div>
        </section>
      </FadeInSection>

      {/* =========================================================
          HOW TO ENROLL IN A CAREER PATHWAY (SECTION 8.2.2.1)
      ========================================================= */}
      <FadeInSection>
        <section id="how-to-enroll" className="enrollment-section">
          <div className="section-container">
            <div className="section-heading center">
              <span className="section-label">ENROLLING IN A PATHWAY</span>
              <h2>
                How to Enroll
                <span> in a Career Pathway.</span>
              </h2>
              <p>
                Follow these exact steps from the SOLO documentation to discover,
                register for, and begin working through your pathway course badges.
              </p>
            </div>

            <div className="enrollment-interactive-grid">
              <div className="enroll-step-list">
                {enrollPathwaySteps.map((item, index) => (
                  <button
                    type="button"
                    key={item.step}
                    className={`enroll-step-button ${activeEnrollStep === index ? "active" : ""}`}
                    onClick={() => setActiveEnrollStep(index)}
                  >
                    <div className="enroll-step-num">{item.step}</div>
                    <div className="enroll-step-details">
                      <h3>{item.title}</h3>
                      <code className="enroll-route">{item.path}</code>
                      <p>{item.desc}</p>
                    </div>
                  </button>
                ))}
              </div>

              <div className="enroll-image-column">
                <div className="pathway-browser wide-browser">
                  <div className="browser-top">
                    <div className="browser-dots">
                      <span />
                      <span />
                      <span />
                    </div>
                    <div className="browser-title">
                      SOLO | {enrollPathwaySteps[activeEnrollStep].path}
                    </div>
                  </div>

                  <div className="browser-screenshot-wrapper">
                    <img
                      key={enrollPathwaySteps[activeEnrollStep].image}
                      src={enrollPathwaySteps[activeEnrollStep].image}
                      alt={enrollPathwaySteps[activeEnrollStep].title}
                      className="browser-screenshot-image"
                      onError={(e) => {
                        (e.currentTarget as HTMLElement).style.display = "none";
                      }}
                    />
                    <div className="screenshot-placeholder">
                      <span>ADD SCREENSHOT</span>
                      <strong>{enrollPathwaySteps[activeEnrollStep].title}</strong>
                      <p>{enrollPathwaySteps[activeEnrollStep].caption}</p>
                      <small>{enrollPathwaySteps[activeEnrollStep].image}</small>
                    </div>
                  </div>
                </div>
                <div className="screenshot-caption-row">
                  <span>STEP {enrollPathwaySteps[activeEnrollStep].step}</span>
                  <strong>{enrollPathwaySteps[activeEnrollStep].caption}</strong>
                </div>
              </div>
            </div>

            <div className="pathway-bottom-note" style={{ marginTop: "40px" }}>
              <div className="pathway-bottom-icon">!</div>
              <div>
                <h3>Pathway Status Guidance</h3>
                <p>
                  If the status shows <strong>Pending</strong>, kindly contact the SPARK+ Team and they will give you access to enroll yourself in that opportunity.
                  If the status shows <strong>Enrolled</strong>, click on View More and take the course.
                </p>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* =========================================================
          VIEW PATHWAY PROGRESS & INTERLINKED BADGES (SECTION 8.2.2.2)
      ========================================================= */}
      <FadeInSection>
        <section id="interactive-pathway" className="showcase-section">
          <div className="section-container">
            <div className="section-heading center">
              <span className="section-label">HOW DO YOU VIEW YOUR PATHWAY PROGRESS</span>
              <h2>
                Tracking Progress &
                <span> Interlinked Course Badges.</span>
              </h2>
              <p>
                Once you have completed any course (or all courses), go to Manage &gt; Career Pathway and scroll down to view your progress.
                A green <strong>&ldquo;Earned&rdquo;</strong> highlight will appear once the course is completed and the credential has been issued.
              </p>
            </div>

            <div className="view-mode-tabs">
              <button
                type="button"
                className={`view-mode-button ${activeViewTab === "standard" ? "active" : ""}`}
                onClick={() => setActiveViewTab("standard")}
              >
                <span>01</span>
                Standard Milestone View
              </button>
              <button
                type="button"
                className={`view-mode-button ${activeViewTab === "pathway" ? "active" : ""}`}
                onClick={() => setActiveViewTab("pathway")}
              >
                <span>02</span>
                Connected Pathway View
              </button>
            </div>

            <div className="pathway-browser wide-browser">
              <div className="browser-top">
                <div className="browser-dots">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="browser-title">
                  SOLO | Manage &gt; Career Pathway &gt; {activeViewTab === "standard" ? "Standard View" : "Pathway View"}
                </div>
              </div>

              <div className="browser-screenshot-wrapper showcase-wrapper">
                {activeViewTab === "standard" ? (
                  <>
                    <img
                      src="/images/pathways/standard-view.png"
                      alt="SOLO Standard Pathway View Screenshot"
                      className="browser-screenshot-image"
                      onError={(e) => {
                        (e.currentTarget as HTMLElement).style.display = "none";
                      }}
                    />
                    <div className="screenshot-placeholder">
                      <span>ADD SCREENSHOT</span>
                      <strong>Standard Pathway Milestone View</strong>
                      <p>
                        Place your screenshot of the vertical milestone list showing course codes,
                        types (Coursework vs Skills Validation), and the green &lsquo;Earned&rsquo; highlights.
                      </p>
                      <small>/images/pathways/standard-view.png</small>
                    </div>
                  </>
                ) : (
                  <>
                    <img
                      src="/images/pathways/pathway-view.png"
                      alt="SOLO Pathway Connected View Screenshot"
                      className="browser-screenshot-image"
                      onError={(e) => {
                        (e.currentTarget as HTMLElement).style.display = "none";
                      }}
                    />
                    <div className="screenshot-placeholder">
                      <span>ADD SCREENSHOT</span>
                      <strong>Pathway View (Interlinked Course Badges)</strong>
                      <p>
                        Place the screenshot from Section 8.2.2.2 showing the connected dot-grid sequence:
                        ReactJS &rarr; React Fundamentals &rarr; React Redux Toolkit &rarr; RTK Query Basics &rarr; Redux & RTK Query &rarr; NextJS.
                      </p>
                      <small>/images/pathways/pathway-view.png</small>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* =========================================================
          COURSE COMPLETION & EVIDENCE SUBMISSION (SECTION 8.4)
      ========================================================= */}
      <FadeInSection>
        <section className="completion-section">
          <div className="section-container">
            <div className="section-heading center">
              <span className="section-label">HOW TO REQUEST COMPLETION ON SOLO</span>
              <h2>
                Course Completion
                <span> & Submitting Evidence.</span>
              </h2>
              <p>
                After finishing external coursework, return to SOLO to verify your learning and have your credential issued.
              </p>
            </div>

            <div className="completion-interactive-grid">
              <div className="completion-steps-selector">
                {completionWorkflowSteps.map((item, index) => (
                  <button
                    type="button"
                    key={item.step}
                    className={`completion-step-btn ${activeCompletionStep === index ? "active" : ""}`}
                    onClick={() => setActiveCompletionStep(index)}
                  >
                    <div className="completion-step-top">
                      <span className="completion-badge">{item.tag}</span>
                      <span className="completion-indicator">
                        {activeCompletionStep === index ? "Viewing Screenshot" : "Click to view"}
                      </span>
                    </div>
                    <h3>{item.title}</h3>
                    {item.path ? (
                      <code className="enroll-route">{item.path}</code>
                    ) : (
                      <span className="platform-tag">{item.action}</span>
                    )}
                    <p>{item.desc}</p>
                  </button>
                ))}
              </div>

              <div className="completion-screenshot-panel">
                <div className="pathway-browser wide-browser">
                  <div className="browser-top">
                    <div className="browser-dots">
                      <span />
                      <span />
                      <span />
                    </div>
                    <div className="browser-title">
                      SOLO | {completionWorkflowSteps[activeCompletionStep].tag} — {completionWorkflowSteps[activeCompletionStep].title}
                    </div>
                  </div>

                  <div className="browser-screenshot-wrapper">
                    <img
                      key={completionWorkflowSteps[activeCompletionStep].image}
                      src={completionWorkflowSteps[activeCompletionStep].image}
                      alt={completionWorkflowSteps[activeCompletionStep].title}
                      className="browser-screenshot-image"
                      onError={(e) => {
                        (e.currentTarget as HTMLElement).style.display = "none";
                      }}
                    />
                    <div className="screenshot-placeholder">
                      <span>ADD STEP SCREENSHOT</span>
                      <strong>{completionWorkflowSteps[activeCompletionStep].tag}: {completionWorkflowSteps[activeCompletionStep].title}</strong>
                      <p>{completionWorkflowSteps[activeCompletionStep].caption}</p>
                      <small>{completionWorkflowSteps[activeCompletionStep].image}</small>
                    </div>
                  </div>
                </div>
                <div className="screenshot-caption-row">
                  <span>{completionWorkflowSteps[activeCompletionStep].tag}</span>
                  <strong>{completionWorkflowSteps[activeCompletionStep].caption}</strong>
                </div>
              </div>
            </div>

            <div className="pathway-bottom-note" style={{ marginTop: "40px" }}>
              <div className="pathway-bottom-icon">✓</div>
              <div>
                <h3>External Courses & Automated Synchronization</h3>
                <p>
                  For external platforms like ScholarHat or IBM, sign up or log in using the same email ID registered on SOLO.
                  Once verified, your acquired credentials immediately update your profile records and ATS resume.
                </p>
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
          <div className="cta-glow" />
          <div className="cta-content">
            <span className="section-label">YOUR CAREER ROADMAP</span>
            <h2>
              Ready to Follow Your
              <span> Target Career Roadmap?</span>
            </h2>
            <p>
              Choose a pathway, verify your skills with measurable outcomes, and showcase portable proof directly to employers.
            </p>
            <Link href="https://app.thesolo.network/" className="cta-button">
              Explore Career Pathways
            </Link>
          </div>
        </section>
      </FadeInSection>

      <Footer />
      <BackToTop />

      {/* =========================================================
          STYLES
      ========================================================= */}
      <style jsx global>{`
        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
        }

        .career-pathway-page {
          color: #0f172a;
          font-family: Arial, sans-serif;
        }

        /* HERO */
        .pathway-hero {
          min-height: calc(100vh - 65px);
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          background:
            radial-gradient(circle at 75% 25%, rgba(245, 158, 11, 0.22), transparent 30%),
            radial-gradient(circle at 15% 75%, rgba(239, 68, 68, 0.12), transparent 28%),
            radial-gradient(circle at 50% 5%, rgba(37, 99, 235, 0.10), transparent 22%),
            linear-gradient(120deg, #fff7ed 0%, #fffaf5 40%, #eff6ff 65%, #fff7ed 100%);
        }

        .pathway-hero-inner {
          width: 100%;
          max-width: 1500px;
          margin: 0 auto;
          padding: 90px 70px;
          position: relative;
          z-index: 3;
        }

        .hero-copy {
          max-width: 860px;
          text-align: left;
        }

        .hero-label,
        .section-label {
          font-family: var(--font-montserrat), sans-serif;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 2px;
          color: #f97316;
          margin: 0 0 18px;
          text-transform: uppercase;
        }

        .hero-copy h1 {
          font-family: var(--font-montserrat), sans-serif;
          font-size: clamp(43px, 4vw, 75px);
          line-height: 1.04;
          letter-spacing: -3px;
          margin: 0;
          font-weight: 800;
          color: #171717;
        }

        .hero-copy h1 .orange-text {
          color: #f97316;
          display: block;
        }

        .hero-description {
          max-width: 720px;
          margin: 28px 0 34px;
          font-size: 16px;
          line-height: 1.75;
          color: #5d6470;
        }

        .hero-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-bottom: 42px;
        }

        .hero-primary,
        .hero-secondary {
          padding: 13px 26px;
          border-radius: 9px;
          text-decoration: none;
          font-family: var(--font-montserrat), sans-serif;
          font-size: 14px;
          font-weight: 700;
          transition: all 0.25s ease;
        }

        .hero-primary {
          background: #f97316;
          color: #fff;
          border: 2px solid #f97316;
          box-shadow: 0 10px 25px rgba(249, 115, 22, 0.2);
        }

        .hero-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 30px rgba(249, 115, 22, 0.28);
        }

        .hero-secondary {
          background: rgba(255, 255, 255, 0.85);
          color: #2563eb;
          border: 2px solid #dbe5f8;
        }

        .hero-secondary:hover {
          transform: translateY(-3px);
          border-color: #f97316;
          color: #f97316;
        }

        .hero-points {
          display: flex;
          flex-wrap: wrap;
          gap: 25px;
          padding-top: 25px;
          border-top: 1px solid rgba(226, 232, 240, 0.85);
        }

        .hero-points > div {
          display: flex;
          gap: 8px;
          align-items: flex-start;
        }

        .check-icon {
          width: 20px;
          height: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: #ecfdf5;
          color: #059669;
          font-size: 12px;
          font-weight: 800;
        }

        .hero-points strong {
          display: block;
          font-size: 13.5px;
          color: #1e293b;
        }

        .hero-points small {
          display: block;
          margin-top: 2px;
          color: #64748b;
          font-size: 11px;
        }

        .hero-background-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          pointer-events: none;
        }

        .glow-one {
          width: 450px;
          height: 450px;
          right: 5%;
          top: 10%;
          background: rgba(18, 85, 255, 0.12);
        }

        .glow-two {
          width: 350px;
          height: 350px;
          left: 30%;
          bottom: -150px;
          background: rgba(253, 67, 34, 0.1);
        }

        .glow-three {
          width: 260px;
          height: 260px;
          right: 35%;
          bottom: 10%;
          background: rgba(245, 158, 11, 0.08);
        }

        /* SECTION BASE */
        .section-container {
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
        }

        .section-heading {
          max-width: 850px;
          margin-bottom: 50px;
        }

        .section-heading.center {
          text-align: center;
          margin-left: auto;
          margin-right: auto;
        }

        .section-heading h2 {
          font-family: var(--font-montserrat), sans-serif;
          font-size: clamp(30px, 3.5vw, 44px);
          line-height: 1.1;
          letter-spacing: -1.5px;
          font-weight: 800;
          color: #0f172a;
          margin: 8px 0 14px;
        }

        .section-heading h2 span {
          color: #f97316;
        }

        .section-heading p {
          max-width: 760px;
          margin: 0 auto;
          color: #64748b;
          font-size: 15px;
          line-height: 1.7;
        }

        /* ENROLLMENT INTERACTIVE SECTION */
        .enrollment-section {
          padding: 100px 20px;
          background: #ffffff;
        }

        .enrollment-interactive-grid {
          display: grid;
          grid-template-columns: 430px 1fr;
          gap: 40px;
          align-items: center;
        }

        .enroll-step-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .enroll-step-button {
          width: 100%;
          display: flex;
          align-items: flex-start;
          gap: 16px;
          background: #f8fafc;
          border: 1.5px solid #e2e8f0;
          border-radius: 14px;
          padding: 18px;
          text-align: left;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .enroll-step-button:hover {
          background: #ffffff;
          border-color: #cbd5e1;
        }

        .enroll-step-button.active {
          background: #fffaf5;
          border-color: #f97316;
          box-shadow: 0 10px 25px rgba(249, 115, 22, 0.08);
        }

        .enroll-step-num {
          width: 34px;
          height: 34px;
          flex: 0 0 34px;
          border-radius: 50%;
          background: #f1f5f9;
          color: #64748b;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: 800;
          transition: all 0.25s ease;
        }

        .enroll-step-button.active .enroll-step-num {
          background: #f97316;
          color: #ffffff;
        }

        .enroll-step-details {
          flex: 1;
          min-width: 0;
        }

        .enroll-step-details h3 {
          margin: 0 0 4px;
          font-size: 15px;
          font-weight: 750;
          color: #1e293b;
        }

        .enroll-step-button.active .enroll-step-details h3 {
          color: #0f172a;
        }

        .enroll-route {
          display: inline-block;
          font-family: monospace;
          font-size: 11px;
          background: #ffffff;
          border: 1px solid #cbd5e1;
          padding: 2px 7px;
          border-radius: 5px;
          color: #475569;
          margin-bottom: 6px;
          word-break: break-word;
        }

        .enroll-step-details p {
          color: #64748b;
          font-size: 12.5px;
          line-height: 1.55;
          margin: 0;
        }

        .enroll-image-column {
          min-width: 0;
        }

        /* BROWSER MOCKUP FRAMES ADJUSTED FOR SCREENSHOTS */
        .pathway-browser {
          background: #f8fafc;
          border-radius: 16px;
          border: 1px solid #dbe1e8;
          box-shadow: 0 20px 50px rgba(15, 23, 42, 0.08);
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .pathway-browser:hover {
          transform: translateY(-4px);
          box-shadow: 0 25px 60px rgba(15, 23, 42, 0.12);
        }

        .wide-browser {
          width: 100%;
        }

        .browser-top {
          height: 44px;
          background: #f1f5f9;
          border-bottom: 1px solid #dbe1e8;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .browser-dots {
          display: flex;
          gap: 7px;
          position: absolute;
          left: 18px;
        }

        .browser-dots span {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #cbd5e1;
        }

        .browser-title {
          font-size: 11.5px;
          color: #64748b;
          font-weight: 700;
          letter-spacing: 0.3px;
        }

        .browser-screenshot-wrapper {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
          min-height: 400px;
          background: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .showcase-wrapper {
          aspect-ratio: 16 / 8.5;
          min-height: 480px;
        }

        .browser-screenshot-image {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
        }

        .screenshot-placeholder {
          position: absolute;
          inset: 20px;
          border: 2px dashed #cbd5e1;
          border-radius: 12px;
          background: rgba(248, 250, 252, 0.95);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 24px;
        }

        .screenshot-placeholder span {
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1.5px;
          color: #f97316;
        }

        .screenshot-placeholder strong {
          margin-top: 8px;
          font-size: 17px;
          color: #1e293b;
        }

        .screenshot-placeholder p {
          max-width: 440px;
          margin: 6px 0 10px;
          font-size: 13px;
          color: #64748b;
          line-height: 1.55;
        }

        .screenshot-placeholder small {
          color: #94a3b8;
          font-family: monospace;
          background: #ffffff;
          padding: 4px 10px;
          border-radius: 6px;
          border: 1px solid #e2e8f0;
          font-size: 11px;
        }

        .browser-screenshot-image[src] + .screenshot-placeholder {
          display: none;
        }

        .screenshot-caption-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 14px;
        }

        .screenshot-caption-row span {
          font-size: 10px;
          font-weight: 800;
          color: #f97316;
        }

        .screenshot-caption-row strong {
          font-size: 13px;
          color: #334155;
        }

        /* SHOWCASE TAB SECTION */
        .showcase-section {
          padding: 100px 20px;
          background: #fffaf5;
          border-top: 1px solid #f1f5f9;
          border-bottom: 1px solid #f1f5f9;
        }

        .view-mode-tabs {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-bottom: 36px;
        }

        .view-mode-button {
          border: 1.5px solid #e2e8f0;
          background: #f8fafc;
          color: #64748b;
          border-radius: 10px;
          padding: 12px 22px;
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .view-mode-button span {
          font-size: 10px;
          color: #94a3b8;
        }

        .view-mode-button:hover {
          border-color: #f97316;
          color: #f97316;
        }

        .view-mode-button.active {
          background: #fff7ed;
          border-color: #f97316;
          color: #f97316;
          box-shadow: 0 8px 20px rgba(249, 115, 22, 0.1);
        }

        .view-mode-button.active span {
          color: #f97316;
        }

        /* COMPLETION WORKFLOW SECTION WITH STEP SELECTOR */
        .completion-section {
          padding: 100px 20px;
          background: #ffffff;
        }

        .completion-interactive-grid {
          display: grid;
          grid-template-columns: 440px 1fr;
          gap: 40px;
          align-items: center;
        }

        .completion-steps-selector {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .completion-step-btn {
          width: 100%;
          text-align: left;
          background: #f8fafc;
          border: 1.5px solid #e2e8f0;
          border-radius: 14px;
          padding: 20px;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .completion-step-btn:hover {
          background: #ffffff;
          border-color: #cbd5e1;
        }

        .completion-step-btn.active {
          background: #fffaf5;
          border-color: #f97316;
          box-shadow: 0 10px 25px rgba(249, 115, 22, 0.08);
        }

        .completion-step-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
        }

        .completion-badge {
          font-size: 11px;
          font-weight: 800;
          color: #f97316;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .completion-indicator {
          font-size: 11px;
          color: #94a3b8;
          font-weight: 600;
        }

        .completion-step-btn.active .completion-indicator {
          color: #f97316;
          font-weight: 700;
        }

        .completion-step-btn h3 {
          font-size: 16px;
          font-weight: 750;
          color: #0f172a;
          margin: 0 0 6px;
        }

        .platform-tag {
          display: inline-block;
          font-size: 11px;
          font-weight: 700;
          color: #2563eb;
          background: #eff6ff;
          padding: 2px 8px;
          border-radius: 5px;
          margin-bottom: 8px;
        }

        .completion-step-btn p {
          font-size: 12.5px;
          color: #64748b;
          line-height: 1.6;
          margin: 0;
        }

        .completion-screenshot-panel {
          min-width: 0;
        }

        /* BOTTOM CALLOUT NOTE */
        .pathway-bottom-note {
          max-width: 100%;
          margin: 35px auto 0;
          padding: 22px 25px;
          display: flex;
          align-items: flex-start;
          gap: 15px;
          border: 1px solid #fed7aa;
          background: #ffffff;
          border-radius: 14px;
        }

        .pathway-bottom-icon {
          width: 32px;
          height: 32px;
          flex: 0 0 32px;
          border-radius: 50%;
          background: #f97316;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          font-weight: 800;
        }

        .pathway-bottom-note h3 {
          margin: 2px 0 7px;
          font-size: 15px;
          color: #0f172a;
        }

        .pathway-bottom-note p {
          margin: 0;
          color: #64748b;
          font-size: 12.5px;
          line-height: 1.65;
        }

        /* FINAL CTA */
        .final-cta {
          padding: 100px 20px;
          text-align: center;
          background:
            radial-gradient(circle at 50% 20%, rgba(249, 115, 22, 0.13), transparent 35%),
            #fffaf5;
          position: relative;
          overflow: hidden;
        }

        .cta-content {
          position: relative;
          z-index: 2;
          max-width: 760px;
          margin: 0 auto;
        }

        .cta-content h2 {
          font-family: var(--font-montserrat), sans-serif;
          font-size: clamp(32px, 4vw, 50px);
          line-height: 1.05;
          letter-spacing: -2px;
          margin: 8px 0 15px;
          font-weight: 800;
        }

        .cta-content h2 span {
          color: #f97316;
        }

        .cta-content p {
          max-width: 650px;
          margin: 0 auto 30px;
          color: #64748b;
          line-height: 1.7;
          font-size: 15px;
        }

        .cta-button {
          display: inline-block;
          background: #f97316;
          color: white;
          text-decoration: none;
          padding: 14px 30px;
          border-radius: 9px;
          font-size: 14px;
          font-weight: 700;
          box-shadow: 0 10px 25px rgba(249, 115, 22, 0.22);
          transition: all 0.25s ease;
        }

        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 30px rgba(249, 115, 22, 0.3);
        }

        /* RESPONSIVE */
        @media (max-width: 1050px) {
          .pathway-hero-inner {
            padding: 80px 40px;
          }
          .enrollment-interactive-grid,
          .completion-interactive-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }
          .enroll-step-list,
          .enroll-image-column,
          .completion-steps-selector,
          .completion-screenshot-panel {
            max-width: 900px;
            margin: 0 auto;
            width: 100%;
          }
        }

        @media (max-width: 760px) {
          .pathway-hero {
            min-height: auto;
          }
          .pathway-hero-inner {
            padding: 70px 22px;
          }
          .hero-copy h1 {
            font-size: 40px;
            letter-spacing: -2px;
          }
          .enrollment-section,
          .showcase-section,
          .completion-section,
          .final-cta {
            padding: 75px 18px;
          }
          .view-mode-tabs {
            flex-direction: column;
          }
          .browser-screenshot-wrapper,
          .showcase-wrapper {
            min-height: 240px;
            aspect-ratio: auto;
          }
        }
      `}</style>
    </main>
  );
}