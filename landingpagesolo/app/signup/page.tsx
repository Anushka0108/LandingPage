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
                  {showPassword ? <svg  xmlns="http://www.w3.org/2000/svg" width={22} height={22} 
                fill={"currentColor"} viewBox={"0 0 24 24"}>
                {/* Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free */}
                <path d="M12 17c-5.35 0-7.42-3.84-7.93-5 .2-.46.65-1.34 1.45-2.23l-1.4-1.4c-1.49 1.65-2.06 3.28-2.08 3.31-.07.21-.07.43 0 .63.02.07 2.32 6.68 9.95 6.68.91 0 1.73-.1 2.49-.26l-1.77-1.77c-.24.02-.47.03-.72.03Zm9.95-4.68c.07-.21.07-.43 0-.63-.02-.07-2.32-6.68-9.95-6.68-1.84 0-3.36.39-4.61.97L2.71 1.29 1.3 2.7l4.32 4.32 1.42 1.42 2.27 2.27 3.98 3.98 1.8 1.8 1.53 1.53 4.68 4.68 1.41-1.41-4.32-4.32c2.61-1.95 3.55-4.61 3.56-4.65m-7.25.97c.19-.39.3-.83.3-1.29 0-1.64-1.36-3-3-3-.46 0-.89.11-1.29.3l-1.8-1.8c.88-.31 1.9-.5 3.08-.5 5.35 0 7.42 3.85 7.93 5-.3.69-1.18 2.33-2.96 3.55z"></path>
                </svg> : <svg  xmlns="http://www.w3.org/2000/svg" width={22} height={22} 
                fill={"currentColor"} viewBox={"0 0 24 24"}>
                {/* Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free */}
                <path d="M12 9a3 3 0 1 0 0 6 3 3 0 1 0 0-6"></path><path d="M12 19c7.63 0 9.93-6.62 9.95-6.68.07-.21.07-.43 0-.63-.02-.07-2.32-6.68-9.95-6.68s-9.93 6.61-9.95 6.67c-.07.21-.07.43 0 .63.02.07 2.32 6.68 9.95 6.68Zm0-12c5.35 0 7.42 3.85 7.93 5-.5 1.16-2.58 5-7.93 5s-7.42-3.84-7.93-5c.5-1.16 2.58-5 7.93-5"></path>
                </svg>}
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
                  {showConfirm ? <svg  xmlns="http://www.w3.org/2000/svg" width={22} height={22} 
                fill={"currentColor"} viewBox={"0 0 24 24"}>
                {/* Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free */}
                <path d="M12 17c-5.35 0-7.42-3.84-7.93-5 .2-.46.65-1.34 1.45-2.23l-1.4-1.4c-1.49 1.65-2.06 3.28-2.08 3.31-.07.21-.07.43 0 .63.02.07 2.32 6.68 9.95 6.68.91 0 1.73-.1 2.49-.26l-1.77-1.77c-.24.02-.47.03-.72.03Zm9.95-4.68c.07-.21.07-.43 0-.63-.02-.07-2.32-6.68-9.95-6.68-1.84 0-3.36.39-4.61.97L2.71 1.29 1.3 2.7l4.32 4.32 1.42 1.42 2.27 2.27 3.98 3.98 1.8 1.8 1.53 1.53 4.68 4.68 1.41-1.41-4.32-4.32c2.61-1.95 3.55-4.61 3.56-4.65m-7.25.97c.19-.39.3-.83.3-1.29 0-1.64-1.36-3-3-3-.46 0-.89.11-1.29.3l-1.8-1.8c.88-.31 1.9-.5 3.08-.5 5.35 0 7.42 3.85 7.93 5-.3.69-1.18 2.33-2.96 3.55z"></path>
                </svg> : <svg  xmlns="http://www.w3.org/2000/svg" width={22} height={22} 
                fill={"currentColor"} viewBox={"0 0 24 24"}>
                {/* Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free */}
                <path d="M12 9a3 3 0 1 0 0 6 3 3 0 1 0 0-6"></path><path d="M12 19c7.63 0 9.93-6.62 9.95-6.68.07-.21.07-.43 0-.63-.02-.07-2.32-6.68-9.95-6.68s-9.93 6.61-9.95 6.67c-.07.21-.07.43 0 .63.02.07 2.32 6.68 9.95 6.68Zm0-12c5.35 0 7.42 3.85 7.93 5-.5 1.16-2.58 5-7.93 5s-7.42-3.84-7.93-5c.5-1.16 2.58-5 7.93-5"></path>
                </svg>}
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
              <span>Don't have an account? </span>
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