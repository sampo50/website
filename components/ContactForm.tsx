"use client";

import { FormEvent, useState } from "react";
import { CONTACT } from "@/lib/site";

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

    // TODO: Wire form submission to Cloudflare Pages Forms or another handler.
    // See https://developers.cloudflare.com/pages/configuration/forms/
    if (process.env.NODE_ENV === "development") {
      console.log("[ContactForm]", Object.fromEntries(data));
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
        <label htmlFor="company" className="block text-sm font-medium text-ink">
          Hotelli / yritys
        </label>
        <input
          id="company"
          name="company"
          type="text"
          className="mt-1 w-full rounded-md border border-border px-3 py-2 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
        />
      </div>

      <div>
        <label htmlFor="website" className="block text-sm font-medium text-ink">
          Verkkosivu
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
        <label htmlFor="message" className="block text-sm font-medium text-ink">
          Viesti
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="mt-1 w-full rounded-md border border-border px-3 py-2 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
        />
      </div>

      <button type="submit" className="btn-primary w-full sm:w-auto">
        {CONTACT.cta}
      </button>
    </form>
  );
}
