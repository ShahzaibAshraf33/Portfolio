import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';
import { FaGithub, FaStar } from 'react-icons/fa';
import type { Project } from '../types/index';
import zameenImg from '../assets/1.png';
import instaImg from '../assets/2.png';
import studentImg from '../assets/3.png';

interface Props {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: Props) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    whileHover={{ y: -8 }}
    className="proj-card bg-bg-card border border-border-subtle rounded-xl overflow-hidden hover:border-accent transition-all duration-300 group cursor-pointer flex flex-col"
    data-cursor-hover
  >
    <div className="proj-img relative flex items-center justify-center overflow-hidden">
      {project.id === 'zameen360' ? (
        <img src={zameenImg} alt={project.title} className="absolute inset-0 w-full h-full object-cover" />
      ) : project.id === 'instagram-clone' ? (
        <img src={instaImg} alt={project.title} className="absolute inset-0 w-full h-full object-cover" />
      ) : project.id === 'student-ms' ? (
        <img src={studentImg} alt={project.title} className="absolute inset-0 w-full h-full object-cover" />
      ) : (
        <div className={`proj-img-bg absolute inset-0 bg-gradient-to-br ${project.gradient}`} />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <h3 className="absolute top-4 left-4 text-white font-bold text-lg z-10">{project.title}</h3>
      <div className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-[0.08] transition-opacity duration-300" />
    </div>

    <div className="p-8 flex flex-col flex-1">
      <h3 className="text-text-primary font-semibold text-xl mb-1">{project.title}</h3>
      <p className="text-accent text-xs mb-3">{project.subtitle}</p>
      <p className="text-text-secondary text-sm leading-[1.6] line-clamp-2 mb-4">{project.desc}</p>

      <div className="flex flex-wrap gap-2 mb-5">
        {project.tags.map((t) => (
          <span
            key={t}
            className="text-[11px] px-2.5 py-1 rounded-full"
            style={{ backgroundColor: 'rgba(13, 33, 55, 0.6)', color: '#a8e6cf' }}
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-border-subtle mt-auto">
        <a href={project.demo} className="text-text-secondary text-sm flex items-center gap-1.5 hover:text-accent transition-colors">
          Live Demo <FiExternalLink size={14} />
        </a>
        <a href={project.github} className="text-text-secondary text-sm flex items-center gap-1.5 hover:text-accent transition-colors">
          <FaGithub size={14} /> <FaStar size={12} className="text-accent" /> {project.stars}
        </a>
      </div>
    </div>
  </motion.div>
);

export default ProjectCard;
