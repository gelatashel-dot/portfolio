import { messages } from "@/lib/store";

export default function MessagesPage() {
  return (
    <>
      <h1 className="text-2xl font-black tracking-tight">Messages</h1>
      <p className="muted mt-1 text-sm">{messages.filter(m => !m.read).length} unread</p>

      <div className="mt-6 grid gap-3">
        {messages.map(m => (
          <div key={m.id} className={`card p-5 ${m.read ? "opacity-60" : ""}`}>
            <div className="flex items-center justify-between">
              <div className="font-semibold">{m.name}</div>
              <span className="text-xs text-slate-500">{m.createdAt}</span>
            </div>
            <div className="text-xs text-mint">{m.email}</div>
            <p className="muted mt-3 text-sm leading-7">{m.body}</p>
          </div>
        ))}
      </div>
    </>
  );
}