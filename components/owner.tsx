  /* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import { restaurantInfo } from "@/lib/data";

export function Owner() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-6">صاحب المطعم</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              {restaurantInfo.owner.quote}
            </p>
            <div className="flex items-center">
              <div>
                <h3 className="font-bold text-xl">
                  {restaurantInfo.owner.name}
                </h3>
                <p className="text-gray-600">{restaurantInfo.owner.position}</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative h-[500px]"
          >
            <img
              src={restaurantInfo.owner.image}
              alt={restaurantInfo.owner.name}
              className="absolute inset-0 w-full h-full object-contain rounded-lg shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
