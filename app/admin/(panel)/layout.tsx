import Link from "next/link";
import { LayoutDashboard, FileText, FolderGit2, Inbox, Settings, LogOut, ExternalLink } from "lucide-react";

const nav = [
  { href: "/admin",           label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/posts",     label: "Posts",     icon: FileText },
  { href: "/admin/projects",  label: "Projects",  icon: FolderGit2 },
  { href: "/admin/messages",  label: "Messages",  icon: Inbox },
  { href: "/admin/settings",  label: "Settings",  icon: Settings },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#080d16] lg:grid lg:grid-cols-[240px_1fr]">
      <aside className="border-b border-white/[.06] lg:border-b-0 lg:border-r">
        <div className="flex h-16 items-center gap-2 px-6">
          <span className="font-black tracking-tight">Admin</span>
          <span className="rounded-full border border-mint/30 px-2 py-0.5 text-[10px] text-mint">
            v0
          </span>
        </div>

        <nav className="flex gap-1 overflow-x-auto px-3 pb-3 lg:flex-col lg:pb-0">
          {nav.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center gap-3 whitespace-nowrap rounded-xl px-3 py-2.5 text-sm text-slate-400 hover:bg-white/5 hover:text-white"
            >
              <Icon size={16} /> {label}
            </Link>
          ))}
        </nav>

        <div className="mt-auto hidden border-t border-white/[.06] p-3 lg:block">
          <Link href="/" className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-400 hover:bg-white/5 hover:text-white">
            <ExternalLink size={16} /> View site
          </Link>
          <form action="/api/admin/logout" method="post">
            <button
              type="submit"
              className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-400 hover:bg-white/5 hover:text-white"
            >
              <LogOut size={16} /> Sign out
            </button>
          </form>
        </div>
      </aside>

      <main className="p-6 sm:p-10">{children}</main>
    </div>
  );
}