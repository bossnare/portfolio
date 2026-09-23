import Image from 'next/image';

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
  {
    name: 'TikTok',
    icon: 'tiktok.svg',
    href: 'https://www.tiktok.com/@thebossnare',
  },
];

export function SocialLinks() {
  return (
    <div className="flex gap-4">
      {socialLinks.map((socialLink) => (
        <a
          href={socialLink.href}
          aria-label={`Send me a message ${socialLink.name}`}
          key={socialLink.icon}
          target="_blank"
          rel="noopener noreferrer"
          className="p-1 rounded hover:opacity-80 active:bg-black/4 dark:active:bg-[#1a1a1a]"
        >
          <Image
            width={60}
            height={60}
            src={`/icon/color/${socialLink.icon}`}
            className="size-6"
            alt={socialLink.name}
          />
        </a>
      ))}
    </div>
  );
}
