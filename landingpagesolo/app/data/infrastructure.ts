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
      "This is where your learning and career journey comes together. SOLO connects courses, projects, internships, jobs, credentials, and career pathways in one place.",
    learnerBenefit:
      "Instead of searching across different platforms, you can discover learning and career opportunities that connect directly to your skills and goals.",
    features: [
      {
        title: "Lifelong Skills Portfolio",
        description:
          "Build a profile that grows with you by recording your skills, education, projects, experiences, achievements, badges, and credentials."
      },
      {
        title: "Stakeholder Portals",
        description:
          "Connect with institutions, employers, mentors, and other members of the SOLO ecosystem."
      },
      {
        title: "Credential & Badge Issuance Platform",
        description:
          "Receive digital badges and credentials that recognize the skills and achievements you have earned."
      },
      {
        title: "Identity & Credential Wallet",
        description:
          "Keep your verified credentials and professional identity organized and accessible in one place."
      },
      {
        title: "Verification & Utilization Suite",
        description:
          "Use verified credentials and achievements as trusted evidence when applying for learning and career opportunities."
      }
    ]
  },

  {
    number: "02",
    title: "Integration Layer",
    description:
      "SOLO connects with learning platforms, institutions, employers, HR systems, job boards, and other external systems.",
    learnerBenefit:
      "Your learning and achievement information can move between connected systems without requiring you to repeatedly enter the same information.",
    features: [
      {
        title: "Integration Gateway",
        description:
          "Provides secure connections between SOLO and external platforms."
      },
      {
        title: "Developer APIs",
        description:
          "Allows other applications and services to securely connect with SOLO."
      },
      {
        title: "Data Sync Engine",
        description:
          "Keeps relevant information synchronized between connected systems."
      },
      {
        title: "Credential APIs",
        description:
          "Enable verified credentials to be issued, accessed, and used across connected platforms."
      }
    ]
  },

  {
    number: "03",
    title: "AI Intelligence Layer",
    description:
      "SOLO uses AI to understand skills, credentials, opportunities, and career requirements so that learners can make better decisions.",
    learnerBenefit:
      "The more complete your profile becomes, the better SOLO can help you discover relevant opportunities and understand what skills you may need next.",
    features: [
      {
        title: "Skills & Credential Intelligence Engine",
        description:
          "Understands the skills represented by your learning experiences, projects, achievements, badges, and credentials."
      },
      {
        title: "Opportunity & Talent Matching Engine",
        description:
          "Helps connect learners with relevant courses, internships, projects, jobs, and career pathways based on their skills and interests."
      },
      {
        title: "Analytics & Insights Engine",
        description:
          "Provides insights into your progress, achievements, skills, and career development."
      }
    ]
  },

  {
    number: "04",
    title: "Standards & Definition Layer",
    description:
      "SOLO uses recognized standards to describe skills and credentials consistently, making achievements easier to understand and verify.",
    learnerBenefit:
      "Your skills and credentials can be represented in a structured way that makes them more useful across education and employment systems.",
    features: [
      {
        title: "Credential Standards",
        description:
          "Supports standards for digital credentials and verifiable achievements."
      },
      {
        title: "Skill Standards",
        description:
          "Provides structured ways of describing and organizing skills."
      },
      {
        title: "Skill Definition & Exchange",
        description:
          "Helps skills be understood and exchanged consistently between different systems."
      },
      {
        title: "Other Standards",
        description:
          "Supports additional standards that help connect learning, skills, credentials, and employment data."
      }
    ]
  },

  {
    number: "05",
    title: "Data & Storage Layer",
    description:
      "This layer provides the foundation for securely storing and managing the information that powers the SOLO ecosystem.",
    learnerBenefit:
      "Your achievements, skills, credentials, and learning information can be organized and protected while remaining useful across your journey.",
    features: [
      {
        title: "Verifiable Data Vault",
        description:
          "Provides a trusted environment for managing verifiable learner and credential information."
      },
      {
        title: "Structured & Semantic Data Stores",
        description:
          "Organize learning, skills, credential, and opportunity information so that it can be meaningfully connected."
      },
      {
        title: "Blockchain Trust Engine",
        description:
          "Supports trusted and tamper-resistant verification of credential information."
      }
    ]
  }
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