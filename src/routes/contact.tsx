import { createFileRoute } from "@tanstack/react-router";

import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Lorem Studio" },
      {
        name: "description",
        content:
          "Get in touch with Lorem Studio about branding, packaging and editorial design projects, collaborations and studio enquiries.",
      },
      { property: "og:title", content: "Contact — Lorem Studio" },
      {
        property: "og:description",
        content:
          "Get in touch with Lorem Studio about branding, packaging and editorial design projects, collaborations and studio enquiries.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

const BLOCKS = [
  {
    label: "01 / Enquiries",
    title: "Lorem ipsum dolor sit",
    body: [
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis.",
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    ],
  },
  {
    label: "02 / Studio",
    title: "Consectetur adipiscing elit",
    body: [
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore.",
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.",
    ],
  },
  {
    label: "03 / Collaboration",
    title: "Tempor incididunt ut labore",
    body: [
      "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.",
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias.",
    ],
  },
];

function Contact() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <SiteHeader />

      <section className="mx-auto max-w-[1200px] px-6 pt-[calc(5.25rem+90px)] pb-15 md:px-10">
        <p className="text-xs tracking-[0.14em] uppercase text-muted-foreground">
          Contact / Lorem Studio
        </p>
        <h1 className="mt-4 max-w-[900px] text-[clamp(40px,7vw,96px)] leading-[1.02] font-bold tracking-[-0.02em]">
          Lorem ipsum
          <br />
          get in touch
        </h1>
        <p className="mt-6 max-w-[560px] text-lg leading-relaxed text-muted-foreground">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur excepteur sint occaecat.
        </p>
        <div className="mt-8 flex flex-wrap gap-x-10 gap-y-3 text-base">
          <a
            href="mailto:studio@loremipsum.design"
            className="border-b border-foreground pb-0.5 font-semibold"
          >
            studio@loremipsum.design
          </a>
          <span className="text-muted-foreground">+00 000 000 000</span>
          <span className="text-muted-foreground">
            Lorem Street 12, Ipsum City
          </span>
        </div>
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
