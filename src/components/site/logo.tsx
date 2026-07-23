import { cn } from "@/lib/utils"
import logoBlue from "@/assets/cascade/logo-hor-blue.png"
import logoWhite from "@/assets/cascade/logo-hor-white.png"

type LogoProps = {
  className?: string
  variant?: "blue" | "white"
}

export function Logo({ className, variant = "blue" }: LogoProps) {
  return (
    <img
      src={variant === "white" ? logoWhite : logoBlue}
      alt="Cascade CBX Sport"
      className={cn("h-8 w-auto lg:h-9", className)}
    />
  )
}
