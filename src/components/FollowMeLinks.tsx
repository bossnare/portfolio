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
    name: 'GitHub',
    icon: 'github.svg',
    href: '#',
  },
];

export function FollowMeLinks() {
  return (
    <div className="flex gap-4">
      {socialData.map((social) => (
        <a
          href={social.href}
          key={social.icon}
          className="group active:bg-background p-2"
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
