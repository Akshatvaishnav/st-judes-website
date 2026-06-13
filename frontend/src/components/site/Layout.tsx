import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative bg-primary text-primary-foreground overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, oklch(0.85 0.17 85 / 0.4), transparent 40%), radial-gradient(circle at 80% 70%, oklch(1 0 0 / 0.2), transparent 50%)",
        }}
      />
      <div className="container-page relative py-16 md:py-24 text-center">
        {eyebrow && (
          <div className="inline-block text-xs font-semibold uppercase tracking-widest text-gold mb-3">
            {eyebrow}
          </div>
        )}
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold animate-fade-up">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl mx-auto text-primary-foreground/85 text-base md:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
