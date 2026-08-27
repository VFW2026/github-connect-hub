import work01 from "@/assets/work-01.jpg";
import work02 from "@/assets/work-02.jpg";
import work03 from "@/assets/work-03.jpg";

export type Project = {
  slug: string;
  tag: string;
  title: string;
  desc: string;
  categories: string[];
  image: string;
  gallery: { src: string; alt: string }[];
};

const gallery = (title: string, order: string[]) =>
  [
    "identity applied to packaging",
    "editorial spread detail",
    "logotype studies on print",
    "colour and material palette",
    "poster series detail",
    "signage mockup",
  ].map((label, i) => ({
    src: order[i % order.length]!,
    alt: `${title} ${label}`,
  }));

const A = [work01, work02, work03];
const B = [work02, work03, work01];
const C = [work03, work01, work02];

export const PROJECTS: Project[] = [
  {
    slug: "lorem",
    tag: "Lorem",
    title: "Lorem Ipsum Dolor",
    desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.",
    categories: ["lorem", "ipsum"],
    image: work01,
    gallery: gallery("Lorem Ipsum Dolor", B),
  },
  {
    slug: "ipsum",
    tag: "Ipsum",
    title: "Sit Amet Consectetur",
    desc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur.",
    categories: ["ipsum", "dolor"],
    image: work02,
    gallery: gallery("Sit Amet Consectetur", C),
  },
  {
    slug: "dolor",
    tag: "Dolor",
    title: "Adipiscing Elit Sed",
    desc: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet.",
    categories: ["dolor", "sit"],
    image: work03,
    gallery: gallery("Adipiscing Elit Sed", A),
  },
  {
    slug: "amet",
    tag: "Amet",
    title: "Tempor Incididunt",
    desc: "Ut enim ad minima veniam quis nostrum exercitationem ullam.",
    categories: ["amet", "consectetur"],
    image: work01,
    gallery: gallery("Tempor Incididunt", C),
  },
  {
    slug: "tempor",
    tag: "Tempor",
    title: "Ut Labore Et Dolore",
    desc: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse.",
    categories: ["tempor", "magna"],
    image: work02,
    gallery: gallery("Ut Labore Et Dolore", A),
  },
  {
    slug: "magna",
    tag: "Magna",
    title: "Aliqua Veniam Quis",
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
    categories: ["magna", "lorem"],
    image: work03,
    gallery: gallery("Aliqua Veniam Quis", B),
  },
  {
    slug: "consectetur",
    tag: "Consectetur",
    title: "Nostrud Exercitation",
    desc: "Excepteur sint occaecat cupidatat non proident sunt in culpa.",
    categories: ["consectetur", "sit"],
    image: work01,
    gallery: gallery("Nostrud Exercitation", B),
  },
  {
    slug: "sit",
    tag: "Sit",
    title: "Ullamco Laboris Nisi",
    desc: "Officia deserunt mollit anim id est laborum sed ut perspiciatis.",
    categories: ["sit", "amet"],
    image: work02,
    gallery: gallery("Ullamco Laboris Nisi", C),
  },
];

export const getProject = (slug: string) =>
  PROJECTS.find((p) => p.slug === slug);
