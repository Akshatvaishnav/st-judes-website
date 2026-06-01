import { createFileRoute, Link } from "@tanstack/react-router";
import {
  BookOpen, Users, ShieldCheck, Monitor, Trophy, Heart,
  MapPin, Phone, Mail, ArrowRight, Calendar, Sparkles,
} from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import heroCampus from "@/assets/hero-campus.jpg";
import facClassroom from "@/assets/facility-classroom.jpg";
import facLibrary from "@/assets/facility-library.jpg";
import facComputer from "@/assets/facility-computer.jpg";
import facPlayground from "@/assets/facility-playground.jpg";
import facActivity from "@/assets/facility-activity.jpg";
import facBus from "@/assets/facility-bus.jpg";
import galCultural from "@/assets/gallery-cultural.jpg";
import galSports from "@/assets/gallery-sports.jpg";
import students from "@/assets/students-group.jpg";

const SCHOOL_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "School",
  name: "St. Jude's School",
  description:
    "St. Jude's School in Fatehnagar, Udaipur offers quality education, holistic development and value-based learning for students.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Fatehnagar",
    addressRegion: "Rajasthan",
    addressCountry: "IN",
  },
  telephone: "+91-7023335023",
  email: "st.judesfnr@gmail.com",
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "St. Jude's School Fatehnagar | Admissions Open 2026-27" },
      { name: "description", content: "Admissions open at St. Jude's School, Fatehnagar, Udaipur. Quality education, experienced faculty, safe campus and holistic development for your child." },
      { property: "og:title", content: "St. Jude's School Fatehnagar | Admissions Open 2026-27" },
      { property: "og:description", content: "Empowering young minds through quality education, values and holistic development in Fatehnagar, Udaipur." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(SCHOOL_JSON_LD) }],
  }),
  component: HomePage,
});

const reasons = [
  { icon: BookOpen, title: "Academic Excellence", desc: "A rigorous, concept-driven curriculum that builds strong fundamentals and lifelong curiosity." },
  { icon: Users, title: "Experienced Faculty", desc: "Qualified, caring educators who mentor every child with personal attention." },
  { icon: ShieldCheck, title: "Safe Campus", desc: "Secure premises with CCTV, trained staff and child-first safety protocols." },
  { icon: Monitor, title: "Digital Learning", desc: "Smart classrooms and computer lab integrated with everyday learning." },
  { icon: Trophy, title: "Sports & Activities", desc: "Wide range of indoor and outdoor sports, arts and co-curricular activities." },
  { icon: Heart, title: "Character Building", desc: "Strong focus on values, empathy, discipline and responsible citizenship." },
];

const stats = [
  { value: "2014", label: "Established" },
  { value: "English", label: "Medium School" },
  { value: "Holistic", label: "Development" },//akshat
  { value: "Academic", label: "Excellence" },
  { value: "Safe", label: "Environment" },
  { value: "Strong", label: "Values" },
];

const facilities = [
  { img: facClassroom, title: "Smart Classrooms" },
  { img: facLibrary, title: "Library" },
  { img: facComputer, title: "Computer Lab" },
  { img: facPlayground, title: "Playground" },
  { img: facActivity, title: "Activity Rooms" },
  { img: facBus, title: "Transportation" },
];

const testimonials = [
  { name: "Anjali Sharma", role: "Parent, Class V", text: "The teachers are genuinely caring and the focus on values alongside academics is what sets St. Jude's apart." },
  { name: "Rohan Mehta", role: "Student, Class III", text: "I love our classrooms and the variety of sports. I have grown so much in confidence here." },
  { name: "Dr. Kavita Singh", role: "Parent, Class VIII", text: "Safe campus, transparent communication, and a strong academic culture. Highly recommended." },
];

function HomePage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative isolate">
        <img
          src={heroCampus}
          alt="St. Jude's School Fatehnagar campus"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative container-page py-24 md:py-36 text-primary-foreground">
          <div className="max-w-3xl animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full bg-gold/95 text-gold-foreground px-4 py-1.5 text-xs font-semibold uppercase tracking-wider mb-5">
              <Sparkles className="h-3.5 w-3.5" /> Admissions Open 2026-27
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05]">
              Admissions Open for{" "}
              <span className="text-gradient-gold">Academic Session 2026–27</span>
            </h1>
            <p className="mt-5 text-lg md:text-xl text-primary-foreground/90 max-w-2xl">
              Empowering young minds through quality education, values and holistic
              development at St. Jude's School, Fatehnagar.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/admissions" className="inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground shadow-elegant hover:brightness-95 transition">
                Apply Now <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-md border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-primary-foreground backdrop-blur hover:bg-white/20 transition">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="container-page py-20">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Why parents choose St. Jude's School"
          subtitle="A nurturing environment that balances academic excellence with character development."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r) => (
            <article key={r.title} className="group rounded-xl border border-border bg-card p-6 shadow-card hover:shadow-elegant hover:-translate-y-1 transition">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-soft text-primary group-hover:bg-primary group-hover:text-primary-foreground transition">
                <r.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-foreground">{r.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* About Preview */}
      <section className="bg-secondary/50">
        <div className="container-page py-20 grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <img src={students} alt="St. Jude's School students" width={1024} height={768} loading="lazy" className="rounded-2xl shadow-elegant w-full h-auto object-cover" />
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-gold mb-3">About Our School</div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary">
              A trusted name in education in Fatehnagar
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              St. Jude's School has been shaping curious minds and confident hearts for over
              two decades. Our student-first approach combines a strong academic foundation
              with creative exploration, sports and value-based learning — preparing
              children for a meaningful, successful life.
            </p>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              With experienced educators, modern facilities and a safe, inclusive campus,
              we partner with parents to bring out the very best in every child.
            </p>
            <Link to="/about" className="mt-7 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-95">
              Read More <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Facilities Preview */}
      <section className="bg-secondary/50">
        <div className="container-page py-20">
          <SectionHeading eyebrow="Facilities" title="World-class learning environment" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {facilities.map((f) => (
              <div key={f.title} className="group overflow-hidden rounded-xl bg-card shadow-card hover:shadow-elegant transition">
                <div className="overflow-hidden aspect-[4/3]">
                  <img src={f.img} alt={f.title} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition duration-500" />
                </div>
                <div className="p-5">
                  <h3 className="font-display font-semibold text-foreground">{f.title}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/facilities" className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-95">
              View All Facilities <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Student Life */}
      <section className="container-page py-20">
        <SectionHeading eyebrow="Student Life" title="Beyond the classroom" subtitle="Sports, arts, celebrations and competitions that shape well-rounded students." />
        <div className="mt-12 grid gap-4 md:grid-cols-3 md:grid-rows-2 md:h-[520px]">
          <div className="md:row-span-2 overflow-hidden rounded-xl">
            <img src={galCultural} alt="Cultural event" loading="lazy" className="h-full w-full object-cover hover:scale-105 transition duration-500" />
          </div>
          <div className="overflow-hidden rounded-xl">
            <img src={galSports} alt="Sports day" loading="lazy" className="h-full w-full object-cover hover:scale-105 transition duration-500" />
          </div>
          <div className="overflow-hidden rounded-xl">
            <img src={facActivity} alt="Activity" loading="lazy" className="h-full w-full object-cover hover:scale-105 transition duration-500" />
          </div>
          <div className="overflow-hidden rounded-xl">
            <img src={facPlayground} alt="Playground" loading="lazy" className="h-full w-full object-cover hover:scale-105 transition duration-500" />
          </div>
          <div className="overflow-hidden rounded-xl">
            <img src={students} alt="Students" loading="lazy" className="h-full w-full object-cover hover:scale-105 transition duration-500" />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-secondary/50">
        <div className="container-page py-20">
          <SectionHeading eyebrow="Testimonials" title="What our community says" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="rounded-xl bg-card p-7 shadow-card border border-border">
                <div className="text-gold text-3xl font-display leading-none">"</div>
                <blockquote className="mt-3 text-foreground/90 leading-relaxed text-sm">{t.text}</blockquote>
                <figcaption className="mt-6 border-t border-border pt-4">
                  <div className="font-semibold text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Admissions Banner */}
      <section className="container-page py-20">
        <div className="relative overflow-hidden rounded-2xl bg-primary text-primary-foreground p-10 md:p-14 text-center shadow-elegant">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, oklch(0.85 0.17 85 / 0.6), transparent 40%)" }} />
          <div className="relative">
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              Begin Your Child's Journey Toward Excellence
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-primary-foreground/85">
              Limited seats available for Academic Session 2026-27. Apply early to secure
              your child's place at St. Jude's School.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Link to="/admissions" className="inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground hover:brightness-95">
                Apply Now <ArrowRight className="h-4 w-4" />
              </Link>
              {/* <Link to="/contact" className="inline-flex items-center gap-2 rounded-md border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold backdrop-blur hover:bg-white/20">
                <Calendar className="h-4 w-4" /> Schedule a Visit
              </Link> */}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Preview */}
      <section className="container-page pb-20">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-8 shadow-card">
            <h3 className="font-display text-2xl font-bold text-primary">Get in touch</h3>
            <p className="mt-2 text-sm text-muted-foreground">We'd love to hear from you. Reach us using the details below.</p>
            <ul className="mt-6 space-y-4 text-sm">
              <li className="flex gap-3"><MapPin className="h-5 w-5 text-gold shrink-0" /> Fatehnagar, Udaipur, Rajasthan, India</li>
              <li className="flex gap-3 items-center">
                <Phone className="h-5 w-5 text-gold shrink-0" />
                <a
                  href="tel:+917023335023"
                  className="text-foreground hover:text-primary transition underline-offset-4 hover:underline"
                >
                  +91 7023335023
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="h-5 w-5 text-gold shrink-0" />
                <a
                  href="mailto:st.judesfnr@gmail.com"
                  className="text-foreground hover:text-primary transition underline-offset-4 hover:underline"
                >
                  st.judesfnr@gmail.com
                </a>
              </li>
            </ul>
          </div>
          <div className="rounded-2xl overflow-hidden border border-border shadow-card min-h-[320px]">
            <iframe
              title="St. Jude's School Location"
              src="https://www.google.com/maps?q=st.judeschhool,Fatehnagar,Udaipur,Rajasthan&output=embed"
              className="w-full h-full min-h-[320px]"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

// HMR touch

export function SectionHeading({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <div className="text-center max-w-2xl mx-auto">
      {eyebrow && <div className="text-xs font-semibold uppercase tracking-widest text-gold mb-3">{eyebrow}</div>}
      <h2 className="font-display text-3xl md:text-4xl font-bold text-primary">{title}</h2>
      {subtitle && <p className="mt-4 text-muted-foreground">{subtitle}</p>}
    </div>
  );
}
