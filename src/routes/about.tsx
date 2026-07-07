import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Rabix" },
      { name: "description", content: "About Rabix and NOOBKODAK." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <section className="mx-auto max-w-3xl px-6 pt-24 pb-16">
      <h1 className="text-4xl font-bold tracking-tight text-black sm:text-5xl">About</h1>
      <div className="mt-8 rounded-3xl border border-neutral-100 bg-white p-8 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.06)] sm:p-12">
        <p className="text-lg leading-relaxed text-neutral-700">
          Rabix was created by <span className="font-semibold text-black">NOOBKODAK</span>, a developer and music lover who wanted to contribute to the producer community by building simple and useful tools for music production. Rabix helps producers quickly identify BPM, key, and relative key without leaving their DAW.
        </p>
      </div>
    </section>
  );
}