import { motion } from 'framer-motion';
import { GlowingCard } from '../components/GlowingCard';

export const FacultySection = () => (
  <section className="min-h-screen py-20 px-6">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Преподаватели мирового уровня
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Учитесь у ведущих экспертов и исследователей, которые формируют будущее компьютерных наук.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            name: "Маркус Родригез",
            title: "Профессор ИИ и машинного обучения",
            expertise: "Глубокое обучение, компьютерное зрение, NLP",
            achievements: "Финалист премии Тьюринга, опубликовано более 150 работ",
          },
          {
            name: "Маркус Фриксc",
            title: "Профессор Робострония",
            expertise: "Проектирование, создание и обучение роботов",
            achievements: "Награда NSF Career Award, пионер в области роботостроения",
          },
          {
            name: "София Уильямс",
            title: "Профессор кибербезопасности",
            expertise: "Сетевая безопасность, криптография, блокчейн",
            achievements: "Член ACM, инноватор года в области кибербезопасности",
          },
          {
            name: "Джеймс Пак",
            title: "Профессор человеко-машинного взаимодействия",
            expertise: "UX-дизайн, AR/VR, доступность",
            achievements: "Награда за лучшую статью CHI, эксперт по дизайн-мышлению",
          },
          {
            name: "Ким Хан",
            title: "Профессор науки о данных",
            expertise: "Большие данные, предиктивная аналитика, визуализация",
            achievements: "Член IEEE, инноватор в науке о данных",
          },
          {
            name: "Томас Рид",
            title: "Профессор систем и сетей",
            expertise: "Распределенные системы, облачные вычисления, 6G",
            achievements: "Награда SIGCOMM, пионер в сетевой архитектуре",
          }
        ].map((faculty, index) => (
          <GlowingCard key={index} className="transform hover:scale-105 transition-transform duration-300">
            <div>
            </div>
            <h3 className="text-xl font-bold mb-1 text-cyan-400">{faculty.name}</h3>
            <p className="text-blue-300 mb-3">{faculty.title}</p>
            <p className="text-gray-300 mb-3"><strong>Специализация:</strong> {faculty.expertise}</p>
            <p className="text-gray-400 text-sm"><strong>Достижения:</strong> {faculty.achievements}</p>
          </GlowingCard>
        ))}
      </div>
    </div>
  </section>
)
