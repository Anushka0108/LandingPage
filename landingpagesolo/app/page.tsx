"use client"
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {

  useEffect(()=>{
    const element=document.querySelectorAll(".scroll-fade");

    const observer=new IntersectionObserver((entries)=>{
      entries.forEach((entry)=>{
        if(entry.isIntersecting){
          entry.target.classList.add("show")
        }
      })
    },{threshold: 0.15});
    element.forEach((elem)=>observer.observe(elem))
    return ()=>{
      element.forEach((elem)=>observer.unobserve(elem))
    }
  })

  return (
    <main>
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
            <a href="#">Home</a>

            <a href="#">
              Explore <span>▾</span>
            </a>

            <a href="#">
              Stakeholder Journey <span>▾</span>
            </a>

            <a href="#">Infrastructure</a>

            <a href="#">Success Stories</a>

            <a href="#">
              Contact Us <span>▾</span>
            </a>

            <a href="#">Blog</a>

            <a href="#" className="contact-btn">
              Get Started
            </a>
          </nav>
        </div>
      </header>
      
      <div className="hero">
  <div className="hero-content">
    <div className="hero-text">
      <p className="hero-label">LEARN • GROW • DISCOVER</p>

      <h1>
        Verified skills
        <span> Real Opportunities.</span>
      </h1>

      <p className="hero-description">
        Discover what interests you, develop meaningful skills,
        and turn your learning into opportunities.
      </p>

      <div className="hero-buttons">
        <a href="#" className="hero-primary">
          Begin Your Journey
        </a>

        <a href="#" className="hero-secondary">
          Contact Us
        </a>
      </div>
    </div>
  </div>

  <div className="hero-glow hero-glow-one"></div>
  <div className="hero-glow hero-glow-two"></div>
</div>

<section className="intro-section scroll-fade">
  <div className="section-heading">
    <p className="section-label">THE SOLO ECOSYSTEM</p>

    <h2>
      Your learning, skills,
      <span> credentials and career — connected.</span>
    </h2>

    <p>
      SOLO brings everything you need to build skills, gain experience,
      earn verified credentials and discover meaningful career
      opportunities into one connected platform.
    </p>
  </div>

  <div className="ecosystem-grid">
    <div className="ecosystem-card">
      <div className="card-number">01</div>
      <h3>Learn</h3>
      <p>
        Explore courses, projects, internships and other learning
        opportunities aligned with your interests.
      </p>
    </div>

    <div className="ecosystem-card">
      <div className="card-number">02</div>
      <h3>Build</h3>
      <p>
        Develop skills through real-world experiences, projects,
        achievements and continuous learning.
      </p>
    </div>

    <div className="ecosystem-card">
      <div className="card-number">03</div>
      <h3>Prove</h3>
      <p>
        Turn your learning and achievements into verifiable
        credentials and digital badges.
      </p>
    </div>

    <div className="ecosystem-card">
      <div className="card-number">04</div>
      <h3>Grow</h3>
      <p>
        Discover career pathways, internships and jobs that match
        your skills and goals.
      </p>
    </div>
  </div>
</section>

<section className="journey-section scroll-fade">
  <div className="section-heading center">
    <p className="section-label">YOUR JOURNEY</p>

    <h2>
      From learning to
      <span> opportunity.</span>
    </h2>

    <p>
      SOLO connects every step of your professional journey.
    </p>
  </div>

  <div className="journey">
    <div className="journey-item">
      <div className="journey-circle">01</div>
      <h3>Discover</h3>
      <p>Explore your interests and career possibilities.</p>
    </div>

    <div className="journey-line"></div>

    <div className="journey-item">
      <div className="journey-circle">02</div>
      <h3>Build Skills</h3>
      <p>Develop skills aligned with your career goals.</p>
    </div>

    <div className="journey-line"></div>

    <div className="journey-item">
      <div className="journey-circle">03</div>
      <h3>Gain Experience</h3>
      <p>Take courses, projects and internships.</p>
    </div>

    <div className="journey-line"></div>

    <div className="journey-item">
      <div className="journey-circle">04</div>
      <h3>Earn Credentials</h3>
      <p>Turn your achievements into trusted proof.</p>
    </div>

    <div className="journey-line"></div>

    <div className="journey-item">
      <div className="journey-circle">05</div>
      <h3>Find Opportunities</h3>
      <p>Move toward your next career opportunity.</p>
    </div>
  </div>
</section>


<section className="opportunities-section scroll-fade">
  <div className="section-heading center">
    <p className="section-label">EXPLORE</p>

    <h2>
      Opportunities that
      <span> move you forward.</span>
    </h2>

    <p>
      Discover experiences that help you learn, build and prepare
      for your career.
    </p>
  </div>

  <div className="opportunity-grid">

    <div className="opportunity-card">
      <span>01</span>
      <h3>Courses</h3>
      <p>Learn new skills through relevant learning opportunities.</p>
      <a href="#">Explore Courses →</a>
    </div>

    <div className="opportunity-card">
      <span>02</span>
      <h3>Internships</h3>
      <p>Gain practical experience and strengthen your profile.</p>
      <a href="#">Explore Internships →</a>
    </div>

    <div className="opportunity-card">
      <span>03</span>
      <h3>Live Projects</h3>
      <p>Apply your knowledge to real-world projects.</p>
      <a href="#">Explore Projects →</a>
    </div>

    <div className="opportunity-card">
      <span>04</span>
      <h3>Hackathons</h3>
      <p>Challenge yourself and showcase what you can build.</p>
      <a href="#">Explore Hackathons →</a>
    </div>

    <div className="opportunity-card">
      <span>05</span>
      <h3>Jobs</h3>
      <p>Find roles that match your skills and career goals.</p>
      <a href="#">Explore Jobs →</a>
    </div>

    <div className="opportunity-card">
      <span>06</span>
      <h3>Career Pathways</h3>
      <p>Follow structured learning journeys toward specific roles.</p>
      <a href="#">Explore Pathways →</a>
    </div>

  </div>
</section>


<section className="profile-section scroll-fade">

  <div className="profile-text">

    <p className="section-label">YOUR PROFESSIONAL IDENTITY</p>

    <h2>
      More than a resume.
      <span> A profile that grows with you.</span>
    </h2>

    <p>
      Build a dynamic professional profile that brings together
      your education, skills, projects, internships, experiences,
      achievements and credentials.
    </p>

    <ul>
      <li>✓ Import your existing resume</li>
      <li>✓ Add skills and interests</li>
      <li>✓ Showcase projects and experience</li>
      <li>✓ Add certificates and badges</li>
      <li>✓ Generate an ATS-ready resume</li>
    </ul>

    <a href="#" className="section-button">
      Build Your Profile →
    </a>

  </div>

  <div className="profile-preview">

    <div className="profile-top">
      <div className="profile-avatar">A</div>

      <div>
        <h3>Anushka</h3>
        <p>Full Stack Developer</p>
      </div>
    </div>

    <div className="profile-skills">
      <h4>Skills</h4>

      <div>
        <span>JavaScript</span>
        <span>React</span>
        <span>Node.js</span>
        <span>SQL</span>
      </div>
    </div>

    <div className="profile-stats">

      <div>
        <strong>12</strong>
        <small>Credentials</small>
      </div>

      <div>
        <strong>08</strong>
        <small>Projects</small>
      </div>

      <div>
        <strong>04</strong>
        <small>Experiences</small>
      </div>

    </div>

  </div>

</section>


<section className="credentials-section scroll-fade">

  <div className="credential-visual">

    <div className="credential-card">

      <p>VERIFIED CREDENTIAL</p>

      <h3>Full Stack Development</h3>

      <span className="credential-badge">
        ✓ VERIFIED
      </span>

      <div className="credential-info">
        <div>
          <small>ISSUED TO</small>
          <strong>Anushka</strong>
        </div>

        <div>
          <small>SKILLS</small>
          <strong>React • Node.js • SQL</strong>
        </div>
      </div>

    </div>

  </div>

  <div className="credential-text">

    <p className="section-label">VERIFIED ACHIEVEMENTS</p>

    <h2>
      Turn your learning into
      <span> trusted proof.</span>
    </h2>

    <p>
      Your achievements shouldn't disappear inside a folder of
      certificates. SOLO turns learning experiences into
      verifiable digital credentials that you can showcase.
    </p>

    <div className="credential-flow">
      <span>Learn</span>
      <b>→</b>
      <span>Achieve</span>
      <b>→</b>
      <span>Verify</span>
      <b>→</b>
      <span>Share</span>
    </div>

  </div>

</section>

<section className="skill-section scroll-fade">

  <div className="skill-text">

    <p className="section-label">CAREER READINESS</p>

    <h2>
      Know where you stand.
      <span> Know what to build next.</span>
    </h2>

    <p>
      Compare your skills against the requirements of a job role
      and understand exactly where you need to improve.
    </p>

    <a href="#" className="section-button">
      Discover Your Skill Gap →
    </a>

  </div>

  <div className="skill-analysis">

    <div className="skill-header">
      <div>
        <small>PROFILE MATCH</small>
        <h3>Full Stack Developer</h3>
      </div>

      <strong>78%</strong>
    </div>

    <div className="skill-row matched">
      <span>✓</span>
      <p>React</p>
      <small>Matched</small>
    </div>

    <div className="skill-row matched">
      <span>✓</span>
      <p>JavaScript</p>
      <small>Matched</small>
    </div>

    <div className="skill-row partial">
      <span>◐</span>
      <p>Node.js</p>
      <small>Partial</small>
    </div>

    <div className="skill-row missing">
      <span>+</span>
      <p>AWS</p>
      <small>Missing</small>
    </div>

    <div className="skill-row missing">
      <span>+</span>
      <p>Docker</p>
      <small>Missing</small>
    </div>

  </div>

</section>

<section className="community-section scroll-fade">

  <div className="section-heading center">

    <p className="section-label">THE SOLO COMMUNITY</p>

    <h2>
      Learn together.
      <span> Grow together.</span>
    </h2>

    <p>
      Connect with learners, mentors, institutions and employers
      through the SOLO ecosystem.
    </p>

  </div>

  <div className="community-grid">

    <div>
      <strong>Learners</strong>
      <p>Connect, share and learn from your peers.</p>
    </div>

    <div>
      <strong>Mentors</strong>
      <p>Learn from professionals and experienced experts.</p>
    </div>

    <div>
      <strong>Institutions</strong>
      <p>Discover programs and opportunities from institutions.</p>
    </div>

    <div>
      <strong>Employers</strong>
      <p>Discover opportunities and showcase your capabilities.</p>
    </div>

  </div>

</section>


<section className="final-cta scroll-fade">

  <div>

    <p className="section-label">START YOUR JOURNEY</p>

    <h2>
      Your skills can take
      <span> you further.</span>
    </h2>

    <p>
      Build your skills. Prove what you can do.
      Discover where you can go next.
    </p>

    <a href="#" className="cta-button">
      Get Started →
    </a>

  </div>

</section>

    </main>
  );
}