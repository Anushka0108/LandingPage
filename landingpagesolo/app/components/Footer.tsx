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
              <Link href="/explore">Opportunities</Link>
              <Link href="/explore">Courses</Link>
              <Link href="/explore">Projects</Link>
              <Link href="/explore">Career Pathways</Link>
            </div>

            <div>
              <h4>SOLO</h4>
              <Link href="#">About Us</Link>
              <Link href="#">Success Stories</Link>
              <Link href="#">Blog</Link>
              <Link href="#">Contact Us</Link>
            </div>

            <div>
              <h4>Get Started</h4>
              <Link href="#">Create Account</Link>
              <Link href="#">Find Your Path</Link>
              <Link href="#">Start Learning</Link>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 SOLO. All rights reserved.</p>

          <div>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}