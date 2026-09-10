"use client"; 
 
import OpportunityCard from "../components/OpportunityCard"; 
import FilterBar from "../components/FilterBar"; 
import NavBar from "../components/NavBar"; 
import FadeInSection from "../components/FadeInSection"; 
 
import { opportunities } from "../data/opportunties"; 
import { useState } from "react"; 
import { useSearchParams } from "next/navigation"; 
import Image from "next/image"; 
import Link from "next/link"; 
import Footer from "../components/Footer"; 
 
 
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
  "Node.js", 
  "JavaScript", 
]; 
 
export default function ExplorePage() { 
    const searchParams = useSearchParams(); 
    const type = searchParams.get("type"); 
 
    const [activeFilter, setActiveFilter] = useState( 
      type || "All" 
    ); 
 
    const [search, setSearch] = useState(""); 
 
    const [matchSkills, setMatchSkills] = useState<string[]>([]); 
 
    const handleGitHubMatch = (skills: string[]) => { 
      setMatchSkills(skills); 
    }; 
 
    const handleSkillMatch = (skills: string[]) => { 
      setMatchSkills(skills); 
    }; 
 
    const filterMap: Record<string, string> = { 
      COURSE: "Courses", 
      INTERNSHIP: "Internships", 
      PROJECT: "Projects", 
      HACKATHON: "Hackathons", 
      JOB: "Jobs", 
      CAREER: "Career Pathways", 
    }; 
 
    const filters = [ 
      "All", 
      "Courses", 
      "Internships", 
      "Projects", 
      "Hackathons", 
      "Jobs", 
      "Career Pathways", 
    ]; 
 
    const filterTypeMap: Record<string, string> = { 
      Courses: "COURSE", 
      Internships: "INTERNSHIP", 
      Projects: "PROJECT", 
      Hackathons: "HACKATHON", 
      Jobs: "JOB", 
      "Career Pathways": "CAREER", 
    }; 
 
    const filteredOpportunities = opportunities 
      .map((opportunity) => { 
        const matchedSkills = opportunity.skills.filter( 
          (opportunitySkill) => 
            matchSkills.some( 
              (userSkill) => 
                userSkill.toLowerCase() === 
                opportunitySkill.toLowerCase() 
            ) 
        ); 
 
        const matchPercentage = 
          opportunity.skills.length > 0 
            ? Math.round( 
                (matchedSkills.length / 
                  opportunity.skills.length) * 
                  100 
              ) 
            : 0; 
 
        return { 
          ...opportunity, 
          matchedSkills, 
          matchPercentage, 
        }; 
      }) 
      .filter((opportunity) => { 
        const matchesFilter = 
          activeFilter === "All" || 
          opportunity.type.toUpperCase() === 
            filterTypeMap[activeFilter]; 
 
        const matchesSearch = 
          opportunity.title 
            .toLowerCase() 
            .includes(search.toLowerCase()) || 
          opportunity.skills.some((skill) => 
            skill 
              .toLowerCase() 
              .includes(search.toLowerCase()) 
          ); 
 
        const matchesSkills = 
          matchSkills.length === 0 || 
          opportunity.matchedSkills.length > 0; 
 
        return ( 
          matchesFilter && 
          matchesSearch && 
          matchesSkills 
        ); 
      }) 
      .sort((a, b) => { 
        if (matchSkills.length === 0) { 
          return 0; 
        } 
 
        return b.matchPercentage - a.matchPercentage; 
      }); 
 
    const displayedOpportunities = filteredOpportunities; 
 
  return ( 
    <main className="explore-page"> 
        <NavBar></NavBar> 
        <FadeInSection> 
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
      </FadeInSection> 
       
      <FadeInSection> 
      <section id="opportunity" className="explore-section opportunity-section"> 
        <div className="section-heading"> 
          <p className="section-label">DISCOVER OPPORTUNITIES</p> 
          <h2>Find your next opportunity.</h2> 
          <p> 
            Explore opportunities and discover where your skills can take you. 
          </p> 
        </div> 
 
        <FilterBar 
          filters={filters} 
          activeFilter={activeFilter} 
          onFilterChange={setActiveFilter} 
          onGitHubMatch={handleGitHubMatch} 
          onSkillMatch={handleSkillMatch} 
        /> 
 
        <div className="opportunity-grid"> 
          {displayedOpportunities.map((item) => ( 
            <OpportunityCard 
              key={item.id} 
              item={item} 
            /> 
          ))} 
        </div> 
 
        {displayedOpportunities.length === 0 && ( 
          <div className="no-results"> 
            <h3>No opportunities found</h3> 
            <p>Try searching for another skill or opportunity.</p> 
          </div> 
        )} 
      </section> 
      </FadeInSection> 
 
      <Footer></Footer> 
      <button 
        className="back-to-top" 
        onClick={() => { 
          window.scrollTo({ 
            top: 0, 
            behavior: "smooth", 
          }); 
        }} 
      > 
        ↑ 
      </button> 
    </main> 
  ); 
}