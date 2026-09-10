"use client";

import { useState } from "react";

type FilterBarProps = {
  filters: string[];
  activeFilter: string;
  onFilterChange: (filter: string) => void;
  onGitHubMatch: (skills: string[]) => void;
  onSkillMatch: (skills: string[]) => void;
};

const availableSkills = [
  "React",
  "Python",
  "JavaScript",
  "Node.js",
  "SQL",
  "CSS",
  "AI",
  "Innovation",
  "Web",
  "MongoDB",
  "Data",
];

export default function FilterBar({
  filters,
  activeFilter,
  onFilterChange,
  onGitHubMatch,
  onSkillMatch,
}: FilterBarProps) {
  const [githubUrl, setGithubUrl] = useState("");
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [githubSkills, setGithubSkills] = useState<string[]>([]);
  const [githubLoading, setGithubLoading] = useState(false);
  const [githubError, setGithubError] = useState("");

  const toggleSkill = (skill: string) => {
    setSelectedSkills((current) =>
      current.includes(skill)
        ? current.filter((item) => item !== skill)
        : [...current, skill]
    );
  };

  const analyzeGitHub = async () => {
    if (!githubUrl.trim()) {
      setGithubError("Enter your GitHub profile URL.");
      return;
    }

    setGithubLoading(true);
    setGithubError("");
    setGithubSkills([]);

    try {
      const response = await fetch("/api/github-skills", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          githubUrl: githubUrl.trim(),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Unable to analyze GitHub."
        );
      }

      const extractedSkills = data.skills || [];

      setGithubSkills(extractedSkills);
      setSelectedSkills(extractedSkills);

      onGitHubMatch(extractedSkills);
    } catch (error) {
      setGithubError(
        error instanceof Error
          ? error.message
          : "Unable to analyze GitHub."
      );
    } finally {
      setGithubLoading(false);
    }
  };

  const findSkillMatches = () => {
    if (selectedSkills.length === 0) {
      return;
    }

    onSkillMatch(selectedSkills);
  };

    const clearMatches = () => {
    setGithubUrl("");
    setGithubSkills([]);
    setSelectedSkills([]);
    setGithubError("");
    onGitHubMatch([]);
    onSkillMatch([]);
    };

  return (
    <div className="filter-container">
      <div className="filter-bar">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            className={activeFilter === filter ? "active" : ""}
            onClick={() => onFilterChange(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="discovery-section">
        <div className="github-discovery discovery-card">
          <div className="discovery-icon github-icon">
            <span>⌘</span>
          </div>

          <div className="discovery-content">
            <span className="discovery-label">
              GITHUB MATCH
            </span>

            <h3>Find opportunities from your GitHub</h3>

            <p>
              SOLO identifies the technologies you work with and
              finds opportunities that match your experience.
            </p>

            <div className="github-input-row">
              <input
                type="url"
                value={githubUrl}
                onChange={(e) => {
                  setGithubUrl(e.target.value);
                  setGithubError("");
                }}
                placeholder="https://github.com/username"
              />

              <button
                type="button"
                className="github-analyze-button"
                onClick={analyzeGitHub}
                disabled={githubLoading}
              >
                {githubLoading ? "Analyzing..." : "Analyze"}
              </button>
            </div>

            {githubError && (
              <p className="discovery-error">
                {githubError}
              </p>
            )}

            {githubSkills.length > 0 && (
              <div className="github-results">
                <span className="github-results-label">
                  SKILLS EXTRACTED FROM GITHUB
                </span>

                <div className="github-skill-list">
                  {githubSkills.map((skill) => (
                    <span
                      key={skill}
                      className="github-skill"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  className="clear-match-button"
                  onClick={clearMatches}
                >
                  Clear Matches
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="skill-discovery discovery-card">
          <div className="discovery-icon skill-icon">
            <span>✦</span>
          </div>

          <div className="discovery-content">
            <span className="discovery-label">
              SKILL MATCH
            </span>

            <h3>Find your best skill match</h3>

            <p>
              Select the skills you already know and discover
              opportunities that fit your profile.
            </p>

            <div className="skill-options">
              {availableSkills.map((skill) => {
                const isSelected =
                  selectedSkills.includes(skill);

                return (
                  <button
                    key={skill}
                    type="button"
                    className={`skill-option ${
                      isSelected ? "selected" : ""
                    }`}
                    onClick={() => toggleSkill(skill)}
                  >
                    {skill}
                  </button>
                );
              })}
            </div>

            {selectedSkills.length > 0 && (
            <div className="selected-skills-wrapper">
                <div className="selected-skills">
                {selectedSkills.map((skill) => (
                    <span
                    key={skill}
                    className="selected-skill"
                    >
                    {skill}
                    </span>
                ))}
                </div>

                <button
                type="button"
                className="clear-match-button"
                onClick={clearMatches}
                >
                Clear Selected Skills
                </button>
            </div>
            )}

            <button
              type="button"
              className="skill-match-button"
              disabled={selectedSkills.length === 0}
              onClick={findSkillMatches}
            >
              Find My Matches →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}