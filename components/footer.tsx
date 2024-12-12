"use client";

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { restaurantInfo } from '@/lib/data';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center sm:text-right"
          >
            <h3 className="text-lg sm:text-xl font-bold mb-4">
              مطعم حوش ادريس
            </h3>
            <p className="text-gray-400 text-sm sm:text-base">
              {restaurantInfo.description}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center sm:text-right"
          >
            <h3 className="text-lg sm:text-xl font-bold mb-4">تواصل معنا</h3>
            <ul className="space-y-2">
              <li className="flex items-center justify-center sm:justify-start">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                <span className="text-sm sm:text-base">
                  {restaurantInfo.contact.phone}
                </span>
              </li>
              <li className="flex items-center justify-center sm:justify-start">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                <span className="text-sm sm:text-base">
                  {restaurantInfo.contact.email}
                </span>
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            className="text-center sm:text-right"
          >
            <h3 className="text-lg sm:text-xl font-bold mb-4">العنوان</h3>
            <div className="flex items-center justify-center sm:justify-start">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
              <span className="text-sm sm:text-base">
                {restaurantInfo.location.address}
              </span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            className="text-center sm:text-right"
          >
            <h3 className="text-lg sm:text-xl font-bold mb-4">ساعات العمل</h3>
            <ul className="space-y-2">
              <li className="flex items-center justify-center sm:justify-start">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                <div className="text-sm sm:text-base">
                  <p>أيام الأسبوع: {restaurantInfo.hours.weekdays}</p>
                  <p>نهاية الأسبوع: {restaurantInfo.hours.weekends}</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
        <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center">
          <p className="text-gray-400 text-sm sm:text-base">
            © {new Date().getFullYear()} مطعم حوش ادريس. جميع الحقوق محفوظة
          </p>
        </div>
      </div>
    </footer>
  );
}