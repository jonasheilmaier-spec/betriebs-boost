import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Impressum = () => {
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
          Impressum
        </h1>

        <div className="mt-10 max-w-2xl space-y-8 text-base leading-relaxed text-foreground">
          <section>
            <h2 className="text-lg font-semibold text-primary">
              Angaben gemäß § 5 TMG
            </h2>
            <address className="mt-3 not-italic text-muted-foreground">
              Jonas Julian Heilmaier
              <br />
              Gröppenstraße 8
              <br />
              85465 Langenpreising
            </address>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-primary">Kontakt</h2>
            <p className="mt-3 text-muted-foreground">
              Telefon:{" "}
              <a
                href="tel:+4917684895724"
                className="text-foreground hover:text-accent"
              >
                +49 176 84895724
              </a>
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
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
            </h2>
            <p className="mt-3 text-muted-foreground">
              Jonas Julian Heilmaier, Gröppenstraße 8, 85465 Langenpreising
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Impressum;
