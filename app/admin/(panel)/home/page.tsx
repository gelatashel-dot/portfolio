import { getHomeData } from "@/lib/store";
import { HomeForm } from "./home-form";

export const metadata = { title: "Admin · Home page" };
export const dynamic = "force-dynamic";

export default async function AdminHomePage() {
  const data = await getHomeData();
  return <HomeForm initial={data} />;
}
