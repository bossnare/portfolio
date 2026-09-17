import { MaskedIcon } from './MaskedIcon';

const socialData = [
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
    href: '#',
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
      {socialData.map((social) => (
        <a
          href={social.href}
          key={social.icon}
          className="p-1 rounded hover:opacity-80 active:bg-black/4 dark:active:bg-[#1a1a1a]"
        >
          <MaskedIcon icon={social.icon} className="size-6" />
        </a>
      ))}
    </div>
  );
}
