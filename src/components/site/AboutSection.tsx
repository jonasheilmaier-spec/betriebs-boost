import jonasPortrait from "@/assets/jonas-portrait.jpg";

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
              src="https://i.ibb.co/k6DQ14mL/ChatGPT-Image-25-Apr-2026-21-25-38.png"
              alt="Porträt von Jonas Heilmaier, Gründer von Betriebshelfer"
              width={220}
              height={220}
              loading="lazy"
              className="rounded-full border-4 border-card object-cover shadow-card"
              style={{ width: "220px", height: "220px" }}
            />
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-primary sm:text-3xl">Ich bin Jonas.</h3>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              22 Jahre alt, Student der Wirtschaftsinformatik in München — und ich kenne Handwerk
              nicht nur aus dem Lehrbuch. Ich habe selbst in verschiedenen Gewerken gearbeitet und
              weiß, was in einem Betrieb wirklich Zeit kostet. Deshalb baue ich keine generischen
              Lösungen — ich schaue mir Ihren Betrieb an und automatisiere genau das, was den
              größten Unterschied macht. Persönlich vor Ort in Bayern.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
