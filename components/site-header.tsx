import Link from "next/link";
import { ArrowUpRight, Menu } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

const links = [
  ["About", "/#about"],
  ["Expertise", "/#expertise"],
  ["Projects", "/#projects"],
  ["Experience", "/#experience"],
  ["Contact", "/#contact"]
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/[.07] bg-ink/85 backdrop-blur-xl">
      <div className="container flex h-[72px] items-center justify-between">
        <a href="/#home" className="flex items-center gap-3" aria-label="Geleta Shelema home">
          <span className="grid h-9 w-9 place-items-center rounded-xl border border-mint/30 bg-mint/10 text-sm font-black text-mint">GS</span>
          <span className="text-sm font-bold tracking-tight">GELETA <span className="text-slate-400">SHELEMA</span></span>
        </a>
        <nav className="hidden items-center gap-4 md:flex" aria-label="Main navigation">
          {links.map(([label, href]) => <a key={label} href={href} className="text-xs text-slate-400 transition hover:text-mint">{label}</a>)}
          <Link href="/blog" className="text-xs text-slate-400 transition hover:text-mint">Blog</Link>
        </nav>
        <div className="flex items-center gap-2">
          <Link href="/admin" className="btn-secondary !px-3 !py-2 text-xs">Admin</Link>
          <ThemeToggle />
          <a href="/#contact" className="hidden items-center gap-2 rounded-full border border-mint/40 px-4 py-2 text-xs font-semibold text-mint transition hover:bg-mint hover:text-ink lg:inline-flex">
            Let&apos;s talk <ArrowUpRight size={14} />
          </a>
          <a href="/#contact" className="hidden text-mint sm:inline-flex md:hidden" aria-label="Go to contact"><Menu size={22}/></a>
        </div>
      </div>
    </header>
  );
}
