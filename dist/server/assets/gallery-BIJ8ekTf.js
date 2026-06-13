import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useMemo } from "react";
import { X } from "lucide-react";
import { S as SiteLayout, P as PageHero } from "./Layout-CtDSBleC.js";
import { h as heroCampus, s as students } from "./students-group-CRerPLuW.js";
import { f as facClassroom, a as facLibrary, b as facComputer, c as facPlayground, d as facActivity, e as facBus } from "./facility-bus-BMPEFH6c.js";
import { g as galSports, a as galCultural } from "./gallery-sports-ENr_wgzr.js";
import "@tanstack/react-router";
const items = [{
  src: heroCampus,
  alt: "Main campus",
  category: "Campus"
}, {
  src: facClassroom,
  alt: "Smart classroom",
  category: "Academics"
}, {
  src: facLibrary,
  alt: "Library",
  category: "Academics"
}, {
  src: facComputer,
  alt: "Computer lab",
  category: "Academics"
}, {
  src: facPlayground,
  alt: "Playground",
  category: "Sports"
}, {
  src: galSports,
  alt: "Sports day",
  category: "Sports"
}, {
  src: facActivity,
  alt: "Activity room",
  category: "Events"
}, {
  src: galCultural,
  alt: "Cultural celebration",
  category: "Celebrations"
}, {
  src: students,
  alt: "Students together",
  category: "Campus"
}, {
  src: facBus,
  alt: "School transportation",
  category: "Campus"
}];
const categories = ["All", "Campus", "Academics", "Sports", "Events", "Celebrations"];
function GalleryPage() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState(null);
  const filtered = useMemo(() => active === "All" ? items : items.filter((i) => i.category === active), [active]);
  return /* @__PURE__ */ jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsx(PageHero, { eyebrow: "Gallery", title: "Moments from St. Jude's", subtitle: "Snapshots of learning, play, friendship and celebration on our campus." }),
    /* @__PURE__ */ jsxs("section", { className: "container-page py-12", children: [
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap justify-center gap-2", children: categories.map((c) => /* @__PURE__ */ jsx("button", { onClick: () => setActive(c), className: `px-4 py-2 rounded-full text-sm font-medium transition ${active === c ? "bg-primary text-primary-foreground shadow-card" : "bg-secondary text-foreground hover:bg-primary-soft"}`, children: c }, c)) }),
      /* @__PURE__ */ jsx("div", { className: "mt-10 columns-1 sm:columns-2 lg:columns-3 gap-4 [&>*]:mb-4", children: filtered.map((img) => /* @__PURE__ */ jsx("button", { onClick: () => setLightbox(img.src), className: "block w-full overflow-hidden rounded-xl shadow-card hover:shadow-elegant transition group", children: /* @__PURE__ */ jsx("img", { src: img.src, alt: img.alt, loading: "lazy", className: "w-full h-auto object-cover group-hover:scale-105 transition duration-500" }) }, img.src + img.alt)) })
    ] }),
    lightbox && /* @__PURE__ */ jsxs("div", { role: "dialog", "aria-modal": "true", className: "fixed inset-0 z-[100] bg-black/85 flex items-center justify-center p-4 animate-fade-up", onClick: () => setLightbox(null), children: [
      /* @__PURE__ */ jsx("button", { "aria-label": "Close", className: "absolute top-4 right-4 h-10 w-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20", children: /* @__PURE__ */ jsx(X, { className: "h-5 w-5" }) }),
      /* @__PURE__ */ jsx("img", { src: lightbox, alt: "", className: "max-h-[90vh] max-w-[95vw] rounded-xl shadow-elegant" })
    ] })
  ] });
}
export {
  GalleryPage as component
};
