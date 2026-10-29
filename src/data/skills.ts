import { Database, PanelsTopLeft, Server, Palette } from 'lucide-react';

export const skills = [
  {
    icon: PanelsTopLeft,

    name: 'Frontend',
    skillItems: [
      'HTML5',
      'CSS3',
      'TypeScript',
      'React',
      'Next.js',
      'Tailwind CSS',
      'Shadcn UI',
    ],
  },
  {
    icon: Server,
    name: 'Backend',
    skillItems: [
      'NodeJS',
      'NestJS',
      'Express',
      'JWT',
      'TypeScript',
      'REST API',
      'Swagger',
      'Security',
    ],
  },
  {
    icon: Database,
    name: 'Database',
    skillItems: ['PostgreSQL', 'MySQL', 'MongoDB', 'Prisma ORM'],
  },
  {
    icon: Palette,

    name: 'Design & Tools',
    skillItems: [
      'Git',
      'GitHub',
      'Docker',
      'Postman',
      'VS Code',
      'Linux',
      'Vercel',
      'CI/CD',
      'Adobe',
      'AI tools'
    ],
  },
];

export const expertiseLevel = [
  {
    name: 'Frontend',
    percent: 90,
  },
  {
    name: 'Backend',
    percent: 75,
  },
  {
    name: 'Database',
    percent: 70,
  },
  {
    name: 'DevOps',
    percent: 55,
  },
  {
    name: 'AI Integration',
    percent: 35,
  },
];
