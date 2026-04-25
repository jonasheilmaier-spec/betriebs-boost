import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mkokegpa";

const branchen = [
  "Maler",
  "Elektriker",
  "Fliesenleger",
  "Sanitär/Heizung",
  "Schreiner",
  "Zimmerer",
  "Bau/Tiefbau",
  "Sonstiges",
] as const;

const teamSizes = ["1–5", "6–15", "16–30", "Mehr als 30"] as const;

const schema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Bitte geben Sie Ihren Namen an." })
    .max(100),
  phone: z
    .string()
    .trim()
    .min(6, { message: "Bitte geben Sie eine gültige Telefonnummer an." })
    .max(40)
    .regex(/^[0-9+()\-\s/]+$/, { message: "Nur Ziffern und + ( ) - / sind erlaubt." }),
  email: z
    .string()
    .trim()
    .email({ message: "Bitte geben Sie eine gültige E-Mail-Adresse an." })
    .max(255),
  branche: z.enum(branchen, {
    errorMap: () => ({ message: "Bitte Gewerk auswählen." }),
  }),
  teamSize: z.enum(teamSizes, {
    errorMap: () => ({ message: "Bitte Mitarbeiterzahl auswählen." }),
  }),
  problem: z.string().trim().max(1000).optional().or(z.literal("")),
});

type FormValues = z.infer<typeof schema>;

type Status = "idle" | "submitting" | "success" | "error";

const ContactForm = () => {
  const [status, setStatus] = useState<Status>("idle");

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      branche: undefined as unknown as FormValues["branche"],
      teamSize: undefined as unknown as FormValues["teamSize"],
      problem: "",
    },
    mode: "onBlur",
  });

  const onSubmit = async (values: FormValues) => {
    setStatus("submitting");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          "Vor- und Nachname": values.name,
          Telefonnummer: values.phone,
          "E-Mail": values.email,
          "Gewerk / Branche": values.branche,
          Mitarbeiterzahl: values.teamSize,
          "Größtes Problem": values.problem || "—",
          _subject: `Neue Anfrage von ${values.name} (${values.branche})`,
        }),
      });

      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="kontakt" className="bg-surface-soft py-20 sm:py-24">
      <div className="container-tight">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Jetzt Erstgespräch anfragen
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Kostenlos. Unverbindlich. Persönlich in Bayern.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-2xl rounded-2xl border border-border bg-card p-6 shadow-card sm:p-10">
          {status === "success" ? (
            <div className="flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-success/10 text-success">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-primary">
                Vielen Dank!
              </h3>
              <p className="mt-2 max-w-md text-base text-muted-foreground">
                Wir melden uns innerhalb von 24 Stunden bei Ihnen.
              </p>
              <Button
                variant="outline"
                className="mt-6"
                onClick={() => setStatus("idle")}
              >
                Weitere Anfrage senden
              </Button>
            </div>
          ) : (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Vor- und Nachname *</FormLabel>
                      <FormControl>
                        <Input autoComplete="name" placeholder="Max Mustermann" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid gap-5 sm:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Telefonnummer *</FormLabel>
                        <FormControl>
                          <Input
                            type="tel"
                            inputMode="tel"
                            autoComplete="tel"
                            placeholder="+49 ..."
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>Wir rufen Sie zurück.</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>E-Mail-Adresse *</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            inputMode="email"
                            autoComplete="email"
                            placeholder="name@firma.de"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="branche"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Gewerk / Branche *</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Bitte auswählen" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {branchen.map((b) => (
                              <SelectItem key={b} value={b}>
                                {b}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="teamSize"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mitarbeiterzahl *</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Bitte auswählen" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {teamSizes.map((t) => (
                              <SelectItem key={t} value={t}>
                                {t}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="problem"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Größtes Problem gerade</FormLabel>
                      <FormControl>
                        <Textarea
                          rows={4}
                          placeholder="z.B. Zu viele verpasste Anrufe, Angebote dauern zu lang, ..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {status === "error" && (
                  <div className="flex items-start gap-3 rounded-md border border-destructive/30 bg-destructive/5 p-4 text-sm text-destructive">
                    <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                    <p>
                      Etwas hat nicht geklappt. Bitte versuchen Sie es erneut oder schreiben Sie uns
                      direkt an{" "}
                      <a
                        href="mailto:info@betriebshelfer.org"
                        className="font-semibold underline underline-offset-2"
                      >
                        info@betriebshelfer.org
                      </a>
                      .
                    </p>
                  </div>
                )}

                <Button
                  type="submit"
                  size="lg"
                  disabled={status === "submitting"}
                  className="h-12 w-full bg-accent text-base font-semibold text-accent-foreground hover:bg-accent/90"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Wird gesendet...
                    </>
                  ) : (
                    "Anfrage absenden"
                  )}
                </Button>

                <p className="text-center text-xs text-muted-foreground">
                  Mit dem Absenden erklären Sie sich einverstanden, dass wir Sie zur Bearbeitung
                  Ihrer Anfrage kontaktieren.
                </p>
              </form>
            </Form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
