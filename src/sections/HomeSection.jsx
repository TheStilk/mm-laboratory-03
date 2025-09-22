import { motion } from 'framer-motion';
import { GlowingCard } from '../components/GlowingCard';

export const HomeSection = () => (
  <section className="min-h-screen flex items-center justify-center px-6 py-12">
    <div className="max-w-6xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mb-8"
      >
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
          Компьютерные
          <br />
          Науки
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Формируйте будущее с помощью передовых технологий. Присоединяйтесь к нашей программе мирового уровня по компьютерным наукам и станьте пионером цифровой революции.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-semibold hover:from-blue-500 hover:to-purple-500 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25">
            Подать заявку
          </button>
          <button className="px-8 py-4 border border-gray-600 rounded-full font-semibold hover:border-blue-400 hover:text-blue-400 transition-all duration-300">
            Изучить программы
          </button>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        {[
          { title: "Бакалавриат", emoji: "💻", desc: "Создайте прочный фундамент в принципах компьютерных наук и подготовьтесь к успешной карьере в IT." },
          { title: "Магистратура", emoji: "🔬", desc: "Расширьте свои знания с помощью специализированных исследований и подготовьтесь к руководящим должностям в академической среде или индустрии." },
          { title: "Исследования", emoji: "🚀", desc: "Внесите свой вклад в революционные открытия в области ИИ, кибербезопасности, квантовых вычислений и многого другого." }
        ].map((card, i) => (
          <GlowingCard key={i}>
            <div className="text-4xl mb-4">{card.emoji}</div>
            <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
            <p className="text-gray-400">{card.desc}</p>
          </GlowingCard>
        ))}
      </div>
    </div>
  </section>
);
