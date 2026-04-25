const steps = [
  {
    n: "1",
    title: "Kostenloses Erstgespräch",
    text: "Wir schauen uns Ihren Betrieb an.",
  },
  {
    n: "2",
    title: "Analyse & Konzept",
    text: "Wir identifizieren, wo die meiste Zeit verloren geht.",
  },
  {
    n: "3",
    title: "Umsetzung vor Ort",
    text: "Wir implementieren die Automatisierung direkt bei Ihnen.",
  },
];

const HowItWorks = () => {
  return (
    <section id="ablauf" className="bg-background py-20 sm:py-24">
      <div className="container-tight">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">So läuft es ab</h2>
          <p className="mt-4 text-base text-muted-foreground">
            In drei klaren Schritten — ohne langes Hin und Her.
          </p>
        </div>

        <ol className="mt-14 grid gap-8 md:grid-cols-3 md:gap-6">
          {steps.map((s) => (
            <li
              key={s.n}
              className="relative rounded-xl border border-border bg-card p-7 shadow-card"
            >
              <span className="text-4xl font-bold leading-none text-accent">{s.n}</span>
              <h3 className="mt-4 text-lg font-semibold text-primary">{s.title}</h3>
              <p className="mt-2 text-base leading-relaxed text-muted-foreground">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default HowItWorks;
