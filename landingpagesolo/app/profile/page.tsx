"use client";

import Link from "next/link";
import NavBar from "../components/NavBar";
import FadeInSection from "../components/FadeInSection";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

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

  const skills = [
    "Software Development",
    "Information Technology",
    "Web Development",
    "Programming",
    "Database Management",
    "42 More Skills",
  ];

  const educationRecords = [
    {
      title: "Bachelor's Degree",
      institution: "Your Institution",
      period: "Present",
      skills: "14 Skills",
      description:
        "Currently pursuing higher education with a focus on developing technical, professional, and practical skills.",
    },
    {
      title: "Higher Secondary Education",
      institution: "Your School",
      period: "Completed",
      skills: "",
      description:
        "Completed higher secondary education with a focus on academic and foundational skills.",
    },
    {
      title: "Secondary Education",
      institution: "Your School",
      period: "Completed",
      skills: "",
      description:
        "Completed secondary education and developed a strong foundation across core academic areas.",
    },
  ];

  return (
    <main
      className="portfolio-page"
      style={{
        background: "#ffffff",
        minHeight: "100vh",
        overflowX: "hidden",
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
          PROFILE OVERVIEW
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

            <div className="profile-browser">
              <div className="browser-top">
                <div className="browser-dots">
                  <span />
                  <span />
                  <span />
                </div>

                <div className="browser-title">SOLO · My Profile</div>
              </div>

              <div className="profile-browser-body">
                {/* LEFT ABOUT PANEL */}
                <div className="about-panel">
                  <div className="about-heading">
                    <h3>About Me</h3>

                    <button className="icon-button" type="button">
                      ✎
                    </button>
                  </div>

                  <div className="about-item">
                    <span>Add social link</span>
                    <button className="icon-button" type="button">
                      ✎
                    </button>
                  </div>

                  <div className="about-item">
                    <span>Your Location</span>
                    <button className="icon-button" type="button">
                      ✎
                    </button>
                  </div>
                </div>

                {/* MAIN PROFILE HEADER */}
                <div className="profile-main">
                  <div className="profile-cover">
                    <div className="profile-handle">
                      <span className="profile-symbol">◉</span>
                      @YourUsername
                      <button
                        className="edit-white"
                        type="button"
                      >
                        ✎
                      </button>
                    </div>

                    <button className="cover-button" type="button">
                      📷 Edit cover photo
                    </button>

                    <div className="profile-identity">
                      <div className="avatar">
                        <div className="avatar-inner">👤</div>
                      </div>

                      <div className="identity-text">
                        <div className="identity-name">
                          Your Name
                          <button
                            className="edit-white"
                            type="button"
                          >
                            ✎
                          </button>
                        </div>

                        <div className="identity-bio">
                          Learner and aspiring professional
                          <button
                            className="edit-white"
                            type="button"
                          >
                            ✎
                          </button>
                        </div>
                      </div>

                      <div className="profile-stats">
                        <div>
                          <strong>0</strong>
                          <span>Posts</span>
                        </div>

                        <div>
                          <strong>0</strong>
                          <span>Followers</span>
                        </div>

                        <div>
                          <strong>0</strong>
                          <span>Following</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* SKILLS PANEL */}
                <div className="skills-panel">
                  <div className="skills-heading">
                    <h3>Acquired Skills</h3>
                    <button className="icon-button" type="button">
                      ✎
                    </button>
                  </div>

                  <div className="skill-list">
                    {skills.map((skill, index) => (
                      <span
                        key={index}
                        className={
                          skill === "42 More Skills"
                            ? "skill-chip more"
                            : "skill-chip"
                        }
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* PROFILE ACTIONS */}
                <div className="profile-actions">
                  <button type="button">Verify Government ID</button>
                  <button type="button">Ask for endorsement</button>
                  <button type="button">Profile CLR</button>
                  <button type="button">Copy Profile Link</button>
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

                  {tab.count && (
                    <span className="tab-count">{tab.count}</span>
                  )}
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
          EDUCATION RECORDS
      ========================================================= */}
      <FadeInSection>
        <section className="records-section">
          <div className="section-container">
            <div className="section-heading center">
              <span className="section-label">PROFILE RECORD</span>

              <h2>
                Your education,
                <span> clearly presented.</span>
              </h2>

              <p>
                Profile records can contain details, skills, descriptions, and
                credential information associated with your achievements.
              </p>
            </div>

            <div className="education-interface">
              <div className="education-header">
                <h3>Education</h3>

                <div className="education-actions">
                  <button type="button">⊞ Add</button>
                  <button type="button">⇩ Import</button>
                </div>
              </div>

              <div className="education-grid">
                {educationRecords.map((record, index) => (
                  <div
                    key={index}
                    className="education-card"
                    style={{
                      animationDelay: `${index * 120}ms`,
                    }}
                  >
                    <div className="education-card-top">
                      <div className="credential-badge">
                        <div className="badge-inner">★</div>
                      </div>

                      <div className="education-info">
                        <h4>{record.title}</h4>

                        <p className="institution">
                          {record.institution}
                        </p>

                        <p className="period">{record.period}</p>

                        <div className="record-tags">
                          {record.skills && (
                            <span>{record.skills}</span>
                          )}

                          <span>Self Issued</span>
                        </div>
                      </div>
                    </div>

                    <p className="education-description">
                      {record.description}
                      <span> see more</span>
                    </p>

                    <div className="education-card-footer">
                      <button
                        className="footer-icon"
                        type="button"
                      >
                        ✎
                      </button>

                      <button
                        className="footer-icon"
                        type="button"
                      >
                        ▢
                      </button>

                      <button
                        className="footer-icon"
                        type="button"
                      >
                        ◉
                      </button>

                      <button
                        className="open-badge"
                        type="button"
                      >
                        Openbadge
                      </button>

                      <button
                        className="credential-link"
                        type="button"
                      >
                        View Credential
                      </button>
                    </div>
                  </div>
                ))}
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

              <div className="skills-visual">
                <div className="floating-label label-one">
                  <span>✓</span>
                  Skill added
                </div>

                <div className="floating-label label-two">
                  <span>✓</span>
                  Profile updated
                </div>

                <div className="skill-card-large">
                  <div className="skill-card-header">
                    <div>
                      <small>PROFILE</small>
                      <h3>Acquired Skills</h3>
                    </div>

                    <button type="button">✎</button>
                  </div>

                  <div className="large-skill-list">
                    {[
                      "Web Development",
                      "Software Development",
                      "Programming",
                      "Database Management",
                      "Information Technology",
                      "Problem Solving",
                    ].map((skill, index) => (
                      <div
                        className="large-skill"
                        key={index}
                        style={{
                          animationDelay: `${index * 100}ms`,
                        }}
                      >
                        <span>✓</span>
                        {skill}
                      </div>
                    ))}
                  </div>

                  <div className="skills-more">
                    + 42 More Skills
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

                <p>
                  Complete learning or other eligible activities.
                </p>
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

                <p>
                  Share your verified achievements with others.
                </p>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* =========================================================
          WHY PROFILE MATTERS
      ========================================================= */}
      <FadeInSection>
        <section className="why-section">
          <div className="section-container">
            <div className="why-grid">
              <div>
                <span className="section-label">WHY IT MATTERS</span>

                <h2>
                  Keep your
                  <span> capabilities visible.</span>
                </h2>

                <p>
                  SOLO is designed to help learners move beyond scattered
                  certificates and disconnected records by maintaining a
                  professional profile containing their skills, experiences,
                  and achievements.
                </p>
              </div>

              <div className="why-cards">
                <div className="why-card">
                  <span>01</span>

                  <h3>One professional profile</h3>

                  <p>
                    Bring your education, experience, skills and achievements
                    together.
                  </p>
                </div>

                <div className="why-card">
                  <span>02</span>

                  <h3>Evidence of your learning</h3>

                  <p>
                    Showcase projects, achievements, credentials and badges
                    connected to your learning.
                  </p>
                </div>

                <div className="why-card">
                  <span>03</span>

                  <h3>Professional visibility</h3>

                  <p>
                    Share your profile and achievements with employers,
                    institutions, mentors, and your professional network.
                  </p>
                </div>

                <div className="why-card">
                  <span>04</span>

                  <h3>A profile that grows</h3>

                  <p>
                    Continue adding new skills, experiences, learning
                    activities and achievements as you progress.
                  </p>
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
          <div className="cta-glow" />

          <div className="cta-content">
            <span className="section-label">
              YOUR PROFESSIONAL PROFILE
            </span>

            <h2>
              Make your skills
              <span> visible.</span>
            </h2>

            <p>
              Build a profile that brings together your education, skills,
              experience, projects, learning activities, and achievements.
            </p>

            <Link href="/signup" className="cta-button">
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

        .hero-copy h1 span {
          color: #f97316;
        }

        .hero-copy h1 .orange-text {
          display: inline;
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
          font-size: 13px;
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
           PROFILE SHOWCASE
        ===================================================== */

        .profile-showcase-section {
          padding: 100px 20px;
          background: #fffaf5;
          border-top: 1px solid #f1f5f9;
          border-bottom: 1px solid #f1f5f9;
        }

        .profile-browser {
          background: #eef1f5;
          border-radius: 18px;
          border: 1px solid #dbe1e8;
          box-shadow: 0 25px 70px rgba(15, 23, 42, 0.1);
          overflow: hidden;
          transform: translateY(0);
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }

        .profile-browser:hover {
          transform: translateY(-5px);
          box-shadow: 0 30px 80px rgba(15, 23, 42, 0.14);
        }

        .browser-top {
          height: 42px;
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
        }

        .profile-browser-body {
          padding: 26px;
          display: grid;
          grid-template-columns: 300px 1fr;
          gap: 20px;
        }

        .about-panel {
          background: #ffffff;
          border-radius: 12px;
          padding: 24px;
          min-height: 280px;
          border: 1px solid #e2e8f0;
        }

        .about-heading {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .about-heading h3 {
          font-size: 20px;
          margin: 0;
          color: #172033;
        }

        .about-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 18px;
          font-size: 14px;
          color: #334155;
        }

        .icon-button {
          background: transparent;
          border: none;
          color: #ff5500;
          font-size: 16px;
          cursor: default;
        }

        .profile-main {
          min-width: 0;
        }

        .profile-cover {
          min-height: 280px;
          border-radius: 12px;
          position: relative;
          overflow: hidden;
          background:
            linear-gradient(
              145deg,
              #22c8df 0%,
              #4387f5 48%,
              #6436c6 100%
            );
          color: white;
        }

        .profile-handle {
          position: absolute;
          top: 22px;
          left: 25px;
          font-size: 14px;
          display: flex;
          align-items: center;
          gap: 7px;
        }

        .profile-symbol {
          width: 23px;
          height: 23px;
          border: 2px solid white;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .edit-white {
          background: transparent;
          border: none;
          color: #ff5500;
          cursor: default;
          font-size: 15px;
        }

        .profile-handle .edit-white,
        .identity-name .edit-white,
        .identity-bio .edit-white {
          color: #ff5500;
        }

        .cover-button {
          position: absolute;
          right: 24px;
          top: 18px;
          border: none;
          background: white;
          color: #475569;
          padding: 9px 14px;
          border-radius: 9px;
          font-size: 12px;
          cursor: default;
        }

        .profile-identity {
          position: absolute;
          left: 25px;
          right: 25px;
          bottom: 22px;
          display: flex;
          align-items: flex-end;
          gap: 14px;
        }

        .avatar {
          width: 58px;
          height: 58px;
          border-radius: 50%;
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 3px solid rgba(255, 255, 255, 0.85);
        }

        .avatar-inner {
          font-size: 25px;
        }

        .identity-text {
          flex: 1;
        }

        .identity-name {
          font-weight: 800;
          font-size: 17px;
          margin-bottom: 5px;
        }

        .identity-bio {
          font-size: 13px;
        }

        .profile-stats {
          display: flex;
          gap: 32px;
        }

        .profile-stats div {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .profile-stats strong {
          font-size: 16px;
        }

        .profile-stats span {
          font-size: 11px;
          margin-top: 4px;
        }

        .skills-panel {
          grid-column: 1 / -1;
          background: white;
          border-radius: 12px;
          padding: 25px;
          border: 1px solid #e2e8f0;
        }

        .skills-heading {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 18px;
        }

        .skills-heading h3 {
          margin: 0;
          font-size: 18px;
        }

        .skill-list {
          display: flex;
          flex-wrap: wrap;
          gap: 9px;
        }

        .skill-chip {
          padding: 7px 14px;
          border: 1px solid #d9e0e8;
          border-radius: 8px;
          color: #526173;
          background: #ffffff;
          font-size: 12.5px;
          transition: all 0.25s ease;
        }

        .skill-chip:hover {
          border-color: #f97316;
          color: #f97316;
          transform: translateY(-2px);
        }

        .skill-chip.more {
          background: #f8fafc;
          font-weight: 700;
        }

        .profile-actions {
          grid-column: 1 / -1;
          display: flex;
          justify-content: flex-end;
          flex-wrap: wrap;
          gap: 9px;
        }

        .profile-actions button {
          background: white;
          border: 1.5px solid #ff6b2c;
          color: #ff5b1a;
          border-radius: 8px;
          padding: 8px 13px;
          font-size: 12px;
          cursor: default;
          transition: none;
        }

        .profile-actions button:hover {
          background: white;
          transform: none;
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
          transition: none;
          cursor: default;
        }

        .profile-tab:hover {
          transform: none;
          background: #f8fafc;
          border-color: transparent;
          box-shadow: none;
        }

        .profile-tab-active {
          color: #ff5500;
          background: #fff;
          border-bottom: 3px solid #ff7a32;
          box-shadow: 0 8px 25px rgba(15, 23, 42, 0.06);
        }

        .profile-tab-active:hover {
          background: #fff;
          border-bottom: 3px solid #ff7a32;
          border-color: transparent;
          box-shadow: 0 8px 25px rgba(15, 23, 42, 0.06);
          transform: none;
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
           EDUCATION RECORDS
        ===================================================== */

        .records-section {
          padding: 100px 20px;
          background: #f8fafc;
          border-top: 1px solid #e2e8f0;
          border-bottom: 1px solid #e2e8f0;
        }

        .education-interface {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 30px;
          box-shadow: 0 15px 40px rgba(15, 23, 42, 0.05);
        }

        .education-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 25px;
        }

        .education-header h3 {
          font-size: 21px;
          margin: 0;
        }

        .education-actions {
          display: flex;
          gap: 10px;
        }

        .education-actions button {
          background: white;
          border: 1.5px solid #ff5b1a;
          color: #ff5b1a;
          padding: 8px 14px;
          border-radius: 8px;
          font-size: 12px;
          cursor: default;
          transition: none;
        }

        .education-actions button:hover {
          background: white;
          transform: none;
        }

        .education-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .education-card {
          background: #ffffff;
          border: 1px solid #dce2e8;
          border-radius: 11px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(15, 23, 42, 0.05);
          animation: cardReveal 0.65s ease both;
          transition: all 0.3s ease;
        }

        .education-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 18px 35px rgba(15, 23, 42, 0.1);
        }

        .education-card-top {
          padding: 20px;
          display: flex;
          gap: 16px;
        }

        .credential-badge {
          width: 78px;
          height: 78px;
          flex: 0 0 78px;
          border-radius: 50%;
          border: 3px solid #ff8500;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          background: #fff;
        }

        .credential-badge::before {
          content: "";
          position: absolute;
          inset: 5px;
          border: 1px dashed #ffae5b;
          border-radius: 50%;
        }

        .badge-inner {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #ff9900;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 19px;
          position: relative;
        }

        .education-info {
          min-width: 0;
        }

        .education-info h4 {
          margin: 0 0 4px;
          font-size: 16px;
          color: #23334a;
        }

        .education-info p {
          margin: 3px 0;
        }

        .institution {
          font-size: 13px;
          color: #526173;
        }

        .period {
          font-size: 11px;
          color: #64748b;
        }

        .record-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 5px;
          margin-top: 9px;
        }

        .record-tags span {
          background: #fff0df;
          color: #ff6800;
          padding: 5px 8px;
          border-radius: 7px;
          font-size: 10px;
          font-weight: 700;
        }

        .education-description {
          padding: 0 20px 18px;
          margin: 0;
          min-height: 72px;
          font-size: 12.5px;
          color: #64748b;
          line-height: 1.5;
        }

        .education-description span {
          color: #ff5500;
        }

        .education-card-footer {
          background: #f5f5f5;
          border-top: 1px solid #edf0f2;
          padding: 12px 18px;
          display: flex;
          align-items: center;
          gap: 13px;
          flex-wrap: wrap;
        }

        .footer-icon {
          background: transparent;
          border: none;
          color: #ff5b1a;
          cursor: default;
          transition: none;
        }

        .footer-icon:hover {
          transform: none;
          color: #ff5b1a;
        }

        .open-badge {
          border: none;
          background: #ff9900;
          color: white;
          border-radius: 7px;
          padding: 7px 10px;
          font-size: 10px;
          font-weight: 700;
          cursor: default;
          transition: none;
        }

        .open-badge:hover {
          background: #ff9900;
          transform: none;
        }

        .credential-link {
          background: transparent;
          border: none;
          color: #ff5b1a;
          font-size: 11px;
          font-weight: 600;
          cursor: default;
          transition: none;
        }

        .credential-link:hover {
          color: #ff5b1a;
          transform: none;
        }

        /* =====================================================
           SKILLS
        ===================================================== */

        .skills-explanation-section {
          padding: 110px 20px;
          background: #ffffff;
        }

        .skills-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
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

        .skills-visual {
          position: relative;
          min-height: 470px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .skill-card-large {
          width: 100%;
          max-width: 500px;
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 28px;
          box-shadow: 0 25px 60px rgba(15, 23, 42, 0.1);
          position: relative;
          z-index: 2;
        }

        .skill-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #edf0f3;
          padding-bottom: 17px;
          margin-bottom: 18px;
        }

        .skill-card-header small {
          color: #f97316;
          font-weight: 800;
          font-size: 9px;
          letter-spacing: 1.5px;
        }

        .skill-card-header h3 {
          margin: 4px 0 0;
          font-size: 18px;
        }

        .skill-card-header button {
          background: transparent;
          border: none;
          color: #f97316;
          cursor: default;
        }

        .large-skill-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .large-skill {
          padding: 11px 13px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          font-size: 12.5px;
          color: #475569;
          display: flex;
          gap: 9px;
          animation: skillSlide 0.5s ease both;
        }

        .large-skill span {
          color: #10b981;
          font-weight: 800;
        }

        .skills-more {
          margin-top: 15px;
          display: inline-block;
          padding: 7px 13px;
          border-radius: 20px;
          background: #fff7ed;
          border: 1px solid #fed7aa;
          color: #f97316;
          font-size: 11px;
          font-weight: 700;
        }

        .floating-label {
          position: absolute;
          z-index: 3;
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 9px;
          padding: 10px 13px;
          font-size: 11px;
          font-weight: 700;
          box-shadow: 0 10px 25px rgba(15, 23, 42, 0.08);
          animation: floating 3s ease-in-out infinite;
        }

        .floating-label span {
          color: #10b981;
          margin-right: 5px;
        }

        .label-one {
          top: 20px;
          right: 0;
        }

        .label-two {
          bottom: 25px;
          left: 0;
          animation-delay: 1.2s;
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
           WHY
        ===================================================== */

        .why-section {
          padding: 110px 20px;
          background: #ffffff;
        }

        .why-grid {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: 80px;
          align-items: start;
        }

        .why-grid h2 {
          font-family: var(--font-montserrat), sans-serif;
          font-size: clamp(30px, 3.5vw, 45px);
          line-height: 1.1;
          letter-spacing: -1.5px;
          margin: 8px 0 18px;
        }

        .why-grid h2 span {
          color: #f97316;
        }

        .why-grid > div:first-child p {
          color: #64748b;
          font-size: 14px;
          line-height: 1.75;
        }

        .why-cards {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
        }

        .why-card {
          border: 1px solid #e2e8f0;
          border-radius: 13px;
          padding: 23px;
          background: #f8fafc;
          transition: all 0.3s ease;
        }

        .why-card:hover {
          background: white;
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(15, 23, 42, 0.07);
        }

        .why-card > span {
          font-size: 11px;
          color: #f97316;
          font-weight: 800;
        }

        .why-card h3 {
          margin: 17px 0 7px;
          font-size: 15px;
        }

        .why-card p {
          margin: 0;
          color: #64748b;
          font-size: 12.5px;
          line-height: 1.6;
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
           ANIMATIONS
        ===================================================== */

        @keyframes cardReveal {
          from {
            opacity: 0;
            transform: translateY(25px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes skillSlide {
          from {
            opacity: 0;
            transform: translateX(15px);
          }

          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes floating {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-7px);
          }
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

          .profile-browser-body {
            grid-template-columns: 1fr;
          }

          .about-panel {
            min-height: auto;
          }

          .education-grid {
            grid-template-columns: 1fr 1fr;
          }

          .skills-content,
          .why-grid {
            grid-template-columns: 1fr;
            gap: 50px;
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

          .hero-description {
            font-size: 14px;
          }

          .hero-points {
            flex-direction: column;
          }

          .intro-section,
          .profile-showcase-section,
          .sections-section,
          .records-section,
          .skills-explanation-section,
          .credentials-sections,
          .why-section,
          .final-cta {
            padding: 75px 18px;
          }

          .profile-purpose-grid,
          .education-grid,
          .why-cards {
            grid-template-columns: 1fr;
          }

          .purpose-large {
            grid-column: auto;
          }

          .profile-browser-body {
            padding: 12px;
          }

          .profile-identity {
            align-items: flex-start;
          }

          .profile-stats {
            display: none;
          }

          .profile-handle {
            font-size: 11px;
          }

          .cover-button {
            display: none;
          }

          .profile-tabs-demo {
            grid-template-columns: 1fr 1fr;
          }

          .education-interface {
            padding: 18px;
          }

          .education-header {
            align-items: flex-start;
            gap: 15px;
            flex-direction: column;
          }

          .credential-flow {
            grid-template-columns: 1fr;
          }

          .flow-arrow {
            transform: rotate(90deg);
            text-align: center;
          }

          .skills-visual {
            min-height: 400px;
          }

          .floating-label {
            display: none;
          }

          .section-heading h2 {
            font-size: 32px;
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

          .skill-card-large {
            padding: 20px;
          }

          .profile-actions {
            justify-content: flex-start;
          }
        }
      `}</style>
    </main>
  );
}