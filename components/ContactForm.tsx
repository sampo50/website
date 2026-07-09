"use client";

import { FormEvent, useState } from "react";
import { CLIENT_TYPES } from "@/lib/site";

const PACKAGES = [
  "Revenue Audit",
  "Revenue Control",
  "Revenue Growth",
  "En tiedä vielä",
] as const;

const CHALLENGES = [
  "Hinnoittelu",
  "Forecasting ja kysynnän ennakointi",
  "Jakelukanavat ja kanavamix",
  "Käyttöaste ja saatavuus",
  "Ryhmä- ja long-stay-hinnoittelu",
  "Forecast ja raportointi",
  "En tiedä vielä",
] as const;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();

    if (!name || !email) {
      setError("Täytä nimi ja sähköposti.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Anna kelvollinen sähköpostiosoite.");
      return;
    }

    // TODO: Connect Formspree, Netlify Forms, HubSpot, Resend, or API route.
    if (process.env.NODE_ENV === "development") {
      console.log("[ContactForm MVP]", Object.fromEntries(data));
    }

    setSubmitted(true);
    form.reset();
  }

  if (submitted) {
    return (
      <div
        className="card border-accent/30 bg-accent/5 p-8 text-center"
        role="status"
      >
        <p className="font-semibold text-ink">Kiitos — viestisi on vastaanotettu.</p>
        <p className="mt-2 text-sm text-muted">
          Palaan asiaan sähköpostitse mahdollisimman pian.
        </p>
        <button
          type="button"
          className="btn-secondary mt-6"
          onClick={() => setSubmitted(false)}
        >
          Lähetä uusi viesti
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card space-y-5" noValidate>
      {error && (
        <p className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-800" role="alert">
          {error}
        </p>
      )}

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-ink">
          Nimi <span className="text-accent">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="mt-1 w-full rounded-md border border-border px-3 py-2 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
        />
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium text-ink">
          Yritys / konsepti
        </label>
        <input
          id="company"
          name="company"
          type="text"
          className="mt-1 w-full rounded-md border border-border px-3 py-2 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-ink">
          Sähköposti <span className="text-accent">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-1 w-full rounded-md border border-border px-3 py-2 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-ink">
          Puhelin
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          className="mt-1 w-full rounded-md border border-border px-3 py-2 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
        />
      </div>

      <div>
        <label htmlFor="website" className="block text-sm font-medium text-ink">
          Verkkosivut
        </label>
        <input
          id="website"
          name="website"
          type="url"
          placeholder="https://"
          className="mt-1 w-full rounded-md border border-border px-3 py-2 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
        />
      </div>

      <div>
        <label htmlFor="conceptType" className="block text-sm font-medium text-ink">
          Konseptityyppi
        </label>
        <select
          id="conceptType"
          name="conceptType"
          className="mt-1 w-full rounded-md border border-border px-3 py-2 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          defaultValue=""
        >
          <option value="" disabled>
            Valitse…
          </option>
          {CLIENT_TYPES.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
          <option value="Muu">Muu</option>
        </select>
      </div>

      <div>
        <label htmlFor="package" className="block text-sm font-medium text-ink">
          Kiinnostava paketti
        </label>
        <select
          id="package"
          name="package"
          className="mt-1 w-full rounded-md border border-border px-3 py-2 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          defaultValue=""
        >
          <option value="" disabled>
            Valitse…
          </option>
          {PACKAGES.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="challenge" className="block text-sm font-medium text-ink">
          Päähaaste
        </label>
        <select
          id="challenge"
          name="challenge"
          className="mt-1 w-full rounded-md border border-border px-3 py-2 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          defaultValue=""
        >
          <option value="" disabled>
            Valitse…
          </option>
          {CHALLENGES.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-ink">
          Viesti
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Kerro hotellistasi tai kohteestasi, huonemäärästä ja nykyisestä revenue management -tilanteesta."
          className="mt-1 w-full rounded-md border border-border px-3 py-2 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
        />
      </div>

      <button type="submit" className="btn-primary w-full sm:w-auto">
        Lähetä
      </button>
    </form>
  );
}
