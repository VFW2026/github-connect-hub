import { createFileRoute } from "@tanstack/react-router";

import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import work01 from "@/assets/work-01.jpg";
import work02 from "@/assets/work-02.jpg";
import work03 from "@/assets/work-03.jpg";

export const Route = createFileRoute("/project/lorem")({
  head: () => ({
    meta: [
      { title: "Lorem Ipsum Dolor — Project — Lorem Studio" },
      {
        name: "description",
        content:
          "Lorem Ipsum Dolor: a branding and packaging project by Lorem Studio, shown through identity, print and editorial applications.",
      },
      {
        property: "og:title",
        content: "Lorem Ipsum Dolor — Project — Lorem Studio",
      },
      {
        property: "og:description",
        content:
          "Lorem Ipsum Dolor: a branding and packaging project by Lorem Studio, shown through identity, print and editorial applications.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectLorem,
});

const GALLERY = [
  { src: work02, alt: "Lorem Ipsum Dolor identity applied to packaging" },
  { src: work03, alt: "Lorem Ipsum Dolor editorial spread detail" },
  { src: work01, alt: "Lorem Ipsum Dolor logotype studies on print" },
  { src: work02, alt: "Lorem Ipsum Dolor colour and material palette" },
  { src: work03, alt: "Lorem Ipsum Dolor poster series detail" },
  { src: work01, alt: "Lorem Ipsum Dolor signage mockup" },
];

function ProjectLorem() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <SiteHeader />

      <section className="mx-auto max-w-[1200px] px-6 pt-[calc(5.25rem+90px)] pb-12 md:px-10">
        <p className="text-xs tracking-[0.14em] uppercase text-muted-foreground">
          Project / Lorem
        </p>
        <h1 className="mt-4 max-w-[900px] text-[clamp(40px,7vw,96px)] leading-[1.02] font-bold tracking-[-0.02em]">
          Lorem ipsum
          <br />
          dolor
        </h1>
        <p className="mt-6 max-w-[560px] text-lg leading-relaxed text-muted-foreground">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam eaque ipsa.
        </p>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 pb-15 md:px-10">
        <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-secondary">
          <img
            src={work01}
            alt="Lorem Ipsum Dolor project hero image"
            width={1600}
            height={900}
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="mx-auto grid max-w-[1200px] grid-cols-1 gap-x-10 gap-y-10 px-6 pb-25 md:grid-cols-2 md:px-10">
        {GALLERY.map((g, i) => (
          <div
            key={`${g.alt}-${i}`}
            className="relative aspect-square overflow-hidden rounded-xl bg-secondary"
          >
            <img
              src={g.src}
              alt={g.alt}
              loading="lazy"
              width={1024}
              height={1024}
              className="h-full w-full object-cover transition-transform duration-600 ease-out hover:scale-[1.06]"
            />
          </div>
        ))}
      </section>

      <SiteFooter />
    </div>
  );
}
