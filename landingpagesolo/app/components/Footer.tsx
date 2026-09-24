import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">

        <div className="footer-main">
          <div className="footer-brand">
            <Image
              src="/images/solologo.png"
              alt="SOLO logo"
              width={120}
              height={55}
            />

            <p>
              Build skills, discover opportunities, and find your path forward.
            </p>
          </div>

          <div className="footer-links">
            <div>
              <h4>Explore</h4>
              <a href="/explore#opportunity">Opportunities</a>
              <a href="/explore?type=Courses#opportunity">Courses</a>
              <a href="/explore?type=Projects#opportunity">Projects</a>
              <a href="/explore?type=Career Pathways#opportunity">Career Pathways</a>
            </div>

            <div>
              <h4>SOLO</h4>
              <Link href="/infrastructure">Infrastructure</Link>
              <Link href="/#success-stories">Success Stories</Link>
              <Link href="/contact">Contact Us</Link>
            </div>

            <div>
              <h4>Get Started</h4>
              <Link href="https://app.thesolo.network/">Create Account</Link>
              <Link href="/explore">Find Your Path</Link>
              <Link href="https://app.thesolo.network/">Start Learning</Link>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 SOLO. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}