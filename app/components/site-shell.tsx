import Link from "next/link";
import type { ReactNode } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/songs", label: "Songs" },
  { href: "/videos", label: "Videos" },
  { href: "/help", label: "Help" },
];

type SiteShellProps = {
  children: ReactNode;
  currentPath: string;
  centerContent?: boolean;
  mainClassName?: string;
};

export function SiteShell({
  children,
  currentPath,
  centerContent = false,
  mainClassName = "",
}: SiteShellProps) {
  const mainClasses = [
    centerContent
      ? "flex flex-1 items-center justify-center px-6"
      : "flex flex-1 px-6 py-10",
    mainClassName,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="flex min-h-screen flex-col font-[family-name:var(--font-oswald)]">
      <header className="w-full bg-gray-900 py-6 text-white">
        <h1 className="text-center text-3xl font-bold tracking-wider uppercase md:text-4xl">
          rogeridaho.com
        </h1>
      </header>

      <nav className="w-full bg-gray-800 py-3 text-white">
        <ul className="flex flex-wrap justify-center gap-6 text-sm tracking-wide uppercase md:gap-10 md:text-base">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`transition-colors hover:text-gray-300 ${
                  currentPath === link.href ? "text-gray-300" : ""
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <main className={mainClasses}>{children}</main>

      <footer className="w-full bg-gray-900 py-6 text-white">
        <div className="flex flex-col items-center gap-2 text-sm">
          <Link href="/privacy" className="underline transition-colors hover:text-gray-300">
            Privacy Policy
          </Link>
          <p>&copy; {new Date().getFullYear()} rogeridaho.com. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
