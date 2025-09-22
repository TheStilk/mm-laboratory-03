export const GlowingCard = ({ children, className = '' }) => (
  <div
    className={`relative p-8 bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 ${className}`}
  >
    <div
      className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"
    />
    {children}
  </div>
);
