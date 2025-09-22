import { motion } from 'framer-motion';
import { GlowingCard } from '../components/GlowingCard';

export const ProgramsSection = () => (
  <section className="min-h-screen py-20 px-6">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Академические программы
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Выберите из нашего широкого спектра программ по компьютерным наукам, разработанных для подготовки вас к будущему технологий.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {[
          {
            title: "Бакалавр Computer Science",
            duration: "4 года",
            description: "Базовая программа, охватывающая алгоритмы, структуры данных, языки программирования и программную инженерию.",
            specializations: ["ИИ и машинное обучение", "Кибербезопасность", "Разработка игр", "Наука о данных"]
          },
          {
            title: "Магистр Computer Science",
            duration: "2 года",
            description: "Продвинутое обучение с исследовательским уклоном в специализированных областях компьютерных наук.",
            specializations: ["Квантовые вычисления", "Компьютерное зрение", "Обработка естественного языка", "Распределенные системы"]
          },
          {
            title: "PhD Computer Science",
            duration: "4-6 лет",
            description: "Оригинальное исследование, способствующее развитию знаний в области компьютерных наук.",
            specializations: ["Теоретические компьютерные науки", "Человеко-машинное взаимодействие", "Робототехника", "Биоинформатика"]
          },
          {
            title: "Сертификатные программы",
            duration: "6-12 месяцев",
            description: "Целевые, ориентированные на индустрию программы для карьерного роста или повышения квалификации.",
            specializations: ["Облачные вычисления", "Блокчейн", "DevOps", "UX/UI дизайн"]
          }
        ].map((program, index) => (
          <GlowingCard key={index} className="transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold mb-2 text-blue-400">{program.title}</h3>
            <div className="flex items-center mb-4">
              <span className="bg-gray-800 px-3 py-1 rounded-full text-sm text-gray-300">
                {program.duration}
              </span>
            </div>
            <p className="text-gray-300 mb-4">{program.description}</p>
            <div>
              <h4 className="font-semibold mb-2">Специализации:</h4>
              <div className="flex flex-wrap gap-2">
                {program.specializations.map((spec, i) => (
                  <span
                    key={i}
                    className="bg-gray-800/50 px-3 py-1 rounded-full text-sm text-blue-300"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>
          </GlowingCard>
        ))}
      </div>
    </div>
  </section>
)
