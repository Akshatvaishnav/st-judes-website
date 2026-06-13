import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, Lightbulb, Activity, Users, Palette, Trophy, Mic, Globe, CheckCircle2 } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { SectionHeading } from "./index";

export const Route = createFileRoute("/academics")({
  head: () => ({
    meta: [
      { title: "Academics | St. Jude's School Fatehnagar" },
      { name: "description", content: "Explore the curriculum, classes offered and teaching methodology at St. Jude's School, Fatehnagar — concept-based, activity-driven learning." },
      { property: "og:title", content: "Academics at St. Jude's School" },
      { property: "og:description", content: "Concept-based, activity-driven curriculum from Pre-Primary to Senior School." },
      { property: "og:url", content: "/academics" },
    ],
    links: [{ rel: "canonical", href: "/academics" }],
  }),
  component: AcademicsPage,
});

const classes = [
  { title: "Pre-Primary", range: "Nursery – KG", desc: "Play-based learning that builds curiosity and confidence." },
  { title: "Primary", range: "Class I – V", desc: "Strong foundations in literacy, numeracy and inquiry." },
  { title: "Middle School", range: "Class VI – VIII", desc: "Concept mastery and exploration of interests." },
  //{ title: "Secondary", range: "Class IX – X", desc: "Focused academics and skill development." },
  //{ title: "Senior Secondary", range: "Class XI – XII", desc: "Streams that prepare students for higher education." },
];

const methods = [
  { icon: Lightbulb, title: "Interactive Learning", desc: "Two-way classrooms that spark curiosity and discussion." },
  { icon: Activity, title: "Practical Activities", desc: "Hands-on experiments, projects and real-world applications." },
  { icon: Users, title: "Skill Development", desc: "Communication, collaboration and critical thinking." },
  { icon: BookOpen, title: "Student Engagement", desc: "Personal attention and learner-led inquiry." },
];

const cocurr = [
  { icon: Palette, title: "Arts" },
  { icon: Trophy, title: "Sports" },
  { icon: Mic, title: "Leadership Activities" },
  { icon: Globe, title: "Cultural Programs" },
];

function AcademicsPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Academics" title="A curriculum that thinks beyond textbooks" subtitle="Concept-based learning, practical exploration and individual care at every stage." />

      <section className="container-page py-20">
        <SectionHeading eyebrow="Curriculum" title="Our educational approach" subtitle="We blend a strong academic core with concept-based and activity-based learning to make knowledge stick." />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { title: "Concept-Based", desc: "Deep understanding over rote learning — students grasp the 'why' and 'how'." },
            { title: "Activity-Driven", desc: "Experiential lessons that connect theory with hands-on practice." },
            { title: "Holistic Growth", desc: "Academics balanced with arts, sports and values education." },
          ].map((c) => (
            <div key={c.title} className="rounded-xl border border-border bg-card p-7 shadow-card">
              <h3 className="font-display text-xl font-semibold text-primary">{c.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary/50">
        <div className="container-page py-20">
          <SectionHeading eyebrow="Classes Offered" title="From first steps to senior school" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {classes.map((c) => (
              <div key={c.title} className="rounded-xl bg-card p-6 border border-border shadow-card hover:shadow-elegant hover:-translate-y-1 transition">
                <div className="text-xs font-semibold uppercase tracking-widest text-gold">{c.range}</div>
                <h3 className="mt-2 font-display text-xl font-bold text-primary">{c.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-20">
        <SectionHeading eyebrow="Methodology" title="How we teach" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {methods.map((m) => (
            <div key={m.title} className="rounded-xl border border-border bg-card p-6 shadow-card">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-soft text-primary"><m.icon className="h-6 w-6" /></div>
              <h4 className="mt-5 font-display font-semibold text-foreground">{m.title}</h4>
              <p className="mt-2 text-sm text-muted-foreground">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary/50">
        <div className="container-page py-20">
          <SectionHeading eyebrow="Co-Curricular" title="Developing the whole child" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {cocurr.map((c) => (
              <div key={c.title} className="rounded-xl bg-card p-7 text-center border border-border shadow-card">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold text-gold-foreground"><c.icon className="h-7 w-7" /></div>
                <h4 className="mt-4 font-display font-semibold text-primary">{c.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-20">
        <div className="rounded-2xl bg-primary text-primary-foreground p-10 md:p-14 grid gap-8 lg:grid-cols-2 items-center shadow-elegant">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold">Our commitment to academic excellence</h2>
            <p className="mt-4 text-primary-foreground/85">
              We measure success not just by marks, but by the curiosity, confidence and
              capability we nurture. Our students consistently grow into thoughtful
              learners ready for the world ahead.
            </p>
          </div>
          <ul className="grid gap-3 text-sm">
            {[
              "Regular academic assessments with parental feedback",
              "Individual learning plans where needed",
              "Career guidance and counselling",
              "Strong exam preparation support",
            ].map((i) => (
              <li key={i} className="flex gap-2.5 items-start"><CheckCircle2 className="h-5 w-5 text-gold shrink-0 mt-0.5" />{i}</li>
            ))}
          </ul>
        </div>
      </section>
    </SiteLayout>
  );
}
