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

            <div className="learner-journey">
              {learnerJourney.map((item) => (
                <div className="journey-card" key={item.step}>
                  <span className="journey-number">{item.step}</span>

                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
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
      <button
        className="back-to-top"
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
      >
        ↑
      </button>
      <Footer />
    </>
  );
}