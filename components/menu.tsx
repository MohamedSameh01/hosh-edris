/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { menuCategories, menuItems } from '@/lib/data';

export function Menu() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].id);

  return (
    <section id="menu" className="py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <motion.h2
            initial={{ y: -100, opacity: 0 }}
            whileInView={{y:0,opacity:1}}
            transition={{duration:.5}}
            className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6"
          >
            قائمة الطعام
          </motion.h2>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12">
            {menuCategories.map((category) => (
              <motion.button
              initial={{y:100,opacity:0}}
              whileInView={{y:0,opacity:1}}
              transition={{duration:1}}

                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 sm:px-6 py-2 rounded-full text-base sm:text-lg transition-colors ${
                  activeCategory === category.id
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {menuItems
            .filter((item) => item.category === activeCategory)
            .map((item) => (
              <motion.div
                key={item.id}
               initial={{y:100,opacity:0}}
               whileInView={{y:0,opacity:1}}
               transition={{duration:1.5}}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="relative h-48 sm:h-56">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="absolute inset-0 w-full h-full object-contain"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold mb-2">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base mb-4">
                    {item.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-xl sm:text-2xl font-bold text-primary">
                      {item.price} ريال
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}