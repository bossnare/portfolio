import { Database, LayoutPanelLeft, Package2, Toolbox } from 'lucide-react';

export const skills = [
  {
    icon: LayoutPanelLeft,

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
    icon: Package2,
    name: 'Backend',
    skillItems: [
      'NodeJS',
      'NestJS',
      'Express',
      'JWT',
      'TypeScript',
      'REST API',
      'Swagger',
    ],
  },
  {
    icon: Database,
    name: 'Database',
    skillItems: ['PostgreSQL', 'MySQL', 'MongoDB', 'Prisma ORM'],
  },
  {
    icon: Toolbox,

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
];
