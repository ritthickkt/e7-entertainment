import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/#opportunities", label: "Services" },
  { href: "/news", label: "News" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact Us" },
];

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="E7 Entertainments"
            width={84}
            height={90}
            className="h-[4.5rem] w-auto"
            priority
          />
          <span className="font-display text-base font-semibold uppercase tracking-[0.16em] text-ink">
            E7 Entertainments
          </span>
        </Link>

        <nav className="flex items-center gap-8">
          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-display text-xs font-semibold uppercase tracking-[0.16em] text-ink transition-colors hover:text-gold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/contact#partner" className="btn btn-solid !px-6 !py-3">
            Become a Partner
          </Link>
        </nav>
      </div>
    </header>
  );
}
