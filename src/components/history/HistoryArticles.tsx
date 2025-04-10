'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaBookOpen, FaUsers, FaFighterJet, FaCalendarAlt, FaFlag, FaGlobe } from 'react-icons/fa';

const articles = [
  {
    id: 'battles',
    title: 'Ключевые сражения',
    description: 'Подробный разбор важнейших сражений Великой Отечественной войны: Московская битва, Сталинградская битва, Курская дуга и другие.',
    icon: <FaFighterJet className="w-8 h-8 text-primary" />,
    link: '/history/battles',
  },
  {
    id: 'heroes',
    title: 'Герои войны',
    description: 'Истории о подвигах героев фронта и тыла, чьи имена навсегда вписаны в историю Великой Отечественной войны.',
    icon: <FaUsers className="w-8 h-8 text-primary" />,
    link: '/history/heroes',
  },
  {
    id: 'chronicles',
    title: 'Хроника событий',
    description: 'Подробная хронология Великой Отечественной войны с основными датами и событиями.',
    icon: <FaCalendarAlt className="w-8 h-8 text-primary" />,
    link: '/history/chronicles',
  },
  {
    id: 'documents',
    title: 'Исторические документы',
    description: 'Оригинальные документы времен Великой Отечественной войны: приказы, сводки Совинформбюро, письма с фронта.',
    icon: <FaBookOpen className="w-8 h-8 text-primary" />,
    link: '/history/documents',
  },
  {
    id: 'homefront',
    title: 'Труженики тыла',
    description: 'О вкладе гражданского населения в Победу: работа заводов, колхозов, эвакуация производств, жизнь в тылу.',
    icon: <FaFlag className="w-8 h-8 text-primary" />,
    link: '/history/homefront',
  },
  {
    id: 'allies',
    title: 'Союзники в войне',
    description: 'Роль союзников во Второй мировой войне, ленд-лиз, открытие Второго фронта, международные конференции.',
    icon: <FaGlobe className="w-8 h-8 text-primary" />,
    link: '/history/allies',
  },
];

export default function HistoryArticles() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {articles.map((article, index) => (
        <motion.div
          key={article.id}
          className="bg-card border border-border rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="flex items-start mb-4">
            <div className="p-3 rounded-full bg-card border border-primary/20 mr-4">
              {article.icon}
            </div>
            <h3 className="text-xl font-bold">{article.title}</h3>
          </div>
          <p className="text-gray-400 mb-6">{article.description}</p>
          <Link 
            href={article.link} 
            className="inline-flex items-center text-primary hover:text-accent"
          >
            Читать статью
            <svg 
              className="ml-2 w-4 h-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </motion.div>
      ))}
    </div>
  );
} 