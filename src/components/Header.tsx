'use client';

import { Download, Menu, X } from 'lucide-react';
import { Tab, tabs } from './header/Tab';
import { useState } from 'react';
import {motion} from 'motion/react'

export function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <header className="sticky w-full top-0 z-1000 bg-[#F5F5F3] dark:bg-black">
      <nav className="flex items-center justify-between px-5 py-2.5 md:py-5 md:px-14">
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold font-display">
            CHRISTO <span className="font-medium">™</span>
          </span>
        </div>

        <ul className="items-center hidden gap-12 tracking-tight lg:flex">
          {
            tabs.map((tab) => (
              <li key={tab.label}><Tab label={tab.label} href={tab.href} /></li>
            ))
          }
        </ul>
        <div className="flex items-center gap-3">
          <a
            className="hidden lg:flex h-8 items-center justify-center gap-2 rounded-md px-3 bg-foreground text-background transition-colors hover:bg-[#383838] dark:hover:text-background dark:hover:bg-[#ccc]"
            href="/cv/Christo_Razafimanga_Dev_CV.pdf"
            download
          >
            Download CV
            <Download className="size-5" />
          </a>
          <div className="p-0.5 border border-zinc-300 overflow-hidden dark:border-white/12 rounded-sm flex items-center *:px-2 *:rounded-xs">
            <button className="text-white bg-primary">EN</button>
            <button className="text-muted-foreground">FR</button>
          </div>
          <button
            onClick={() => setIsOpenMenu((prev) => !prev)}
            className="flex items-center justify-center border rounded-sm md:hidden size-7 border-zinc-300 dark:border-white/12 active:bg-background active:opacity-80"
          >
            {isOpenMenu ? <X className="size-5 text-zinc-800 dark:text-zinc-100" /> : <Menu className="size-5 text-zinc-800 dark:text-zinc-100" />}
          </button>
        </div>
      </nav>
      {/* mobile navigation */}
      {isOpenMenu && (
        <motion.nav initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }} className="flex flex-col gap-3 px-5 pt-3 pb-8 border-t border-b border-zinc-200 dark:border-white/8 md:hidden">
          <ul className="flex flex-col items-start gap-4">
            {
            tabs.map((tab) => (
              <li key={tab.label}><Tab label={tab.label} href={tab.href} /></li>
            ))
          }
          </ul>
        </motion.nav>
      )}
    </header>
  );
}
