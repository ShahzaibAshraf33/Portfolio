import { motion } from 'framer-motion';
import { FiArrowRight, FiDownload, FiSend } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { Link } from 'react-scroll';
import CodeBlock from '../effects/CodeBlock';

// ❌ NO PDF IMPORT NEEDED AT ALL - DELETE ANY PDF IMPORT

const techBadges = [
  { name: 'React', top: '5%', right: '2%', delay: 0 },
  { name: 'Node.js', top: '30%', right: '0%', delay: 0.5 },
  { name: 'TypeScript', top: '55%', right: '2%', delay: 1 },
  { name: 'MongoDB', top: '80%', right: '4%', delay: 1.5 },
  { name: 'PostgreSQL', top: '92%', right: '18%', delay: 2 },
];

const socialLinks = [
  { Icon: FaGithub, href: 'https://github.com/ShahzaibAshraf33' },
  { Icon: FaLinkedin, href: 'https://www.linkedin.com/in/shahzaib-ashraf-dev/' },
  { Icon: FaTwitter, href: 'https://twitter.com/shahzaibashraf' },
  { Icon: HiMail, href: 'mailto:shahzaibashraf99887@gmail.com' },
];

// ✅ Direct anchor download from public folder — no fetch needed
const handleDownload = () => {
  const link = document.createElement('a');
  link.href = `${window.location.origin}/Shahzaib_Ashraf_CV.pdf`;
  link.setAttribute('download', 'Shahzaib_Ashraf_CV.pdf');
  link.setAttribute('target', '_blank');
  link.setAttribute('rel', 'noopener noreferrer');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const HeroSection = () => {
  return (
    <section
      id="home"
      className="hero-section relative min-h-screen flex items-center pt-24 pb-24 overflow-hidden"
    >
      <div className="section-inner hero-inner grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Column */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-accent text-sm font-medium tracking-[3px] mb-4 flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
            FULL STACK DEVELOPER
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-extrabold text-text-primary mb-4 leading-[1.05] glow-text"
            style={{ fontSize: 'clamp(40px, 6vw, 80px)' }}
          >
            SHAHZAIB
            <br />
            ASHRAF
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-accent mb-6 font-semibold"
            style={{ fontSize: 'clamp(18px, 2.5vw, 28px)' }}
          >
            MERN &amp; PERN Stack Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-text-secondary max-w-[480px] leading-[1.7] mb-8"
          >
            I craft modern, high-performance web applications with clean code and exceptional user
            experience. Specialized in building scalable solutions with cutting-edge technologies.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap gap-2 mt-4 items-start"
          >
            {/* View Projects Button */}
            <Link to="projects" smooth duration={500} offset={-80}>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(184,245,106,0.5)' }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary"
              >
                View Projects <FiArrowRight />
              </motion.button>
            </Link>

            {/* Contact Me Button */}
            <Link to="contact" smooth duration={500} offset={-80}>
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(184,245,106,0.1)' }}
                whileTap={{ scale: 0.98 }}
                className="btn-outline"
              >
                Contact Me <FiSend />
              </motion.button>
            </Link>

            {/* ✅ Download CV Button - No import needed */}
            <motion.button
              onClick={handleDownload}
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(184,245,106,0.1)' }}
              whileTap={{ scale: 0.98 }}
              className="btn-outline"
            >
              Download CV <FiDownload />
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex gap-6 mt-10"
          >
            {socialLinks.map(({ Icon, href }, i) => (
              <motion.a
                key={i}
                href={href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -3, color: '#b8f56a' }}
                className="text-text-muted text-2xl transition-colors"
                data-cursor-hover
              >
                <Icon />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Right Column - Code Card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hero-visual relative max-w-full min-w-0"
        >
          <div
            className="absolute inset-0 -m-20 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse at center, rgba(184,245,106,0.08) 0%, transparent 70%)',
            }}
          />

          <div className="code-card max-w-full overflow-hidden">
            <CodeBlock />
          </div>

          {/* Floating Tech Badges */}
          {techBadges.map((badge) => (
            <motion.div
              key={badge.name}
              className="tech-badge absolute bg-bg-card border border-border-subtle rounded-full px-4 py-2 text-sm text-text-primary shadow-lg hidden lg:flex flex-wrap items-center gap-2 max-w-full"
              style={{ top: badge.top, right: badge.right }}
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: badge.delay,
                ease: 'easeInOut',
              }}
            >
              <span className="w-2 h-2 rounded-full bg-accent" />
              {badge.name}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;