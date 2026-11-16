"use server";

import { revalidatePath } from "next/cache";
import { saveHomeData } from "@/lib/store";
import type { HomeData } from "@/lib/home-data";

export async function saveHomeAction(data: HomeData) {
  try {
    await saveHomeData(data);
    revalidatePath("/");
    revalidatePath("/admin/home");
    return { ok: true as const };
  } catch (err) {
    return { ok: false as const, error: (err as Error).message };
  }
}
