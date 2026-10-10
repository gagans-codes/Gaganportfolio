export type Project = {
  title: string;
  slug: string;
  description: string;
  category: string;
  technologies: string[];
  status: 'Planned' | 'In progress' | 'Completed';
  githubUrl?: string;
  liveUrl?: string;
  overview?: string;
  problem?: string;
  goals?: string[];
  features?: string[];
  process?: string[];
  challenges?: string[];
  lessons?: string[];
  image: string;
  imageAlt: string;
};

export const projects: Project[] = [];

export const projectTemplate = {
  title: 'Project title',
  slug: 'project-title',
  description: 'Short project description.',
  category: 'Web development',
  technologies: ['Next.js', 'TypeScript'],
  status: 'In progress',
  githubUrl: 'https://github.com/your-username/project-name',
  liveUrl: 'https://example.com',
  overview: 'Summary of the project idea and scope.',
  problem: 'The problem being solved or user need addressed.',
  goals: ['Define objective one', 'Define objective two'],
  features: ['Feature one', 'Feature two'],
  process: ['Research and planning', 'Implementation', 'Testing'],
  challenges: ['Challenge to note later'],
  lessons: ['Lesson learned'],
  image: '/images/placeholder-project.svg',
  imageAlt: 'Project preview placeholder',
} satisfies Project;
