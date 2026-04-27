
import jonasPortrait from "@/assets/jonas.png";

const AboutSection = () => {
  return (
    <section id="ueber-mich" className="bg-surface-soft py-20 sm:py-24">
      <div className="container-tight">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Wer dahinter steckt
          </h2>
        </div>

        <div className="mt-14 grid items-center gap-10 md:grid-cols-[auto,1fr] md:gap-14">
          <div className="mx-auto md:mx-0">
            <img
              src={jonasPortrait}
              alt="Porträt von Jonas Heilmaier, Gründer von Betriebshelfer"
              width={240}
              height={240}
              loading="lazy"
              className="rounded-full border-4 border-card shadow-card"
              style={{
                width: "240px",
                height: "240px",
                objectFit: "cover",
                objectPosition: "center top",
              }}
            />
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-primary sm:text-3xl">Ich bin Jonas.</h3>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Ich habe selbst in verschiedenen Handwerksbetrieben gearbeitet und weiß, was wirklich
              Zeit kostet. Deshalb baue ich keine generischen Lösungen – ich schaue mir Ihren
              Betrieb an und automatisiere genau das, was den größten Unterschied macht. Persönlich
              vor Ort in Bayern.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
