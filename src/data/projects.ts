export type ProjectCategory = "Full-Stack" | "Backend" | "Data/ML" | "Cloud/Infra" | "Cybersecurity";

export type Project = {
    slug: string;
    name: string;
    tagline: string;
    role: string;
    categories: ProjectCategory[];
    stack: string[];
    bullets: string[];
    metrics?: string[];
    links?: { code?: string; live?: string };
    featured?: boolean;
};

export const projects: Project[] = [
    {
        slug: "pulsegsu",
        name: "PulseGSU",
        tagline: "Student event discovery + RSVP platform for campus life",
        role: "Full-Stack Developer",
        categories: ["Full-Stack", "Backend"],
        stack: ["React", "Tailwind", "Flask", "Gradio"],
        bullets: [
            "Architected a student event discovery platform with OOP design for 500+ users; authored PRD and led feature rollout.",
            "Improved RSVP process speed by 40% and boosted accessibility scores by 35%.",
        ],
        metrics: ["500+ users", "RSVP +40%", "Accessibility +35%"],
        links: { code: "#", live: "#" },

    },
    {
        slug: "techdigest",
        name: "TechDigest",
        tagline: "Tech news summarization web app",
        role: "Full-Stack Engineer",
        categories: ["Full-Stack", "Data/ML"],
        stack: ["React", "Tailwind", "Flask", "OpenAI API", "Netlify", "GitHub Actions"],
        bullets: [
            "Built a scalable web app summarizing tech news for 500+ students, reducing research time by 60%.",
            "Integrated automated summarization; deployed on Netlify (99.9% uptime) and boosted team efficiency by 40% via CI/CD.",
        ],
        metrics: ["500+ students", "Research time -60%", "Uptime 99.9%"],
        links: { code: "https://github.com/KayBee1880/techdigest", live: "https://techdigest.netlify.app" },
        featured: true,
    },
    {
        slug: "dailysync",
        name: "DailySync",
        tagline: "Real-time KPI tracking for A/B tests and statistical analysis",
        role: "Data Engineer",
        categories: ["Data/ML", "Backend"],
        stack: ["Pandas", "SQL", "Kafka", "Grafana"],
        bullets: [
            "Designed a KPI tracking platform enabling A/B testing and analysis at scale (10K+ users).",
            "Implemented fault-tolerant queues + monitoring to improve data availability and responsiveness.",
        ],
        metrics: ["10K+ users", "Fault-tolerant pipelines"],
        links: { code: "https://github.com/KayBee1880/DailySync", live: "#" },
        featured: true,
    },
    {
        slug: "cloud-native-infra",
        name: "Cloud Native Infrastructure Provisioning",
        tagline: "Multi-cloud infra automation with safe rollbacks and DB migration",
        role: "Cloud / Infrastructure Engineer",
        categories: ["Cloud/Infra", "Backend"],
        stack: ["Terraform", "Ansible", "AWS", "GCP", "Docker", "Kubernetes (GKE)", "Helm", "MySQL", "Liquibase"],
        bullets: [
            "Provisioned multi-cloud infrastructure with Terraform/Ansible across AWS + GCP, reducing setup time by 45%.",
            "Containerized services with Docker; deployed to GKE via Helm with zero-downtime rollbacks.",
            "Migrated MySQL to Cloud SQL using Liquibase, cutting DB downtime by 80%.",
            "Enabled secure, low-latency traffic via inter-cloud VPC peering.",
        ],
        metrics: ["Setup time -45%", "DB downtime -80%", "Zero-downtime rollbacks"],
        links: { code: "#", live: "#" },
    },
    {
        slug: "fitgeanie",
        name: "FitGeanie",
        tagline: "AI-driven meal + workout planning with automated delivery workflows",
        role: "AI / Automation Engineer",
        categories: ["Full-Stack", "Data/ML"],
        stack: ["Tally.so", "Zapier", "Gmail/Mailchimp", "Agentic AI", "Docker"],
        bullets: [
            "Developed personalized meal/workout plan generator for 180+ users, reducing manual planning time by 50%.",
            "Automated intake and delivery workflows with Zapier and containerization to improve engagement and scalability.",
        ],
        metrics: ["180+ users", "Planning time -50%"],
        links: { code: "https://studio.pickaxe.co/STUDIOF7U1Q5TR12R84H8/FitGeanie__Your_Health__Fitness_Assistant_WE3LP?_gl=1*ohjq8c*_gcl_aw*R0NMLjE3NjgxNTcwMDkuQ2owS0NRaUFzWTNMQmhDd0FSSXNBRjZPNlhnc0pjRU1pLWlURXNaRjJRbDZuWDVwTUt0dHR0eUtlekk4MUZrb0VaRmd5Tlk5UEUwS25rSWFBcm04RUFMd193Y0I.*_gcl_au*MTU2OTEzNTMzMC4xNzY4MTU3MDA3", live: "#" },
        featured: true,
    },
    {
        slug: "equiface",
        name: "EquiFace",
        tagline: "Fairness-aware image classification with bias mitigation tracking",
        role: "Machine Learning Engineer",
        categories: ["Data/ML"],
        stack: ["TensorFlow", "Python", "VAE", "Comet ML"],
        bullets: [
            "Developed CNN-based classifier with variational autoencoders to enhance bias mitigation and reliability.",
            "Tracked performance and fairness metrics using Comet ML to maintain stability under training.",
        ],
        links: { code: "https://github.com/KayBee1880/LatentSync-Configuration-files-used", live: "#" },
        featured: true,
    },

    // Cybersecurity / Threat Analysis
    {
        slug: "email-network-threat-analysis",
        name: "Advanced Email & Network Threat Analysis",
        tagline: "Hands-on platform for BEC detection and network attack simulations",
        role: "Security Engineer (Simulation/Analysis)",
        categories: ["Cybersecurity"],
        stack: ["PCAP", "Splunk", "SIEM", "SSH", "FTP", "SSL Proxy"],
        bullets: [
            "Inspected PCAP files to detect BEC activity and fraudulent emails; analyzed traffic using Splunk and SIEM tools.",
            "Simulated directory traversal attacks on FTP servers and DoS attacks on SSL proxies to validate detection coverage.",
            "Built actionable visualizations and queries to improve real-time threat detection and response workflows.",
        ],
        links: { code: "#", live: "#" },
    },
    {
        slug: "cybersecurity-simulation-suite",
        name: "Cybersecurity Simulation Suite",
        tagline: "Pen testing + vulnerability analysis with standards-based prioritization",
        role: "Security Engineer",
        categories: ["Cybersecurity"],
        stack: ["Ubuntu", "SSH", "Metasploit", "Hashcat", "Steghide", "NIST Vulnerability DB"],
        bullets: [
            "Developed a cybersecurity simulation platform for penetration testing and vulnerability analysis.",
            "Executed black-box testing and password cracking with ~80% recovery success; identified 15+ high-risk vulnerabilities.",
            "Applied NIST security standards to improve risk prioritization and system resilience.",
        ],
        metrics: ["~80% recovery success", "15+ high-risk vulns"],
        links: { code: "#", live: "#" },
    },
    {
        slug: "defensive-cyber-capstone",
        name: "Defensive Cybersecurity Capstone",
        tagline: "Incident response, malware analysis, threat intel, and mitigation planning",
        role: "Team Lead",
        categories: ["Cybersecurity"],
        stack: ["Incident Response", "Malware Analysis", "Threat Intel", "Vulnerability Assessment", "NIST IR Frameworks"],
        bullets: [
            "Led a defensive operations capstone simulating real-world incident response and threat hunting workflows.",
            "Created and tested controlled malware samples; performed threat intel + vulnerability assessments.",
            "Implemented mitigations reducing potential exploit exposure by ~25% and improving team processes.",
        ],
        metrics: ["Exploit exposure -25%"],
        links: { code: "#", live: "#" },
    },
    {
        slug: "incident-response-threat-hunting",
        name: "Full-Spectrum Incident Response & Threat Hunting",
        tagline: "IOC analysis, timeline reconstruction, and forensic documentation",
        role: "Incident Response Analyst",
        categories: ["Cybersecurity"],
        stack: ["Splunk", "Catalyst", "SIEM", "IOC Analysis", "Malware Forensics"],
        bullets: [
            "Led end-to-end threat detection and incident response exercises using Splunk and SIEM tooling.",
            "Identified IOCs, reconstructed attack timelines, and improved system readiness via proactive hunting.",
            "Reduced endpoint exposure through structured forensic documentation and remediation playbooks.",
        ],
        links: { code: "#", live: "#" },
    },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const categories: ProjectCategory[] = ["Full-Stack", "Backend", "Data/ML", "Cloud/Infra", "Cybersecurity"];
