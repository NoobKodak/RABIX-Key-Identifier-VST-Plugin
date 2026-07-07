import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/whats-new")({
  head: () => ({
    meta: [
      { title: "What's New — Rabix" },
      { name: "description", content: "Rabix changelog and release notes." },
    ],
  }),
  component: WhatsNew,
});

const releases = [
  {
    version: "Rabix v0.1.0 Alpha",
    date: "Initial release",
    notes: [
      "BPM detection",
      "Key detection",
      "Relative key display",
      "VST3 support",
      "Windows and macOS download pages",
    ],
  },
];

function WhatsNew() {
  return (
    <section className="mx-auto max-w-3xl px-6 pt-24 pb-16">
      <h1 className="text-4xl font-bold tracking-tight text-black sm:text-5xl">What's New</h1>
      <p className="mt-3 text-neutral-600">Changelog and updates for Rabix.</p>
      <div className="mt-10 space-y-6">
        {releases.map((r) => (
          <article
            key={r.version}
            className="rounded-3xl border border-neutral-100 bg-white p-8 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.06)]"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="text-2xl font-semibold text-black">{r.version}</h2>
              <span className="text-sm text-neutral-500">{r.date}</span>
            </div>
            <ul className="mt-5 space-y-2">
              {r.notes.map((n) => (
                <li key={n} className="flex items-start gap-3 text-neutral-700">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400" />
                  <span>{n}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}