import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-main">
          {/* Brand section */}
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

          {/* Navigation Links */}
          <div className="footer-links">
            <div className="footer-col">
              <h4>Explore</h4>
              <a href="/explore#opportunity">Opportunities</a>
              <a href="/explore?type=Courses#opportunity">Courses</a>
              <a href="/explore?type=Projects#opportunity">Projects</a>
              <a href="/explore?type=Career Pathways#opportunity">
                Career Pathways
              </a>
            </div>

            <div className="footer-col">
              <h4>SOLO</h4>
              <Link href="/infrastructure">Infrastructure</Link>
              <Link href="/#success-stories">Success Stories</Link>
              <Link href="/contact">Contact Us</Link>
            </div>

            <div className="footer-col">
              <h4>Get Started</h4>
              <Link href="https://app.thesolo.network/">
                Create Account
              </Link>
              <Link href="/explore">Find Your Path</Link>
              <Link href="https://app.thesolo.network/">
                Start Learning
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>© 2026 SOLO. All rights reserved.</p>
        </div>
      </div>

      <style jsx>{`
        .site-footer {
          background: #0b0f19;
          border-top: 1px solid #1e293b;
          padding: 60px 24px 32px;
          color: #94a3b8;
          font-family: inherit;
        }

        .footer-container {
          max-width: 1240px;
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
          max-width: 320px;
        }

        .footer-brand p {
          margin: 16px 0 0;
          font-size: 14px;
          line-height: 1.6;
          color: #94a3b8;
        }

        .footer-links {
          display: grid;
          grid-template-columns: repeat(3, minmax(130px, 1fr));
          gap: 40px;
        }

        .footer-col {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-col h4 {
          margin: 0 0 4px;
          font-size: 14px;
          font-weight: 700;
          color: #f8fafc;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }

        .footer-col a {
          color: #94a3b8;
          text-decoration: none;
          font-size: 14px;
          transition: color 0.2s ease;
        }

        .footer-col a:hover {
          color: #f97316;
        }

        .footer-bottom {
          padding-top: 24px;
          border-top: 1px solid #1e293b;
          text-align: center;
        }

        .footer-bottom p {
          margin: 0;
          font-size: 13px;
          color: #64748b;
        }

        /* =========================
           TABLET
        ========================= */

        @media (max-width: 768px) {
          .site-footer {
            padding: 50px 24px 28px;
          }

          .footer-main {
            flex-direction: column;
            align-items: center;
            gap: 42px;
            margin-bottom: 38px;
            text-align: center;
          }

          .footer-brand {
            width: 100%;
            max-width: 360px;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .footer-brand p {
            margin: 14px auto 0;
            font-size: 13.5px;
            line-height: 1.6;
          }

          .footer-links {
            width: 100%;
            max-width: 600px;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
            text-align: center;
          }

          .footer-col {
            align-items: center;
            gap: 10px;
          }

          .footer-col h4 {
            margin-bottom: 6px;
            font-size: 13px;
          }

          .footer-col a {
            padding: 4px 0;
            font-size: 13px;
            line-height: 1.4;
          }

          .footer-bottom {
            text-align: center;
          }
        }

        /* =========================
           MOBILE PHONE
        ========================= */

        @media (max-width: 560px) {
          .site-footer {
            padding: 42px 20px 24px;
          }

          .footer-main {
            gap: 36px;
            margin-bottom: 32px;
          }

          .footer-brand {
            max-width: 300px;
          }

          .footer-brand p {
            font-size: 13px;
            line-height: 1.6;
          }

          .footer-links {
            width: 100%;
            grid-template-columns: repeat(2, 1fr);
            gap: 30px 16px;
          }

          .footer-col {
            gap: 9px;
          }

          .footer-col h4 {
            font-size: 12px;
            letter-spacing: 0.6px;
            margin-bottom: 4px;
          }

          .footer-col a {
            font-size: 12.5px;
            padding: 5px 2px;
          }

          .footer-bottom {
            padding-top: 20px;
          }

          .footer-bottom p {
            font-size: 11.5px;
          }
        }

        /* =========================
           SMALL PHONES
        ========================= */

        @media (max-width: 380px) {
          .site-footer {
            padding-left: 16px;
            padding-right: 16px;
          }

          .footer-links {
            grid-template-columns: 1fr;
            gap: 26px;
          }

          .footer-col {
            gap: 8px;
          }

          .footer-col h4 {
            font-size: 12px;
          }

          .footer-col a {
            font-size: 12.5px;
          }
        }
      `}</style>
    </footer>
  );
}

