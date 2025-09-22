import { useState } from 'react';
import { NavItem } from './NavItem';

export const Navbar = ({ activeSection, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Главная' },
    { id: 'programs', label: 'Программы' },
    { id: 'research', label: 'Исследования' },
    { id: 'faculty', label: 'Преподаватели' },
    { id: 'admissions', label: 'Поступление' },
  ];

  return (
    <>
      <nav className="relative z-50 p-6 flex justify-between items-center">
        <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Satbayev<span className="text-white"> University</span>
        </div>

        {/* Desktop */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <NavItem
              key={item.id}
              id={item.id}
              label={item.label}
              isActive={activeSection === item.id}
              onClick={onNavigate}
            />
          ))}
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-gray-300 hover:text-white transition-colors"
          onClick={(e) => {
            e.stopPropagation();
            setIsMenuOpen(!isMenuOpen);
          }}
          aria-expanded={isMenuOpen}
          aria-label="Открыть меню"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/90 backdrop-blur-sm md:hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {navItems.map((item) => (
              <NavItem
                key={item.id}
                id={item.id}
                label={item.label}
                isActive={activeSection === item.id}
                onClick={(id) => {
                  onNavigate(id);
                  setIsMenuOpen(false);
                }}
              />
            ))}
            <button
              className="absolute top-6 right-6 text-gray-300 hover:text-white"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Закрыть меню"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};
