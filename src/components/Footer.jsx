export const Footer = () => {
  const navItems = [
    { id: 'home', label: 'Главная' },
    { id: 'programs', label: 'Программы' },
    { id: 'research', label: 'Исследования' },
    { id: 'faculty', label: 'Преподаватели' },
    { id: 'admissions', label: 'Поступление' },
  ];

  return (
    <footer className="relative z-10 py-12 px-6 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
              Satbayev<span className="text-white"> University</span>
            </div>
            <p className="text-gray-400">
              Формируем будущее технологий через инновации, исследования и образование.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-blue-400">Быстрые ссылки</h4>
            <ul className="space-y-2 text-gray-400">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-purple-400">Ресурсы</h4>
            <ul className="space-y-2 text-gray-400">
              {['Портал студента', 'Каталог курсов', 'Научные работы', 'Центр карьеры', 'Сеть выпускников'].map(
                (res, i) => (
                  <li key={i}>
                    <a href="#" className="hover:text-purple-400 transition-colors">
                      {res}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-cyan-400">Связаться с нами</h4>
            <div className="flex space-x-4 mb-4">
              {['𝕏', 'WhatsApp', 'Telegram'].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                  aria-label={`Соцсеть ${icon}`}
                >
                  {icon}
                </a>
              ))}
            </div>
            <p className="text-gray-400 text-sm">
              © 2025 Satbayev University.<br /> Факультет Computer Science.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
