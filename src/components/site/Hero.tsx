import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=1920&q=80')",
          filter: "brightness(0.45) blur(2px)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.65) 100%)",
        }}
      />
      <div className="container-tight relative py-20 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur">
            <MapPin className="h-3.5 w-3.5 text-accent" />
            Persönlich vor Ort in Bayern
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Mehr Zeit für Ihr Handwerk.
            <br />
            <span className="text-accent">Weniger Arbeit für den Schreibtisch.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/85 sm:text-xl">
            Wir automatisieren Ihre wiederkehrenden Prozesse — Angebote, Rechnungen, Kundenanfragen.
            Persönlich vor Ort in Bayern.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button
              asChild
              size="lg"
              className="h-12 w-full bg-accent px-7 text-base font-semibold text-accent-foreground shadow-card hover:bg-accent/90 sm:w-auto"
            >
              <a href="#kontakt">Kostenloses Erstgespräch anfragen</a>
            </Button>
            <a
              href="#loesung"
              className="text-sm font-medium text-white/80 underline-offset-4 hover:text-white hover:underline"
            >
              Was wir machen →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
