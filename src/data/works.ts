import { Music, GlobeCheck, FolderKanban, PersonStanding } from 'lucide-react';

export const works = [
  {
    case: 'web',
    type: 'Music platform',
    name: 'MelodayzMusic',
    description:
      'A modern music streaming platform built with Next.js and Tailwind CSS. Features seamless audio playback, personalized playlist creation, and a responsive user interface.',
    icon: Music,
    color: '#2D7DD2',
  },
  { case: 'web',
    type: 'Task management app',
    name: 'Talor',
    description:
      'A collaborative task management application featuring intercative Kanban boards, drag-and-drop functionality, and real-time updates powered by React/Vite and NestJS.',
    icon: FolderKanban,
    color: '#A9E5BB',
  },
  { case: 'web',
    type: 'Portfolio website',
    name: 'Christo Razafimanga',
    description:
      'My personal portfolio website designed to showcase my skills, projects, and professional journey. Focused on high performance, clean UI/UX, and accessibility.',
    icon: GlobeCheck,
    color: '#55D5D0',
  },
  { case: 'web',
    type: 'RH management',
    name: 'Cabinet Excellent',
    description:
      'My personal portfolio website designed to showcase my skills, projects, and professional journey. Focused on high performance, clean UI/UX, and accessibility.',
    icon: PersonStanding,
    color: '#EEB902',
  },
];

export type Work = (typeof works)[number];
