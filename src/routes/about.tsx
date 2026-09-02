import { createFileRoute } from "@tanstack/react-router";

import aboutHero from "@/assets/about-hero.jpg";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Lorem Studio" },
      {
        name: "description",
        content:
          "Lorem Studio is a branding, packaging and editorial design practice. Read about our approach, process and studio principles.",
      },
      { property: "og:title", content: "About — Lorem Studio" },
      {
        property: "og:description",
        content:
          "Lorem Studio is a branding, packaging and editorial design practice. Read about our approach, process and studio principles.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

const BLOCKS = [
  {
    label: "01 / Studio",
    title: "Lorem ipsum dolor sit amet",
    body: [
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    ],
  },
  {
    label: "02 / Approach",
    title: "Consectetur adipiscing elit",
    body: [
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.",
    ],
  },
  {
    label: "03 / Process",
    title: "Tempor incididunt ut labore",
    body: [
      "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.",
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati.",
    ],
  },
  {
    label: "04 / Principles",
    title: "Magna aliqua veniam quis",
    body: [
      "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.",
      "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.",
    ],
  },
];

function About() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <SiteHeader />

      {/* FPO hero — will become a static image with a video clip on rollover */}
      <section className="mx-auto max-w-[1200px] px-6 pt-[calc(5.25rem+24px)] md:px-10">
        <div className="group relative overflow-hidden bg-muted">
          <img
            src={aboutHero}
            alt="Studio atmosphere — placeholder image"
            width={1920}
            height={1080}
            className="aspect-[16/9] w-full object-cover"
          />
          <span className="absolute right-4 bottom-4 rounded-full border border-border bg-background/80 px-3 py-1 text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
            FPO
          </span>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 pt-16 pb-15 md:px-10">
        <p className="text-xs tracking-[0.14em] uppercase text-muted-foreground">
          About / Lorem Studio
        </p>
        <h1 className="mt-4 max-w-[900px] text-[clamp(40px,7vw,96px)] leading-[1.02] font-bold tracking-[-0.02em]">
          Ipsum dolor
          <br />
          sit amet studio
        </h1>
        <p className="mt-6 max-w-[560px] text-lg leading-relaxed text-muted-foreground">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur excepteur sint occaecat.
        </p>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 pb-25 md:px-10">
        {BLOCKS.map((b) => (
          <div
            key={b.label}
            className="grid gap-6 border-t border-border py-12 md:grid-cols-[220px_1fr] md:gap-10"
          >
            <p className="text-xs tracking-[0.12em] uppercase text-muted-foreground">
              {b.label}
            </p>
            <div>
              <h2 className="text-[clamp(24px,3vw,34px)] font-bold tracking-[-0.01em]">
                {b.title}
              </h2>
              {b.body.map((p) => (
                <p
                  key={p.slice(0, 24)}
                  className="mt-4 max-w-[640px] text-base leading-relaxed text-muted-foreground"
                >
                  {p}
                </p>
              ))}
            </div>
          </div>
        ))}
      </section>

      <SiteFooter />
    </div>
  );
}
