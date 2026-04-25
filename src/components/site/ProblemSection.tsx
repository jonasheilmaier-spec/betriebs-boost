import { PhoneOff, FileText, Receipt } from "lucide-react";

const items = [
  {
    icon: PhoneOff,
    title: "Verpasste Anrufe",
    text: "Kein Rückruf = kein Auftrag.",
  },
  {
    icon: FileText,
    title: "Angebote von Hand",
    text: "45 Minuten für ein Angebot. Jedes Mal.",
  },
  {
    icon: Receipt,
    title: "Rechnungen manuell",
    text: "Aufwand nach Feierabend, statt Erholung.",
  },
];

const ProblemSection = () => {
  return (
    <section id="problem" className="bg-background py-20 sm:py-24">
      <div className="container-tight">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Was Ihnen täglich Zeit kostet
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Die immer gleichen Aufgaben, die nichts einbringen — aber jeden Tag Stunden fressen.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-xl border border-border bg-card p-7 shadow-card transition-shadow hover:shadow-card-hover"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-secondary text-primary">
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

export default ProblemSection;
