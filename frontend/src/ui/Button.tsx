import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit';
}

const Button = ({ children, variant = 'primary', onClick, className = '', type = 'button' }: Props) => {
  const base =
    'px-6 py-3 rounded-md font-semibold inline-flex items-center justify-center gap-2 whitespace-nowrap transition-all duration-300 cursor-pointer';
  const styles =
    variant === 'primary'
      ? 'bg-accent text-bg-primary'
      : 'border border-accent text-accent hover:bg-accent/10';

  return (
    <motion.button
      type={type}
      whileHover={
        variant === 'primary'
          ? { scale: 1.05, boxShadow: '0 0 25px rgba(184,245,106,0.5)' }
          : { scale: 1.05 }
      }
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`${base} ${styles} ${className}`}
    >
      {children}
    </motion.button>
  );
};

export default Button;
