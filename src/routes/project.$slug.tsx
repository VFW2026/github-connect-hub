import { createFileRoute, notFound } from "@tanstack/react-router";

import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { getProject } from "@/lib/projects";

export const Route = createFileRoute("/project/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Project unavailable — Lorem Studio" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { project } = loaderData;
    const title = `${project.title} — Project — Lorem Studio`;
    return {
      meta: [
        { title },
        { name: "description", content: project.desc },
        { property: "og:title", content: title },
        { property: "og:description", content: project.desc },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ProjectPage,
  notFoundComponent: ProjectNotFound,
});

function ProjectNotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <SiteHeader />
      <section className="mx-auto max-w-[1200px] px-6 pt-[calc(5.25rem+90px)] pb-25 md:px-10">
        <h1 className="text-[clamp(32px,5vw,64px)] font-bold tracking-[-0.02em]">
          Project not found
        </h1>
      </section>
      <SiteFooter />
    </div>
  );
}

function ProjectPage() {
  const { project } = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <SiteHeader />

      <section className="mx-auto max-w-[1200px] px-6 pt-[calc(5.25rem+90px)] pb-12 md:px-10">
        <p className="text-xs tracking-[0.14em] uppercase text-muted-foreground">
          Project / {project.tag}
        </p>
        <h1 className="mt-4 max-w-[900px] text-[clamp(40px,7vw,96px)] leading-[1.02] font-bold tracking-[-0.02em]">
          {project.title}
        </h1>
        <p className="mt-6 max-w-[560px] text-lg leading-relaxed text-muted-foreground">
          {project.desc} Totam rem aperiam eaque ipsa quae ab illo inventore
          veritatis et quasi architecto beatae vitae dicta sunt.
        </p>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 pb-15 md:px-10">
        <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-secondary">
          <img
            src={project.image}
            alt={`${project.title} project hero image`}
            width={1600}
            height={900}
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="mx-auto grid max-w-[1200px] grid-cols-1 gap-x-10 gap-y-10 px-6 pb-25 md:grid-cols-2 md:px-10">
        {project.gallery.map((g, i) => (
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
