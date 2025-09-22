import { motion } from 'framer-motion';

export const NavItem = ({ id, label, isActive, onClick }) => (
  <button
    onClick={() => onClick(id)}
    className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 hover:text-blue-400 ${
      isActive ? 'text-blue-400' : 'text-gray-300'
    }`}
    aria-current={isActive ? 'page' : undefined}
  >
    {label}
    {isActive && (
      <motion.div
        className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        exit={{ scaleX: 0 }}
        transition={{ duration: 0.3 }}
      />
    )}
  </button>
);
