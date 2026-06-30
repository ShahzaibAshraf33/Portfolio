import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const codeLines = [
  { text: 'const developer = {', color: 'text-purple-400' },
  { text: '  name: "Shahzaib Ashraf",', color: 'text-text-primary' },
  { text: '  role: "Full Stack Developer",', color: 'text-text-primary' },
  { text: '  skills: ["React", "Node.js", "PostgreSQL"],', color: 'text-text-primary' },
  { text: '  passion: "Building scalable apps",', color: 'text-text-primary' },
  { text: '  stack: "MERN + PERN"', color: 'text-text-primary' },
  { text: '};', color: 'text-purple-400' },
  { text: 'console.log(developer);', color: 'text-accent' },
];

const CodeBlock = () => {
  const [typed, setTyped] = useState<string[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTyped((prev) => {
        if (prev.length >= codeLines.length) {
          clearInterval(interval);
          return prev;
        }

        return [...prev, codeLines[prev.length].text];
      });
    }, 400);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-code-bg border border-border-subtle rounded-xl p-8 shadow-2xl backdrop-blur-sm code-block-shell">
      <div className="flex items-center gap-2 mb-3 pb-2 border-b border-border-subtle px-1">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
        <span className="ml-auto text-text-muted text-xs font-mono">developer.ts</span>
      </div>
      <div className="font-mono text-sm code-block-content">
        {typed.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className={`${codeLines[i]?.color || 'text-text-primary'} code-block-line`}
          >
            {line}
          </motion.div>
        ))}
        <span className="text-accent animate-pulse">|</span>
      </div>
    </div>
  );
};

export default CodeBlock;
