import { CONTACT, CONTACT_MAILTO, telHref } from "@/lib/site";

type ContactActionsProps = {
  className?: string;
};

export function ContactActions({ className = "" }: ContactActionsProps) {
  return (
    <div className={className}>
      <p className="text-sm font-medium text-ink">Suora yhteys</p>
      <ul className="mt-4 space-y-3">
        <li>
          <a
            href={CONTACT_MAILTO}
            className="text-muted transition-colors hover:text-ink"
          >
            {CONTACT.email}
          </a>
        </li>
        <li>
          <a
            href={telHref}
            className="text-muted transition-colors hover:text-ink"
          >
            {CONTACT.phone}
          </a>
        </li>
      </ul>
      <div className="mt-8 flex flex-wrap gap-3">
        <a href={CONTACT_MAILTO} className="btn-primary">
          Lähetä sähköpostia
        </a>
        <a href={telHref} className="btn-secondary">
          Soita
        </a>
      </div>
    </div>
  );
}
