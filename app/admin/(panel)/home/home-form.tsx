"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import { ArrowLeft, Save } from "lucide-react";
import type { HomeData } from "@/lib/home-data";
import { saveHomeAction } from "./actions";

function TextInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="w-full rounded-lg border border-line bg-panel px-3 py-2 text-sm text-white outline-none focus:border-mint/60"
    />
  );
}

function TextArea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className="w-full rounded-lg border border-line bg-panel px-3 py-2 text-sm text-white outline-none focus:border-mint/60"
    />
  );
}

export function HomeForm({ initial }: { initial: HomeData }) {
  const [data, setData] = useState<HomeData>(initial);
  const [isPending, startTransition] = useTransition();
  const [msg, setMsg] = useState("");

  const save = () => {
    startTransition(async () => {
      const res = await saveHomeAction(data);
      setMsg(res.ok ? "Saved. Reload / to see it." : "Error: " + res.error);
    });
  };

  return (
    <div className="space-y-6 pb-20">
      <div className="flex items-center justify-between">
        <Link href="/admin" className="inline-flex items-center gap-2 text-xs text-slate-400 hover:text-mint">
          <ArrowLeft size={14} /> Dashboard
        </Link>
        <button onClick={save} disabled={isPending} className="btn-primary !py-2 !text-xs disabled:opacity-60">
          <Save size={14} /> {isPending ? "Saving…" : "Save changes"}
        </button>
      </div>

      {msg && (
        <div className="rounded-xl border border-mint/40 bg-mint/10 px-4 py-3 text-sm text-mint">
          {msg}
        </div>
      )}

      <section className="card p-6 space-y-4">
        <h2 className="font-bold">Hero</h2>
        <label className="block">
          <span className="eyebrow mb-1 block">Name</span>
          <TextInput value={data.hero.name} onChange={(e) => setData({ ...data, hero: { ...data.hero, name: e.target.value } })} />
        </label>
        <label className="block">
          <span className="eyebrow mb-1 block">Tagline</span>
          <TextArea rows={3} value={data.hero.tagline} onChange={(e) => setData({ ...data, hero: { ...data.hero, tagline: e.target.value } })} />
        </label>
        <label className="block">
          <span className="eyebrow mb-1 block">Location</span>
          <TextInput value={data.hero.location} onChange={(e) => setData({ ...data, hero: { ...data.hero, location: e.target.value } })} />
        </label>
      </section>

      <section className="card p-6 space-y-4">
        <h2 className="font-bold">Contact</h2>
        <label className="block">
          <span className="eyebrow mb-1 block">Email</span>
          <TextInput value={data.contact.email} onChange={(e) => setData({ ...data, contact: { ...data.contact, email: e.target.value } })} />
        </label>
        <label className="block">
          <span className="eyebrow mb-1 block">LinkedIn URL</span>
          <TextInput value={data.contact.linkedin} onChange={(e) => setData({ ...data, contact: { ...data.contact, linkedin: e.target.value } })} />
        </label>
        <label className="block">
          <span className="eyebrow mb-1 block">GitHub URL</span>
          <TextInput value={data.contact.github} onChange={(e) => setData({ ...data, contact: { ...data.contact, github: e.target.value } })} />
        </label>
      </section>

      <div className="flex justify-end">
        <button onClick={save} disabled={isPending} className="btn-primary disabled:opacity-60">
          <Save size={14} /> {isPending ? "Saving…" : "Save changes"}
        </button>
      </div>
    </div>
  );
}
