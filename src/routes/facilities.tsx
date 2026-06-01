import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { CheckCircle2 } from "lucide-react";
import facClassroom from "@/assets/facility-classroom.jpg";
import facLibrary from "@/assets/facility-library.jpg";
import facComputer from "@/assets/facility-computer.jpg";
import facPlayground from "@/assets/facility-playground.jpg";
import facActivity from "@/assets/facility-activity.jpg";
import facBus from "@/assets/facility-bus.jpg";

export const Route = createFileRoute("/facilities")({
  head: () => ({
    meta: [
      { title: "Facilities | St. Jude's School Fatehnagar" },
      { name: "description", content: "Modern smart classrooms, library, computer lab, playground, transportation and more at St. Jude's School, Fatehnagar." },
      { property: "og:title", content: "Facilities at St. Jude's School" },
      { property: "og:description", content: "A safe, modern campus designed for holistic learning." },
      { property: "og:url", content: "/facilities" },
    ],
    links: [{ rel: "canonical", href: "/facilities" }],
  }),
  component: FacilitiesPage,
});

const facilities = [
  { img: facClassroom, title: "Smart Classrooms", desc: "Air-conditioned, technology-enabled classrooms with interactive panels for engaging lessons.", benefits: ["Digital content integration", "Comfortable learning environment", "Improved focus and retention"] },
  { img: facLibrary, title: "Library", desc: "A well-stocked library with curated reading material, references and quiet study zones.", benefits: ["Reading culture", "Research support", "Quiet study space"] },
  { img: facComputer, title: "Computer Lab", desc: "Modern computer lab with high-speed internet and updated software for digital learning.", benefits: ["Coding and IT skills", "Hands-on practice", "Future-ready learners"] },
  { img: facPlayground, title: "Playground", desc: "Spacious, safe playground for sports, games and physical development.", benefits: ["Physical fitness", "Team spirit", "Outdoor learning"] },
  { img: facActivity, title: "Activity Areas", desc: "Dedicated rooms for art, music, dance and other creative pursuits.", benefits: ["Creative expression", "Skill exploration", "Confidence building"] },
  { img: facBus, title: "Transportation", desc: "Safe, GPS-enabled school buses with trained drivers and attendants.", benefits: ["Reliable pickup", "Trained staff", "Safety-first protocols"] },
];

const support = [
  { title: "Security Measures", desc: "CCTV monitoring, trained guards and strict visitor protocols across the campus." },
  { title: "Clean Drinking Water", desc: "RO-purified drinking water available at multiple stations throughout the school." },
  { title: "Student Support", desc: "Counselling, first-aid and personal mentorship to support every learner." },
];

function FacilitiesPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Facilities" title="A modern campus, built for learning" subtitle="Thoughtfully designed spaces and infrastructure that support every dimension of a child's growth." />

      <section className="container-page py-20 space-y-16">
        {facilities.map((f, i) => (
          <div key={f.title} className={`grid gap-10 lg:grid-cols-2 items-center ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
            <img src={f.img} alt={f.title} loading="lazy" className="rounded-2xl shadow-elegant w-full aspect-[4/3] object-cover" />
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-gold mb-3">0{i + 1}</div>
              <h2 className="font-display text-3xl font-bold text-primary">{f.title}</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">{f.desc}</p>
              <ul className="mt-5 space-y-2.5">
                {f.benefits.map((b) => (
                  <li key={b} className="flex gap-2.5 text-sm"><CheckCircle2 className="h-5 w-5 text-gold mt-0.5 shrink-0" /> {b}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      <section className="bg-secondary/50">
        <div className="container-page py-20 grid gap-6 md:grid-cols-3">
          {support.map((s) => (
            <div key={s.title} className="rounded-xl bg-card border border-border p-7 shadow-card">
              <h3 className="font-display text-xl font-semibold text-primary">{s.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
