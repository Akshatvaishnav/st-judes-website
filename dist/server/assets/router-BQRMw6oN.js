import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { createRootRouteWithContext, useRouter, Link, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent, createRouter } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { Toaster as Toaster$1 } from "sonner";
const appCss = "/assets/styles-C5bxeEC7.css";
const Toaster = ({ ...props }) => {
  return /* @__PURE__ */ jsx(
    Toaster$1,
    {
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...props
    }
  );
};
function NotFoundComponent() {
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$8 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "St. Jude's School Fatehnagar | Quality Education in Udaipur" },
      { name: "description", content: "St. Jude's School, Fatehnagar, Udaipur — quality education, experienced faculty, modern facilities and holistic development. Admissions open 2026-27." },
      { property: "og:site_name", content: "St. Jude's School" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" }
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$8.useRouteContext();
  return /* @__PURE__ */ jsxs(QueryClientProvider, { client: queryClient, children: [
    /* @__PURE__ */ jsx(Outlet, {}),
    /* @__PURE__ */ jsx(Toaster, { richColors: true, position: "top-center" })
  ] });
}
const BASE_URL = "";
const entries = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/about", priority: "0.8", changefreq: "monthly" },
  { path: "/academics", priority: "0.8", changefreq: "monthly" },
  { path: "/facilities", priority: "0.8", changefreq: "monthly" },
  { path: "/gallery", priority: "0.6", changefreq: "monthly" },
  { path: "/admissions", priority: "0.9", changefreq: "weekly" },
  { path: "/contact", priority: "0.7", changefreq: "monthly" }
];
const Route$7 = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const urls = entries.map((e) => `  <url>
    <loc>${BASE_URL}${e.path}</loc>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`).join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" }
        });
      }
    }
  }
});
const $$splitComponentImporter$6 = () => import("./gallery-BIJ8ekTf.js");
const Route$6 = createFileRoute("/gallery")({
  head: () => ({
    meta: [{
      title: "Gallery | St. Jude's School Fatehnagar"
    }, {
      name: "description",
      content: "Photo gallery of campus life, academics, sports, events and celebrations at St. Jude's School, Fatehnagar."
    }, {
      property: "og:title",
      content: "Gallery — St. Jude's School"
    }, {
      property: "og:description",
      content: "Glimpses of campus life, learning and celebrations."
    }, {
      property: "og:url",
      content: "/gallery"
    }],
    links: [{
      rel: "canonical",
      href: "/gallery"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./facilities-3qNpobUN.js");
const Route$5 = createFileRoute("/facilities")({
  head: () => ({
    meta: [{
      title: "Facilities | St. Jude's School Fatehnagar"
    }, {
      name: "description",
      content: "Modern smart classrooms, library, computer lab, playground, transportation and more at St. Jude's School, Fatehnagar."
    }, {
      property: "og:title",
      content: "Facilities at St. Jude's School"
    }, {
      property: "og:description",
      content: "A safe, modern campus designed for holistic learning."
    }, {
      property: "og:url",
      content: "/facilities"
    }],
    links: [{
      rel: "canonical",
      href: "/facilities"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./contact-BNwddHlH.js");
const Route$4 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact Us | St. Jude's School Fatehnagar"
    }, {
      name: "description",
      content: "Contact St. Jude's School, Fatehnagar, Udaipur — address, phone, WhatsApp, email, school hours and location map."
    }, {
      property: "og:title",
      content: "Contact St. Jude's School"
    }, {
      property: "og:description",
      content: "Get in touch with our admissions and administration teams."
    }, {
      property: "og:url",
      content: "/contact"
    }],
    links: [{
      rel: "canonical",
      href: "/contact"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./admissions-C-zrec1H.js");
const Route$3 = createFileRoute("/admissions")({
  head: () => ({
    meta: [{
      title: "Admissions Open 2026-27 | St. Jude's School Fatehnagar"
    }, {
      name: "description",
      content: "Admissions open at St. Jude's School, Fatehnagar for academic session 2026-27. Apply online, see process, documents and FAQs."
    }, {
      property: "og:title",
      content: "Admissions 2026-27 — St. Jude's School"
    }, {
      property: "og:description",
      content: "Apply now for the 2026-27 academic session in Fatehnagar, Udaipur."
    }, {
      property: "og:url",
      content: "/admissions"
    }],
    links: [{
      rel: "canonical",
      href: "/admissions"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./academics-DyBjZPIy.js");
const Route$2 = createFileRoute("/academics")({
  head: () => ({
    meta: [{
      title: "Academics | St. Jude's School Fatehnagar"
    }, {
      name: "description",
      content: "Explore the curriculum, classes offered and teaching methodology at St. Jude's School, Fatehnagar — concept-based, activity-driven learning."
    }, {
      property: "og:title",
      content: "Academics at St. Jude's School"
    }, {
      property: "og:description",
      content: "Concept-based, activity-driven curriculum from Pre-Primary to Senior School."
    }, {
      property: "og:url",
      content: "/academics"
    }],
    links: [{
      rel: "canonical",
      href: "/academics"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./about-B0LzYlV_.js");
const Route$1 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About Us | St. Jude's School Fatehnagar"
    }, {
      name: "description",
      content: "Learn about St. Jude's School, Fatehnagar — our vision, mission, core values and student-centered approach to education."
    }, {
      property: "og:title",
      content: "About St. Jude's School Fatehnagar"
    }, {
      property: "og:description",
      content: "Our vision, mission and values driving holistic education in Udaipur."
    }, {
      property: "og:url",
      content: "/about"
    }],
    links: [{
      rel: "canonical",
      href: "/about"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-COCyKOmR.js");
const SCHOOL_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "School",
  name: "St. Jude's School",
  description: "St. Jude's School in Fatehnagar, Udaipur offers quality education, holistic development and value-based learning for students.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Fatehnagar",
    addressRegion: "Rajasthan",
    addressCountry: "IN"
  },
  telephone: "+91-98765-43210",
  email: "info@stjudesfatehnagar.edu.in"
};
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "St. Jude's School Fatehnagar | Admissions Open 2026-27"
    }, {
      name: "description",
      content: "Admissions open at St. Jude's School, Fatehnagar, Udaipur. Quality education, experienced faculty, safe campus and holistic development for your child."
    }, {
      property: "og:title",
      content: "St. Jude's School Fatehnagar | Admissions Open 2026-27"
    }, {
      property: "og:description",
      content: "Empowering young minds through quality education, values and holistic development in Fatehnagar, Udaipur."
    }, {
      property: "og:type",
      content: "website"
    }, {
      property: "og:url",
      content: "/"
    }],
    links: [{
      rel: "canonical",
      href: "/"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify(SCHOOL_JSON_LD)
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
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
const SitemapDotxmlRoute = Route$7.update({
  id: "/sitemap.xml",
  path: "/sitemap.xml",
  getParentRoute: () => Route$8
});
const GalleryRoute = Route$6.update({
  id: "/gallery",
  path: "/gallery",
  getParentRoute: () => Route$8
});
const FacilitiesRoute = Route$5.update({
  id: "/facilities",
  path: "/facilities",
  getParentRoute: () => Route$8
});
const ContactRoute = Route$4.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$8
});
const AdmissionsRoute = Route$3.update({
  id: "/admissions",
  path: "/admissions",
  getParentRoute: () => Route$8
});
const AcademicsRoute = Route$2.update({
  id: "/academics",
  path: "/academics",
  getParentRoute: () => Route$8
});
const AboutRoute = Route$1.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$8
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$8
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  AcademicsRoute,
  AdmissionsRoute,
  ContactRoute,
  FacilitiesRoute,
  GalleryRoute,
  SitemapDotxmlRoute
};
const routeTree = Route$8._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  SectionHeading as S,
  router as r
};
