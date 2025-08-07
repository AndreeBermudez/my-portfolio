import { Coffee, FileCode2, Lightbulb, Users } from "@lucide/astro";

export const skills = [
  {
    icon: FileCode2,
    title: 'Frontend Development',
    description: 'React, TypeScript, Astro, Tailwind CSS',
    color: '#a174fa',
    isActive: true,
  },
  {
    icon: Lightbulb,
    title: 'Problem Solving',
    description: 'Creative solutions and clean code architecture',
    color: '#8f5ff0',
    isActive: true,
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Team work and agile methodologies',
    color: '#9d6bf5',
    isActive: true,
  },
  {
    icon: Coffee,
    title: 'Dedication',
    description: 'Passionate about continuous learning',
    color: '#c49eff',
    isActive: false,
  },
];