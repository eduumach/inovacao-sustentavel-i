import type { Metadata } from "next"

import { PitchDeck } from "@/components/pitch/pitch-deck"
import {
  SLIDE_META,
  SlideCaseStudy,
  SlideClosing,
  SlideCover,
  SlideFuture,
  SlideHowItWorks,
  SlideImpact,
  SlideIndex,
  SlideInsight,
  SlideProblem,
  SlideResults,
  SlideSimulations,
  SlideSolution,
  SlideTeam,
} from "@/components/pitch/slides"

export const metadata: Metadata = {
  title: "VERDE — Pitch | Monitoramento Ambiental Uberlândia",
  description:
    "Plataforma VERDE: Índice de Saúde Ambiental por bairro a partir de satélite, sensores e dados públicos, com simulação de intervenções urbanas.",
}

export default function PitchPage() {
  return (
    <PitchDeck slides={SLIDE_META}>
      <SlideCover />
      <SlideProblem />
      <SlideInsight />
      <SlideSolution />
      <SlideHowItWorks />
      <SlideIndex />
      <SlideCaseStudy />
      <SlideSimulations />
      <SlideResults />
      <SlideImpact />
      <SlideFuture />
      <SlideTeam />
      <SlideClosing />
    </PitchDeck>
  )
}
