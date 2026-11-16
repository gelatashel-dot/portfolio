import { promises as fs } from "fs";
import path from "path";
import { defaultHomeData, type HomeData } from "./home-data";

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