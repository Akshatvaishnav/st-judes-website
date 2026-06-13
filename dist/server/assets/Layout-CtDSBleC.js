import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { X, Menu, Facebook, Instagram, Youtube, MapPin, Phone, Mail } from "lucide-react";
const logo = "/assets/logo-Bb6gtgw5.png";
const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/academics", label: "Academics" },
  { to: "/facilities", label: "Facilities" },
  { to: "/gallery", label: "Gallery" },
  { to: "/admissions", label: "Admissions" },
  { to: "/contact", label: "Contact" }
];
function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxs(
    "header",
    {
      className: `sticky top-0 z-50 w-full transition-all ${scrolled ? "bg-background/90 backdrop-blur border-b border-border shadow-sm" : "bg-background/70 backdrop-blur"}`,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "container-page flex h-16 items-center justify-between", children: [
          /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center gap-2.5 group", children: [
            /* @__PURE__ */ jsx("img", { src: logo, alt: "St. Jude's School logo", className: "h-12 w-12 object-contain" }),
            /* @__PURE__ */ jsxs("div", { className: "leading-tight", children: [
              /* @__PURE__ */ jsx("div", { className: "font-display font-bold text-primary text-base sm:text-lg", children: "St. Jude's School" }),
              /* @__PURE__ */ jsx("div", { className: "text-[10px] sm:text-xs text-muted-foreground -mt-0.5", children: "Fatehnagar, Udaipur" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("nav", { className: "hidden lg:flex items-center gap-1", children: [
            links.map((l) => /* @__PURE__ */ jsx(
              Link,
              {
                to: l.to,
                activeOptions: { exact: l.to === "/" },
                className: "px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors rounded-md data-[status=active]:text-primary data-[status=active]:bg-primary-soft",
                children: l.label
              },
              l.to
            )),
            /* @__PURE__ */ jsx(
              Link,
              {
                to: "/admissions",
                className: "ml-2 inline-flex items-center justify-center rounded-md bg-gold px-4 py-2 text-sm font-semibold text-gold-foreground shadow-sm hover:brightness-95 transition",
                children: "Apply Now"
              }
            )
          ] }),
          /* @__PURE__ */ jsx(
            "button",
            {
              "aria-label": open ? "Close menu" : "Open menu",
              "aria-expanded": open,
              className: "lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-primary hover:bg-primary-soft",
              onClick: () => setOpen((v) => !v),
              children: open ? /* @__PURE__ */ jsx(X, { className: "h-6 w-6" }) : /* @__PURE__ */ jsx(Menu, { className: "h-6 w-6" })
            }
          )
        ] }),
        open && /* @__PURE__ */ jsx("div", { className: "lg:hidden border-t border-border bg-background animate-fade-up", children: /* @__PURE__ */ jsxs("div", { className: "container-page py-3 flex flex-col gap-1", children: [
          links.map((l) => /* @__PURE__ */ jsx(
            Link,
            {
              to: l.to,
              activeOptions: { exact: l.to === "/" },
              onClick: () => setOpen(false),
              className: "px-3 py-2.5 text-sm font-medium rounded-md text-foreground/80 hover:bg-primary-soft data-[status=active]:text-primary data-[status=active]:bg-primary-soft",
              children: l.label
            },
            l.to
          )),
          /* @__PURE__ */ jsx(
            Link,
            {
              to: "/admissions",
              onClick: () => setOpen(false),
              className: "mt-2 inline-flex items-center justify-center rounded-md bg-gold px-4 py-2.5 text-sm font-semibold text-gold-foreground",
              children: "Apply Now"
            }
          )
        ] }) })
      ]
    }
  );
}
function Footer() {
  return /* @__PURE__ */ jsxs("footer", { className: "bg-primary text-primary-foreground mt-20", children: [
    /* @__PURE__ */ jsxs("div", { className: "container-page py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2.5", children: [
          /* @__PURE__ */ jsx("img", { src: logo, alt: "St. Jude's School logo", className: "h-12 w-12 object-contain bg-white rounded-lg p-1" }),
          /* @__PURE__ */ jsx("div", { className: "font-display font-bold text-lg", children: "St. Jude's School" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm text-primary-foreground/80 leading-relaxed", children: "Empowering young minds through quality education, strong values and holistic development since our founding in Fatehnagar, Udaipur." }),
        /* @__PURE__ */ jsx("div", { className: "mt-5 flex items-center gap-3", children: [Facebook, Instagram, Youtube].map((Icon, i) => /* @__PURE__ */ jsx(
          "a",
          {
            href: "#",
            "aria-label": "Social link",
            className: "flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-gold hover:text-gold-foreground transition",
            children: /* @__PURE__ */ jsx(Icon, { className: "h-4 w-4" })
          },
          i
        )) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "font-display font-semibold text-base mb-4", children: "Quick Links" }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-2.5 text-sm", children: [
          ["/", "Home"],
          ["/about", "About"],
          ["/academics", "Academics"],
          ["/facilities", "Facilities"],
          ["/admissions", "Admissions"],
          ["/contact", "Contact"]
        ].map(([to, label]) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to, className: "text-primary-foreground/80 hover:text-gold transition", children: label }) }, to)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "font-display font-semibold text-base mb-4", children: "Contact" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-3 text-sm text-primary-foreground/85", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex gap-2.5", children: [
            /* @__PURE__ */ jsx(MapPin, { className: "h-4 w-4 mt-0.5 text-gold shrink-0" }),
            " Fatehnagar, Udaipur, Rajasthan, India"
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex gap-2.5", children: [
            /* @__PURE__ */ jsx(Phone, { className: "h-4 w-4 mt-0.5 text-gold shrink-0" }),
            " +91 98765 43210"
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex gap-2.5", children: [
            /* @__PURE__ */ jsx(Mail, { className: "h-4 w-4 mt-0.5 text-gold shrink-0" }),
            " info@stjudesfatehnagar.edu.in"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "font-display font-semibold text-base mb-4", children: "Office Hours" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm text-primary-foreground/85", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsx("span", { children: "Mon – Fri" }),
            /* @__PURE__ */ jsx("span", { children: "8:00 AM – 3:30 PM" })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsx("span", { children: "Saturday" }),
            /* @__PURE__ */ jsx("span", { children: "8:00 AM – 12:30 PM" })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsx("span", { children: "Sunday" }),
            /* @__PURE__ */ jsx("span", { children: "Closed" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "border-t border-white/10", children: /* @__PURE__ */ jsxs("div", { className: "container-page py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-primary-foreground/70", children: [
      /* @__PURE__ */ jsxs("p", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " St. Jude's School, Fatehnagar. All rights reserved."
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-5", children: [
        /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-gold", children: "Privacy Policy" }),
        /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-gold", children: "Terms of Use" })
      ] })
    ] }) })
  ] });
}
function SiteLayout({ children }) {
  return /* @__PURE__ */ jsxs("div", { className: "flex min-h-screen flex-col", children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx("main", { className: "flex-1", children }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
function PageHero({
  eyebrow,
  title,
  subtitle
}) {
  return /* @__PURE__ */ jsxs("section", { className: "relative bg-primary text-primary-foreground overflow-hidden", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute inset-0 opacity-20",
        style: {
          backgroundImage: "radial-gradient(circle at 20% 30%, oklch(0.85 0.17 85 / 0.4), transparent 40%), radial-gradient(circle at 80% 70%, oklch(1 0 0 / 0.2), transparent 50%)"
        }
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "container-page relative py-16 md:py-24 text-center", children: [
      eyebrow && /* @__PURE__ */ jsx("div", { className: "inline-block text-xs font-semibold uppercase tracking-widest text-gold mb-3", children: eyebrow }),
      /* @__PURE__ */ jsx("h1", { className: "font-display text-3xl sm:text-4xl md:text-5xl font-bold animate-fade-up", children: title }),
      subtitle && /* @__PURE__ */ jsx("p", { className: "mt-4 max-w-2xl mx-auto text-primary-foreground/85 text-base md:text-lg", children: subtitle })
    ] })
  ] });
}
export {
  PageHero as P,
  SiteLayout as S
};
