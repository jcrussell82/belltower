import nopeImg from "@/assets/cascade/nope-desktop.jpg"
import { Reveal } from "@/components/site/reveal"

export function NopeSection() {
  return (
    <section
      id="nope"
      className="relative overflow-hidden bg-[#2ec4b6] py-10 sm:py-14 lg:py-16"
      aria-label="Zero banned substances"
    >
      <Reveal className="mx-auto max-w-6xl px-4 sm:px-6">
        <img
          src={nopeImg}
          alt="NOPE — Cascade CBX Sport CBD topicals contain zero banned substances"
          className="mx-auto w-full max-w-5xl"
        />
      </Reveal>
    </section>
  )
}
