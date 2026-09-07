export type ProjectCategory = 'All' | 'AI / ML' | 'Full Stack' | 'Data / Analytics';
export type Project = {
  title: string;
  category: Exclude<ProjectCategory, 'All'>;
  description: string;
  technologies: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
};
