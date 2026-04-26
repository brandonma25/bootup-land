const signalSections = [
  {
    label: "What happened",
    text: "Three major manufacturers expanded regional production plans after a quarter of shipping volatility and new policy pressure.",
  },
  {
    label: "Why it matters",
    text: "The move suggests resilience spending is becoming a standing operating cost, not a temporary response to disruption.",
  },
  {
    label: "What led to this",
    text: "Tariff uncertainty, port delays, and customer pressure for delivery confidence have made single-region efficiency harder to defend.",
  },
  {
    label: "What it connects to",
    text: "Industrial software, robotics, supplier-financing tools, and regional infrastructure incentives all benefit when optionality becomes strategy.",
  },
];

export function SignalPreview() {
  return (
    <section
      id="preview"
      className="border-y border-[#d9d0bd] bg-[#173f3a] px-5 py-20 text-white sm:px-8"
    >
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#e5bb73]">
            Example signal card
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
            A news story is the input. The signal is the useful output.
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#d8e3dc]">
            The first landing page tests whether this structure feels immediately useful to
            people who need to understand consequence, not consume more coverage.
          </p>
        </div>

        <article className="border border-[#8aa49c] bg-[#fffaf0] p-5 text-[#141411] shadow-[0_28px_70px_rgba(0,0,0,0.22)] sm:p-7">
          <div className="flex flex-col gap-4 border-b border-[#d9d0bd] pb-5 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#886327]">
                Global operations
              </p>
              <h3 className="mt-3 text-2xl font-semibold leading-tight">
                Manufacturers trade lean efficiency for regional fallback capacity.
              </h3>
            </div>
            <div className="border border-[#d9d0bd] bg-white px-3 py-2 text-sm font-semibold text-[#0b756c]">
              4 min read
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {signalSections.map((section) => (
              <section key={section.label} className="border-l-2 border-[#d89c3b] pl-4">
                <h4 className="text-sm font-semibold text-[#1d1a16]">{section.label}</h4>
                <p className="mt-2 text-sm leading-6 text-[#5a554b]">{section.text}</p>
              </section>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
