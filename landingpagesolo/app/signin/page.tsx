"use client";

import { GoogleIcon, LinkedInIcon } from "../components/SocialIcons";
import { useState } from "react";
import Link from "next/link";
import AuthTopBar from "../components/AuthTopBar";

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: wire up to your auth API
    console.log("Sign in", form);
  }

  return (
    <main className="auth-page">
      <AuthTopBar />

      <div className="auth-wrapper">
        <div className="auth-card">
          <h1 className="auth-title">Sign In</h1>
          <p className="auth-subtitle">Your gateway to a skills-first world</p>

          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email *"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group password-field">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password *"
                value={form.password}
                onChange={handleChange}
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

            <div className="auth-forgot">
              <Link href="/forgot-password">Forgot Password?</Link>
            </div>

            <button type="submit" className="auth-btn-primary">
              Sign In
            </button>

            <div className="auth-divider">
              <span>OR</span>
            </div>

            <Link href="/signup" className="auth-btn-secondary">
              Sign Up
            </Link>

            <div className="auth-social-row">
              <button type="button" className="social-btn" aria-label="Continue with Google">
                <GoogleIcon />
              </button>
              <button type="button" className="social-btn linkedin" aria-label="Continue with LinkedIn">
                <LinkedInIcon />
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}