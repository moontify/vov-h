'use client';import React, { useState, useEffect } from 'react';import { motion } from 'framer-motion';import { FaSearch, FaFilter, FaMapMarkerAlt, FaMedal, FaRegCalendarAlt } from 'react-icons/fa';import { useAppContext } from '@/contexts/AppContext';import { HeroFilter } from '@/types';const HeroesSearch: React.FC = () => {  const { heroFilters, updateHeroFilters, resetHeroFilters } = useAppContext();  const [localFilters, setLocalFilters] = useState<HeroFilter>(heroFilters);  useEffect(() => {    setLocalFilters(heroFilters);  }, [heroFilters]);  const regions = [    'Москва',    'Санкт-Петербург (Ленинград)',    'Волгоград (Сталинград)',    'Курская область',    'Белгородская область',    'Новгородская область',    'Смоленская область',    'Тверская область',    'Ростовская область',    'Московская область',    'Ленинградская область',    'Крым',    'Севастополь',    'Новосибирская область',    'Брянская область',    'Калининградская область',    'Другие регионы',  ];  const ranks = [    'Рядовой',    'Ефрейтор',    'Младший сержант',    'Сержант',    'Старший сержант',    'Старшина',    'Прапорщик',    'Младший лейтенант',    'Лейтенант',    'Старший лейтенант',    'Капитан',    'Майор',    'Подполковник',    'Полковник',    'Генерал-майор',    'Генерал-лейтенант',    'Генерал-полковник',    'Генерал армии',    'Маршал рода войск',    'Маршал Советского Союза',  ];  const awards = [    'Герой Советского Союза',    'Орден Ленина',    'Орден Красного Знамени',    'Орден Суворова',    'Орден Кутузова',    'Орден Александра Невского',    'Орден Богдана Хмельницкого',    'Орден Отечественной войны',    'Орден Красной Звезды',    'Орден Славы',    'Медаль «За отвагу»',    'Медаль «За боевые заслуги»',    'Медаль «За оборону Ленинграда»',    'Медаль «За оборону Москвы»',    'Медаль «За оборону Сталинграда»',    'Медаль «За победу над Германией»',  ];  const handleFilterChange = (key: keyof HeroFilter, value: string) => {    const newFilters = { ...localFilters, [key]: value };    setLocalFilters(newFilters);  };  const handleReset = () => {    resetHeroFilters();  };  const handleApplyFilters = () => {    updateHeroFilters(localFilters);  };  const formVariants = {    hidden: { opacity: 0, y: -20 },    visible: {       opacity: 1,       y: 0,      transition: { duration: 0.5 }    }  };  return (    <motion.div       className="bg-gray-800 rounded-lg p-6 shadow-lg mb-8"      variants={formVariants}      initial="hidden"      animate="visible"    >      <h2 className="text-2xl font-bold text-white mb-6 flex items-center">        <FaSearch className="mr-2 text-amber-500" /> Поиск героев ВОВ      </h2>      <div className="mb-6">        <div className="relative">          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />          <input            type="text"            placeholder="Введите имя героя или ключевые слова"            className="w-full bg-gray-700 text-white px-10 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"            value={localFilters.searchQuery}            onChange={(e) => handleFilterChange('searchQuery', e.target.value)}          />        </div>      </div>      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">        {}        <div>          <label className="block text-gray-300 mb-2 flex items-center text-sm">            <FaMapMarkerAlt className="mr-2 text-amber-500" />            Регион          </label>          <select            className="w-full bg-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"            value={localFilters.region}            onChange={(e) => handleFilterChange('region', e.target.value)}          >            <option value="">Все регионы</option>            {regions.map(region => (              <option key={region} value={region}>{region}</option>            ))}          </select>        </div>        {}        <div>          <label className="block text-gray-300 mb-2 flex items-center text-sm">            <FaMedal className="mr-2 text-amber-500" />            Награда          </label>          <select            className="w-full bg-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"            value={localFilters.award}            onChange={(e) => handleFilterChange('award', e.target.value)}          >            <option value="">Все награды</option>            {awards.map(award => (              <option key={award} value={award}>{award}</option>            ))}          </select>        </div>        {}        <div>          <label className="block text-gray-300 mb-2 flex items-center text-sm">            <FaFilter className="mr-2 text-amber-500" />            Воинское звание          </label>          <select            className="w-full bg-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"            value={localFilters.rank}            onChange={(e) => handleFilterChange('rank', e.target.value)}          >            <option value="">Все звания</option>            {ranks.map(rank => (              <option key={rank} value={rank}>{rank}</option>            ))}          </select>        </div>      </div>      {}      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">        <div>          <label className="block text-gray-300 mb-2 flex items-center text-sm">            <FaRegCalendarAlt className="mr-2 text-amber-500" />            Год рождения от          </label>          <input            type="number"            min="1870"            max="1945"            placeholder="1870"            className="w-full bg-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"            value={localFilters.yearFrom}            onChange={(e) => handleFilterChange('yearFrom', e.target.value)}          />        </div>        <div>          <label className="block text-gray-300 mb-2 flex items-center text-sm">            <FaRegCalendarAlt className="mr-2 text-amber-500" />            Год рождения до          </label>          <input            type="number"            min="1870"            max="1945"            placeholder="1945"            className="w-full bg-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"            value={localFilters.yearTo}            onChange={(e) => handleFilterChange('yearTo', e.target.value)}          />        </div>      </div>      {}      <div className="flex flex-wrap gap-4">        <button          className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-6 rounded-md transition-colors duration-300 flex items-center"          onClick={handleApplyFilters}        >          <FaSearch className="mr-2" />          Найти героев        </button>        <button          className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-6 rounded-md transition-colors duration-300"          onClick={handleReset}        >          Сбросить фильтры        </button>        <p className="text-gray-400 ml-auto self-center">          Всего доступно для поиска: <span className="text-amber-500 font-bold">5000+</span> героев        </p>      </div>    </motion.div>  );};export default HeroesSearch; 