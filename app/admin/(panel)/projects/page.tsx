import { projects } from "@/lib/store";

export default function ProjectsAdminPage() {
  return (
    <>
      <h1 className="text-2xl font-black tracking-tight">Projects</h1>
      <p className="muted mt-1 text-sm">
        Portfolio entries. Edit <code className="rounded bg-white/10 px-1.5 py-0.5 text-xs">lib/store.ts</code> to change them for now.
      </p>

      <div className="mt-6 grid gap-3 md:grid-cols-2">
        {projects.map(p => (
          <div key={p.id} className="card p-5">
            <div className="eyebrow">{p.type} · {p.number}</div>
            <h3 className="mt-2 font-bold">{p.title}</h3>
            <p className="muted mt-2 text-xs leading-6">{p.description}</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {p.stack.map(s => <span key={s} className="tag">{s}</span>)}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}