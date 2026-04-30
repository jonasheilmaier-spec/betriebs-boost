import { useEffect, useRef, useState } from "react";
import Vapi from "@vapi-ai/web";
import { Button } from "@/components/ui/button";

const VAPI_PUBLIC_KEY = "0f62a44a-3856-43c1-8b72-2173d0d9b221";
const VAPI_ASSISTANT_ID = "c61fb2d0-3c28-4372-9004-4f3d49edeb9a";

const VapiDemo = () => {
  const vapiRef = useRef<Vapi | null>(null);
  const [isCallActive, setIsCallActive] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [showEnded, setShowEnded] = useState(false);
  const [showFollowupCta, setShowFollowupCta] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    return () => {
      try {
        vapiRef.current?.stop();
      } catch {
        // ignore
      }
    };
  }, []);

  const handleStart = async () => {
    setError(null);
    setShowEnded(false);
    setShowFollowupCta(false);

    try {
      const vapi = new Vapi(VAPI_PUBLIC_KEY);
      vapiRef.current = vapi;

      vapi.on("call-start", () => setIsCallActive(true));
      vapi.on("call-end", () => {
        setIsCallActive(false);
        setIsSpeaking(false);
      });
      vapi.on("speech-start", () => setIsSpeaking(true));
      vapi.on("speech-end", () => setIsSpeaking(false));
      vapi.on("error", (e: unknown) => {
        console.error("Vapi error", e);
        const msg = (e as { error?: { message?: string }; message?: string })?.error?.message
          ?? (e as { message?: string })?.message
          ?? "";
        if (/permission|microphone|NotAllowed/i.test(msg)) {
          setError("Bitte Mikrofon-Zugriff erlauben und erneut versuchen");
        } else {
          setError("Verbindung fehlgeschlagen – bitte erneut versuchen");
        }
        setIsCallActive(false);
        setIsSpeaking(false);
      });

      await vapi.start(VAPI_ASSISTANT_ID);
      setIsCallActive(true);
    } catch (e: unknown) {
      console.error(e);
      const msg = (e as { message?: string })?.message ?? "";
      if (/permission|microphone|NotAllowed/i.test(msg)) {
        setError("Bitte Mikrofon-Zugriff erlauben und erneut versuchen");
      } else {
        setError("Verbindung fehlgeschlagen – bitte erneut versuchen");
      }
    }
  };

  const handleStop = () => {
    try {
      vapiRef.current?.stop();
    } catch {
      // ignore
    }
    setIsCallActive(false);
    setIsSpeaking(false);
    setShowEnded(true);
    window.setTimeout(() => {
      setShowEnded(false);
      setShowFollowupCta(true);
    }, 3000);
  };

  return (
    <section id="demo-anruf" className="bg-[#0f172a] py-20 sm:py-24">
      <div className="container-tight">
        <div className="mx-auto max-w-2xl text-center text-white">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Hören Sie selbst – so klingt Ihr neuer Telefonassistent
          </h2>
          <p className="mt-4 text-base text-white/70 sm:text-lg">
            Starten Sie einen echten Demo-Anruf – kostenlos, live, auf Deutsch
          </p>

          <div className="mt-10 flex flex-col items-center gap-6">
            {!isCallActive && (
              <Button
                size="lg"
                onClick={handleStart}
                className="h-12 bg-white px-7 text-base font-semibold text-[#0f172a] shadow-card hover:bg-white/90"
              >
                🎙️ Demo-Anruf starten
              </Button>
            )}

            {isCallActive && (
              <>
                <div className="relative flex h-24 w-24 items-center justify-center">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-60" />
                  <span className="relative inline-flex h-16 w-16 rounded-full bg-green-500" />
                </div>
                <p className="text-base text-white/80">
                  Lisa spricht – sprechen Sie einfach
                  {isSpeaking ? " …" : ""}
                </p>
                <Button
                  size="lg"
                  onClick={handleStop}
                  className="h-12 bg-red-600 px-7 text-base font-semibold text-white shadow-card hover:bg-red-700"
                >
                  ⏹ Anruf beenden
                </Button>
              </>
            )}

            {showEnded && (
              <p className="text-base font-medium text-green-400">
                ✓ Anruf beendet – so einfach ist das.
              </p>
            )}

            {showFollowupCta && !isCallActive && !showEnded && (
              <Button
                asChild
                size="lg"
                className="h-12 bg-white px-7 text-base font-semibold text-[#0f172a] shadow-card hover:bg-white/90"
              >
                <a href="#kontakt">Für meinen Betrieb anfragen →</a>
              </Button>
            )}

            {error && (
              <p className="text-sm text-red-400">{error}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VapiDemo;
