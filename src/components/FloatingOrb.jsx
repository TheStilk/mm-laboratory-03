import { motion } from 'framer-motion';

export function FloatingOrb({ delay = 0, size = 'w-2 h-2' }) {
  return (
    <motion.div
      className={`absolute ${size} bg-blue-400 rounded-full opacity-60 pointer-events-none`}
      animate={{
        y: [0, -20, 0],
        x: [0, 10, 0],
        scale: [0, 0, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        repeatType: 'loop',
        delay,
        ease: 'easeInOut',
      }}
    />
  );
}
