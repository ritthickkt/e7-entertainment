import Link from "next/link";
import { Reveal } from "../components/Reveal";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

export const metadata = {
  title: "Careers — E7 Entertainments Group",
  description:
    "Join E7 Entertainments Group and help build parks, festivals, sports and entertainment experiences worldwide.",
};

export default function Careers() {
  return (
    <div className="flex flex-1 flex-col bg-white text-ink">
      <SiteHeader />

      <section className="mx-auto w-full max-w-4xl px-6 py-28 pt-44 text-center lg:px-10">
        <Reveal>
          <p className="eyebrow">Careers</p>
          <h1 className="rule-gold mx-auto mt-4 max-w-2xl text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
            Build the future of entertainment with us
          </h1>
          <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
            We&apos;re growing across parks, festivals, sports, food and
            entertainment worldwide. Open roles will be listed here soon — in
            the meantime, reach out and tell us how you&apos;d like to be
            part of it.
          </p>
          <div className="mt-10">
            <Link href="/contact" className="btn btn-solid">
              Get in Touch
            </Link>
          </div>
        </Reveal>
      </section>

      <SiteFooter />
    </div>
  );
}
