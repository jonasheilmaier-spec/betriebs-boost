import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Datenschutz = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container-tight py-16 sm:py-24">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          Zur Startseite
        </Link>

        <h1 className="mt-8 text-4xl font-bold tracking-tight text-primary sm:text-5xl">
          Datenschutzerklärung
        </h1>

        <div className="mt-10 max-w-2xl space-y-10 text-base leading-relaxed text-foreground">
          <section>
            <h2 className="text-lg font-semibold text-primary">
              1. Verantwortlicher
            </h2>
            <p className="mt-3 text-muted-foreground">
              Jonas Julian Heilmaier, Gröppenstraße 8, 85465 Langenpreising
              <br />
              E-Mail:{" "}
              <a
                href="mailto:info@betriebshelfer.org"
                className="text-foreground hover:text-accent"
              >
                info@betriebshelfer.org
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-primary">
              2. Erhebung von Daten über das Kontaktformular
            </h2>
            <p className="mt-3 text-muted-foreground">
              Wenn Sie unser Kontaktformular nutzen, erheben wir folgende Daten:
              Name, Telefonnummer, E-Mail-Adresse, Gewerk, Mitarbeiterzahl,
              Ihre Nachricht. Diese Daten werden ausschließlich zur Bearbeitung
              Ihrer Anfrage verwendet und nicht an Dritte weitergegeben.
            </p>
            <p className="mt-3 text-muted-foreground">
              Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-primary">
              3. Formularverarbeitung
            </h2>
            <p className="mt-3 text-muted-foreground">
              Wir nutzen den Dienst Formspree (Formspree Inc., USA) zur
              Übermittlung von Kontaktformulardaten. Die übermittelten Daten
              werden auf Servern von Formspree verarbeitet. Weitere Infos:{" "}
              <a
                href="https://formspree.io/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline-offset-4 hover:underline"
              >
                formspree.io/legal/privacy-policy
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-primary">
              4. Ihre Rechte
            </h2>
            <p className="mt-3 text-muted-foreground">
              Sie haben das Recht auf Auskunft, Berichtigung, Löschung und
              Einschränkung der Verarbeitung Ihrer Daten (Art. 15–18 DSGVO).
              Kontakt:{" "}
              <a
                href="mailto:info@betriebshelfer.org"
                className="text-foreground hover:text-accent"
              >
                info@betriebshelfer.org
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-primary">5. Hosting</h2>
            <p className="mt-3 text-muted-foreground">
              Diese Website wird über Vercel/Netlify gehostet. Details zum
              Datenschutz des Hosters entnehmen Sie der jeweiligen
              Datenschutzerklärung des Anbieters.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-primary">6. Cookies</h2>
            <p className="mt-3 text-muted-foreground">
              Diese Website verwendet keine Tracking-Cookies.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Datenschutz;
