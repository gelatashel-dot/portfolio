import { notFound } from "next/navigation";
import { posts } from "@/lib/store";
import { PostForm } from "../post-form";
import { updatePost } from "../actions";

export default async function EditPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = posts.find(p => p.id === id);
  if (!post) notFound();

  return (
    <>
      <h1 className="text-2xl font-black tracking-tight">Edit post</h1>
      <PostForm action={updatePost.bind(null, id)} post={post} />
    </>
  );
}