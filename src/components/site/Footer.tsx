import { Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-surface-dark text-surface-dark-foreground">
      <div className="container-tight py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-block h-2.5 w-2.5 rounded-sm bg-accent" aria-hidden />
              <span className="text-lg font-bold">Betriebshelfer</span>
            </div>
            <p className="mt-3 max-w-sm text-sm text-white/70">
              AI-Automatisierung für Handwerksbetriebe in Bayern.
            </p>
          </div>

          <div className="flex flex-col gap-4 text-sm md:items-end">
            <a
              href="mailto:info@betriebshelfer.org"
              className="inline-flex items-center gap-2 text-white/85 hover:text-white"
            >
              <Mail className="h-4 w-4 text-accent" />
              info@betriebshelfer.org
            </a>
            <div className="flex items-center gap-4 text-white/70">
              <Link to="/impressum" className="hover:text-white">Impressum</Link>
              <span className="text-white/30">|</span>
              <Link to="/datenschutz" className="hover:text-white">Datenschutz</Link>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-white/50">
          © {new Date().getFullYear()} Betriebshelfer. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
