import Link from "next/link";
import type { Post } from "@/lib/store";

type Props = {
  action: (formData: FormData) => Promise<void>;
  post?: Post;
};

export function PostForm({ action, post }: Props) {
  return (
    <form action={action} className="mt-6 grid max-w-3xl gap-5">
      <label className="grid gap-2 text-xs font-semibold text-slate-400">
        Title
        <input name="title" defaultValue={post?.title} required
          className="rounded-xl border border-line bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-mint/50" />
      </label>

      <label className="grid gap-2 text-xs font-semibold text-slate-400">
        Slug
        <input name="slug" defaultValue={post?.slug} required
          className="rounded-xl border border-line bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-mint/50" />
      </label>

      <label className="grid gap-2 text-xs font-semibold text-slate-400">
        Excerpt
        <textarea name="excerpt" defaultValue={post?.excerpt} rows={2}
          className="rounded-xl border border-line bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-mint/50" />
      </label>

      <label className="grid gap-2 text-xs font-semibold text-slate-400">
        Body
        <textarea name="body" defaultValue={post?.body} rows={12}
          className="rounded-xl border border-line bg-white/5 px-4 py-3 font-mono text-sm text-white outline-none focus:border-mint/50" />
      </label>

      <label className="grid gap-2 text-xs font-semibold text-slate-400">
        Tags (comma separated)
        <input name="tags" defaultValue={post?.tags.join(", ")}
          className="rounded-xl border border-line bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-mint/50" />
      </label>

      <label className="inline-flex items-center gap-2 text-sm">
        <input type="checkbox" name="published" defaultChecked={post?.published ?? true}
          className="h-4 w-4 rounded border-line bg-white/5" />
        Published
      </label>

      <div className="flex gap-3 pt-2">
        <button type="submit" className="btn-primary">Save</button>
        <Link href="/admin/posts" className="btn-secondary">Cancel</Link>
      </div>
    </form>
  );
}