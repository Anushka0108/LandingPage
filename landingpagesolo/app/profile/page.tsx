"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import NavBar from "../components/NavBar";
import FadeInSection from "../components/FadeInSection";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

function ResumeJourney() {
  const [activeFlow, setActiveFlow] = useState<"import" | "generate">("import");
  const [currentStep, setCurrentStep] = useState(1);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    setCurrentStep(1);
    setActiveStep(0);
  }, [activeFlow]);

  const importSteps = [
    {
      number: "01",
      title: "Select Import Resume",
      description:
        "Choose the Import Resume option to begin adding information from your existing resume.",
      image: "/images/resume/import/step-1.png",
    },
    {
      number: "02",
      title: "Upload Your Resume",
      description:
        "Choose your existing resume file and upload it to SOLO.",
      image: "/images/resume/import/step-2.png",
    },
    {
      number: "03",
      title: "Review Extracted Information",
      description:
        "SOLO extracts information such as skills, education, work experience, and projects for you to review.",
      image: "/images/resume/import/step-3.png",
    },
    {
      number: "04",
      title: "Edit & Confirm",
      description:
        "Review the imported information and make any necessary changes before saving it.",
      image: "/images/resume/import/step-4.png",
    },
    {
      number: "05",
      title: "Save & Finish",
      description:
        "Confirm your information and save it to your SOLO profile.",
      image: "/images/resume/import/step-5.png",
    },
  ];

  const generateSteps = [
    {
      number: "01",
      title: "Complete Your Profile",
      description:
        "Keep your skills, education, projects, experience, and credentials updated in your SOLO profile.",
      image: "/images/resume/generate/step-1.png",
    },
    {
      number: "02",
      title: "Access Generate Resume",
      description:
        "Go to your My Profile page and select the Generate Resume option.",
      image: "/images/resume/generate/step-2.png",
    },
    {
      number: "03",
      title: "Choose Your Information",
      description:
        "Select or deselect the profile sections and achievements you want to include.",
      image: "/images/resume/generate/step-3.png",
    },
    {
      number: "04",
      title: "Choose a Template",
      description:
        "Select one of the professionally designed, ATS-ready resume templates.",
      image: "/images/resume/generate/step-4.png",
    },
    {
      number: "05",
      title: "Preview & Download",
      description:
        "Review your completed resume and download it when you are ready to use it.",
      image: "/images/resume/generate/step-5.png",
    },
  ];

  const steps = activeFlow === "import" ? importSteps : generateSteps;

  return (
    <div className="resume-journey">
      {/* FLOW SWITCHER */}
      <div className="resume-flow-switcher">
        <button
          type="button"
          className={
            activeFlow === "import"
              ? "resume-flow-button active"
              : "resume-flow-button"
          }
          onClick={() => setActiveFlow("import")}
        >
          <span>01</span>
          Import Your Resume
        </button>

        <button
          type="button"
          className={
            activeFlow === "generate"
              ? "resume-flow-button active"
              : "resume-flow-button"
          }
          onClick={() => setActiveFlow("generate")}
        >
          <span>02</span>
          Generate Your Resume
        </button>
      </div>

      {/* MAIN JOURNEY */}
      <div className="resume-journey-grid">
        {/* LEFT - STEPS */}
        <div className="resume-step-list">
          <div className="resume-step-intro">
            <span>
              {activeFlow === "import" ? "IMPORT RESUME" : "GENERATE RESUME"}
            </span>
            <p>
              {activeFlow === "import"
                ? "Bring your existing resume into your SOLO profile."
                : "Create an updated resume from your SOLO profile."}
            </p>
          </div>

          {steps.map((step, index) => (
            <button
              type="button"
              key={step.number}
              className={
                index === activeStep ? "resume-step active" : "resume-step"
              }
              onClick={() => setActiveStep(index)}
            >
              <div className="resume-step-number">{step.number}</div>

              <div className="resume-step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </button>
          ))}
        </div>

        {/* RIGHT - IMAGE */}
        <div className="resume-image-area">
          <div className="resume-image-browser">
            <div className="resume-browser-bar">
              <div className="resume-browser-dots">
                <span />
                <span />
                <span />
              </div>

              <span>
                {activeFlow === "import"
                  ? "SOLO | Import Resume"
                  : "SOLO | Generate Resume"}
              </span>
            </div>

            <div className="resume-image-wrapper">
              <img
                key={steps[activeStep].image}
                src={steps[activeStep].image}
                alt={steps[activeStep].title}
                className="resume-step-image"
                onError={(e) => {
                  (e.currentTarget as HTMLElement).style.display = "none";
                }}
              />

              <div className="resume-image-placeholder">
                <span>ADD SCREENSHOT</span>
                <strong>{steps[activeStep].title}</strong>
                <small>{steps[activeStep].image}</small>
              </div>
            </div>
          </div>

          <div className="resume-image-caption">
            <span>STEP {steps[activeStep].number}</span>
            <strong>{steps[activeStep].title}</strong>
          </div>
        </div>
      </div>

      {/* BOTTOM SUMMARY */}
      <div className="resume-bottom-note">
        <div className="resume-bottom-icon">✓</div>
        <div>
          <h3>One profile. Multiple uses.</h3>
          <p>
            Information stored in your SOLO profile can be used to support your
            resume and career applications, helping you keep your professional
            information current as your skills and achievements grow.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function LifelongSkillsPortfolioPage() {
  const profileTabs = [
    { name: "Education", count: "3", active: true },
    { name: "Work Experience", count: "1" },
    { name: "Internships" },
    { name: "Courses", count: "9" },
    { name: "Hackathons" },
    { name: "Live Projects" },
    { name: "Volunteering" },
    { name: "Other Achievements" },
    { name: "Posts" },
    { name: "Endorsements" },
  ];

  return (
    <main
      className="portfolio-page"
      style={{
        background: "#ffffff",
        minHeight: "100vh",
        overflowX: "visible",
      }}
    >
      <NavBar />

      {/* =========================================================
          HERO
      ========================================================= */}
      <FadeInSection>
        <section className="profile-hero">
          <div className="hero-background-glow glow-one" />
          <div className="hero-background-glow glow-two" />
          <div className="hero-background-glow glow-three" />

          <div className="profile-hero-inner">
            <div className="hero-copy">
              <p className="hero-label">LIFELONG SKILLS PROFILE</p>

              <h1>
                Your skills,
                <span> experience,</span>
                <br />
                and achievements
                <span className="orange-text"> in one profile.</span>
              </h1>

              <p className="hero-description">
                Your SOLO profile brings together the information that
                represents what you have learned, built, and achieved.
              </p>

              <div className="hero-buttons">
                <a href="#profile-overview" className="hero-primary">
                  Explore Your Profile
                </a>

                <a href="#profile-sections" className="hero-secondary">
                  See What You Can Showcase
                </a>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* =========================================================
          INTRO
      ========================================================= */}
      <FadeInSection>
        <section className="intro-section">
          <div className="section-container">
            <div className="section-heading">
              <span className="section-label">YOUR SOLO PROFILE</span>

              <h2>
                More than a profile.
                <br />
                <span>A complete record of what you can do.</span>
              </h2>

              <p>
                Your SOLO profile is designed to bring your professional and
                learning information together. Instead of keeping education,
                skills, experiences, projects, and achievements in separate
                places, they can be organized within your learner profile.
              </p>
            </div>

            <div className="profile-purpose-grid">
              <div className="purpose-card purpose-large">
                <div className="purpose-number">01</div>
                <div>
                  <h3>Build your professional identity</h3>
                  <p>
                    Add your basic information, profile photo, cover photo,
                    biography, education, experience, projects, courses,
                    achievements, and other relevant information.
                  </p>
                </div>
              </div>

              <div className="purpose-card">
                <div className="purpose-number">02</div>
                <div>
                  <h3>Showcase your skills</h3>
                  <p>
                    Your acquired skills are displayed as part of your profile,
                    helping you present the capabilities you have developed.
                  </p>
                </div>
              </div>

              <div className="purpose-card">
                <div className="purpose-number">03</div>
                <div>
                  <h3>Keep your achievements together</h3>
                  <p>
                    Education, projects, internships, courses, badges,
                    certificates, and other achievements can be represented in
                    one profile.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* =========================================================
          PROFILE OVERVIEW (ACTUAL SCREENSHOT CONTAINER)
      ========================================================= */}
      <FadeInSection>
        <section id="profile-overview" className="profile-showcase-section">
          <div className="section-container">
            <div className="section-heading center">
              <span className="section-label">PROFILE OVERVIEW</span>
              <h2>
                See your profile
                <span> at a glance.</span>
              </h2>
              <p>
                The profile brings your identity, skills, and professional
                information together in a single view.
              </p>
            </div>

            {/* SCREENSHOT BROWSER FRAME */}
            <div className="profile-browser">
              <div className="browser-top">
                <div className="browser-dots">
                  <span />
                  <span />
                  <span />
                </div>
              </div>

              <div className="profile-screenshot-wrapper">
                {/* 
                  Drop your actual full-width profile screenshot at:
                  /public/images/profile/profile-overview.png
                */}
                <img
                  src="/images/profile/profile-overview.png"
                  alt="SOLO Lifelong Skills Profile View"
                  className="profile-actual-image"
                  onError={(e) => {
                    (e.currentTarget as HTMLElement).style.display = "none";
                  }}
                />

                <div className="profile-screenshot-placeholder">
                  <span>ADD PROFILE SCREENSHOT</span>
                  <strong>SOLO Profile Overview</strong>
                  <p>
                    Replace with full capture of your My Profile view
                    demonstrating the learner header, acquired skills, and
                    overview.
                  </p>
                  <small>/public/images/profile/profile-overview.png</small>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* =========================================================
          PROFILE SECTIONS
      ========================================================= */}
      <FadeInSection>
        <section id="profile-sections" className="sections-section">
          <div className="section-container">
            <div className="section-heading">
              <span className="section-label">YOUR PROFILE RECORDS</span>
              <h2>
                Everything has
                <span> its place.</span>
              </h2>
              <p>
                Your profile organizes different types of learning and
                experience into separate sections, making it easier to present
                the full picture of your capabilities.
              </p>
            </div>

            <div className="profile-tabs-demo">
              {profileTabs.map((tab, index) => (
                <div
                  key={index}
                  className={`profile-tab ${
                    tab.active ? "profile-tab-active" : ""
                  }`}
                >
                  <span>{tab.name}</span>
                  {tab.count && <span className="tab-count">{tab.count}</span>}
                </div>
              ))}
            </div>

            <div className="section-explanation">
              <div className="explanation-line" />
              <div>
                <h3>One profile, different types of experience.</h3>
                <p>
                  Depending on what you have completed, your profile can
                  contain education, work experience, internships, courses,
                  hackathons, live projects, volunteering, achievements,
                  posts, and endorsements.
                </p>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* =========================================================
          RECORDS (ACTUAL SCREENSHOT CONTAINER)
      ========================================================= */}
      <FadeInSection>
        <section className="records-section">
          <div className="section-container">
            <div className="section-heading center">
              <span className="section-label">PROFILE RECORDS</span>
              <h2>
                Your achievements,
                <span> clearly organized.</span>
              </h2>
              <p>
                Profile records contain details, skills, descriptions, and
                credential information associated with each section of your
                learning journey.
              </p>
            </div>

            <div className="profile-browser">
              <div className="browser-top">
                <div className="browser-dots">
                  <span />
                  <span />
                  <span />
                </div>
              </div>

              <div className="profile-screenshot-wrapper">
                {/* 
                  Drop your actual records / education / experience section screenshot at:
                  /public/images/profile/profile-records.png
                */}
                <img
                  src="/images/profile/profile-records.png"
                  alt="SOLO Profile Records and Timeline"
                  className="profile-actual-image"
                  onError={(e) => {
                    (e.currentTarget as HTMLElement).style.display = "none";
                  }}
                />

                <div className="profile-screenshot-placeholder">
                  <span>ADD RECORDS SCREENSHOT</span>
                  <strong>Records and Timeline Section</strong>
                  <p>
                    Capture showing education cards, self-issued credentials,
                    and badge verification details.
                  </p>
                  <small>/public/images/profile/profile-records.png</small>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* =========================================================
          SKILLS
      ========================================================= */}
      <FadeInSection>
        <section className="skills-explanation-section">
          <div className="section-container">
            <div className="skills-content">
              <div className="skills-copy">
                <span className="section-label">ACQUIRED SKILLS</span>
                <h2>
                  Your skills become
                  <span> part of your profile.</span>
                </h2>
                <p>
                  SOLO allows learners to add relevant skills while building
                  their profile. Keeping your skills updated helps the platform
                  provide recommendations relevant to your interests and
                  capabilities.
                </p>

                <div className="skills-benefits">
                  <div className="benefit">
                    <span>01</span>
                    <div>
                      <strong>Show what you know</strong>
                      <p>
                        Display the skills associated with your learning and
                        experiences.
                      </p>
                    </div>
                  </div>

                  <div className="benefit">
                    <span>02</span>
                    <div>
                      <strong>Connect skills to your profile</strong>
                      <p>
                        Skills can appear alongside your education,
                        experiences, and achievements.
                      </p>
                    </div>
                  </div>

                  <div className="benefit">
                    <span>03</span>
                    <div>
                      <strong>Keep your profile relevant</strong>
                      <p>
                        Updated skills help SOLO provide relevant
                        recommendations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* SKILLS SCREENSHOT CONTAINER */}
              <div className="skills-screenshot-container">
                <div className="resume-image-browser">
                  <div className="resume-browser-bar">
                    <div className="resume-browser-dots">
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>

                  <div className="resume-image-wrapper">
                    {/* 
                      Drop actual skills drawer or profile skills list screenshot at:
                      /public/images/profile/skills-view.png
                    */}
                    <img
                      src="/images/profile/skills-view.png"
                      alt="SOLO Acquired Skills Section"
                      className="resume-step-image"
                      onError={(e) => {
                        (e.currentTarget as HTMLElement).style.display = "none";
                      }}
                    />

                    <div className="resume-image-placeholder">
                      <span>ADD SCREENSHOT</span>
                      <strong>Acquired Skills Drawer / Widget</strong>
                      <small>/public/images/profile/skills-view.png</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* =========================================================
          CREDENTIALS
      ========================================================= */}
      <FadeInSection>
        <section className="credentials-sections">
          <div className="section-container">
            <div className="section-heading center">
              <span className="section-label">
                CREDENTIALS & ACHIEVEMENTS
              </span>
              <h2>
                Your achievements can become
                <span> verifiable proof.</span>
              </h2>
              <p>
                SOLO supports verified credentials and digital badges that can
                be associated with your learning and achievements.
              </p>
            </div>

            <div className="credential-flow">
              <div className="credential-step">
                <div className="credential-number">01</div>
                <div className="credential-icon">🏆</div>
                <h3>Achievement</h3>
                <p>Complete learning or other eligible activities.</p>
              </div>

              <div className="flow-arrow">→</div>

              <div className="credential-step">
                <div className="credential-number">02</div>
                <div className="credential-icon">✓</div>
                <h3>Credential</h3>
                <p>
                  Receive a credential or badge after assessment and issuance.
                </p>
              </div>

              <div className="flow-arrow">→</div>

              <div className="credential-step">
                <div className="credential-number">03</div>
                <div className="credential-icon">↗</div>
                <h3>Showcase</h3>
                <p>Share your verified achievements with others.</p>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* =========================================================
          RESUME IMPORT & GENERATION
      ========================================================= */}
      <FadeInSection>
        <section className="resume-section">
          <div className="section-container">
            <div className="section-heading center">
              <span className="section-label">RESUME TO PROFILE & BACK</span>
              <h2>
                Turn your resume into a profile,
                <span> and your profile into a resume.</span>
              </h2>
              <p>
                Import an existing resume into your SOLO profile or generate an
                updated, ATS-ready resume using the information already stored
                in your profile.
              </p>
            </div>

            <ResumeJourney />
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
            <span className="section-label">YOUR PROFESSIONAL PROFILE</span>
            <h2>
              Make your skills
              <span> visible.</span>
            </h2>
            <p>
              Build a profile that brings together your education, skills,
              experience, projects, learning activities, and achievements.
            </p>

            <Link href="https://app.thesolo.network/" className="cta-button">
              Start Building Your Profile
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

        .portfolio-page {
          color: #0f172a;
          font-family: Arial, sans-serif;
        }

        /* =====================================================
           HERO
        ===================================================== */
        .profile-hero {
          min-height: calc(100vh - 65px);
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          background:
            radial-gradient(
              circle at 80% 20%,
              rgba(245, 158, 11, 0.2),
              transparent 28%
            ),
            radial-gradient(
              circle at 10% 80%,
              rgba(239, 68, 68, 0.12),
              transparent 28%
            ),
            radial-gradient(
              circle at 50% 0%,
              rgba(37, 99, 235, 0.1),
              transparent 24%
            ),
            linear-gradient(
              120deg,
              #fff7ed 0%,
              #fffaf5 45%,
              #eff6ff 70%,
              #fff7ed 100%
            );
        }

        .profile-hero-inner {
          width: 100%;
          max-width: 1500px;
          margin: 0 auto;
          padding: 90px 70px;
          position: relative;
          z-index: 3;
        }

        .hero-copy {
          max-width: 850px;
          margin-left: 0;
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
          line-height: 1.03;
          letter-spacing: -3.5px;
          margin: 0;
          font-weight: 800;
          color: #171717;
        }

        .hero-copy h1 span,
        .hero-copy h1 .orange-text {
          color: #f97316;
        }

        .hero-description {
          max-width: 720px;
          margin: 30px 0 32px;
          font-size: 16px;
          line-height: 1.75;
          color: #5d6470;
        }

        .hero-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 42px;
        }

        .hero-primary,
        .hero-secondary {
          padding: 13px 24px;
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
          background: rgba(255, 255, 255, 0.7);
          color: #334155;
          border: 2px solid #e2e8f0;
        }

        .hero-secondary:hover {
          transform: translateY(-3px);
          border-color: #f97316;
          color: #f97316;
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
          right: 3%;
          top: 5%;
          background: rgba(37, 99, 235, 0.12);
        }

        .glow-two {
          width: 360px;
          height: 360px;
          left: 35%;
          bottom: -180px;
          background: rgba(249, 115, 22, 0.1);
        }

        .glow-three {
          width: 260px;
          height: 260px;
          right: 35%;
          bottom: 10%;
          background: rgba(245, 158, 11, 0.08);
        }

        /* =====================================================
           GENERAL SECTIONS
        ===================================================== */
        .section-container {
          width: 100%;
          max-width: 1240px;
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
          font-size: clamp(30px, 3.5vw, 46px);
          line-height: 1.1;
          letter-spacing: -1.8px;
          font-weight: 800;
          color: #0f172a;
          margin: 8px 0 16px;
        }

        .section-heading h2 span {
          color: #f97316;
        }

        .section-heading p {
          max-width: 760px;
          margin: 0;
          color: #64748b;
          font-size: 15px;
          line-height: 1.75;
        }

        .section-heading.center p {
          margin-left: auto;
          margin-right: auto;
        }

        /* =====================================================
           INTRO
        ===================================================== */
        .intro-section {
          padding: 100px 20px;
          background: #ffffff;
        }

        .profile-purpose-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr;
          gap: 18px;
        }

        .purpose-card {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 28px;
          min-height: 210px;
          transition: all 0.3s ease;
        }

        .purpose-card:hover {
          transform: translateY(-7px);
          border-color: rgba(249, 115, 22, 0.35);
          box-shadow: 0 18px 40px rgba(15, 23, 42, 0.07);
        }

        .purpose-number {
          font-size: 13px;
          font-weight: 800;
          color: #f97316;
          margin-bottom: 35px;
        }

        .purpose-card h3 {
          font-size: 18px;
          margin: 0 0 9px;
          color: #0f172a;
        }

        .purpose-card p {
          color: #64748b;
          font-size: 13.5px;
          line-height: 1.65;
          margin: 0;
        }

        /* =====================================================
           SCREENSHOT CONTAINERS (OVERVIEW & RECORDS)
        ===================================================== */
        .profile-showcase-section,
        .records-section {
          padding: 100px 20px;
          background: #fffaf5;
          border-top: 1px solid #f1f5f9;
          border-bottom: 1px solid #f1f5f9;
        }

        .records-section {
          background: #f8fafc;
          border-color: #e2e8f0;
        }

        .profile-browser {
          background: #eef1f5;
          border-radius: 18px;
          border: 1px solid #dbe1e8;
          box-shadow: 0 25px 70px rgba(15, 23, 42, 0.1);
          overflow: hidden;
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }

        .profile-browser:hover {
          transform: translateY(-5px);
          box-shadow: 0 30px 80px rgba(15, 23, 42, 0.14);
        }

        .browser-top {
          height: 44px;
          background: #f8fafc;
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
          background: #f97316;
          opacity: 0.7;
        }

        .browser-title {
          font-size: 11px;
          color: #94a3b8;
          font-weight: 700;
          letter-spacing: 0.5px;
        }

        .profile-screenshot-wrapper {
          position: relative;
          min-height: 520px;
          background: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .profile-actual-image {
          display: block;
          width: 100%;
          height: auto;
          max-height: 750px;
          object-fit: cover;
          object-position: top center;
        }

        .profile-screenshot-placeholder {
          position: absolute;
          inset: 30px;
          border: 2px dashed #cbd5e1;
          border-radius: 14px;
          background: rgba(248, 250, 252, 0.9);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 30px;
        }

        .profile-screenshot-placeholder span {
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1.5px;
          color: #f97316;
        }

        .profile-screenshot-placeholder strong {
          margin-top: 10px;
          font-size: 18px;
          color: #1e293b;
        }

        .profile-screenshot-placeholder p {
          max-width: 480px;
          margin: 8px 0 12px;
          font-size: 13.5px;
          color: #64748b;
          line-height: 1.6;
        }

        .profile-screenshot-placeholder small {
          color: #94a3b8;
          font-family: monospace;
          background: #ffffff;
          padding: 4px 10px;
          border-radius: 6px;
          border: 1px solid #e2e8f0;
          font-size: 11px;
        }

        .profile-actual-image[src] + .profile-screenshot-placeholder {
          display: none;
        }

        /* =====================================================
           PROFILE SECTIONS
        ===================================================== */
        .sections-section {
          padding: 100px 20px;
          background: #ffffff;
        }

        .profile-tabs-demo {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 12px;
        }

        .profile-tab {
          background: #f8fafc;
          border-radius: 13px;
          padding: 16px 12px;
          min-height: 58px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          color: #64748b;
          font-size: 13px;
          border: 1px solid transparent;
        }

        .profile-tab-active {
          color: #ff5500;
          background: #fff;
          border-bottom: 3px solid #ff7a32;
          box-shadow: 0 8px 25px rgba(15, 23, 42, 0.06);
        }

        .tab-count {
          background: #d9dce0;
          color: #fff;
          width: 21px;
          height: 21px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          font-size: 10px;
          font-weight: 800;
        }

        .profile-tab-active .tab-count {
          background: #ff6b35;
        }

        .section-explanation {
          display: flex;
          gap: 20px;
          max-width: 850px;
          margin: 45px auto 0;
          align-items: flex-start;
        }

        .explanation-line {
          width: 4px;
          min-height: 75px;
          background: #f97316;
          border-radius: 4px;
        }

        .section-explanation h3 {
          margin: 0 0 7px;
          font-size: 18px;
        }

        .section-explanation p {
          margin: 0;
          color: #64748b;
          font-size: 13.5px;
          line-height: 1.7;
        }

        /* =====================================================
           SKILLS SECTION
        ===================================================== */
        .skills-explanation-section {
          padding: 110px 20px;
          background: #ffffff;
        }

        .skills-content {
          display: grid;
          grid-template-columns: 1fr 1.15fr;
          gap: 60px;
          align-items: center;
        }

        .skills-copy h2 {
          font-family: var(--font-montserrat), sans-serif;
          font-size: clamp(30px, 3.5vw, 46px);
          line-height: 1.1;
          letter-spacing: -1.8px;
          margin: 8px 0 18px;
        }

        .skills-copy h2 span {
          color: #f97316;
        }

        .skills-copy > p {
          color: #64748b;
          font-size: 15px;
          line-height: 1.75;
          max-width: 580px;
        }

        .skills-benefits {
          margin-top: 35px;
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .benefit {
          display: flex;
          gap: 15px;
        }

        .benefit > span {
          color: #f97316;
          font-size: 12px;
          font-weight: 800;
          min-width: 24px;
        }

        .benefit strong {
          font-size: 14px;
          color: #1e293b;
        }

        .benefit p {
          margin: 4px 0 0;
          color: #64748b;
          font-size: 12.5px;
          line-height: 1.5;
        }

        .skills-screenshot-container {
          min-width: 0;
        }

        /* =====================================================
           CREDENTIALS
        ===================================================== */
        .credentials-sections {
          padding: 100px 20px;
          background: #fffaf5;
          border-top: 1px solid #f1f5f9;
          border-bottom: 1px solid #f1f5f9;
        }

        .credential-flow {
          display: grid;
          grid-template-columns: 1fr auto 1fr auto 1fr;
          align-items: center;
          gap: 20px;
        }

        .credential-step {
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 28px;
          text-align: center;
          min-height: 240px;
          position: relative;
          transition: all 0.3s ease;
        }

        .credential-step:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 35px rgba(15, 23, 42, 0.08);
        }

        .credential-number {
          position: absolute;
          top: 16px;
          right: 18px;
          font-size: 10px;
          font-weight: 800;
          color: #f97316;
        }

        .credential-icon {
          width: 55px;
          height: 55px;
          border-radius: 50%;
          background: #fff7ed;
          color: #f97316;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 10px auto 20px;
          font-size: 21px;
        }

        .credential-step h3 {
          font-size: 17px;
          margin: 0 0 8px;
        }

        .credential-step p {
          color: #64748b;
          font-size: 12.5px;
          line-height: 1.6;
          margin: 0;
        }

        .flow-arrow {
          font-size: 26px;
          color: #f97316;
        }

        /* =====================================================
           RESUME IMPORT & GENERATION
        ===================================================== */
        .resume-section {
          padding: 110px 20px;
          background: #ffffff;
        }

        .resume-journey {
          margin-top: 55px;
        }

        .resume-flow-switcher {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-bottom: 45px;
        }

        .resume-flow-button {
          border: 1px solid #e2e8f0;
          background: #f8fafc;
          color: #64748b;
          border-radius: 10px;
          padding: 12px 20px;
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .resume-flow-button span {
          font-size: 10px;
          color: #94a3b8;
        }

        .resume-flow-button:hover {
          border-color: #f97316;
          color: #f97316;
        }

        .resume-flow-button.active {
          background: #fff7ed;
          border-color: #f97316;
          color: #f97316;
          box-shadow: 0 8px 20px rgba(249, 115, 22, 0.1);
        }

        .resume-flow-button.active span {
          color: #f97316;
        }

        .resume-journey-grid {
          display: grid;
          grid-template-columns: 390px 1fr;
          gap: 60px;
          align-items: center;
        }

        .resume-step-list {
          display: flex;
          flex-direction: column;
        }

        .resume-step-intro {
          padding: 0 0 20px 20px;
        }

        .resume-step-intro span {
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1.5px;
          color: #f97316;
        }

        .resume-step-intro p {
          margin: 7px 0 0;
          color: #64748b;
          font-size: 13px;
          line-height: 1.5;
        }

        .resume-step {
          width: 100%;
          display: flex;
          gap: 16px;
          text-align: left;
          padding: 17px 18px;
          background: transparent;
          border: none;
          border-left: 2px solid #e2e8f0;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .resume-step:hover {
          background: #f8fafc;
        }

        .resume-step.active {
          border-left-color: #f97316;
          background: #fffaf5;
        }

        .resume-step-number {
          width: 32px;
          height: 32px;
          flex: 0 0 32px;
          border-radius: 50%;
          background: #f1f5f9;
          color: #94a3b8;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 9px;
          font-weight: 800;
          transition: all 0.25s ease;
        }

        .resume-step.active .resume-step-number {
          background: #f97316;
          color: #ffffff;
        }

        .resume-step-content {
          flex: 1;
          min-width: 0;
        }

        .resume-step-content h3 {
          margin: 2px 0 5px;
          font-size: 14px;
          color: #334155;
          font-weight: 700;
        }

        .resume-step.active .resume-step-content h3 {
          color: #0f172a;
        }

        .resume-step-content p {
          margin: 0;
          color: #94a3b8;
          font-size: 11.5px;
          line-height: 1.55;
        }

        .resume-step.active .resume-step-content p {
          color: #64748b;
        }

        .resume-image-area {
          min-width: 0;
        }

        .resume-image-browser {
          background: #f1f5f9;
          border: 1px solid #dbe1e8;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 25px 60px rgba(15, 23, 42, 0.1);
        }

        .resume-browser-bar {
          height: 42px;
          background: #f8fafc;
          border-bottom: 1px solid #dbe1e8;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          color: #94a3b8;
          font-size: 10px;
          font-weight: 700;
        }

        .resume-browser-dots {
          position: absolute;
          left: 16px;
          display: flex;
          gap: 6px;
        }

        .resume-browser-dots span {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #cbd5e1;
        }

        .resume-image-wrapper {
          position: relative;
          min-height: 480px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 25px;
          background:
            radial-gradient(
              circle at 50% 30%,
              rgba(249, 115, 22, 0.08),
              transparent 45%
            ),
            #eef2f6;
        }

        .resume-step-image {
          display: block;
          width: 100%;
          max-height: 560px;
          object-fit: contain;
          border-radius: 8px;
          background: #ffffff;
          box-shadow: 0 15px 40px rgba(15, 23, 42, 0.12);
        }

        .resume-image-placeholder {
          position: absolute;
          inset: 25px;
          border: 2px dashed #cbd5e1;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.75);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        .resume-image-placeholder span {
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1.5px;
          color: #f97316;
        }

        .resume-image-placeholder strong {
          margin-top: 10px;
          color: #334155;
          font-size: 16px;
        }

        .resume-image-placeholder small {
          margin-top: 8px;
          color: #94a3b8;
          font-size: 10px;
        }

        .resume-step-image[src] + .resume-image-placeholder {
          display: none;
        }

        .resume-image-caption {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 15px;
        }

        .resume-image-caption span {
          font-size: 10px;
          font-weight: 800;
          color: #f97316;
        }

        .resume-image-caption strong {
          font-size: 13px;
          color: #334155;
        }

        .resume-bottom-note {
          max-width: 950px;
          margin: 35px auto 0;
          padding: 22px 25px;
          display: flex;
          align-items: flex-start;
          gap: 15px;
          border: 1px solid #fed7aa;
          background: #fffaf5;
          border-radius: 14px;
        }

        .resume-bottom-icon {
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

        .resume-bottom-note h3 {
          margin: 2px 0 7px;
          font-size: 15px;
          color: #0f172a;
        }

        .resume-bottom-note p {
          margin: 0;
          color: #64748b;
          font-size: 12.5px;
          line-height: 1.65;
        }

        /* =====================================================
           CTA
        ===================================================== */
        .final-cta {
          padding: 100px 20px;
          text-align: center;
          background:
            radial-gradient(
              circle at 50% 20%,
              rgba(249, 115, 22, 0.13),
              transparent 35%
            ),
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
          padding: 14px 28px;
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

        /* =====================================================
           RESPONSIVE
        ===================================================== */
        @media (max-width: 1050px) {
          .profile-hero-inner {
            padding: 80px 40px;
          }

          .profile-purpose-grid {
            grid-template-columns: 1fr 1fr;
          }

          .purpose-large {
            grid-column: 1 / -1;
          }

          .resume-journey-grid,
          .skills-content {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .profile-tabs-demo {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 760px) {
          .profile-hero {
            min-height: auto;
          }

          .profile-hero-inner {
            padding: 70px 22px;
          }

          .hero-copy h1 {
            font-size: 42px;
            letter-spacing: -2px;
          }

          .intro-section,
          .profile-showcase-section,
          .sections-section,
          .records-section,
          .skills-explanation-section,
          .credentials-sections,
          .resume-section,
          .final-cta {
            padding: 75px 18px;
          }

          .profile-purpose-grid {
            grid-template-columns: 1fr;
          }

          .purpose-large {
            grid-column: auto;
          }

          .profile-tabs-demo {
            grid-template-columns: 1fr 1fr;
          }

          .credential-flow {
            grid-template-columns: 1fr;
          }

          .flow-arrow {
            transform: rotate(90deg);
          }

          .resume-flow-switcher {
            flex-direction: column;
          }

          .profile-screenshot-wrapper {
            min-height: 340px;
          }
        }

        @media (max-width: 480px) {
          .hero-copy h1 {
            font-size: 34px;
          }

          .hero-buttons {
            flex-direction: column;
            align-items: stretch;
          }

          .hero-primary,
          .hero-secondary {
            text-align: center;
          }

          .profile-tabs-demo {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </main>
  );
}