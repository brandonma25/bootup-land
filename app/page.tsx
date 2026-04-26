import SubscribeForm from './components/SubscribeForm'

export default function HomePage() {
  return (
    <div style={styles.page}>
      <nav style={styles.nav}>
        <span style={styles.wordmark}>Boot Up</span>
        <span style={styles.navBadge}>Early access</span>
      </nav>

      <section style={styles.hero}>
        <p style={styles.eyebrow}>For people who outgrew the feed.</p>
        <h1 style={styles.h1}>
          The world&apos;s caught up by the time you grab coffee.
        </h1>
        <p style={styles.subhead}>
          Algorithms feed you what keeps you watching. You want to understand
          the system. Boot Up is built for the second one.
        </p>
        <SubscribeForm />
        <p style={styles.trustStrip}>
          For people whose morning already includes Stratechery, Money Stuff,
          and Lenny&apos;s Newsletter.
        </p>
      </section>

      <section style={styles.previewSection}>
        <p style={styles.sectionLabel}>A signal from this morning&apos;s brief</p>
        <div style={styles.signalCard}>
          <div style={styles.badgeRow}>
            <span style={styles.badgeCore}>Core signal</span>
            <span style={styles.badgeCategory}>Economy</span>
          </div>
          <h2 style={styles.signalTitle}>
            US chip export controls reshape global semiconductor supply chains
          </h2>
          <p style={styles.signalReason}>
            Forces every major economy to choose sides in the technology trade
            war — and the timeline is compressing.
          </p>
          <div style={styles.layerRow}>
            {['What happened', 'Why it matters', 'What led to this', 'What it connects to'].map(
              (layer) => (
                <span key={layer} style={styles.layerTag}>+ {layer}</span>
              )
            )}
          </div>
        </div>
        <p style={styles.previewCaption}>
          One of five today. Each one explained, not just summarized.
        </p>
      </section>

      <section style={styles.outcomesSection}>
        <h2 style={styles.outcomesHeading}>What you&apos;re actually buying</h2>
        <div style={styles.outcomesList}>
          {OUTCOMES.map((outcome) => (
            <div key={outcome.number} style={styles.outcomeItem}>
              <span style={styles.outcomeNumber}>{outcome.number}</span>
              <p style={styles.outcomeText}>{outcome.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={styles.ctaSection}>
        <h2 style={styles.ctaHeading}>Caught up by tomorrow&apos;s coffee.</h2>
        <p style={styles.ctaSubhead}>
          Five minutes. The day&apos;s most important signals, explained — not summarized.
        </p>
        <SubscribeForm />
      </section>

      <footer style={styles.footer}>
        <span>Boot Up · 2026</span>
        <span>Built for the ambitious morning.</span>
      </footer>
    </div>
  )
}

const OUTCOMES = [
  {
    number: '01',
    text: "This week's tariff fight isn't standalone. It's last quarter's chip export rules, finishing their move. You see the pattern.",
  },
  {
    number: '02',
    text: 'TikTok stops deciding what matters to you. You walk in with a read.',
  },
  {
    number: '03',
    text: "When someone asks what you think about the Fed decision, you don't have a headline. You have an answer.",
  },
]

const styles: Record<string, React.CSSProperties> = {
  page: { background: 'var(--color-bg)', color: 'var(--color-text)', minHeight: '100dvh' },
  nav: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.875rem var(--page-padding)', borderBottom: '1px solid var(--color-border)' },
  wordmark: { fontFamily: 'var(--font-display)', fontSize: '15px', fontWeight: '500', letterSpacing: '-0.01em' },
  navBadge: { fontSize: '11px', color: 'var(--color-text-tertiary)' },
  hero: { display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: 'clamp(3rem, 8vw, 5rem) var(--page-padding) clamp(2.5rem, 6vw, 4rem)', maxWidth: '640px', margin: '0 auto', gap: '1.25rem' },
  eyebrow: { fontSize: '12px', color: 'var(--color-accent)', fontWeight: '500', letterSpacing: '0.02em' },
  h1: { fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 5vw, 2.5rem)', fontWeight: '500', lineHeight: '1.15', letterSpacing: '-0.025em' },
  subhead: { fontSize: 'clamp(0.9rem, 2vw, 1.05rem)', color: 'var(--color-text-secondary)', lineHeight: '1.65', maxWidth: '440px' },
  trustStrip: { fontSize: '12px', color: 'var(--color-text-tertiary)', lineHeight: '1.55', maxWidth: '380px' },
  previewSection: { background: 'var(--color-bg-secondary)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)', padding: 'clamp(2.5rem, 6vw, 4rem) var(--page-padding)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem' },
  sectionLabel: { fontSize: '11px', color: 'var(--color-text-tertiary)', letterSpacing: '0.04em', textAlign: 'center' },
  signalCard: { background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '10px', padding: '1.25rem 1.5rem', width: '100%', maxWidth: '480px', display: 'flex', flexDirection: 'column', gap: '0.75rem' },
  badgeRow: { display: 'flex', gap: '0.375rem' },
  badgeCore: { fontSize: '11px', fontWeight: '500', color: '#0c447c', background: '#e6f1fb', padding: '2px 9px', borderRadius: '999px' },
  badgeCategory: { fontSize: '11px', fontWeight: '500', color: 'var(--color-text-secondary)', background: 'var(--color-bg-secondary)', padding: '2px 9px', borderRadius: '999px' },
  signalTitle: { fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: '500', lineHeight: '1.4', letterSpacing: '-0.01em' },
  signalReason: { fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: '1.6' },
  layerRow: { display: 'flex', flexWrap: 'wrap', gap: '0.625rem', paddingTop: '0.75rem', borderTop: '1px solid var(--color-border)' },
  layerTag: { fontSize: '11px', color: 'var(--color-text-tertiary)' },
  previewCaption: { fontSize: '12px', color: 'var(--color-text-tertiary)', textAlign: 'center' },
  outcomesSection: { padding: 'clamp(2.5rem, 6vw, 4rem) var(--page-padding)', maxWidth: '560px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' },
  outcomesHeading: { fontFamily: 'var(--font-display)', fontSize: 'clamp(1.1rem, 2.5vw, 1.35rem)', fontWeight: '500', letterSpacing: '-0.015em', textAlign: 'center' },
  outcomesList: { display: 'flex', flexDirection: 'column', gap: '1.5rem' },
  outcomeItem: { display: 'flex', gap: '1rem', alignItems: 'flex-start' },
  outcomeNumber: { fontSize: '11px', fontWeight: '500', color: 'var(--color-text-tertiary)', minWidth: '20px', paddingTop: '3px', letterSpacing: '0.02em' },
  outcomeText: { fontSize: '0.9375rem', color: 'var(--color-text)', lineHeight: '1.65' },
  ctaSection: { background: 'var(--color-bg-secondary)', borderTop: '1px solid var(--color-border)', padding: 'clamp(3rem, 8vw, 5rem) var(--page-padding)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', textAlign: 'center' },
  ctaHeading: { fontFamily: 'var(--font-display)', fontSize: 'clamp(1.35rem, 3vw, 1.75rem)', fontWeight: '500', letterSpacing: '-0.02em' },
  ctaSubhead: { fontSize: '0.9375rem', color: 'var(--color-text-secondary)', maxWidth: '380px', lineHeight: '1.6', marginBottom: '0.25rem' },
  footer: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.25rem var(--page-padding)', borderTop: '1px solid var(--color-border)', fontSize: '12px', color: 'var(--color-text-tertiary)', flexWrap: 'wrap', gap: '0.5rem' },
}
