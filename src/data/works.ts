export const works = [
  {
    id: 'melodayz-music',
    category: 'web',
    type: 'Music platform',
    name: 'MelodayzMusic',
    brandName: 'MelodayzMusic',
    description:
      'A modern music streaming platform built with Next.js and Tailwind CSS. Features seamless audio playback, personalized playlist creation, and a responsive user interface.',
    icon: 'music',
    logoIcon: 'melodayzmusic.svg',
    color: '#296EC9',
    textColor: '#f5f5f5',
    link: 'https://melodayzmusic.vercel.app',
    cover: 'melodayzmusic_cover.png',
    personal: true,
    status: 'In-progress',
    github: 'https://github.com/bossnare/melodayzmusic',
    technologies: ['Tailwind CSS', 'TypeScript', 'Next.js', 'NestJS', 'PostgreSQL'] ,
    metadata: [
      {
        label: 'Year',
        value: ['2025']
      },
      {
        label: 'Framework',
        value: ['Next.js', 'NestJS']
      },
      {
        label: 'Category',
        value: ['Full-stack']
      }
    ]
  },
  {
    id: 'talor',
    category: 'web',
    type: 'Task management app',
    name: 'Talor',
    brandName: 'Talor',
    description:
      'A collaborative task management application featuring intercative Kanban boards, drag-and-drop functionality, and real-time updates powered by React/Vite and NestJS.',
    icon: 'folder-kanban',
    logoIcon: 'talor.svg',
    color: '#A9DCBD',
    textColor: '#162B22',
    link: 'https://talor.vercel.app',
    cover: 'talor_cover.png',
    personal: true,
    github: 'https://github.com/bossnare/talor',
    status: 'In-progress',
    technologies: ['Tailwind CSS', 'TypeScript', 'React', 'Vite', 'NestJS', 'PostgreSQL'] ,
    metadata: [
      {
        label: 'Year',
        value: ['2026']
      },
      {
        label: 'Framework',
        value: ['React/Vite', 'NestJS']
      },
      {
        label: 'Category',
        value: ['Full-stack']
      }
    ]
  },
  {
    id: 'portfolio',
    category: 'web',
    type: 'Portfolio website',
    name: 'Christo Razafimanga',
    brandName: 'CHRISTO',
    description:
      'My personal portfolio website designed to showcase my skills, projects, and professional journey. Focused on high performance, clean UI/UX, and accessibility.',
    icon: 'globe-check',
    logoIcon: 'letsgochris.svg',
    color: '#080a08',
    textColor: '#F1f1f1',
    link: 'https://christorazafimanga.is-a.dev',
    cover: 'christo_cover.png',
    personal: true,
    github: 'https://github.com/bossnare/portfolio',
    status: 'Completed',
    technologies: ['Tailwind CSS', 'TypeScript', 'Next.js'] ,
    metadata: [
      {
        label: 'Year',
        value: ['2026']
      },
      {
        label: 'Framework',
        value: ['Next.js']
      },
      {
        label: 'Category',
        value: ['Full-stack']
      }
    ]
  },
  {
    id: 'cabinet-excellent',
    category: 'web',
    type: 'RH management',
    name: 'Cabinet Excellent',
    brandName: 'Cabinet Excellent',
    description:
      'My personal portfolio website designed to showcase my skills, projects, and professional journey. Focused on high performance, clean UI/UX, and accessibility.',
    icon: 'person-standing',
    color: '#688E26',
    textColor: "#ffffff",
    link: '#',
    personal: false,
    cover: 'cabinet_excellent_cover.png',
    status: 'In-progress',
    technologies: ['Tailwind CSS', 'TypeScript', 'Express', 'React', 'Vite', 'MySQL'] ,
    metadata: [
      {
        label: 'Year',
        value: ['2026']
      },
      {
        label: 'Framework',
        value: ['React/Vite', 'Express']
      },
      {
        label: 'Category',
        value: ['UI/UX Design']
      }
    ]
  },
];

export type Work = (typeof works)[number];
