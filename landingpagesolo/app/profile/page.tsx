"use client";

import { useState } from "react";
import Image from "next/image";
import AppTopBar from "../components/AppTopBar";
import EmptyState from "../components/EmptyState";

const TABS = [
  "Education",
  "Work Experience",
  "Internships",
  "Courses",
  "Hackathons",
  "Live Projects",
  "Volunteering",
  "Other Achievements",
  "Posts",
  "Endorsements",
];

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("Education");

  return (
    <main className="profile-page">
      <AppTopBar />

      <div className="profile-container">
        {/* Top: About card + cover card */}
        <div className="profile-top-grid">
          <div className="about-card">
            <div className="about-row">
              <h2>About you</h2>
              <button
                type="button"
                className="edit-pencil"
                aria-label="Edit name"
              >
                ✎
              </button>
            </div>
            <div className="about-row">
              <a href="#" className="add-social-link">
                Add social link
              </a>
              <button
                type="button"
                className="edit-pencil"
                aria-label="Edit social link"
              >
                ✎
              </button>
            </div>
            <div className="about-row">
              <span>Goa, India</span>
              <button
                type="button"
                className="edit-pencil"
                aria-label="Edit location"
              >
                ✎
              </button>
            </div>
          </div>

          <div className="cover-card">
            <div className="cover-banner">
              <div className="cover-handle">
                <Image
                  src="/images/soloicon.png"
                  alt=""
                  width={22}
                  height={22}
                  className="cover-avatar-badge-img"
                />
                @username
                <button
                  type="button"
                  className="edit-pencil light"
                  aria-label="Edit handle"
                >
                  ✎
                </button>
              </div>
              <button type="button" className="edit-cover-btn">
                📷 Edit cover photo
              </button>

              <div className="cover-footer">
                <div className="cover-identity">
                  <Image
                    src="/images/profilepic.png"
                    alt="Profile photo"
                    width={56}
                    height={56}
                    className="profile-avatar-img"
                  />
                  <div>
                    <div className="cover-name-row">
                      Your Name
                      <button
                        type="button"
                        className="edit-pencil light"
                        aria-label="Edit name"
                      >
                        ✎
                      </button>
                    </div>
                    <div className="cover-bio-row">
                      Describe yourself
                      <button
                        type="button"
                        className="edit-pencil light"
                        aria-label="Edit bio"
                      >
                        ✎
                      </button>
                    </div>
                  </div>
                </div>

                <div className="cover-stats">
                  <div>
                    <strong>0</strong>
                    <span>Posts</span>
                  </div>
                  <div>
                    <strong>0</strong>
                    <span>Followers</span>
                  </div>
                  <div>
                    <strong>0</strong>
                    <span>Following</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Resume & profile banner */}
        <div className="resume-banner">
          <div>
            <h3>Resume &amp; profile</h3>
            <p>
              Build a resume from your profile or pull in details by uploading a
              file.
            </p>
          </div>
          <div className="resume-banner-actions">
            <button type="button" className="btn-solid-sm">
              Generate resume ✨
            </button>
            <button type="button" className="btn-outline-sm">
              Import from resume 📄
            </button>
          </div>
        </div>

        {/* Action pills */}
        <div className="action-pills-row">
          <button type="button" className="pill-btn">
            Verify Government ID
          </button>
          <button type="button" className="pill-btn">
            Ask for endorsement
          </button>
          <button type="button" className="pill-btn">
            Profile CLR
          </button>
          <button type="button" className="pill-btn">
            Copy Profile Link
          </button>
        </div>

        {/* Tabs */}
        <div className="profile-tabs">
          {TABS.map((tab) => (
            <button
              key={tab}
              type="button"
              className={`profile-tab ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content card */}
        <div className="content-card">
          <div className="content-card-header">
            <h3>{activeTab}</h3>
            <div className="content-card-actions">
              <button type="button" className="btn-outline-sm">
                + Add
              </button>
              <button type="button" className="btn-outline-sm">
                ⬇ Import
              </button>
            </div>
          </div>

          <EmptyState />
        </div>
      </div>
    </main>
  );
}
