import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { HiMenu, HiX } from 'react-icons/hi';
import { FiArrowRight } from 'react-icons/fi';
import { navItems } from '../data/navigation';
import { useScrollDirection } from '../hooks/useScrollDirection';

const Navbar = () => {
  const scrolled = useScrollDirection();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'backdrop-blur-md bg-[rgba(10,15,10,0.85)] border-b border-border-subtle' : ''
        }`}
      >
        <div className="section-inner py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 border border-accent rounded-md flex items-center justify-center font-bold text-accent text-lg">
              SA
            </div>
            <span className="text-text-primary font-semibold hidden sm:block">Shahzaib Ashraf</span>
          </div>

          <ul className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.href} className="relative">
                <Link
                  to={item.href}
                  spy
                  smooth
                  duration={500}
                  offset={-80}
                  onSetActive={() => setActive(item.href)}
                  className={`cursor-pointer text-sm transition-colors duration-200 ${
                    active === item.href ? 'text-accent' : 'text-text-secondary hover:text-accent'
                  }`}
                >
                  {item.label}
                  {active === item.href && (
                    <motion.div
                      layoutId="navUnderline"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-accent"
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* "Let's Talk" uses shared btn-outline so size matches Hero buttons */}
          <Link
            to="contact"
            smooth
            duration={500}
            offset={-80}
            className="btn-outline hidden lg:inline-flex hover:bg-accent hover:text-bg-primary"
          >
            Let's Talk <FiArrowRight />
          </Link>

          <button className="lg:hidden text-accent text-2xl" onClick={() => setOpen(!open)}>
            {open ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-bg-primary/95 backdrop-blur-lg lg:hidden flex items-center justify-center"
          >
            <motion.ul
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
              className="flex flex-col gap-6 text-center"
            >
              {navItems.map((item) => (
                <motion.li
                  key={item.href}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <Link
                    to={item.href}
                    smooth
                    duration={500}
                    offset={-80}
                    onClick={() => setOpen(false)}
                    className="text-2xl text-text-primary hover:text-accent cursor-pointer"
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
