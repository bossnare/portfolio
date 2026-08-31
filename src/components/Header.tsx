import { ArrowBigDownDash } from 'lucide-react';
import Image from 'next/image';


export function Header() {
  return (
    <nav className="flex items-center justify-between h-full">
      <div className="flex items-center gap-3">
        <Image alt="logo-icon" src="/icon/icon.svg" className="dark:hidden" width={30} height={30} />
        <Image alt="logo-icon" src="/icon/icon-dark.svg" className="hidden dark:block" width={30} height={30} />
        <span className="text-lg font-extrabold">Christo Razafimanga</span>
      </div>

      <ul className="items-center hidden gap-6 lg:flex">
        <li className="relative font-semibold text-primary">
          Home
          <span className="absolute inset-x-0 h-1 rounded-full -bottom-2 bg-primary"></span>
        </li>
        <li>About</li>
        <li>Experience</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
      <a
        className="hidden lg:flex h-11 w-full items-center justify-center gap-2 rounded-full border border-primary px-5 text-primary transition-colors hover:bg-[#383838] dark:hover:text-background dark:hover:bg-[#ccc] md:w-44"
        href="/cv/Christo_Razafimanga_Dev_CV.pdf"
        download
      >
        <ArrowBigDownDash />
        Download CV
      </a>
    </nav>
  );
}
