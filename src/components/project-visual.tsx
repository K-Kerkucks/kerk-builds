"use client";

import {
  ArrowRight,
  BarChart3,
  Bell,
  Bot,
  BriefcaseBusiness,
  Check,
  CheckCircle2,
  Database,
  Gauge,
  Languages,
  Mail,
  MessageSquareText,
  MousePointerClick,
  Send,
  Sparkles,
  Tags,
  UsersRound,
  WandSparkles,
} from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

type ProjectVisualProps = {
  kind: string;
  title: string;
  accent: string;
};

const lines = [72, 48, 61];

function useSceneCycle(sceneCount: number, interval = 3200) {
  const [scene, setScene] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;

    const timer = window.setInterval(() => {
      setScene((current) => (current + 1) % sceneCount);
    }, interval);

    return () => window.clearInterval(timer);
  }, [interval, reduceMotion, sceneCount]);

  return { scene, reduceMotion };
}

function SceneDots({ active, count, accent }: { active: number; count: number; accent: string }) {
  return (
    <div className="absolute inset-x-0 bottom-2 z-20 flex justify-center gap-1.5" aria-hidden>
      {Array.from({ length: count }).map((_, index) => (
        <span
          key={index}
          className="h-1 rounded-full transition-[width,background-color] duration-500"
          style={{
            width: index === active ? 18 : 5,
            backgroundColor: index === active ? accent : "rgba(255,255,255,.18)",
          }}
        />
      ))}
    </div>
  );
}

function AnimatedScene({
  sceneKey,
  reduceMotion,
  children,
}: {
  sceneKey: number;
  reduceMotion: boolean | null;
  children: React.ReactNode;
}) {
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={sceneKey}
        className="absolute inset-0"
        initial={reduceMotion ? false : { opacity: 0, y: 10, filter: "blur(4px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        exit={reduceMotion ? undefined : { opacity: 0, y: -8, filter: "blur(3px)" }}
        transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

function WindowFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative h-full min-h-64 overflow-hidden rounded-[1.4rem] border border-white/10 bg-zinc-950/90 shadow-2xl shadow-black/30">
      <div className="flex h-10 items-center gap-1.5 border-b border-white/10 px-4">
        <span className="size-2 rounded-full bg-white/20" />
        <span className="size-2 rounded-full bg-white/15" />
        <span className="size-2 rounded-full bg-white/10" />
        <span className="ml-auto font-mono text-[9px] tracking-[0.2em] text-white/35">
          LIVE SYSTEM
        </span>
      </div>
      {children}
    </div>
  );
}

function InboxVisual({ accent }: { accent: string }) {
  const { scene, reduceMotion } = useSceneCycle(3, 3100);

  return (
    <WindowFrame>
      <div className="relative h-[calc(100%-2.5rem)] overflow-hidden">
        <AnimatedScene sceneKey={scene} reduceMotion={reduceMotion}>
          {scene === 0 && (
            <div className="grid h-full grid-cols-[0.78fr_1.22fr] pb-4">
              <div className="space-y-2 border-r border-white/10 p-3">
                <div className="mb-3 flex items-center justify-between font-mono text-[8px] tracking-[0.14em] text-white/40">
                  INBOX
                  <span className="rounded-full px-1.5 py-0.5" style={{ backgroundColor: `${accent}25`, color: accent }}>3</span>
                </div>
                {lines.map((width, index) => (
                  <motion.div
                    key={width}
                    initial={index === 0 && !reduceMotion ? { x: -18, opacity: 0 } : false}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.15 }}
                    className="rounded-lg border p-2"
                    style={{
                      borderColor: index === 0 ? `${accent}55` : "rgba(255,255,255,.08)",
                      backgroundColor: index === 0 ? `${accent}0d` : "rgba(255,255,255,.025)",
                    }}
                  >
                    <div className="mb-1.5 flex items-center gap-2">
                      <Mail className="size-3" style={{ color: index === 0 ? accent : "rgba(255,255,255,.35)" }} />
                      <span className="h-1.5 rounded-full bg-white/25" style={{ width }} />
                    </div>
                    <div className="h-1 w-4/5 rounded-full bg-white/10" />
                  </motion.div>
                ))}
              </div>
              <div className="flex flex-col justify-center p-4">
                <div className="mb-2 flex items-center gap-2 text-[9px] text-white/40">
                  <Bell className="size-3" style={{ color: accent }} /> NEW REQUEST
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.035] p-3">
                  <p className="text-[11px] font-medium text-white/80">Access needed for monthly report</p>
                  <p className="mt-2 text-[9px] leading-4 text-white/40">
                    Hi team, I cannot open the latest reporting workspace. Could you help?
                  </p>
                  <div className="mt-3 flex items-center gap-2 font-mono text-[8px] text-white/30">
                    RECEIVED NOW <span className="size-1 animate-pulse rounded-full" style={{ backgroundColor: accent }} />
                  </div>
                </div>
              </div>
            </div>
          )}

          {scene === 1 && (
            <div className="flex h-full flex-col justify-center px-5 pb-4">
              <div className="mb-5 text-center">
                <p className="font-mono text-[8px] tracking-[0.2em] text-white/35">TRIAGE IN PROGRESS</p>
                <p className="mt-1.5 text-xs font-medium text-white/75">Understanding and grounding the request</p>
              </div>
              <div className="flex items-center justify-center gap-2">
                {[
                  { icon: Mail, label: "Receive" },
                  { icon: Bot, label: "Classify" },
                  { icon: Database, label: "Ground" },
                ].map(({ icon: Icon, label }, index) => (
                  <div key={label} className="flex items-center gap-2">
                    <motion.div
                      initial={reduceMotion ? false : { scale: 0.86, opacity: 0.35 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: index * 0.2 }}
                      className="flex flex-col items-center gap-1.5"
                    >
                      <span className="grid size-10 place-items-center rounded-xl border" style={{ borderColor: `${accent}55`, color: accent, backgroundColor: `${accent}0d` }}>
                        <Icon className="size-4" />
                      </span>
                      <span className="text-[8px] text-white/35">{label}</span>
                    </motion.div>
                    {index < 2 && <ArrowRight className="mb-4 size-3 text-white/20" />}
                  </div>
                ))}
              </div>
              <div className="mx-auto mt-5 flex flex-wrap justify-center gap-1.5">
                {["Access request", "94% confidence", "KB article matched"].map((label, index) => (
                  <motion.span
                    key={label}
                    initial={reduceMotion ? false : { opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.45 + index * 0.12 }}
                    className="rounded-full border px-2 py-1 text-[8px]"
                    style={{ borderColor: `${accent}44`, color: index === 1 ? accent : "rgba(255,255,255,.5)" }}
                  >
                    {label}
                  </motion.span>
                ))}
              </div>
            </div>
          )}

          {scene === 2 && (
            <div className="flex h-full flex-col justify-center px-5 pb-4">
              <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[10px] font-medium text-white/70">
                    <WandSparkles className="size-3.5" style={{ color: accent }} /> Suggested reply
                  </div>
                  <span className="rounded-full border border-white/10 px-2 py-1 font-mono text-[7px] text-white/35">GROUNDED</span>
                </div>
                <p className="mt-3 text-[9px] leading-4 text-white/45">
                  I found the relevant access guide. Follow these steps to request the correct reporting role. If access still fails, I will route this to the support team.
                </p>
                <div className="mt-4 flex items-center justify-between border-t border-white/8 pt-3">
                  <span className="text-[8px] text-white/30">Source linked · escalation ready</span>
                  <motion.span
                    initial={reduceMotion ? false : { scale: 0.8 }}
                    animate={{ scale: 1 }}
                    className="flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-[8px] font-medium text-zinc-950"
                    style={{ backgroundColor: accent }}
                  >
                    <Send className="size-3" /> Reply sent
                  </motion.span>
                </div>
              </div>
            </div>
          )}
        </AnimatedScene>
        <SceneDots active={scene} count={3} accent={accent} />
      </div>
    </WindowFrame>
  );
}

function BoardVisual({ accent }: { accent: string }) {
  const { scene, reduceMotion } = useSceneCycle(3, 3400);
  const workload = [
    { name: "AK", delivered: 14, load: 88, bars: [52, 72, 64, 88] },
    { name: "ML", delivered: 11, load: 61, bars: [70, 54, 67, 61] },
    { name: "JN", delivered: 8, load: 43, bars: [64, 58, 49, 43] },
  ];

  return (
    <WindowFrame>
      <div className="relative h-[calc(100%-2.5rem)] overflow-hidden">
        <AnimatedScene sceneKey={scene} reduceMotion={reduceMotion}>
          {scene === 0 && (
            <div className="flex h-full flex-col justify-center px-5 pb-4">
              <div className="mx-auto w-full max-w-sm rounded-2xl border border-white/10 bg-white/[0.035] p-4 shadow-xl">
                <div className="flex items-center gap-2 text-[10px] font-medium text-white/70">
                  <span className="grid size-7 place-items-center rounded-lg" style={{ backgroundColor: `${accent}1f`, color: accent }}>
                    <MessageSquareText className="size-3.5" />
                  </span>
                  BoardFlow assistant
                  <span className="ml-auto size-1.5 animate-pulse rounded-full" style={{ backgroundColor: accent }} />
                </div>
                <div className="mt-4 rounded-xl bg-white/[0.045] p-3 text-[9px] leading-4 text-white/45">
                  Tell me what needs to be done. I will turn it into a structured ticket for review.
                </div>
                <motion.div
                  initial={reduceMotion ? false : { opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                  className="mt-3 flex items-end gap-2 rounded-xl border p-2.5"
                  style={{ borderColor: `${accent}55` }}
                >
                  <span className="flex-1 text-[9px] leading-4 text-white/65">
                    Create a ticket to investigate the monthly dashboard timeout
                    <span className="ml-0.5 inline-block h-3 w-px animate-pulse align-middle" style={{ backgroundColor: accent }} />
                  </span>
                  <span className="grid size-7 shrink-0 place-items-center rounded-lg" style={{ backgroundColor: accent, color: "#18181b" }}>
                    <Send className="size-3" />
                  </span>
                </motion.div>
              </div>
            </div>
          )}

          {scene === 1 && (
            <div className="flex h-full flex-col justify-center px-5 pb-4">
              <motion.div
                initial={reduceMotion ? false : { scale: 0.96 }}
                animate={{ scale: 1 }}
                className="rounded-2xl border bg-white/[0.035] p-4"
                style={{ borderColor: `${accent}4d` }}
              >
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 font-mono text-[8px] tracking-[0.14em]" style={{ color: accent }}>
                    <Sparkles className="size-3" /> TICKET PROPOSAL
                  </span>
                  <span className="flex items-center gap-1 text-[8px] text-white/35"><CheckCircle2 className="size-3" /> Ready for review</span>
                </div>
                <h4 className="mt-3 text-sm font-medium text-white/85">Investigate monthly dashboard timeout</h4>
                <p className="mt-2 text-[9px] leading-4 text-white/40">
                  Reproduce the timeout, review the latest pipeline run and confirm whether the reporting dataset completed successfully.
                </p>
                <div className="mt-4 grid grid-cols-3 gap-2">
                  {[
                    { icon: Tags, label: "Priority", value: "High" },
                    { icon: UsersRound, label: "Team", value: "Data Ops" },
                    { icon: Gauge, label: "Effort", value: "3 points" },
                  ].map(({ icon: Icon, label, value }) => (
                    <div key={label} className="rounded-lg border border-white/8 bg-black/15 p-2">
                      <div className="flex items-center gap-1 text-[7px] uppercase tracking-wider text-white/25"><Icon className="size-2.5" /> {label}</div>
                      <div className="mt-1 text-[9px] text-white/65">{value}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-3 flex justify-end">
                  <span className="rounded-full px-3 py-1.5 text-[8px] font-medium text-zinc-950" style={{ backgroundColor: accent }}>Create ticket</span>
                </div>
              </motion.div>
            </div>
          )}

          {scene === 2 && (
            <div className="h-full px-4 pb-5 pt-3">
              <div className="mb-2 flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-[9px] font-medium text-white/65"><BarChart3 className="size-3" style={{ color: accent }} /> Team capacity</span>
                <span className="font-mono text-[7px] text-white/25">MONTH TO MONTH</span>
              </div>
              <div className="space-y-1.5">
                {workload.map((member, memberIndex) => (
                  <motion.div
                    key={member.name}
                    initial={reduceMotion ? false : { opacity: 0, x: 8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: memberIndex * 0.12 }}
                    className="grid grid-cols-[2rem_1fr_3.25rem] items-center gap-2 rounded-lg border border-white/8 bg-white/[0.025] px-2.5 py-2"
                  >
                    <span className="grid size-7 place-items-center rounded-full text-[8px] font-medium" style={{ backgroundColor: `${accent}1d`, color: accent }}>{member.name}</span>
                    <div>
                      <div className="flex items-center justify-between text-[7px] text-white/35">
                        <span>{member.delivered} tasks delivered</span><span>{member.load}% load</span>
                      </div>
                      <div className="mt-1.5 flex h-5 items-end gap-1">
                        {member.bars.map((height, index) => (
                          <motion.span
                            key={index}
                            initial={reduceMotion ? false : { height: 2 }}
                            animate={{ height: `${Math.max(4, height / 5)}px` }}
                            transition={{ delay: 0.15 + index * 0.06 }}
                            className="flex-1 rounded-t-[2px]"
                            style={{ backgroundColor: index === 3 ? accent : `${accent}55` }}
                          />
                        ))}
                      </div>
                    </div>
                    <span
                      className="rounded-md px-1.5 py-1 text-center text-[7px]"
                      style={{
                        backgroundColor: member.load < 50 ? `${accent}24` : "rgba(255,255,255,.04)",
                        color: member.load < 50 ? accent : "rgba(255,255,255,.35)",
                      }}
                    >
                      {member.load < 50 ? "12h free" : member.load > 80 ? "Busy" : "Balanced"}
                    </span>
                  </motion.div>
                ))}
              </div>
              <div className="mt-2 flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-[8px]" style={{ backgroundColor: `${accent}12`, color: accent }}>
                <Sparkles className="size-3" /> JN has capacity for the next assignment
              </div>
            </div>
          )}
        </AnimatedScene>
        <SceneDots active={scene} count={3} accent={accent} />
      </div>
    </WindowFrame>
  );
}

function NetworkVisual({ accent }: { accent: string }) {
  const { scene, reduceMotion } = useSceneCycle(3, 3200);

  return (
    <WindowFrame>
      <div className="relative h-[calc(100%-2.5rem)] overflow-hidden">
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px)] [background-size:28px_28px]" />
        <AnimatedScene sceneKey={scene} reduceMotion={reduceMotion}>
          {scene === 0 && (
            <div className="grid h-full place-items-center px-5 pb-4">
              <motion.div
                initial={reduceMotion ? false : { opacity: 0, y: -16, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                className="w-full max-w-sm rounded-2xl border border-white/10 bg-zinc-900/95 p-4 shadow-2xl"
              >
                <div className="flex items-center gap-2">
                  <span className="grid size-8 place-items-center rounded-xl" style={{ backgroundColor: `${accent}20`, color: accent }}><Bell className="size-3.5" /></span>
                  <div>
                    <p className="text-[10px] font-medium text-white/75">New gig for you</p>
                    <p className="text-[8px] text-white/30">92% skills match</p>
                  </div>
                  <span className="ml-auto size-2 rounded-full" style={{ backgroundColor: accent }} />
                </div>
                <div className="mt-3 rounded-xl bg-white/[0.04] p-3">
                  <div className="flex items-center gap-2 text-[11px] font-medium text-white/80"><BriefcaseBusiness className="size-3.5" style={{ color: accent }} /> Design an internal website</div>
                  <p className="mt-1.5 text-[8px] leading-4 text-white/35">Responsive interface · Design system · 3 week engagement</p>
                </div>
                <div className="mt-3 flex items-center justify-end gap-2">
                  <span className="rounded-full border border-white/10 px-3 py-1.5 text-[8px] text-white/35">Not now</span>
                  <motion.span
                    animate={reduceMotion ? undefined : { scale: [1, 1.04, 1] }}
                    transition={{ delay: 1.1, duration: 0.45 }}
                    className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[8px] font-medium text-zinc-950"
                    style={{ backgroundColor: accent }}
                  >
                    <MousePointerClick className="size-3" /> Accept gig
                  </motion.span>
                </div>
              </motion.div>
            </div>
          )}

          {scene === 1 && (
            <div className="grid h-full place-items-center pb-4">
              <div className="relative grid size-36 place-items-center">
                {[0, 1, 2].map((ring) => (
                  <motion.span
                    key={ring}
                    className="absolute rounded-full border"
                    style={{ inset: ring * 15, borderColor: `${accent}${ring === 0 ? "30" : "55"}` }}
                    animate={reduceMotion ? undefined : { scale: [0.92, 1.05, 0.92], opacity: [0.35, 0.8, 0.35] }}
                    transition={{ duration: 1.8, delay: ring * 0.18, repeat: Infinity }}
                  />
                ))}
                <span className="grid size-14 place-items-center rounded-2xl border border-white/10 bg-zinc-900 shadow-xl">
                  <UsersRound className="size-6" style={{ color: accent }} />
                </span>
                <p className="absolute -bottom-6 whitespace-nowrap text-center font-mono text-[8px] tracking-[0.16em] text-white/40">CONFIRMING FIT</p>
              </div>
            </div>
          )}

          {scene === 2 && (
            <div className="grid h-full place-items-center px-5 pb-4">
              <motion.div
                initial={reduceMotion ? false : { scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 210, damping: 18 }}
                className="w-full max-w-sm rounded-2xl border bg-zinc-900/95 p-4 text-center shadow-2xl"
                style={{ borderColor: `${accent}66` }}
              >
                <span className="mx-auto grid size-10 place-items-center rounded-full" style={{ backgroundColor: `${accent}20`, color: accent }}><Check className="size-5" /></span>
                <p className="mt-2 text-sm font-medium text-white/85">Gig matched</p>
                <p className="mt-1 text-[8px] text-white/35">You and the project owner can now coordinate directly.</p>
                <div className="mt-3 flex justify-center gap-1.5">
                  {["UI design", "Next.js", "Design systems"].map((skill) => (
                    <span key={skill} className="rounded-full border border-white/10 px-2 py-1 text-[7px] text-white/45">{skill}</span>
                  ))}
                </div>
              </motion.div>
            </div>
          )}
        </AnimatedScene>
        <SceneDots active={scene} count={3} accent={accent} />
      </div>
    </WindowFrame>
  );
}

function AnalyticsVisual({ accent }: { accent: string }) {
  return (
    <WindowFrame>
      <div className="grid h-[calc(100%-2.5rem)] grid-cols-[1.3fr_0.7fr] gap-3 p-3">
        <div className="flex flex-col rounded-xl border border-white/8 bg-white/[0.025] p-3">
          <div className="flex items-center gap-2 text-[10px] text-white/45">
            <Database className="size-3" style={{ color: accent }} /> Throughput
          </div>
          <div className="mt-auto flex h-32 items-end gap-2">
            {[34, 48, 39, 72, 58, 88, 76, 94].map((height, index) => (
              <span
                key={index}
                className="flex-1 rounded-t-sm opacity-80"
                style={{ height: `${height}%`, backgroundColor: index > 5 ? accent : `${accent}55` }}
              />
            ))}
          </div>
        </div>
        <div className="space-y-3">
          {["Pipeline health", "Anomalies", "Freshness"].map((label, index) => (
            <div key={label} className="rounded-xl border border-white/8 bg-white/[0.025] p-3">
              <div className="text-[9px] text-white/35">{label}</div>
              <div className="mt-2 flex items-center gap-2 text-sm font-semibold text-white/75">
                {index === 1 ? "03" : index === 0 ? "99.8%" : "Live"}
                <span className="size-1.5 rounded-full" style={{ backgroundColor: accent }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </WindowFrame>
  );
}

function PetVisual({ accent }: { accent: string }) {
  return (
    <WindowFrame>
      <div className="relative grid h-[calc(100%-2.5rem)] place-items-center overflow-hidden">
        <div className="absolute inset-x-6 bottom-7 h-px bg-white/10" />
        <div className="relative">
          <div className="absolute -inset-12 rounded-full blur-3xl" style={{ backgroundColor: `${accent}22` }} />
          <div className="relative grid grid-cols-7 gap-1" aria-label="Pixel-art desktop pet">
            {[
              0,1,0,0,0,1,0, 1,1,1,0,1,1,1, 1,1,1,1,1,1,1,
              1,0,1,1,1,0,1, 1,1,1,1,1,1,1, 0,1,0,0,0,1,0,
            ].map((filled, index) => (
              <span
                key={index}
                className="size-4 rounded-[3px]"
                style={{ backgroundColor: filled ? accent : "transparent" }}
              />
            ))}
          </div>
          <div className="mt-5 flex items-center justify-center gap-2 font-mono text-[9px] text-white/35">
            IDLE <span className="size-1.5 animate-pulse rounded-full" style={{ backgroundColor: accent }} /> POINTER TRACKING
          </div>
        </div>
      </div>
    </WindowFrame>
  );
}

function LanguageVisual({ accent }: { accent: string }) {
  return (
    <WindowFrame>
      <div className="grid h-[calc(100%-2.5rem)] grid-cols-2 gap-3 p-4">
        <div className="grid place-items-center rounded-2xl border border-white/10 bg-white/[0.035]">
          <div className="text-center">
            <div className="text-6xl font-medium text-white">語</div>
            <div className="mt-3 font-mono text-[9px] tracking-widest text-white/35">LANGUAGE</div>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-2">
          {["あ", "カ", "日"].map((character, index) => (
            <div key={character} className="flex items-center gap-3 rounded-xl border border-white/8 bg-white/[0.025] p-2.5">
              <span className="grid size-8 place-items-center rounded-lg" style={{ backgroundColor: `${accent}20`, color: accent }}>
                {character}
              </span>
              <span className="h-1.5 flex-1 rounded-full bg-white/15" />
              {index === 0 ? <Check className="size-3" style={{ color: accent }} /> : <Languages className="size-3 text-white/25" />}
            </div>
          ))}
        </div>
      </div>
    </WindowFrame>
  );
}

export function ProjectVisual({ kind, title, accent }: ProjectVisualProps) {
  const visual = (() => {
    switch (kind) {
      case "inbox":
        return <InboxVisual accent={accent} />;
      case "board":
        return <BoardVisual accent={accent} />;
      case "network":
        return <NetworkVisual accent={accent} />;
      case "analytics":
        return <AnalyticsVisual accent={accent} />;
      case "pet":
        return <PetVisual accent={accent} />;
      default:
        return <LanguageVisual accent={accent} />;
    }
  })();

  return (
    <div className="relative h-full min-h-64" aria-label={`${title} product preview`}>
      <div
        className="absolute -inset-8 rounded-full opacity-30 blur-3xl"
        style={{ background: `radial-gradient(circle, ${accent}55, transparent 65%)` }}
      />
      <div className="relative h-full">{visual}</div>
    </div>
  );
}
