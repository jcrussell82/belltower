import { cn } from "@/lib/utils"

type NsfBadgeProps = {
  className?: string
}

export function NsfBadge({ className }: NsfBadgeProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 280 88"
      fill="none"
      aria-label="NSF Certified for Sport"
      className={cn("text-current", className)}
    >
      <rect
        x="1.5"
        y="1.5"
        width="277"
        height="85"
        rx="10"
        stroke="currentColor"
        strokeWidth="3"
      />
      <line
        x1="96"
        y1="12"
        x2="96"
        y2="76"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="48" cy="44" r="28" stroke="currentColor" strokeWidth="3" />
      <text
        x="48"
        y="50"
        textAnchor="middle"
        fill="currentColor"
        fontFamily="Arial Black, Helvetica, sans-serif"
        fontSize="18"
        fontWeight="800"
        letterSpacing="1"
      >
        NSF
      </text>
      <text
        x="178"
        y="38"
        textAnchor="middle"
        fill="currentColor"
        fontFamily="Helvetica, Arial, sans-serif"
        fontSize="14"
        fontWeight="600"
        letterSpacing="3"
      >
        CERTIFIED
      </text>
      <text
        x="178"
        y="64"
        textAnchor="middle"
        fill="currentColor"
        fontFamily="Arial Black, Helvetica, sans-serif"
        fontSize="26"
        fontWeight="800"
        letterSpacing="2"
      >
        SPORT
      </text>
    </svg>
  )
}
