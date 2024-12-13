"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'الرئيسية', href: '#hero' },
  { name: 'من نحن', href: '#about' },
  { name: 'القائمة', href: '#menu' },
  { name: 'آراء العملاء', href: '#testimonials' },
  { name: 'موقعنا', href: '#location' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 w-full bg-white shadow-md z-50">
      <div className="w-[100%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <a href="#hero">
            <div className="flex-shrink-0 flex justify-center items-center cursor-pointer">
              <Image
                src="/logo.jpg"
                alt="شعار المطعم"
                width={70}
                height={70}
                className="h-[50px] w-[50px] rounded-[50%] cursor-pointer"
              />
              <h1 className="text-primary text-xl sm:text-3xl ms-4">حوش ادريس</h1>
            </div>
          </a>

          <div className="hidden md:block">
            <div className="flex space-x-4 space-x-reverse">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-800 hover:text-primary px-3 py-2 rounded-md text-lg font-medium"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-primary"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="md:hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-800 hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}