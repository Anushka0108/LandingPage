"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const isOfferingActive =
    pathname.startsWith("/profile") ||
    pathname.startsWith("/credential") ||
    pathname.startsWith("/pathways");

  return (
    <header className="navbar">
      <div className="nav-container">

        {/* LOGO */}
        <Link href="/" className="logo">
          <Image
            src="/images/solologo.png"
            alt="SOLO logo"
            width={120}
            height={46}
            priority
          />
        </Link>

        <nav className="nav-links">

          {/* HOME */}
          <Link
            href="/"
            className={pathname === "/" ? "active" : ""}
          >
            Home
          </Link>

          {/* OFFERING */}
          <div
            className="offering-wrapper"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              type="button"
              className={`offering-trigger ${
                isOfferingActive ? "active" : ""
              }`}
              onClick={() => setDropdownOpen((prev) => !prev)}
            >
              <span>Offering</span>

              <span
                className={`offering-arrow ${
                  dropdownOpen ? "open" : ""
                }`}
              >
                ▴
              </span>
            </button>

            {/* DROPDOWN */}
            <div
              className={`offering-dropdown ${
                dropdownOpen ? "show" : ""
              }`}
            >

              {/* PROFILE */}
              <Link
                href="/profile"
                className={`offering-item ${
                  pathname.startsWith("/profile") ? "selected" : ""
                }`}
                onClick={() => setDropdownOpen(false)}
              >
                <div className="offering-icon">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="4" y="3" width="16" height="18" rx="2" />
                    <path d="M8 8h8" />
                    <path d="M8 12h8" />
                    <path d="M8 16h5" />
                  </svg>
                </div>

                <span>Profile</span>
              </Link>

              {/* CREDENTIALS */}
              <Link
                href="/credential"
                className={`offering-item ${
                  pathname.startsWith("/credential") ? "selected" : ""
                }`}
                onClick={() => setDropdownOpen(false)}
              >
                <div className="offering-icon">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 3L4 6.5V12c0 4.5 3.2 8.3 8 9 4.8-.7 8-4.5 8-9V6.5L12 3Z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                </div>

                <span>Credentials</span>
              </Link>

              {/* PATHWAYS */}
              <Link
                href="/pathways"
                className={`offering-item ${
                  pathname.startsWith("/pathways") ? "selected" : ""
                }`}
                onClick={() => setDropdownOpen(false)}
              >
                <div className="offering-icon">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="6" cy="6" r="2.5" />
                    <circle cx="18" cy="12" r="2.5" />
                    <circle cx="6" cy="18" r="2.5" />
                    <path d="M8.5 6h3a4 4 0 0 1 4 4" />
                    <path d="M8.5 18h3a4 4 0 0 0 4-4v-2" />
                  </svg>
                </div>

                <span>Pathways</span>
              </Link>

            </div>
          </div>

          {/* EXPLORE */}
          <Link
            href="/explore"
            className={
              pathname.startsWith("/explore") ? "active" : ""
            }
          >
            Explore
          </Link>

          {/* INFRASTRUCTURE */}
          <Link
            href="/infrastructure"
            className={
              pathname === "/infrastructure" ? "active" : ""
            }
          >
            Infrastructure
          </Link>

          {/* SUCCESS STORIES */}
          <Link href="/#success-stories">
            Success Stories
          </Link>

          {/* CONTACT */}
          <Link
            href="/contact"
            className={
              pathname === "/contact" ? "active" : ""
            }
          >
            Contact Us
          </Link>

          {/* GET STARTED */}
          <Link href="/signup" className="nav-signup">
            Get Started
          </Link>

        </nav>
      </div>
    </header>
  );
}