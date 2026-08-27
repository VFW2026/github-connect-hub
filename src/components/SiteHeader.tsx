import { Link } from "@tanstack/react-router";


const NAV = [
  { label: "work", to: "/" as const },
  { label: "services", to: null },
  { label: "about", to: "/about" as const },
  { label: "contact", to: "/contact" as const },
];

export function SiteHeader() {
  const linkClass =
    "relative inline-block py-1 text-[0.7rem] font-semibold lowercase whitespace-nowrap after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-foreground after:transition-all after:duration-250 hover:after:w-full sm:text-sm";

  return (
    <header className="fixed inset-x-0 top-0 z-100 grid h-21 grid-cols-[auto_minmax(0,1fr)] items-center gap-3 border-b border-border bg-background/90 px-4 backdrop-blur sm:gap-6 sm:px-6 md:px-10">
      <Link to="/" className="shrink-0 text-lg font-bold tracking-tight sm:text-xl">
        Lorem
      </Link>

      <nav className="min-w-0 justify-self-end">
        <ul className="flex flex-row items-center gap-3 sm:gap-6 md:gap-8">
          {NAV.map((item) => (
            <li key={item.label}>
              {item.to ? (
                <Link
                  to={item.to}
                  activeOptions={{ exact: true }}
                  activeProps={{ className: "after:w-full" }}
                  className={linkClass}
                >
                  {item.label}
                </Link>
              ) : (
                <a href="#" className={linkClass}>
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
