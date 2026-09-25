"use client";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-main">
          {/* Brand info */}
          <div className="footer-brand">
            <Image
              src="/images/solologo.png"
              alt="SOLO logo"
              width={120}
              height={55}
              style={{ objectFit: "contain" }}
            />
            <p>
              Build skills, discover opportunities, and find your path forward.
            </p>
          </div>

          {/* Nav links */}
          <div className="footer-links">
            <div className="footer-col">
              <h4>Explore</h4>
              <a href="/explore#opportunity">Opportunities</a>
              <a href="/explore?type=Courses#opportunity">Courses</a>
              <a href="/explore?type=Projects#opportunity">Projects</a>
              <a href="/explore?type=Career Pathways#opportunity">Career Pathways</a>
            </div>

            <div className="footer-col">
              <h4>SOLO</h4>
              <Link href="/infrastructure">Infrastructure</Link>
              <Link href="/#success-stories">Success Stories</Link>
              <Link href="/contact">Contact Us</Link>
            </div>

            <div className="footer-col">
              <h4>Get Started</h4>
              <Link href="https://app.thesolo.network/">Create Account</Link>
              <Link href="/explore">Find Your Path</Link>
              <Link href="https://app.thesolo.network/">Start Learning</Link>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="footer-bottom">
          <p>© 2026 SOLO. All rights reserved.</p>
        </div>
      </div>

      <style jsx>{`
        .site-footer {
          background: #ffffff;
          border-top: 1px solid #eef2f6;
          padding: 60px 20px 32px;
          color: #334155;
          font-family: inherit;
        }

        .footer-container {
          max-width: 1280px;
          margin: 0 auto;
        }

        .footer-main {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 48px;
          margin-bottom: 48px;
        }

        .footer-brand {
          max-width: 340px;
        }

        .footer-brand p {
          margin: 16px 0 0;
          font-size: 14px;
          line-height: 1.6;
          color: #64748b;
        }

        .footer-links {
          display: grid;
          grid-template-columns: repeat(3, minmax(130px, 1fr));
          gap: 36px;
        }

        .footer-col {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-col h4 {
          margin: 0 0 4px;
          font-size: 15px;
          font-weight: 700;
          color: #0f172a;
          letter-spacing: -0.2px;
        }

        .footer-col a {
          color: #64748b;
          text-decoration: none;
          font-size: 14px;
          transition: color 0.2s ease;
        }

        .footer-col a:hover {
          color: #ff5500;
        }

        .footer-bottom {
          padding-top: 24px;
          border-top: 1px solid #f1f5f9;
          text-align: center;
        }

        .footer-bottom p {
          margin: 0;
          font-size: 13px;
          color: #94a3b8;
        }

        /* ================= Mobile View Adjustments ================= */
        @media (max-width: 768px) {
          .site-footer {
            padding: 44px 20px 28px;
          }

          .footer-main {
            flex-direction: column;
            align-items: flex-start;
            gap: 36px;
            margin-bottom: 36px;
          }

          .footer-brand {
            max-width: 100%;
          }

          .footer-brand p {
            font-size: 13.5px;
            margin-top: 12px;
          }

          .footer-links {
            width: 100%;
            grid-template-columns: repeat(2, 1fr);
            gap: 28px 20px;
          }

          .footer-col a {
            padding: 4px 0; /* Easier touch targets */
            font-size: 13.5px;
          }

          .footer-bottom {
            text-align: left;
          }
        }

        @media (max-width: 440px) {
          .footer-links {
            grid-template-columns: 1fr; /* Full single-column cascade on small phones */
            gap: 24px;
          }

          .footer-col {
            gap: 10px;
          }
        }
      `}</style>
    </footer>
  );
}