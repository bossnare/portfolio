'use client';

import { cn } from '../lib/utils';
import { handleWait } from '../utils/handle-wait';
import { useNavigation } from '@/src/hooks/use-navigation';

type Props = React.ComponentProps<'a'>;

function OpenLink({ children, className, href = '#', ...props }: Props) {
  const { goTo } = useNavigation();

  return (
    <a
      href={href}
      onClick={(e) => {
        e.preventDefault();
        handleWait(() => goTo({ href: href }), 200);
      }}
      className={cn('flex items-center justify-center gap-3', className)}
      {...props}
    >
      {children}
    </a>
  );
}

function OpenExternalLink({
  children,
  className,
  href = '#',
  ...props
}: Props) {
  const { goTo } = useNavigation();

  return (
    <a
      href={href}
      onClick={(e) => {
        e.preventDefault();
        handleWait(() => goTo({ href: href, openExternal: true }), 200);
      }}
      className={cn('flex items-center justify-center gap-3', className)}
      {...props}
    >
      {children}
    </a>
  );
}

export { OpenLink, OpenExternalLink };
