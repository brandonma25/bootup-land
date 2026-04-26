import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "You're in — Boot Up",
  description: "You've joined the Boot Up early access list.",
  robots: { index: false, follow: false },
}

export default function ThanksPage() {
  return (
    <div style={styles.page}>
      <nav style={styles.nav}>
        <Link href="/" style={styles.wordmark}>Boot Up</Link>
      </nav>
      <main style={styles.main}>
        <p style={styles.eyebrow}>You&apos;re in.</p>
        <h1 style={styles.heading}>Check your inbox.</h1>
        <p style={styles.body}>
          Boot Up opens for the first 500 readers. We&apos;ll reach out when
          we&apos;re ready — one email, no noise.
        </p>
        <p style={styles.body}>
          In the meantime, the product is still in development. If you want to
          help shape what we build, reply to the confirmation email with what
          you&apos;re hoping to get out of it.
        </p>
        <Link href="/" style={styles.backLink}>Back to Boot Up</Link>
      </main>
      <footer style={styles.footer}>
        <span>Boot Up · 2026</span>
      </footer>
    </div>
  )
}

const styles: Record<string, React.CSSProperties> = {
  page: { background: 'var(--color-bg)', color: 'var(--color-text)', minHeight: '100dvh', display: 'flex', flexDirection: 'column' },
  nav: { padding: '0.875rem var(--page-padding)', borderBottom: '1px solid var(--color-border)' },
  wordmark: { fontFamily: 'var(--font-display)', fontSize: '15px', fontWeight: '500', letterSpacing: '-0.01em', color: 'var(--color-text)', textDecoration: 'none' },
  main: { flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: 'clamp(3rem, 10vw, 6rem) var(--page-padding)', maxWidth: '520px', margin: '0 auto', gap: '1.25rem', width: '100%' },
  eyebrow: { fontSize: '12px', color: 'var(--color-accent)', fontWeight: '500', letterSpacing: '0.02em' },
  heading: { fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 5vw, 2.5rem)', fontWeight: '500', lineHeight: '1.15', letterSpacing: '-0.025em' },
  body: { fontSize: '0.9375rem', color: 'var(--color-text-secondary)', lineHeight: '1.7', maxWidth: '400px' },
  backLink: { fontSize: '13px', color: 'var(--color-text-secondary)', textDecoration: 'underline', textUnderlineOffset: '3px', marginTop: '0.5rem' },
  footer: { padding: '1.25rem var(--page-padding)', borderTop: '1px solid var(--color-border)', fontSize: '12px', color: 'var(--color-text-tertiary)' },
}
