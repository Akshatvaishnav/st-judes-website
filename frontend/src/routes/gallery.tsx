import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { X } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import campus from "@/assets/hero-campus.jpg";
import classroom from "@/assets/facility-classroom.jpg";
import library from "@/assets/facility-library.jpg";
import computer from "@/assets/facility-computer.jpg";
import playground from "@/assets/facility-playground.jpg";
import activity from "@/assets/facility-activity.jpg";
import bus from "@/assets/facility-bus.jpg";
import cultural from "@/assets/gallery-cultural.jpg";
import sports from "@/assets/gallery-sports.jpg";
import students from "@/assets/students-group.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | St. Jude's School Fatehnagar" },
      { name: "description", content: "Photo gallery of campus life, academics, sports, events and celebrations at St. Jude's School, Fatehnagar." },
      { property: "og:title", content: "Gallery — St. Jude's School" },
      { property: "og:description", content: "Glimpses of campus life, learning and celebrations." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

type Category = "All" | "Campus" | "Academics" | "Sports" | "Events" | "Celebrations";

const items: { src: string; alt: string; category: Exclude<Category, "All"> }[] = [
  { src: campus, alt: "Main campus", category: "Campus" },
  { src: classroom, alt: "Smart classroom", category: "Academics" },
  { src: library, alt: "Library", category: "Academics" },
  { src: computer, alt: "Computer lab", category: "Academics" },
  { src: playground, alt: "Playground", category: "Sports" },
  { src: sports, alt: "Sports day", category: "Sports" },
  { src: activity, alt: "Activity room", category: "Events" },
  { src: cultural, alt: "Cultural celebration", category: "Celebrations" },
  { src: students, alt: "Students together", category: "Campus" },
  { src: bus, alt: "School transportation", category: "Campus" },
];

const categories: Category[] = ["All", "Campus", "Academics", "Sports", "Events", "Celebrations"];

function GalleryPage() {
  const [active, setActive] = useState<Category>("All");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = useMemo(
    () => (active === "All" ? items : items.filter((i) => i.category === active)),
    [active]
  );

  return (
    <SiteLayout>
      <PageHero eyebrow="Gallery" title="Moments from St. Jude's" subtitle="Snapshots of learning, play, friendship and celebration on our campus." />

      <section className="container-page py-12">
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                active === c
                  ? "bg-primary text-primary-foreground shadow-card"
                  : "bg-secondary text-foreground hover:bg-primary-soft"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-10 columns-1 sm:columns-2 lg:columns-3 gap-4 [&>*]:mb-4">
          {filtered.map((img) => (
            <button
              key={img.src + img.alt}
              onClick={() => setLightbox(img.src)}
              className="block w-full overflow-hidden rounded-xl shadow-card hover:shadow-elegant transition group"
            >
              <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-auto object-cover group-hover:scale-105 transition duration-500" />
            </button>
          ))}
        </div>
      </section>

      {lightbox && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[100] bg-black/85 flex items-center justify-center p-4 animate-fade-up"
          onClick={() => setLightbox(null)}
        >
          <button
            aria-label="Close"
            className="absolute top-4 right-4 h-10 w-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20"
          >
            <X className="h-5 w-5" />
          </button>
          <img src={lightbox} alt="" className="max-h-[90vh] max-w-[95vw] rounded-xl shadow-elegant" />
        </div>
      )}
    </SiteLayout>
  );
}
