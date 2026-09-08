import Link from "next/link";
import Image from "next/image";
import { successStories } from "@/app/data/successStories";
import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";

export default async function SuccessStoryPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const story = successStories.find((item) => item.id === id);

  if (!story) {
    return (
      <main className="case-study-page">
        <NavBar />
        <div className="opportunity-not-found">
          <h1>Case study not found</h1>
          <Link href="/#success-stories">← Back to Success Stories</Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="case-study-page">
      <NavBar />

      <section className="case-study-hero">
        <div className="case-study-hero-inner">
          

          <span className="case-study-pill-badge">Case Study</span>

          <div className="case-study-logos">
            <span className="case-study-partner-logo">{story.partnerLogoText}</span>
            <span className="case-study-plus">+</span>
            <Image src="/images/solologo.png" alt="SOLO logo" width={100} height={46} />
          </div>

          <h1>{story.heroTitle}</h1>
          <p className="case-study-subtitle">{story.heroSubtitle}</p>

          <div className="case-study-tags">
            {story.tags.map((tag) => (
              <span key={tag} className="case-study-tag">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="case-study-body">
        <div className="case-study-content">
          <div className="case-study-block">
            <h2>Introduction</h2>
            <p>{story.intro}</p>
          </div>

          <div className="case-study-block">
            <span className="case-study-icon">!</span>
            <h2>Challenges</h2>
            <p>{story.challenge}</p>
          </div>

          <div className="case-study-block center">
            <h2>Solution</h2>
            <p>{story.solutionIntro}</p>
          </div>

          <div className="case-study-card-grid">
            {story.solutionCards.map((card) => (
              <div className="case-study-card" key={card.title}>
                <span className="case-study-card-icon">◆</span>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </div>
            ))}
          </div>

          <div className="case-study-block center">
            <h2>Results</h2>
            <p>{story.resultsIntro}</p>
          </div>

          <div className="case-study-results-list">
            {story.resultsCards.map((card) => (
              <div className="case-study-result" key={card.title}>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </div>
            ))}
          </div>

          <div className="case-study-block">
            <h2>Conclusion</h2>
            <p>{story.conclusion}</p>
          </div>
        </div>
      </section>

      <section className="case-study-cta">
        <div>
          <h2>
            Transform Your {story.category === "Institution" ? "Educational Institution" : "Organization"}
          </h2>
          <p>
            Discover how {story.partnerName} partnered with SOLO to redefine
            skill recognition through verifiable, digital credentialing.
          </p>
          <div className="case-study-cta-buttons">
            <Link href="/signup" className="hero-primary">
              Get Started
            </Link>
            <Link href="/#success-stories" className="infra-secondary-btn">
              Back to Success Stories
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}