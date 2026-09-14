import { MaskedIcon } from './MaskedIcon';

const socialIcons = ['instagram.svg', 'facebook.svg', 'whatsapp.svg'];

export function SocialLinks() {
  return (
    <div className="flex gap-4">
      {socialIcons.map((icon) => (
        <MaskedIcon key={icon} icon={icon} className="size-6" />
      ))}
    </div>
  );
}
