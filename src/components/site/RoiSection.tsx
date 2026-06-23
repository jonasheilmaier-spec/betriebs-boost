import { calculateCost, formatEuro } from "./CostCalculator";

const DEFAULT_HOURS = 6;
const DEFAULT_RATE = 60;

const RoiSection = () => {
  const { perMonth } = calculateCost(DEFAULT_HOURS, DEFAULT_RATE);

  return (
    <section id="roi" className="bg-surface-dark py-20 text-surface-dark-foreground sm:py-28">
      <div className="container-tight">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-white/60">
            Was das für Sie bedeutet
          </h2>
          <p className="mt-6 text-2xl font-semibold leading-snug text-white/70 sm:text-3xl lg:text-4xl">
            Wer {DEFAULT_HOURS} Stunden pro Woche mit manuellen Prozessen verliert
            und {DEFAULT_RATE} €/h verdient — vernichtet{" "}
            <span className="whitespace-nowrap text-white/70">{formatEuro(perMonth)}</span> pro Monat.
          </p>
          <div className="mx-auto mt-10 h-px w-16 bg-white/20" />
          <p className="mt-10 text-lg text-white/80 sm:text-xl">
            Unser Retainer kostet{" "}
            <span className="font-semibold text-white">300 € im Monat</span>.
            Die Rechnung ist einfach.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RoiSection;
