/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

// import hero1 from "@/public/hero1.avif"
// import hero2 from "@/public/hero2.jpg"
// import hero3 from "@/public/hero3.jpg"

const slides = [
  {
    image:"/images/hero1.avif",
    alt: "كباب سوداني",
  },
  {
    image:"/images/hero2.jpg",
    alt: "مشويات سودانية",
  },
  {
    image:"/images/hero3.jpg",
    alt: "أطباق شرقية",
  },
];

export function Hero() {
  return (
    <section id="hero" className="relative h-[calc(100vh)]">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 5000 }}
        loop
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full">
              <div className="absolute inset-0 bg-black/50 z-10" />
              <img
                src={slide.image}
                alt={slide.alt}
                className="h-full w-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 z-20 flex items-center justify-center text-center text-white px-4"
      >
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6">مطعم سيريه حوش ادريس</h1>
          <p className="text-lg sm:text-xl md:text-2xl">
            نقدم لكم أشهى وألذ المأكولات السودانية الأصيلة في المملكة العربية السعودية
          </p>
        </div>
      </motion.div>
    </section>
  );
}