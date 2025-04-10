'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
const photos = [
  {
    id: 1,
    src: 'https://upload.wikimedia.org/wikipedia/ru/thumb/1/17/Brest-krepost.jpg/500px-Brest-krepost.jpg', 
    alt: 'Защитники Брестской крепости',
    caption: 'Героические защитники Брестской крепости, 1941 г.',
  },
  {
    id: 2,
    src: 'https://upload.wikimedia.org/wikipedia/commons/a/ad/RIAN_archive_887721_Defense_of_Moscow.jpg', 
    alt: 'Битва за Москву',
    caption: 'Советские солдаты во время Битвы за Москву, декабрь 1941 г.',
  },
  {
    id: 3,
    src: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/%D0%A4%D0%BE%D0%BD%D1%82%D0%B0%D0%BD_%C2%AB%D0%94%D0%B5%D1%82%D1%81%D0%BA%D0%B8%D0%B9_%D1%85%D0%BE%D1%80%D0%BE%D0%B2%D0%BE%D0%B4%C2%BB.jpg', 
    alt: 'Сталинградская битва',
    caption: 'Бойцы Красной Армии во время Сталинградской битвы, 1942 г.',
  },
  {
    id: 4,
    src: 'https://cdn.er.ru/media/news/August2024/xp4VC8UIeXZwy3iXuxC8.jpg', 
    alt: 'Курская битва',
    caption: 'Танковое сражение на Курской дуге, июль 1943 г.',
  },
  {
    id: 5,
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/RIAN_archive_907_Leningradians_queueing_up_for_water.jpg/330px-RIAN_archive_907_Leningradians_queueing_up_for_water.jpg', 
    alt: 'Блокада Ленинграда',
    caption: 'Жители блокадного Ленинграда на Невском проспекте, 1942 г.',
  },
  {
    id: 6,
    src: 'https://upload.wikimedia.org/wikipedia/commons/7/76/Raising_a_flag_over_the_Reichstag.jpg', 
    alt: 'Знамя Победы над Рейхстагом',
    caption: 'Знамя Победы над Рейхстагом, 1 мая 1945 г.',
  },
];
export default function HistoryGallery() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const handleImageClick = (index: number) => {
    setSelectedImage(index);
    setModalOpen(true);
  };
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {photos.map((photo, index) => (
          <motion.div
            key={photo.id}
            className="bg-card overflow-hidden rounded-lg shadow-md cursor-pointer group"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
            onClick={() => handleImageClick(index)}
          >
            <div className="relative h-64 w-full overflow-hidden">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                style={{ objectFit: 'cover' }}
                className="transition-transform duration-500 group-hover:scale-105 grayscale hover:grayscale-0"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="p-4">
              <p className="text-gray-300 text-sm">{photo.caption}</p>
            </div>
          </motion.div>
        ))}
      </div>
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={() => setModalOpen(false)}>
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute -top-12 right-0 text-white text-3xl z-10"
              onClick={() => setModalOpen(false)}
            >
              &times;
            </button>
            <Carousel
              selectedItem={selectedImage}
              showArrows={true}
              showStatus={false}
              showThumbs={false}
              infiniteLoop={true}
              dynamicHeight={false}
              useKeyboardArrows={true}
              swipeable={true}
              emulateTouch={true}
            >
              {photos.map((photo) => (
                <div key={photo.id} className="relative h-[70vh]">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    style={{ objectFit: 'contain' }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4">
                    <p>{photo.caption}</p>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      )}
    </>
  );
} 