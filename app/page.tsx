"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Reveal, StaggerGroup, StaggerItem } from "./components/Reveal";
import { SiteFooter } from "./components/SiteFooter";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const buzzwords = [
  "AMUSEMENT PARKS",
  "GAME ZONES",
  "CINEMAS",
  "LIVE EVENTS",
  "FESTIVALS",
  "EXPERIENCES",
];

const opportunities = [
  {
    title: "Parks & Attractions",
    description:
      "Theme parks, water parks, adventure and immersive attraction concepts built for the next generation of visitors.",
  },
  {
    title: "Gaming & Family Entertainment",
    description:
      "Arcades, VR zones, esports lounges and family entertainment centres designed to keep people coming back.",
    image: "/images/arcade-neon.jpg",
  },
  {
    title: "Cinema & Live Events",
    description:
      "Cinema experiences, stage shows, concerts and festival productions that turn moments into memories.",
    image: "/images/festival-crowd.jpg",
  },
  {
    title: "Seasonal & Lifestyle Trade",
    description:
      "Festive, celebration and lifestyle products moving at scale across fast-growing markets.",
  },
  {
    title: "Government & Institutional Projects",
    description:
      "Public leisure infrastructure, tourism development and large-scale institutional partnerships.",
  },
  {
    title: "What's Next",
    description:
      "New formats, new markets, new categories — built together with the partners who join us early.",
  },
];

const process = [
  {
    step: "01",
    title: "Connect",
    description:
      "Share your vision, land, market or capability — we'll explore where it fits.",
  },
  {
    step: "02",
    title: "Co-Create",
    description:
      "We bring the sourcing, execution and delivery network to shape a business plan together.",
  },
  {
    step: "03",
    title: "Launch",
    description:
      "From first deal to ongoing operations — we stay in the business with you, not just at the handoff.",
  },
];

export default function Home() {
  const reduce = useReducedMotion();

  return (
    <div className="flex flex-1 flex-col bg-navy text-white">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-navy/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold text-sm font-bold text-navy-deep">
              E7
            </span>
            <span className="text-lg font-semibold tracking-tight">
              E7 Entertainments
            </span>
          </div>
          <div className="flex items-center gap-6">
            <Link
              href="/about"
              className="hidden text-sm font-medium text-zinc-300 transition-colors hover:text-white sm:inline-block"
            >
              About
            </Link>
            <a
              href="mailto:partners@e7entertainments.com"
              className="rounded-full bg-gold px-5 py-2 text-sm font-semibold text-navy-deep transition-all duration-200 hover:scale-105 active:scale-95"
            >
              Become a Partner
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative flex items-center overflow-hidden pt-32 pb-20">
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/images/hero-ferris-wheel.jpg"
            alt=""
            fill
            priority
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/80 to-navy" />
          <motion.div
            className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-gold/20 blur-3xl"
            animate={
              reduce
                ? undefined
                : { x: [0, 40, 0], y: [0, 30, 0], scale: [1, 1.1, 1] }
            }
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute right-0 top-10 h-[28rem] w-[28rem] rounded-full bg-gold/10 blur-3xl"
            animate={
              reduce
                ? undefined
                : { x: [0, -30, 0], y: [0, 40, 0], scale: [1, 1.15, 1] }
            }
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative mx-auto max-w-4xl px-6 text-center"
        >
          <motion.span
            variants={item}
            className="inline-block rounded-full border border-gold/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold"
          >
            Now Building Founding Partnerships
          </motion.span>
          <motion.h1
            variants={item}
            className="mx-auto mt-6 max-w-3xl text-5xl font-bold leading-tight tracking-tight sm:text-7xl"
          >
            We build <span className="text-gold">your dreams</span>.
          </motion.h1>
          <motion.p
            variants={item}
            className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-zinc-300"
          >
            Amusement parks, game zones, events, lighting and entertainment
            trade — delivered across Asia, Africa, the Middle East and
            Europe.
          </motion.p>
          <motion.div
            variants={item}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              href="/contact"
              className="rounded-full bg-gold px-7 py-3 text-sm font-semibold text-navy-deep transition-all duration-200 hover:scale-105 active:scale-95"
            >
              Start Your Project
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Founder's Message */}
      <section className="border-y border-white/10 bg-white/[0.02] py-24">
        <Reveal className="mx-auto max-w-3xl px-6">
          <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-start">
            <span className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-gold text-2xl font-bold text-navy-deep">
              M
            </span>
            <div>
              <p className="font-serif text-xl italic leading-relaxed text-zinc-200 sm:text-2xl">
                &ldquo;Every great destination begins with one person&apos;s
                dream. For over two decades, I have built international
                businesses and delivered world-class projects across the
                globe. E7 Entertainments stands on one simple belief: joy is
                the world&apos;s greatest business. If you carry a dream, we
                will build it together.&rdquo;
              </p>
              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-gold">
                — Manimaran, Founder &amp; Chairman, E7 Entertainments Group
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Marquee */}
      <div className="overflow-hidden border-y border-white/10 bg-white/[0.03] py-4">
        <div className="marquee-track flex w-max gap-10 whitespace-nowrap text-sm font-semibold uppercase tracking-[0.2em] text-gold/70">
          {[...buzzwords, ...buzzwords].map((word, i) => (
            <span key={i} className="flex items-center gap-10">
              {word}
              <span className="text-white/20">•</span>
            </span>
          ))}
        </div>
      </div>

      {/* Opportunities */}
      <section id="opportunities" className="mx-auto max-w-6xl px-6 py-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            Where we&apos;re building
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            A portfolio of opportunities, one partnership away
          </h2>
          <p className="mt-4 text-zinc-400">
            We bring the sourcing, execution and delivery network. You bring
            the land, the market, or the vision. Together, we build.
          </p>
        </Reveal>

        <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {opportunities.map((opportunity) => (
            <StaggerItem
              key={opportunity.title}
              className="h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-colors hover:border-gold/30"
            >
              {opportunity.image && (
                <div className="relative h-40 w-full">
                  <Image
                    src={opportunity.image}
                    alt={opportunity.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-white">
                  {opportunity.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                  {opportunity.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      {/* Process */}
      <section className="border-y border-white/10 bg-white/[0.02] py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              How it works
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              From conversation to launch
            </h2>
          </Reveal>

          <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-3">
            {process.map((step) => (
              <StaggerItem
                key={step.step}
                className="rounded-2xl border border-white/10 bg-navy p-6"
              >
                <span className="text-4xl font-bold text-gold/40">
                  {step.step}
                </span>
                <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                  {step.description}
                </p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Let&apos;s build something people remember.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-zinc-400">
            If you have land, a market, a network, or just an idea worth
            building — we want to hear from you.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:partners@e7entertainments.com"
              className="rounded-full bg-gold px-7 py-3 text-sm font-semibold text-navy-deep transition-all duration-200 hover:scale-105 active:scale-95"
            >
              partners@e7entertainments.com
            </a>
          </div>
        </Reveal>
      </section>

      <SiteFooter />
    </div>
  );
}
