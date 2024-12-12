/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from 'framer-motion';
import { restaurantInfo } from '@/lib/data';

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          // initial={{ opacity: 0, y: 20 }}
          // whileInView={{ opacity: 1, y: 0 }}
          // viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 100 }}
            transition={{ duration: 1.5 }}
            className="relative h-[400px] rounded-[30px] "
          >
            <img
              src="https://images.unsplash.com/photo-1620065263328-9a796ae13db6?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="طبق سوداني تقليدي"
              className="absolute  inset-0 w-full h-full object-cover rounded-[30px] shadow-xl "
            />
          </motion.div>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">من نحن </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              {restaurantInfo.about}
            </p>
            <div className="grid grid-cols-2 gap-6 sm-grid-cols-1 ">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="font-bold mb-2">ساعات العمل</h3>
                <p className="text-gray-600">
                  أيام الأسبوع: {restaurantInfo.hours.weekdays}
                </p>
                <p className="text-gray-600">
                  نهاية الأسبوع: {restaurantInfo.hours.weekends}
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="font-bold mb-2">تواصل معنا</h3>
                <p className="text-gray-600">{restaurantInfo.contact.phone}</p>
                <p className="text-gray-600">{restaurantInfo.contact.email}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}