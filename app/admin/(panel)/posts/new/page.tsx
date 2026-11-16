import { createPost } from "../actions";
import { PostForm } from "../post-form";

export default function NewPostPage() {
  return (
    <>
      <h1 className="text-2xl font-black tracking-tight">New post</h1>
      <PostForm action={createPost} />
    </>
  );
}