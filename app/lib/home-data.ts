export type IconName = "Database" | "Workflow" | "Code2" | "Network" | "Server" | "Globe2" | "BriefcaseBusiness";

export type HomeData = {
  hero: { name: string; role: string; tagline: string; location: string; profileImage: string; available: boolean; highlights: string[] };
  about: { paragraphs: string[]; education: string; educationSchool: string; focus: string; focusDetail: string };
  projects: Array<{ number: string; type: string; title: string; description: string; stack: string[]; icon: IconName }>;
  skills: Array<{ title: string; icon: IconName; items: string[] }>;
  experience: Array<{ role: string; company: string; period: string; points: string[] }>;
  contact: { email: string; linkedin: string; github: string };
};

export const defaultHomeData: HomeData = {
  hero: {
    name: "Geleta Shelema",
    role: "IT Support Specialist · D365FO ERP · Odoo · Full Stack",
    tagline: "an IT Support Specialist and ERP-focused technology professional working across Microsoft Dynamics 365, Odoo, IT infrastructure and full-stack development.",
    location: "Addis Ababa, Ethiopia",
    profileImage: "/images/geleta.jpg",
    available: true,
    highlights: ["D365FO", "Odoo", "MERN", "Networking"],
  },
  about: {
    paragraphs: [
      "I am a Computer Science graduate with hands-on experience supporting enterprise users, ERP processes and business technology. My work combines practical troubleshooting with a growing focus on ERP implementation, software development and automation.",
      "At Kerchanshe Group, I support day-to-day IT operations and Microsoft Dynamics 365 Finance & Operations users. Alongside my professional role, I continue building practical solutions with Odoo, Python and modern JavaScript technologies.",
    ],
    education: "BSc in Computer Science",
    educationSchool: "Raya University",
    focus: "IT & ERP Solutions",
    focusDetail: "Enterprise support, implementation and development",
  },
  projects: [
    { number: "01", type: "ERP SUPPORT", title: "D365 Finance & Operations Support", description: "Enterprise ERP support across procurement, inventory, user access, workflows and day-to-day business operations.", stack: ["Microsoft Dynamics 365 FO", "Procurement", "Inventory"], icon: "Database" },
    { number: "02", type: "ERP DEVELOPMENT", title: "Odoo Customization & Workflows", description: "Odoo Community development and implementation practice, including custom modules, approval flows and operational dashboards.", stack: ["Odoo 17/19", "Python", "PostgreSQL", "XML"], icon: "Workflow" },
    { number: "03", type: "FULL-STACK DEVELOPMENT", title: "MERN & Next.js Applications", description: "Responsive web applications, business dashboards, REST APIs and database-backed features for real-world workflows.", stack: ["Next.js", "React", "Node.js", "MongoDB"], icon: "Code2" },
    { number: "04", type: "IT INFRASTRUCTURE", title: "Network & End-User Support", description: "Practical IT operations covering LAN/WAN connectivity, Windows troubleshooting, workstation support, CCTV and user assistance.", stack: ["Networking", "Windows", "CCTV", "IT Support"], icon: "Network" },
    { number: "05", type: "BUSINESS AUTOMATION", title: "Workflow Automation with n8n", description: "Automation concepts connecting forms, email, spreadsheets, APIs and business applications to reduce repetitive work.", stack: ["n8n", "REST APIs", "Webhooks", "Automation"], icon: "Workflow" },
    { number: "06", type: "DATA & REPORTING", title: "ERP Data & Business Reporting", description: "Exploring structured ERP data, SQL and Power BI reporting to turn operational information into useful business insights.", stack: ["SQL", "Power BI", "Excel", "D365FO"], icon: "Database" },
  ],
  skills: [
    { title: "ERP & Business Systems", icon: "Database", items: ["Dynamics 365 Finance & Operations", "Odoo ERP", "Procurement & Sourcing", "Inventory Management", "ERP user support", "X++ fundamentals"] },
    { title: "Development", icon: "Code2", items: ["React & Next.js", "JavaScript & TypeScript", "Node.js & Express", "Python", "MongoDB & PostgreSQL", "REST APIs"] },
    { title: "IT Infrastructure", icon: "Server", items: ["IT Helpdesk & troubleshooting", "LAN/WAN networking", "Windows support", "Hardware maintenance", "CCTV systems", "User & access management"] },
    { title: "Automation & Tools", icon: "Workflow", items: ["n8n workflows", "Git & GitHub", "Docker fundamentals", "AWS fundamentals", "Power BI", "VS Code"] },
  ],
  experience: [
    { role: "IT Support Specialist – ERP D365FO", company: "Kerchanshe Group", period: "2022 – Present", points: ["Provide day-to-day IT and ERP support for business users across operational sites.", "Support Microsoft Dynamics 365 Finance & Operations processes, including procurement, inventory and user access.", "Troubleshoot workstation, network, printer and CCTV-related issues.", "Coordinate IT service requests, issue resolution and user support."] },
    { role: "Freelance Web & ERP Developer", company: "Independent / Upwork & Fiverr", period: "Ongoing", points: ["Build and maintain web applications using React, Next.js, Node.js and MongoDB.", "Develop and customize Odoo modules and business workflows.", "Use Git, Docker and AI-assisted development tools to support delivery."] },
  ],
  contact: {
    email: "your.email@example.com",
    linkedin: "https://www.linkedin.com/in/your-handle",
    github: "https://github.com/your-handle",
  },
};