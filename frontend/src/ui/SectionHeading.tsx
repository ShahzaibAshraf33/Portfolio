import { motion } from 'framer-motion';

interface Props {
  eyebrow: string;
  title: string;
  center?: boolean;
}

const SectionHeading = ({ eyebrow, title, center = true }: Props) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6 }}
    className={`mb-12 ${center ? 'text-center' : ''}`}
  >
    <p className="text-accent text-sm tracking-[3px] mb-3 font-medium">{eyebrow}</p>
    <h2 className="font-bold text-text-primary" style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}>
      {title}
    </h2>
  </motion.div>
);

export default SectionHeading;