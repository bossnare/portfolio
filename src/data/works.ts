export const works = [
  {
    case: 'web',
    type: 'Music platform',
    name: 'MelodayzMusic',
    description:
      'A modern music streaming platform built with Next.js and Tailwind CSS. Features seamless audio playback, personalized playlist creation, and a responsive user interface.',
    icon: 'music',
    color: '#2D7DD2',
    link: 'https://melodayzmusic.vercel.app',
  },
  {
    case: 'web',
    type: 'Task management app',
    name: 'Talor',
    description:
      'A collaborative task management application featuring intercative Kanban boards, drag-and-drop functionality, and real-time updates powered by React/Vite and NestJS.',
    icon: 'folder-kanban',
    color: '#A9E5BB',
    link: 'https://talor.vercel.app',
  },
  {
    case: 'web',
    type: 'Portfolio website',
    name: 'Christo Razafimanga',
    description:
      'My personal portfolio website designed to showcase my skills, projects, and professional journey. Focused on high performance, clean UI/UX, and accessibility.',
    icon: 'globe-check',
    color: '#55D5D0',
    link: 'https://christorazafimanga.is-a.dev',
  },
  {
    case: 'web',
    type: 'RH management',
    name: 'Cabinet Excellent',
    description:
      'My personal portfolio website designed to showcase my skills, projects, and professional journey. Focused on high performance, clean UI/UX, and accessibility.',
    icon: 'person-standing',
    color: '#EEB902',
    link: '#',
  },
];

export type Work = (typeof works)[number];
