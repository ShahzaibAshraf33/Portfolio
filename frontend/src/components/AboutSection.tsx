import { motion } from 'framer-motion';
import { FiMapPin, FiBook, FiAward } from 'react-icons/fi';
import { useCountUp } from '../hooks/useCountUp';

const Counter = ({ end, suffix = '+' }: { end: number; suffix?: string }) => {
  const { ref, count } = useCountUp(end);
  return (
    <span ref={ref} className="text-3xl font-bold text-accent">
      {count}
      {suffix}
    </span>
  );
};

const stats = [
  { value: 1, label: 'Years Experience' },
  { value: 3, label: 'Projects Built' },
  { value: 10, label: 'Technologies' },
];

const AboutSection = () => {
  return (
    <section id="about" className="relative section-padding">
      <div className="section-inner relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="text-accent text-sm tracking-[3px] mb-3 font-medium">ABOUT ME</p>
          <h2
            className="font-bold text-text-primary"
            style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}
          >
            Get to Know Me
          </h2>
        </motion.div>

        <div className="about-grid grid lg:grid-cols-2 gap-10 items-stretch">
          {/* About Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="bg-bg-card border border-border-subtle rounded-xl p-10 h-[260px] hover:border-accent transition-all duration-300 hover:shadow-[0_8px_30px_rgba(184,245,106,0.08)] flex flex-col"
          >
            <h3 className="text-2xl font-semibold mb-15 flex items-center gap-2 text-text-primary">
              <FiMapPin className="text-accent" /> About Me
            </h3>

            <p className="text-text-secondary leading-[1.8] flex-1 mb-0 p-5">
              Full Stack Developer based in Lahore, Pakistan with a passion for building
              scalable web applications. Currently pursuing my Bachelor's in Software Engineering
              and continuously expanding my skills in modern web technologies. I love turning
              complex problems into elegant solutions.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border-subtle mt-auto">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <Counter end={stat.value} />
                  <p className="text-text-muted text-xs mt-2">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="bg-bg-card border border-border-subtle rounded-xl p-10 h-[260px] hover:border-accent transition-all duration-300 hover:shadow-[0_8px_30px_rgba(184,245,106,0.08)] flex flex-col"
          >
            <h3 className="text-2xl font-semibold mb-20 flex items-center gap-2 text-text-primary">
              <FiBook className="text-accent" /> Education
            </h3>

            <div className="relative pl-6 border-l-2 border-border-subtle flex-1">
              <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-accent shadow-[0_0_12px_rgba(184,245,106,0.6)]" />

              {/* spacing fixed: use flex gap */}
              <div className="flex flex-col gap-3 mt-4">
                <p className="text-accent text-sm font-medium">2023 - 2027</p>

                <h4 className="text-text-primary font-semibold">
                  Bachelor of Software Engineering
                </h4>

                <p className="text-text-secondary text-sm">Lahore Leads University</p>

                <p className="text-text-muted text-sm flex items-center gap-2">
                  <FiAward className="text-accent" /> CGPA: 3.13
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;