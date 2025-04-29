import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FadeInSectionProps {
  children?: ReactNode;
  className?: string;
  delay?: number;
}

export default function FadeInSection({ children, className, delay = 0 }: FadeInSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8, ease: 'easeOut', delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
