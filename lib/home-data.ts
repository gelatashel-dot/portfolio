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
      "I am a Computer Science graduate with hands-on experience supporting enterprise users, ERP processes and business technology.",
      "At Kerchanshe Group, I support day-to-day IT operations and Microsoft Dynamics 365 Finance & Operations users.",
    ],
    education: "BSc in Computer Science",
    educationSchool: "Raya University",
    focus: "IT & ERP Solutions",
    focusDetail: "Enterprise support, implementation and development",
  },
  projects: [
    { number: "01", type: "ERP SUPPORT", title: "D365 Finance & Operations Support", description: "Enterprise ERP support across procurement, inventory and workflows.", stack: ["Microsoft Dynamics 365 FO", "Procurement", "Inventory"], icon: "Database" },
    { number: "02", type: "ERP DEVELOPMENT", title: "Odoo Customization & Workflows", description: "Odoo Community development with custom modules and approval flows.", stack: ["Odoo 17/19", "Python", "PostgreSQL", "XML"], icon: "Workflow" },
    { number: "03", type: "FULL-STACK DEVELOPMENT", title: "MERN & Next.js Applications", description: "Responsive web applications, dashboards and REST APIs.", stack: ["Next.js", "React", "Node.js", "MongoDB"], icon: "Code2" },
    { number: "04", type: "IT INFRASTRUCTURE", title: "Network & End-User Support", description: "Practical IT operations covering LAN/WAN and Windows support.", stack: ["Networking", "Windows", "CCTV", "IT Support"], icon: "Network" },
    { number: "05", type: "BUSINESS AUTOMATION", title: "Workflow Automation with n8n", description: "Automation connecting forms, email, APIs and business apps.", stack: ["n8n", "REST APIs", "Webhooks"], icon: "Workflow" },
    { number: "06", type: "DATA & REPORTING", title: "ERP Data & Business Reporting", description: "SQL and Power BI reporting for business insights.", stack: ["SQL", "Power BI", "Excel"], icon: "Database" },
  ],
  skills: [
    { title: "ERP & Business Systems", icon: "Database", items: ["Dynamics 365 Finance & Operations", "Odoo ERP", "Procurement", "Inventory Management"] },
    { title: "Development", icon: "Code2", items: ["React & Next.js", "TypeScript", "Node.js", "Python", "MongoDB", "PostgreSQL"] },
    { title: "IT Infrastructure", icon: "Server", items: ["IT Helpdesk", "LAN/WAN networking", "Windows support", "CCTV systems"] },
    { title: "Automation & Tools", icon: "Workflow", items: ["n8n workflows", "Git & GitHub", "Docker", "AWS", "Power BI"] },
  ],
  experience: [
    { role: "IT Support Specialist – ERP D365FO", company: "Kerchanshe Group", period: "2022 – Present", points: ["Provide day-to-day IT and ERP support for business users.", "Support Microsoft Dynamics 365 Finance & Operations processes.", "Troubleshoot workstation, network and CCTV issues."] },
    { role: "Freelance Web & ERP Developer", company: "Independent", period: "Ongoing", points: ["Build web applications with React, Next.js, Node.js.", "Develop and customize Odoo modules."] },
  ],
  contact: {
    email: "gelatashel@gmail.com",
    linkedin: "https://www.linkedin.com/in/galata-shelema-8a39203ba/",
    github: "https://github.com/",
  },
};
