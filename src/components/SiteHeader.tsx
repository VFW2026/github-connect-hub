import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

const NAV = [
  { label: "work", to: "/" as const },
  { label: "about", to: "/about" as const },
  { label: "contact", to: "/contact" as const },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  const linkClass =
    "relative inline-block py-1 text-[0.7rem] font-semibold lowercase whitespace-nowrap after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-foreground after:transition-all after:duration-250 hover:after:w-full sm:text-sm";

  const mobileLinkClass =
    "block py-2 text-sm font-semibold lowercase text-foreground";

  return (
    <header className="fixed inset-x-0 top-0 z-100 grid h-21 grid-cols-[auto_minmax(0,1fr)] items-center gap-3 border-b border-border bg-background/90 px-4 backdrop-blur sm:gap-6 sm:px-6 md:px-10">
      <Link to="/" className="shrink-0 text-lg font-bold tracking-tight sm:text-xl">
        Lorem
      </Link>

      {/* Desktop nav */}
      <nav className="hidden min-w-0 justify-self-end sm:block">
        <ul className="flex flex-row items-center gap-3 sm:gap-6 md:gap-8">
          {NAV.map((item) => (
            <li key={item.label}>
              <Link
                to={item.to}
                activeOptions={{ exact: true }}
                activeProps={{ className: "after:w-full" }}
                className={linkClass}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile hamburger */}
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="justify-self-end text-foreground sm:hidden"
      >
        {open ? <X size={22} strokeWidth={2} /> : <Menu size={22} strokeWidth={2} />}
      </button>

      {/* Mobile dropdown */}
      {open && (
        <nav className="absolute inset-x-0 top-full border-b border-border bg-background shadow-sm sm:hidden">
          <ul className="flex flex-col px-4 py-2">
            {NAV.map((item) => (
              <li key={item.label} onClick={() => setOpen(false)}>
                <Link
                  to={item.to}
                  activeOptions={{ exact: true }}
                  className={mobileLinkClass}
                >
                  {item.label}
                  {item.to === pathname && (
                    <span className="ml-2 inline-block h-px w-4 translate-y-[-4px] bg-foreground" />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
