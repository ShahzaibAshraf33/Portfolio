import { motion } from 'framer-motion';
import type { Skill } from '../types/index';

interface Props {
  skill: Skill;
  index: number;
}

const SkillCard = ({ skill, index }: Props) => {
  const Icon = skill.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04, duration: 0.4 }}
      whileHover={{ y: -4 }}
      className="bg-bg-card border border-border-subtle rounded-lg hover:border-accent hover:shadow-[0_8px_24px_rgba(184,245,106,0.12)] transition-all duration-300 cursor-pointer group"
      style={{ padding: '18px 12px 16px' }}
      data-cursor-hover
    >
      {/* Icon — anchored to top with padding */}
      <div className="flex justify-center mb-3">
        <Icon
          className="skill-icon transition-transform group-hover:scale-110"
          style={{ color: skill.color }}
        />
      </div>

      {/* Label — anchored to bottom */}
      <p className="text-text-primary text-sm font-medium text-center leading-tight">
        {skill.name}
      </p>
    </motion.div>
  );
};

export default SkillCard;
