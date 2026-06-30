import { motion } from 'framer-motion';
import { experiences } from '../data/experiences';

const ExperienceSection = () => {
  return (
    <section id="experience" className="relative section-padding">
      <div className="section-inner relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent text-sm tracking-[3px] mb-3 font-medium">EXPERIENCE</p>
          <h2
            className="font-bold text-text-primary"
            style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}
          >
            Work Journey
          </h2>
        </motion.div>

        <div className="timeline relative pl-10 max-w-6xl mx-auto">
          {/* Vertical Line */}
          <div className="timeline-line absolute left-0 top-2 bottom-2 w-[2px] bg-gradient-to-b from-accent via-border-glow to-transparent" />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative mb-10 last:mb-0"
            >
              {/* Timeline Dot */}
              <span className="tl-dot absolute top-6 w-4 h-4 rounded-full bg-accent shadow-[0_0_15px_rgba(184,245,106,0.7)]">
                <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-40" />
              </span>

              <div
                className="bg-bg-card border border-border-subtle rounded-xl p-6 hover:border-accent transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(184,245,106,0.1)]"
                data-cursor-hover
              >
                <p className="text-accent text-sm mb-2 font-mono">{exp.date}</p>
                <h3 className="text-text-primary font-semibold text-xl">{exp.role}</h3>
                <p className="text-accent text-sm mb-4">{exp.company}</p>
                <ul className="space-y-2">
                  {exp.bullets.map((b, j) => (
                    <li
                      key={j}
                      className="text-text-secondary text-sm leading-[1.7] flex gap-3"
                    >
                      <span className="text-accent mt-1.5 flex-shrink-0">▹</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
