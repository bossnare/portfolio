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
    name: 'GitHub',
    icon: 'github.svg',
    href: 'https://github.com/bossnare',
  },
];

export function FollowMeLinks() {
  return (
    <div className="flex gap-4">
      {socialData.map((social) => (
        <a
          href={social.href}
          key={social.icon}
          className="p-2 rounded group active:bg-background"
        >
          <MaskedIcon
            icon={social.icon}
            className="size-4.5 bg-muted-foreground group-hover:bg-foreground"
          />
        </a>
      ))}
    </div>
  );
}
