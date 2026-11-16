// app/admin/login/page.tsx
import { redirect } from "next/navigation";
import Link from "next/link";
import { Lock } from "lucide-react";
import { isAuthed, signIn } from "@/lib/auth";

async function login(formData: FormData) {
  "use server";
  const password = String(formData.get("password") ?? "");
  const from = String(formData.get("from") ?? "/admin");

  if (!signIn(password)) {
    redirect(`/admin/login?error=1&from=${encodeURIComponent(from)}`);
  }
  redirect(from);
}

export default function LoginPage({
  searchParams,
}: {
  searchParams: { error?: string; from?: string };
}) {
  if (isAuthed()) redirect(searchParams.from ?? "/admin");

  return (
    <main className="grid min-h-screen place-items-center bg-ink p-6">
      <form
        action={login}
        className="w-full max-w-sm rounded-2xl border border-line bg-panel p-8 shadow-2xl"
      >
        <input type="hidden" name="from" value={searchParams.from ?? "/admin"} />

        <div className="mb-6 flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-mint/10 text-mint">
            <Lock size={18} />
          </span>
          <div>
            <h1 className="font-bold">Admin login</h1>
            <p className="text-[11px] text-slate-500">Enter your admin password</p>
          </div>
        </div>

        {searchParams.error && (
          <p className="mb-4 rounded-lg border border-red-400/40 bg-red-400/10 px-3 py-2 text-xs text-red-300">
            Wrong password. Try again.
          </p>
        )}

        <label className="block">
          <span className="eyebrow mb-1 block">Password</span>
          <input
            type="password"
            name="password"
            required
            autoFocus
            className="w-full rounded-lg border border-line bg-ink px-3 py-2 text-sm text-white outline-none focus:border-mint/60"
          />
        </label>

        <button type="submit" className="btn-primary mt-6 w-full justify-center">
          Sign in
        </button>

        <p className="mt-4 text-center text-[11px] text-slate-500">
          <Link href="/" className="hover:text-mint">← Back to site</Link>
        </p>
      </form>
    </main>
  );
}