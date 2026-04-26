'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { track } from '@vercel/analytics'

type FormState = 'idle' | 'loading' | 'error'

const ROLES = [
  { value: '', label: "I'm a... (select one)" },
  { value: 'undergrad-student', label: 'Undergrad student' },
  { value: 'early-career-professional', label: 'Early-career professional' },
  { value: 'grad-student', label: 'Grad student' },
  { value: 'other', label: 'Other' },
]

export default function SubscribeForm() {
  const [email, setEmail] = useState('')
  const [role, setRole] = useState('')
  const [state, setState] = useState<FormState>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!role) {
      setErrorMsg('Please select your role.')
      return
    }
    setState('loading')
    setErrorMsg('')
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, role }),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.message ?? 'Something went wrong.')
      }
      track('subscribe', { role })
      router.push('/thanks')
    } catch (err) {
      setState('error')
      setErrorMsg(
        err instanceof Error ? err.message : 'Something went wrong. Try again.'
      )
    }
  }

  const isLoading = state === 'loading'

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <div style={styles.fields}>
        <input
          type="email"
          placeholder="you@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={isLoading}
          aria-label="Email address"
          style={styles.input}
        />
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          required
          disabled={isLoading}
          aria-label="Your role"
          style={{
            ...styles.input,
            ...styles.select,
            color: role ? 'var(--color-text)' : 'var(--color-text-tertiary)',
          }}
        >
          {ROLES.map((r) => (
            <option key={r.value} value={r.value} disabled={!r.value}>
              {r.label}
            </option>
          ))}
        </select>
        <button type="submit" disabled={isLoading} style={styles.button}>
          {isLoading ? 'Joining...' : 'Join the early list'}
        </button>
      </div>
      {state === 'error' && errorMsg && (
        <p role="alert" style={styles.error}>{errorMsg}</p>
      )}
      <p style={styles.disclosure}>Free during early access. No spam.</p>
    </form>
  )
}

const styles: Record<string, React.CSSProperties> = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    width: '100%',
    maxWidth: '420px',
    margin: '0 auto',
  },
  fields: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  input: {
    width: '100%',
    height: '44px',
    padding: '0 0.875rem',
    fontSize: '14px',
    fontFamily: 'inherit',
    color: 'var(--color-text)',
    background: 'var(--color-bg)',
    border: '1px solid var(--color-border)',
    borderRadius: '6px',
    outline: 'none',
    transition: 'border-color 0.15s',
  },
  select: {
    appearance: 'none',
    WebkitAppearance: 'none',
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%236b6b6b' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 0.875rem center',
    paddingRight: '2.25rem',
    cursor: 'pointer',
  },
  button: {
    width: '100%',
    height: '44px',
    padding: '0 1.25rem',
    fontSize: '14px',
    fontWeight: '500',
    fontFamily: 'inherit',
    color: '#ffffff',
    background: 'var(--color-text)',
    border: '1px solid var(--color-text)',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'opacity 0.15s',
    letterSpacing: '-0.01em',
  },
  error: {
    fontSize: '13px',
    color: '#b91c1c',
    marginTop: '0.25rem',
  },
  disclosure: {
    fontSize: '12px',
    color: 'var(--color-text-tertiary)',
    textAlign: 'center',
    marginTop: '0.25rem',
  },
}
