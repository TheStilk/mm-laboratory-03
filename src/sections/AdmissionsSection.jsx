import { motion } from 'framer-motion';
import { GlowingCard } from '../components/GlowingCard';

export const AdmissionsSection = () => (
  <section className="min-h-screen py-20 px-6">
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
          Присоединяйтесь к нашей программе
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Начните свой путь в компьютерных науках с одной из самых инновационных и прогрессивных программ в мире.
        </p>
      </motion.div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert('Форма отправлена!');
          // Здесь потом можно добавить отправку на сервер 
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <GlowingCard className="mb-8">
              <h3 className="text-2xl font-bold mb-4 text-green-400">Требования к заявке</h3>
              <ul className="space-y-3 text-gray-300">
                {[
                  'Заполненная анкета',
                  'Официальные выписки с оценками',
                  'Мотивационное эссе (500–1000 слов)',
                  'Два рекомендательных письма',
                  'Резюме/CV',
                  'Результаты теста на английский (если нужно)',
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-green-400 mr-2 mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </GlowingCard>

            <GlowingCard>
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Важные даты</h3>
              <div className="space-y-4 text-gray-300">
                {[
                  { title: 'Ранняя подача', date: '1 ноября' },
                  { title: 'Стандартная подача', date: '15 января' },
                  { title: 'Весенний набор', date: '1 октября' },
                  { title: 'Иностранные студенты', date: '1 декабря' },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between border-b border-gray-700 pb-2">
                    <span>{item.title}</span>
                    <span className="text-blue-400 font-semibold">{item.date}</span>
                  </div>
                ))}
              </div>
            </GlowingCard>
          </div>

          <div>
            <GlowingCard>
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Связаться с приемной комиссией</h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Полное имя</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="Ваше полное имя"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Электронная почта</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="vash.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Интересующая программа</label>
                  <select className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-blue-500 focus:outline-none transition-colors">
                    <option>Бакалавр Computer Science</option>
                    <option>Магистр Computer Science</option>
                    <option>PhD Computer Science</option>
                    <option>Сертификатные программы</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Сообщение</label>
                  <textarea
                    rows="4"
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="Чем мы можем вам помочь?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-semibold hover:from-purple-500 hover:to-blue-500 transform hover:scale-105 transition-all duration-300"
                >
                  Отправить сообщение
                </button>
              </div>
            </GlowingCard>

            <div className="mt-8 text-center">
              <p className="text-gray-400 mb-4">Или свяжитесь с нами напрямую:</p>
              <div className="space-y-2 text-gray-300">
                <p className="flex items-center justify-center">
                  <span className="mr-2">📧</span>
                  admissions@satbayev.edu
                </p>
                <p className="flex items-center justify-center">
                  <span className="mr-2">📞</span>
                  +7 (708) 778-78-78
                </p>
                <p className="flex items-center justify-center">
                  <span className="mr-2">📍</span>
                  г. Алматы, ул. Каныша Сатпаева, 22
                </p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </section>
)
