import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

const Footer = () => (
  <footer className="relative z-10 border-t border-border-subtle bg-bg-primary">
    <div className="section-inner py-8 flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 border border-accent rounded-md flex items-center justify-center font-bold text-accent">
          SA
        </div>
        <div className="text-center md:text-left">
          <p className="text-text-primary font-semibold">Shahzaib Ashraf</p>
          <p className="text-text-muted text-xs">© 2025 All rights reserved.</p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-6 text-text-secondary text-sm">
        {['Home', 'About', 'Skills', 'Projects'].map((l) => (
          <a key={l} href={`#${l.toLowerCase()}`} className="hover:text-accent transition-colors">
            {l}
          </a>
        ))}
      </div>

      <div className="flex gap-3">
        {[FaGithub, FaLinkedin, FaTwitter, HiMail].map((Icon, i) => (
          <a
            key={i}
            href="#"
            className="w-9 h-9 border border-border-subtle rounded-md flex items-center justify-center text-text-secondary hover:border-accent hover:text-accent transition-all"
          >
            <Icon />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;