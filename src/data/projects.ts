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
        slug: "raftmage",
        name: "RaftMage",
        tagline: "Fault-tolerant distributed key-value store built on Raft consensus",
        role: "Backend / Distributed Systems Engineer",
        categories: ["Backend"],
        stack: ["Go", "Raft Consensus", "gRPC", "Protobuf"],
        bullets: [
            "Architected a distributed, sharded key-value store in Go utilizing the Raft consensus protocol to ensure strong data consistency.",
            "Implemented a custom gRPC API with Protobuf to facilitate low-latency inter-node communication and state machine replication.",
            "Designed fault-tolerant recovery mechanisms to handle network partitions and node crashes with zero data loss.",
        ],
        metrics: ["Zero data loss", "Strong consistency", "Fault-tolerant"],
        featured: true,
    },
    {
        slug: "safelink",
        name: "Safelink",
        tagline: "Decentralized peer-to-peer mesh messaging for zero-infrastructure environments",
        role: "Systems / Security Engineer",
        categories: ["Backend", "Full-Stack"],
        stack: ["BLE/WiFi Direct Mesh", "Web API", "Leaflet", "AES-256", "Vite"],
        bullets: [
            "Contributed to building an offline-first peer-to-peer mesh messaging system for zero-infrastructure environments.",
            "Implemented secure messaging features using AES-256 encryption with HMAC verification to ensure data integrity.",
            "Assisted in designing routing logic and retry mechanisms to improve message delivery in unstable networks.",
        ],
        metrics: ["AES-256 encrypted", "Offline-first", "Zero infrastructure"],
        featured: true,
    },
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
    },
    {
        slug: "techdigest",
        name: "TechDigest",
        tagline: "Tech news summarization web app",
        role: "Full-Stack Engineer",
        categories: ["Full-Stack", "Data/ML"],
        stack: ["React", "Tailwind", "Flask", "OpenAI API", "Netlify", "GitHub Actions"],
        bullets: [
            "Architected a responsive full-stack web application using React and Flask to automate data aggregation and summarization for 500+ users.",
            "Integrated asynchronous processing to handle heavy OpenAI API payloads, optimizing client-side rendering speeds and UI responsiveness.",
            "Established a CI/CD pipeline via GitHub Actions for automated testing, deploying to production with 99.9% uptime validation.",
        ],
        metrics: ["500+ students", "Research time -60%", "Uptime 99.9%"],
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
            "Architected real-time data ingestion pipelines using Kafka to stream performance metrics for 10K+ concurrent users.",
            "Designed fault-tolerant message queues and automated retry logic to eliminate data loss and guarantee high availability.",
            "Integrated Grafana dashboards with optimized SQL query engines to visualize streaming telemetry with sub-second latency.",
        ],
        metrics: ["10K+ users", "Fault-tolerant pipelines"],
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
    },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const categories: ProjectCategory[] = ["Full-Stack", "Backend", "Data/ML", "Cloud/Infra", "Cybersecurity"];
