"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import UserMenu from "./UserMenu";

const isLoggedIn = true;

export default function NavBar() {
  const pathname = usePathname();

  return (
    <header className="navbar">
      <div className="nav-container">
        <Image
          src="/images/solologo.png"
          alt="SOLO logo"
          width={120}
          height={55}
          priority
        />

        <nav className="nav-links">
          <Link
            href="/"
            className={pathname === "/" ? "active" : ""}
          >
            Home
          </Link>

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

          <Link
            href="/#success-stories"
          >
            Success Stories
          </Link>

          <Link
            href="/contact"
            className={pathname === "/contact" ? "active" : ""}
          >
            Contact Us
          </Link>

          {isLoggedIn ? (
            <UserMenu
              avatarSrc="/images/profilepic.png"
              showChat={false}
              showLanguage={false}
            />
          ) : (
            <>
              <Link href="/signin" className="nav-signin">
                Sign In
              </Link>

              <Link href="/signup" className="nav-signup">
                Sign Up
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}