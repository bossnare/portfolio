import { Music, GlobeCheck, FolderKanban, PersonStanding } from 'lucide-react';

export const works = [
  {
    type: 'Music platform',
    name: 'MelodayzMusic',
    description:
      'Lorem ipsum dolor sit amet, this project is amazing for visiters.',
    icon: Music,
    color: '#2D7DD2',
  },
  {
    type: 'Task management app',
    name: 'Talor',
    description:
      'Lorem ipsum dolor sit amet, this project is amazing for visiters.',
    icon: FolderKanban,
    color: '#A9E5BB',
  },
  {
    type: 'Portfolio website',
    name: 'Christo Razafimanga',
    description:
      'Lorem ipsum dolor sit amet, this project is amazing for visiters.',
    icon: GlobeCheck,
    color: '#55D5D0',
  },
  {
    type: 'RH management',
    name: 'Cabinet Excellent',
    description:
      'Lorem ipsum dolor sit amet, this project is amazing for visiters.',
    icon: PersonStanding,
    color: '#EEB902',
  },
];

export type Work = (typeof works)[number];
