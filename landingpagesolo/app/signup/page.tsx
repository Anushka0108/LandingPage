"use client";
import Image from "next/image";
import { GoogleIcon, LinkedInIcon } from "../components/SocialIcons";
import { useState } from "react";
import Link from "next/link";
import AuthTopBar from "../components/AuthTopBar";

type Role = "Learner" | "Institution" | "Employer";
const ROLES: Role[] = ["Learner", "Institution", "Employer"];

export default function SignUpPage() {
  const [role, setRole] = useState<Role>("Learner");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [agreed, setAgreed] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: wire up to your auth API, include `role` in the payload
    console.log("Sign up as", role);
  }

  return (
    <main className="auth-page">
      <AuthTopBar />

      <div className="auth-wrapper">
        <div className="auth-card auth-card-wide">
          <h1 className="auth-title">Signup as {role}</h1>
          <p className="auth-subtitle">Your gateway to a skills-first world</p>

          <div className="role-tabs">
            {ROLES.map((r) => (
              <button
                key={r}
                type="button"
                className={`role-tab ${role === r ? "active" : ""}`}
                onClick={() => setRole(r)}
              >
                {r}
              </button>
            ))}
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <input type="email" name="email" placeholder="Email *" required />
              </div>

              {role === "Learner" ? (
                <div className="form-row nested">
                  <input type="text" name="firstName" placeholder="First Name *" required />
                  <input type="text" name="lastName" placeholder="Last Name *" required />
                </div>
              ) : (
                <div className="form-group">
                  <input
                    type="text"
                    name="orgName"
                    placeholder={role === "Institution" ? "Institution Name *" : "Employer Name *"}
                    required
                  />
                </div>
              )}
            </div>

            <div className="form-row">
              <div className="form-group">
                <select name="country" defaultValue="" required>
                  <option value="" disabled>
                    Country *
                  </option>
                  <option value="in">India</option>
                  <option value="us">United States</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <select name="state" defaultValue="" required>
                  <option value="" disabled>
                    State *
                  </option>
                  <option value="goa">Goa</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group password-field">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter Password *"
                  required
                />
                <button
                  type="button"
                  className="toggle-visibility"
                  onClick={() => setShowPassword((v) => !v)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? "🙈" : "👁"}
                </button>
              </div>
              <div className="form-group password-field">
                <input
                  type={showConfirm ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Re-enter Password *"
                  required
                />
                <button
                  type="button"
                  className="toggle-visibility"
                  onClick={() => setShowConfirm((v) => !v)}
                  aria-label={showConfirm ? "Hide password" : "Show password"}
                >
                  {showConfirm ? "🙈" : "👁"}
                </button>
              </div>
            </div>

            <label className="auth-checkbox">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                required
              />
              <span>
                I have read and agree to SOLO&apos;s{" "}
                <Link href="/privacy-policy">Privacy Policy and Terms</Link>
              </span>
            </label>

            <button type="submit" className="auth-btn-primary" disabled={!agreed}>
              Sign Up
            </button>

            <div className="auth-divider">
              <span>or</span>
            </div>

            <Link href="/signin" className="auth-btn-secondary">
              Sign In
            </Link>

            <div className="auth-social-row">
              <button type="button" className="social-btn" aria-label="Continue with Google">
                <GoogleIcon />
              </button>
              <button type="button" className="social-btn linkedin" aria-label="Continue with LinkedIn">
                <LinkedInIcon />
              </button>
              <button type="button" className="social-btn solo" aria-label="Continue with SOLO SSO">
                 <Image src="/images/soloicon.png" alt="" width={35} height={35} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}