import { Landmark } from "lucide-react"

import { Reveal } from "@/components/site/reveal"
import { challengeSignals } from "@/lib/content"

const NODE_POSITION: Record<number, string> = {
  0: "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2",
  1: "top-1/2 right-0 translate-x-[40%] -translate-y-1/2",
  2: "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2",
  3: "top-1/2 left-0 -translate-x-[40%] -translate-y-1/2",
}

export function OrbitDiagram() {
  return (
    <div className="relative mx-auto aspect-square w-[85%] max-w-[24rem]">
      <div className="absolute inset-[11%] rounded-full border border-brand/25" />
      <div className="absolute inset-[11%] rounded-full border border-dashed border-brand/15 [mask-image:radial-gradient(circle,transparent_62%,black_63%)]" />

      <Reveal className="absolute inset-[30%] flex flex-col items-center justify-center gap-1.5 rounded-full bg-gradient-to-br from-brand to-[#132a52] text-center shadow-xl shadow-brand/20">
        <Landmark className="size-6 text-white" strokeWidth={1.75} />
        <span className="text-[10px] font-semibold tracking-[0.14em] text-white/70 uppercase">
          BellTower
        </span>
      </Reveal>

      {challengeSignals.map((signal, i) => {
        const Icon = signal.icon
        return (
          <Reveal
            key={signal.label}
            delay={Math.min(i, 3) as 0 | 1 | 2 | 3}
            className={`absolute z-10 flex w-20 flex-col items-center gap-2 text-center sm:w-24 ${NODE_POSITION[i]}`}
          >
            <span className="flex size-12 items-center justify-center rounded-2xl bg-white ring-1 ring-zinc-900/5">
              <Icon className="text-brand size-5" strokeWidth={1.75} />
            </span>
            <span className="text-xs font-semibold text-zinc-900">
              {signal.label}
            </span>
          </Reveal>
        )
      })}
    </div>
  )
}
