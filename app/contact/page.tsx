import Link from "next/link";
import { SiteFooter } from "../components/SiteFooter";

export const metadata = {
  title: "Contact — E7 Entertainments Group",
  description:
    "Start your project with E7 Entertainments. Share your vision and let's build it together.",
};

export default function Contact() {
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

      {/* Contact */}
      <section className="mx-auto max-w-2xl flex-1 px-6 pb-24 pt-40 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
          Start Your Project
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          Tell us about your dream.
        </h1>
        <p className="mt-4 text-zinc-400">
          Share your vision, land, market or capability — we&apos;ll explore
          where it fits and build it with you.
        </p>

        <div className="mt-10 flex flex-col gap-6 rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-left">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              Email
            </p>
            <a
              href="mailto:partners@e7entertainments.com"
              className="mt-2 inline-block text-lg text-white transition-colors hover:text-gold"
            >
              partners@e7entertainments.com
            </a>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              Registered Office — Hong Kong
            </p>
            <p className="mt-2 text-zinc-300">
              Flat 721, 7/F, LIVEN HOUSE, No. 61–63 King Yip Street, Kwun
              Tong, Kowloon, Hong Kong
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              India Office — Chennai
            </p>
            <p className="mt-2 text-zinc-300">
              No 5, Valmeeki Street, Devinagar, Chennai 600109
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              India Office — Tiruppur
            </p>
            <p className="mt-2 text-zinc-300">
              OXF Global India Private Limited, 9/1 Bungalow Street
              Extension, Tiruppur - 641602. GST: 33AADCO3823F1ZT
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              China Representative Office — Yiwu
            </p>
            <p className="mt-2 text-zinc-300">
              1F020-046, Jinfu Yuan Parking Building, Chouzhou North Road,
              Choucheng Street, Yiwu City, Jinhua City, Zhejiang Province,
              China
            </p>
          </div>
        </div>

        <div className="mt-10">
          <a
            href="mailto:partners@e7entertainments.com"
            className="rounded-full bg-gold px-7 py-3 text-sm font-semibold text-navy-deep transition-all duration-200 hover:scale-105 active:scale-95"
          >
            Email Us
          </a>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
