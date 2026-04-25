import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="container-tight flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <span className="inline-block h-2.5 w-2.5 rounded-sm bg-accent" aria-hidden />
          <span className="text-lg font-bold tracking-tight text-primary">Betriebshelfer</span>
        </a>
        <Button
          asChild
          size="sm"
          className="bg-accent text-accent-foreground hover:bg-accent/90"
        >
          <a href="#kontakt">Erstgespräch anfragen</a>
        </Button>
      </div>
    </header>
  );
};

export default Header;
