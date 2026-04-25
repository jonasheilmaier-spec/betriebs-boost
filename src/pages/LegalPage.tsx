import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const LegalPage = ({ title }: { title: string }) => {
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
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">Inhalt folgt.</p>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          Bei Rückfragen erreichen Sie uns unter{" "}
          <a
            href="mailto:info@betriebshelfer.org"
            className="font-medium text-accent underline-offset-4 hover:underline"
          >
            info@betriebshelfer.org
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default LegalPage;
