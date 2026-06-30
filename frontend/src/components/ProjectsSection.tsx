import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import ProjectCard from '../ui/ProjectCard';
import { projects } from '../data/projects';

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative section-padding pt-8">
      <div className="section-inner relative z-10">
        <div className="relative mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-accent text-sm tracking-[3px] mb-3 font-medium">
              FEATURED PROJECTS
            </p>
            <h2
              className="font-bold text-text-primary"
              style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}
            >
              Recent Work
            </h2>
          </motion.div>

          <motion.a
            href="https://github.com/shahzaibashraf"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mt-4 justify-center text-accent flex items-center gap-2 hover:gap-3 transition-all group md:mt-0 md:absolute md:right-0 md:bottom-2"
            data-cursor-hover
          >
            View all projects
            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
