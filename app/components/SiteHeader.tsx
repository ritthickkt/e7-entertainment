import Image from "next/image";
import Link from "next/link";
import { ProductsDropdown } from "./ProductsDropdown";

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-white">
      <div className="flex items-center px-4 py-4 lg:px-6">
        {/* Logo & Brand - flush left */}
        <Link href="/" className="flex items-center gap-1.5 shrink-0">
          <Image
            src="/images/logo.png"
            alt="E7 Entertainments"
            width={84}
            height={90}
            className="h-12 w-auto"
            priority
          />
          <span className="font-display text-xs font-semibold uppercase tracking-[0.12em] text-ink whitespace-nowrap lg:text-sm">
            E7 Entertainments
          </span>
        </Link>

        {/* Navigation - spreads across full width */}
        <nav className="ml-12 flex flex-1 items-center">
          <ul className="hidden items-center lg:flex flex-1">
            <li className="shrink-0">
              <Link
                href="/"
                className="whitespace-nowrap font-display text-xs font-semibold uppercase tracking-[0.1em] text-ink transition-colors hover:text-gold px-6 xl:tracking-[0.16em]"
              >
                Home
              </Link>
            </li>
            <li className="shrink-0">
              <Link
                href="/about"
                className="whitespace-nowrap font-display text-xs font-semibold uppercase tracking-[0.1em] text-ink transition-colors hover:text-gold px-6 xl:tracking-[0.16em]"
              >
                About Us
              </Link>
            </li>
            <li className="shrink-0 px-6">
              <ProductsDropdown />
            </li>
            <li className="shrink-0">
              <Link
                href="/#opportunities"
                className="whitespace-nowrap font-display text-xs font-semibold uppercase tracking-[0.1em] text-ink transition-colors hover:text-gold px-6 xl:tracking-[0.16em]"
              >
                Services
              </Link>
            </li>
            <li className="shrink-0">
              <Link
                href="/news"
                className="whitespace-nowrap font-display text-xs font-semibold uppercase tracking-[0.1em] text-ink transition-colors hover:text-gold px-6 xl:tracking-[0.16em]"
              >
                News
              </Link>
            </li>
            <li className="shrink-0">
              <Link
                href="/careers"
                className="whitespace-nowrap font-display text-xs font-semibold uppercase tracking-[0.1em] text-ink transition-colors hover:text-gold px-6 xl:tracking-[0.16em]"
              >
                Careers
              </Link>
            </li>
            <li className="shrink-0">
              <Link
                href="/contact"
                className="whitespace-nowrap font-display text-xs font-semibold uppercase tracking-[0.1em] text-ink transition-colors hover:text-gold px-6 xl:tracking-[0.16em]"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>

        {/* CTA Button - flush right */}
        <div className="ml-auto shrink-0">
          <Link
            href="/contact#partner"
            className="btn btn-solid !px-5 !py-3 whitespace-nowrap text-xs"
          >
            Become a Partner
          </Link>
        </div>
      </div>
    </header>
  );
}
