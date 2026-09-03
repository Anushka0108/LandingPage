"use client";

import OpportunityCard from "../components/OpportunityCard";
import FilterBar from "../components/FilterBar";
import NavBar from "../components/NavBar";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";


const opportunities = [
  {
    type: "COURSE",
    title: "Full Stack Web Development",
    organization: "SOLO Learning",
    skills: ["React", "Node.js", "SQL"],
  },
  {
    type: "INTERNSHIP",
    title: "Frontend Developer Intern",
    organization: "Tech Innovations",
    skills: ["React", "JavaScript", "CSS"],
  },
  {
    type: "PROJECT",
    title: "Build an AI-Powered Web App",
    organization: "SOLO Projects",
    skills: ["Python", "React", "AI"],
  },
  {
    type: "HACKATHON",
    title: "Future Tech Hackathon",
    organization: "SOLO Community",
    skills: ["Innovation", "Web", "AI"],
  },
  {
    type: "JOB",
    title: "Junior Full Stack Developer",
    organization: "Digital Labs",
    skills: ["React", "Node.js", "MongoDB"],
  },
  {
    type: "COURSE",
    title: "Data Analytics with Python",
    organization: "SOLO Learning",
    skills: ["Python", "SQL", "Data"],
  },
];

const pathways = [
  {
    title: "Web Developer",
    skills: "HTML & CSS → JavaScript → React → Node.js",
  },
  {
    title: "Data Analyst",
    skills: "Excel → SQL → Python → Data Visualization",
  },
  {
    title: "UI/UX Designer",
    skills: "Design Basics → Figma → UX Research → Prototyping",
  },
  {
    title: "AI / ML Engineer",
    skills: "Python → Statistics → Machine Learning → Deep Learning",
  },
];

const skills = [
  "React",
  "Python",
  "UI/UX",
  "SQL",
  "Java",
  "Machine Learning",
  "Figma",
  "Node.js",
  "Cloud",
  "JavaScript",
  "Data Analytics",
  "Git & GitHub",
];

export default function ExplorePage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filters = [
    "All",
    "Courses",
    "Internships",
    "Projects",
    "Hackathons",
    "Jobs",
    "Career Pathways",
  ];

  const filteredOpportunities = opportunities.filter((item) => {
    const matchesFilter =
      activeFilter === "All" ||
      item.type.toLowerCase() === activeFilter.slice(0, -1).toLowerCase();

    const matchesSearch =
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.skills.some((skill) =>
        skill.toLowerCase().includes(search.toLowerCase())
      );

    return matchesFilter && matchesSearch;
  });

  return (
    <main className="explore-page">
        <NavBar></NavBar>
      <section className="explore-hero ">
        <div className="explore-hero-content">
          <p className="explore-label">DISCOVER • LEARN • GROW</p>

          <h1>
            Explore what
            <span> moves you forward.</span>
          </h1>

          <p className="explore-hero-description">
            Discover courses, projects, internships, hackathons and career
            opportunities that match your interests and skills.
          </p>
          </div>
      </section>


      <section className="explore-section opportunity-section">
        <div className="section-heading">
          <p className="section-label">DISCOVER OPPORTUNITIES</p>
          <h2>Find your next opportunity.</h2>
          <p>
            Explore opportunities and discover where your skills can take you.
          </p>
        </div>

        <FilterBar filters={filters} activeFilter={activeFilter} onFilterChange={setActiveFilter}/>

        <div className="opportunity-grid">
          {filteredOpportunities.map((item) => (
            <OpportunityCard key={item.title} item={item} />
          ))}
        </div>

        {filteredOpportunities.length === 0 && (
          <div className="no-results">
            <h3>No opportunities found</h3>
            <p>Try searching for another skill or opportunity.</p>
          </div>
        )}
      </section>


      <section className="explore-section skill-section">
        <div className="section-heading">
          <p className="section-label">SKILL-BASED DISCOVERY</p>
          <h2>What do you want to build?</h2>
          <p>
            Choose a skill and discover everything available around it.
          </p>
        </div>

        <div className="skill-cloud">
          {skills.map((skill, index) => (
            <button
              className={`skill-pill skill-${index % 4}`}
              key={skill}
              onClick={() => setSearch(skill)}
            >
              {skill}
              <span>→</span>
            </button>
          ))}
        </div>
      </section>


      <section className="explore-cta">
        <div>
          <p className="section-label">YOUR NEXT STEP STARTS HERE</p>

          <h2>
            Your next opportunity
            <span> could start with one skill.</span>
          </h2>

          <p>
            Explore what you can learn, build and achieve with SOLO.
          </p>

          <a href="#" className="explore-cta-button">
            Start Exploring →
          </a>
        </div>
      </section>

    </main>
  );
}