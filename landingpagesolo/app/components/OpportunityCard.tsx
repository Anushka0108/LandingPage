import Image from "next/image";
import Link from "next/link";

type OpportunityItem = {
  id: string;
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
              <span className="clock-icon"><svg  xmlns="http://www.w3.org/2000/svg" width={24} height={24} 
              fill={"currentColor"} viewBox={"0 0 24 24"}>
              {/* Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free */}
              <path d="M12 2C6.58 2 2 6.58 2 12s4.58 10 10 10 10-4.58 10-10S17.42 2 12 2m0 18c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8-3.66 8-8 8"></path><path d="M13 7h-2v6h6v-2h-4z"></path>
              </svg></span>
              {item.posted}
            </span>
          )}

        </div>

        <div className="opportunity-details">

          {item.location && (
            <span>
              <span className="detail-icon"><svg  xmlns="http://www.w3.org/2000/svg" width={24} height={24} 
                fill={"currentColor"} viewBox={"0 0 24 24"}>
                {/* Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free */}
                <path d="M12 15c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2"></path><path d="M11.65 21.94a1.03 1.03 0 0 0 .7 0C12.7 21.81 21 18.61 21 11c0-4.96-4.04-9-9-9s-9 4.04-9 9c0 7.6 8.3 10.8 8.65 10.94M12 4c3.86 0 7 3.14 7 7 0 5.42-5.53 8.26-7 8.91-1.47-.66-7-3.5-7-8.91 0-3.86 3.14-7 7-7"></path>
                </svg></span>
              {item.location}
            </span>
          )}

          {item.payment && (
            <span>
              <span className="detail-icon"><svg  xmlns="http://www.w3.org/2000/svg" width={24} height={24} 
              fill={"currentColor"} viewBox={"0 0 24 24"}>
              {/* Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free */}
              <path d="M21 7h-1.4L18 5.4V3c0-.55-.45-1-1-1h-1c-1.44 0-2.75.78-3.45 2H9c-3.86 0-7 3.14-7 7 0 .25.02 6.28 2.11 10.45A1 1 0 0 0 5 22h4c.55 0 1-.45 1-1v-3h2v3c0 .55.45 1 1 1h4c.33 0 .65-.17.83-.45 1.54-2.31 2.08-5.11 2.27-6.55h.9c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1m-1 6h-.81c-.53 0-.97.42-1 .95 0 .04-.19 3.38-1.75 6.05h-2.45v-3c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v3H5.63c-1.61-3.73-1.64-8.95-1.64-9 0-2.76 2.24-5 5-5h4.18c.42 0 .8-.27.94-.67A1.99 1.99 0 0 1 15.98 4v1.81c0 .27.11.52.29.71l2.19 2.19c.19.19.44.29.71.29h.81v4Z"></path><path d="M16 9a1 1 0 1 0 0 2 1 1 0 1 0 0-2M7 8h6v2H7z"></path>
              </svg></span>
              {item.payment}
            </span>
          )}

        </div>
       <Link
          href={"https://app.thesolo.network/"}
          className="view-opportunity"
        >
          View more
        </Link>
      </div>

    </div>
  );
}