import Link from "next/link";
import { ArrowUpRight, FileText, FolderGit2, Inbox } from "lucide-react";
import { posts, projects, messages } from "@/lib/store";

export default function AdminDashboard() {
  const stats = [
    { label: "Posts",     value: posts.length,    icon: FileText,    href: "/admin/posts" },
    { label: "Projects",  value: projects.length, icon: FolderGit2,  href: "/admin/projects" },
    { label: "Messages",  value: messages.filter(m => !m.read).length, icon: Inbox, href: "/admin/messages", hint: "unread" },
  ];

  return (
    <>
      <h1 className="text-2xl font-black tracking-tight">Dashboard</h1>
      <p className="muted mt-1 text-sm">Overview of your site content.</p>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {stats.map(({ label, value, icon: Icon, href, hint }) => (
          <Link key={label} href={href} className="card transition-card group p-6">
            <div className="flex items-center justify-between">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-mint/10 text-mint">
                <Icon size={18} />
              </span>
              <ArrowUpRight size={15} className="text-slate-500 transition group-hover:text-mint" />
            </div>
            <div className="mt-4 text-2xl font-black">{value}</div>
            <div className="muted text-xs">{label}{hint ? ` · ${hint}` : ""}</div>
          </Link>
        ))}
      </div>
    </>
  );
}