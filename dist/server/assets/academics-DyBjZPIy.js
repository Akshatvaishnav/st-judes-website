import { jsxs, jsx } from "react/jsx-runtime";
import { Lightbulb, Activity, Users, BookOpen, Palette, Trophy, Mic, Globe, CheckCircle2 } from "lucide-react";
import { S as SiteLayout, P as PageHero } from "./Layout-CtDSBleC.js";
import { S as SectionHeading } from "./router-BQRMw6oN.js";
import "@tanstack/react-router";
import "react";
import "@tanstack/react-query";
import "sonner";
const classes = [{
  title: "Pre-Primary",
  range: "Nursery – KG",
  desc: "Play-based learning that builds curiosity and confidence."
}, {
  title: "Primary",
  range: "Class I – V",
  desc: "Strong foundations in literacy, numeracy and inquiry."
}, {
  title: "Middle School",
  range: "Class VI – VIII",
  desc: "Concept mastery and exploration of interests."
}, {
  title: "Secondary",
  range: "Class IX – X",
  desc: "Focused academics and skill development."
}, {
  title: "Senior Secondary",
  range: "Class XI – XII",
  desc: "Streams that prepare students for higher education."
}];
const methods = [{
  icon: Lightbulb,
  title: "Interactive Learning",
  desc: "Two-way classrooms that spark curiosity and discussion."
}, {
  icon: Activity,
  title: "Practical Activities",
  desc: "Hands-on experiments, projects and real-world applications."
}, {
  icon: Users,
  title: "Skill Development",
  desc: "Communication, collaboration and critical thinking."
}, {
  icon: BookOpen,
  title: "Student Engagement",
  desc: "Personal attention and learner-led inquiry."
}];
const cocurr = [{
  icon: Palette,
  title: "Arts"
}, {
  icon: Trophy,
  title: "Sports"
}, {
  icon: Mic,
  title: "Leadership Activities"
}, {
  icon: Globe,
  title: "Cultural Programs"
}];
function AcademicsPage() {
  return /* @__PURE__ */ jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsx(PageHero, { eyebrow: "Academics", title: "A curriculum that thinks beyond textbooks", subtitle: "Concept-based learning, practical exploration and individual care at every stage." }),
    /* @__PURE__ */ jsxs("section", { className: "container-page py-20", children: [
      /* @__PURE__ */ jsx(SectionHeading, { eyebrow: "Curriculum", title: "Our educational approach", subtitle: "We blend a strong academic core with concept-based and activity-based learning to make knowledge stick." }),
      /* @__PURE__ */ jsx("div", { className: "mt-12 grid gap-6 md:grid-cols-3", children: [{
        title: "Concept-Based",
        desc: "Deep understanding over rote learning — students grasp the 'why' and 'how'."
      }, {
        title: "Activity-Driven",
        desc: "Experiential lessons that connect theory with hands-on practice."
      }, {
        title: "Holistic Growth",
        desc: "Academics balanced with arts, sports and values education."
      }].map((c) => /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-border bg-card p-7 shadow-card", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-semibold text-primary", children: c.title }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm text-muted-foreground leading-relaxed", children: c.desc })
      ] }, c.title)) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "bg-secondary/50", children: /* @__PURE__ */ jsxs("div", { className: "container-page py-20", children: [
      /* @__PURE__ */ jsx(SectionHeading, { eyebrow: "Classes Offered", title: "From first steps to senior school" }),
      /* @__PURE__ */ jsx("div", { className: "mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3", children: classes.map((c) => /* @__PURE__ */ jsxs("div", { className: "rounded-xl bg-card p-6 border border-border shadow-card hover:shadow-elegant hover:-translate-y-1 transition", children: [
        /* @__PURE__ */ jsx("div", { className: "text-xs font-semibold uppercase tracking-widest text-gold", children: c.range }),
        /* @__PURE__ */ jsx("h3", { className: "mt-2 font-display text-xl font-bold text-primary", children: c.title }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: c.desc })
      ] }, c.title)) })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "container-page py-20", children: [
      /* @__PURE__ */ jsx(SectionHeading, { eyebrow: "Methodology", title: "How we teach" }),
      /* @__PURE__ */ jsx("div", { className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4", children: methods.map((m) => /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-border bg-card p-6 shadow-card", children: [
        /* @__PURE__ */ jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-lg bg-primary-soft text-primary", children: /* @__PURE__ */ jsx(m.icon, { className: "h-6 w-6" }) }),
        /* @__PURE__ */ jsx("h4", { className: "mt-5 font-display font-semibold text-foreground", children: m.title }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: m.desc })
      ] }, m.title)) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "bg-secondary/50", children: /* @__PURE__ */ jsxs("div", { className: "container-page py-20", children: [
      /* @__PURE__ */ jsx(SectionHeading, { eyebrow: "Co-Curricular", title: "Developing the whole child" }),
      /* @__PURE__ */ jsx("div", { className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4", children: cocurr.map((c) => /* @__PURE__ */ jsxs("div", { className: "rounded-xl bg-card p-7 text-center border border-border shadow-card", children: [
        /* @__PURE__ */ jsx("div", { className: "mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold text-gold-foreground", children: /* @__PURE__ */ jsx(c.icon, { className: "h-7 w-7" }) }),
        /* @__PURE__ */ jsx("h4", { className: "mt-4 font-display font-semibold text-primary", children: c.title })
      ] }, c.title)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "container-page py-20", children: /* @__PURE__ */ jsxs("div", { className: "rounded-2xl bg-primary text-primary-foreground p-10 md:p-14 grid gap-8 lg:grid-cols-2 items-center shadow-elegant", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl md:text-4xl font-bold", children: "Our commitment to academic excellence" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-primary-foreground/85", children: "We measure success not just by marks, but by the curiosity, confidence and capability we nurture. Our students consistently grow into thoughtful learners ready for the world ahead." })
      ] }),
      /* @__PURE__ */ jsx("ul", { className: "grid gap-3 text-sm", children: ["Regular academic assessments with parental feedback", "Individual learning plans where needed", "Career guidance and counselling", "Strong board exam preparation support"].map((i) => /* @__PURE__ */ jsxs("li", { className: "flex gap-2.5 items-start", children: [
        /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5 text-gold shrink-0 mt-0.5" }),
        i
      ] }, i)) })
    ] }) })
  ] });
}
export {
  AcademicsPage as component
};
