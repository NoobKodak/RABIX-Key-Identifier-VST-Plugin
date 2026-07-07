import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

const features = [
  { title: "Real-time BPM detection", desc: "Instantly track tempo as audio plays." },
  { title: "Musical key detection", desc: "Identify the key of any track in real time." },
  { title: "Relative key display", desc: "See the relative major/minor at a glance." },
  { title: "Works inside your DAW", desc: "Runs seamlessly as a VST3 plugin." },
  { title: "Windows and macOS support", desc: "Native builds for both platforms." },
  { title: "Clean React-powered interface", desc: "Modern, minimal, distraction-free UI." },
];

function Index() {
  return (
    <div>
      <section className="mx-auto max-w-5xl px-6 pt-24 pb-20 text-center sm:pt-32">
        <h1 className="text-4xl font-bold tracking-tight text-black sm:text-6xl">
          Rabix — Real-Time Key & BPM<br className="hidden sm:block" /> Detection for Producers
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-600">
          Rabix is a lightweight VST3 plugin that detects the key, relative key, and BPM of audio playing through your DAW in real time.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/download"
            className="rounded-full bg-black px-7 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-neutral-800"
          >
            Download Rabix
          </Link>
          <a
            href="#features"
            className="rounded-full border border-neutral-200 bg-white px-7 py-3 text-sm font-medium text-black transition hover:bg-neutral-50"
          >
            Learn More
          </a>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-center text-3xl font-bold text-black sm:text-4xl">Features</h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-neutral-600">
          Everything a producer needs to analyze audio, elegantly built-in.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-3xl border border-neutral-100 bg-white p-8 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.06)] transition hover:shadow-[0_8px_32px_-8px_rgba(0,0,0,0.1)]"
            >
              <h3 className="text-lg font-semibold text-black">{f.title}</h3>
              <p className="mt-2 text-sm text-neutral-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
