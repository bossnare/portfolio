type Props = React.ComponentProps<'span'>;

type MaskedIconProps = Props & {
  icon: string;
  className?: string;
};

export function MaskedIcon({style, icon, className = '' }: MaskedIconProps) {
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
          ...style
        } as React.CSSProperties
      }
    />
  );
}
