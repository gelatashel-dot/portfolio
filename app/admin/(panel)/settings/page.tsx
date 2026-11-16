export default function SettingsPage() {
  return (
    <>
      <h1 className="text-2xl font-black tracking-tight">Settings</h1>
      <p className="muted mt-1 text-sm">Site-level configuration.</p>

      <div className="mt-6 grid max-w-xl gap-4">
        <div className="card p-5">
          <div className="eyebrow mb-2">Environment</div>
          <p className="muted text-xs leading-6">
            Admin auth uses <code className="rounded bg-white/10 px-1.5 py-0.5">ADMIN_PASSWORD</code> and
            <code className="mx-1 rounded bg-white/10 px-1.5 py-0.5">ADMIN_SECRET</code> from
            <code className="mx-1 rounded bg-white/10 px-1.5 py-0.5">.env.local</code>.
            Change both before deploying.
          </p>
        </div>

        <div className="card p-5">
          <div className="eyebrow mb-2">Data source</div>
          <p className="muted text-xs leading-6">
            Currently using in-memory storage (<code className="rounded bg-white/10 px-1.5 py-0.5">lib/store.ts</code>).
            All changes are lost on server restart.
          </p>
        </div>
      </div>
    </>
  );
}