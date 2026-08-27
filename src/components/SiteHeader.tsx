import { Link } from "@tanstack/react-router";


const NAV = [
  { label: "work", to: "/" as const },
  { label: "services", to: null },
  { label: "about", to: "/about" as const },
  { label: "contact", to: "/contact" as const },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass =
    "relative inline-block py-1 text-sm font-semibold lowercase after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-foreground after:transition-all after:duration-250 hover:after:w-full";

  return (
    <header className="fixed inset-x-0 top-0 z-100 flex h-21 items-center justify-between border-b border-border bg-background/90 px-6 backdrop-blur md:px-10">
      <Link to="/" className="text-xl font-bold tracking-tight">
        Lorem
      </Link>

      <nav
        className={`${
          menuOpen ? "translate-y-0" : "-translate-y-[110%]"
        } fixed inset-x-0 top-21 border-b border-border bg-background transition-transform duration-300 md:static md:translate-y-0 md:border-0 md:bg-transparent`}
      >
        <ul className="flex flex-col gap-4 px-6 pt-5 pb-7 md:flex-row md:gap-8 md:p-0">
          {NAV.map((item) => (
            <li key={item.label}>
              {item.to ? (
                <Link
                  to={item.to}
                  onClick={() => setMenuOpen(false)}
                  activeOptions={{ exact: true }}
                  activeProps={{ className: "after:w-full" }}
                  className={linkClass}
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  href="#"
                  onClick={() => setMenuOpen(false)}
                  className={linkClass}
                >
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      </nav>

      <button
        type="button"
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((o) => !o)}
        className="flex flex-col gap-[5px] p-1.5 md:hidden"
      >
        <span className="h-0.5 w-6 bg-foreground" />
        <span className="h-0.5 w-6 bg-foreground" />
        <span className="h-0.5 w-6 bg-foreground" />
      </button>
    </header>
  );
}
