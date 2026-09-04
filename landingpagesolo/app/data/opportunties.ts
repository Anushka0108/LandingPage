export type Opportunity = {
  id: string;
  type: string;
  title: string;
  organization: string;
  skills: string[];
  description: string;
  location: string;
  duration: string;
  level: string;
  payment: string;
  posted: string;
  eligibility: string;
  applicationDeadline: string;
};

export const opportunities: Opportunity[] = [
  {
    id: "full-stack-web-development",
    type: "COURSE",
    title: "Full Stack Web Development",
    organization: "SOLO Learning",
    skills: ["React", "Node.js", "SQL"],
    description:
      "Learn how to build complete web applications from frontend to backend. Work with React, Node.js, databases, APIs and real-world projects.",
    location: "Remote",
    duration: "12 Weeks",
    level: "Beginner to Intermediate",
    payment: "Free",
    posted: "2 days ago",
    eligibility: "Open to all learners",
    applicationDeadline: "30 September 2026",
  },

  {
    id: "frontend-developer-intern",
    type: "INTERNSHIP",
    title: "Frontend Developer Intern",
    organization: "Tech Innovations",
    skills: ["React", "JavaScript", "CSS"],
    description:
      "Gain practical experience building responsive and interactive web applications while working with an experienced development team.",
    location: "Remote",
    duration: "8 Weeks",
    level: "Intermediate",
    payment: "Paid",
    posted: "3 days ago",
    eligibility: "Students and recent graduates",
    applicationDeadline: "20 September 2026",
  },

  {
    id: "ai-powered-web-app",
    type: "PROJECT",
    title: "Build an AI-Powered Web App",
    organization: "SOLO Projects",
    skills: ["Python", "React", "AI"],
    description:
      "Build a complete web application that integrates artificial intelligence. Learn how to connect AI models with a modern React frontend.",
    location: "Remote",
    duration: "4 Weeks",
    level: "Intermediate",
    payment: "Free",
    posted: "5 days ago",
    eligibility: "Learners with basic programming knowledge",
    applicationDeadline: "15 October 2026",
  },

  {
    id: "future-tech-hackathon",
    type: "HACKATHON",
    title: "Future Tech Hackathon",
    organization: "SOLO Community",
    skills: ["Innovation", "Web", "AI"],
    description:
      "Collaborate with other learners to create innovative technology solutions and turn your ideas into working prototypes.",
    location: "Remote",
    duration: "48 Hours",
    level: "All Levels",
    payment: "Free",
    posted: "1 week ago",
    eligibility: "Students and developers",
    applicationDeadline: "10 October 2026",
  },

  {
    id: "junior-full-stack-developer",
    type: "JOB",
    title: "Junior Full Stack Developer",
    organization: "Digital Labs",
    skills: ["React", "Node.js", "MongoDB"],
    description:
      "Join a development team as a junior full-stack developer and work on real-world applications using modern web technologies.",
    location: "Hybrid",
    duration: "Full Time",
    level: "Entry Level",
    payment: "Paid",
    posted: "1 week ago",
    eligibility: "BE/BTech IT, CS or equivalent",
    applicationDeadline: "25 September 2026",
  },

  {
    id: "data-analytics-python",
    type: "COURSE",
    title: "Data Analytics with Python",
    organization: "SOLO Learning",
    skills: ["Python", "SQL", "Data"],
    description:
      "Learn how to analyze, clean and visualize data using Python and SQL, and turn datasets into meaningful insights.",
    location: "Remote",
    duration: "10 Weeks",
    level: "Beginner",
    payment: "Free",
    posted: "4 days ago",
    eligibility: "Open to all learners",
    applicationDeadline: "5 October 2026",
  },
];