import { createFileRoute, Link } from "@tanstack/react-router";
import macbookHero from "../assets/macbook-3.svg.asset.json";
import macbookAlt from "../assets/macbook-9.svg.asset.json";

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
      <section className="relative mx-auto max-w-5xl px-6 pt-24 pb-20 text-center sm:pt-32 overflow-hidden">
        {/* Aurora glow */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 flex justify-center">
          <div className="animate-aurora absolute top-10 h-72 w-72 rounded-full bg-secondary/20 blur-3xl" />
          <div className="animate-aurora absolute top-32 h-64 w-64 rounded-full bg-secondary/10 blur-3xl [animation-delay:-4s]" />
        </div>
        <h1 className="animate-fade-up text-4xl font-bold tracking-tight text-black sm:text-6xl">
          Rabix — Real-Time Key & BPM<br className="hidden sm:block" /> Detection for Producers
        </h1>
        <p className="animate-fade-up mx-auto mt-6 max-w-2xl text-lg text-neutral-600 [animation-delay:120ms]">
          Rabix is a lightweight VST3 plugin that detects the key, relative key, and BPM of audio playing through your DAW in real time.
        </p>
        <div className="animate-fade-up mt-10 flex flex-wrap items-center justify-center gap-3 [animation-delay:240ms]">
          <Link
            to="/download"
            className="shimmer-btn rounded-full px-7 py-3 text-sm font-medium text-secondary-foreground shadow-sm"
          >
            Download Rabix
          </Link>
          <a
            href="#features"
            className="rounded-full border border-neutral-200 bg-white px-7 py-3 text-sm font-medium text-black transition hover:-translate-y-0.5 hover:bg-neutral-50 hover:shadow-md"
          >
            Learn More
          </a>
        </div>
        <div className="mt-16 flex justify-center">
          <img src={macbookHero.url} alt="Rabix running in a DAW" className="float-slow hover-tilt w-full max-w-3xl h-auto" />
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
              className="magic-border hover-lift rounded-3xl border border-neutral-100 bg-white p-8 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.06)]"
            >
              <h3 className="text-lg font-semibold text-black">{f.title}</h3>
              <p className="mt-2 text-sm text-neutral-600">{f.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-20 flex justify-center">
          <img src={macbookAlt.url} alt="Rabix interface preview" className="float-slow hover-tilt w-full max-w-3xl h-auto [animation-delay:-3s]" />
        </div>
      </section>
    </div>
  );
}
