export const educations = [
  {
    period: '2024 - 2026',
    title: "Audiovisual Communication and Technology",
    school: 'E-media University Madagascar',
    description: 'Digital media and visual storytelling, and web development.',
    degree: 'Bachelor',
  },
  {
    period: '2023 - 2024',
    title: "Web development",
    school: 'Digital Training Center(DTC) Madagascar',
    description: 'Modern technologies and interactive web applications.',
    degree: 'Certificate',
  },
  {
    period: '2021 - 2022',
    title: 'Baccalaureate - A2',
    school: 'Saint Jean Paul II, Madagascar',
    description: 'Completed secondary education.',
    degree: 'High School Diploma',
  },
];

export type Education = (typeof educations)[number];
