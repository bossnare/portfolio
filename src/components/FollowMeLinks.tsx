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
    name: 'GitHub',
    icon: 'github.svg',
    href: 'https://github.com/bossnare',
  },
];

export function FollowMeLinks() {
  return (
    <div className="flex gap-4">
      {socialLinks.map((socialLink) => (
        <a
          href={socialLink.href}
          key={socialLink.icon}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded group active:bg-background"
        >
          <MaskedIcon
            icon={socialLink.icon}
            className="size-4.5 bg-muted-foreground group-hover:bg-foreground"
          />
        </a>
      ))}
    </div>
  );
}
