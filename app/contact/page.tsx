import { contacts } from '@/src/data/contacts';
import { Page, PageHeader } from '@/src/components/Page';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
};

export default function ContactPage() {
  return (
    <Page id="contact-page">
      <PageHeader
        title="Contact"
        description="Here are my contact details if you'd like to discuss a project,
          collaboration, or professional opportunity."
      />
      <ul className="grid w-full grid-cols-1 gap-6 mt-4 divide-y bg-background dark:bg-transparent md:m-0 md:grid-cols-3 md:divide-x md:divide-y-0 divide-zinc-200 dark:divide-white/12">
        {contacts.map((contact) => (
          <li key={contact.name}>
            <div className="flex flex-row gap-4 py-4 md:gap-3 md:flex-col">
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
          </li>
        ))}
      </ul>
    </Page>
  );
}
