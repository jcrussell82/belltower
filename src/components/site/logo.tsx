import { cn } from "@/lib/utils"
import logoSvg from "@/assets/logo.svg"

export function Logo({ className }: { className?: string }) {
  return (
    <img
      src={logoSvg}
      alt="BellTower Strategy Group"
      className={cn("h-9 w-auto object-contain object-left", className)}
    />
  )
}
