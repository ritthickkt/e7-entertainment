import Link from "next/link";
import Image from "next/image";
import { Reveal, StaggerGroup, StaggerItem } from "../components/Reveal";
import { SiteFooter } from "../components/SiteFooter";

export const metadata = {
  title: "About — E7 Entertainments Group",
  description:
    "E7 Entertainments is the entertainment, leisure and lifestyle venture of an established multinational business group, backed by E7Tex Limited (Hong Kong).",
};

const services = [
  {
    title: "Amusement & Water Parks",
    description:
      "Complete park projects — rides, slides, dino animatronics, snow and adventure parks, illumination parks, science parks and edutainment centres. From one acre to full destinations.",
    image: "/images/water-park.jpg",
  },
  {
    title: "Game Zones & Family Entertainment",
    description:
      "Arcade games, VR zones, 5D/7D theatres, trampoline parks, soft play — turnkey setups for malls and resorts.",
    image: "/images/vr-headset.jpg",
  },
  {
    title: "Cinema, Events & Media",
    description:
      "Cinema seating and projection, stage, sound and LED walls, event equipment and studio & production gear — for every celebration and creation.",
    image: "/images/cinema-seats.jpg",
  },
  {
    title: "Lighting — All Kinds",
    description:
      "Festival, decorative, stage, landscape, street and solar lighting, signage and LED displays.",
    image: "/images/stage-lighting.jpg",
  },
  {
    title: "Festival, Party & Seasonal Products",
    description:
      "Christmas, Diwali and celebration products at factory volume — décor, lights, gifts, party and wedding supplies, toys and inflatables.",
    image: "/images/festive-lights.jpg",
  },
  {
    title: "Sports, Tents & Outdoor",
    description:
      "Playground and fitness equipment, sports goods, camping and glamping gear, event tents.",
    image: "/images/camping-tents.jpg",
  },
  {
    title: "Food & Beverage Setups",
    description:
      "Food courts, kiosks, food trucks and commercial kitchen equipment for parks, malls and cafés.",
    image: "/images/food-kiosk.jpg",
  },
  {
    title: "Container & Prefab Structures",
    description:
      "Container cafés and shops, glamping pods, site offices, ticket counters and portable buildings.",
    image: "/images/container-cafe.jpg",
  },
  {
    title: "Movies, Content & OTT",
    description:
      "Cross-border film distribution, content licensing, dubbing and subtitling, co-productions — taking great stories from one market to the world.",
    image: "/images/film-camera.jpg",
  },
  {
    title: "Cultural Exchange Programs",
    description:
      "International cultural events, art and music exchanges, festivals and student programs — building bridges between nations through culture.",
    image: "/images/cultural-dance.jpg",
  },
  {
    title: "IT, AI & Digital Solutions",
    description:
      "Software development, AI-powered platforms, park ticketing and management systems, e-commerce and enterprise solutions — delivered with our global technology partners.",
    image: "/images/coding-screen.jpg",
  },
];

export default function About() {
  return (
    <div className="flex flex-1 flex-col bg-navy text-white">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-navy/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold text-sm font-bold text-navy-deep">
              E7
            </span>
            <span className="text-lg font-semibold tracking-tight">
              E7 Entertainments
            </span>
          </Link>
          <Link
            href="/contact"
            className="rounded-full bg-gold px-5 py-2 text-sm font-semibold text-navy-deep transition-all duration-200 hover:scale-105 active:scale-95"
          >
            Become a Partner
          </Link>
        </div>
      </header>

      {/* Intro */}
      <section className="mx-auto max-w-4xl px-6 pb-16 pt-40 text-center">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            About Us
          </p>
          <h1 className="mx-auto mt-3 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            E7 Entertainments is the entertainment, leisure and lifestyle
            venture of an established multinational business group
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-zinc-400">
            Backed by E7Tex Limited (Hong Kong), with group companies and
            partner networks operating internationally.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
            From concept to grand opening — manufacturing, quality
            inspection, shipping, documentation and safe payments. We own
            every step, so you enjoy every result.
          </p>
        </Reveal>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            What we deliver
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Services
          </h2>
        </Reveal>

        <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <StaggerItem
              key={service.title}
              className="h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-colors hover:border-gold/30"
            >
              {service.image && (
                <div className="relative h-40 w-full">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                  {service.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      {/* Support */}
      <section className="border-y border-white/10 bg-white/[0.02] py-24">
        <Reveal className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Every project backed by installation, spare parts, maintenance,
            training and technology support — we stay with you after opening
            day.
          </h2>
          <p className="mt-4 text-zinc-400">
            Support and service packages are tailored to each project.
          </p>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            If you carry a dream, we will build it together.
          </h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-gold px-7 py-3 text-sm font-semibold text-navy-deep transition-all duration-200 hover:scale-105 active:scale-95"
            >
              Start Your Project
            </Link>
          </div>
        </Reveal>
      </section>

      <SiteFooter />
    </div>
  );
}
