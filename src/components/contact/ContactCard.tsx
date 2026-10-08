'use client';

import type { Contact } from '@/src/data/contacts';
import { useNavigation } from '@/src/hooks/use-navigation';
import { handleWait } from '@/src/utils/handle-wait';
import { Mail, MessageSquare, Phone } from 'lucide-react';

const contactIcons = {
  mail: Mail,
  phone: Phone,
  message: MessageSquare,
};

export function ContactCard(contact: Contact) {
  const { goTo } = useNavigation();
  const Icon = contactIcons[contact.icon];

  return (
    <div className="flex flex-row gap-3 py-4 md:flex-col">
      <Icon className="mt-0.5 text-primary size-5 md:mt-0" />
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <span className="font-semibold">{contact.name}</span>
          <span className="text-sm text-muted-foreground">
            {contact.content}
          </span>
        </div>
        <a
          href={contact.link}
          className="font-medium w-fit text-muted-foreground hover:text-primary hover:underline active:underline active:text-primary dark:active:bg-[#1a1a1a]"
          onClick={(e) => {
            e.preventDefault();
            handleWait(() => goTo({href: contact.link, openExternal: true}), 300);
          }}
        >
          {contact.contact}
        </a>
      </div>
    </div>
  );
}
