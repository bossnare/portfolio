import { contacts } from '@/src/data/contacts';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
};

export default function ContactPage() {
  return (
    <div className="w-full max-w-6xl px-4 mx-auto mt-8 md:p-0">
      <span className="border border-zinc-200 px-2 dark:border-white/12 text-muted-foreground rounded-sm">
        About
      </span>
      <h3 className="text-3xl font-bold mt-2 max-w-3xl">
        Get my contact directly
      </h3>
      <ul className="grid w-full mt-5 grid-cols-1 gap-6 divide-y bg-background dark:bg-transparent md:m-0 md:grid-cols-3 md:divide-x md:divide-y-0 divide-zinc-200 dark:divide-white/12">
        {contacts.map((contact) => (
          <li key={contact.name}>
            <div className="flex flex-row justify-between gap-4 py-4 md:flex-col">
              <div className="flex flex-col gap-2">
                <span className="font-semibold">{contact.name}</span>
                <span className="text-muted-foreground text-sm">
                  {contact.content}
                </span>
              </div>
              <span className="font-medium text-primary">
                {contact.contact}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
