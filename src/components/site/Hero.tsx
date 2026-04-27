import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section id="top" className="relative overflow-hidden bg-background">
      <div className="container-tight relative py-20 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-primary">
            <MapPin className="h-3.5 w-3.5 text-primary" />
            Persönlich vor Ort in Bayern
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-primary sm:text-5xl lg:text-6xl">
            Mehr Zeit für Ihr Handwerk.
            <br />
            <span className="text-primary">Weniger Arbeit für den Schreibtisch.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
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
              className="text-sm font-medium text-muted-foreground underline-offset-4 hover:text-primary hover:underline"
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
