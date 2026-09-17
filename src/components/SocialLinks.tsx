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
    href: 'https://facebook.com/thebossnare',
  },
  {
    name: 'WhatsApp',
    icon: 'whatsapp.svg',
    href: 'https://wa.me/261382742449',
  },
  {
    name: 'GitHub',
    icon: 'github.svg',
    href: 'https://github.com/bossnare',
  },
];

export function SocialLinks() {
  return (
    <div className="flex gap-4">
      {socialLinks.map((socialLink) => (
        <a
          href={socialLink.href}
          key={socialLink.icon}
          aria-label={socialLink.name}
          target="_blank"
          rel="noopener noreferrer"
          className="p-1 rounded hover:opacity-80 active:bg-black/4 dark:active:bg-[#1a1a1a]"
        >
          <MaskedIcon icon={socialLink.icon} className="size-6" />
        </a>
      ))}
    </div>
  );
}
