export type SkillCategory = {
  title: string;
  items: { name: string; detail: string }[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming languages',
    items: [{ name: 'C', detail: 'Currently learning.' }],
  },
  {
    title: 'Web development',
    items: [
      { name: 'HTML', detail: 'Beginner.' },
      { name: 'CSS', detail: 'Beginner.' },
    ],
  },
  {
    title: 'Development tools',
    items: [{ name: 'GitHub', detail: 'Profile available for future projects and learning progress.' }],
  },
  {
    title: 'Other technical skills',
    items: [{ name: 'Learning mindset', detail: 'Building fundamentals in software development and web technologies.' }],
  },
];
