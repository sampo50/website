import { CONTACT, CONTACT_MAILTO, telHref } from "@/lib/site";

type ContactActionsProps = {
  className?: string;
};

export function ContactActions({ className = "" }: ContactActionsProps) {
  return (
    <div className={className}>
      <dl className="space-y-6">
        <div>
          <dt className="text-sm font-medium text-ink">Sähköposti</dt>
          <dd className="mt-1">
            <a
              href={CONTACT_MAILTO}
              className="text-lg text-ink transition-colors hover:text-accent md:text-xl"
            >
              {CONTACT.email}
            </a>
          </dd>
        </div>
        <div>
          <dt className="text-sm font-medium text-ink">Puhelin</dt>
          <dd className="mt-1">
            <a
              href={telHref}
              className="text-lg text-ink transition-colors hover:text-accent md:text-xl"
            >
              {CONTACT.phone}
            </a>
          </dd>
        </div>
      </dl>
    </div>
  );
}
