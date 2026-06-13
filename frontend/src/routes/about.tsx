import { createFileRoute } from "@tanstack/react-router";
import { Eye, Target, Award, Users, ShieldCheck, Lightbulb, Heart, CheckCircle2 } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { SectionHeading } from "./index";
import students from "@/assets/students-group.jpg";
import campus from "@/assets/hero-campus.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | St. Jude's School Fatehnagar" },
      { name: "description", content: "Learn about St. Jude's School, Fatehnagar — our vision, mission, core values and student-centered approach to education." },
      { property: "og:title", content: "About St. Jude's School Fatehnagar" },
      { property: "og:description", content: "Our vision, mission and values driving holistic education in Udaipur." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  { icon: Heart, title: "Respect", desc: "For self, others and our shared environment." },
  { icon: ShieldCheck, title: "Integrity", desc: "Honesty and strong moral principles in every action." },
  { icon: Award, title: "Excellence", desc: "Pursuing the highest standards in everything we do." },
  { icon: Users, title: "Compassion", desc: "Kindness and empathy in our community." },
  { icon: CheckCircle2, title: "Responsibility", desc: "Ownership of our learning and actions." },
];

const standouts = [
  { title: "Quality Education", desc: "Strong academic foundation with concept-based learning." },
  { title: "Individual Attention", desc: "Healthy student-teacher ratios and personal mentorship." },
  { title: "Safe Environment", desc: "Secure campus with strict child-safety protocols." },
  { title: "Future-Ready Learning", desc: "Digital fluency, critical thinking and life skills." },
];

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About Us"
        title="Shaping confident, curious & compassionate learners"
        subtitle="Our story, philosophy and the values that guide every classroom at St. Jude's."
      />

      <section className="container-page py-20 grid gap-12 lg:grid-cols-2 items-center">
        <img src={students} alt="Students at St. Jude's" loading="lazy" className="rounded-2xl shadow-elegant w-full" />
        <div>
          <div className="text-xs font-semibold uppercase tracking-widest text-gold mb-3">Our School</div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary">A student-centered approach to education</h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            St. Jude's School in Fatehnagar, Udaipur is a leading private educational
            institution committed to nurturing well-rounded individuals. We blend
            traditional values with modern pedagogy to create a learning environment
            where every child feels seen, supported and inspired.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Our educational philosophy is built on the belief that every child has
            unique strengths. Through concept-based learning, hands-on experiences and
            value education, we help students discover and develop their full potential.
          </p>
        </div>
      </section>

      <section className="bg-secondary/50">
        <div className="container-page py-20 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl bg-card p-8 shadow-card border border-border">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground"><Eye className="h-6 w-6" /></div>
            <h3 className="mt-5 font-display text-2xl font-bold text-primary">Our Vision</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              To be a premier institution that empowers students to become lifelong
              learners, ethical leaders and responsible global citizens, contributing
              meaningfully to society.
            </p>
          </div>
          <div className="rounded-2xl bg-card p-8 shadow-card border border-border">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gold text-gold-foreground"><Target className="h-6 w-6" /></div>
            <h3 className="mt-5 font-display text-2xl font-bold text-primary">Our Mission</h3>
            <ul className="mt-3 space-y-2.5 text-muted-foreground">
              {[
                "Deliver quality, value-based education with care.",
                "Foster critical thinking and creativity in every child.",
                "Provide a safe, inclusive and enriching campus.",
                "Build strong character through values and discipline.",
                "Prepare students for an evolving global future.",
              ].map((m) => (
                <li key={m} className="flex gap-2.5"><CheckCircle2 className="h-5 w-5 text-gold shrink-0 mt-0.5" /><span>{m}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="container-page py-20">
        <SectionHeading eyebrow="Core Values" title="The principles that guide us" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {values.map((v) => (
            <div key={v.title} className="rounded-xl border border-border bg-card p-6 text-center shadow-card hover:shadow-elegant transition">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary-soft text-primary"><v.icon className="h-6 w-6" /></div>
              <h4 className="mt-4 font-display font-semibold text-foreground">{v.title}</h4>
              <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary/50">
        <div className="container-page py-20">
          <SectionHeading eyebrow="Why We Stand Out" title="What makes St. Jude's different" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {standouts.map((s, i) => (
              <div key={s.title} className="rounded-xl bg-card p-6 border border-border shadow-card">
                <div className="text-gold font-display text-3xl font-bold">0{i + 1}</div>
                <h4 className="mt-3 font-display font-semibold text-primary">{s.title}</h4>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-20 grid gap-12 lg:grid-cols-[1fr_2fr] items-center">
        <div className="rounded-2xl overflow-hidden bg-primary-soft aspect-[3/4] flex items-center justify-center">
          <div className="text-center p-6">
            <div className="mx-auto h-32 w-32 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-display text-4xl font-bold">P</div>
            <div className="mt-4 font-display font-semibold text-primary">Principal</div>
            <div className="text-xs text-muted-foreground">St. Jude's School</div>
          </div>
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-widest text-gold mb-3">Message from Management</div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary">A commitment to every child's success</h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            At St. Jude's School, our purpose is simple — to provide every student with
            an environment in which they can flourish. We are committed to educational
            excellence, continuous improvement and the kind of personal care that turns
            schools into second homes.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            We invite parents to partner with us on this journey of nurturing the next
            generation of thoughtful, capable and kind individuals.
          </p>
          <div className="mt-6 font-display italic text-primary">— The Management</div>
        </div>
      </section>

      <section className="bg-secondary/50">
        <div className="container-page py-20">
          <SectionHeading eyebrow="Our Campus" title="A safe and inspiring environment" />
          <img src={campus} alt="St. Jude's School campus" loading="lazy" className="mt-12 rounded-2xl shadow-elegant w-full object-cover" />
        </div>
      </section>
    </SiteLayout>
  );
}
