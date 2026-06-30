import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import SectionHeading from '../ui/SectionHeading';
import SkillCard from '../ui/SkillCard';
import { skills, skillCategories } from '../data/skills';
import type { SkillCategory } from '../types/index.ts';

const SkillsSection = () => {
  const [active, setActive] = useState<SkillCategory>('All');
  const filtered = active === 'All' ? skills : skills.filter((s) => s.cat === active);

  return (
    <section id="skills" className="relative section-padding pb-12">
      <div className="section-inner relative z-10">
        <SectionHeading eyebrow="TECH STACK" title="Skills & Technologies" />

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="skills-filter-tabs"
        >
          {skillCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              data-cursor-hover
              className={`skills-filter-btn ${active === cat ? 'is-active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="skills-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
          >
            {filtered.map((skill, i) => (
              <SkillCard key={skill.name} skill={skill} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default SkillsSection;