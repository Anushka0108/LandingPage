export type InfrastructureFeature = {
  title: string;
  description: string;
};

export type InfrastructureLayer = {
  number: string;
  title: string;
  description: string;
  learnerBenefit: string;
  features: InfrastructureFeature[];
};

export const infrastructureLayers: InfrastructureLayer[] = [
  {
    number: "01",
    title: "Learning & Employment Hub",
    description:
      "Bring learning and career opportunities together in one place. SOLO connects courses, projects, internships, jobs, credentials, and career pathways while using AI to help you discover opportunities that match your skills and goals.",
    learnerBenefit:
      "You can discover relevant learning and career opportunities, build your skills, showcase your achievements, and connect your learning directly to your career goals.",
    features: [
      {
        title: "Lifelong Skills Portfolio",
        description:
          "Build a comprehensive skill-based profile over time with your education, skills, projects, experiences, achievements, badges, and credentials. Generate professional resumes from your verified achievements.",
      },
      {
        title: "Stakeholder Portals",
        description:
          "Connect learners with institutions, employers, mentors, training centers, and other stakeholders while supporting programs, opportunities, applications, and learner progress.",
      },
      {
        title: "Credential & Badge Issuance Platform",
        description:
          "Issue and receive digital certificates, badges, and learner records with support for Open Badges, Comprehensive Learner Records, skill alignment, evidence, and endorsements.",
      },
      {
        title: "Identity & Credential Wallet",
        description:
          "Access a web and mobile wallet to securely store, organize, manage, and share verifiable credentials while maintaining control over your identity and privacy.",
      },
      {
        title: "Verification & Utilization Suite",
        description:
          "Verify credentials, badges, endorsements, and evidence and use them across resumes, applications, recruitment systems, and other learning and employment platforms.",
      },
    ],
  },

  {
    number: "02",
    title: "Integration Layer",
    description:
      "Connect SOLO with learning platforms, institutions, employers, HR systems, job boards, wallets, and other external systems so information and workflows can move between platforms.",
    learnerBenefit:
      "Your learning records, skills, credentials, and other relevant information can stay connected across the platforms you use without repeatedly entering the same information.",
    features: [
      {
        title: "Integration Gateway",
        description:
          "Connect LMS, HRMS, SIS, ATS, social platforms, and other systems to unify workflows and automate processes such as enrollments, credential issuance, and applications.",
      },
      {
        title: "Developer API",
        description:
          "Provide REST and GraphQL APIs that allow applications and services to securely access and integrate SOLO capabilities using scoped permissions and authentication.",
      },
      {
        title: "Data Sync Engine",
        description:
          "Synchronize learning records, skills, credentials, and other information with connected wallets, social platforms, LMS, HRMS, and other systems in real time or on scheduled intervals.",
      },
      {
        title: "Credential APIs",
        description:
          "Create, issue, revoke, and validate credentials through APIs while supporting Open Badges, Comprehensive Learner Records, Verifiable Credentials, skill frameworks, and webhook-based events.",
      },
    ],
  },

  {
    number: "03",
    title: "AI Intelligence Layer",
    description:
      "Use AI to understand skills, credentials, opportunities, learner profiles, and career requirements so that learning and employment decisions can be more relevant and personalized.",
    learnerBenefit:
      "SOLO can better understand your skills and achievements and connect them with relevant opportunities, career pathways, and areas where you can continue developing.",
    features: [
      {
        title: "Skills & Credential Intelligence Engine",
        description:
          "Extract and map skills from credentials, resumes, courses, job postings, internships, achievements, and other sources using frameworks such as OSN, Lightcast, O*NET, ESCO, and custom skill taxonomies.",
      },
      {
        title: "Opportunity & Talent Matching Engine",
        description:
          "Match learners with courses, internships, projects, jobs, and career pathways based on skills and interests while helping employers identify talent aligned with job requirements.",
      },
      {
        title: "Analytics & Insights Engine",
        description:
          "Provide dashboards and insights into credentialing activity, learner progress, skill readiness, program outcomes, workforce development, curriculum planning, and impact.",
      },
    ],
  },

  {
    number: "04",
    title: "Standards & Definition Layer",
    description:
      "Use recognized standards and shared definitions to describe skills, credentials, learning outcomes, and employment information consistently across different systems.",
    learnerBenefit:
      "Your skills, achievements, and credentials can be represented in structured and standardized formats, making them easier to understand, verify, and use across education and employment systems.",
    features: [
      {
        title: "Credential Standards",
        description:
          "Support Open Badges 2.0 and 3.0, W3C Verifiable Credentials, Comprehensive Learner Records, and Learning and Employment Records for structured and verifiable achievement data.",
      },
      {
        title: "Skill Standards",
        description:
          "Use frameworks such as OSN, ESCO, SFIA, O*NET, and Lightcast to describe and organize skills while supporting custom and local skill frameworks.",
      },
      {
        title: "Skill Definition & Exchange",
        description:
          "Use standards such as CASE and CTDL to connect skills and credentials with job roles, competencies, learning outcomes, and other educational and employment information.",
      },
      {
        title: "Other Standards",
        description:
          "Support semantic and interoperability standards such as JSON-LD and Schema.org together with credential exchange protocols, privacy requirements, and interoperability across wallets, registries, and issuers.",
      },
    ],
  },

  {
    number: "05",
    title: "Data & Storage Layer",
    description:
      "Provide the data foundation for securely storing, organizing, connecting, and managing the identity, skills, credentials, learning, and employment information that powers the SOLO ecosystem.",
    learnerBenefit:
      "Your learning records, skills, achievements, and credentials can be securely organized and connected while remaining useful throughout your education and career journey.",
    features: [
      {
        title: "Structured & Semantic Data Stores",
        description:
          "Use graph, document, and vector databases to organize skills, credentials, opportunities, and other information while enabling semantic linking, search, analytics, and AI-powered recommendations.",
      },
      {
        title: "Verifiable Data Vault",
        description:
          "Securely store identity, credentials, and metadata while allowing users to control access and selectively share their learning and work records.",
      },
      {
        title: "Blockchain Trust Engine",
        description:
          "Support secure credential metadata and signatures, decentralized verification, revocation checks, DID registries, and audit processes using blockchain-based trust mechanisms.",
      },
    ],
  },
];

export const learnerJourney = [
  {
    step: "01",
    title: "Build Your Profile",
    description:
      "Add your education, skills, projects, experiences, interests, and achievements."
  },
  {
    step: "02",
    title: "Build Your Skills",
    description:
      "Explore courses, projects, internships, hackathons, volunteering, and other learning experiences."
  },
  {
    step: "03",
    title: "Earn Recognition",
    description:
      "Complete opportunities and build evidence through credentials, certificates, and digital badges."
  },
  {
    step: "04",
    title: "Show What You Can Do",
    description:
      "Use your verified profile, credentials, achievements, and generated resume to demonstrate your capabilities."
  },
  {
    step: "05",
    title: "Discover Opportunities",
    description:
      "Find internships, jobs, projects, courses, and career pathways that align with your skills."
  },
  {
    step: "06",
    title: "Keep Growing",
    description:
      "Identify skill gaps, follow career pathways, and continue developing your skills throughout your career."
  }
];

export const whySolo = [
  {
    title: "One Professional Profile",
    description:
      "Keep your skills, education, projects, experiences, credentials, and achievements together."
  },
  {
    title: "Verified Achievements",
    description:
      "Turn your learning and accomplishments into digital proof that can be shared and verified."
  },
  {
    title: "Personalized Opportunities",
    description:
      "Discover learning and career opportunities based on your skills, interests, and goals."
  },
  {
    title: "Career Pathways",
    description:
      "Understand what skills and learning experiences can help you move toward your target career."
  }
];