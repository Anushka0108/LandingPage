import Image from "next/image";

type OpportunityItem = {
  type: string;
  title: string;
  organization: string;
  skills: string[];
  location?: string;
  payment?: string;
  posted?: string;
};

export default function OpportunityCard({
  item,
}: {
  item: OpportunityItem;
}) {
  return (
    <div className="opportunity-card">

      <div className="opportunity-content">

        <div className="opportunity-header">
          <div className="opportunity-avatar">
            <Image src="/images/profilepic.png"
                      alt="Pic logo"
                      width={150}
                      height={150}></Image>
          </div>

          <div className="opportunity-title">
            <h3>{item.title}</h3>
            <p>{item.organization}</p>
          </div>
        </div>

        <div className="opportunity-info">

          <span className="skills-count">
            {item.skills.length} Skills
          </span>

          <span className="opportunity-type">
            {item.type}
          </span>

          {item.posted && (
            <span className="posted-date">
              <span className="clock-icon">◷</span>
              {item.posted}
            </span>
          )}

        </div>

        <div className="opportunity-details">

          {item.location && (
            <span>
              <span className="detail-icon">⌖</span>
              {item.location}
            </span>
          )}

          {item.payment && (
            <span>
              <span className="detail-icon">▣</span>
              {item.payment}
            </span>
          )}

        </div>

      </div>

      <div className="opportunity-footer">
        <button className="view-opportunity">
          View more
        </button>
      </div>

    </div>
  );
}