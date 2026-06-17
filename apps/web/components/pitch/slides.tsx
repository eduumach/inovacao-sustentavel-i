import Link from "next/link"
import {
  ArrowRight,
  Bus,
  Building2,
  CloudRain,
  Database,
  Droplets,
  Gauge,
  GraduationCap,
  Layers,
  Leaf,
  Network,
  Satellite,
  ShieldCheck,
  Sprout,
  Target,
  Thermometer,
  TreePine,
  TrendingDown,
  TrendingUp,
  Users,
  Waves,
} from "lucide-react"

import type { SlideMeta } from "@/components/pitch/pitch-deck"
import { Card, Glow, Grid, Kicker, Pill, Slide, SlideHeading } from "@/components/pitch/ui"
import { COEFFICIENT_LEGEND } from "@/lib/flood-zones"

export const SLIDE_META: SlideMeta[] = [
  { id: "capa", label: "Capa" },
  { id: "problema", label: "O problema" },
  { id: "insight", label: "O insight" },
  { id: "solucao", label: "A solução" },
  { id: "funcionamento", label: "Como funciona" },
  { id: "indice", label: "Classificação de risco" },
  { id: "caso", label: "Rondon Pacheco" },
  { id: "simulacoes", label: "Simulações" },
  { id: "resultado", label: "Resultado" },
  { id: "impacto", label: "Impacto" },
  { id: "futuro", label: "Visão de futuro" },
  { id: "equipe", label: "Equipe" },
  { id: "encerramento", label: "Encerramento" },
]

function slideIndex(id: string) {
  return SLIDE_META.findIndex((s) => s.id === id)
}

export function SlideCover() {
  return (
    <Slide id="capa" index={slideIndex("capa")} className="items-center text-center">
      <Grid />
      <Glow className="-top-40 -left-40 size-[34rem] bg-emerald-500/20" />
      <Glow className="bottom-0 right-0 size-[28rem] bg-lime-400/10" />

      <Pill>
        Desafio: Monitoramento Tecnológico e Indicadores de Qualidade Ambiental
      </Pill>

      <h1 className="mt-8 flex items-center gap-4 text-7xl font-extrabold tracking-tight text-emerald-950 sm:text-9xl">
        <Leaf className="size-12 text-emerald-600 sm:size-16" />
        VERDE
      </h1>

      <p className="mt-4 max-w-2xl text-balance text-xl font-medium text-emerald-800/90 sm:text-2xl">
        Visão Estratégica para Resiliência, Dados e Ecossistemas
      </p>

      <p className="mt-6 max-w-xl text-balance text-base text-emerald-700/60 sm:text-lg">
        O gêmeo digital ambiental de Uberlândia — bairro por bairro, decisão por
        decisão.
      </p>
    </Slide>
  )
}

export function SlideProblem() {
  const items = [
    {
      icon: Building2,
      title: "Expansão sem controle do solo",
      text: "A cidade cresce e impermeabiliza solo mais rápido do que a infraestrutura de drenagem consegue acompanhar.",
    },
    {
      icon: CloudRain,
      title: "Enchentes recorrentes",
      text: "Pontos críticos da malha viária alagam nas mesmas chuvas, ano após ano, sem um diagnóstico contínuo do porquê.",
    },
    {
      icon: Thermometer,
      title: "Ilhas de calor",
      text: "Corredores comerciais e industriais concentram asfalto, baixa cobertura vegetal e temperaturas muito acima da média.",
    },
    {
      icon: Database,
      title: "Dados fragmentados",
      text: "Imagens de satélite, sensores e cadastros públicos existem — mas em silos, sem um indicador único por bairro.",
    },
  ]

  return (
    <Slide id="problema" index={slideIndex("problema")}>
      <Glow className="top-1/3 right-0 size-[26rem] bg-amber-500/10" />

      <SlideHeading
        kicker="O problema"
        title="Uberlândia cresce mais rápido do que sua capacidade de enxergar os riscos ambientais"
      />

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 print:grid-cols-4">
        {items.map((item) => (
          <Card key={item.title}>
            <item.icon className="size-6 text-emerald-600" />
            <h3 className="mt-4 text-lg font-semibold text-emerald-950">
              {item.title}
            </h3>
            <p className="mt-2 text-base leading-relaxed text-emerald-700/60">
              {item.text}
            </p>
          </Card>
        ))}
      </div>

      <p className="mt-10 max-w-2xl text-xl font-medium text-emerald-800/80">
        A Prefeitura tem muitos dados — e nenhum índice que os una.
      </p>
    </Slide>
  )
}

export function SlideInsight() {
  return (
    <Slide id="insight" index={slideIndex("insight")}>
      <Glow className="-bottom-32 left-1/4 size-[30rem] bg-teal-500/10" />

      <SlideHeading
        kicker="O insight"
        title="Um número que a hidrologia usa há décadas pode virar o termômetro ambiental da cidade"
        description="O coeficiente de escoamento (C) mede quanto da água da chuva escorre pela superfície em vez de infiltrar no solo. O VERDE inverte sua lógica tradicional: em vez de calculá-lo só para projetar galerias pluviais, usa o C por bairro como indicador vivo de saúde ambiental urbana."
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_auto_1fr] lg:items-center print:grid-cols-[1fr_auto_1fr] print:items-center">
        <Card className="border-emerald-400/30 bg-emerald-400/5">
          <Sprout className="size-6 text-emerald-600" />
          <p className="mt-3 text-base font-semibold uppercase tracking-wide text-emerald-700">
            C baixo · 0,05–0,20
          </p>
          <p className="mt-1 text-xl font-semibold text-emerald-950">
            Solo permeável e vegetado
          </p>
          <p className="mt-2 text-base text-emerald-700/60">
            Mais infiltração, menos escoamento, menos calor retido.
          </p>
        </Card>

        <div className="flex items-center justify-center gap-3 text-emerald-700/60">
          <Gauge className="size-8" />
          <span className="font-mono text-base">Q = C · i · A</span>
        </div>

        <Card className="border-amber-400/30 bg-amber-400/5">
          <Layers className="size-6 text-amber-600" />
          <p className="mt-3 text-base font-semibold uppercase tracking-wide text-amber-700">
            C alto · 0,70–0,95
          </p>
          <p className="mt-1 text-xl font-semibold text-emerald-950">
            Solo impermeabilizado
          </p>
          <p className="mt-2 text-base text-emerald-700/60">
            Mais escoamento, mais risco de enchente e mais ilha de calor.
          </p>
        </Card>
      </div>
    </Slide>
  )
}

export function SlideSolution() {
  const features = [
    {
      icon: Satellite,
      title: "Mapeamento contínuo",
      text: "Imagens de satélite classificam cobertura do solo: vegetação, pavimento, água.",
    },
    {
      icon: Thermometer,
      title: "Sensoriamento ambiental",
      text: "Sensores de temperatura, umidade e chuva complementam e calibram o que vem do satélite.",
    },
    {
      icon: Database,
      title: "Dados públicos integrados",
      text: "IBGE, plano diretor de drenagem e malha da Prefeitura entram no mesmo modelo.",
    },
    {
      icon: Sprout,
      title: "Simulador de intervenções",
      text: "Testa o impacto de arborização, pavimento permeável e mais antes de qualquer obra.",
    },
  ]

  return (
    <Slide id="solucao" index={slideIndex("solucao")}>
      <Glow className="top-0 left-0 size-[28rem] bg-emerald-500/15" />

      <SlideHeading
        kicker="A solução"
        title="VERDE: o gêmeo digital ambiental de Uberlândia"
        description="Uma plataforma que cruza imagens de satélite, sensores ambientais e dados públicos para gerar, em tempo quase real, a classificação de risco ambiental de cada bairro — com o coeficiente de escoamento (C) como eixo central."
      />

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 print:grid-cols-4">
        {features.map((feature) => (
          <Card key={feature.title}>
            <feature.icon className="size-6 text-emerald-600" />
            <h3 className="mt-4 text-lg font-semibold text-emerald-950">
              {feature.title}
            </h3>
            <p className="mt-2 text-base leading-relaxed text-emerald-700/60">
              {feature.text}
            </p>
          </Card>
        ))}
      </div>

      <Link
        href="/"
        className="mt-10 inline-flex items-center gap-2 self-start text-base font-medium text-emerald-700 underline-offset-4 hover:underline"
      >
        Ver protótipo do mapa interativo
        <ArrowRight className="size-4" />
      </Link>
    </Slide>
  )
}

export function SlideHowItWorks() {
  const steps = [
    {
      icon: Database,
      title: "1. Coleta",
      text: "Imagens de satélite (NDVI/NDBI), sensores IoT e dados públicos — IBGE, plano diretor de drenagem, malha da Prefeitura.",
    },
    {
      icon: Layers,
      title: "2. Processamento",
      text: "Visão computacional classifica a cobertura do solo: permeável, impermeável, vegetação e corpos d'água.",
    },
    {
      icon: Gauge,
      title: "3. Cálculo",
      text: "Coeficiente de escoamento ponderado por sub-bacia, cruzado com temperatura de superfície e histórico de alagamentos.",
    },
    {
      icon: Network,
      title: "4. Classificação & simulação",
      text: "Classificação de risco por bairro e simulador de intervenções, disponíveis em um painel público.",
    },
  ]

  return (
    <Slide id="funcionamento" index={slideIndex("funcionamento")}>
      <Glow className="bottom-0 right-1/4 size-[26rem] bg-emerald-500/10" />

      <SlideHeading
        kicker="Como funciona"
        title="Da imagem de satélite ao indicador de bairro, em quatro camadas"
      />

      <div className="mt-10 grid gap-4 lg:grid-cols-4 print:grid-cols-4">
        {steps.map((step, i) => (
          <div key={step.title} className="relative">
            <Card className="h-full">
              <step.icon className="size-6 text-emerald-600" />
              <h3 className="mt-4 text-lg font-semibold text-emerald-950">
                {step.title}
              </h3>
              <p className="mt-2 text-base leading-relaxed text-emerald-700/60">
                {step.text}
              </p>
            </Card>
            {i < steps.length - 1 ? (
              <ArrowRight className="absolute -right-3 top-1/2 hidden size-5 -translate-y-1/2 text-emerald-600/40 lg:block" />
            ) : null}
          </div>
        ))}
      </div>
    </Slide>
  )
}

export function SlideIndex() {
  const components = [
    {
      icon: Gauge,
      label: "Coeficiente de escoamento (C)",
      weight: "0 a 1, por bairro — eixo central",
    },
    {
      icon: Layers,
      label: "Classificação de risco",
      weight: "4 níveis, do C: Excelente → Crítica",
    },
    {
      icon: Droplets,
      label: "Volume estimado de escoamento",
      weight: "litros em chuva forte, por bairro",
    },
    {
      icon: TreePine,
      label: "Cobertura vegetal e temperatura",
      weight: "próxima camada do índice (roadmap)",
    },
  ]

  return (
    <Slide id="indice" index={slideIndex("indice")}>
      <Glow className="-top-24 right-0 size-[28rem] bg-lime-400/10" />

      <SlideHeading
        kicker="Classificação de risco"
        title="Hoje, o protótipo já classifica cada bairro por nível de risco"
        description="O coeficiente de escoamento (C) de cada bairro é convertido em uma classificação de 4 níveis e em um volume estimado de água escoada — visível agora no mapa interativo. Cobertura vegetal e temperatura de superfície são a próxima camada do índice."
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_1fr] print:grid-cols-[1.2fr_1fr]">
        <div className="grid gap-4 sm:grid-cols-2 print:grid-cols-2">
          {components.map((c) => (
            <Card key={c.label} className="flex flex-row items-start gap-3">
              <c.icon className="mt-1 size-5 shrink-0 text-emerald-600" />
              <div>
                <p className="text-base font-semibold text-emerald-950">{c.label}</p>
                <p className="text-sm text-emerald-700/60">{c.weight}</p>
              </div>
            </Card>
          ))}
        </div>

        <Card className="flex flex-col items-center justify-center gap-3 border-emerald-400/30 bg-emerald-400/5 text-center">
          <p className="text-sm uppercase tracking-wide text-emerald-700">
            Escala usada no mapa interativo
          </p>
          <div className="mt-2 flex w-full flex-col gap-3 text-left">
            {COEFFICIENT_LEGEND.map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between gap-3 text-base"
              >
                <span className="flex items-center gap-2 font-semibold text-emerald-950">
                  <span
                    className="size-3 shrink-0 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  {item.label}
                </span>
                <span className="font-mono text-sm text-emerald-700/60">
                  C {item.range}
                </span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </Slide>
  )
}

export function SlideCaseStudy() {
  const metrics = [
    { label: "Coeficiente de escoamento (C)", value: "0,82", tone: "text-rose-700" },
    { label: "Classificação", value: "Crítica", tone: "text-rose-700" },
    {
      label: "Volume estimado por chuva forte",
      value: "73,8 milhões de L",
      tone: "text-rose-700",
    },
  ]

  return (
    <Slide id="caso" index={slideIndex("caso")}>
      <Glow className="bottom-0 left-0 size-[28rem] bg-rose-500/10" />

      <SlideHeading
        kicker="Estudo de caso"
        title="Avenida Rondon Pacheco: o corredor onde o problema fica visível"
        description="Grande volume de pavimento (via larga, estacionamentos comerciais), pouca arborização e relatos recorrentes de alagamento pontual nas chuvas mais fortes — um cenário típico de C alto e classificação crítica. Dado real do protótipo: bairro Tabajaras, no início do corredor."
      />

      <div className="mt-10 grid gap-4 sm:grid-cols-3 print:grid-cols-3">
        {metrics.map((m) => (
          <Card key={m.label}>
            <p className="text-sm uppercase tracking-wide text-emerald-700/50">
              {m.label}
            </p>
            <p className={`mt-2 text-4xl font-bold ${m.tone}`}>{m.value}</p>
          </Card>
        ))}
      </div>

      <p className="mt-6 text-sm text-emerald-700/40">
        Dados extraídos do protótipo VERDE. O C ainda é uma estimativa por uso do
        solo — a calibração com sensores e satélite reais é a próxima fase.
      </p>
    </Slide>
  )
}

export function SlideSimulations() {
  const interventions = [
    {
      icon: TreePine,
      title: "Arborização urbana",
      text: "Mais copa e sombreamento aumentam a evapotranspiração e reduzem o escoamento direto.",
    },
    {
      icon: Layers,
      title: "Pavimento permeável",
      text: "Substituição de asfalto em vias locais e estacionamentos permite infiltração no lugar do escoamento.",
    },
    {
      icon: Droplets,
      title: "Jardins de chuva",
      text: "Retêm e infiltram água pluvial localmente, amortecendo picos de vazão nos pontos críticos.",
    },
    {
      icon: Waves,
      title: "Reservatórios de detenção",
      text: "Amortecem picos de cheia na microbacia, reduzindo o risco de alagamento a jusante.",
    },
    {
      icon: Bus,
      title: "Ônibus elétricos",
      text: "Reduzem calor residual e poluentes, melhorando o conforto térmico e a qualidade do ar dos bairros.",
    },
  ]

  return (
    <Slide id="simulacoes" index={slideIndex("simulacoes")}>
      <Grid />
      <Glow className="top-0 right-0 size-[26rem] bg-emerald-500/10" />

      <SlideHeading
        kicker="Simulação de cenários"
        title="Antes de qualquer obra, simule o impacto"
        description="O simulador do VERDE projeta o efeito de cada intervenção sobre o coeficiente de escoamento e a classificação de risco — para priorizar investimento onde o ganho ambiental é maior."
      />

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5 print:grid-cols-5">
        {interventions.map((item) => (
          <Card key={item.title}>
            <item.icon className="size-6 text-emerald-600" />
            <h3 className="mt-4 text-base font-semibold text-emerald-950">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-emerald-700/60">
              {item.text}
            </p>
          </Card>
        ))}
      </div>
    </Slide>
  )
}

export function SlideResults() {
  return (
    <Slide id="resultado" index={slideIndex("resultado")}>
      <Glow className="-bottom-20 left-1/3 size-[30rem] bg-emerald-500/15" />

      <SlideHeading
        kicker="Resultado projetado"
        title="Rondon Pacheco com o pacote completo de intervenções"
        description="Simulação combinando arborização, pavimento permeável e jardins de chuva ao longo do corredor."
      />

      <div className="mt-10 grid gap-6 sm:grid-cols-2 print:grid-cols-2">
        <Card className="border-rose-400/20 bg-rose-400/5">
          <p className="text-sm uppercase tracking-wide text-rose-700">Antes (Tabajaras)</p>
          <div className="mt-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-base text-emerald-800/70">Coeficiente C</span>
              <span className="font-mono text-xl font-semibold text-emerald-950">0,82</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-base text-emerald-800/70">Classificação</span>
              <span className="text-base font-semibold text-rose-700">Crítica</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-base text-emerald-800/70">Risco de alagamento</span>
              <span className="text-base font-semibold text-rose-700">Alto</span>
            </div>
          </div>
        </Card>

        <Card className="border-emerald-400/30 bg-emerald-400/5">
          <p className="text-sm uppercase tracking-wide text-emerald-700">Depois (projetado)</p>
          <div className="mt-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-base text-emerald-800/70">Coeficiente C</span>
              <span className="flex items-center gap-1 font-mono text-xl font-semibold text-emerald-950">
                0,55 <TrendingDown className="size-4 text-emerald-600" />
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-base text-emerald-800/70">Classificação</span>
              <span className="flex items-center gap-1 text-base font-semibold text-emerald-700">
                Atenção <TrendingUp className="size-4 text-emerald-600" />
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-base text-emerald-800/70">Risco de alagamento</span>
              <span className="text-base font-semibold text-emerald-700">Moderado</span>
            </div>
          </div>
        </Card>
      </div>

      <p className="mt-6 text-sm text-emerald-700/40">
        Projeção ilustrativa do modelo, a ser validada com dados de campo na fase
        piloto.
      </p>
    </Slide>
  )
}

export function SlideImpact() {
  const items = [
    {
      icon: ShieldCheck,
      title: "Para a gestão pública",
      text: "Prioriza obras com base em dados contínuos, não em reclamações pontuais.",
    },
    {
      icon: Users,
      title: "Para a população",
      text: "Menos enchentes, menos calor extremo, mais qualidade de vida nos bairros.",
    },
    {
      icon: TrendingDown,
      title: "Para o orçamento",
      text: "Prevenção guiada por dados custa menos do que resposta a desastres.",
    },
    {
      icon: Database,
      title: "Para a ciência",
      text: "Série histórica ambiental aberta para pesquisa e planejamento urbano.",
    },
  ]

  return (
    <Slide id="impacto" index={slideIndex("impacto")}>
      <Glow className="top-1/4 left-0 size-[26rem] bg-teal-500/10" />

      <SlideHeading kicker="Impacto" title="Por que isso importa para Uberlândia" />

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 print:grid-cols-4">
        {items.map((item) => (
          <Card key={item.title}>
            <item.icon className="size-6 text-emerald-600" />
            <h3 className="mt-4 text-lg font-semibold text-emerald-950">
              {item.title}
            </h3>
            <p className="mt-2 text-base leading-relaxed text-emerald-700/60">
              {item.text}
            </p>
          </Card>
        ))}
      </div>
    </Slide>
  )
}

export function SlideFuture() {
  const phases = [
    {
      title: "Fase 1 · Piloto",
      text: "Bairros críticos, começando pela Rondon Pacheco, com dados de campo validando o modelo.",
    },
    {
      title: "Fase 2 · Cobertura municipal",
      text: "Todos os bairros de Uberlândia, com API aberta para pesquisadores e equipes da Prefeitura.",
    },
    {
      title: "Fase 3 · Gêmeo digital completo",
      text: "Integração com o plano diretor, alertas em tempo real e simulação contínua de cenários climáticos.",
    },
  ]

  return (
    <Slide id="futuro" index={slideIndex("futuro")}>
      <Glow className="bottom-0 right-0 size-[28rem] bg-emerald-500/15" />

      <SlideHeading
        kicker="Visão de futuro"
        title="De um índice por bairro ao gêmeo digital ambiental da cidade"
      />

      <div className="mt-10 grid gap-4 lg:grid-cols-3 print:grid-cols-3">
        {phases.map((phase, i) => (
          <Card key={phase.title} className="relative">
            <span className="flex size-8 items-center justify-center rounded-full border border-emerald-400/30 text-base font-semibold text-emerald-700">
              {i + 1}
            </span>
            <h3 className="mt-4 text-lg font-semibold text-emerald-950">
              {phase.title}
            </h3>
            <p className="mt-2 text-base leading-relaxed text-emerald-700/60">
              {phase.text}
            </p>
          </Card>
        ))}
      </div>
    </Slide>
  )
}

export function SlideTeam() {
  const members = [
    {
      name: "Eduardo Machado Rezende",
      role: "Desenvolvedor de software",
      formation: "Ciência da Computação · IFTM",
    },
    {
      name: "Pedro Henrique",
      role: "Engenharia Ambiental",
      formation: "UFU",
    },
    {
      name: "Adalberto Caldeira",
      role: "Sistema de Informação",
      formation: "UFU",
    },
  ]

  return (
    <Slide id="equipe" index={slideIndex("equipe")}>
      <Glow className="top-0 left-1/4 size-[28rem] bg-emerald-500/15" />

      <SlideHeading kicker="Equipe" title="Quem está por trás do VERDE" />

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 print:grid-cols-3">
        {members.map((member) => (
          <Card key={member.name}>
            <GraduationCap className="size-6 text-emerald-600" />
            <h3 className="mt-4 text-lg font-semibold text-emerald-950">
              {member.name}
            </h3>
            <p className="mt-2 text-base leading-relaxed text-emerald-700/60">
              {member.role}
            </p>
            <p className="mt-1 text-sm uppercase tracking-wide text-emerald-700/40">
              {member.formation}
            </p>
          </Card>
        ))}
      </div>
    </Slide>
  )
}

export function SlideClosing() {
  return (
    <Slide
      id="encerramento"
      index={slideIndex("encerramento")}
      className="items-center text-center"
    >
      <Grid />
      <Glow className="-top-32 left-1/2 size-[34rem] -translate-x-1/2 bg-emerald-500/20" />

      <Target className="size-10 text-emerald-600" />

      <h2 className="mt-6 max-w-3xl text-balance text-4xl font-bold leading-tight text-emerald-950 sm:text-6xl">
        VERDE: o ecossistema de dados que Uberlândia precisa para crescer sem
        perder seu equilíbrio
      </h2>

      <p className="mt-6 max-w-xl text-balance text-emerald-800/70">
        Convidamos a banca a caminhar com a gente da vistoria pontual para o
        monitoramento contínuo.
      </p>

      <Link
        href="/"
        className="mt-10 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-5 py-2.5 text-base font-medium text-emerald-800 transition-colors hover:bg-emerald-400/20"
      >
        Ver protótipo interativo
        <ArrowRight className="size-4" />
      </Link>

      <p className="mt-10 text-sm uppercase tracking-[0.25em] text-emerald-600/50">
        Obrigado
      </p>
    </Slide>
  )
}
