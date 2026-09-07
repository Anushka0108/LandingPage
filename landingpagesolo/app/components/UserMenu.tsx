"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const LANGUAGES = [
  { code: "EN", label: "English" },
  { code: "AR", label: "Arabic" },
];

function ProfileIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#444b54" strokeWidth="1.8">
      <circle cx="12" cy="8" r="3.2" />
      <path d="M5 20c1.2-3.6 4-5.4 7-5.4s5.8 1.8 7 5.4" strokeLinecap="round" />
    </svg>
  );
}

function SettingsIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#444b54" strokeWidth="1.8">
      <circle cx="12" cy="12" r="3" />
      <path
        d="M19 12a7 7 0 0 0-.1-1.1l2-1.5-2-3.4-2.3.9a7 7 0 0 0-1.9-1.1L14.3 3H9.7l-.4 2.8a7 7 0 0 0-1.9 1.1l-2.3-.9-2 3.4 2 1.5A7 7 0 0 0 5 12c0 .4 0 .7.1 1.1l-2 1.5 2 3.4 2.3-.9c.6.5 1.2.8 1.9 1.1l.4 2.8h4.6l.4-2.8c.7-.3 1.3-.6 1.9-1.1l2.3.9 2-3.4-2-1.5c.1-.4.1-.7.1-1.1Z"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SignOutIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#d92d20" strokeWidth="1.8">
      <path d="M9 4H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h4" strokeLinecap="round" />
      <path d="M15 16l4-4-4-4M19 12H9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#444b54" strokeWidth="1.8">
      <path
        d="M4 5h16v11H8l-4 4V5Z"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function UserMenu({
  userName = "Guest User",
  userRole = "Learner",
  avatarSrc = "/images/soloicon.png",
  showChat = true,
  showLanguage = true,
}: {
  userName?: string;
  userRole?: string;
  avatarSrc?: string;
  showChat?: boolean;
  showLanguage?: boolean;
}) {
  const [langOpen, setLangOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState(LANGUAGES[0]);

  const langRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (langRef.current && !langRef.current.contains(e.target as Node)) setLangOpen(false);
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setMenuOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <div className="user-menu-cluster">
      {showChat && (
        <button type="button" className="chat-icon-btn" aria-label="Messages">
          <ChatIcon />
        </button>
      )}

      {showLanguage && (
        <div className="auth-lang-wrapper" ref={langRef}>
          <button
            type="button"
            className="auth-lang"
            onClick={() => setLangOpen((v) => !v)}
            aria-haspopup="listbox"
            aria-expanded={langOpen}
          >
            {lang.code} <span className={`auth-lang-arrow ${langOpen ? "open" : ""}`}>▾</span>
          </button>

          {langOpen && (
            <ul className="auth-lang-menu" role="listbox">
              {LANGUAGES.map((l) => (
                <li key={l.code}>
                  <button
                    type="button"
                    className={`auth-lang-option ${l.code === lang.code ? "active" : ""}`}
                    onClick={() => {
                      setLang(l);
                      setLangOpen(false);
                    }}
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      <div className="account-menu-wrapper" ref={menuRef}>
        <button
          type="button"
          className="account-avatar-btn"
          onClick={() => setMenuOpen((v) => !v)}
          aria-haspopup="menu"
          aria-expanded={menuOpen}
          aria-label="Account menu"
        >
          <Image src={avatarSrc} alt="" width={30} height={30} className="account-avatar-img" />
        </button>

        {menuOpen && (
          <div className="account-menu" role="menu">
            <div className="account-menu-name">
              {userName} <span>({userRole})</span>
            </div>
            <Link href="/profile" className="account-menu-item" role="menuitem">
              <span className="account-menu-icon"><ProfileIcon /></span>
              Profile
            </Link>
            <Link href="/settings" className="account-menu-item" role="menuitem">
              <span className="account-menu-icon"><SettingsIcon /></span>
              Settings
            </Link>
            <button type="button" className="account-menu-item danger" role="menuitem">
              <span className="account-menu-icon"><SignOutIcon /></span>
              Sign out
            </button>
          </div>
        )}
      </div>
    </div>
  );
}