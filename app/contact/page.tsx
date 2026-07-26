import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

export const metadata = {
  title: "Contact — E7 Entertainments Group",
  description:
    "Start your project with E7 Entertainments. Share your vision and let's build it together.",
};

const offices = [
  {
    label: "Registered Office — Hong Kong",
    address:
      "Flat 721, 7/F, LIVEN HOUSE, No. 61–63 King Yip Street, Kwun Tong, Kowloon, Hong Kong",
  },
  {
    label: "India Office — Chennai",
    address: "No 5, Valmeeki Street, Devinagar, Chennai 600109",
  },
  {
    label: "India Office — Tiruppur",
    address:
      "OXF Global India Private Limited, 9/1 Bungalow Street Extension, Tiruppur - 641602. GST: 33AADCO3823F1ZT",
  },
  {
    label: "China Representative Office — Yiwu",
    address:
      "1F020-046, Jinfu Yuan Parking Building, Chouzhou North Road, Choucheng Street, Yiwu City, Jinhua City, Zhejiang Province, China",
  },
];

export default function Contact() {
  return (
    <div className="flex flex-1 flex-col bg-white text-ink">
      <SiteHeader />

      {/* Page intro */}
      <section className="mx-auto w-full max-w-7xl px-6 pb-20 pt-44 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">Start Your Project</p>
            <h1 className="rule-gold mt-4 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
              Tell us about your dream.
            </h1>
          </div>
          <div className="text-base leading-relaxed text-ink-soft">
            <p>
              Share your vision, land, market or capability — we&apos;ll
              explore where it fits and build it with you.
            </p>
            <div className="mt-10 border-t-2 border-gold bg-sand p-8">
              <p className="font-display text-xs font-semibold uppercase tracking-[0.28em] text-gold-ink">
                Email
              </p>
              <a
                href="mailto:partners@e7entertainments.com"
                className="mt-3 inline-block font-display text-lg font-semibold tracking-tight text-gold transition-colors hover:text-ink"
              >
                partners@e7entertainments.com
              </a>
            </div>
            <div className="mt-10">
              <a
                href="mailto:partners@e7entertainments.com"
                className="btn btn-solid"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="bg-sand py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="eyebrow">Our Offices</p>
          <h2 className="rule-gold mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            Where to find us
          </h2>

          <div className="mt-16 grid gap-px bg-line sm:grid-cols-2">
            {offices.map((office) => (
              <div key={office.label} className="bg-white p-8">
                <p className="font-display text-xs font-semibold uppercase tracking-[0.16em] text-ink">
                  {office.label}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {office.address}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
