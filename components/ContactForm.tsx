"use client";

import { FormEvent, useState } from "react";

const BUSINESS_TYPES = [
  "Hospitality / Flexible Living",
  "B2B Services",
  "Ecommerce",
  "Other",
] as const;

const CHALLENGES = [
  "Pricing",
  "Margin",
  "Occupancy / Utilization",
  "Discounting",
  "Channel mix",
  "Ecommerce margin",
  "B2B profitability",
  "Reporting / dashboards",
  "Not sure yet",
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
      setError("Please fill in name and email.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
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
        <p className="font-semibold text-ink">
          Thanks — your message has been captured in this MVP form.
        </p>
        <p className="mt-2 text-sm text-muted">
          This is placeholder functionality. Sami will follow up by email.
        </p>
        <button
          type="button"
          className="btn-secondary mt-6"
          onClick={() => setSubmitted(false)}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card space-y-5" noValidate>
      <p className="text-xs text-muted">
        MVP form — no backend. Submissions are not sent to an external service
        yet.
      </p>

      {error && (
        <p className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-800" role="alert">
          {error}
        </p>
      )}

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-ink">
          Name <span className="text-accent">*</span>
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
          Company
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
          Email <span className="text-accent">*</span>
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
        <label htmlFor="website" className="block text-sm font-medium text-ink">
          Website
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
        <label htmlFor="businessType" className="block text-sm font-medium text-ink">
          Business type
        </label>
        <select
          id="businessType"
          name="businessType"
          className="mt-1 w-full rounded-md border border-border px-3 py-2 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          defaultValue=""
        >
          <option value="" disabled>
            Select…
          </option>
          {BUSINESS_TYPES.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="challenge" className="block text-sm font-medium text-ink">
          Main challenge
        </label>
        <select
          id="challenge"
          name="challenge"
          className="mt-1 w-full rounded-md border border-border px-3 py-2 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          defaultValue=""
        >
          <option value="" disabled>
            Select…
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
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="mt-1 w-full rounded-md border border-border px-3 py-2 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
        />
      </div>

      <button type="submit" className="btn-primary w-full sm:w-auto">
        Submit
      </button>
    </form>
  );
}
