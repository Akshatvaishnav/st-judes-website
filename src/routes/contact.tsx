import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Phone, Mail, MessageCircle, Clock } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | St. Jude's School Fatehnagar" },
      { name: "description", content: "Contact St. Jude's School, Fatehnagar, Udaipur — address, phone, WhatsApp, email, school hours and location map." },
      { property: "og:title", content: "Contact St. Jude's School" },
      { property: "og:description", content: "Get in touch with our admissions and administration teams." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Contact" title="We'd love to hear from you" subtitle="Reach out for admissions, visits or any queries — we're here to help." />

      <section className="container-page py-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { icon: MapPin, title: "Address", value: "Fatehnagar, Udaipur, Rajasthan, India" },
          { icon: Phone, title: "Phone", value: "+91 70233 35023", href: "tel:+917023335023" },
          { icon: MessageCircle, title: "WhatsApp", value: "+91 70233 35023", href: "https://wa.me/917023335023" },
          { icon: Mail, title: "Email", value: "st.judesfnr@gmail.com", href: "mailto:st.judesfnr@gmail.com" },
        ].map((c) => (
          <a key={c.title} href={c.href ?? "#"} className="rounded-xl border border-border bg-card p-6 shadow-card hover:shadow-elegant transition block">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-soft text-primary"><c.icon className="h-6 w-6" /></div>
            <div className="mt-4 text-xs font-semibold uppercase tracking-widest text-gold">{c.title}</div>
            <div className="mt-1 text-sm text-foreground break-words">{c.value}</div>
          </a>
        ))}
      </section>

      <section className="container-page pb-20 grid gap-8 lg:grid-cols-2">
        <ContactForm />
        <div className="rounded-2xl overflow-hidden border border-border shadow-card min-h-[420px]">
          <iframe
            title="St. Jude's School Location"
            src="https://www.google.com/maps?q=st.judeschhool,Fatehnagar,Udaipur,Rajasthan&output=embed"
            className="w-full h-full min-h-[420px]"
            loading="lazy"
          />
        </div>
      </section>

      <section className="bg-secondary/50">
        <div className="container-page py-16">
          <div className="rounded-2xl bg-card border border-border p-8 shadow-card grid gap-6 md:grid-cols-[auto_1fr] items-start">
            <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary text-primary-foreground"><Clock className="h-7 w-7" /></div>
            <div>
              <h3 className="font-display text-2xl font-bold text-primary">School Hours</h3>
              <div className="mt-4 grid gap-3 sm:grid-cols-3 text-sm">
                <div className="rounded-lg bg-secondary p-4"><div className="font-semibold">Mon – Fri</div><div className="text-muted-foreground">8:00 AM – 3:30 PM</div></div>
                <div className="rounded-lg bg-secondary p-4"><div className="font-semibold">Saturday</div><div className="text-muted-foreground">8:00 AM – 12:30 PM</div></div>
                <div className="rounded-lg bg-secondary p-4"><div className="font-semibold">Sunday</div><div className="text-muted-foreground">Closed</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  return (
    <form
      className="rounded-2xl bg-card border border-border p-6 sm:p-8 shadow-card grid gap-5 sm:grid-cols-2"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitting(true);
        setTimeout(() => {
          setSubmitting(false);
          toast.success("Message sent! We'll get back to you soon.");
          (e.target as HTMLFormElement).reset();
        }, 600);
      }}
    >
      <Field label="Name" name="name" required />
      <Field label="Phone" name="phone" type="tel" required />
      <div className="sm:col-span-2"><Field label="Email" name="email" type="email" required /></div>
      <div className="sm:col-span-2"><Field label="Subject" name="subject" required /></div>
      <div className="sm:col-span-2">
        <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
        <textarea name="message" required rows={5} maxLength={1000} className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
      </div>
      <div className="sm:col-span-2">
        <button disabled={submitting} className="w-full inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground py-3 text-sm font-semibold hover:opacity-95 disabled:opacity-60">
          {submitting ? "Sending..." : "Send Message"}
        </button>
      </div>
    </form>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-foreground mb-1.5">{label}{required && <span className="text-destructive ml-1">*</span>}</label>
      <input id={name} name={name} type={type} required={required} maxLength={200} className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
    </div>
  );
}
