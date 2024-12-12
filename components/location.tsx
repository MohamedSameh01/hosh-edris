"use client";

import { motion } from "framer-motion";
import { restaurantInfo } from "@/lib/data";

export function Location() {
  return (
    <section id="location" className="pt-20 bg-gray-50">
      <div className="">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-6">موقعنا</h2>
          <p className="text-lg text-gray-600">
            {restaurantInfo.location.address}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="h-[400px] rounded-lg overflow-hidden shadow-xl"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3817.6546392304144!2d42.56156082485387!3d16.89297041686009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1607e365cce18a3b%3A0x6a131737005abca1!2z2LPZitix2YrZhyDYrdmI2LQg2KXYr9ix2YrYsyAoINmE2YTZhdij2YPZiNmE2KfYqiDYp9mE2LTYudio2YrYqSAp!5e0!3m2!1sar!2ssa!4v1733840928385!5m2!1sar!2ssa"
            width="100%"
            height="450"
            style={{ border: "0" }}
            // allowFullScreen={{}}
            loading="lazy"
            // referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
