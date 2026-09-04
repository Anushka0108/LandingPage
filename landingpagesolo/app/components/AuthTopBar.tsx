"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const LANGUAGES = [
  { code: "EN", label: "English" },
  { code: "AR", label: "Arabic" },
];

export default function AuthTopBar({ showBack = false, backHref = "/signup" }: { showBack?: boolean; backHref?: string }) {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState(LANGUAGES[0]);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="auth-topbar">
      <div className="auth-topbar-left">
        {showBack && (
          <Link href={backHref} className="auth-back-btn" aria-label="Go back">
            ←
          </Link>
        )}
        <Link href="/" className="logo">
          <Image src="/images/solologo.png" alt="SOLO logo" width={110} height={50} priority />
        </Link>
      </div>

      <div className="auth-lang-wrapper" ref={menuRef}>
        <button
          type="button"
          className="auth-lang"
          onClick={() => setOpen((v) => !v)}
          aria-haspopup="listbox"
          aria-expanded={open}
        >
          {lang.code} <span className={`auth-lang-arrow ${open ? "open" : ""}`}>▾</span>
        </button>

        {open && (
          <ul className="auth-lang-menu" role="listbox">
            {LANGUAGES.map((l) => (
              <li key={l.code}>
                <button
                  type="button"
                  className={`auth-lang-option ${l.code === lang.code ? "active" : ""}`}
                  onClick={() => {
                    setLang(l);
                    setOpen(false);
                  }}
                  role="option"
                  aria-selected={l.code === lang.code}
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}