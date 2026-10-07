import type { Contact } from '@/src/data/contacts';

export function ContactCard(contact: Contact) {
  return (
    <div className="flex flex-row gap-3 py-4 md:flex-col">
      <contact.icon className="mt-0.5 text-primary size-5 md:mt-0" />
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <span className="font-semibold">{contact.name}</span>
          <span className="text-sm text-muted-foreground">
            {contact.content}
          </span>
        </div>
        <a
          href={contact.link}
          className="font-medium w-fit text-muted-foreground hover:text-primary hover:underline active:underline active:text-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          {contact.contact}
        </a>
      </div>
    </div>
  );
}
