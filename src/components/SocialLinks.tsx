import { MaskedIcon } from './MaskedIcon';

const socialData = [
  {
    name: 'Instagram',
    icon: 'instagram.svg',
    href: '#',
  },
  {
    name: 'Facebook',
    icon: 'facebook.svg',
    href: '#',
  },
  {
    name: 'WhatsApp',
    icon: 'whatsapp.svg',
    href: '#',
  },
  {
    name: 'GitHub',
    icon: 'github.svg',
    href: '#',
  },
];

export function SocialLinks() {
  return (
    <div className="flex gap-4">
      {socialData.map((social) => (
        <a
          href={social.href}
          key={social.icon}
          className="p-1 hover:opacity-80 active:bg-background!"
        >
          <MaskedIcon icon={social.icon} className="size-6" />
        </a>
      ))}
    </div>
  );
}
