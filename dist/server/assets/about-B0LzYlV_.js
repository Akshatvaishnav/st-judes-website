import { jsxs, jsx } from "react/jsx-runtime";
import { Eye, Target, CheckCircle2, Heart, ShieldCheck, Award, Users } from "lucide-react";
import { S as SiteLayout, P as PageHero } from "./Layout-CtDSBleC.js";
import { S as SectionHeading } from "./router-BQRMw6oN.js";
import { s as students, h as heroCampus } from "./students-group-CRerPLuW.js";
import "@tanstack/react-router";
import "react";
import "@tanstack/react-query";
import "sonner";
const values = [{
  icon: Heart,
  title: "Respect",
  desc: "For self, others and our shared environment."
}, {
  icon: ShieldCheck,
  title: "Integrity",
  desc: "Honesty and strong moral principles in every action."
}, {
  icon: Award,
  title: "Excellence",
  desc: "Pursuing the highest standards in everything we do."
}, {
  icon: Users,
  title: "Compassion",
  desc: "Kindness and empathy in our community."
}, {
  icon: CheckCircle2,
  title: "Responsibility",
  desc: "Ownership of our learning and actions."
}];
const standouts = [{
  title: "Quality Education",
  desc: "Strong academic foundation with concept-based learning."
}, {
  title: "Individual Attention",
  desc: "Healthy student-teacher ratios and personal mentorship."
}, {
  title: "Safe Environment",
  desc: "Secure campus with strict child-safety protocols."
}, {
  title: "Future-Ready Learning",
  desc: "Digital fluency, critical thinking and life skills."
}];
function AboutPage() {
  return /* @__PURE__ */ jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsx(PageHero, { eyebrow: "About Us", title: "Shaping confident, curious & compassionate learners", subtitle: "Our story, philosophy and the values that guide every classroom at St. Jude's." }),
    /* @__PURE__ */ jsxs("section", { className: "container-page py-20 grid gap-12 lg:grid-cols-2 items-center", children: [
      /* @__PURE__ */ jsx("img", { src: students, alt: "Students at St. Jude's", loading: "lazy", className: "rounded-2xl shadow-elegant w-full" }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "text-xs font-semibold uppercase tracking-widest text-gold mb-3", children: "Our School" }),
        /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl md:text-4xl font-bold text-primary", children: "A student-centered approach to education" }),
        /* @__PURE__ */ jsx("p", { className: "mt-5 text-muted-foreground leading-relaxed", children: "St. Jude's School in Fatehnagar, Udaipur is a leading private educational institution committed to nurturing well-rounded individuals. We blend traditional values with modern pedagogy to create a learning environment where every child feels seen, supported and inspired." }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-muted-foreground leading-relaxed", children: "Our educational philosophy is built on the belief that every child has unique strengths. Through concept-based learning, hands-on experiences and value education, we help students discover and develop their full potential." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "bg-secondary/50", children: /* @__PURE__ */ jsxs("div", { className: "container-page py-20 grid gap-8 md:grid-cols-2", children: [
      /* @__PURE__ */ jsxs("div", { className: "rounded-2xl bg-card p-8 shadow-card border border-border", children: [
        /* @__PURE__ */ jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground", children: /* @__PURE__ */ jsx(Eye, { className: "h-6 w-6" }) }),
        /* @__PURE__ */ jsx("h3", { className: "mt-5 font-display text-2xl font-bold text-primary", children: "Our Vision" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-muted-foreground leading-relaxed", children: "To be a premier institution that empowers students to become lifelong learners, ethical leaders and responsible global citizens, contributing meaningfully to society." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "rounded-2xl bg-card p-8 shadow-card border border-border", children: [
        /* @__PURE__ */ jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-lg bg-gold text-gold-foreground", children: /* @__PURE__ */ jsx(Target, { className: "h-6 w-6" }) }),
        /* @__PURE__ */ jsx("h3", { className: "mt-5 font-display text-2xl font-bold text-primary", children: "Our Mission" }),
        /* @__PURE__ */ jsx("ul", { className: "mt-3 space-y-2.5 text-muted-foreground", children: ["Deliver quality, value-based education with care.", "Foster critical thinking and creativity in every child.", "Provide a safe, inclusive and enriching campus.", "Build strong character through values and discipline.", "Prepare students for an evolving global future."].map((m) => /* @__PURE__ */ jsxs("li", { className: "flex gap-2.5", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5 text-gold shrink-0 mt-0.5" }),
          /* @__PURE__ */ jsx("span", { children: m })
        ] }, m)) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "container-page py-20", children: [
      /* @__PURE__ */ jsx(SectionHeading, { eyebrow: "Core Values", title: "The principles that guide us" }),
      /* @__PURE__ */ jsx("div", { className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5", children: values.map((v) => /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-border bg-card p-6 text-center shadow-card hover:shadow-elegant transition", children: [
        /* @__PURE__ */ jsx("div", { className: "mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary-soft text-primary", children: /* @__PURE__ */ jsx(v.icon, { className: "h-6 w-6" }) }),
        /* @__PURE__ */ jsx("h4", { className: "mt-4 font-display font-semibold text-foreground", children: v.title }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: v.desc })
      ] }, v.title)) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "bg-secondary/50", children: /* @__PURE__ */ jsxs("div", { className: "container-page py-20", children: [
      /* @__PURE__ */ jsx(SectionHeading, { eyebrow: "Why We Stand Out", title: "What makes St. Jude's different" }),
      /* @__PURE__ */ jsx("div", { className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4", children: standouts.map((s, i) => /* @__PURE__ */ jsxs("div", { className: "rounded-xl bg-card p-6 border border-border shadow-card", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-gold font-display text-3xl font-bold", children: [
          "0",
          i + 1
        ] }),
        /* @__PURE__ */ jsx("h4", { className: "mt-3 font-display font-semibold text-primary", children: s.title }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: s.desc })
      ] }, s.title)) })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "container-page py-20 grid gap-12 lg:grid-cols-[1fr_2fr] items-center", children: [
      /* @__PURE__ */ jsx("div", { className: "rounded-2xl overflow-hidden bg-primary-soft aspect-[3/4] flex items-center justify-center", children: /* @__PURE__ */ jsxs("div", { className: "text-center p-6", children: [
        /* @__PURE__ */ jsx("div", { className: "mx-auto h-32 w-32 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-display text-4xl font-bold", children: "P" }),
        /* @__PURE__ */ jsx("div", { className: "mt-4 font-display font-semibold text-primary", children: "Principal" }),
        /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground", children: "St. Jude's School" })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "text-xs font-semibold uppercase tracking-widest text-gold mb-3", children: "Message from Management" }),
        /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl md:text-4xl font-bold text-primary", children: "A commitment to every child's success" }),
        /* @__PURE__ */ jsx("p", { className: "mt-5 text-muted-foreground leading-relaxed", children: "At St. Jude's School, our purpose is simple — to provide every student with an environment in which they can flourish. We are committed to educational excellence, continuous improvement and the kind of personal care that turns schools into second homes." }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-muted-foreground leading-relaxed", children: "We invite parents to partner with us on this journey of nurturing the next generation of thoughtful, capable and kind individuals." }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 font-display italic text-primary", children: "— The Management" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "bg-secondary/50", children: /* @__PURE__ */ jsxs("div", { className: "container-page py-20", children: [
      /* @__PURE__ */ jsx(SectionHeading, { eyebrow: "Our Campus", title: "A safe and inspiring environment" }),
      /* @__PURE__ */ jsx("img", { src: heroCampus, alt: "St. Jude's School campus", loading: "lazy", className: "mt-12 rounded-2xl shadow-elegant w-full object-cover" })
    ] }) })
  ] });
}
export {
  AboutPage as component
};
