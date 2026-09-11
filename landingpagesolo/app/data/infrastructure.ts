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
      "Connect learning and career opportunities in one place, from courses and projects to internships, jobs, credentials, and career pathways.",
    learnerBenefit:
      "Discover opportunities, build skills, showcase achievements, and connect learning with career goals.",
    features: [
      {
        title: "Lifelong Skills Portfolio",
        description:
          "Track education, skills, projects, experiences, achievements, badges, and credentials in one profile.",
      },
      {
        title: "Stakeholder Portals",
        description:
          "Connect learners with institutions, employers, mentors, and training providers.",
      },
      {
        title: "Credential & Badge Issuance",
        description:
          "Issue and receive digital certificates, badges, and verifiable learner records.",
      },
      {
        title: "Identity & Credential Wallet",
        description:
          "Store, manage, and securely share verified credentials and identity information.",
      },
      {
        title: "Verification & Utilization",
        description:
          "Verify credentials and use them across resumes, applications, and recruitment platforms.",
      },
    ],
  },

  {
    number: "02",
    title: "Integration Layer",
    description:
      "Connect SOLO with learning platforms, institutions, employers, HR systems, job boards, and credential wallets.",
    learnerBenefit:
      "Keep your learning records, skills, and credentials connected across the platforms you use.",
    features: [
      {
        title: "Integration Gateway",
        description:
          "Connect LMS, HRMS, SIS, ATS, and other systems to automate workflows.",
      },
      {
        title: "Developer API",
        description:
          "Provide secure REST and GraphQL APIs for integrating SOLO services.",
      },
      {
        title: "Data Sync Engine",
        description:
          "Synchronize learning, skills, credentials, and other records across connected platforms.",
      },
      {
        title: "Credential APIs",
        description:
          "Create, issue, revoke, and verify credentials through secure APIs.",
      },
    ],
  },

  {
    number: "03",
    title: "AI Intelligence Layer",
    description:
      "Use AI to understand skills, credentials, opportunities, and career requirements for personalized recommendations.",
    learnerBenefit:
      "Get relevant opportunities and identify skills to develop based on your profile and goals.",
    features: [
      {
        title: "Skills & Credential Intelligence",
        description:
          "Extract and map skills from profiles, resumes, credentials, courses, and job postings.",
      },
      {
        title: "Opportunity & Talent Matching",
        description:
          "Match learners with courses, projects, internships, jobs, and career pathways.",
      },
      {
        title: "Analytics & Insights",
        description:
          "Provide insights into learner progress, skills, credentials, outcomes, and workforce needs.",
      },
    ],
  },

  {
    number: "04",
    title: "Standards & Definition Layer",
    description:
      "Use shared standards to describe skills, credentials, learning outcomes, and employment information consistently.",
    learnerBenefit:
      "Make your skills and achievements easier to understand, verify, and use across systems.",
    features: [
      {
        title: "Credential Standards",
        description:
          "Support Open Badges, Verifiable Credentials, Comprehensive Learner Records, and Learning & Employment Records.",
      },
      {
        title: "Skill Standards",
        description:
          "Use frameworks such as OSN, ESCO, SFIA, O*NET, and Lightcast to organize skills.",
      },
      {
        title: "Skill Definition & Exchange",
        description:
          "Connect skills and credentials with roles, competencies, learning outcomes, and opportunities.",
      },
      {
        title: "Interoperability Standards",
        description:
          "Support JSON-LD, Schema.org, credential exchange, privacy, and cross-platform interoperability.",
      },
    ],
  },

  {
    number: "05",
    title: "Data & Storage Layer",
    description:
      "Provide the secure data foundation for identity, skills, credentials, learning, and employment information.",
    learnerBenefit:
      "Keep your learning records, achievements, skills, and credentials securely organized throughout your career.",
    features: [
      {
        title: "Structured & Semantic Data Stores",
        description:
          "Use graph, document, and vector databases to connect data and power search, analytics, and AI.",
      },
      {
        title: "Verifiable Data Vault",
        description:
          "Securely store identity and credentials while giving users control over access and sharing.",
      },
      {
        title: "Blockchain Trust Engine",
        description:
          "Support credential verification, signatures, revocation, DIDs, and trusted audit processes.",
      },
    ],
  },
];

export const learnerJourney = [
  {
    step: "01",
    title: "Build Your Profile",
    description:
      "Add your education, skills, projects, experiences, and achievements.",
  },
  {
    step: "02",
    title: "Build Your Skills",
    description:
      "Explore courses, projects, internships, hackathons, and other learning experiences.",
  },
  {
    step: "03",
    title: "Earn Recognition",
    description:
      "Turn your achievements into credentials, certificates, and digital badges.",
  },
  {
    step: "04",
    title: "Show What You Can Do",
    description:
      "Share your verified profile, achievements, credentials, and resume.",
  },
  {
    step: "05",
    title: "Discover Opportunities",
    description:
      "Find courses, projects, internships, jobs, and career pathways that match your skills.",
  },
  {
    step: "06",
    title: "Keep Growing",
    description:
      "Identify skill gaps, follow career pathways, and continue developing your skills.",
  },
];

export const whySolo = [
  {
    title: "One Professional Profile",
    description:
      "Keep your skills, education, experience, credentials, and achievements together.",
  },
  {
    title: "Verified Achievements",
    description:
      "Turn your learning and accomplishments into shareable digital proof.",
  },
  {
    title: "Personalized Opportunities",
    description:
      "Discover opportunities based on your skills, interests, and goals.",
  },
  {
    title: "Career Pathways",
    description:
      "See the skills and experiences needed to move toward your target career.",
  },
];