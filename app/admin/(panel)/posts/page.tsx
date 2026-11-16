import Link from "next/link";
import { Plus, Pencil } from "lucide-react";
import { posts } from "@/lib/store";
import { deletePost } from "./actions";

export default function PostsPage() {
  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black tracking-tight">Posts</h1>
          <p className="muted mt-1 text-sm">{posts.length} total</p>
        </div>
        <Link href="/admin/posts/new" className="btn-primary">
          <Plus size={16} /> New post
        </Link>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-white/[.06]">
        <table className="w-full text-sm">
          <thead className="bg-white/[.03] text-left text-xs uppercase tracking-wider text-slate-500">
            <tr>
              <th className="p-4">Title</th>
              <th className="p-4">Date</th>
              <th className="p-4">Status</th>
              <th className="p-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.map(p => (
              <tr key={p.id} className="border-t border-white/[.06]">
                <td className="p-4">
                  <div className="font-semibold">{p.title}</div>
                  <div className="text-xs text-slate-500">/{p.slug}</div>
                </td>
                <td className="p-4 text-slate-400">{p.date}</td>
                <td className="p-4">
                  <span className={`rounded-full px-2 py-1 text-xs ${p.published ? "bg-mint/10 text-mint" : "bg-white/5 text-slate-400"}`}>
                    {p.published ? "Published" : "Draft"}
                  </span>
                </td>
                <td className="p-4">
                  <div className="flex items-center justify-end gap-2">
                    <Link href={`/admin/posts/${p.id}`} className="btn-secondary text-xs">
                      <Pencil size={13} /> Edit
                    </Link>
                    <form action={deletePost.bind(null, p.id)}>
                      <button type="submit" className="btn-secondary text-xs text-red-400 hover:border-red-400/50">
                        Delete
                      </button>
                    </form>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}