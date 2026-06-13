import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { MapPin, Phone, MessageCircle, Mail, Clock } from "lucide-react";
import { S as SiteLayout, P as PageHero } from "./Layout-CtDSBleC.js";
import { toast } from "sonner";
import "@tanstack/react-router";
function ContactPage() {
  return /* @__PURE__ */ jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsx(PageHero, { eyebrow: "Contact", title: "We'd love to hear from you", subtitle: "Reach out for admissions, visits or any queries — we're here to help." }),
    /* @__PURE__ */ jsx("section", { className: "container-page py-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4", children: [{
      icon: MapPin,
      title: "Address",
      value: "Fatehnagar, Udaipur, Rajasthan, India"
    }, {
      icon: Phone,
      title: "Phone",
      value: "+91 98765 43210",
      href: "tel:+919876543210"
    }, {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "+91 98765 43210",
      href: "https://wa.me/919876543210"
    }, {
      icon: Mail,
      title: "Email",
      value: "info@stjudesfatehnagar.edu.in",
      href: "mailto:info@stjudesfatehnagar.edu.in"
    }].map((c) => /* @__PURE__ */ jsxs("a", { href: c.href ?? "#", className: "rounded-xl border border-border bg-card p-6 shadow-card hover:shadow-elegant transition block", children: [
      /* @__PURE__ */ jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-lg bg-primary-soft text-primary", children: /* @__PURE__ */ jsx(c.icon, { className: "h-6 w-6" }) }),
      /* @__PURE__ */ jsx("div", { className: "mt-4 text-xs font-semibold uppercase tracking-widest text-gold", children: c.title }),
      /* @__PURE__ */ jsx("div", { className: "mt-1 text-sm text-foreground break-words", children: c.value })
    ] }, c.title)) }),
    /* @__PURE__ */ jsxs("section", { className: "container-page pb-20 grid gap-8 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsx(ContactForm, {}),
      /* @__PURE__ */ jsx("div", { className: "rounded-2xl overflow-hidden border border-border shadow-card min-h-[420px]", children: /* @__PURE__ */ jsx("iframe", { title: "St. Jude's School Location", src: "https://www.google.com/maps?q=Fatehnagar,Udaipur,Rajasthan&output=embed", className: "w-full h-full min-h-[420px]", loading: "lazy" }) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "bg-secondary/50", children: /* @__PURE__ */ jsx("div", { className: "container-page py-16", children: /* @__PURE__ */ jsxs("div", { className: "rounded-2xl bg-card border border-border p-8 shadow-card grid gap-6 md:grid-cols-[auto_1fr] items-start", children: [
      /* @__PURE__ */ jsx("div", { className: "flex h-14 w-14 items-center justify-center rounded-lg bg-primary text-primary-foreground", children: /* @__PURE__ */ jsx(Clock, { className: "h-7 w-7" }) }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl font-bold text-primary", children: "School Hours" }),
        /* @__PURE__ */ jsxs("div", { className: "mt-4 grid gap-3 sm:grid-cols-3 text-sm", children: [
          /* @__PURE__ */ jsxs("div", { className: "rounded-lg bg-secondary p-4", children: [
            /* @__PURE__ */ jsx("div", { className: "font-semibold", children: "Mon – Fri" }),
            /* @__PURE__ */ jsx("div", { className: "text-muted-foreground", children: "8:00 AM – 3:30 PM" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "rounded-lg bg-secondary p-4", children: [
            /* @__PURE__ */ jsx("div", { className: "font-semibold", children: "Saturday" }),
            /* @__PURE__ */ jsx("div", { className: "text-muted-foreground", children: "8:00 AM – 12:30 PM" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "rounded-lg bg-secondary p-4", children: [
            /* @__PURE__ */ jsx("div", { className: "font-semibold", children: "Sunday" }),
            /* @__PURE__ */ jsx("div", { className: "text-muted-foreground", children: "Closed" })
          ] })
        ] })
      ] })
    ] }) }) })
  ] });
}
function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  return /* @__PURE__ */ jsxs("form", { className: "rounded-2xl bg-card border border-border p-6 sm:p-8 shadow-card grid gap-5 sm:grid-cols-2", onSubmit: (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Message sent! We'll get back to you soon.");
      e.target.reset();
    }, 600);
  }, children: [
    /* @__PURE__ */ jsx(Field, { label: "Name", name: "name", required: true }),
    /* @__PURE__ */ jsx(Field, { label: "Phone", name: "phone", type: "tel", required: true }),
    /* @__PURE__ */ jsx("div", { className: "sm:col-span-2", children: /* @__PURE__ */ jsx(Field, { label: "Email", name: "email", type: "email", required: true }) }),
    /* @__PURE__ */ jsx("div", { className: "sm:col-span-2", children: /* @__PURE__ */ jsx(Field, { label: "Subject", name: "subject", required: true }) }),
    /* @__PURE__ */ jsxs("div", { className: "sm:col-span-2", children: [
      /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-foreground mb-1.5", children: "Message" }),
      /* @__PURE__ */ jsx("textarea", { name: "message", required: true, rows: 5, maxLength: 1e3, className: "w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "sm:col-span-2", children: /* @__PURE__ */ jsx("button", { disabled: submitting, className: "w-full inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground py-3 text-sm font-semibold hover:opacity-95 disabled:opacity-60", children: submitting ? "Sending..." : "Send Message" }) })
  ] });
}
function Field({
  label,
  name,
  type = "text",
  required
}) {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("label", { htmlFor: name, className: "block text-sm font-medium text-foreground mb-1.5", children: [
      label,
      required && /* @__PURE__ */ jsx("span", { className: "text-destructive ml-1", children: "*" })
    ] }),
    /* @__PURE__ */ jsx("input", { id: name, name, type, required, maxLength: 200, className: "w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring" })
  ] });
}
export {
  ContactPage as component
};
