import * as React from "react"
import { cn } from "@/lib/utils"
import { Reveal } from "@/components/site/reveal"

interface SectionHeadingProps {
  eyebrow: string
  title: React.ReactNode
  lede?: React.ReactNode
  align?: "left" | "center"
  tone?: "light" | "dark"
  className?: string
  titleClassName?: string
}

export function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "left",
  tone = "light",
  className,
  titleClassName,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className
      )}
    >
      <span
        className={cn(
          "text-xs font-semibold tracking-[0.14em] text-brand uppercase",
          tone === "dark" && "text-brand"
        )}
      >
        {eyebrow}
      </span>
      <h2
        className={cn(
          "font-display max-w-2xl text-balance text-3xl leading-[1.1] font-medium sm:text-4xl lg:text-[2.75rem]",
          tone === "dark" ? "text-white" : "text-foreground",
          titleClassName
        )}
      >
        {title}
      </h2>
      {lede ? (
        <p
          className={cn(
            "max-w-lg text-base leading-relaxed",
            tone === "dark" ? "text-white/60" : "text-muted-foreground"
          )}
        >
          {lede}
        </p>
      ) : null}
    </Reveal>
  )
}
