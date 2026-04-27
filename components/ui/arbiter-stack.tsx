"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const AUTO_CYCLE_MS = 2400;

type Layer = {
  label: string;
  highlights: [string, string, string];
};

const LAYERS: Layer[] = [
  {
    label: "Dashboard",
    highlights: [
      "Real-time PnL Tracking",
      "Mandate Spend Caps",
      "Per-agent Insights",
    ],
  },
  {
    label: "Agents",
    highlights: [
      "Autonomous Decisions",
      "Per-agent Wallets",
      "Mandate-aware Execution",
    ],
  },
  {
    label: "Profit Filter",
    highlights: [
      "Cost vs Reward Logic",
      "Margin Thresholds",
      "Auto-pruned Sources",
    ],
  },
  {
    label: "Cache Layer",
    highlights: [
      "Reusable Computations",
      "Sub-cent Cache Sales",
      "Network-wide Hits",
    ],
  },
  {
    label: "Solana",
    highlights: [
      "USDC Settlement",
      "Sub-cent Tx Fees",
      "Sealevel Parallelism",
    ],
  },
];

export function ArbiterStack() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const activeRef = useRef(active);
  activeRef.current = active;

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setActive((activeRef.current + 1) % LAYERS.length);
    }, AUTO_CYCLE_MS);
    return () => window.clearInterval(id);
  }, [paused]);

  const layer = LAYERS[active];

  return (
    <div
      className="relative mt-20 flex items-center justify-between gap-2 sm:mt-28 sm:gap-6"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <ul className="flex flex-col gap-6 text-right sm:gap-7">
        {LAYERS.map((l, i) => {
          const isActive = active === i;
          return (
            <li key={l.label}>
              <button
                type="button"
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                className={`flex w-full items-center justify-end gap-3 text-[10px] font-bold uppercase tracking-[0.18em] transition-colors ${
                  isActive ? "text-black" : "text-zinc-500 hover:text-zinc-700"
                }`}
              >
                <span className="whitespace-nowrap">{l.label}</span>
                <motion.span
                  aria-hidden
                  animate={{
                    backgroundColor: isActive
                      ? "rgb(59 130 246)"
                      : "rgb(161 161 170 / 0.7)",
                    height: isActive ? 2 : 1,
                  }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="block w-10 sm:w-20 lg:w-32"
                />
                <motion.span
                  aria-hidden
                  animate={{
                    backgroundColor: isActive
                      ? "rgb(59 130 246)"
                      : "rgb(212 212 216)",
                    scale: isActive ? 1.6 : 1,
                  }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="-ml-3 block h-1.5 w-1.5 rounded-full"
                />
              </button>
            </li>
          );
        })}
      </ul>

      <ArbiterIsoStack activeIndex={active} onHover={setActive} />

      <div className="flex flex-col gap-9 text-left sm:gap-12">
        <AnimatePresence mode="wait">
          <motion.ul
            key={layer.label}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -8 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-9 sm:gap-12"
          >
            {layer.highlights.map((h) => (
              <li
                key={h}
                className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-700"
              >
                <span
                  aria-hidden
                  className="-mr-3 block h-1.5 w-1.5 rounded-full bg-blue-500"
                />
                <span
                  aria-hidden
                  className="block h-px w-10 bg-zinc-400/70 sm:w-20 lg:w-32"
                />
                <span className="whitespace-nowrap">{h}</span>
              </li>
            ))}
          </motion.ul>
        </AnimatePresence>
      </div>
    </div>
  );
}

function ArbiterIsoStack({
  activeIndex,
  onHover,
}: {
  activeIndex: number;
  onHover: (index: number) => void;
}) {
  return (
    <div className="relative shrink-0">
      <div
        className="relative h-[260px] w-[280px] sm:h-[320px] sm:w-[360px]"
        style={{
          transformStyle: "preserve-3d",
          transform: "rotateX(58deg) rotateZ(-42deg)",
          perspective: 1200,
        }}
      >
        {[0, 1, 2, 3, 4].map((j) => {
          // j=0 is bottom card (Solana), j=4 is top card (Dashboard).
          const layerIdx = 4 - j;
          const isActive = layerIdx === activeIndex;
          const isAbove = layerIdx < activeIndex;
          const baseZ = j * 28;
          const liftZ = isAbove ? 120 : 0;
          const popZ = isActive ? 36 : 0;
          const z = baseZ + liftZ + popZ;
          return (
            <div
              key={j}
              onMouseEnter={() => onHover(layerIdx)}
              className={`absolute inset-0 cursor-pointer rounded-[32px] border-2 bg-white ${
                isActive ? "border-blue-500" : "border-zinc-300/70"
              }`}
              style={{
                transform: `translateZ(${z}px)`,
                opacity: isAbove ? 0.18 : 1,
                transition: "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.5s ease, border-color 0.4s ease, box-shadow 0.5s ease",
                boxShadow: isActive
                  ? "0 32px 64px -20px rgba(37, 99, 235, 0.35)"
                  : "0 14px 28px -18px rgba(15, 30, 60, 0.12)",
              }}
            >
              {isActive && <LayerMock layerIndex={activeIndex} />}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function LayerMock({ layerIndex }: { layerIndex: number }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={layerIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="absolute inset-5 flex flex-col"
      >
        {layerIndex === 0 && <DashboardMock />}
        {layerIndex === 1 && <AgentsMock />}
        {layerIndex === 2 && <ProfitFilterMock />}
        {layerIndex === 3 && <CacheMock />}
        {layerIndex === 4 && <SolanaMock />}
      </motion.div>
    </AnimatePresence>
  );
}

function DashboardMock() {
  return (
    <div className="flex h-full flex-col gap-2.5">
      <div className="flex items-center justify-between">
        <div className="flex gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-zinc-300" />
          <span className="h-1.5 w-1.5 rounded-full bg-zinc-300" />
          <span className="h-1.5 w-1.5 rounded-full bg-zinc-300" />
        </div>
        <div className="flex items-center gap-1">
          <span className="h-2.5 w-2.5 rounded-sm bg-blue-100" />
          <span className="h-2.5 w-2.5 rounded-sm bg-blue-100" />
          <span className="h-2.5 w-2.5 rounded-sm bg-blue-100" />
        </div>
      </div>
      <div className="grid flex-1 grid-cols-3 gap-2.5">
        <div className="flex flex-col gap-1.5">
          <div className="rounded-md bg-blue-100 px-2 py-1.5 text-[10px] font-bold leading-none text-zinc-800">
            $1,247
          </div>
          <div className="h-5 rounded-md bg-zinc-100" />
          <div className="h-1.5 w-3/4 rounded-full bg-zinc-200" />
          <div className="h-1.5 w-2/3 rounded-full bg-zinc-200" />
          <div className="h-1.5 w-1/2 rounded-full bg-zinc-200" />
        </div>
        <div className="col-span-2 rounded-md bg-blue-50/80" />
      </div>
    </div>
  );
}

function AgentsMock() {
  const agents = [
    { code: "A7", tone: "bg-violet-100 text-violet-700", label: "Cache trader" },
    { code: "B2", tone: "bg-emerald-100 text-emerald-700", label: "Bounty solver" },
    { code: "K9", tone: "bg-amber-100 text-amber-700", label: "Data router" },
  ];
  return (
    <div className="flex h-full flex-col gap-2">
      <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-500">
        Active agents
      </div>
      <div className="flex flex-1 flex-col justify-center gap-2">
        {agents.map((a) => (
          <div
            key={a.code}
            className="flex items-center gap-2 rounded-md bg-zinc-50 px-2 py-1.5"
          >
            <span
              className={`flex h-6 w-6 items-center justify-center rounded-full text-[9px] font-bold ${a.tone}`}
            >
              {a.code}
            </span>
            <span className="flex-1 text-[10px] text-zinc-700">{a.label}</span>
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          </div>
        ))}
      </div>
    </div>
  );
}

function ProfitFilterMock() {
  return (
    <div className="flex h-full flex-col gap-2">
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-500">
          Margin filter
        </span>
        <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[9px] font-bold text-emerald-700">
          ≥ 18%
        </span>
      </div>
      <div className="flex flex-1 items-end gap-1.5">
        {[
          { h: 28, ok: false },
          { h: 38, ok: false },
          { h: 50, ok: true },
          { h: 64, ok: true },
          { h: 44, ok: false },
          { h: 78, ok: true },
          { h: 56, ok: true },
        ].map((b, i) => (
          <div
            key={i}
            className={`flex-1 rounded-t ${b.ok ? "bg-emerald-400" : "bg-rose-300"}`}
            style={{ height: `${b.h}%` }}
          />
        ))}
      </div>
    </div>
  );
}

function CacheMock() {
  const cells = Array.from({ length: 18 });
  return (
    <div className="flex h-full flex-col gap-2">
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-500">
          Cache hits
        </span>
        <span className="text-[10px] font-bold text-zinc-800">142</span>
      </div>
      <div className="grid flex-1 grid-cols-6 gap-1">
        {cells.map((_, i) => {
          const hit = [0, 2, 3, 6, 7, 9, 11, 14, 16].includes(i);
          return (
            <div
              key={i}
              className={`rounded-sm ${hit ? "bg-blue-400" : "bg-zinc-100"}`}
            />
          );
        })}
      </div>
    </div>
  );
}

function SolanaMock() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-3">
      <div className="flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1.5">
        <span className="h-2 w-2 rounded-full bg-emerald-500" />
        <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-700">
          USDC settled
        </span>
      </div>
      <div className="flex items-center gap-1.5 text-[10px] text-zinc-600">
        <span className="font-bold text-zinc-900">$0.00025</span>
        <span>per tx</span>
      </div>
      <div className="flex gap-1.5">
        {[0, 1, 2, 3, 4].map((i) => (
          <span
            key={i}
            className="h-6 w-1.5 rounded-full bg-gradient-to-b from-violet-400 to-emerald-400"
          />
        ))}
      </div>
    </div>
  );
}
