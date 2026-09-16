"use client";
import { successStories } from "./data/successStories";
import NavBar from "./components/NavBar";
import FadeInSection from "./components/FadeInSection";
import Footer from "./components/Footer";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import BackToTop from "./components/BackToTop";

export default function Home() {
  return (
    <main>
      <NavBar></NavBar>
        <section className="hero">
          <FadeInSection>
          <div className="hero-content">
            <div className="hero-text">
              <p className="hero-label">LEARN • GROW • DISCOVER</p>

              <h1>
                Verified skills
                <span> Real Opportunities.</span>
              </h1>

              <p className="hero-description">
                Discover what interests you, develop meaningful skills, and turn
                your learning into opportunities.
              </p>

              <div className="hero-buttons">
                <Link href="/signup" className="hero-primary">
                  Begin Your Journey
                </Link>

                <a href="/contact" className="infra-secondary-btn">
                  Contact Us
                </a>
              </div>
            </div>
          </div>

          <div className="hero-glow hero-glow-one"></div>
          <div className="hero-glow hero-glow-two"></div>
          </FadeInSection>
        </section>

      <FadeInSection>
        <section className="intro-section ">
          <div className="section-heading">
            <p className="section-label">THE SOLO ECOSYSTEM</p>

            <h2>
              Your learning, skills,
              <span> credentials and career — connected.</span>
            </h2>

            <p>
              SOLO brings everything you need to build skills, gain experience,
              earn verified credentials and discover meaningful career
              opportunities into one connected platform.
            </p>
          </div>

          <div className="ecosystem-grid">
            <div className="ecosystem-card">
              <div className="card-number">01</div>
              <h3>Learn</h3>
              <p>
                Explore courses, projects, internships and other learning
                opportunities aligned with your interests.
              </p>
            </div>

            <div className="ecosystem-card">
              <div className="card-number">02</div>
              <h3>Build</h3>
              <p>
                Develop skills through real-world experiences, projects,
                achievements and continuous learning.
              </p>
            </div>

            <div className="ecosystem-card">
              <div className="card-number">03</div>
              <h3>Prove</h3>
              <p>
                Turn your learning and achievements into verifiable credentials
                and digital badges.
              </p>
            </div>

            <div className="ecosystem-card">
              <div className="card-number">04</div>
              <h3>Grow</h3>
              <p>
                Discover career pathways, internships and jobs that match your
                skills and goals.
              </p>
            </div>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section className="journey-section">
          <div className="section-heading center">
            <p className="section-label">YOUR JOURNEY</p>

            <h2>
              From learning to
              <span> opportunity.</span>
            </h2>

            <p>SOLO connects every step of your professional journey.</p>
          </div>

          <div className="journey">
            <div className="journey-item">
              <div className="journey-circle">
                <span className="journey-icon"><svg  xmlns="http://www.w3.org/2000/svg" width={44} height={44} 
                fill={"currentColor"} viewBox={"0 0 24 24"}>
                {/* Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free */}
                <path d="M18 10c0-4.41-3.59-8-8-8s-8 3.59-8 8 3.59 8 8 8c1.85 0 3.54-.63 4.9-1.69l5.1 5.1L21.41 20l-5.1-5.1A8 8 0 0 0 18 10M4 10c0-3.31 2.69-6 6-6s6 2.69 6 6-2.69 6-6 6-6-2.69-6-6"></path>
                </svg></span>
              </div>
              <h3>Discover</h3>
              <p>Explore your interests and career possibilities.</p>
            </div>

            <div className="journey-line"></div>

            <div className="journey-item">
              <div className="journey-circle">
                <span className="journey-icon"><svg  xmlns="http://www.w3.org/2000/svg" width={44} height={44} 
                fill={"currentColor"} viewBox={"0 0 24 24"}>
                {/* Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free */}
                <path d="M21 7h-5V3c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1v8H3c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1M4 13h4v7H4zm6-1V4h4v16h-4zm10 8h-4V9h4z"></path>
                </svg></span>
              </div>
              <h3>Build Skills</h3>
              <p>Develop skills aligned with your career goals.</p>
            </div>

            <div className="journey-line"></div>

            <div className="journey-item">
              <div className="journey-circle">
                <span className="journey-icon"><svg  xmlns="http://www.w3.org/2000/svg" width={44} height={44} 
                fill={"currentColor"} viewBox={"0 0 24 24"}>
                {/* Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free */}
                <path d="m21.45 8.61-9-4.5a1 1 0 0 0-.89 0l-6 3-3 1.5-1 .5a1 1 0 0 0-.55.89v6h2v-5.38l2 1v3.83c0 2.06 3.12 4.56 7 4.56s7-2.49 7-4.56v-3.83l2.45-1.22c.34-.17.55-.52.55-.89s-.21-.72-.55-.89Zm-15 .29L12 6.12l6.76 3.38L12 12.88 5.24 9.5l1.21-.61ZM17 15.45c0 .76-2.11 2.56-5 2.56s-5-1.79-5-2.56v-2.83l4.55 2.28c.14.07.29.11.45.11s.31-.04.45-.11L17 12.62z"></path>
                </svg></span>
              </div>
              <h3>Gain Experience</h3>
              <p>Take courses, projects and internships.</p>
            </div>

            <div className="journey-line"></div>

            <div className="journey-item">
              <div className="journey-circle">
                <span className="journey-icon"><svg  xmlns="http://www.w3.org/2000/svg" width={44} height={44} 
                fill={"currentColor"} viewBox={"0 0 24 24"}>
                {/* Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free */}
                <path d="M19.96 8.52c.02-.17.04-.35.04-.52 0-2.38-2.14-4.29-4.52-3.96C14.79 2.81 13.47 2 12 2s-2.79.8-3.48 2.04C6.14 3.71 4 5.63 4 8c0 .17.01.35.04.52C2.81 9.21 2 10.53 2 12s.8 2.79 2.04 3.48c-.02.17-.04.35-.04.52 0 2.38 2.14 4.28 4.52 3.96C9.21 21.19 10.53 22 12 22s2.79-.8 3.48-2.04C17.86 20.28 20 18.37 20 16c0-.17-.01-.35-.04-.52C21.19 14.79 22 13.47 22 12s-.8-2.79-2.04-3.48m-1.44 5.4-1.1.29.43 1.05c.09.23.14.48.14.73 0 1.1-.9 2-2 2-.25 0-.5-.05-.73-.15l-1.05-.43-.29 1.1c-.23.87-1.02 1.48-1.92 1.48s-1.69-.61-1.92-1.48l-.29-1.1-1.05.43c-.23.09-.48.15-.73.15-1.1 0-2-.9-2-2 0-.25.05-.5.14-.73l.43-1.05-1.1-.29C4.61 13.69 4 12.9 4 12s.61-1.69 1.48-1.92l1.1-.29-.43-1.05c-.09-.23-.14-.48-.14-.73 0-1.1.9-2 2-2 .25 0 .5.05.73.15l1.05.43.29-1.1c.23-.87 1.02-1.48 1.92-1.48s1.69.61 1.92 1.48l.29 1.1 1.05-.43c.23-.09.48-.15.73-.15 1.1 0 2 .9 2 2 0 .25-.05.5-.14.73l-.43 1.05 1.1.29C19.39 10.31 20 11.1 20 12s-.61 1.69-1.48 1.92"></path><path d="m11 12.59-1.29-1.3-1.42 1.42 2.71 2.7 4.74-4.7-1.41-1.42z"></path>
                </svg></span>
              </div>
              <h3>Earn Credentials</h3>
              <p>Turn your achievements into trusted proof.</p>
            </div>

            <div className="journey-line"></div>

            <div className="journey-item">
              <div className="journey-circle">
                <span className="journey-icon"><svg  xmlns="http://www.w3.org/2000/svg" width={44} height={44} 
                fill={"currentColor"} viewBox={"0 0 24 24"}>
                {/* Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free */}
                <path d="M20 6h-3V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2M9 4h6v2H9zM8 8h12v3.07l-.83.39a16.78 16.78 0 0 1-14.34 0L4 11.07V8zM4 20v-6.72c2.54 1.19 5.27 1.79 8 1.79s5.46-.6 8-1.79V20z"></path>
                </svg></span>
              </div>
              <h3>Find Opportunities</h3>
              <p>Move toward your next career opportunity.</p>
            </div>
          </div>

          <div className="journey-decoration journey-decoration-one"></div>
          <div className="journey-decoration journey-decoration-two"></div>
          <div className="journey-decoration journey-decoration-three"></div>
          <div className="journey-decoration journey-decoration-four"></div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section className="opportunities-section">
          <div className="section-heading center">
            <p className="section-label">EXPLORE</p>

            <h2>
              Opportunities that
              <span> move you forward.</span>
            </h2>

            <p>
              Discover experiences that help you learn, build and prepare for
              your career.
            </p>
          </div>

          <div className="opportunity-grid">
            <div className="opportunity-card">
              <span>01</span>
              <h3>Courses</h3>
              <p>Learn new skills through relevant learning opportunities.</p>
              <a href="/explore?type=Courses#opportunity">Explore Courses →</a>
            </div>

            <div className="opportunity-card">
              <span>02</span>
              <h3>Internships</h3>
              <p>Gain practical experience and strengthen your profile.</p>
              <a href="/explore?type=Internships#opportunity">
                Explore Internships →
              </a>
            </div>

            <div className="opportunity-card">
              <span>03</span>
              <h3>Live Projects</h3>
              <p>Apply your knowledge to real-world projects.</p>
              <a href="/explore?type=Projects#opportunity">
                Explore Projects →
              </a>
            </div>

            <div className="opportunity-card">
              <span>04</span>
              <h3>Hackathons</h3>
              <p>Challenge yourself and showcase what you can build.</p>
              <a href="/explore?type=Hackathons#opportunity">
                Explore Hackathons →
              </a>
            </div>

            <div className="opportunity-card">
              <span>05</span>
              <h3>Jobs</h3>
              <p>Find roles that match your skills and career goals.</p>
              <a href="/explore?type=Jobs#opportunity">Explore Jobs →</a>
            </div>

            <div className="opportunity-card">
              <span>06</span>
              <h3>Career Pathways</h3>
              <p>Follow structured learning journeys toward specific roles.</p>
              <a href="/explore?type=Career Pathways#opportunity">
                Explore Pathways →
              </a>
            </div>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section className="profile-section">
          <div className="profile-text">
            <p className="section-label">YOUR PROFESSIONAL IDENTITY</p>

            <h2>
              More than a resume.
              <span> A profile that grows with you.</span>
            </h2>

            <p>
              Build a dynamic professional profile that brings together your
              education, skills, projects, internships, experiences,
              achievements and credentials.
            </p>

            <ul>
              <li>✓ Import your existing resume</li>
              <li>✓ Add skills and interests</li>
              <li>✓ Showcase projects and experience</li>
              <li>✓ Add certificates and badges</li>
              <li>✓ Generate an ATS-ready resume</li>
            </ul>
          </div>

          <div className="profile-preview">
            <div className="profile-top">
              <div className="profile-avatar">A</div>

              <div>
                <h3>Anushka</h3>
                <p>Full Stack Developer</p>
              </div>
            </div>

            <div className="profile-skills">
              <h4>Skills</h4>

              <div>
                <span>JavaScript</span>
                <span>React</span>
                <span>Node.js</span>
                <span>SQL</span>
              </div>
            </div>

            <div className="profile-stats">
              <div>
                <strong>12</strong>
                <small>Credentials</small>
              </div>

              <div>
                <strong>08</strong>
                <small>Projects</small>
              </div>

              <div>
                <strong>04</strong>
                <small>Experiences</small>
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
                    <span className="certificate-brand">◇ academia</span>
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
                    Certification Course. It reflects understanding o...
                    <span> see more</span>
                  </p>
                </div>
              </div>

              <div className="credential-actions">
                <button className="open-badge">Open badge</button>

                <a href="#" className="view-credential">
                  View Credential
                </a>

                <span className="credential-platform">◈</span>
              </div>
            </div>
          </div>

          <div className="credential-text">
            <p className="section-label">VERIFIED ACHIEVEMENTS</p>

            <h2>
              Turn your learning into
              <span> trusted proof.</span>
            </h2>

            <p>
              Your achievements shouldn't disappear inside a folder of
              certificates. SOLO turns learning experiences into verifiable
              digital credentials that you can showcase.
            </p>

            <div className="credential-flow">
              <span>Learn</span>
              <b>→</b>
              <span>Achieve</span>
              <b>→</b>
              <span>Verify</span>
              <b>→</b>
              <span>Share</span>
            </div>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section className="skill-section">
        <div className="skill-text">
          <p className="section-label">SKILL COMPATIBILITY</p>

          <h2>
            See how a course
            <span> fits your skills.</span>
          </h2>

          <p>
            When you explore an opportunity, SOLO compares its requirements with the skills in your profile.
             See what you already know, understand how well you match, and discover the opportunities that fit you best.
          </p>
        </div>

        <div className="skill-analysis">
              <Image
                 src="/images/skill.png"
                 alt="Skill analysis"
                 width={450}
                 height={450}
                 priority
               />
      </div>
      </section>
      </FadeInSection>

      <FadeInSection>
        <section className="community-section">
          <div className="section-heading center">
            <p className="section-label">THE SOLO COMMUNITY</p>

            <h2>
              Learn together.
              <span> Grow together.</span>
            </h2>

            <p>
              Connect with learners, mentors, institutions and employers through
              the SOLO ecosystem.
            </p>
          </div>

          <div className="community-grid">
            <div>
              <strong>Learners</strong>
              <p>Connect, share and learn from your peers.</p>
            </div>

            <div>
              <strong>Mentors</strong>
              <p>Learn from professionals and experienced experts.</p>
            </div>

            <div>
              <strong>Institutions</strong>
              <p>Discover programs and opportunities from institutions.</p>
            </div>

            <div>
              <strong>Employers</strong>
              <p>Discover opportunities and showcase your capabilities.</p>
            </div>
          </div>
        </section>
        <FadeInSection>
          <section id="success-stories" className="success-stories-section">
            <div className="story-heading">
              <h2>Success Stories</h2>
              <p>See how organizations are transforming with SOLO</p>
            </div>

            <div className="story-grid-wrapper">
              <Link href="/success-stories" className="story-view-all-link">
                View All  →
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
                      <span className="story-logo">
                        {story.partnerLogoText}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </FadeInSection>
        <section className="final-cta">
          <div>
            <p className="section-label">START YOUR JOURNEY</p>

            <h2>
              Your skills can take
              <span> you further.</span>
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

      <FadeInSection>
        <section className="contact"></section>
      </FadeInSection>
      <Footer></Footer>
      <BackToTop></BackToTop>
    </main>
  );
}
