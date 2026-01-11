export type ExperienceType =
    | "Internship"
    | "Externship"
    | "Fellowship"
    | "Apprenticeship"
    | "Campus Role"
    | "Program";

export type Experience = {
    id: string;
    company: string;
    role: string;
    dates: string;
    location: string;
    type: ExperienceType;
    tags: string[]; // used for filtering + search
    bullets: string[];
    featured?: boolean;
};

export const experience: Experience[] = [
    {
        id: "jane-street-in-focus",
        company: "Jane Street",
        role: "IN FOCUS Participant (Software Engineering)",
        dates: "Jan 2026",
        location: "New York, USA",
        type: "Program",
        tags: ["OCaml", "Trading Systems", "Backend", "UI", "STEM Access"],
        bullets: [
            "Selected for Jane Street’s IN FOCUS program, designed for students who have faced barriers to advanced STEM opportunities.",
            "Learned OCaml and Jane Street’s tools and libraries, plus core concepts behind building electronic trading systems.",
            "Applied the tooling by building backend + UI components for a computer game and implementing a trading program on a simulated stock exchange."
        ],
        featured: true,
    },
    {
        id: "amazon-campus-prep",
        company: "Amazon",
        role: "Campus Prep Series Participant",
        dates: "Jul 2025 - Dec 2025",
        location: "Remote / USA",
        type: "Program",
        tags: ["Technical Prep", "Leadership", "Career Development"],
        bullets: [
            "Selected for Amazon’s Campus Prep Series focused on technical interview readiness, leadership development, and innovation.",
            "Strengthened problem-solving and systems thinking through structured technical prep sessions and peer collaboration.",
            "Engaged with Amazon engineers and mentors to gain insight into software engineering careers and impact at scale."
        ],
        featured: true,
    },

    {
        id: "codveda-swe-intern",
        company: "Codveda Technologies",
        role: "Software Engineering Intern (Backend Focus)",
        dates: "Jul 2025 – Aug 2025",
        location: "Remote, USA",
        type: "Internship",
        tags: ["Backend", "Automation", "Data Pipelines"],
        bullets: [
            "Designed and deployed data automation workflows that reduced system processing time by 35%.",
            "Aligned backend systems and on-vehicle data pipelines with operational requirements, improving reliability.",
        ],

    },
    {
        id: "snap-swe-extern",
        company: "Snap Inc.",
        role: "Software Engineering Extern (AR/Data Focus)",
        dates: "Mar 2025 – May 2025",
        location: "Remote, USA",
        type: "Externship",
        tags: ["React", "TypeScript", "Dashboards", "Analytics"],
        bullets: [
            "Built analytics dashboards for real-time monitoring used by 1,500+ AR users, improving response tracking by 30%.",
            "Optimized UI and data visualizations using React and TypeScript in collaboration with UX partners.",
        ],
        featured: true,
    },
    {
        id: "wells-fargo-fellow",
        company: "Wells Fargo",
        role: "Software Engineering Fellow (Backend/Data Systems)",
        dates: "Sep 2024 – Dec 2024",
        location: "Remote, USA",
        type: "Fellowship",
        tags: ["Java", "OOP", "Data Models", "Validation"],
        bullets: [
            "Enhanced backend data models using Java and OOP principles, improving query performance by 40%.",
            "Implemented validation and reliability testing pipelines improving integrity by 15%.",
        ],
        featured: true,
    },
    {
        id: "bloomberg-lab-fellow",
        company: "Bloomberg",
        role: "Software Engineering Lab Fellow (Full-Stack/Cloud)",
        dates: "Jul 2024 – Sep 2024",
        location: "Princeton, USA",
        type: "Fellowship",
        tags: ["AWS", "Django", "Python", "Cloud", "Agile"],
        bullets: [
            "Built a cloud-based financial trading app with Python, Django, and AWS, enabling real-time data integration and boosting performance by 30%.",
            "Shipped scalable cloud features in Agile teams, improving reliability and efficiency.",
        ],
        featured: true,
    },

    // Everything else (not lost — shown on /experience)
    {
        id: "gsu-it-coordinator",
        company: "Grambling State University",
        role: "IT Systems Coordinator",
        dates: "Aug 2024 – Present",
        location: "Grambling, LA",
        type: "Campus Role",
        tags: ["Active Directory", "IT Operations", "Reliability"],
        bullets: [
            "Oversaw 150+ Active Directory accounts with 100% compliance and audit readiness.",
            "Implemented system workflows that reduced downtime by 40%, improving IT service delivery across campus.",
        ],
    },
    {
        id: "pwc-extern",
        company: "PwC",
        role: "Digital Strategy Consultant Extern",
        dates: "Jun 2025 – Jul 2025",
        location: "Remote, USA",
        type: "Externship",
        tags: ["Strategy", "Research", "Marketing", "Analytics"],
        bullets: [
            "Researched 10+ peer organizations and designed multi-platform campaigns reaching 50K+ users monthly.",
            "Delivered insights that boosted engagement by 35% and increased outreach by 25%.",
        ],
    },
    {
        id: "microsoft-emerging-leaders",
        company: "Microsoft",
        role: "Emerging Leaders Program (Asynchronous Cohort)",
        dates: "Jul 2025 – Aug 2025",
        location: "Remote, USA",
        type: "Program",
        tags: ["Leadership", "Security", "Storytelling"],
        bullets: [
            "Participated in a Microsoft Security-led initiative focused on leadership, personal branding, and professional storytelling with 20+ peers.",
        ],
    },
    {
        id: "codepath-cyber",
        company: "CodePath",
        role: "Cybersecurity Student (CYB 101/102)",
        dates: "Feb 2025 – Aug 2025",
        location: "Remote, USA",
        type: "Program",
        tags: ["Splunk", "SIEM", "Wireshark", "Threat Hunting", "IR"],
        bullets: [
            "Hands-on experience with logging, HIDS, endpoint/networking, SIEM, incident response, and threat hunting (Wireshark, Wazuh, Splunk, Catalyst).",
            "Executed weekly projects: log analysis, file integrity validation, DoS simulations, malware timelines; collaborated on capstone threat hunting + SOAR workflows.",
        ],
    },
    {
        id: "datacom-apprentice",
        company: "Datacom",
        role: "Product Engineering Apprentice (Security Focus)",
        dates: "Sep 2024 – Nov 2024",
        location: "Remote, USA",
        type: "Apprenticeship",
        tags: ["Incident Response", "Risk Assessment", "Recommendations"],
        bullets: [
            "Simulated real-world security operations: threat detection, incident response, and client security management.",
            "Produced 10+ actionable recommendations improving posture and reducing potential risk exposure by 25%.",
            "Performed risk assessments across three client systems to prioritize mitigations and resilience improvements.",
        ],
    },
    {
        id: "jpmc-apprentice",
        company: "JPMorgan Chase",
        role: "Product Engineering Apprentice (Security Focus)",
        dates: "Jul 2024 – Sep 2024",
        location: "Remote, USA",
        type: "Apprenticeship",
        tags: ["Fraud Detection", "AppSec", "NLP", "Security"],
        bullets: [
            "Analyzed financial datasets to identify fraud patterns, improving detection accuracy by 20%.",
            "Mitigated SQL injection and XSS vulnerabilities, reducing exploit risk by 30%.",
            "Built a supervised NLP email classifier achieving 92% accuracy for spam detection.",
        ],
    },
    {
        id: "ai4all-ignite",
        company: "AI4ALL Ignite",
        role: "Emerging Artificial Intelligence (AI) Practitioner",
        dates: "Aug 2025 – Dec 2025",
        location: "Remote, USA",
        type: "Program",
        tags: ["Ethical AI", "ML Pipelines", "Responsible AI"],
        bullets: [
            "Designing and testing ethical ML pipelines for predictive modeling, focusing on inclusive, human-centered AI solutions.",
            "Collaborating with peers on responsible AI initiatives to guide product design decisions.",
        ],
    },
    {
        id: "propel2excel",
        company: "Propel2Excel",
        role: "Fellow",
        type: "Program",
        location: "Remote, USA",
        dates: "Dec 2025 - Present",
        tags: ["Professional Development", "Career Readiness", "Leadership"],
        stack: [],
        bullets: [
            "Selected as a Propel2Excel Fellow in a professional development program focused on technical growth, career readiness, and leadership in technology.",
            "Completed workshops on software engineering fundamentals, interview preparation, and professional communication while engaging with mentors and peer cohorts."
        ],
    }


];

export const featuredExperience = experience.filter((e) => e.featured);

export const experienceTypes: ExperienceType[] = [
    "Internship",
    "Externship",
    "Fellowship",
    "Apprenticeship",
    "Campus Role",
    "Program",
];
