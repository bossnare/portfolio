import type { Contact } from '@/src/data/contacts';

export function ContactCard(contact: Contact) {
  return (
    <div className="flex flex-row gap-3 py-4 md:flex-col">
      <contact.icon className="mt-0.5 size-5 md:mt-0" />
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <span className="font-semibold">{contact.name}</span>
          <span className="text-sm text-muted-foreground">
            {contact.content}
          </span>
        </div>
        <a
          href={contact.link}
          className="font-semibold w-fit text-primary hover:underline active:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {contact.contact}
        </a>
      </div>
    </div>
  );
}
