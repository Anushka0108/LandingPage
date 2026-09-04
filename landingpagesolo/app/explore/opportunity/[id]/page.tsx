import Link from "next/link";
import { opportunities } from "@/app/data/opportunties";

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
        <div className="opportunity-not-found">
          <h1>Opportunity not found</h1>
          <Link href="/explore">← Back to Explore</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="opportunity-page">
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
                <span className="side-icon">◷</span>
                <div>
                  <small>Duration</small>
                  <strong>{opportunity.duration}</strong>
                </div>
              </div>

              <div className="side-detail">
                <span className="side-icon">⌖</span>
                <div>
                  <small>Location</small>
                  <strong>{opportunity.location}</strong>
                </div>
              </div>

              <div className="side-detail">
                <span className="side-icon">◉</span>
                <div>
                  <small>Level</small>
                  <strong>{opportunity.level}</strong>
                </div>
              </div>

              <div className="side-detail">
                <span className="side-icon">◷</span>
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