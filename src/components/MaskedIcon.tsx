type MaskedIconProps = {
  icon: string;
  className?: string;
};

export function MaskedIcon({ icon, className = '' }: MaskedIconProps) {
  return (
    <span
      className={`bg-foreground flex ${className}`}
      style={
        {
          maskImage: `url(/icon/${icon})`,
          maskRepeat: 'no-repeat',
          maskPosition: 'center',
          maskSize: 'contain',
          WebkitMaskImage: `url(/icon/${icon})`,
          WebkitMaskRepeat: 'no-repeat',
          WebkitMaskPosition: 'center',
          WebkitMaskSize: 'contain',
        } as React.CSSProperties
      }
    />
  );
}
