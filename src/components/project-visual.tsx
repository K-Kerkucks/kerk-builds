import {
  ArrowRight,
  Bot,
  Check,
  CircleUserRound,
  Database,
  Languages,
  Mail,
  Sparkles,
} from "lucide-react";

type ProjectVisualProps = {
  kind: string;
  title: string;
  accent: string;
};

const lines = [72, 48, 61];

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
  return (
    <WindowFrame>
      <div className="grid h-[calc(100%-2.5rem)] grid-cols-[0.8fr_1.2fr]">
        <div className="space-y-2 border-r border-white/10 p-3">
          {lines.map((width) => (
            <div
              key={width}
              className="rounded-lg border border-white/8 bg-white/[0.035] p-2.5"
            >
              <div className="mb-2 flex items-center gap-2">
                <span
                  className="grid size-6 place-items-center rounded-md"
                  style={{ backgroundColor: `${accent}22`, color: accent }}
                >
                  <Mail className="size-3" />
                </span>
                <span className="h-1.5 rounded-full bg-white/25" style={{ width }} />
              </div>
              <div className="h-1.5 w-4/5 rounded-full bg-white/10" />
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center justify-center gap-3 p-4">
          <div className="flex items-center gap-2">
            {[Mail, Bot, Database].map((Icon, index) => (
              <div key={index} className="flex items-center gap-2">
                <span
                  className="grid size-10 place-items-center rounded-xl border"
                  style={{ borderColor: `${accent}55`, color: accent }}
                >
                  <Icon className="size-4" />
                </span>
                {index < 2 && <ArrowRight className="size-3 text-white/25" />}
              </div>
            ))}
          </div>
          <div
            className="flex items-center gap-2 rounded-full border px-3 py-1.5 text-[10px] font-medium"
            style={{ borderColor: `${accent}55`, color: accent }}
          >
            <Sparkles className="size-3" /> 94% confidence · auto-route
          </div>
        </div>
      </div>
    </WindowFrame>
  );
}

function BoardVisual({ accent }: { accent: string }) {
  return (
    <WindowFrame>
      <div className="grid h-[calc(100%-2.5rem)] grid-cols-3 gap-2 p-3">
        {["PROPOSED", "IN PROGRESS", "SHIPPED"].map((label, column) => (
          <div key={label} className="rounded-xl bg-white/[0.035] p-2">
            <div className="mb-3 flex items-center justify-between font-mono text-[8px] tracking-wider text-white/35">
              {label}<span>{column + 2}</span>
            </div>
            <div className="space-y-2">
              {Array.from({ length: column === 1 ? 2 : 3 }).map((_, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-white/10 bg-zinc-900 p-2.5 shadow-lg"
                  style={index === 0 && column === 1 ? { borderColor: `${accent}66` } : undefined}
                >
                  <div className="mb-2 h-1.5 rounded-full bg-white/20" style={{ width: `${65 + index * 8}%` }} />
                  <div className="h-1.5 w-1/2 rounded-full bg-white/8" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </WindowFrame>
  );
}

function NetworkVisual({ accent }: { accent: string }) {
  return (
    <WindowFrame>
      <div className="relative grid h-[calc(100%-2.5rem)] place-items-center overflow-hidden">
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px)] [background-size:28px_28px]" />
        <div className="relative flex items-center gap-5">
          {["82", "96", "74"].map((score, index) => (
            <div
              key={score}
              className={index === 1 ? "-translate-y-4" : "translate-y-3"}
            >
              <div className="grid size-16 place-items-center rounded-2xl border border-white/10 bg-zinc-900 shadow-xl">
                <CircleUserRound className="size-6" style={{ color: accent }} />
              </div>
              <div className="mx-auto mt-2 w-fit rounded-full bg-white/8 px-2 py-1 font-mono text-[9px] text-white/60">
                {score}% match
              </div>
            </div>
          ))}
        </div>
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
