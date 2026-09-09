import Link from "next/link";
import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";
import { successStories } from "@/app/data/successStories";

export default function SuccessStoriesPage() {
  return (
    <main>
      <NavBar />

      <section className="success-stories-section success-stories-page">
        <div className="story-heading">
          <h2>Success Stories</h2>
          <p>See how organizations are transforming with SOLO</p>
        </div>

        <div className="story-grid">
          {successStories.map((story) => (
            <div className="story-card" key={story.id}>
              <div className="story-card-top">
                <span className="story-name">{story.partnerName}</span>
                <span className="story-tag">{story.category}</span>
              </div>

              <h3>{story.cardTitle}</h3>
              <p>{story.cardDescription}</p>

              <div className="story-card-bottom">
                <Link href={`/success-stories/${story.id}`} className="story-readmore">
                  Read More
                </Link>
                <span className="story-logo">{story.partnerLogoText}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}