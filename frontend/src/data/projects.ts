import type { Project } from '../types/index';

export const projects: Project[] = [
  {
    id: 'zameen360',
    title: 'Zameen360',
    subtitle: 'Real Estate Marketplace',
    desc: 'Full-stack real estate platform with property listings, buy/sell, rental management, advanced search, admin dashboard, role-based auth, and 3D property views with Three.js hotspots.',
    tags: ['React', 'TypeScript', 'PostgreSQL', 'Three.js'],
    gradient: 'from-emerald-900 via-green-800 to-teal-900',
    stars: 24,
    demo: '#',
    github: 'https://github.com/shahzaibashraf/zameen360',
  },
  {
    id: 'instagram-clone',
    title: 'Instagram Clone',
    subtitle: 'Social Media App',
    desc: 'Full social media application with authentication, posts, likes, comments, follow system, and real-time notifications powered by Socket.io.',
    tags: ['React', 'MongoDB', 'Socket.io'],
    gradient: 'from-pink-900 via-purple-800 to-indigo-900',
    stars: 18,
    demo: '#',
    github: 'https://github.com/shahzaibashraf/instagram-clone',
  },
  {
    id: 'student-ms',
    title: 'Student & Teacher MS',
    subtitle: 'Management System',
    desc: 'Full-stack management system for students, teachers, and courses with real-time updates, email notifications, and role-based access control.',
    tags: ['React', 'Node.js', 'MongoDB'],
    gradient: 'from-blue-900 via-cyan-800 to-sky-900',
    stars: 12,
    demo: '#',
    github: 'https://github.com/shahzaibashraf/student-management',
  },
];
