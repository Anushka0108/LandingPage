"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const isOfferingsActive =
    pathname.startsWith("/profile") ||
    pathname.startsWith("/credentials") ||
    pathname.startsWith("/pathways");

  return (
    <header className="navbar">
      <div className="nav-container">
        <Link href="/" className="nav-brand">
          <Image
            src="/images/solologo.png"
            alt="SOLO logo"
            width={120}
            height={46}
            priority
          />
        </Link>

        <nav className="nav-links">
          <Link href="/" className={pathname === "/" ? "active" : ""}>
            Home
          </Link>

          <div
            className="nav-dropdown-wrapper"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              type="button"
              className={`nav-link-btn ${isOfferingsActive ? "active" : ""}`}
              onClick={() => setDropdownOpen((prev) => !prev)}
            >
              Offerings
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="11"
                viewBox="0 0 24 24"
                fill="currentColor"
                className={`dropdown-chevron ${dropdownOpen ? "open" : ""}`}
              >
                <path d="M12 7l-7 7h14l-7-7z" />
              </svg>
            </button>

            {dropdownOpen && (
              <div className="dropdown-menu">
                <Link
                  href="/profile"
                  className={`dropdown-row ${
                    pathname === "/profile" ? "active" : ""
                  }`}
                  onClick={() => setDropdownOpen(false)}
                >
                  <div className="dropdown-icon-container">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="#f97316"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 3H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zm-2 10H7v-2h10v2zm0-4H7V7h10v2z" />
                    </svg>
                  </div>

                  <span className="dropdown-text">Profile</span>
                </Link>

                <Link
                  href="/credentials"
                  className={`dropdown-row ${
                    pathname === "/credentials" ? "active" : ""
                  }`}
                  onClick={() => setDropdownOpen(false)}
                >
                  <div className="dropdown-icon-container">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="#f97316"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2 3 6v6c0 5.25 3.84 10.17 9 11 5.16-.83 9-5.75 9-11V6l-9-4Zm0 2.18L18.74 7 12 9.82 5.26 7 12 4.18ZM5 8.52l7 2.94 7-2.94V12c0 3.92-2.72 7.82-7 8.76C7.72 19.82 5 15.92 5 12V8.52Z" />
                    </svg>
                  </div>

                  <span className="dropdown-text">Credentials</span>
                </Link>

                <Link
                  href="/pathways"
                  className={`dropdown-row ${
                    pathname === "/pathways" ? "active" : ""
                  }`}
                  onClick={() => setDropdownOpen(false)}
                >
                  <div className="dropdown-icon-container">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="#f97316"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 15.18V7c0-2.21-1.79-4-4-4s-4 1.79-4 4v10c0 1.1-.9 2-2 2s-2-.9-2-2V8.82C8.16 8.4 9 7.3 9 6c0-1.66-1.34-3-3-3S3 4.34 3 6c0 1.3.84 2.4 2 2.82V17c0 2.21 1.79 4 4 4s4-1.79 4-4V7c0-1.1.9-2 2-2s2 .9 2 2v8.18c-1.16.41-2 1.51-2 2.82 0 1.66 1.34 3 3 3s3-1.34 3-3c0-1.31-.84-2.41-2-2.82z" />
                    </svg>
                  </div>

                  <span className="dropdown-text">Pathways</span>
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/explore"
            className={pathname.startsWith("/explore") ? "active" : ""}
          >
            Explore
          </Link>

          <Link
            href="/infrastructure"
            className={pathname === "/infrastructure" ? "active" : ""}
          >
            Infrastructure
          </Link>

          <Link href="/#success-stories">Success Stories</Link>

          <Link
            href="/contact"
            className={pathname === "/contact" ? "active" : ""}
          >
            Contact Us
          </Link>

          <Link href="/signup" className="nav-signup">
            Get Started
          </Link>
        </nav>
      </div>

      <style jsx>{`
        .nav-brand {
          display: inline-flex;
          align-items: center;
          text-decoration: none;
        }

        .nav-dropdown-wrapper {
          position: relative;
          display: inline-flex;
          align-items: center;
          height: 100%;
        }

        .nav-link-btn {
          background: transparent;
          border: none;
          padding: 0;
          font-family: var(--font-montserrat), sans-serif;
          font-size: 15px;
          font-weight: 600;
          color: #334155;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: color 0.2s ease;
        }

        .nav-link-btn:hover,
        .nav-link-btn.active {
          color: #0f172a;
        }

        .dropdown-chevron {
          transition: transform 0.25s ease;
        }

        .dropdown-chevron.open {
          transform: rotate(180deg);
        }

        .dropdown-menu {
          position: absolute;
          top: calc(100% + 14px);
          left: 0;
          width: 290px;
          background: #ffffff;
          border: 1px solid #f1f5f9;
          border-radius: 16px;
          box-shadow:
            0 16px 36px -6px rgba(0, 0, 0, 0.08),
            0 4px 12px -2px rgba(0, 0, 0, 0.03);
          padding: 10px;
          display: flex;
          flex-direction: column;
          gap: 6px;
          z-index: 1000;
          animation: dropdownEnter 0.22s cubic-bezier(0.16, 1, 0.3, 1);
          transform-origin: top left;
        }

        .dropdown-menu::before {
          content: "";
          position: absolute;
          top: -14px;
          left: 0;
          width: 100%;
          height: 14px;
        }

        @keyframes dropdownEnter {
          0% {
            opacity: 0;
            transform: translateY(-8px) scale(0.97);
          }

          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .dropdown-row {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 12px 14px;
          border-radius: 12px;
          text-decoration: none;
          transition:
            background-color 0.2s ease,
            transform 0.2s ease;
        }

        .dropdown-row:hover,
        .dropdown-row.active {
          background-color: #fcece3;
          transform: translateX(4px);
        }

        .dropdown-icon-container {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: #fde5d7;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition:
            transform 0.25s ease,
            background-color 0.25s ease;
        }

        .dropdown-row:hover .dropdown-icon-container {
          transform: scale(1.08) rotate(-2deg);
          background-color: #ffdfcc;
        }

        .dropdown-text {
          font-family: var(--font-montserrat), sans-serif;
          font-size: 14.5px;
          font-weight: 500;
          color: #475569;
          line-height: 1.2;
          display: inline-block;
          transition:
            color 0.2s ease,
            transform 0.2s ease;
        }

        .dropdown-row:hover .dropdown-text,
        .dropdown-row.active .dropdown-text {
          color: #c2410c;
          transform: translateX(2px);
        }

        @media (prefers-reduced-motion: reduce) {
          .dropdown-menu,
          .dropdown-row,
          .dropdown-icon-container,
          .dropdown-text,
          .dropdown-chevron {
            animation: none;
            transition: none;
          }
        }
      `}</style>
    </header>
  );
}
