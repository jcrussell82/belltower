import * as React from "react"
import { cn } from "@/lib/utils"

interface RevealProps extends React.ComponentProps<"div"> {
  delay?: 0 | 1 | 2 | 3 | 4
}

const DELAY_CLASS: Record<number, string> = {
  0: "delay-0",
  1: "delay-100",
  2: "delay-200",
  3: "delay-300",
  4: "delay-[400ms]",
}

/**
 * Restrained scroll-reveal: fade + 8px rise, once, no re-trigger.
 * Respects prefers-reduced-motion via the transition-none fallback below.
 */
export function Reveal({ className, delay = 0, ...props }: RevealProps) {
  const ref = React.useRef<HTMLDivElement>(null)
  const [visible, setVisible] = React.useState(false)

  React.useEffect(() => {
    const node = ref.current
    if (!node) return

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.disconnect()
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={cn(
        "motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out",
        DELAY_CLASS[delay],
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-3 motion-reduce:opacity-100 motion-reduce:translate-y-0",
        className
      )}
      {...props}
    />
  )
}
