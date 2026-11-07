import { contacts } from '@/src/data/contacts';
import { Page, PageHeader } from '@/src/components/Page';

import type { Metadata } from 'next';
import { ContactCard } from '@/src/components/contact/ContactCard';

const description = "Here are my contact details if you'd like to discuss a project, collaboration, or professional opportunity."

export const metadata: Metadata = {
  title: 'Contact',
  description,
  alternates: {
    canonical: '/contact'
  }
};

export default function ContactPage() {
  return (
    <Page id="contact-page">
      <PageHeader
        startTitle="my"
        title="Contact"
        description={description}
      />
      <ul className="grid w-full grid-cols-1 gap-6 mt-4 divide-y bg-background dark:bg-transparent md:m-0 md:grid-cols-3 md:divide-x md:divide-y-0 divide-border">
        {contacts.map((contact) => (
          <li key={contact.name}>
            <ContactCard contact={contact} />
          </li>
        ))}
      </ul>
    </Page>
  );
}
