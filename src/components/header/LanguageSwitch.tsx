'use client';

import { cn } from '@/src/lib/utils';
import { useState } from 'react';

const languages = [
  { label: 'EN', lng: 'en' },
  { label: 'FR', lng: 'fr' },
];

export function LanguageSwitch() {
  const [lng, setLng] = useState('en');

  return (
    <div className="p-0.5 border border-border overflow-hidden rounded-sm flex items-center *:px-2 *:rounded-xs">
      {languages.map((language) => (
        <button
          key={language.lng}
          onClick={() => setLng(language.lng)}
          className={cn(
            lng === language.lng
              ? 'text-primary-foreground bg-primary font-medium'
              : 'text-muted-foreground hover:bg-black/4 hover:text-foreground dark:hover:bg-[#1a1a1a] active:opacity-60'
          )}
        >
          {language.label}
        </button>
      ))}
    </div>
  );
}
