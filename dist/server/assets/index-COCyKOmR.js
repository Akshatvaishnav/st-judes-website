import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { Sparkles, ArrowRight, BookOpen, Users, ShieldCheck, Monitor, Trophy, Heart, Calendar, MapPin, Phone, Mail } from "lucide-react";
import { S as SiteLayout } from "./Layout-CtDSBleC.js";
import { h as heroCampus, s as students } from "./students-group-CRerPLuW.js";
import { f as facClassroom, a as facLibrary, b as facComputer, c as facPlayground, d as facActivity, e as facBus } from "./facility-bus-BMPEFH6c.js";
import { a as galCultural, g as galSports } from "./gallery-sports-ENr_wgzr.js";
import "react";
const reasons = [{
  icon: BookOpen,
  title: "Academic Excellence",
  desc: "A rigorous, concept-driven curriculum that builds strong fundamentals and lifelong curiosity."
}, {
  icon: Users,
  title: "Experienced Faculty",
  desc: "Qualified, caring educators who mentor every child with personal attention."
}, {
  icon: ShieldCheck,
  title: "Safe Campus",
  desc: "Secure premises with CCTV, trained staff and child-first safety protocols."
}, {
  icon: Monitor,
  title: "Digital Learning",
  desc: "Smart classrooms and modern computer lab integrated with everyday learning."
}, {
  icon: Trophy,
  title: "Sports & Activities",
  desc: "Wide range of indoor and outdoor sports, arts and co-curricular activities."
}, {
  icon: Heart,
  title: "Character Building",
  desc: "Strong focus on values, empathy, discipline and responsible citizenship."
}];
const stats = [{
  value: "25+",
  label: "Years of Excellence"
}, {
  value: "1500+",
  label: "Happy Students"
}, {
  value: "80+",
  label: "Qualified Educators"
}, {
  value: "30+",
  label: "Co-Curricular Activities"
}, {
  value: "100%",
  label: "Safe Environment"
}, {
  value: "12+",
  label: "Acres of Campus"
}];
const facilities = [{
  img: facClassroom,
  title: "Smart Classrooms"
}, {
  img: facLibrary,
  title: "Library"
}, {
  img: facComputer,
  title: "Computer Lab"
}, {
  img: facPlayground,
  title: "Playground"
}, {
  img: facActivity,
  title: "Activity Rooms"
}, {
  img: facBus,
  title: "Transportation"
}];
const testimonials = [{
  name: "Anjali Sharma",
  role: "Parent, Class V",
  text: "The teachers are genuinely caring and the focus on values alongside academics is what sets St. Jude's apart."
}, {
  name: "Rohan Mehta",
  role: "Student, Class X",
  text: "I love our smart classrooms and the variety of sports. I have grown so much in confidence here."
}, {
  name: "Dr. Kavita Singh",
  role: "Parent, Class VIII",
  text: "Safe campus, transparent communication, and a strong academic culture. Highly recommended."
}];
function HomePage() {
  return /* @__PURE__ */ jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxs("section", { className: "relative isolate", children: [
      /* @__PURE__ */ jsx("img", { src: heroCampus, alt: "St. Jude's School Fatehnagar campus", width: 1920, height: 1080, className: "absolute inset-0 h-full w-full object-cover" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-hero-overlay" }),
      /* @__PURE__ */ jsx("div", { className: "relative container-page py-24 md:py-36 text-primary-foreground", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl animate-fade-up", children: [
        /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 rounded-full bg-gold/95 text-gold-foreground px-4 py-1.5 text-xs font-semibold uppercase tracking-wider mb-5", children: [
          /* @__PURE__ */ jsx(Sparkles, { className: "h-3.5 w-3.5" }),
          " Admissions Open 2026-27"
        ] }),
        /* @__PURE__ */ jsxs("h1", { className: "font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05]", children: [
          "Admissions Open for",
          " ",
          /* @__PURE__ */ jsx("span", { className: "text-gradient-gold", children: "Academic Session 2026–27" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-5 text-lg md:text-xl text-primary-foreground/90 max-w-2xl", children: "Empowering young minds through quality education, values and holistic development at St. Jude's School, Fatehnagar." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxs(Link, { to: "/admissions", className: "inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground shadow-elegant hover:brightness-95 transition", children: [
            "Apply Now ",
            /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
          ] }),
          /* @__PURE__ */ jsx(Link, { to: "/contact", className: "inline-flex items-center gap-2 rounded-md border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-primary-foreground backdrop-blur hover:bg-white/20 transition", children: "Contact Us" })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "container-page py-20", children: [
      /* @__PURE__ */ jsx(SectionHeading, { eyebrow: "Why Choose Us", title: "Why parents choose St. Jude's School", subtitle: "A nurturing environment that balances academic excellence with character development." }),
      /* @__PURE__ */ jsx("div", { className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3", children: reasons.map((r) => /* @__PURE__ */ jsxs("article", { className: "group rounded-xl border border-border bg-card p-6 shadow-card hover:shadow-elegant hover:-translate-y-1 transition", children: [
        /* @__PURE__ */ jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-lg bg-primary-soft text-primary group-hover:bg-primary group-hover:text-primary-foreground transition", children: /* @__PURE__ */ jsx(r.icon, { className: "h-6 w-6" }) }),
        /* @__PURE__ */ jsx("h3", { className: "mt-5 font-display text-lg font-semibold text-foreground", children: r.title }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground leading-relaxed", children: r.desc })
      ] }, r.title)) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "bg-secondary/50", children: /* @__PURE__ */ jsxs("div", { className: "container-page py-20 grid gap-12 lg:grid-cols-2 items-center", children: [
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("img", { src: students, alt: "St. Jude's School students", width: 1024, height: 768, loading: "lazy", className: "rounded-2xl shadow-elegant w-full h-auto object-cover" }) }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "text-xs font-semibold uppercase tracking-widest text-gold mb-3", children: "About Our School" }),
        /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl md:text-4xl font-bold text-primary", children: "A trusted name in education in Fatehnagar" }),
        /* @__PURE__ */ jsx("p", { className: "mt-5 text-muted-foreground leading-relaxed", children: "St. Jude's School has been shaping curious minds and confident hearts for over two decades. Our student-first approach combines a strong academic foundation with creative exploration, sports and value-based learning — preparing children for a meaningful, successful life." }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-muted-foreground leading-relaxed", children: "With experienced educators, modern facilities and a safe, inclusive campus, we partner with parents to bring out the very best in every child." }),
        /* @__PURE__ */ jsxs(Link, { to: "/about", className: "mt-7 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-95", children: [
          "Read More ",
          /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "container-page py-20", children: [
      /* @__PURE__ */ jsx(SectionHeading, { eyebrow: "At a Glance", title: "School Highlights" }),
      /* @__PURE__ */ jsx("div", { className: "mt-12 grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-6", children: stats.map((s) => /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-border bg-card p-6 text-center shadow-card hover:shadow-elegant transition", children: [
        /* @__PURE__ */ jsx("div", { className: "font-display text-3xl md:text-4xl font-bold text-primary", children: s.value }),
        /* @__PURE__ */ jsx("div", { className: "mt-2 text-xs md:text-sm text-muted-foreground", children: s.label })
      ] }, s.label)) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "bg-secondary/50", children: /* @__PURE__ */ jsxs("div", { className: "container-page py-20", children: [
      /* @__PURE__ */ jsx(SectionHeading, { eyebrow: "Facilities", title: "World-class learning environment" }),
      /* @__PURE__ */ jsx("div", { className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3", children: facilities.map((f) => /* @__PURE__ */ jsxs("div", { className: "group overflow-hidden rounded-xl bg-card shadow-card hover:shadow-elegant transition", children: [
        /* @__PURE__ */ jsx("div", { className: "overflow-hidden aspect-[4/3]", children: /* @__PURE__ */ jsx("img", { src: f.img, alt: f.title, loading: "lazy", className: "h-full w-full object-cover group-hover:scale-105 transition duration-500" }) }),
        /* @__PURE__ */ jsx("div", { className: "p-5", children: /* @__PURE__ */ jsx("h3", { className: "font-display font-semibold text-foreground", children: f.title }) })
      ] }, f.title)) }),
      /* @__PURE__ */ jsx("div", { className: "mt-10 text-center", children: /* @__PURE__ */ jsxs(Link, { to: "/facilities", className: "inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-95", children: [
        "View All Facilities ",
        /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "container-page py-20", children: [
      /* @__PURE__ */ jsx(SectionHeading, { eyebrow: "Student Life", title: "Beyond the classroom", subtitle: "Sports, arts, celebrations and competitions that shape well-rounded students." }),
      /* @__PURE__ */ jsxs("div", { className: "mt-12 grid gap-4 md:grid-cols-3 md:grid-rows-2 md:h-[520px]", children: [
        /* @__PURE__ */ jsx("div", { className: "md:row-span-2 overflow-hidden rounded-xl", children: /* @__PURE__ */ jsx("img", { src: galCultural, alt: "Cultural event", loading: "lazy", className: "h-full w-full object-cover hover:scale-105 transition duration-500" }) }),
        /* @__PURE__ */ jsx("div", { className: "overflow-hidden rounded-xl", children: /* @__PURE__ */ jsx("img", { src: galSports, alt: "Sports day", loading: "lazy", className: "h-full w-full object-cover hover:scale-105 transition duration-500" }) }),
        /* @__PURE__ */ jsx("div", { className: "overflow-hidden rounded-xl", children: /* @__PURE__ */ jsx("img", { src: facActivity, alt: "Activity", loading: "lazy", className: "h-full w-full object-cover hover:scale-105 transition duration-500" }) }),
        /* @__PURE__ */ jsx("div", { className: "overflow-hidden rounded-xl", children: /* @__PURE__ */ jsx("img", { src: facPlayground, alt: "Playground", loading: "lazy", className: "h-full w-full object-cover hover:scale-105 transition duration-500" }) }),
        /* @__PURE__ */ jsx("div", { className: "overflow-hidden rounded-xl", children: /* @__PURE__ */ jsx("img", { src: students, alt: "Students", loading: "lazy", className: "h-full w-full object-cover hover:scale-105 transition duration-500" }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "bg-secondary/50", children: /* @__PURE__ */ jsxs("div", { className: "container-page py-20", children: [
      /* @__PURE__ */ jsx(SectionHeading, { eyebrow: "Testimonials", title: "What our community says" }),
      /* @__PURE__ */ jsx("div", { className: "mt-12 grid gap-6 md:grid-cols-3", children: testimonials.map((t) => /* @__PURE__ */ jsxs("figure", { className: "rounded-xl bg-card p-7 shadow-card border border-border", children: [
        /* @__PURE__ */ jsx("div", { className: "text-gold text-3xl font-display leading-none", children: '"' }),
        /* @__PURE__ */ jsx("blockquote", { className: "mt-3 text-foreground/90 leading-relaxed text-sm", children: t.text }),
        /* @__PURE__ */ jsxs("figcaption", { className: "mt-6 border-t border-border pt-4", children: [
          /* @__PURE__ */ jsx("div", { className: "font-semibold text-foreground", children: t.name }),
          /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground", children: t.role })
        ] })
      ] }, t.name)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "container-page py-20", children: /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden rounded-2xl bg-primary text-primary-foreground p-10 md:p-14 text-center shadow-elegant", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-20", style: {
        backgroundImage: "radial-gradient(circle at 20% 20%, oklch(0.85 0.17 85 / 0.6), transparent 40%)"
      } }),
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl md:text-4xl font-bold", children: "Begin Your Child's Journey Toward Excellence" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 max-w-2xl mx-auto text-primary-foreground/85", children: "Limited seats available for Academic Session 2026-27. Apply early to secure your child's place at St. Jude's School." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-7 flex flex-wrap justify-center gap-3", children: [
          /* @__PURE__ */ jsxs(Link, { to: "/admissions", className: "inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground hover:brightness-95", children: [
            "Apply Now ",
            /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
          ] }),
          /* @__PURE__ */ jsxs(Link, { to: "/contact", className: "inline-flex items-center gap-2 rounded-md border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold backdrop-blur hover:bg-white/20", children: [
            /* @__PURE__ */ jsx(Calendar, { className: "h-4 w-4" }),
            " Schedule a Visit"
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "container-page pb-20", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-8 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-border bg-card p-8 shadow-card", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl font-bold text-primary", children: "Get in touch" }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "We'd love to hear from you. Reach us using the details below." }),
        /* @__PURE__ */ jsxs("ul", { className: "mt-6 space-y-4 text-sm", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsx(MapPin, { className: "h-5 w-5 text-gold shrink-0" }),
            " Fatehnagar, Udaipur, Rajasthan, India"
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsx(Phone, { className: "h-5 w-5 text-gold shrink-0" }),
            " +91 98765 43210"
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsx(Mail, { className: "h-5 w-5 text-gold shrink-0" }),
            " info@stjudesfatehnagar.edu.in"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "rounded-2xl overflow-hidden border border-border shadow-card min-h-[320px]", children: /* @__PURE__ */ jsx("iframe", { title: "St. Jude's School Location", src: "https://www.google.com/maps?q=Fatehnagar,Udaipur,Rajasthan&output=embed", className: "w-full h-full min-h-[320px]", loading: "lazy" }) })
    ] }) })
  ] });
}
function SectionHeading({
  eyebrow,
  title,
  subtitle
}) {
  return /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto", children: [
    eyebrow && /* @__PURE__ */ jsx("div", { className: "text-xs font-semibold uppercase tracking-widest text-gold mb-3", children: eyebrow }),
    /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl md:text-4xl font-bold text-primary", children: title }),
    subtitle && /* @__PURE__ */ jsx("p", { className: "mt-4 text-muted-foreground", children: subtitle })
  ] });
}
export {
  SectionHeading,
  HomePage as component
};
