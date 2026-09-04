import Link from "next/link";
import { opportunities } from "@/app/data/opportunties";
import NavBar from "@/app/components/NavBar";

export default async function OpportunityPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const opportunity = opportunities.find(
    (item) => item.id === id
  );

  if (!opportunity) {
    return (
      <main className="opportunity-page">
        <NavBar></NavBar>
        <div className="opportunity-not-found">
          <h1>Opportunity not found</h1>
          <Link href="/explore">← Back to Explore</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="opportunity-page">
        <NavBar></NavBar>
      <section className="opportunity-hero">
        <div className="opportunity-hero-container">
          <div className="opportunity-main-info">
            <Link
              href="/explore"
              className="opportunity-back"
            >
              ← Back to Explore
            </Link>
            <br />
            <div className="opportunity-type-badge">
              {opportunity.type}
            </div>

            <h1>{opportunity.title}</h1>

            <p className="opportunity-provider">
              By <strong>{opportunity.organization}</strong>
            </p>

            <p className="opportunity-description">
              {opportunity.description}
            </p>

            <div className="opportunity-skills-large">
              {opportunity.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>

          <aside className="opportunity-side-card">
            <div className="side-card-top">
              <span className="side-card-label">
                {opportunity.type}
              </span>

              <h2>{opportunity.payment}</h2>
            </div>

            <div className="side-card-details">
              <div className="side-detail">
                <span className="side-icon"><span className="clock-icon"><svg  xmlns="http://www.w3.org/2000/svg" width={24} height={24} 
              fill={"currentColor"} viewBox={"0 0 24 24"}>
              {/* Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free */}
              <path d="M12 2C6.58 2 2 6.58 2 12s4.58 10 10 10 10-4.58 10-10S17.42 2 12 2m0 18c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8-3.66 8-8 8"></path><path d="M13 7h-2v6h6v-2h-4z"></path>
              </svg></span></span>
                <div>
                  <small>Duration</small>
                  <strong>{opportunity.duration}</strong>
                </div>
              </div>

              <div className="side-detail">
                <span className="side-icon"><span className="detail-icon"><svg  xmlns="http://www.w3.org/2000/svg" width={24} height={24} 
                fill={"currentColor"} viewBox={"0 0 24 24"}>
                {/* Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free */}
                <path d="M12 15c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2"></path><path d="M11.65 21.94a1.03 1.03 0 0 0 .7 0C12.7 21.81 21 18.61 21 11c0-4.96-4.04-9-9-9s-9 4.04-9 9c0 7.6 8.3 10.8 8.65 10.94M12 4c3.86 0 7 3.14 7 7 0 5.42-5.53 8.26-7 8.91-1.47-.66-7-3.5-7-8.91 0-3.86 3.14-7 7-7"></path>
                </svg></span></span>
                <div>
                  <small>Location</small>
                  <strong>{opportunity.location}</strong>
                </div>
              </div>

              <div className="side-detail">
                <span className="side-icon"><svg  xmlns="http://www.w3.org/2000/svg" width={24} height={24} 
fill={"currentColor"} viewBox={"0 0 24 24"}>
{/* Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free */}
<path d="M15 3v5H9c-.55 0-1 .45-1 1v6H3c-.55 0-1 .45-1 1v6h2v-5h5c.55 0 1-.45 1-1v-6h6c.55 0 1-.45 1-1V4h5V2h-6c-.55 0-1 .45-1 1"></path>
</svg></span>
                <div>
                  <small>Level</small>
                  <strong>{opportunity.level}</strong>
                </div>
              </div>

              <div className="side-detail">
                <span className="side-icon"><span className="clock-icon"><svg  xmlns="http://www.w3.org/2000/svg" width={24} height={24} 
              fill={"currentColor"} viewBox={"0 0 24 24"}>
              {/* Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free */}
              <path d="M12 2C6.58 2 2 6.58 2 12s4.58 10 10 10 10-4.58 10-10S17.42 2 12 2m0 18c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8-3.66 8-8 8"></path><path d="M13 7h-2v6h6v-2h-4z"></path>
              </svg></span></span>
                <div>
                  <small>Application Deadline</small>
                  <strong>
                    {opportunity.applicationDeadline}
                  </strong>
                </div>
              </div>
            </div>

            <div className="side-card-action">
              <Link
                href="/explore"
                className="apply-button"
              >
                Apply / Start Opportunity →
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="opportunity-content-section">
        <div className="opportunity-content-container">
          <div className="opportunity-content-main">
            <section className="content-block">
              <p className="content-label">
                ABOUT THIS OPPORTUNITY
              </p>

              <h2>What you'll explore</h2>

              <p>
                {opportunity.description}
              </p>
            </section>

            <section className="content-block">
              <p className="content-label">
                SKILLS
              </p>

              <h2>Skills you'll work with</h2>

              <div className="skills-list">
                {opportunity.skills.map((skill) => (
                  <div
                    className="skill-item"
                    key={skill}
                  >
                    <span>✓</span>
                    {skill}
                  </div>
                ))}
              </div>
            </section>

            <section className="content-block">
              <p className="content-label">
                ELIGIBILITY
              </p>

              <h2>Who can participate?</h2>

              <p>{opportunity.eligibility}</p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}