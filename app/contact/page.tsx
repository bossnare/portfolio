import { contacts } from '@/src/data/contacts';
import { Page, PageHeader } from '@/src/components/Page';

import type { Metadata } from 'next';
import { ContactCard } from '@/src/components/contact/ContactCard';

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
      <ul className="grid w-full grid-cols-1 gap-6 mt-4 divide-y bg-background dark:bg-transparent md:m-0 md:grid-cols-3 md:divide-x md:divide-y-0 divide-border">
        {contacts.map((contact) => (
          <li key={contact.name}>
            <ContactCard {...contact} />
          </li>
        ))}
      </ul>
    </Page>
  );
}
