import { contacts } from '@/src/data/contacts';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
};

export default function ContactPage() {
  return (
    <div className="w-full max-w-6xl px-4 mx-auto space-y-6 md:pt-12 md:p-0">
      <div className="space-y-4">
        <h1 className="px-2 border rounded-sm w-fit border-zinc-200 dark:border-white/12 text-muted-foreground">
          Contact
        </h1>
        <p className="max-w-3xl text-2xl font-semibold">
          Here are my contact details if you&apos;d like to discuss a project,
          collaboration, or professional opportunity.
        </p>
      </div>
      <ul className="grid w-full grid-cols-1 gap-6 mt-4 divide-y bg-background dark:bg-transparent md:m-0 md:grid-cols-3 md:divide-x md:divide-y-0 divide-zinc-200 dark:divide-white/12">
        {contacts.map((contact) => (
          <li key={contact.name}>
            <div className="flex flex-col justify-between gap-4 py-4">
              <div className="flex flex-col gap-2">
                <div className="flex flex-row items-center gap-3 md:items-start md:flex-col">
                  <contact.icon className="size-5" />
                  <span className="font-semibold">{contact.name}</span>
                </div>
                <span className="text-sm text-muted-foreground">
                  {contact.content}
                </span>
              </div>
              <a
                href={contact.link}
                className="font-medium w-fit text-primary hover:underline active:underline"
              >
                {contact.contact}
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
