'use client'

import { useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  ArrowRight,
  BookOpenText,
  BrainCircuit,
  BriefcaseBusiness,
  ChevronRight,
  DatabaseZap,
  FlaskConical,
  Github,
  Mail,
  Network,
  Newspaper,
  PenTool,
  Rocket,
  Sparkles,
  TerminalSquare,
  WandSparkles,
} from 'lucide-react'
import { cn } from '@/lib/utils'

const tabs = [
  {
    id: 'studio',
    label: 'Positioning',
    icon: Sparkles,
    eyebrow: 'AI systems builder',
    title: 'A portfolio of reliable AI systems, research, and field notes.',
    description:
      'I build reliable GenAI systems, applied ML workflows, and research-backed tools for teams that need clarity, trust, and practical advantage.',
    accent: 'bg-[#c8ff5a]',
    wash: 'from-[#f7eefc] via-[#fff8fd] to-[#eef9ff]',
  },
  {
    id: 'systems',
    label: 'Systems',
    icon: Network,
    eyebrow: 'Architecture',
    title: 'Systems that survive beyond the demo.',
    description:
      'Retrieval, orchestration, data quality, evaluation, latency, compliance, and the operational workflow around the model.',
    accent: 'bg-[#7cf4dc]',
    wash: 'from-[#effdff] via-[#fff8fd] to-[#f7eefc]',
  },
  {
    id: 'notes',
    label: 'Research',
    icon: BookOpenText,
    eyebrow: 'Research and writing',
    title: 'Applied research made practical.',
    description:
      'Research papers, technical essays, and implementation notes on RAG, LangGraph, fairness, and self-healing ML operations.',
    accent: 'bg-[#ff83d8]',
    wash: 'from-[#fff0fb] via-[#fff8fd] to-[#f7eefc]',
  },
  {
    id: 'newsletters',
    label: 'Newsletters',
    icon: Newspaper,
    eyebrow: 'Essays and field notes',
    title: 'Readable notes from production AI work.',
    description:
      'Follow longer essays on Medium or subscribe on Substack for practical notes on AI systems and engineering judgment.',
    accent: 'bg-[#a56cff]',
    wash: 'from-[#f7eefc] via-[#fff8fd] to-[#fff6df]',
  },
  {
    id: 'contact',
    label: 'Contact',
    icon: Mail,
    eyebrow: 'Collaboration',
    title: 'Open to thoughtful, ambitious AI work.',
    description:
      'Available for leadership roles, advisory conversations, and collaborations where production quality matters.',
    accent: 'bg-[#ffd15a]',
    wash: 'from-[#fff7dd] via-[#fff8fd] to-[#effdff]',
  },
] as const

type TabId = (typeof tabs)[number]['id']

const studioCards = [
  {
    icon: WandSparkles,
    title: 'Creative AI Builder',
    text: 'Useful AI should feel clear, trustworthy, and natural to use.',
  },
  {
    icon: Rocket,
    title: 'Production Mindset',
    text: 'Reliability, adoption, observability, and clean interfaces matter.',
  },
  {
    icon: FlaskConical,
    title: 'Research to Reality',
    text: 'Papers, prototypes, and experiments become usable systems.',
  },
]

const systems = [
  {
    icon: BrainCircuit,
    title: 'LLM Orchestration',
    text: 'LangChain, LangGraph, Bedrock, OpenAI, agents, routing, and evaluation loops.',
  },
  {
    icon: DatabaseZap,
    title: 'Data Foundations',
    text: 'Spark, Databricks, Snowflake, Kafka, feature pipelines, and retrieval layers.',
  },
  {
    icon: TerminalSquare,
    title: 'Production MLOps',
    text: 'Python, FastAPI, Docker, Kubernetes, MLflow, monitoring, latency, and releases.',
  },
]

const researchLinks = [
  {
    title: 'Self-Healing ML Pipeline',
    href: 'https://github.com/yenugah80/Self-Healing-ML-Pipeline',
    tag: 'Research Paper',
    external: true,
  },
  {
    title: 'ML Bias Mitigation in Hiring',
    href: '/blog/ml-bias-mitigation-hiring',
    tag: 'Research Paper',
  },
  {
    title: 'LangGraph Multi-Agent Systems',
    href: '/blog/langgraph-multi-agent-systems',
    tag: 'Agents',
  },
  {
    title: 'Building Production RAG Systems',
    href: '/blog/building-production-rag-systems',
    tag: 'RAG',
  },
]

const newsletterLinks = [
  {
    icon: Newspaper,
    title: 'Substack',
    text: 'Field notes on production AI, systems thinking, and engineering judgment.',
    href: 'https://substack.com/@harikayenuga',
  },
  {
    icon: PenTool,
    title: 'Medium',
    text: 'Essays, technical breakdowns, and reflections on AI engineering.',
    href: 'https://harikayenuga.medium.com',
  },
]

const journeys = [
  {
    company: "Macy's",
    role: 'Lead AI Engineer',
    copy: 'Building GenAI platforms and RAG workflows for retail operations.',
  },
  {
    company: 'Bank of America',
    role: 'Senior AI Engineer',
    copy: 'Built fraud detection systems and analyst tooling for financial decisioning.',
  },
  {
    company: 'Apple',
    role: 'AI Engineer',
    copy: 'Improved demand forecasting and ML workflows across large transaction volumes.',
  },
]

const cardBase =
  'group relative min-w-0 overflow-hidden rounded-[1.25rem] border border-[#230a2f]/10 bg-white/82 p-5 shadow-[0_18px_50px_rgba(35,10,47,0.08)] backdrop-blur-sm transition'

gsap.registerPlugin(ScrollTrigger)

const reveal = {
  hidden: { opacity: 0, y: 18, filter: 'blur(6px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

function AnimatedSystemModel() {
  const architectureNodes = [
    { label: 'Product', detail: 'question', x: 'left-8', y: 'top-[92px]', color: 'bg-[#ffd15a]' },
    { label: 'Knowledge', detail: 'context', x: 'left-[38%]', y: 'top-[54px]', color: 'bg-[#7cf4dc]' },
    { label: 'Intelligence', detail: 'agents', x: 'right-8', y: 'top-[118px]', color: 'bg-[#a56cff]' },
    { label: 'Trust', detail: 'evals', x: 'left-[24%]', y: 'bottom-[112px]', color: 'bg-[#ff83d8]' },
    { label: 'Production', detail: 'release', x: 'right-[18%]', y: 'bottom-[86px]', color: 'bg-[#c8ff5a]' },
  ]

  return (
    <div className="gsap-tilt-card relative min-h-[430px] overflow-hidden rounded-[1.75rem] border border-white/16 bg-[#230a2f] shadow-[0_34px_90px_rgba(35,10,47,0.28)] sm:min-h-[390px]">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.09)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.09)_1px,transparent_1px)] bg-[size:44px_44px]" />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(158,74,217,0.34),transparent_34%),linear-gradient(315deg,rgba(124,244,220,0.18),transparent_42%)]" />
      <motion.div
        className="absolute right-8 top-8 h-28 w-28 rounded-[2rem] bg-[#9e4ad9]/55 blur-2xl"
        animate={{ scale: [1, 1.12, 1], opacity: [0.6, 0.9, 0.6] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="absolute inset-x-6 top-6 flex items-center gap-2">
        <span className="h-3 w-3 rounded-full bg-[#ff6f61]" />
        <span className="h-3 w-3 rounded-full bg-[#ffbe4d]" />
        <span className="h-3 w-3 rounded-full bg-[#5ed8b8]" />
      </div>

      <div className="absolute left-6 top-16 hidden rounded-full border border-white/18 bg-white/12 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[#f7eefc] backdrop-blur sm:block">
        Live architecture map
      </div>

      <div className="architecture-energy hidden sm:block" aria-hidden="true">
        <span className="bolt white" />
        <span className="bolt coral" />
        <span className="burst">
          <span className="shape circle" />
          <span className="shape circle big" />
          <span className="shape disc" />
          <span className="shape triangle" />
          <span className="shape triangle big" />
        </span>
        <span className="burst second">
          <span className="shape circle" />
          <span className="shape circle big" />
          <span className="shape disc" />
          <span className="shape triangle" />
          <span className="shape triangle big" />
        </span>
      </div>

      <div className="absolute inset-x-5 bottom-32 top-20 grid grid-cols-2 content-start gap-2 sm:hidden">
        {architectureNodes.map((node) => (
          <div
            key={node.label}
            className="flex items-center gap-3 rounded-[1rem] border border-white/24 bg-[#fff8fd] p-3 shadow-[0_12px_30px_rgba(0,0,0,0.14)]"
          >
            <span className={cn('h-8 w-2 rounded-full', node.color)} />
            <span>
              <span className="block text-sm font-black leading-tight text-[#230a2f]">{node.label}</span>
              <span className="text-xs font-bold uppercase tracking-[0.1em] text-[#7b6785]">{node.detail}</span>
            </span>
          </div>
        ))}
      </div>

      <div className="absolute inset-x-5 bottom-28 top-24 hidden sm:block sm:bottom-32">
        <svg className="absolute inset-0 h-full w-full" aria-hidden="true" viewBox="0 0 600 260" preserveAspectRatio="none">
          <motion.path
            d="M78 92 C180 20 260 48 328 70 C405 96 430 130 518 120"
            fill="none"
            stroke="rgba(255,255,255,0.32)"
            strokeWidth="2"
            strokeDasharray="8 10"
            animate={{ strokeDashoffset: [0, -36] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
          />
          <motion.path
            d="M135 92 C162 175 245 204 326 164 C384 136 430 198 488 178"
            fill="none"
            stroke="rgba(94,216,184,0.42)"
            strokeWidth="2"
            strokeDasharray="8 10"
            animate={{ strokeDashoffset: [0, -36] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
          />
        </svg>

        {architectureNodes.map((node, index) => (
          <motion.div
            key={node.label}
            className={cn(
              'absolute w-[118px] rounded-[1rem] border border-white/35 bg-[#fff8fd] p-3 shadow-[0_16px_42px_rgba(0,0,0,0.18)]',
              node.x,
              node.y
            )}
            animate={{ y: [0, index % 2 ? 5 : -5, 0] }}
            transition={{ duration: 4.5 + index * 0.35, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className={cn('mb-2 block h-2 w-10 rounded-full', node.color)} />
            <p className="text-sm font-black leading-tight text-[#230a2f]">{node.label}</p>
            <p className="mt-1 text-xs font-bold uppercase tracking-[0.1em] text-[#7b6785]">{node.detail}</p>
          </motion.div>
        ))}
      </div>

      <div className="absolute bottom-5 left-5 right-5 rounded-[1.25rem] border border-white/22 bg-[#fff8fd] p-4 shadow-xl backdrop-blur-md">
        <p className="text-sm font-bold text-[#230a2f]">Positioning map</p>
        <p className="mt-1 text-sm leading-6 text-[#6c5775]">
          Product context, intelligence, trust, and production release working as one system.
        </p>
      </div>
    </div>
  )
}

const tabPanels: Record<TabId, ReactNode> = {
  studio: (
    <motion.div variants={stagger} initial="hidden" animate="show" className="grid gap-4 md:grid-cols-3">
      {studioCards.map((card) => (
        <motion.div
          key={card.title}
          className={cardBase}
          variants={reveal}
          whileHover={{ y: -5 }}
          transition={{ type: 'spring', stiffness: 260, damping: 18 }}
        >
          <card.icon className="h-6 w-6 text-[#602ba8]" />
          <h3 className="mt-5 break-words font-serif text-xl font-semibold leading-tight text-[#230a2f]">
            {card.title}
          </h3>
          <p className="mt-3 text-sm leading-6 text-[#6c5775]">{card.text}</p>
        </motion.div>
      ))}
    </motion.div>
  ),
  systems: (
    <motion.div variants={stagger} initial="hidden" animate="show" className="grid gap-4 md:grid-cols-3">
      {systems.map((item) => (
        <motion.div
          key={item.title}
          variants={reveal}
          whileHover={{ y: -5, rotate: -0.4 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className={cn(cardBase, 'hover:bg-white')}
        >
          <item.icon className="h-6 w-6 text-[#602ba8]" />
          <h3 className="mt-5 break-words font-serif text-xl font-semibold leading-tight text-[#230a2f]">
            {item.title}
          </h3>
          <p className="mt-3 text-sm leading-6 text-[#6c5775]">{item.text}</p>
        </motion.div>
      ))}
    </motion.div>
  ),
  notes: (
    <motion.div variants={stagger} initial="hidden" animate="show" className="grid gap-3">
      {researchLinks.map((note) => (
        <motion.div key={note.href} variants={reveal} whileHover={{ x: 4 }} transition={{ type: 'spring', stiffness: 280, damping: 22 }}>
        <Link
          key={note.href}
          href={note.href}
          target={note.external ? '_blank' : undefined}
          rel={note.external ? 'noopener noreferrer' : undefined}
          className="group flex items-center justify-between gap-4 rounded-2xl border border-[#230a2f]/10 bg-white/72 px-5 py-4 shadow-[0_14px_40px_rgba(35,10,47,0.06)] transition hover:-translate-y-1 hover:bg-white"
        >
          <span>
            <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#9e4ad9]">
              {note.tag}
            </span>
            <span className="mt-1 block break-words font-serif text-xl font-semibold leading-tight text-[#230a2f]">
              {note.title}
            </span>
          </span>
          <ChevronRight className="h-4 w-4 shrink-0 text-[#230a2f]/45 transition group-hover:translate-x-1 group-hover:text-[#230a2f]" />
        </Link>
        </motion.div>
      ))}
    </motion.div>
  ),
  newsletters: (
    <motion.div variants={stagger} initial="hidden" animate="show" className="grid gap-4 md:grid-cols-2">
      {newsletterLinks.map((item) => (
        <motion.a
          key={item.title}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(cardBase, 'min-h-48 hover:-translate-y-1 hover:bg-white')}
          variants={reveal}
          whileHover={{ y: -5, rotate: item.title === 'Substack' ? -0.5 : 0.5 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        >
          <item.icon className="h-7 w-7 text-[#9e4ad9]" />
          <h3 className="mt-7 break-words font-serif text-3xl font-semibold leading-tight text-[#230a2f]">
            {item.title}
          </h3>
          <p className="mt-3 text-sm leading-6 text-[#6c5775]">{item.text}</p>
          <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#230a2f]">
            Open channel
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </span>
        </motion.a>
      ))}
    </motion.div>
  ),
  contact: (
    <motion.div variants={stagger} initial="hidden" animate="show" className="grid gap-4 md:grid-cols-3">
      {[
        { icon: BriefcaseBusiness, label: 'View Work', href: '/work' },
        { icon: Mail, label: 'Start a Conversation', href: '/contact' },
        { icon: PenTool, label: 'Read Writing', href: '/blog' },
      ].map((item) => (
        <motion.div key={item.href} variants={reveal} whileHover={{ y: -5 }} transition={{ type: 'spring', stiffness: 260, damping: 20 }}>
        <Link key={item.href} href={item.href} className={cn(cardBase, 'hover:-translate-y-1')}>
          <item.icon className="h-6 w-6 text-[#602ba8]" />
          <span className="mt-8 flex items-center justify-between gap-3 font-serif text-xl font-semibold leading-tight text-[#230a2f]">
            {item.label}
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </span>
        </Link>
        </motion.div>
      ))}
    </motion.div>
  ),
}

function TabDock({
  activeTab,
  onSelect,
}: {
  activeTab: TabId
  onSelect: (tab: TabId) => void
}) {
  return (
    <div className="flex w-full gap-2 overflow-x-auto rounded-[1.35rem] border border-[#230a2f]/10 bg-white/86 p-2 shadow-[0_18px_45px_rgba(35,10,47,0.08)] backdrop-blur-md">
      {tabs.map((tab) => {
        const Icon = tab.icon
        const selected = activeTab === tab.id

        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => onSelect(tab.id)}
            className={cn(
              'group relative flex shrink-0 items-center gap-2 rounded-xl px-4 py-3 text-left text-sm font-semibold transition duration-300',
              selected
                ? 'bg-[#230a2f] text-[#fff8fd] shadow-[0_12px_30px_rgba(35,10,47,0.18)]'
                : 'text-[#6c5775] hover:bg-[#f7eefc] hover:text-[#230a2f]'
            )}
            aria-pressed={selected}
          >
            <Icon className="h-4 w-4" />
            <span className="whitespace-nowrap">{tab.label}</span>
          </button>
        )
      })}
    </div>
  )
}

export function PortfolioStudio() {
  const [activeTab, setActiveTab] = useState<TabId>('studio')
  const active = tabs.find((tab) => tab.id === activeTab) ?? tabs[0]
  const rootRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!rootRef.current) return

    const context = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.gsap-window').forEach((section, index) => {
        gsap.fromTo(
          section,
          {
            autoAlpha: 0,
            xPercent: index % 2 === 0 ? -7 : 7,
            y: 34,
            rotateX: 4,
          },
          {
            autoAlpha: 1,
            xPercent: 0,
            y: 0,
            rotateX: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 82%',
              end: 'bottom 25%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      })

      gsap.utils.toArray<HTMLElement>('.gsap-slide-card').forEach((card, index) => {
        gsap.fromTo(
          card,
          { autoAlpha: 0, y: 28, scale: 0.96 },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            delay: (index % 3) * 0.06,
            ease: 'back.out(1.35)',
            scrollTrigger: {
              trigger: card,
              start: 'top 88%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      })

      gsap.to('.gsap-tilt-card', {
        y: -12,
        rotateY: -2.5,
        rotateX: 1.5,
        ease: 'none',
        scrollTrigger: {
          trigger: '.gsap-tilt-card',
          start: 'top 75%',
          end: 'bottom top',
          scrub: 1,
        },
      })
    }, rootRef)

    return () => context.revert()
  }, [])

  return (
    <main ref={rootRef} className="min-h-screen overflow-x-hidden bg-[#f7eefc] text-[#230a2f]">
      <section className={cn('gsap-window relative overflow-hidden bg-gradient-to-br px-5 pb-10 pt-24 sm:px-10 lg:px-14', active.wash)}>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(35,10,47,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(35,10,47,0.045)_1px,transparent_1px)] bg-[size:52px_52px]" />
        <div className="absolute right-0 top-24 h-64 w-64 rounded-full bg-[#9e4ad9]/10 blur-3xl" />
        <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 gap-5 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="gsap-slide-card min-w-0 rounded-[1.75rem] border border-[#230a2f]/10 bg-[#fff8fd]/90 p-5 shadow-[0_24px_70px_rgba(35,10,47,0.1)] backdrop-blur-md sm:p-7">
            <motion.p
              key={active.eyebrow}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.28 }}
              className="inline-flex rounded-full border border-[#602ba8]/15 bg-[#f7eefc] px-4 py-2 text-sm font-bold text-[#602ba8]"
            >
              {active.eyebrow}
            </motion.p>

            <motion.h1
              initial={false}
              className="mt-6 max-w-3xl break-words font-serif text-3xl font-semibold leading-[1.08] text-[#230a2f] sm:text-5xl lg:text-6xl"
            >
              <span className="block">Harika Yenuga</span>
              <span className="block">builds AI systems</span>
              <span className="block">people can trust.</span>
            </motion.h1>

            <p className="mt-5 max-w-2xl text-base leading-8 text-[#6c5775] sm:text-lg">
              I turn ambiguous GenAI ideas into evaluated products, research artifacts, and operational workflows that teams can actually use.
            </p>

            <div className="mt-7 grid gap-3 sm:flex sm:flex-row">
              <Link
                href="/work"
                className="playful-cta inline-flex items-center justify-center gap-2 rounded-xl bg-[#230a2f] px-5 py-3 text-sm font-semibold text-[#fff8fd] shadow-lg shadow-[#230a2f]/15 transition hover:-translate-y-0.5"
              >
                <span className="playful-spark" aria-hidden="true" />
                View work
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#230a2f]/15 bg-white px-5 py-3 text-sm font-semibold text-[#230a2f] transition hover:-translate-y-0.5 hover:bg-[#f7eefc]"
              >
                Start a conversation
              </Link>
            </div>

            <motion.div
              className="mt-7 grid gap-3 sm:grid-cols-3"
              variants={stagger}
              initial="hidden"
              animate="show"
            >
              {[
                ['RAG', 'retrieval'],
                ['Agents', 'orchestration'],
                ['MLOps', 'release loops'],
              ].map(([value, label]) => (
                <motion.div
                  key={label}
                  variants={reveal}
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                  className="gsap-slide-card rounded-[1.15rem] border border-[#230a2f]/10 bg-white p-4"
                >
                  <div className="font-serif text-2xl font-semibold text-[#230a2f]">{value}</div>
                  <div className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-[#7b6785]">{label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="grid min-w-0 gap-5">
            <AnimatedSystemModel />
            <motion.div
              className="grid gap-3 sm:grid-cols-3"
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
            >
              {[
                ['Research', 'papers and implementation notes', 'bg-[#fff0fb]'],
                ['Systems', 'production AI architecture', 'bg-[#effdff]'],
                ['Newsletters', 'Medium and Substack channels', 'bg-[#f7eefc]'],
              ].map(([title, copy, color]) => (
                <motion.div
                  key={title}
                  variants={reveal}
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                  className={cn('gsap-slide-card rounded-[1.25rem] border border-[#230a2f]/10 p-4 shadow-[0_12px_32px_rgba(35,10,47,0.06)]', color)}
                >
                  <p className="font-serif text-xl font-semibold leading-tight text-[#230a2f]">{title}</p>
                  <p className="mt-2 text-sm leading-6 text-[#6c5775]">{copy}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="gsap-window px-5 py-12 sm:px-10 lg:px-14">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
          >
            <TabDock activeTab={activeTab} onSelect={setActiveTab} />
          </motion.div>

          <motion.div
            className="mt-8 grid gap-8 lg:grid-cols-[0.42fr_1fr]"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
          >
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#9e4ad9]">
                {active.eyebrow}
              </p>
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.22 }}
                >
                  <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-[#230a2f]">
                    {active.title}
                  </h2>
                  <p className="mt-4 text-base leading-7 text-[#6c5775]">
                    {active.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 12, filter: 'blur(5px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -10, filter: 'blur(5px)' }}
                transition={{ duration: 0.22, ease: 'easeOut' }}
              >
                {tabPanels[active.id]}
              </motion.div>
            </AnimatePresence>
          </motion.div>

          <motion.div
            className="mt-10 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.18 }}
          >
            <motion.div
              variants={reveal}
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 240, damping: 22 }}
              className="gsap-slide-card rounded-3xl border border-[#230a2f]/10 bg-white/72 p-6 shadow-[0_18px_60px_rgba(35,10,47,0.07)]"
            >
              <div className="mb-5 flex items-center justify-between gap-4">
                <h2 className="font-serif text-2xl font-semibold text-[#230a2f]">Experience path</h2>
                <Link
                  href="/work"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#6c5775] transition hover:text-[#230a2f]"
                >
                  Work
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <motion.div className="grid gap-3" variants={stagger}>
                {journeys.map((item, index) => (
                  <motion.div
                    key={item.company}
                    variants={reveal}
                    whileHover={{ x: 4 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                    className="grid gap-3 rounded-2xl border border-[#230a2f]/10 bg-[#fff8fd]/74 p-4 transition hover:-translate-y-1 hover:bg-white sm:grid-cols-[150px_1fr]"
                  >
                    <div>
                      <p className="font-serif text-lg font-semibold leading-tight text-[#230a2f]">{item.company}</p>
                      <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#7b6785]">
                        {item.role}
                      </p>
                    </div>
                    <p className="text-sm leading-6 text-[#6c5775]">{item.copy}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              variants={reveal}
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 240, damping: 22 }}
              className="gsap-slide-card rounded-3xl border border-[#230a2f]/10 bg-white/72 p-6 shadow-[0_18px_60px_rgba(35,10,47,0.07)]"
            >
              <h2 className="font-serif text-2xl font-semibold text-[#230a2f]">
                Operating style
              </h2>
              <div className="mt-5 space-y-4 text-sm leading-7 text-[#6c5775]">
                <p>
                  I like AI work where the interface, data, model, and team ritual all improve together.
                </p>
                <p>
                  My lane is the messy middle: translating ambiguity into architectures that can be evaluated, shipped, monitored, and trusted.
                </p>
              </div>
              <motion.div className="mt-7 flex flex-wrap gap-2" variants={stagger}>
                {['RAG', 'LangGraph', 'MLOps', 'Retail AI', 'Fraud ML', 'Responsible AI'].map((tag) => (
                  <motion.span
                    key={tag}
                    variants={reveal}
                    whileHover={{ y: -2, scale: 1.03 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="rounded-full border border-[#230a2f]/10 bg-[#f7eefc] px-3 py-2 text-xs font-semibold text-[#6c5775]"
                  >
                    {tag}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
