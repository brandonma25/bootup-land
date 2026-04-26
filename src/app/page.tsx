import { Hero } from "@/components/landing/Hero";
import { SignalPreview } from "@/components/landing/SignalPreview";
import { WaitlistCta } from "@/components/landing/WaitlistCta";

const audiences = [
  "Founders tracking market shifts before they harden into consensus.",
  "Product leaders who need the context behind customer, platform, and policy changes.",
  "Investors and operators scanning for second-order implications, not headline volume.",
  "Ambitious professionals who want a sharper daily read without living in news feeds.",
];

const productFrames = [
  {
    title: "What happened",
    body: "A concise read on the movement, decision, launch, rule change, or market signal worth knowing.",
  },
  {
    title: "Why it matters",
    body: "The practical implication for operators: demand, risk, timing, leverage, or narrative shift.",
  },
  {
    title: "What led to this",
    body: "The recent context and pressure building under the surface before the event became visible.",
  },
  {
    title: "What it connects to",
    body: "Adjacent signals across markets, technology, policy, labor, and capital that change the shape of the story.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f3ea] text-[#141411]">
      <Hero />

      <section
        id="audience"
        className="border-y border-[#d9d0bd] bg-[#fffaf0] px-5 py-20 sm:px-8"
      >
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#886327]">
              Built for
            </p>
            <h2 className="mt-4 max-w-lg text-3xl font-semibold leading-tight text-[#1d1a16] sm:text-4xl">
              People who make better calls when the dots arrive already connected.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {audiences.map((audience) => (
              <article
                key={audience}
                className="border border-[#d9d0bd] bg-white p-6 shadow-[0_16px_45px_rgba(32,28,20,0.06)]"
              >
                <p className="text-base leading-7 text-[#4b463d]">{audience}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="product" className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#0b756c]">
              The product idea
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#1d1a16] sm:text-4xl">
              Daily signal cards that compress the useful context, not the world.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#5a554b]">
              Boot Up is testing whether globally minded operators want a daily briefing that
              feels closer to an intelligence memo than a news app: shorter, sharper, and built
              around the question, what changes because of this?
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-4">
            {productFrames.map((frame) => (
              <article
                key={frame.title}
                className="border border-[#d9d0bd] bg-[#fffaf0] p-6"
              >
                <h3 className="text-lg font-semibold text-[#1d1a16]">
                  {frame.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-[#5a554b]">{frame.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SignalPreview />
      <WaitlistCta />

      <footer className="border-t border-[#d9d0bd] bg-[#141411] px-5 py-8 text-[#f7f3ea] sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p className="font-semibold">Boot Up</p>
          <p className="text-[#c8bdab]">Sharper context for the first read of the day.</p>
        </div>
      </footer>
    </main>
  );
}
