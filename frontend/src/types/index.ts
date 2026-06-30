import type { IconType } from 'react-icons';

export interface Skill {
  name: string;
  icon: IconType;
  cat: 'Frontend' | 'Backend' | 'Database' | 'Tools';
  color: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  desc: string;
  tags: string[];
  gradient: string;
  stars: number;
  demo: string;
  github: string;
}

export interface Experience {
  date: string;
  role: string;
  company: string;
  bullets: string[];
}

export interface NavItem {
  label: string;
  href: string;
}

export type SkillCategory = 'All' | 'Frontend' | 'Backend' | 'Database' | 'Tools';
