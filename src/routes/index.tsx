import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import work01 from "@/assets/work-01.jpg";
import work02 from "@/assets/work-02.jpg";
import work03 from "@/assets/work-03.jpg";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lorem Studio — Selected Work 2026" },
      {
        name: "description",
        content:
          "Selected branding, packaging and editorial design work from Lorem Studio. Browse the 2026 portfolio by discipline.",
      },
      { property: "og:title", content: "Lorem Studio — Selected Work 2026" },
      {
        property: "og:description",
        content:
          "Selected branding, packaging and editorial design work from Lorem Studio. Browse the 2026 portfolio by discipline.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});




const FILTERS = [
  "all",
  "lorem",
  "ipsum",
  "dolor",
  "sit",
  "amet",
  "consectetur",
  "tempor",
  "magna",
];

const PROJECTS = [
  {
    tag: "Lorem",
    title: "Lorem Ipsum Dolor",
    desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.",
    categories: ["lorem", "ipsum"],
    image: work01,
  },
  {
    tag: "Ipsum",
    title: "Sit Amet Consectetur",
    desc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur.",
    categories: ["ipsum", "dolor"],
    image: work02,
  },
  {
    tag: "Dolor",
    title: "Adipiscing Elit Sed",
    desc: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet.",
    categories: ["dolor", "sit"],
    image: work03,
  },
  {
    tag: "Amet",
    title: "Tempor Incididunt",
    desc: "Ut enim ad minima veniam quis nostrum exercitationem ullam.",
    categories: ["amet", "consectetur"],
    image: work01,
  },
  {
    tag: "Tempor",
    title: "Ut Labore Et Dolore",
    desc: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse.",
    categories: ["tempor", "magna"],
    image: work02,
  },
  {
    tag: "Magna",
    title: "Aliqua Veniam Quis",
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
    categories: ["magna", "lorem"],
    image: work03,
  },
  {
    tag: "Consectetur",
    title: "Nostrud Exercitation",
    desc: "Excepteur sint occaecat cupidatat non proident sunt in culpa.",
    categories: ["consectetur", "sit"],
    image: work01,
  },
  {
    tag: "Sit",
    title: "Ullamco Laboris Nisi",
    desc: "Officia deserunt mollit anim id est laborum sed ut perspiciatis.",
    categories: ["sit", "amet"],
    image: work02,
  },
];

function Index() {
  
  const [filter, setFilter] = useState("all");

  const visible =
    filter === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.categories.includes(filter));

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <SiteHeader />


      <section className="mx-auto max-w-[1200px] px-6 pt-[calc(5.25rem+90px)] pb-15 md:px-10">
        <p className="text-xs tracking-[0.14em] uppercase text-muted-foreground">
          Selected Work / 2026
        </p>
        <h1 className="mt-4 max-w-[900px] text-[clamp(40px,7vw,96px)] leading-[1.02] font-bold tracking-[-0.02em]">
          Lorem ipsum
          <br />
          dolor sit amet
        </h1>
        <p className="mt-6 max-w-[560px] text-lg leading-relaxed text-muted-foreground">
          Consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua, ut enim ad minim veniam.
        </p>
      </section>

      <div className="sticky top-21 z-90 border-b border-border bg-background px-6 pt-5 pb-6.5 md:px-10">
        <div className="mx-auto flex max-w-[1200px] flex-wrap gap-2.5">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
              className={`cursor-pointer rounded-full border px-4.5 py-2.5 text-[13px] font-semibold whitespace-nowrap capitalize transition-colors ${
                filter === f
                  ? "border-transparent bg-primary text-primary-foreground"
                  : "border-transparent bg-secondary text-secondary-foreground hover:border-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <section className="mx-auto grid max-w-[1200px] grid-cols-1 gap-x-10 gap-y-15 px-6 pt-15 pb-25 md:grid-cols-2 md:px-10">
        {visible.map((p) => (
          <article key={p.title} className="group cursor-pointer">
            <div className="relative aspect-square overflow-hidden rounded-xl bg-secondary">
              <span className="absolute top-4 left-4 z-10 rounded-full bg-background/90 px-3 py-1.5 text-[11px] font-bold tracking-[0.08em] uppercase">
                {p.tag}
              </span>
              <img
                src={p.image}
                alt={`${p.title} project thumbnail`}
                loading="lazy"
                width={1024}
                height={1024}
                className="h-full w-full object-cover transition-transform duration-600 ease-out group-hover:scale-[1.06]"
              />
            </div>
            <div className="mt-4.5 flex items-baseline justify-between gap-6 border-b border-border pb-4.5">
              <div>
                <h3 className="text-[22px] font-bold">{p.title}</h3>
                <p className="mt-1.5 max-w-[480px] text-sm leading-snug text-muted-foreground">
                  {p.desc}
                </p>
              </div>
              <span className="text-[22px] transition-transform duration-300 group-hover:rotate-45">
                ↗
              </span>
            </div>
          </article>
        ))}
      </section>

      <section className="mx-auto mb-10 max-w-[1200px] px-6 py-20 text-center md:px-10">
        <h2 className="mb-7 text-[clamp(32px,5vw,56px)] font-bold tracking-[-0.01em]">
          Lorem ipsum dolor
          <br />
          sit amet consectetur?
        </h2>
        <a
          href="#"
          className="inline-flex items-center gap-2.5 rounded-full bg-primary px-7 py-4 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-80"
        >
          Get in touch <span>↗</span>
        </a>
      </section>

      <SiteFooter />

    </div>
  );
}
