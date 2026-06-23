import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

const RETAINER = 300;

export const formatEuro = (value: number) =>
  new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(Math.round(value));

export const WEEKS_PER_MONTH = 4.33;

export const calculateCost = (hours: number, rate: number) => {
  const week = hours * rate;
  const month = week * WEEKS_PER_MONTH;
  const year = week * 52;
  return {
    perWeek: week,
    perMonth: month,
    perYear: year,
    savings: Math.max(0, month - RETAINER),
  };
};

const CostCalculator = () => {
  const [hours, setHours] = useState(6);
  const [rate, setRate] = useState(60);

  const { perWeek, perMonth, perYear, savings } = useMemo(
    () => calculateCost(hours, rate),
    [hours, rate]
  );

  return (
    <section id="rechner" className="bg-background py-20 sm:py-24">
      <div className="container-tight">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Was manuelle Prozesse Sie wirklich kosten
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Bewegen Sie die Regler — und sehen Sie sofort, wie viel Zeit Geld ist.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-border bg-card p-6 shadow-card sm:p-10">
          <div className="grid gap-8">
            <div>
              <div className="flex items-baseline justify-between gap-4">
                <label className="text-sm font-semibold text-primary">
                  Stunden pro Woche für Anrufe oder Angebots-/Rechnungserstellung
                </label>
                <span className="shrink-0 text-base font-semibold text-primary">{hours} h</span>
              </div>
              <Slider
                className="mt-3"
                min={1}
                max={20}
                step={1}
                value={[hours]}
                onValueChange={(v) => setHours(v[0])}
              />
            </div>

            <div>
              <div className="flex items-baseline justify-between">
                <label className="text-sm font-semibold text-primary">Stundensatz</label>
                <span className="text-base font-semibold text-primary">{rate} €</span>
              </div>
              <Slider
                className="mt-3"
                min={30}
                max={150}
                step={5}
                value={[rate]}
                onValueChange={(v) => setRate(v[0])}
              />
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              { label: "pro Woche", value: perWeek },
              { label: "pro Monat", value: perMonth },
              { label: "pro Jahr", value: perYear },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-border bg-secondary p-5 text-center"
              >
                <div className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  {item.label}
                </div>
                <div className="mt-2 text-2xl font-bold text-primary sm:text-3xl">
                  {formatEuro(item.value)}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-xl bg-surface-dark p-6 text-center text-surface-dark-foreground">
            <p className="text-base sm:text-lg">
              Unser Retainer kostet{" "}
              <span className="font-semibold">{formatEuro(RETAINER)} / Monat</span>.
            </p>
            <p className="mt-2 text-xl font-semibold sm:text-2xl">
              Sie sparen: {formatEuro(savings)} pro Monat.
            </p>
          </div>

          <div className="mt-6 flex items-start gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900">
            <svg
              className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" alt" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p>
              <span className="font-semibold">100 % Geld-zurück-Garantie:</span>{" "}
              Wenn Sie mit dem Setup innerhalb der ersten 4 Wochen nicht zufrieden sind,
              erhalten Sie Ihr Geld vollständig zurück.
            </p>
          </div>

          <div className="mt-8 flex justify-center">
            <Button
              asChild
              size="lg"
              className="h-12 bg-accent px-7 text-base font-semibold text-accent-foreground shadow-card hover:bg-accent/90"
            >
              <a href="#kontakt">Kostenloses Erstgespräch anfragen</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CostCalculator;
