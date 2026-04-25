import { PhoneCall, FileCheck2, Send } from "lucide-react";

const items = [
  {
    icon: PhoneCall,
    title: "Telefonagent",
    text: "Kein Anruf geht mehr verloren. Der Agent nimmt ab, qualifiziert den Kunden und informiert Sie.",
  },
  {
    icon: FileCheck2,
    title: "Automatische Angebotserstellung",
    text: "Aus Ihren Eckdaten wird in Minuten ein fertiges Angebot erstellt.",
  },
  {
    icon: Send,
    title: "Automatische Rechnungsstellung",
    text: "Nach Auftragsabschluss geht die Rechnung automatisch raus.",
  },
];

const SolutionSection = () => {
  return (
    <section id="loesung" className="bg-surface-soft py-20 sm:py-24">
      <div className="container-tight">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Was wir konkret umsetzen
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Drei Bausteine, die sofort spürbar Zeit zurückgeben.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="group rounded-xl border border-border bg-card p-7 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-card-hover"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-primary">{title}</h3>
              <p className="mt-2 text-base leading-relaxed text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
