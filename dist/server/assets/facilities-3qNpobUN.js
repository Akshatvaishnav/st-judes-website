import { jsxs, jsx } from "react/jsx-runtime";
import { S as SiteLayout, P as PageHero } from "./Layout-CtDSBleC.js";
import { CheckCircle2 } from "lucide-react";
import { f as facClassroom, a as facLibrary, b as facComputer, c as facPlayground, d as facActivity, e as facBus } from "./facility-bus-BMPEFH6c.js";
import "@tanstack/react-router";
import "react";
const facilities = [{
  img: facClassroom,
  title: "Smart Classrooms",
  desc: "Air-conditioned, technology-enabled classrooms with interactive panels for engaging lessons.",
  benefits: ["Digital content integration", "Comfortable learning environment", "Improved focus and retention"]
}, {
  img: facLibrary,
  title: "Library",
  desc: "A well-stocked library with curated reading material, references and quiet study zones.",
  benefits: ["Reading culture", "Research support", "Quiet study space"]
}, {
  img: facComputer,
  title: "Computer Lab",
  desc: "Modern computer lab with high-speed internet and updated software for digital learning.",
  benefits: ["Coding and IT skills", "Hands-on practice", "Future-ready learners"]
}, {
  img: facPlayground,
  title: "Playground",
  desc: "Spacious, safe playground for sports, games and physical development.",
  benefits: ["Physical fitness", "Team spirit", "Outdoor learning"]
}, {
  img: facActivity,
  title: "Activity Areas",
  desc: "Dedicated rooms for art, music, dance and other creative pursuits.",
  benefits: ["Creative expression", "Skill exploration", "Confidence building"]
}, {
  img: facBus,
  title: "Transportation",
  desc: "Safe, GPS-enabled school buses with trained drivers and attendants.",
  benefits: ["Reliable pickup", "Trained staff", "Safety-first protocols"]
}];
const support = [{
  title: "Security Measures",
  desc: "CCTV monitoring, trained guards and strict visitor protocols across the campus."
}, {
  title: "Clean Drinking Water",
  desc: "RO-purified drinking water available at multiple stations throughout the school."
}, {
  title: "Student Support",
  desc: "Counselling, first-aid and personal mentorship to support every learner."
}];
function FacilitiesPage() {
  return /* @__PURE__ */ jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsx(PageHero, { eyebrow: "Facilities", title: "A modern campus, built for learning", subtitle: "Thoughtfully designed spaces and infrastructure that support every dimension of a child's growth." }),
    /* @__PURE__ */ jsx("section", { className: "container-page py-20 space-y-16", children: facilities.map((f, i) => /* @__PURE__ */ jsxs("div", { className: `grid gap-10 lg:grid-cols-2 items-center ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`, children: [
      /* @__PURE__ */ jsx("img", { src: f.img, alt: f.title, loading: "lazy", className: "rounded-2xl shadow-elegant w-full aspect-[4/3] object-cover" }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "text-xs font-semibold uppercase tracking-widest text-gold mb-3", children: [
          "0",
          i + 1
        ] }),
        /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl font-bold text-primary", children: f.title }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-muted-foreground leading-relaxed", children: f.desc }),
        /* @__PURE__ */ jsx("ul", { className: "mt-5 space-y-2.5", children: f.benefits.map((b) => /* @__PURE__ */ jsxs("li", { className: "flex gap-2.5 text-sm", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5 text-gold mt-0.5 shrink-0" }),
          " ",
          b
        ] }, b)) })
      ] })
    ] }, f.title)) }),
    /* @__PURE__ */ jsx("section", { className: "bg-secondary/50", children: /* @__PURE__ */ jsx("div", { className: "container-page py-20 grid gap-6 md:grid-cols-3", children: support.map((s) => /* @__PURE__ */ jsxs("div", { className: "rounded-xl bg-card border border-border p-7 shadow-card", children: [
      /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-semibold text-primary", children: s.title }),
      /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: s.desc })
    ] }, s.title)) }) })
  ] });
}
export {
  FacilitiesPage as component
};
