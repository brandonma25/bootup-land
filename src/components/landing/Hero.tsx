export function Hero() {
  return (
    <section className="relative overflow-hidden px-5 py-8 sm:px-8">
      <div className="absolute inset-0 bg-[linear-gradient(115deg,#f7f3ea_0%,#f7f3ea_48%,#173f3a_48%,#173f3a_100%)]" />
      <div className="relative mx-auto grid min-h-[calc(100svh-2rem)] max-w-6xl content-center gap-10 py-12 lg:grid-cols-[1fr_0.85fr] lg:items-center">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#886327]">
            Daily intelligence for operators
          </p>
          <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[1.02] text-[#141411] sm:text-6xl lg:text-7xl">
            Wake up to the signals behind the headlines.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#4b463d] sm:text-xl">
            Boot Up turns important global developments into concise daily signal cards:
            what happened, why it matters, what led to it, and what it connects to.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#waitlist"
              className="inline-flex min-h-12 items-center justify-center bg-[#141411] px-6 text-sm font-semibold text-white transition hover:bg-[#2d2923]"
            >
              Request early access
            </a>
            <a
              href="#preview"
              className="inline-flex min-h-12 items-center justify-center border border-[#9d927e] bg-[#fffaf0] px-6 text-sm font-semibold text-[#141411] transition hover:bg-white"
            >
              View example card
            </a>
          </div>
        </div>

        <div className="hidden justify-self-end lg:block">
          <div className="w-[360px] border border-[#d9d0bd] bg-[#fffaf0] p-5 shadow-[0_30px_80px_rgba(20,20,17,0.22)]">
            <div className="flex items-center justify-between border-b border-[#d9d0bd] pb-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#886327]">
                Today&apos;s read
              </p>
              <p className="text-xs text-[#716958]">07:10</p>
            </div>
            <div className="mt-5 space-y-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0b756c]">
                  Signal
                </p>
                <h2 className="mt-2 text-2xl font-semibold leading-tight">
                  Supply chains are moving from optimization to optionality.
                </h2>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex items-start justify-between gap-4 border-t border-[#d9d0bd] pt-3">
                  <p className="font-semibold">Pressure</p>
                  <p className="max-w-44 text-right text-[#5a554b]">
                    Policy, tariffs, resilience budgets
                  </p>
                </div>
                <div className="flex items-start justify-between gap-4 border-t border-[#d9d0bd] pt-3">
                  <p className="font-semibold">Watch</p>
                  <p className="max-w-44 text-right text-[#5a554b]">
                    Industrial software demand
                  </p>
                </div>
              </div>
              <div className="h-2 bg-[#173f3a]" />
              <div className="grid grid-cols-[1fr_0.7fr_1.2fr] gap-2">
                <span className="h-12 bg-[#d89c3b]" />
                <span className="h-12 bg-[#0b756c]" />
                <span className="h-12 bg-[#141411]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
