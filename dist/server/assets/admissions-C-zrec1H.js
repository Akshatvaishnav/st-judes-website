import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { Search, GraduationCap, FileText, ClipboardCheck, UserCheck, CheckCircle2, Phone, Mail, ChevronDown } from "lucide-react";
import { S as SiteLayout, P as PageHero } from "./Layout-CtDSBleC.js";
import { S as SectionHeading } from "./router-BQRMw6oN.js";
import { toast } from "sonner";
import "@tanstack/react-router";
import "@tanstack/react-query";
const steps = [{
  icon: Search,
  title: "Inquiry",
  desc: "Submit an inquiry form or call our admissions office."
}, {
  icon: GraduationCap,
  title: "Campus Visit",
  desc: "Visit the school, meet our team and tour the campus."
}, {
  icon: FileText,
  title: "Application",
  desc: "Fill out and submit the application form with details."
}, {
  icon: ClipboardCheck,
  title: "Verification",
  desc: "We review the application and verify documents."
}, {
  icon: UserCheck,
  title: "Confirmation",
  desc: "Receive admission confirmation and complete the formalities."
}];
const documents = ["Birth Certificate (copy)", "Previous school transfer certificate (if applicable)", "Previous academic report card (if applicable)", "Aadhaar Card (child & parents)", "Passport-size photographs", "Address proof"];
const faqs = [{
  q: "When do admissions begin for 2026-27?",
  a: "Admissions are currently open. We encourage parents to apply early as seats are limited."
}, {
  q: "What is the age criteria?",
  a: "Age criteria varies by class. Please contact our admissions office for the exact eligibility for your child's intended grade."
}, {
  q: "Is there an entrance test?",
  a: "For higher classes, an informal assessment may be conducted. For pre-primary, an interaction with the child and parents is held."
}, {
  q: "Do you offer transportation?",
  a: "Yes, we operate safe, GPS-enabled school buses across multiple routes around Fatehnagar and Udaipur."
}, {
  q: "How can I schedule a campus visit?",
  a: "Use the inquiry form below or call our admissions office to schedule a personalised campus tour."
}];
function AdmissionsPage() {
  return /* @__PURE__ */ jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsx(PageHero, { eyebrow: "Admissions 2026-27", title: "Begin your child's journey with us", subtitle: "A simple, transparent admission process — designed with parents in mind." }),
    /* @__PURE__ */ jsx("section", { className: "container-page py-16", children: /* @__PURE__ */ jsxs("div", { className: "rounded-2xl bg-gold text-gold-foreground p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-elegant", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "text-xs font-semibold uppercase tracking-widest", children: "Now Open" }),
        /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl md:text-3xl font-bold mt-1", children: "Admissions for Academic Session 2026–27" }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-gold-foreground/80 text-sm", children: "Limited seats. Apply early to secure your child's place." })
      ] }),
      /* @__PURE__ */ jsx("a", { href: "#inquiry", className: "inline-flex items-center gap-2 rounded-md bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold hover:opacity-95", children: "Apply Now" })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "container-page pb-20", children: [
      /* @__PURE__ */ jsx(SectionHeading, { eyebrow: "Process", title: "How to apply, step by step" }),
      /* @__PURE__ */ jsx("ol", { className: "mt-12 grid gap-6 md:grid-cols-5", children: steps.map((s, i) => /* @__PURE__ */ jsxs("li", { className: "relative rounded-xl bg-card border border-border p-6 shadow-card", children: [
        /* @__PURE__ */ jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground", children: /* @__PURE__ */ jsx(s.icon, { className: "h-6 w-6" }) }),
        /* @__PURE__ */ jsxs("div", { className: "mt-4 text-xs font-semibold uppercase tracking-widest text-gold", children: [
          "Step ",
          i + 1
        ] }),
        /* @__PURE__ */ jsx("h3", { className: "mt-1 font-display font-semibold text-foreground", children: s.title }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: s.desc })
      ] }, s.title)) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "bg-secondary/50", children: /* @__PURE__ */ jsxs("div", { className: "container-page py-20", children: [
      /* @__PURE__ */ jsx(SectionHeading, { eyebrow: "Required Documents", title: "What you'll need" }),
      /* @__PURE__ */ jsx("div", { className: "mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3", children: documents.map((d) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3 rounded-xl bg-card border border-border p-5 shadow-card", children: [
        /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5 text-gold shrink-0 mt-0.5" }),
        /* @__PURE__ */ jsx("span", { className: "text-sm text-foreground", children: d })
      ] }, d)) })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { id: "inquiry", className: "container-page py-20 scroll-mt-20", children: [
      /* @__PURE__ */ jsx(SectionHeading, { eyebrow: "Inquiry Form", title: "Tell us about your child", subtitle: "Fill out the form and our admissions team will get in touch within one working day." }),
      /* @__PURE__ */ jsx(InquiryForm, {})
    ] }),
    /* @__PURE__ */ jsx("section", { className: "bg-secondary/50", children: /* @__PURE__ */ jsxs("div", { className: "container-page py-20", children: [
      /* @__PURE__ */ jsx(SectionHeading, { eyebrow: "FAQs", title: "Frequently asked questions" }),
      /* @__PURE__ */ jsx("div", { className: "mt-10 max-w-3xl mx-auto space-y-3", children: faqs.map((f) => /* @__PURE__ */ jsx(FaqItem, { ...f }, f.q)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "container-page py-20", children: /* @__PURE__ */ jsxs("div", { className: "rounded-2xl bg-primary text-primary-foreground p-10 md:p-12 grid gap-6 md:grid-cols-3 items-center shadow-elegant", children: [
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-2", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl md:text-3xl font-bold", children: "Talk to our admissions team" }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-primary-foreground/85", children: "Have questions? Our team is happy to help, every step of the way." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row md:flex-col gap-3", children: [
        /* @__PURE__ */ jsxs("a", { href: "tel:+919876543210", className: "inline-flex items-center justify-center gap-2 rounded-md bg-gold text-gold-foreground px-5 py-3 text-sm font-semibold", children: [
          /* @__PURE__ */ jsx(Phone, { className: "h-4 w-4" }),
          " +91 98765 43210"
        ] }),
        /* @__PURE__ */ jsxs("a", { href: "mailto:admissions@stjudesfatehnagar.edu.in", className: "inline-flex items-center justify-center gap-2 rounded-md border border-white/40 bg-white/10 px-5 py-3 text-sm font-semibold backdrop-blur", children: [
          /* @__PURE__ */ jsx(Mail, { className: "h-4 w-4" }),
          " Email Us"
        ] })
      ] })
    ] }) })
  ] });
}
function InquiryForm() {
  const [submitting, setSubmitting] = useState(false);
  return /* @__PURE__ */ jsxs("form", { className: "mt-10 mx-auto max-w-3xl grid gap-5 sm:grid-cols-2 rounded-2xl bg-card border border-border p-6 sm:p-8 shadow-card", onSubmit: (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Thank you! Our admissions team will contact you soon.");
      e.target.reset();
    }, 600);
  }, children: [
    /* @__PURE__ */ jsx(Field, { label: "Parent Name", name: "parent", required: true }),
    /* @__PURE__ */ jsx(Field, { label: "Mobile Number", name: "mobile", type: "tel", required: true, pattern: "[0-9+\\s\\-]{7,15}" }),
    /* @__PURE__ */ jsx(Field, { label: "Email", name: "email", type: "email", required: true }),
    /* @__PURE__ */ jsx(Field, { label: "Child Name", name: "child", required: true }),
    /* @__PURE__ */ jsxs("div", { className: "sm:col-span-2", children: [
      /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-foreground mb-1.5", children: "Class Applying For" }),
      /* @__PURE__ */ jsxs("select", { required: true, name: "class", className: "w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring", children: [
        /* @__PURE__ */ jsx("option", { value: "", children: "Select class" }),
        ["Nursery", "LKG", "UKG", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"].map((c) => /* @__PURE__ */ jsx("option", { children: c }, c))
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "sm:col-span-2", children: [
      /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-foreground mb-1.5", children: "Message" }),
      /* @__PURE__ */ jsx("textarea", { name: "message", rows: 4, maxLength: 500, className: "w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring", placeholder: "Any questions or details you'd like to share..." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "sm:col-span-2", children: /* @__PURE__ */ jsx("button", { disabled: submitting, className: "w-full inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground py-3 text-sm font-semibold hover:opacity-95 disabled:opacity-60", children: submitting ? "Submitting..." : "Submit Inquiry" }) })
  ] });
}
function Field({
  label,
  name,
  type = "text",
  required,
  pattern
}) {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("label", { htmlFor: name, className: "block text-sm font-medium text-foreground mb-1.5", children: [
      label,
      required && /* @__PURE__ */ jsx("span", { className: "text-destructive ml-1", children: "*" })
    ] }),
    /* @__PURE__ */ jsx("input", { id: name, name, type, required, pattern, maxLength: 120, className: "w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring" })
  ] });
}
function FaqItem({
  q,
  a
}) {
  const [open, setOpen] = useState(false);
  return /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-border bg-card shadow-card overflow-hidden", children: [
    /* @__PURE__ */ jsxs("button", { onClick: () => setOpen((v) => !v), "aria-expanded": open, className: "w-full flex items-center justify-between gap-3 p-5 text-left", children: [
      /* @__PURE__ */ jsx("span", { className: "font-medium text-foreground", children: q }),
      /* @__PURE__ */ jsx(ChevronDown, { className: `h-5 w-5 text-primary transition ${open ? "rotate-180" : ""}` })
    ] }),
    open && /* @__PURE__ */ jsx("div", { className: "px-5 pb-5 text-sm text-muted-foreground leading-relaxed", children: a })
  ] });
}
export {
  AdmissionsPage as component
};
