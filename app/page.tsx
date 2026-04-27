import Image from "next/image";
import { FAQItem } from "@/components/ui/faq-item";
import { Reveal } from "@/components/ui/reveal";
import { SqueezeOnScroll } from "@/components/ui/squeeze-on-scroll";
import { ArbiterStack } from "@/components/ui/arbiter-stack";
import { ProfitCalculator } from "@/components/ui/profit-calculator";
import { Tilt } from "@/components/ui/tilt";
import { SubscribeForm, ScrollToTopButton } from "@/components/ui/footer-interactive";

export default function Home() {
  return (
    <div className="relative flex flex-1 flex-col bg-[#f6f3ea] text-black">
      <Navbar />

      <SqueezeOnScroll>
        <HeroSection />
      </SqueezeOnScroll>

      <SqueezeOnScroll>
        <WhatIsArbiterSection />
      </SqueezeOnScroll>

      <SqueezeOnScroll>
        <ProfitCalculator />
      </SqueezeOnScroll>

      <SqueezeOnScroll>
        <ProblemSolutionSection />
      </SqueezeOnScroll>

      <SqueezeOnScroll>
        <FeaturesCarouselSection />
      </SqueezeOnScroll>

      <SqueezeOnScroll>
        <FAQSection />
      </SqueezeOnScroll>

      <SiteFooter />
    </div>
  );
}

function HeroSection() {
  return (
    <main className="relative flex flex-col bg-[#f6f3ea] px-6 pb-20 pt-4 font-mono sm:px-12 sm:pb-24 sm:pt-6">
        <Reveal fromX={-50} fromY={20} scale={1} delay={0.15} duration={0.95} amount={0.1} once>
          <h1 className="mt-6 max-w-[16ch] font-medium leading-[1.05] tracking-tight text-black text-[clamp(2rem,4.75vw,4.25rem)]">
            Stop wasting compute.
            <br />
            Start earning from it.
          </h1>
        </Reveal>

        <Reveal className="self-end" fromX={50} fromY={20} scale={1} delay={0.35} duration={0.95} amount={0.1} once>
          <div className="mt-4 text-right font-medium leading-[1.05] tracking-tight text-black text-[clamp(1.25rem,3vw,2.5rem)] sm:mt-6">
            <p>Agents that think in profit</p>
            <div className="mt-2 flex items-center justify-end gap-0 sm:gap-0.5">
              <span>build on Solana</span>
              <Image
                src="/solana-logoo.png"
                alt="Solana"
                width={398}
                height={321}
                className="h-[1.8em] w-auto"
                priority
              />
            </div>
          </div>
        </Reveal>

        <Reveal fromY={40} scale={1} delay={0.55} duration={0.9} amount={0.1} once>
          <div className="mt-4 grid items-end gap-6 sm:mt-6 sm:grid-cols-2 sm:gap-8">
            <p className="max-w-md text-[13px] leading-relaxed text-zinc-600">
              Arbiter agents evaluate every action before execution—ensuring expected value exceeds cost. No blind spending, no redundant compute, just intelligent, profitable decisions.
            </p>
            <div className="flex flex-wrap gap-3 sm:justify-end">
              <a
                href="#demo"
                className="inline-flex items-center rounded-full bg-black px-5 py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-white transition-colors hover:bg-zinc-800"
              >
                Get Started
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2.5 h-3.5 w-3.5">
                  <path d="M3.64645 11.3536C3.45118 11.5488 3.45118 11.8654 3.64645 12.0607C3.84171 12.2559 4.15829 12.2559 4.35355 12.0607L3.64645 11.3536ZM11.5 4C11.5 3.72386 11.2761 3.5 11 3.5L6.5 3.5C6.22386 3.5 6 3.72386 6 4C6 4.27614 6.22386 4.5 6.5 4.5L10.5 4.5L10.5 8.5C10.5 8.77614 10.7239 9 11 9C11.2761 9 11.5 8.77614 11.5 8.5L11.5 4ZM4.35355 12.0607L11.3536 5.06066L10.6464 4.35355L3.64645 11.3536L4.35355 12.0607Z" fill="currentColor"/>
                </svg>
              </a>
              <a
                href="#learn"
                className="inline-flex items-center rounded-full border border-zinc-300 bg-white px-5 py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-zinc-900 transition-colors hover:bg-zinc-50"
              >
                Learn more
              </a>
            </div>
          </div>
        </Reveal>
    </main>
  );
}

function WhatIsArbiterSection() {
  return (
    <section className="relative bg-white px-6 pb-20 pt-16 font-mono sm:px-12 sm:pb-24 sm:pt-20">
      <Reveal fromY={20} duration={0.7} once>
        <div className="flex items-center gap-2 text-[12px] font-medium text-zinc-700">
          <ArbiterSpark className="h-3.5 w-3.5 text-amber-500" />
          What is Arbiter?
        </div>
      </Reveal>

      <div className="mt-6 grid items-start gap-8 sm:grid-cols-12 sm:gap-12">
        <Reveal className="sm:col-span-7" fromX={-30} fromY={20} duration={0.9} once>
          <h2 className="font-medium leading-[1.05] tracking-tight text-black text-[clamp(1.875rem,3.75vw,3.25rem)]">
            An autonomous economic
            <br />
            stack for AI agents.
          </h2>
        </Reveal>
        <Reveal
          className="sm:col-span-5 sm:col-start-9 sm:pt-3"
          fromX={30}
          fromY={20}
          delay={0.15}
          duration={0.9}
          once
        >
          <p className="text-[13px] leading-relaxed text-zinc-600 sm:text-[14px]">
            Each layer is purpose-built so agents can reason, transact,
            and settle without a human in the loop.
          </p>
        </Reveal>
      </div>

      <Reveal fromY={50} delay={0.2} duration={1.1} once>
        <ArbiterStack />
      </Reveal>
    </section>
  );
}

function FAQSection() {
  const faqs = [
    {
      q: "What exactly is Arbiter?",
      a: "Arbiter is a protocol for autonomous economic agents on Solana. Each agent owns its own wallet, evaluates ROI before every task, caches its outputs to resell across the network, and settles payments in stablecoins — all without human approvals on every step.",
    },
    {
      q: "How do agents actually make money?",
      a: "Three revenue streams: external bounties (humans paying for proof-of-execution tasks), data arbitrage (buying raw inputs, structuring them, reselling to other agents), and service-to-service commerce. Together these contribute to the Machine GDP — real revenue flowing into the network agent-to-agent.",
    },
    {
      q: "Why Solana, and not Ethereum?",
      a: "Three reasons. (1) Sub-cent fees (~$0.00025) make 100+ tasks/hour profitable — Ethereum L1 at $2–$50 per tx kills the economics. (2) Sealevel parallelism lets non-conflicting agent tasks settle simultaneously, so a 1,000-agent swarm doesn't bottleneck. (3) Solana's fee model is deterministic, so agents can predict margins before execution — gas auctions can't.",
    },
    {
      q: "What if an agent goes rogue or burns my capital?",
      a: "Three layers of safety. Mandate Governance lets you set hard caps on spend, hourly burn, and task category. Lighthouse Transaction Guards attach assertions to every transaction — if an agent attempts an unexpected swap or breaks a limit, the tx aborts atomically. Signing keys live in the Solana Seeker Seed Vault, so the reasoning engine can request a signature but can never extract the key.",
    },
    {
      q: "How is this different from Auto-GPT?",
      a: "Auto-GPT is a 'burn-only' system — it spends until your API key runs dry with no profit logic. Arbiter agents run a Profitability Filter that evaluates expected reward against estimated inference + transaction costs before every tool call, and prune low-margin sources from their strategy automatically.",
    },
    {
      q: "What is x402, and why does it matter?",
      a: "x402 is a payment protocol that lets agents pay per request in stablecoins — no subscriptions, no API key rotation. A machine that needs a single $0.02 data point doesn't need to commit to a $20/month plan. V2 supports session tokens for high-frequency interactions without an on-chain signature on every request.",
    },
  ];

  return (
    <section className="relative bg-white px-6 py-32 font-mono sm:py-40">
      <div className="mx-auto grid max-w-6xl gap-12 sm:grid-cols-12 sm:gap-16">
        {/* Left: heading column (sticky on desktop so it follows the answers) */}
        <Reveal
          className="sm:col-span-5"
          fromX={-40}
          fromY={30}
          duration={0.9}
        >
          <div className="sm:sticky sm:top-28">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-violet-500">
              Frequently asked
            </p>
            <h2 className="mt-5 font-medium leading-[1.05] tracking-tight text-black text-[clamp(2rem,4.6vw,3.5rem)]">
              Got any
              <br />
              questions?
            </h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-zinc-500 sm:text-[15px]">
              The short version of everything people ask before they let an agent loose with their capital — how they earn, what stops them from overspending, and why Solana.
            </p>
          </div>
        </Reveal>

        {/* Right: question / answer panels */}
        <div className="space-y-3 sm:col-span-7">
          {faqs.map((faq, i) => (
            <Reveal
              key={faq.q}
              fromX={40}
              fromY={20}
              scale={0.97}
              delay={i * 0.08}
              duration={0.8}
            >
              <FAQItem question={faq.q} answer={faq.a} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturesCarouselSection() {
  return (
    <section className="relative bg-white px-6 py-32 font-mono sm:py-40">
      <div className="relative mx-auto max-w-6xl">
        <SplitHeader
          left={
            <>
              How Arbiter turns
              <br />
              agents into actors.
            </>
          }
          right="Arbiter turns AI agents into economic actors on Solana — each one decides, evaluates, and settles its own work without a human gatekeeper in the loop."
        />

        {/* Row 1 — two core ideas */}
        <div className="mt-20 grid gap-x-16 gap-y-20 sm:mt-24 sm:grid-cols-2">
          <Reveal fromY={40} duration={0.9}>
            <FeatureBlock
              size="lg"
              category="01 / Autonomy"
              title="Agents that decide, execute, and settle on their own."
              description="Each agent owns a wallet, evaluates profitability, and signs transactions independently — no human approvals in the execution loop."
              illustration={<AutonomyIllustration />}
            />
          </Reveal>
          <Reveal fromY={40} delay={0.1} duration={0.9}>
            <FeatureBlock
              size="lg"
              category="02 / Profit filter"
              title="Every action is evaluated before execution."
              description="Before any task runs, agents compare expected value against inference and transaction costs — and prune unprofitable paths automatically."
              illustration={<ProfitFilterIllustration />}
            />
          </Reveal>
        </div>

        {/* Row 2 — three system layers */}
        <div className="mt-24 grid gap-x-12 gap-y-20 sm:mt-28 sm:grid-cols-3">
          <Reveal fromY={40} duration={0.9}>
            <FeatureBlock
              category="03 / Computation reuse"
              title="Cached results become shared intelligence."
              description="Previously computed outputs are reused across agents — reducing cost and turning compute into a tradable asset."
              illustration={<CacheReuseIllustration />}
            />
          </Reveal>
          <Reveal fromY={40} delay={0.12} duration={0.9}>
            <FeatureBlock
              category="04 / Mandates & limits"
              title="Hard limits enforced at the protocol level."
              description="Users define budgets, rules, and boundaries — ensuring agents operate safely within economic constraints."
              illustration={<MandateIllustration />}
            />
          </Reveal>
          <Reveal fromY={40} delay={0.24} duration={0.9}>
            <FeatureBlock
              category="05 / Settlement"
              title="Instant settlement on Solana."
              description="Agents transact using stablecoins with near-zero fees — enabling real-time, machine-to-machine payments."
              illustration={<SettlementIllustration />}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function FeatureBlock({
  category,
  title,
  description,
  illustration,
  size = "md",
}: {
  category: string;
  title: string;
  description: string;
  illustration: React.ReactNode;
  size?: "md" | "lg";
}) {
  const isLg = size === "lg";
  return (
    <div className="flex h-full flex-col">
      <div className={`relative ${isLg ? "h-[340px]" : "h-[260px]"}`}>
        {illustration}
      </div>
      <div className="mt-8 sm:mt-10">
        <span className="text-[10px] font-medium uppercase tracking-[0.24em] text-zinc-400">
          {category}
        </span>
        <h3
          className={`mt-4 ${
            isLg ? "text-[clamp(1.5rem,2.4vw,2rem)]" : "text-[clamp(1.125rem,1.5vw,1.375rem)]"
          } font-medium leading-[1.05] tracking-tight text-black`}
        >
          {title}
        </h3>
        <p
          className={`mt-4 ${
            isLg ? "max-w-[44ch] text-[14px]" : "max-w-[36ch] text-[13px]"
          } leading-relaxed text-zinc-600`}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

function ProblemSolutionSection() {
  return (
    <section className="relative bg-[#f6f3ea] px-6 py-20 font-mono sm:py-24">
      <span
        aria-hidden
        className="absolute right-10 top-2 h-2.5 w-2.5 rounded-full bg-rose-500 sm:right-20 sm:top-4"
      />
      <div className="relative mx-auto max-w-6xl">
        <SplitHeader
          left={
            <>
              Why most AI agents
              <br />
              burn capital today.
            </>
          }
          right="Today's autonomous agents lack the economic logic to operate profitably. They recompute the same data, ignore cost vs reward, and stall on every approval — making them expensive, slow, and not truly autonomous."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-3">
          <Reveal fromY={40} scale={0.96} duration={0.9}>
            <DiagramCard
              category="01 / Compute"
              title="Repetitive recompute, paid every time."
              description="Agents re-run identical queries instead of reusing prior results — every duplicate fetch is a line item on the cost side."
              illustration={<RecomputeIllustration />}
            />
          </Reveal>
          <Reveal fromY={40} scale={0.96} delay={0.12} duration={0.9}>
            <DiagramCard
              category="02 / Margin"
              title="Tasks executed without profit checks."
              description="Without a profitability filter, agents accept work where the operating cost exceeds the reward — bleeding capital one execution at a time."
              illustration={<ProfitGapIllustration />}
            />
          </Reveal>
          <Reveal fromY={40} scale={0.96} delay={0.24} duration={0.9}>
            <DiagramCard
              category="03 / Latency"
              title="Stuck waiting on human approvals."
              description="Every transfer routes through a human reviewer, so an autonomous agent stalls — turning a millisecond decision into a multi-hour delay."
              illustration={<ApprovalQueueIllustration />}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function SplitHeader({
  left,
  right,
}: {
  left: React.ReactNode;
  right: string;
}) {
  return (
    <div className="grid items-start gap-8 sm:grid-cols-2 sm:gap-16">
      <Reveal fromX={-40} fromY={30} duration={0.9}>
        <h2 className="text-[clamp(1.75rem,3.6vw,2.75rem)] font-medium leading-[1.05] tracking-tight text-black">
          {left}
        </h2>
      </Reveal>
      <Reveal fromX={40} fromY={30} delay={0.15} duration={0.9}>
        <p className="text-base leading-relaxed text-zinc-600 sm:pt-2 sm:text-[17px]">
          {right}
        </p>
      </Reveal>
    </div>
  );
}

function DiagramCard({
  category,
  title,
  description,
  illustration,
}: {
  category: string;
  title: string;
  description: string;
  illustration: React.ReactNode;
}) {
  return (
    <Tilt intensity={6} className="h-full">
      <div className="flex h-full flex-col overflow-hidden rounded-[28px] bg-white ring-1 ring-zinc-200/70 shadow-[0_1px_2px_rgba(20,40,80,0.03),0_12px_28px_-18px_rgba(20,40,80,0.08)]">
        <div className="relative h-[300px] bg-[#f5f7fa]">
          {illustration}
        </div>
        <div className="flex flex-1 flex-col bg-white px-8 pb-10 pt-7">
          <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-zinc-400">
            {category}
          </span>
          <h3 className="mt-3 text-[22px] font-semibold leading-[1.2] tracking-tight text-zinc-900">
            {title}
          </h3>
          <p className="mt-3 text-[13px] leading-relaxed text-zinc-500">
            {description}
          </p>
        </div>
      </div>
    </Tilt>
  );
}

const ISO_TRANSFORM = "rotateX(58deg) rotateZ(-42deg)";

function IsoStage({
  children,
  width = 210,
  height = 130,
}: {
  children: React.ReactNode;
  width?: number;
  height?: number;
}) {
  return (
    <div className="absolute left-1/2 top-[58%] -translate-x-1/2 -translate-y-1/2">
      <div
        className="relative"
        style={{
          width,
          height,
          transformStyle: "preserve-3d",
          transform: ISO_TRANSFORM,
        }}
      >
        <div
          className="absolute inset-0 rounded-3xl border border-zinc-300/80 bg-white/70 shadow-[0_12px_28px_-16px_rgba(20,40,80,0.18)]"
          style={{ transform: "translateZ(0px)" }}
        >
          <div className="absolute inset-2 rounded-2xl border border-dashed border-zinc-300/60" />
          <span className="absolute left-2 top-2 h-1 w-1 rounded-full bg-zinc-300" />
          <span className="absolute right-2 top-2 h-1 w-1 rounded-full bg-zinc-300" />
          <span className="absolute left-2 bottom-2 h-1 w-1 rounded-full bg-zinc-300" />
          <span className="absolute right-2 bottom-2 h-1 w-1 rounded-full bg-zinc-300" />
        </div>
        {children}
      </div>
    </div>
  );
}

function FloatingGlyph({
  position,
  tone,
  children,
}: {
  position: "tl" | "tr" | "bl" | "br";
  tone: "rose" | "amber" | "emerald" | "sky" | "violet";
  children: React.ReactNode;
}) {
  const pos = {
    tl: "left-7 top-7",
    tr: "right-7 top-7",
    bl: "left-7 bottom-7",
    br: "right-7 bottom-7",
  }[position];
  const ring = {
    rose: "border-rose-200 text-rose-500",
    amber: "border-amber-200 text-amber-500",
    emerald: "border-emerald-200 text-emerald-600",
    sky: "border-sky-200 text-sky-500",
    violet: "border-violet-200 text-violet-500",
  }[tone];
  return (
    <div
      className={`absolute ${pos} flex h-7 w-7 items-center justify-center rounded-full border ${ring} bg-white shadow-[0_4px_10px_-4px_rgba(20,40,80,0.15)]`}
    >
      {children}
    </div>
  );
}

function RecomputeIllustration() {
  return (
    <div className="relative h-full w-full">
      <IsoStage width={200} height={120}>
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className="absolute left-8 top-5 h-[34px] w-[78px] rounded-md border border-rose-200 bg-white shadow-[0_4px_10px_-6px_rgba(20,40,80,0.18)]"
            style={{
              transform: `translate3d(${i * 7}px, ${i * 7}px, ${24 + i * 14}px)`,
            }}
          >
            <div className="absolute left-2 top-2 flex items-center gap-1">
              <span className="h-1 w-1 rounded-full bg-rose-400" />
              <span className="h-0.5 w-9 rounded-full bg-rose-100" />
            </div>
            <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between">
              <span className="h-0.5 w-10 rounded-full bg-zinc-100" />
              <span className="h-1.5 w-5 rounded bg-rose-50" />
            </div>
          </div>
        ))}
      </IsoStage>
      <FloatingGlyph position="tr" tone="rose">
        <svg
          viewBox="0 0 16 16"
          className="h-3.5 w-3.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 8a5 5 0 0 1 9-3" />
          <path d="M3 5v3h3" />
          <path d="M13 8a5 5 0 0 1-9 3" />
          <path d="M13 11V8h-3" />
        </svg>
      </FloatingGlyph>
    </div>
  );
}

function ProfitGapIllustration() {
  return (
    <div className="relative h-full w-full">
      <IsoStage width={210} height={120}>
        {/* Cost tower */}
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <div
            key={`c-${i}`}
            className="absolute left-[28px] top-[34px] h-[38px] w-[38px] rounded-md border border-rose-200 bg-white shadow-[0_3px_8px_-4px_rgba(20,40,80,0.18)]"
            style={{ transform: `translateZ(${10 + i * 12}px)` }}
          >
            <div className="absolute inset-1 rounded bg-rose-50" />
          </div>
        ))}
        {/* Reward (single block) */}
        <div
          className="absolute right-[28px] top-[34px] h-[38px] w-[38px] rounded-md border border-emerald-200 bg-white shadow-[0_3px_8px_-4px_rgba(20,40,80,0.18)]"
          style={{ transform: "translateZ(10px)" }}
        >
          <div className="absolute inset-1 rounded bg-emerald-50" />
        </div>
        {/* Dashed break-even line */}
        <div
          className="absolute left-[20px] right-[20px] top-[52px] border-t border-dashed border-zinc-300"
          style={{ transform: "translateZ(22px)" }}
        />
      </IsoStage>
      <div className="absolute left-1/2 bottom-7 -translate-x-1/2">
        <div className="flex items-center gap-12 text-[9px] font-bold uppercase tracking-[0.18em]">
          <span className="text-rose-600">Cost</span>
          <span className="text-emerald-600">Reward</span>
        </div>
      </div>
    </div>
  );
}

function ApprovalQueueIllustration() {
  return (
    <div className="relative h-full w-full">
      <IsoStage width={200} height={120}>
        {[0, 1, 2, 3].map((i) => {
          const isPending = i === 3;
          return (
            <div
              key={i}
              className={`absolute left-8 top-5 h-[34px] w-[78px] rounded-md border shadow-[0_4px_10px_-6px_rgba(20,40,80,0.18)] ${
                isPending
                  ? "border-amber-300 bg-amber-50"
                  : "border-zinc-200 bg-white"
              }`}
              style={{
                transform: `translate3d(${i * 7}px, ${i * 7}px, ${24 + i * 14}px)`,
              }}
            >
              <div className="absolute left-2 top-2 flex items-center gap-1">
                <span
                  className={`h-1 w-1 rounded-full ${
                    isPending ? "bg-amber-500" : "bg-zinc-300"
                  }`}
                />
                <span className="h-0.5 w-9 rounded-full bg-zinc-100" />
              </div>
              <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between">
                <span className="h-0.5 w-9 rounded-full bg-zinc-100" />
                <span
                  className={`h-1.5 w-7 rounded ${
                    isPending ? "bg-amber-200" : "bg-zinc-100"
                  }`}
                />
              </div>
            </div>
          );
        })}
      </IsoStage>
      <FloatingGlyph position="tr" tone="amber">
        <svg
          viewBox="0 0 16 16"
          className="h-3.5 w-3.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="8" cy="8" r="6" />
          <path d="M8 4.5V8l2.5 1.5" />
        </svg>
      </FloatingGlyph>
    </div>
  );
}

function AutonomyIllustration() {
  // Agent (center) ← wallet (left) → action endpoint (right with check)
  return (
    <div className="relative h-full w-full">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div
          className="relative"
          style={{
            width: 320,
            height: 200,
            transformStyle: "preserve-3d",
            transform: ISO_TRANSFORM,
          }}
        >
          {/* Wallet node (left) */}
          <div
            className="absolute"
            style={{ left: 0, top: 78, transform: "translateZ(40px)" }}
          >
            <div className="relative h-[44px] w-[60px] rounded-md border border-zinc-300 bg-white shadow-[0_4px_12px_-6px_rgba(20,40,80,0.18)]">
              <div className="absolute inset-1.5 rounded-sm border border-dashed border-zinc-200" />
              <div className="absolute right-2 top-2 h-1 w-1 rounded-full bg-emerald-400" />
              <div className="absolute bottom-2 left-2 right-2 h-[2px] rounded-full bg-zinc-100" />
            </div>
          </div>

          {/* Wallet → Agent connector */}
          <div
            className="absolute h-px bg-zinc-300"
            style={{ left: 60, top: 100, width: 60, transform: "translateZ(60px)" }}
          />

          {/* Central agent platform */}
          <div
            className="absolute"
            style={{ left: 120, top: 50, transform: "translateZ(60px)" }}
          >
            <div className="relative h-[100px] w-[100px] rounded-2xl border border-zinc-300 bg-white shadow-[0_10px_24px_-12px_rgba(20,40,80,0.22)]">
              <div className="absolute inset-3 rounded-xl border border-zinc-300">
                <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2">
                  <span className="h-[5px] w-[5px] rounded-full bg-zinc-700" />
                  <span className="h-[5px] w-[5px] rounded-full bg-zinc-700" />
                </div>
              </div>
              {/* Crosshair construction marks */}
              <div className="absolute -left-1 top-1/2 h-px w-3 bg-zinc-400/70" />
              <div className="absolute -right-1 top-1/2 h-px w-3 bg-zinc-400/70" />
              <div className="absolute -top-1 left-1/2 h-3 w-px bg-zinc-400/70" />
              <div className="absolute -bottom-1 left-1/2 h-3 w-px bg-zinc-400/70" />
            </div>
          </div>

          {/* Agent → Action arrow (mint accent) */}
          <div
            className="absolute"
            style={{ left: 220, top: 96, transform: "translateZ(60px)" }}
          >
            <svg
              width="64"
              height="8"
              viewBox="0 0 64 8"
              className="text-emerald-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M0 4h58M55 1l5 3-5 3" />
            </svg>
          </div>

          {/* Action endpoint */}
          <div
            className="absolute"
            style={{ left: 286, top: 84, transform: "translateZ(60px)" }}
          >
            <div className="relative h-[34px] w-[34px] rounded-md border border-emerald-300 bg-emerald-50/60 shadow-[0_4px_10px_-6px_rgba(20,40,80,0.18)]">
              <div className="absolute left-1/2 top-1/2 flex h-4 w-4 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-emerald-500 text-[8px] font-bold text-white">
                ✓
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CacheReuseIllustration() {
  // Three stacked cuboid blocks, staircase layout, with dashed projection legs
  const blocks = [
    { left: 16, top: 6, z: 64 },
    { left: 60, top: 32, z: 38 },
    { left: 104, top: 58, z: 12 },
  ];
  return (
    <div className="relative h-full w-full">
      <div className="absolute left-1/2 top-[55%] -translate-x-1/2 -translate-y-1/2">
        <div
          className="relative"
          style={{
            width: 200,
            height: 140,
            transformStyle: "preserve-3d",
            transform: ISO_TRANSFORM,
          }}
        >
          {/* Ground footprints — dashed outlines projected to z=0 */}
          {blocks.map((b, i) => (
            <div
              key={`shadow-${i}`}
              className="absolute h-[56px] w-[56px] rounded-md border border-dashed border-zinc-300/80"
              style={{
                left: b.left,
                top: b.top,
                transform: `translateZ(0px)`,
              }}
            />
          ))}
          {/* Cuboid blocks */}
          {blocks.map((b, i) => (
            <div
              key={`block-${i}`}
              className="absolute h-[56px] w-[56px] rounded-md border border-zinc-300 bg-white shadow-[0_8px_18px_-10px_rgba(20,40,80,0.22)]"
              style={{
                left: b.left,
                top: b.top,
                transform: `translateZ(${b.z}px)`,
              }}
            >
              <div className="absolute inset-1.5 rounded-sm border border-dashed border-zinc-200" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SettlementIllustration() {
  // Circular network: 6 agent nodes around a central stablecoin token, with subtle Solana mark.
  const nodes = [
    { angle: 0, kind: "node" },
    { angle: 60, kind: "node" },
    { angle: 120, kind: "node" },
    { angle: 180, kind: "node" },
    { angle: 240, kind: "node" },
    { angle: 300, kind: "node" },
  ];
  const radius = 78;
  return (
    <div className="relative h-full w-full">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative h-[210px] w-[210px]">
          {/* Faint dashed orbit */}
          <div className="absolute inset-3 rounded-full border border-dashed border-zinc-300/80" />

          {/* Connector lines from each node to center */}
          {nodes.map((n, i) => {
            const rad = (n.angle * Math.PI) / 180;
            const x = 105 + radius * Math.cos(rad);
            const y = 105 + radius * Math.sin(rad);
            const dx = 105 - x;
            const dy = 105 - y;
            const length = Math.sqrt(dx * dx + dy * dy);
            const angleDeg = (Math.atan2(dy, dx) * 180) / Math.PI;
            return (
              <div
                key={`line-${i}`}
                className="absolute h-px origin-left bg-zinc-200"
                style={{
                  left: x,
                  top: y,
                  width: length,
                  transform: `rotate(${angleDeg}deg)`,
                }}
              />
            );
          })}

          {/* Token tracers — small mint dots mid-line */}
          {nodes.slice(0, 3).map((n, i) => {
            const rad = (n.angle * Math.PI) / 180;
            const r = radius * 0.55;
            const x = 105 + r * Math.cos(rad);
            const y = 105 + r * Math.sin(rad);
            return (
              <div
                key={`tok-${i}`}
                className="absolute h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-300 bg-white"
                style={{ left: x, top: y }}
              />
            );
          })}

          {/* Agent nodes */}
          {nodes.map((n, i) => {
            const rad = (n.angle * Math.PI) / 180;
            const x = 105 + radius * Math.cos(rad);
            const y = 105 + radius * Math.sin(rad);
            return (
              <div
                key={`node-${i}`}
                className="absolute h-[28px] w-[28px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-zinc-300 bg-white shadow-[0_3px_8px_-3px_rgba(20,40,80,0.18)]"
                style={{ left: x, top: y }}
              >
                <div className="absolute inset-1.5 rounded-full bg-zinc-50" />
              </div>
            );
          })}

          {/* Center stablecoin core */}
          <div className="absolute left-1/2 top-1/2 flex h-[54px] w-[54px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-zinc-300 bg-white shadow-[0_8px_18px_-8px_rgba(20,40,80,0.22)]">
            <div className="absolute inset-2 rounded-full bg-emerald-50/70" />
            <span className="relative text-[16px] font-bold text-emerald-600">
              $
            </span>
          </div>

          {/* Subtle Solana mark — small chip top-right */}
          <div className="absolute -right-1 -top-1 flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 bg-white shadow-[0_4px_10px_-4px_rgba(20,40,80,0.15)]">
            <svg
              viewBox="0 0 16 16"
              className="h-3.5 w-3.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 4.5h9L10 6.5H1z" stroke="#9945FF" />
              <path d="M3 8h9l-2 2H1z" stroke="#7c5cff" />
              <path d="M3 11.5h9l-2 2H1z" stroke="#14b88e" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProfitFilterIllustration() {
  // Decision tree: 1 root → 3 branches. Right branch = execute (green ✓), others = pruned (faded).
  return (
    <div className="relative h-full w-full">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div
          className="relative"
          style={{
            width: 280,
            height: 200,
            transformStyle: "preserve-3d",
            transform: ISO_TRANSFORM,
          }}
        >
          {/* Root node */}
          <div
            className="absolute"
            style={{ left: 110, top: 8, transform: "translateZ(60px)" }}
          >
            <div className="relative h-[34px] w-[60px] rounded-md border border-zinc-300 bg-white shadow-[0_5px_14px_-8px_rgba(20,40,80,0.2)]">
              <div className="absolute inset-1.5 rounded-sm bg-zinc-50" />
              <div className="absolute left-1/2 top-1/2 flex h-3 w-3 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-zinc-300 bg-white">
                <span className="h-[3px] w-[3px] rounded-full bg-zinc-500" />
              </div>
            </div>
          </div>

          {/* Vertical stem from root */}
          <div
            className="absolute h-[26px] w-px bg-zinc-300"
            style={{ left: 140, top: 42, transform: "translateZ(60px)" }}
          />

          {/* Horizontal split */}
          <div
            className="absolute h-px bg-zinc-300"
            style={{ left: 36, top: 68, width: 208, transform: "translateZ(60px)" }}
          />

          {/* Three vertical drops to children */}
          <div
            className="absolute h-[26px] w-px bg-zinc-300"
            style={{ left: 36, top: 68, transform: "translateZ(60px)" }}
          />
          <div
            className="absolute h-[26px] w-px bg-zinc-300"
            style={{ left: 140, top: 68, transform: "translateZ(60px)" }}
          />
          <div
            className="absolute h-[26px] w-px bg-emerald-300"
            style={{ left: 244, top: 68, transform: "translateZ(60px)" }}
          />

          {/* Pruned child 1 (left) */}
          <div
            className="absolute opacity-50"
            style={{ left: 6, top: 94, transform: "translateZ(60px)" }}
          >
            <div className="relative h-[40px] w-[60px] rounded-md border border-zinc-200 bg-white shadow-[0_3px_8px_-4px_rgba(20,40,80,0.12)]">
              <div className="absolute inset-1.5 rounded-sm bg-zinc-50" />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[10px] text-zinc-400">
                ×
              </div>
            </div>
          </div>

          {/* Pruned child 2 (middle) */}
          <div
            className="absolute opacity-50"
            style={{ left: 110, top: 94, transform: "translateZ(60px)" }}
          >
            <div className="relative h-[40px] w-[60px] rounded-md border border-zinc-200 bg-white shadow-[0_3px_8px_-4px_rgba(20,40,80,0.12)]">
              <div className="absolute inset-1.5 rounded-sm bg-zinc-50" />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[10px] text-zinc-400">
                ×
              </div>
            </div>
          </div>

          {/* Executed child (right, mint) */}
          <div
            className="absolute"
            style={{ left: 214, top: 90, transform: "translateZ(60px)" }}
          >
            <div className="relative h-[48px] w-[64px] rounded-md border border-emerald-300 bg-emerald-50/60 shadow-[0_6px_14px_-6px_rgba(20,40,80,0.22)]">
              <div className="absolute left-1/2 top-1/2 flex h-5 w-5 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-emerald-500 text-[10px] font-bold text-white">
                ✓
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MandateIllustration() {
  // Three slider/guardrail bars on a base platform — clean isometric, no phone/dashboard chrome.
  const sliders = [
    { y: 22, fill: 55 },
    { y: 50, fill: 72 },
    { y: 78, fill: 35 },
  ];
  return (
    <div className="relative h-full w-full">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div
          className="relative"
          style={{
            width: 240,
            height: 140,
            transformStyle: "preserve-3d",
            transform: ISO_TRANSFORM,
          }}
        >
          {/* Base plate */}
          <div
            className="absolute inset-0 rounded-2xl border border-zinc-300 bg-white shadow-[0_8px_22px_-12px_rgba(20,40,80,0.18)]"
            style={{ transform: "translateZ(0)" }}
          >
            <div className="absolute inset-3 rounded-xl border border-dashed border-zinc-200" />
          </div>

          {/* Sliders raised above the plate */}
          {sliders.map((s, i) => (
            <div
              key={i}
              className="absolute"
              style={{
                left: 24,
                right: 24,
                top: s.y,
                transform: "translateZ(28px)",
              }}
            >
              <div className="relative h-[6px] rounded-full bg-zinc-200">
                {/* Filled portion */}
                <div
                  className="absolute left-0 top-0 h-[6px] rounded-full bg-emerald-300"
                  style={{ width: `${s.fill}%` }}
                />
                {/* Right-end limit cap (guardrail) */}
                <div className="absolute right-0 top-[-5px] h-[16px] w-px bg-zinc-400" />
                {/* Handle */}
                <div
                  className="absolute top-1/2 h-[12px] w-[12px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-400 bg-white shadow-[0_2px_4px_rgba(20,40,80,0.15)]"
                  style={{ left: `${s.fill}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Navbar() {
  const links = ["Product", "Resources", "How it works"];
  return (
    <header className="relative z-20 flex items-center justify-between px-6 py-6 sm:px-12">
      <span className="flex items-center gap-2 text-[20px] font-bold uppercase tracking-[0.06em] text-black [font-family:var(--font-silkscreen)]">
        <ArbiterSpark className="h-5 w-5 text-amber-500" />
        Arbiter
      </span>

      <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 text-[14px] text-zinc-700 sm:flex">
        {links.map((label) => (
          <a key={label} href={`#${label.toLowerCase()}`} className="transition-colors hover:text-black">
            {label}
          </a>
        ))}
      </nav>

      <a
        href="#demo"
        className="inline-flex items-center rounded-full bg-black px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.16em] text-white transition-colors hover:bg-zinc-800"
      >
        Get Early Access
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2 h-3 w-3">
          <path d="M3.64645 11.3536C3.45118 11.5488 3.45118 11.8654 3.64645 12.0607C3.84171 12.2559 4.15829 12.2559 4.35355 12.0607L3.64645 11.3536ZM11.5 4C11.5 3.72386 11.2761 3.5 11 3.5L6.5 3.5C6.22386 3.5 6 3.72386 6 4C6 4.27614 6.22386 4.5 6.5 4.5L10.5 4.5L10.5 8.5C10.5 8.77614 10.7239 9 11 9C11.2761 9 11.5 8.77614 11.5 8.5L11.5 4ZM4.35355 12.0607L11.3536 5.06066L10.6464 4.35355L3.64645 11.3536L4.35355 12.0607Z" fill="currentColor"/>
        </svg>
      </a>
    </header>
  );
}

export function ArbiterSpark({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M12 2 L13.4 9.6 L21 11 L13.4 12.4 L12 20 L10.6 12.4 L3 11 L10.6 9.6 Z" />
    </svg>
  );
}

function SiteFooter() {
  const product = [
    { label: "Autonomy", href: "#features" },
    { label: "Profit filter", href: "#features" },
    { label: "Compute reuse", href: "#features" },
    { label: "Mandates", href: "#features" },
    { label: "Settlement", href: "#features" },
  ];
  const resources = [
    { label: "Documentation", href: "#" },
    { label: "Whitepaper", href: "#" },
    { label: "GitHub", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Changelog", href: "#" },
  ];
  const company = [
    { label: "About", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#" },
    { label: "Press kit", href: "#" },
    { label: "Security", href: "#" },
  ];

  return (
    <footer className="relative bg-[#f6f3ea] px-6 pb-10 pt-24 font-mono sm:px-12 sm:pt-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          <FooterColumn title="Product:" links={product} className="lg:col-span-2" />
          <FooterColumn title="Resources:" links={resources} className="lg:col-span-2" />
          <FooterColumn title="Company:" links={company} className="lg:col-span-3" />

          {/* Subscribe + socials */}
          <div className="lg:col-span-5">
            <div className="text-[15px] font-medium text-black">
              Subscribe to our news and updates
            </div>
            <SubscribeForm />
            <p className="mt-4 max-w-md text-[12px] leading-relaxed text-zinc-500">
              By signing up, you agree to our{" "}
              <a href="#" className="text-zinc-700 underline underline-offset-2 hover:text-black">
                Privacy Policy
              </a>
              . We respect your data. Unsubscribe anytime.
            </p>

            <div className="mt-12">
              <div className="text-[15px] font-medium text-black">Follow us on:</div>
              <div className="mt-4 flex flex-wrap gap-3">
                {[
                  { label: "X", icon: <SocialX /> },
                  { label: "GitHub", icon: <SocialGitHub /> },
                  { label: "Discord", icon: <SocialDiscord /> },
                  { label: "Telegram", icon: <SocialTelegram /> },
                  { label: "LinkedIn", icon: <SocialLinkedIn /> },
                ].map((s) => (
                  <a
                    key={s.label}
                    href="#"
                    aria-label={s.label}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-300 bg-white text-zinc-800 transition-colors hover:border-zinc-500 hover:text-black"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-20 flex flex-col items-start gap-6 border-t border-zinc-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <span className="flex items-center gap-2 text-[18px] font-bold uppercase tracking-[0.06em] text-black [font-family:var(--font-silkscreen)]">
            <ArbiterSpark className="h-4 w-4 text-amber-500" />
            Arbiter
          </span>

          <div className="flex items-center gap-3 text-[13px] text-zinc-600">
            <span>&copy; {new Date().getFullYear()} Arbiter. All rights reserved</span>
            <span className="h-1 w-1 rounded-full bg-zinc-400" />
            <a
              href="#"
              className="font-medium text-zinc-800 transition-colors hover:text-black"
            >
              Privacy Policy
            </a>
          </div>

          <ScrollToTopButton />
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
  className = "",
}: {
  title: string;
  links: { label: string; href: string }[];
  className?: string;
}) {
  return (
    <div className={className}>
      <div className="text-[15px] font-medium text-black">{title}</div>
      <ul className="mt-5 space-y-3">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              className="text-[15px] text-zinc-700 transition-colors hover:text-black"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialX() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden>
      <path d="M11.5 1.5h2.7L9.4 7l5.6 7.5h-4.4l-3.4-4.6L3 14.5H.4l5.1-5.9L0 1.5h4.5l3.1 4.2L11.5 1.5z" />
    </svg>
  );
}
function SocialGitHub() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden>
      <path d="M8 0C3.6 0 0 3.6 0 8c0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4v-1.4c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.2 1.9.9 2.4.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.5.8 1.2.8 2.1 0 3.1-1.9 3.7-3.6 3.9.3.3.5.7.5 1.5v2.2c0 .2.1.5.6.4C13.7 14.5 16 11.5 16 8c0-4.4-3.6-8-8-8z" />
    </svg>
  );
}
function SocialDiscord() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden>
      <path d="M13.5 2.6A12.6 12.6 0 0 0 10.5 2c-.1.2-.3.5-.4.7-1.4-.2-2.7-.2-4.1 0-.1-.2-.3-.5-.4-.7-1 .2-2 .4-3 .8C.7 6.4.2 10.1.5 13.7c1.2.9 2.4 1.4 3.6 1.8.3-.4.6-.8.8-1.3-.4-.2-.8-.4-1.2-.6.1-.1.2-.1.3-.2 2.4 1.1 5.1 1.1 7.5 0 .1.1.2.1.3.2-.4.2-.8.4-1.2.6.2.5.5.9.8 1.3 1.2-.4 2.5-.9 3.6-1.8.3-4.2-.4-7.9-2.5-11.1zM5.6 11.5c-.7 0-1.3-.7-1.3-1.5 0-.8.6-1.5 1.3-1.5.7 0 1.3.7 1.3 1.5 0 .8-.5 1.5-1.3 1.5zm4.8 0c-.7 0-1.3-.7-1.3-1.5 0-.8.6-1.5 1.3-1.5.7 0 1.3.7 1.3 1.5 0 .8-.6 1.5-1.3 1.5z" />
    </svg>
  );
}
function SocialTelegram() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden>
      <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.7 5.4-1.2 6c-.1.4-.4.5-.7.3l-2-1.5-1 .9c-.1.1-.2.2-.4.2l.1-2 3.7-3.4c.2-.1 0-.2-.2-.1L5.5 8.7l-2-.6c-.4-.1-.4-.4.1-.6l7-2.7c.3-.1.7.1.6.6z" />
    </svg>
  );
}
function SocialLinkedIn() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden>
      <path d="M14.8 0H1.2C.6 0 0 .5 0 1.2v13.6C0 15.5.6 16 1.2 16h13.6c.7 0 1.2-.5 1.2-1.2V1.2C16 .5 15.5 0 14.8 0zM4.7 13.6H2.4V6h2.4v7.6zM3.5 5c-.8 0-1.4-.6-1.4-1.4s.6-1.4 1.4-1.4c.8 0 1.4.6 1.4 1.4S4.3 5 3.5 5zm10.1 8.6h-2.4V9.9c0-.9 0-2-1.2-2s-1.4.9-1.4 1.9v3.7H6.3V6h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2z" />
    </svg>
  );
}

