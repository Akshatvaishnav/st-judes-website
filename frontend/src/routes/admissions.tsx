import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle2, FileText, Search, ClipboardCheck, UserCheck, GraduationCap, ChevronDown, Phone, Mail } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { SectionHeading } from "./index";
import { toast } from "sonner";
import { siteConfig } from "@/config/site";

export const Route = createFileRoute("/admissions")({
  head: () => {
    const admissionsOpen = siteConfig.admissions.isOpen;
    const session = siteConfig.admissions.session;
    const title = admissionsOpen
      ? `Admissions Open ${session} | St. Jude's School Fatehnagar`
      : `Admissions Inquiry | St. Jude's School Fatehnagar`;
    const desc = admissionsOpen
      ? `Admissions open at St. Jude's School, Fatehnagar for academic session ${session}. Apply online, see process, documents and FAQs.`
      : `Inquire about admissions and waitlist opportunities at St. Jude's School, Fatehnagar. See process, documents and FAQs.`;

    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:url", content: "/admissions" },
      ],
      links: [{ rel: "canonical", href: "/admissions" }],
    };
  },
  component: AdmissionsPage,
});

const steps = [
  { icon: Search, title: "Inquiry", desc: "Submit an inquiry form or call our admissions office." },
  { icon: GraduationCap, title: "Campus Visit", desc: "Visit the school, meet our team and tour the campus." },
  { icon: FileText, title: "Application", desc: "Fill out and submit the application form with details." },
  { icon: ClipboardCheck, title: "Verification", desc: "We review the application and verify documents." },
  { icon: UserCheck, title: "Confirmation", desc: "Receive admission confirmation and complete the formalities." },
];

const documents = [
  "Birth Certificate (copy)",
  "Previous school transfer certificate (if applicable)",
  "Previous academic report card (if applicable)",
  "Aadhaar Card (child & parents)",
  "Passport-size photographs",
  "Address proof",
];

const getFaqs = (isOpen: boolean, session: string) => [
  {
    q: `When do admissions begin for ${session}?`,
    a: isOpen
      ? "Admissions are currently open. We encourage parents to apply early as seats are limited."
      : `Admissions for the ${session} session are currently closed. However, you can submit an inquiry form below to join our waitlist for any upcoming vacancies.`
  },
  { q: "What is the age criteria?", a: "Age criteria varies by class. Please contact our admissions office for the exact eligibility for your child's intended grade." },
  { q: "Is there an entrance test?", a: "For higher classes, an informal assessment may be conducted. For pre-primary, an interaction with the child and parents is held." },
  { q: "Do you offer transportation?", a: "Yes, we operate safe, GPS-enabled school buses across multiple routes around Fatehnagar and Udaipur." },
  { q: "How can I schedule a campus visit?", a: "Use the inquiry form below or call our admissions office to schedule a personalised campus tour." },
];

function AdmissionsPage() {
  const admissionsOpen = siteConfig.admissions.isOpen;
  const session = siteConfig.admissions.session;
  const faqs = getFaqs(admissionsOpen, session);

  return (
    <SiteLayout>
      <PageHero
        eyebrow={admissionsOpen ? `Admissions ${session}` : "Admissions Inquiry"}
        title={admissionsOpen ? "Begin your child's journey with us" : "Admissions & Vacancy Inquiry"}
        subtitle={admissionsOpen ? "A simple, transparent admission process — designed with parents in mind." : "Learn about our admission guidelines, waitlists, and future vacancies."}
      />

      <section className="container-page py-16">
        {admissionsOpen ? (
          <div className="rounded-2xl bg-gold text-gold-foreground p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-elegant">
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest">Now Open</div>
              <h2 className="font-display text-2xl md:text-3xl font-bold mt-1">Admissions for Academic Session {session}</h2>
              <p className="mt-2 text-gold-foreground/80 text-sm">Limited seats. Apply early to secure your child's place.</p>
            </div>
            <a href="#inquiry" className="inline-flex items-center gap-2 rounded-md bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold hover:opacity-95">Apply Now</a>
          </div>
        ) : (
          <div className="rounded-2xl bg-secondary border border-border p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-card">
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-destructive">Admissions Closed</div>
              <h2 className="font-display text-2xl md:text-3xl font-bold mt-1 text-primary">Admissions for Session {session} are Closed</h2>
              <p className="mt-2 text-muted-foreground text-sm">You may still submit an inquiry form below to join our waitlist for any mid-term or future vacancies.</p>
            </div>
            <a href="#inquiry" className="inline-flex items-center gap-2 rounded-md bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold hover:opacity-95">Submit Inquiry</a>
          </div>
        )}
      </section>

      <section className="container-page pb-20">
        <SectionHeading eyebrow="Process" title="How to apply, step by step" />
        <ol className="mt-12 grid gap-6 md:grid-cols-5">
          {steps.map((s, i) => (
            <li key={s.title} className="relative rounded-xl bg-card border border-border p-6 shadow-card">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground"><s.icon className="h-6 w-6" /></div>
              <div className="mt-4 text-xs font-semibold uppercase tracking-widest text-gold">Step {i + 1}</div>
              <h3 className="mt-1 font-display font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-secondary/50">
        <div className="container-page py-20">
          <SectionHeading eyebrow="Required Documents" title="What you'll need" />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {documents.map((d) => (
              <div key={d} className="flex items-start gap-3 rounded-xl bg-card border border-border p-5 shadow-card">
                <CheckCircle2 className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">{d}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="inquiry" className="container-page py-20 scroll-mt-20">
        <SectionHeading
          eyebrow="Inquiry Form"
          title="Tell us about your child"
          subtitle={admissionsOpen
            ? "Fill out the form and our admissions team will get in touch within one working day."
            : siteConfig.admissions.inquiryNotice
          }
        />
        <InquiryForm />
      </section>

      <section className="bg-secondary/50">
        <div className="container-page py-20">
          <SectionHeading eyebrow="FAQs" title="Frequently asked questions" />
          <div className="mt-10 max-w-3xl mx-auto space-y-3">
            {faqs.map((f) => <FaqItem key={f.q} {...f} />)}
          </div>
        </div>
      </section>

      <section className="container-page py-20">
        <div className="rounded-2xl bg-primary text-primary-foreground p-10 md:p-12 grid gap-6 md:grid-cols-3 items-center shadow-elegant">
          <div className="md:col-span-2">
            <h2 className="font-display text-2xl md:text-3xl font-bold">Talk to our admissions team</h2>
            <p className="mt-2 text-primary-foreground/85">Have questions? Our team is happy to help, every step of the way.</p>
          </div>
          <div className="flex flex-col sm:flex-row md:flex-col gap-3">
            <a href="tel:+917023335023" className="inline-flex items-center justify-center gap-2 rounded-md bg-gold text-gold-foreground px-5 py-3 text-sm font-semibold"><Phone className="h-4 w-4" /> +91 70233 35023</a>
            <a href="mailto:st.judesfnr@gmail.com" className="inline-flex items-center justify-center gap-2 rounded-md border border-white/40 bg-white/10 px-5 py-3 text-sm font-semibold backdrop-blur"><Mail className="h-4 w-4" /> Email Us</a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function InquiryForm() {
  const [submitting, setSubmitting] = useState(false);
  return (
    <form
      className="mt-10 mx-auto max-w-3xl grid gap-5 sm:grid-cols-2 rounded-2xl bg-card border border-border p-6 sm:p-8 shadow-card"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitting(true);
        setTimeout(() => {
          setSubmitting(false);
          toast.success("Thank you! Our admissions team will contact you soon.");
          (e.target as HTMLFormElement).reset();
        }, 600);
      }}
    >
      <Field label="Parent Name" name="parent" required />
      <Field label="Mobile Number" name="mobile" type="tel" required pattern="[0-9+\s\-]{7,15}" />
      <Field label="Email" name="email" type="email" required />
      <Field label="Child Name" name="child" required />
      <div className="sm:col-span-2">
        <label className="block text-sm font-medium text-foreground mb-1.5">Class Applying For</label>
        <select required name="class" className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring">
          <option value="">Select class</option>
          {["Nursery","LKG","UKG","I","II","III","IV","V","VI","VII","VIII","IX","X","XI","XII"].map(c => <option key={c}>{c}</option>)}
        </select>
      </div>
      <div className="sm:col-span-2">
        <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
        <textarea name="message" rows={4} maxLength={500} className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring" placeholder="Any questions or details you'd like to share..." />
      </div>
      <div className="sm:col-span-2">
        <button disabled={submitting} className="w-full inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground py-3 text-sm font-semibold hover:opacity-95 disabled:opacity-60">
          {submitting ? "Submitting..." : "Submit Inquiry"}
        </button>
      </div>
    </form>
  );
}

function Field({ label, name, type = "text", required, pattern }: { label: string; name: string; type?: string; required?: boolean; pattern?: string }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-foreground mb-1.5">{label}{required && <span className="text-destructive ml-1">*</span>}</label>
      <input id={name} name={name} type={type} required={required} pattern={pattern} maxLength={120} className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl border border-border bg-card shadow-card overflow-hidden">
      <button onClick={() => setOpen(v => !v)} aria-expanded={open} className="w-full flex items-center justify-between gap-3 p-5 text-left">
        <span className="font-medium text-foreground">{q}</span>
        <ChevronDown className={`h-5 w-5 text-primary transition ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{a}</div>}
    </div>
  );
}
