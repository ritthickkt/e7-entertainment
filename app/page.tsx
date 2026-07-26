"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { Reveal, StaggerGroup, StaggerItem } from "./components/Reveal";
import { SiteHeader } from "./components/SiteHeader";
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
  return (
    <div className="flex flex-1 flex-col bg-white text-ink">
      <SiteHeader />

      {/* Hero — full-bleed banner image with overlaid title */}
      <section className="relative flex min-h-[85vh] items-center overflow-hidden pt-24">
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/images/hero-ferris-wheel.jpg"
            alt=""
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-ink/55" />
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative mx-auto w-full max-w-7xl px-6 py-24 lg:px-10"
        >
          <motion.span
            variants={item}
            className="block font-display text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-gold"
          >
            Now Building Founding Partnerships
          </motion.span>
          <motion.h1
            variants={item}
            className="mt-6 max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            We build your dreams.
          </motion.h1>
          <motion.p
            variants={item}
            className="mt-8 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg"
          >
            Amusement parks, game zones, events, lighting and entertainment
            trade — delivered across Asia, Africa, the Middle East and Europe.
          </motion.p>
          <motion.div variants={item} className="mt-12 flex flex-wrap gap-4">
            <Link href="/contact" className="btn btn-solid">
              Start Your Project
            </Link>
            <Link href="/about" className="btn btn-ghost-light">
              About Us
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Intro statement */}
      <section className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
        <Reveal className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">Who We Are</p>
            <h2 className="rule-gold mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Transforming landscapes, enriching lives
            </h2>
          </div>
          <div className="space-y-6 text-base leading-relaxed text-ink-soft">
            <p>
              E7 Entertainments is the entertainment, leisure and lifestyle
              venture of an established multinational business group, backed by
              E7Tex Limited (Hong Kong), with group companies and partner
              networks operating internationally.
            </p>
            <p>
              From concept to grand opening — manufacturing, quality
              inspection, shipping, documentation and safe payments. We own
              every step, so you enjoy every result.
            </p>
            <Link
              href="/about"
              className="inline-block font-display text-xs font-semibold uppercase tracking-[0.18em] text-gold-ink underline decoration-gold decoration-1 underline-offset-8 transition-colors hover:text-ink"
            >
              Discover our story
            </Link>
          </div>
        </Reveal>
      </section>

      {/* Founder's Message */}
      <section className="bg-sand py-28">
        <Reveal className="mx-auto max-w-4xl px-6 text-center lg:px-10">
          <p className="eyebrow">Chairman&apos;s Message</p>
          <blockquote className="mt-8">
            <p className="font-display text-2xl font-medium leading-snug tracking-tight text-ink sm:text-3xl">
              &ldquo;Every great destination begins with one person&apos;s
              dream. For over two decades, I have built international
              businesses and delivered world-class projects across the globe.
              E7 Entertainments stands on one simple belief: joy is the
              world&apos;s greatest business. If you carry a dream, we will
              build it together.&rdquo;
            </p>
            <footer className="mt-10 flex flex-col items-center gap-4">
              <span className="flex h-16 w-16 items-center justify-center bg-gold font-display text-xl font-bold text-white">
                M
              </span>
              <div>
                <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-ink">
                  Manimaran
                </p>
                <p className="mt-1 text-sm text-muted">
                  Founder &amp; Chairman, E7 Entertainments Group
                </p>
              </div>
            </footer>
          </blockquote>
        </Reveal>
      </section>

      {/* Marquee */}
      <div className="overflow-hidden border-y border-line bg-white py-5">
        <div className="marquee-track flex w-max gap-10 whitespace-nowrap font-display text-xs font-semibold uppercase tracking-[0.28em] text-muted">
          {[...buzzwords, ...buzzwords].map((word, i) => (
            <span key={i} className="flex items-center gap-10">
              {word}
              <span className="text-gold">•</span>
            </span>
          ))}
        </div>
      </div>

      {/* Opportunities */}
      <section id="opportunities" className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Where We&apos;re Building</p>
          <h2 className="rule-gold mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            A portfolio of opportunities, one partnership away
          </h2>
          <p className="mt-8 text-base leading-relaxed text-ink-soft">
            We bring the sourcing, execution and delivery network. You bring
            the land, the market, or the vision. Together, we build.
          </p>
        </Reveal>

        <StaggerGroup className="mt-16 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
          {opportunities.map((opportunity) => (
            <StaggerItem
              key={opportunity.title}
              className="group h-full bg-white transition-colors hover:bg-sand"
            >
              {opportunity.image && (
                <div className="relative h-52 w-full overflow-hidden">
                  <Image
                    src={opportunity.image}
                    alt={opportunity.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              )}
              <div className="p-8">
                <h3 className="font-display text-lg font-semibold tracking-tight text-ink">
                  {opportunity.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {opportunity.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      {/* Process */}
      <section className="bg-sand py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">How It Works</p>
            <h2 className="rule-gold mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              From conversation to launch
            </h2>
          </Reveal>

          <StaggerGroup className="mt-16 grid gap-10 sm:grid-cols-3">
            {process.map((step) => (
              <StaggerItem
                key={step.step}
                className="border-t-2 border-gold bg-white p-8"
              >
                <span className="font-display text-4xl font-bold text-gold">
                  {step.step}
                </span>
                <h3 className="mt-6 font-display text-lg font-semibold uppercase tracking-[0.12em] text-ink">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-6 py-28 text-center lg:px-10">
        <Reveal>
          <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            Let&apos;s build something people remember.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ink-soft">
            If you have land, a market, a network, or just an idea worth
            building — we want to hear from you.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:partners@e7entertainments.com"
              className="btn btn-solid"
            >
              Become a Partner
            </a>
            <Link href="/contact" className="btn btn-outline">
              Contact Us
            </Link>
          </div>
        </Reveal>
      </section>

      <SiteFooter />
    </div>
  );
}
