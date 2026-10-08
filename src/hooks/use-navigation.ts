'use client';

import { useRouter } from 'next/navigation';

export const useNavigation = () => {
  const router = useRouter();
  const goTo = ({
    href,
    openExternal = false,
  }: {
    href: string;
    openExternal?: boolean;
  }) => {
    if (openExternal) window.open(href, '_blank', 'noopener,noreferrer');
    else router.push(href);
  };

  return { goTo };
};
