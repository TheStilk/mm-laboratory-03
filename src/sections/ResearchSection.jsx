import { motion } from 'framer-motion';
import { GlowingCard } from '../components/GlowingCard';

export const ResearchSection = () => (
  <section className="min-h-screen py-20 px-6">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
          Передовые исследования
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Наши исследовательские лаборатории находятся на переднем крае технологических инноваций, решая реальные проблемы и расширяя границы возможного.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            title: "Лаборатория искусственного интеллекта",
            description: "Разработка систем ИИ следующего поколения, способных обучаться, рассуждать и естественно взаимодействовать с людьми.",
            projects: "Поиск нейронных архитектур, объяснимый ИИ, автономные системы"
          },
          {
            "title": "Центр робототехники",
            "description": "Разработка передовых роботов для автоматизации и улучшения качества жизни людей.",
            "projects": "Дроны для доставки, автономные автомобили, роботы для помощи в домашних делах"
          },
          {
            title: "Институт кибербезопасности",
            description: "Защита цифровой инфраструктуры с помощью передовых протоколов безопасности и систем обнаружения угроз.",
            projects: "Безопасность блокчейна, архитектура нулевого доверия, обнаружение угроз на основе ИИ"
          },
          {
            title: "Человеко-машинное взаимодействие",
            description: "Проектирование интуитивно понятных интерфейсов и взаимодействий, которые сокращают разрыв между людьми и технологиями.",
            projects: "Интерфейсы AR/VR, нейрокомпьютерные интерфейсы, технологии доступности"
          },
          {
            title: "Наука о данных и аналитика",
            description: "Извлечение ценной информации из огромных наборов данных для принятия решений и инноваций.",
            projects: "Обработка больших данных, предиктивная аналитика, потоки данных в реальном времени"
          },
          {
            title: "Системы и сети",
            description: "Создание инфраструктуры завтрашнего дня с помощью масштабируемых, эффективных и отказоустойчивых систем.",
            projects: "Граничные вычисления, сети 6G, оптимизация распределенных систем"
          }
        ].map((lab, index) => (
          <GlowingCard key={index} className="transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-bold mb-3 text-purple-400">{lab.title}</h3>
            <p className="text-gray-300 mb-4">{lab.description}</p>
            <div className="border-t border-gray-700 pt-4">
              <h4 className="font-semibold mb-2 text-sm uppercase tracking-wider text-gray-400">Текущие проекты</h4>
              <p className="text-sm text-gray-300">{lab.projects}</p>
            </div>
          </GlowingCard>
        ))}
      </div>
    </div>
  </section>
)
