import { promises as fs } from "fs";
import path from "path";
import { defaultHomeData, type HomeData } from "./home-data";

export type Post = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  date: string;
  tags: string[];
  published: boolean;
};

export type Project = {
  id: string;
  number: string;
  type: string;
  title: string;
  description: string;
  stack: string[];
};

export type Message = {
  id: string;
  name: string;
  email: string;
  body: string;
  createdAt: string;
  read: boolean;
};

export const posts: Post[] = [
  {
    id: "1",
    slug: "d365fo-procurement-gotchas",
    title: "5 D365FO procurement gotchas and how to avoid them",
    excerpt: "Small configuration mistakes in D365FO procurement that cost teams hours — and the fixes.",
    body: "Content goes here.",
    date: "2026-09-18",
    tags: ["D365FO", "Procurement"],
    published: true,
  },
  {
    id: "2",
    slug: "odoo-17-custom-module",
    title: "Building your first Odoo 17 custom module",
    excerpt: "A practical walk-through of models, views, security and a minimal approval workflow.",
    body: "Content goes here.",
    date: "2026-08-02",
    tags: ["Odoo", "Python"],
    published: true,
  },
];

export const projects: Project[] = [
  {
    id: "1",
    number: "01",
    type: "ERP SUPPORT",
    title: "D365 Finance & Operations Support",
    description: "Enterprise ERP support across procurement, inventory, user access, workflows and day-to-day business operations.",
    stack: ["D365FO", "Procurement", "Inventory"],
  },
  {
    id: "2",
    number: "02",
    type: "ERP DEVELOPMENT",
    title: "Odoo Customization & Workflows",
    description: "Odoo Community development including custom modules, approval flows and operational dashboards.",
    stack: ["Odoo 17/19", "Python", "PostgreSQL"],
  },
  {
    id: "3",
    number: "03",
    type: "FULL-STACK DEVELOPMENT",
    title: "MERN & Next.js Applications",
    description: "Responsive web applications, business dashboards, REST APIs and database-backed features.",
    stack: ["Next.js", "React", "Node.js", "MongoDB"],
  },
];

export const messages: Message[] = [
  {
    id: "1",
    name: "Sample Sender",
    email: "sample@example.com",
    body: "Hi, are you available for a D365FO support role?",
    createdAt: "2026-11-10",
    read: false,
  },
];

const FILE = path.join(process.cwd(), "data", "home.json");
export async function getHomeData(): Promise<HomeData> {
  try {
    const raw = await fs.readFile(FILE, "utf-8");
    return JSON.parse(raw) as HomeData;
  } catch {
    return defaultHomeData;
  }
}
export async function saveHomeData(data: HomeData): Promise<void> {
  await fs.mkdir(path.dirname(FILE), { recursive: true });
  await fs.writeFile(FILE, JSON.stringify(data, null, 2), "utf-8");
}
