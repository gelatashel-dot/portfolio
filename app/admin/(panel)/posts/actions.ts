"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { posts } from "@/lib/store";

function parseForm(formData: FormData) {
  return {
    title: String(formData.get("title") ?? "").trim(),
    slug: String(formData.get("slug") ?? "").trim(),
    excerpt: String(formData.get("excerpt") ?? "").trim(),
    body: String(formData.get("body") ?? "").trim(),
    tags: String(formData.get("tags") ?? "").split(",").map(t => t.trim()).filter(Boolean),
    published: formData.get("published") === "on",
  };
}

export async function createPost(formData: FormData) {
  const data = parseForm(formData);
  posts.push({
    id: crypto.randomUUID(),
    date: new Date().toISOString().slice(0, 10),
    ...data,
  });
  revalidatePath("/admin/posts");
  revalidatePath("/blog");
  redirect("/admin/posts");
}

export async function updatePost(id: string, formData: FormData) {
  const i = posts.findIndex(p => p.id === id);
  if (i === -1) return;
  posts[i] = { ...posts[i], ...parseForm(formData) };
  revalidatePath("/admin/posts");
  revalidatePath("/blog");
  redirect("/admin/posts");
}

export async function deletePost(id: string) {
  const i = posts.findIndex(p => p.id === id);
  if (i !== -1) posts.splice(i, 1);
  revalidatePath("/admin/posts");
  revalidatePath("/blog");
}