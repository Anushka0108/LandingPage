"use client";

import { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import FadeInSection from "../components/FadeInSection";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <NavBar />
      <FadeInSection>
      <main className="contact-page">
        <section className="contact-section">
          <div className="contact-heading">
            <h1>Get In Touch</h1>
            <div className="heading-line"></div>
            <h2>Let’s connect and explore new opportunities together</h2>
          </div>

          <div className="contact-container">
            <div className="contact-left">
              <p className="contact-description">
                We are here to listen, collaborate, and create impact with
                potential clients, partners, and stakeholders.
              </p>

              <div className="contact-info-grid">
                <a
                  href="mailto:hello@thesolo.network"
                  className="contact-info-card"
                >
                  <div className="contact-icon">✉</div>
                  <div>
                    <h3>Email us</h3>
                    <p>hello@thesolo.network</p>
                  </div>
                </a>

                <a
                  href="https://www.thesolo.network/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-info-card"
                >
                  <div className="contact-icon">🌐</div>
                  <div>
                    <h3>Visit our website</h3>
                    <p>www.thesolo.network</p>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/company/thesolo-network"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-info-card linkedin-card"
                >
                  <div className="contact-icon linkedin-icon">in</div>
                  <div>
                    <h3>Connect on LinkedIn</h3>
                    <p>linkedin.com/company/thesolo-network</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="contact-form-card">
              {submitted ? (
                <div className="contact-success">
                  <h2>Thank you!</h2>
                  <p>
                    Your details have been submitted successfully. We’ll be in
                    touch with you soon.
                  </p>

                  <button onClick={() => setSubmitted(false)}>
                    Submit another response
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name">Name*</label>
                    <input id="name" name="name" type="text" required />
                  </div>

                  <div className="form-group">
                    <label htmlFor="organization">
                      Organization/Company Name*
                    </label>
                    <input
                      id="organization"
                      name="organization"
                      type="text"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email*</label>
                    <input id="email" name="email" type="email" required />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone*</label>
                    <input id="phone" name="phone" type="tel" required />
                  </div>

                  <div className="form-group">
                    <label htmlFor="website">Website*</label>
                    <input id="website" name="website" type="url" required />
                  </div>

                  <div className="form-group">
                    <label htmlFor="joinAs">Interested to Join as*</label>

                    <select
                      id="joinAs"
                      name="joinAs"
                      required
                      defaultValue=""
                    >
                      <option value="" disabled>
                        —Please choose an option—
                      </option>
                      <option value="employer">Employer</option>
                      <option value="educational-institution">
                        Educational Institution/University
                      </option>
                      <option value="training-center">
                        Training Center
                      </option>
                      <option value="certificate-issuer">
                        Certificate Issuer
                      </option>
                      <option value="hr-recruitment">
                        HR & Recruitment System
                      </option>
                      <option value="credential-wallet">
                        Credential Wallet
                      </option>
                    </select>
                  </div>

                  <button type="submit" className="contact-submit">
                    Submit
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

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
      </main>
      </FadeInSection>

      <Footer />
    </>
  );
}