export function WaitlistCta() {
  return (
    <section id="waitlist" className="bg-[#fffaf0] px-5 py-20 sm:px-8">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_0.82fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#886327]">
            Early access
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#1d1a16] sm:text-4xl">
            Join the first reader cohort.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#5a554b]">
            Help validate whether Boot Up should become the daily intelligence layer for
            people making decisions across markets, technology, policy, and capital.
          </p>
        </div>

        <form
          action="mailto:hello@bootup.news"
          method="post"
          encType="text/plain"
          className="border border-[#d9d0bd] bg-white p-5 shadow-[0_16px_45px_rgba(32,28,20,0.06)] sm:p-6"
        >
          <label
            htmlFor="email"
            className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0b756c]"
          >
            Work email
          </label>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@company.com"
              className="min-h-12 flex-1 border border-[#bfb39e] bg-[#fffaf0] px-4 text-base text-[#141411] outline-none transition placeholder:text-[#8d8473] focus:border-[#0b756c]"
            />
            <button
              type="submit"
              className="min-h-12 bg-[#0b756c] px-6 text-sm font-semibold text-white transition hover:bg-[#095b54]"
            >
              Request invite
            </button>
          </div>
          <p className="mt-4 text-sm leading-6 text-[#6a6254]">
            The first cohort will help shape format, coverage, and cadence before broader launch.
          </p>
        </form>
      </div>
    </section>
  );
}
