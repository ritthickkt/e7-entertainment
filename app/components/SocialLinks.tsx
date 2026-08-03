const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/E7Entertainments",
    path: "M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.89h2.78l-.44 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94Z",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/e7entertainments/",
    kind: "instagram",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/e7entertainments",
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065ZM7.119 20.452H3.555V9h3.564v11.452Z",
  },
  {
    name: "X",
    href: "https://x.com/E7Entertainment",
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.451-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644Z",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@E7Entertainments",
    kind: "youtube",
  },
];

export function SocialLinks() {
  return (
    <div className="flex items-center gap-3">
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.name}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-gold hover:text-ink"
        >
          {social.kind === "instagram" ? (
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
              <rect
                x="2.5"
                y="2.5"
                width="19"
                height="19"
                rx="5.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              />
              <circle
                cx="12"
                cy="12"
                r="4.3"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              />
              <circle cx="17.15" cy="6.85" r="1.15" fill="currentColor" />
            </svg>
          ) : social.kind === "youtube" ? (
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
              <rect
                x="1.5"
                y="5"
                width="21"
                height="14"
                rx="4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              />
              <path d="M10 8.6 15.5 12 10 15.4Z" fill="currentColor" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-4 w-4 fill-current"
            >
              <path d={social.path} />
            </svg>
          )}
        </a>
      ))}
    </div>
  );
}
