export type SuccessStory = {
  id: string;
  category: "Institution" | "Employer";
  partnerName: string;
  partnerLogoText: string;
  cardTitle: string;
  cardDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  tags: string[];
  intro: string;
  challenge: string;
  solutionIntro: string;
  solutionCards: { title: string; desc: string }[];
  resultsIntro: string;
  resultsCards: { title: string; desc: string }[];
  conclusion: string;
};

export const successStories: SuccessStory[] = [
  {
    id: "leaf-agile-leadership",
    category: "Institution",
    partnerName: "L-EAF",
    partnerLogoText: "L·EAF",
    cardTitle: "Transforming Education with Agile Leadership",
    cardDescription:
      "L-EAF's Certification Journey with SOLO Network transformed their credentialing process and improved learner outcomes significantly.",
    heroTitle: "Transforming Education with Agile Leadership",
    heroSubtitle:
      "How L-EAF Lab revolutionizes educational leadership through agile methodologies and SOLO's comprehensive digital credentialing platform.",
    tags: [
      "Agile Leadership",
      "Verifiable Credentials",
      "Student Centered Learning",
      "Collaborative Education",
      "Standards Compliance",
      "Badge Designer",
      "Open Badge 3.0",
    ],
    intro:
        "The Learning Educational Agile Framework (L-EAF) was created to introduce agile methodologies into the educational sector, equipping leaders with the tools and strategies needed to navigate the complexities of modern education. L-EAF's mission is to foster dynamic, student-centered learning environments that promote adaptability and collaboration within educational institutions. By focusing on continuous improvement and leadership development, L-EAF empowers educators to address the evolving challenges in education, enabling them to lead with agility and create more effective learning experiences for students.",
    challenge:
        "L-EAF encountered substantial challenges in its credentialing program, primarily due to a lack of standardized processes for validating and representing skills clearly. The absence of a structured system made it difficult to ensure that credentials reflected consistent quality and alignment with industry expectations. Without clear standards, there was ambiguity around the validity and authenticity of credentials, complicating efforts to communicate their value to both learners and employers. This lack of clear skill representation created barriers to building trust and credibility, hindering L-EAF's ability to showcase the competencies their credentials aimed to certify.",

solutionIntro:
      "L-EAF partnered with SOLO to design a credentialing pathway built on Open Badge 3.0, giving every certified leader a verifiable, shareable digital badge.",
    solutionCards: [
      { title: "Custom Badge Designer", desc: "SOLO's Badge Designer let L-EAF create badges that reflect its own leadership framework and visual identity." },
      { title: "Open Badge 3.0 Standard", desc: "Every credential follows the Open Badge 3.0 standard, so it's portable, verifiable and globally recognized." },
      { title: "Student-Centered Tracking", desc: "Progress is tracked against student-centered outcomes, keeping the focus on real classroom impact." },
    ],
    resultsIntro:
      "With SOLO's platform, L-EAF has turned agile leadership training into a recognized, trusted credential.",
    resultsCards: [
      { title: "Stronger Leadership Pipeline", desc: "Educators now have a clear, credentialed pathway into leadership roles within their institutions." },
      { title: "Standards Compliance", desc: "Every badge meets Open Badge 3.0 and CLR requirements, ready for institutional and industry recognition." },
      { title: "Improved Learner Outcomes", desc: "Agile, collaborative teaching practices adopted through the program have measurably improved learner outcomes." },
    ],
    conclusion:
      "By partnering with SOLO, L-EAF has turned its agile leadership philosophy into a credentialed, scalable program — giving educators recognition they can carry throughout their careers.",
  },
  {
    id: "leaf-lab-workforce-readiness",
    category: "Employer",
    partnerName: "L-EAF LAB",
    partnerLogoText: "L•B",
    cardTitle: "Empowering Workforce Readiness",
    cardDescription:
      "How L-EAF Lab Transformed Education with SOLO's Credentialing Platform, bridging the gap between education and employment.",
    heroTitle:
      "Empowering Workforce Readiness: L-EAF Lab's Transformation with SOLO Credentialing",
    heroSubtitle:
      "How L-EAF Lab bridges education and workforce readiness through hands-on learning and industry-recognized digital credentials powered by the SOLO platform.",
    tags: [
      "Workforce-Ready Skills",
      "Verifiable Credentials",
      "Collaborative Learning",
      "Job-Ready Graduates",
      "Agile Project Management",
      "Stackable Badges",
      "Shareable Credentials",
    ],
    intro:
      "L-EAF Lab's mission is to equip students with real-world skills, preparing them for modern work environments through adaptive, hands-on learning experiences. In an era where the job market demands more than theoretical knowledge, L-EAF Lab emphasizes practical, industry-relevant skills that go beyond the classroom. By combining agile methodologies, collaborative learning, and real-world projects, L-EAF Lab helps learners acquire competencies such as problem-solving, leadership, and critical thinking — essential skills for success in today's workforce.",
    challenge:
      "Despite focusing on hands-on, real-world projects, L-EAF Lab faced challenges in providing students with credentials that effectively demonstrated their skills to employers. There was no standardized, verifiable system to track and validate the competencies that students were acquiring. L-EAF Lab needed a flexible credentialing framework recognized by industry leaders to help students stand out and prove readiness for the workforce.",
    solutionIntro:
      "To address these challenges, L-EAF Lab partnered with SOLO to implement a comprehensive digital credentialing solution following the Open Badge Standard 3.0, 2.0 & CLR. SOLO's platform enabled students to earn verifiable badges for key skills, including agile project management, leadership, and critical thinking, ensuring every credential was industry-recognized and measurable.",
    solutionCards: [
      { title: "Stackable & Flexible Credentials", desc: "SOLO's modular credentialing system allows tracking and continuous updates, keeping student badges relevant and reflective of evolving educational and industry standards." },
      { title: "Open Badge 3.0 + CLR Standards", desc: "Credentials are portable, verifiable, and globally recognized — helping students strengthen their professional portfolios." },
      { title: "Scalable Verification", desc: "SOLO's scalable platform supports real-time tracking, ensuring learners' skills are easily validated by employers worldwide." },
    ],
    resultsIntro:
      "With SOLO's credentialing platform, L-EAF Lab has empowered students to confidently demonstrate their verified skills. 90% of learners reported stronger job readiness, showcasing their digital badges to stand out among competitors. The platform's scalability enables L-EAF Lab to align curriculum with dynamic workforce demands, enhancing student employability and institutional credibility.",
    resultsCards: [
      { title: "Career Confidence", desc: "Learners use industry-verifiable badges to highlight their strengths, boosting self-confidence and employer trust." },
      { title: "Workforce Alignment", desc: "L-EAF Lab frequently updates credentials to match employer needs, securing graduates as top candidates for modern roles." },
      { title: "Scalable Recognition", desc: "SOLO ensures every learner's progress is measurable and scalable for global recognition and future-proof employability." },
    ],
    conclusion:
      "By integrating SOLO's credentialing platform, L-EAF Lab transformed the way students validate workforce readiness. With digital, verifiable credentials, learners now gain tangible recognition for their skills. This partnership between L-EAF Lab and SOLO bridges the gap between education and modern employment, empowering students to lead confidently in the evolving global job market.",
  },
  {
    id: "spark-bridging-education-employment",
    category: "Employer",
    partnerName: "SPARK+",
    partnerLogoText: "SPARK+",
    cardTitle: "Bridging Education and Employment",
    cardDescription:
      "SPARK+ Technologies-Bridging Education and Employment through Workforce Development and Lifelong Learning initiatives.",
    heroTitle: "Bridging Education and Employment",
    heroSubtitle:
      "How SPARK+ Technologies and SOLO Network are redefining workforce development through verifiable credentials and lifelong learning pathways.",
    tags: [
      "Workforce Development",
      "Career Pathways",
      "Verifiable Credentials",
      "Live Project Experience",
      "Talent Pipeline",
      "Comprehensive Learner Records",
      "Industry Collaboration",
    ],
    intro:
      "SPARK+ Technologies works to close the gap between education and employment, giving learners live project experience and clear career pathways into the workforce.",
    challenge:
      "SPARK+ needed a way to capture and verify the skills learners built through live projects, so employers could trust and act on those records without re-testing every candidate.",
    solutionIntro:
      "SPARK+ partnered with SOLO to build a comprehensive learner record system, turning project work and career milestones into verifiable, shareable credentials.",
    solutionCards: [
      { title: "Comprehensive Learner Records", desc: "Every project, milestone and skill a learner completes is captured in a single, verifiable record." },
      { title: "Live Project Verification", desc: "Credentials are tied directly to real project work, giving employers confidence in what a badge represents." },
      { title: "Talent Pipeline Integration", desc: "SOLO connects SPARK+'s learner records directly to its talent pipeline, streamlining hiring for partner employers." },
    ],
    resultsIntro:
      "SOLO's platform has helped SPARK+ turn hands-on project experience into a trusted signal for employers, strengthening its talent pipeline.",
    resultsCards: [
      { title: "Faster Hiring Decisions", desc: "Employers can verify a candidate's skills instantly, shortening the path from learner to hire." },
      { title: "Stronger Industry Collaboration", desc: "Verified credentials give SPARK+ a common language with industry partners around what learners can actually do." },
      { title: "Lifelong Learning Pathways", desc: "Learners keep building on their credential record long after their first project, supporting ongoing career growth." },
    ],
    conclusion:
      "Through its partnership with SOLO, SPARK+ Technologies has built a credentialing system that turns real project work into career opportunity — bridging education and employment for every learner it serves.",
  },
];