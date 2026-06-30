import {
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaBootstrap,
  FaGitAlt, FaGithub, FaDatabase,
} from 'react-icons/fa';
import {
  SiTypescript, SiTailwindcss, SiRedux, SiExpress,
  SiMongodb, SiPostgresql, SiPrisma, SiMysql, SiPostman,
  SiCloudinary, SiSocketdotio, SiJsonwebtokens,
} from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';
import type { Skill, SkillCategory } from '../types/index';

export const skills: Skill[] = [
  { name: 'HTML5', icon: FaHtml5, cat: 'Frontend', color: '#e34f26' },
  { name: 'CSS3', icon: FaCss3Alt, cat: 'Frontend', color: '#1572b6' },
  { name: 'JavaScript', icon: FaJs, cat: 'Frontend', color: '#f7df1e' },
  { name: 'TypeScript', icon: SiTypescript, cat: 'Frontend', color: '#3178c6' },
  { name: 'React.js', icon: FaReact, cat: 'Frontend', color: '#61dafb' },
  { name: 'Redux Toolkit', icon: SiRedux, cat: 'Frontend', color: '#764abc' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, cat: 'Frontend', color: '#06b6d4' },
  { name: 'Bootstrap', icon: FaBootstrap, cat: 'Frontend', color: '#7952b3' },
  { name: 'Node.js', icon: FaNodeJs, cat: 'Backend', color: '#339933' },
  { name: 'Express.js', icon: SiExpress, cat: 'Backend', color: '#ffffff' },
  { name: 'JWT Auth', icon: SiJsonwebtokens, cat: 'Backend', color: '#ff006b' },
  { name: 'REST APIs', icon: FaDatabase, cat: 'Backend', color: '#b8f56a' },
  { name: 'MongoDB', icon: SiMongodb, cat: 'Database', color: '#47a248' },
  { name: 'PostgreSQL', icon: SiPostgresql, cat: 'Database', color: '#4169e1' },
  { name: 'Prisma', icon: SiPrisma, cat: 'Database', color: '#7ed4a0' },
  { name: 'MySQL', icon: SiMysql, cat: 'Database', color: '#4479a1' },
  { name: 'Git', icon: FaGitAlt, cat: 'Tools', color: '#f05032' },
  { name: 'GitHub', icon: FaGithub, cat: 'Tools', color: '#ffffff' },
  { name: 'Postman', icon: SiPostman, cat: 'Tools', color: '#ff6c37' },
  { name: 'Socket.io', icon: SiSocketdotio, cat: 'Tools', color: '#ffffff' },
  { name: 'Cloudinary', icon: SiCloudinary, cat: 'Tools', color: '#3448c5' },
  { name: 'VS Code', icon: VscCode, cat: 'Tools', color: '#007acc' },
];

export const skillCategories: SkillCategory[] = ['All', 'Frontend', 'Backend', 'Database', 'Tools'];
