"use client"

import * as React from "react"
import { Leaf } from "lucide-react"

import { cn } from "@workspace/ui/lib/utils"

export interface SlideMeta {
  id: string
  label: string
}

export function PitchDeck({
  slides,
  children,
}: {
  slides: SlideMeta[]
  children: React.ReactNode
}) {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const [active, setActive] = React.useState(0)

  React.useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const sections = Array.from(
      container.querySelectorAll<HTMLElement>("[data-slide-index]")
    )

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            setActive(Number(entry.target.getAttribute("data-slide-index")))
          }
        }
      },
      { root: container, threshold: [0.5, 0.6, 0.7] }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const scrollToIndex = React.useCallback((index: number) => {
    const container = containerRef.current
    if (!container) return
    container
      .querySelector<HTMLElement>(`[data-slide-index="${index}"]`)
      ?.scrollIntoView({ behavior: "smooth", block: "start" })
  }, [])

  React.useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.defaultPrevented || event.repeat) return

      if (event.target instanceof HTMLElement) {
        const tag = event.target.tagName
        if (tag === "INPUT" || tag === "TEXTAREA" || event.target.isContentEditable) {
          return
        }
      }

      if (event.key === "ArrowDown" || event.key === "PageDown" || event.key === " ") {
        event.preventDefault()
        scrollToIndex(Math.min(active + 1, slides.length - 1))
      } else if (event.key === "ArrowUp" || event.key === "PageUp") {
        event.preventDefault()
        scrollToIndex(Math.max(active - 1, 0))
      }
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [active, scrollToIndex, slides.length])

  return (
    <div className="relative h-svh w-full overflow-hidden bg-emerald-50 text-emerald-950">
      <div
        ref={containerRef}
        className="h-svh w-full snap-y snap-mandatory overflow-y-scroll scroll-smooth"
      >
        {children}
      </div>

      <div className="pointer-events-none fixed inset-x-0 top-0 z-30 h-[3px] bg-emerald-900/15">
        <div
          className="h-full bg-gradient-to-r from-emerald-500 via-lime-500 to-emerald-500 transition-[width] duration-500"
          style={{ width: `${((active + 1) / slides.length) * 100}%` }}
        />
      </div>

      <div className="pointer-events-none fixed left-4 top-5 z-30 flex items-center gap-2 sm:left-8 sm:top-7">
        <Leaf className="size-4 text-emerald-600" />
        <span className="text-sm font-semibold tracking-wide text-emerald-900">
          VERDE
        </span>
      </div>

      <div className="fixed right-4 top-1/2 z-30 hidden -translate-y-1/2 flex-col gap-3 sm:right-8 md:flex">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            aria-label={`Ir para slide ${index + 1}: ${slide.label}`}
            onClick={() => scrollToIndex(index)}
            className="group flex items-center justify-end"
          >
            <span className="mr-3 hidden whitespace-nowrap rounded-full bg-emerald-900/90 px-2 py-1 text-[10px] uppercase tracking-wider text-emerald-50 group-hover:flex">
              {slide.label}
            </span>
            <span
              className={cn(
                "size-2 rounded-full border border-emerald-600/50 transition-all",
                active === index
                  ? "scale-125 bg-emerald-600"
                  : "bg-transparent group-hover:bg-emerald-500/50"
              )}
            />
          </button>
        ))}
      </div>

      <div className="fixed bottom-5 left-4 z-30 flex items-center gap-2 text-xs tabular-nums text-emerald-700/70 sm:left-8">
        <span className="font-semibold text-emerald-900">
          {String(active + 1).padStart(2, "0")}
        </span>
        <span className="text-emerald-600/50">/</span>
        <span>{String(slides.length).padStart(2, "0")}</span>
      </div>
    </div>
  )
}
