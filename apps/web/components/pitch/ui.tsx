import type { ReactNode } from "react"

import { cn } from "@workspace/ui/lib/utils"

export function Slide({
  id,
  index,
  className,
  children,
}: {
  id: string
  index: number
  className?: string
  children: ReactNode
}) {
  return (
    <section
      id={id}
      data-slide-index={index}
      className={cn(
        "relative flex h-svh w-full snap-start flex-col justify-center overflow-hidden px-6 py-24 sm:px-12 lg:px-24",
        className
      )}
    >
      {children}
    </section>
  )
}

export function Glow({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute rounded-full blur-3xl", className)}
    />
  )
}

export function Grid({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(110,231,183,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(110,231,183,0.06)_1px,transparent_1px)] bg-[size:48px_48px]",
        className
      )}
    />
  )
}

export function Kicker({ children }: { children: ReactNode }) {
  return (
    <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400">
      <span className="h-px w-6 bg-emerald-400" />
      {children}
    </span>
  )
}

export function SlideHeading({
  kicker,
  title,
  description,
}: {
  kicker: string
  title: ReactNode
  description?: ReactNode
}) {
  return (
    <div className="max-w-3xl">
      <Kicker>{kicker}</Kicker>
      <h2 className="text-3xl font-bold leading-[1.1] text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-relaxed text-emerald-100/70 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  )
}

export function Card({
  className,
  children,
}: {
  className?: string
  children: ReactNode
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-emerald-400/15 bg-white/[0.03] p-6 backdrop-blur-sm",
        className
      )}
    >
      {children}
    </div>
  )
}

export function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-200">
      {children}
    </span>
  )
}
