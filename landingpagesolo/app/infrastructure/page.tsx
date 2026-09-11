"use client";

import { useState } from "react";
import Link from "next/link";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Image from "next/image";
import {
  infrastructureLayers,
  learnerJourney,
  whySolo,
} from "../data/infrastructure";
import FadeInSection from "../components/FadeInSection";
import BackToTop from "../components/BackToTop";

function ArchitectureLayer({
  layer,
}: {
  layer: (typeof infrastructureLayers)[number];
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`architecture-layer ${
        isOpen ? "architecture-layer-open" : ""
      }`}
    >
      <button
        type="button"
        className="architecture-trigger"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div className="layer-number">
          {layer.number}
        </div>

        <div className="layer-title">
          <h3>{layer.title}</h3>
          {!isOpen && <span>View details</span>}
        </div>

        <div className="layer-toggle">
          +
        </div>
      </button>

      <div
        className={`layer-content-wrapper ${
          isOpen ? "layer-content-open" : ""
        }`}
      >
        <div className="layer-content">
          <p className="layer-description">
            {layer.description}
          </p>

          <div className="layer-benefit">
            <strong>What this means for you</strong>
            <p>{layer.learnerBenefit}</p>
          </div>

          <div className="layer-features">
            {layer.features.map((feature) => (
              <div
                className="infra-feature"
                key={feature.title}
              >
                <div className="feature-icon">
                  ✓
                </div>

                <div>
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function InfrastructurePage() {
  return (
    <>
      <NavBar />

      <main className="infrastructure-page">
        <FadeInSection>
          <section className="infra-hero">
            
            <div className="infra-hero-content">
              <span className="infra-eyebrow">
                SOLO INFRASTRUCTURE
              </span>

              <h1>
                The infrastructure behind your
                <span> skills journey.</span>
              </h1>

              <p>
                SOLO connects learning, skills, credentials, opportunities,
                and career development in one skills-first ecosystem.
                Everything works together to help you build skills,
                prove what you can do, and move toward your goals.
              </p>

              <div className="infra-hero-actions">
                <Link href="/explore" className="infra-primary-btn">
                  Explore Opportunities
                </Link>

                <a href="#how-it-works" className="infra-secondary-btn">
                  See How It Works
                </a>
              </div>
            </div>

            <div className="infra-hero-visual">
              <div className="infra-orbit orbit-one"></div>
              <div className="infra-orbit orbit-two"></div>

              <div className="infra-center">
                <Image
                  src="/images/solologo.png"
                  alt="SOLO logo"
                  width={120}
                  height={55}
                  priority
                />
              </div>

              <div className="infra-node node-one">
                <span>Skills</span>
              </div>

              <div className="infra-node node-two">
                <span>Learning</span>
              </div>

              <div className="infra-node node-three">
                <span>Credentials</span>
              </div>

              <div className="infra-node node-four">
                <span>Careers</span>
              </div>
            </div>
            
          </section>
          </FadeInSection>
        

        <FadeInSection>
          <section className="infra-intro" id="how-it-works">
            <div className="section-heading">
              <span className="section-label">HOW SOLO WORKS</span>

              <h2>
                Everything you build on SOLO
                <br />
                becomes part of your journey.
              </h2>

              <p>
                SOLO is designed around a simple idea: your learning should
                lead somewhere. Your courses build skills, your experiences
                create evidence, your credentials prove your achievements,
                and your skills can connect you to new opportunities.
              </p>
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
          <section className="why-solo">
            <div className="section-heading">
              <span className="section-label">BUILT AROUND YOU</span>

              <h2>
                Your skills are more than
                <br />
                a line on a resume.
              </h2>

              <p>
                Traditional resumes often show where you studied or worked.
                SOLO helps show what you actually know, what you have built,
                what you have achieved, and where you can go next.
              </p>
            </div>

            <div className="why-solo-grid">
              {whySolo.map((item) => (
                <div className="why-solo-card" key={item.title}>
                  <div className="why-icon">✦</div>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section className="infrastructure-overview">
            <div className="section-heading">
              <span className="section-label">SOLO ARCHITECTURE</span>

              <h2>
                Learner Portal, Collaboration
                <br />
                And Credentialing Suite
              </h2>

              <p>
                Five connected infrastructure layers work together to
                power learning, skills, credentials, opportunities,
                and workforce readiness across SOLO.
              </p>
            </div>

            <div className="architecture-stack">
              {infrastructureLayers.map((layer) => (
                <ArchitectureLayer
                  key={layer.number}
                  layer={layer}
                />
              ))}
            </div>
          </section>
        </FadeInSection>
      </main>
      <BackToTop></BackToTop>
      <Footer />
    </>
  );
}