import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/download")({
  head: () => ({
    meta: [
      { title: "Download — Rabix" },
      { name: "description", content: "Download Rabix for Windows and macOS." },
    ],
  }),
  component: Download,
});

function Download() {
  return (
    <section className="mx-auto max-w-5xl px-6 pt-24 pb-16">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-black sm:text-5xl">Download Rabix</h1>
        <p className="mx-auto mt-4 max-w-xl text-neutral-600">
          Free VST3 plugin for real-time key and BPM detection. Choose your platform below.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
        {[
          { os: "Windows", btn: "Download for Windows" },
          { os: "macOS", btn: "Download for macOS" },
        ].map((p) => (
          <div
            key={p.os}
            className="rounded-3xl border border-neutral-100 bg-white p-10 text-center shadow-[0_4px_24px_-8px_rgba(0,0,0,0.06)] transition hover:shadow-[0_8px_32px_-8px_rgba(0,0,0,0.1)]"
          >
            <h2 className="text-2xl font-semibold text-black">{p.os}</h2>
            <p className="mt-2 text-sm text-neutral-500">Rabix v0.1.0 Alpha · VST3</p>
            <a
              href="#"
              className="mt-8 inline-block rounded-full bg-black px-7 py-3 text-sm font-medium text-white transition hover:bg-neutral-800"
            >
              {p.btn}
            </a>
          </div>
        ))}
      </div>

      <div className="mt-16 rounded-3xl border border-neutral-100 bg-neutral-50 p-10 text-center shadow-[0_4px_24px_-8px_rgba(0,0,0,0.04)] sm:p-14">
        <h2 className="text-3xl font-bold text-black">Support Rabix</h2>
        <p className="mx-auto mt-4 max-w-xl text-neutral-600">
          Rabix is free to download. If you find it helpful, please consider supporting the developer. Any amount helps continue development and future updates.
        </p>
        <a
          href="#"
          className="mt-8 inline-block rounded-full border border-black bg-white px-7 py-3 text-sm font-medium text-black transition hover:bg-black hover:text-white"
        >
          Donate
        </a>
      </div>
    </section>
  );
}