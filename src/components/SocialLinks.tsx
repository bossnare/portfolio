import Image from 'next/image';
import { MaskedIcon } from './MaskedIcon';

const socialLinks = [
  {
    name: 'Instagram',
    icon: 'instagram.svg',
    href: 'https://instagram.com/thebossnare',
  },
  {
    name: 'Facebook',
    icon: 'facebook.svg',
    href: 'https://facebook.com/theletsgochris',
  },
  {
    name: 'WhatsApp',
    icon: 'whatsapp.svg',
    href: `https://wa.me/261382742449?text=${encodeURIComponent('Hello Christo')}`,
  },
  {
    name: 'GitHub',
    icon: 'github.svg',
    href: `https://github.com/bossnare`,
  },
];

export function SocialLinks() {
  return (
    <div className="flex gap-4">
      {socialLinks.map((socialLink) => (
        <a
          href={socialLink.href}
          title={socialLink.name}
          aria-label={`Send me a message ${socialLink.name}`}
          key={socialLink.icon}
          target="_blank"
          rel="noopener noreferrer"
          className="p-1 rounded hover:opacity-80 active:bg-muted"
        >
          <MaskedIcon icon={socialLink.icon} className="size-6" />
        </a>
      ))}
    </div>
  );
}
