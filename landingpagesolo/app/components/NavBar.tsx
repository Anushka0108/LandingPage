"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileOfferingOpen, setMobileOfferingOpen] = useState(false);

  const isOfferingActive =
    pathname.startsWith("/profile") ||
    pathname.startsWith("/credential") ||
    pathname.startsWith("/pathways");

  // Automatically close mobile menu when changing routes
  useEffect(() => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
    setMobileOfferingOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

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

        {/* MOBILE HAMBURGER BUTTON */}
        <button
          type="button"
          className="mobile-toggle-btn"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <span className="close-icon">✕</span>
          ) : (
            <span className="hamburger-icon">
              <span />
              <span />
              <span />
            </span>
          )}
        </button>

        {/* MOBILE BACKDROP OVERLAY */}
        {mobileMenuOpen && (
          <div
            className="mobile-backdrop"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}

        {/* NAVIGATION LINKS CONTAINER */}
        <nav className={`nav-links ${mobileMenuOpen ? "mobile-open" : ""}`}>
          {/* HOME */}
          <Link
            href="/"
            className={pathname === "/" ? "active" : ""}
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>

          {/* OFFERING (DESKTOP HOVER / MOBILE ACCORDION) */}
          <div
            className="offering-wrapper"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              type="button"
              className={`offering-trigger ${isOfferingActive ? "active" : ""}`}
              onClick={() => {
                setDropdownOpen((prev) => !prev);
                setMobileOfferingOpen((prev) => !prev);
              }}
            >
              <span>Offering</span>
              <span
                className={`offering-arrow ${
                  dropdownOpen || mobileOfferingOpen ? "open" : ""
                }`}
              >
                ▾
              </span>
            </button>

            {/* DROPDOWN MENU WRAPPER */}
            <div
              className={`offering-dropdown-container ${
                dropdownOpen || mobileOfferingOpen ? "show" : ""
              }`}
            >
              <div className="offering-dropdown-inner">
                {/* PROFILE */}
                <Link
                  href="/profile"
                  className={`offering-item ${
                    pathname.startsWith("/profile") ? "selected" : ""
                  }`}
                  onClick={() => {
                    setDropdownOpen(false);
                    setMobileMenuOpen(false);
                  }}
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
                  onClick={() => {
                    setDropdownOpen(false);
                    setMobileMenuOpen(false);
                  }}
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
                  onClick={() => {
                    setDropdownOpen(false);
                    setMobileMenuOpen(false);
                  }}
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
          </div>

          {/* EXPLORE */}
          <Link
            href="/explore"
            className={pathname.startsWith("/explore") ? "active" : ""}
            onClick={() => setMobileMenuOpen(false)}
          >
            Explore
          </Link>

          {/* INFRASTRUCTURE */}
          <Link
            href="/infrastructure"
            className={pathname === "/infrastructure" ? "active" : ""}
            onClick={() => setMobileMenuOpen(false)}
          >
            Infrastructure
          </Link>

          {/* SUCCESS STORIES */}
          <Link
            href="/#success-stories"
            onClick={() => setMobileMenuOpen(false)}
          >
            Success Stories
          </Link>

          {/* CONTACT */}
          <Link
            href="/contact"
            className={pathname === "/contact" ? "active" : ""}
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact Us
          </Link>

          {/* GET STARTED */}
          <a
            href="/signup"
            className="nav-signup"
            onClick={() => setMobileMenuOpen(false)}
          >
            Get Started
          </a>
        </nav>
      </div>

      <style jsx>{`
        .navbar {
          position: sticky;
          top: 0;
          z-index: 1000;
          background: #ffffff;
          border-bottom: 1px solid #e2e8f0;
          width: 100%;
        }

        .nav-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 12px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
        }

        .logo {
          display: flex;
          align-items: center;
          text-decoration: none;
        }

        /* Desktop Nav Styles */
        .nav-links {
          display: flex;
          align-items: center;
          gap: 24px;
        }

        .nav-links a:not(.nav-signup),
        .offering-trigger {
          font-size: 14.5px;
          font-weight: 600;
          color: #475569;
          text-decoration: none;
          background: none;
          border: none;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 0;
          transition: color 0.2s ease;
        }

        .nav-links a:not(.nav-signup):hover,
        .nav-links a.active:not(.nav-signup),
        .offering-trigger:hover,
        .offering-trigger.active {
          color: var(--orange, #ff6500);
        }

        .offering-arrow {
          font-size: 13px;
          display: inline-block;
          transition: transform 0.28s cubic-bezier(0.16, 1, 0.3, 1);
          transform: rotate(0deg);
        }

        .offering-arrow.open {
          transform: rotate(180deg);
        }

        .offering-wrapper {
          position: relative;
        }

        /* Desktop Dropdown Presentation */
        .offering-dropdown-container {
          position: absolute;
          top: calc(100% + 8px);
          left: 0;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          box-shadow: 0 14px 30px rgba(15, 23, 42, 0.08);
          min-width: 210px;
          padding: 8px;
          display: none;
          z-index: 1010;
        }

        .offering-dropdown-container.show {
          display: block;
          animation: desktopFade 0.2s ease forwards;
        }

        @keyframes desktopFade {
          from {
            opacity: 0;
            transform: translateY(6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .offering-dropdown-inner {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .offering-item {
          display: flex !important;
          align-items: center !important;
          gap: 12px !important;
          padding: 9px 12px !important;
          border-radius: 8px;
          text-decoration: none;
          color: #334155 !important;
          font-size: 13.5px !important;
          font-weight: 600 !important;
          transition: background 0.15s ease, color 0.15s ease;
        }

        .offering-item:hover,
        .offering-item.selected {
          background: #fff7ed;
          color: var(--orange, #ff6500) !important;
        }

        .offering-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          color: inherit;
        }

        .nav-signup {
          background: var(--orange, #ff6500);
          color: #ffffff !important;
          font-size: 13.5px !important;
          font-weight: 700 !important;
          padding: 8px 18px !important;
          border-radius: 8px;
          text-decoration: none;
          transition: transform 0.2s ease, opacity 0.2s ease;
        }

        .nav-signup:hover {
          opacity: 0.92;
          transform: translateY(-1px);
        }

        /* Mobile Trigger Button */
        .mobile-toggle-btn {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
          z-index: 1100;
        }

        .hamburger-icon {
          display: flex;
          flex-direction: column;
          gap: 5px;
          width: 24px;
        }

        .hamburger-icon span {
          display: block;
          height: 2.5px;
          width: 100%;
          background: #0f172a;
          border-radius: 4px;
        }

        .close-icon {
          font-size: 22px;
          font-weight: 800;
          color: #0f172a;
          line-height: 1;
        }

        /* Responsive Mobile Drawer & Fluid Accordion */
        @media (max-width: 960px) {
          .mobile-toggle-btn {
            display: block;
          }

          .mobile-backdrop {
            position: fixed;
            inset: 0;
            background: rgba(15, 23, 42, 0.4);
            backdrop-filter: blur(3px);
            z-index: 1020;
          }

          .nav-links {
            position: fixed;
            top: 0;
            right: 0;
            width: min(320px, 85vw);
            height: 100vh;
            background: #ffffff;
            flex-direction: column;
            align-items: flex-start;
            padding: 80px 24px 32px;
            gap: 12px;
            box-shadow: -10px 0 30px rgba(15, 23, 42, 0.12);
            transform: translateX(100%);
            transition: transform 0.32s cubic-bezier(0.16, 1, 0.3, 1);
            z-index: 1030;
            overflow-y: auto;
          }

          .nav-links.mobile-open {
            transform: translateX(0);
          }

          .nav-links a:not(.nav-signup),
          .offering-trigger {
            width: 100%;
            padding: 12px 0;
            font-size: 16px;
            border-bottom: 1px solid #f1f5f9;
            justify-content: space-between;
          }

          .offering-wrapper {
            width: 100%;
            border-bottom: 1px solid #f1f5f9;
          }

          .offering-wrapper .offering-trigger {
            border-bottom: none;
          }

          /* Fluid CSS Grid Height Animation for Accordion */
          .offering-dropdown-container {
            position: static;
            width: 100%;
            border: none;
            box-shadow: none;
            padding: 0;
            background: transparent;
            display: grid !important;
            grid-template-rows: 0fr;
            transition: grid-template-rows 0.32s cubic-bezier(0.16, 1, 0.3, 1);
            margin: 0;
            animation: none !important;
          }

          .offering-dropdown-container.show {
            grid-template-rows: 1fr;
          }

          .offering-dropdown-inner {
            overflow: hidden;
            background: #f8fafc;
            border-radius: 10px;
            padding: 0 8px;
            opacity: 0;
            transform: translateY(-6px);
            transition: opacity 0.25s ease, transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), padding 0.3s ease;
          }

          .offering-dropdown-container.show .offering-dropdown-inner {
            opacity: 1;
            transform: translateY(0);
            padding: 6px 8px 10px;
            margin: 4px 0 10px;
          }

          .offering-item {
            padding: 10px 10px !important;
            font-size: 14.5px !important;
          }

          .nav-signup {
            width: 100%;
            text-align: center;
            padding: 13px !important;
            font-size: 15px !important;
            margin-top: 14px;
          }
        }
      `}</style>
    </header>
  );
}