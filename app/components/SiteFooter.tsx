import Link from "next/link";

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

const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/#opportunities", label: "What We Do" },
  { href: "/contact", label: "Contact" },
];

export function SiteFooter() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_2fr]">
          {/* Brand + quick links */}
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center bg-gold font-display text-sm font-bold text-white">
                E7
              </span>
              <span className="font-display text-base font-semibold uppercase tracking-[0.16em]">
                E7 Entertainments
              </span>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/60">
              The entertainment, leisure and lifestyle venture of an
              established multinational business group.
            </p>

            <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-display text-xs font-semibold uppercase tracking-[0.16em] text-white/70 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <a
              href="mailto:partners@e7entertainments.com"
              className="mt-8 inline-block text-sm text-white/80 transition-colors hover:text-gold"
            >
              partners@e7entertainments.com
            </a>
          </div>

          {/* Offices */}
          <div>
            <p className="font-display text-xs font-semibold uppercase tracking-[0.28em] text-gold">
              Our Offices
            </p>
            <div className="mt-8 grid gap-8 sm:grid-cols-2">
              {offices.map((office) => (
                <div key={office.label}>
                  <p className="font-display text-xs font-semibold uppercase tracking-[0.14em] text-white">
                    {office.label}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">
                    {office.address}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8">
          <p className="text-xs tracking-wide text-white/45">
            &copy; {new Date().getFullYear()} E7 Entertainments Group. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
