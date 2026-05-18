import React from "react";
import { MessageCircle, Phone } from "lucide-react";
import { motion } from "framer-motion";

const FloatingWhatsApp = () => {
  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50 flex flex-col gap-4"
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/918939736143?text=Hi%20Mohammed%20Yusuff%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project."
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        transition={{
          delay: 0.5,
          type: "spring",
          stiffness: 260,
          damping: 15,
        }}
        whileHover={{
          scale: 1.15,
          rotate: 8,
        }}
        whileTap={{
          scale: 0.9,
        }}
        className="relative w-16 h-16 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl shadow-[#25D366]/40"
        aria-label="Chat on WhatsApp"
      >
        {/* Ping Animation */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30"></span>

        {/* Rotating Border */}
        <motion.span
          className="absolute inset-0 rounded-full border-4 border-white/40"
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 6,
            ease: "linear",
          }}
        />

        {/* Icon */}
        <MessageCircle size={30} className="relative z-10" />
      </motion.a>

      {/* Call Button */}
      <motion.a
        href="tel:+918939736143"
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        transition={{
          delay: 0.8,
          type: "spring",
          stiffness: 260,
          damping: 15,
        }}
        whileHover={{
          scale: 1.15,
          rotate: -8,
        }}
        whileTap={{
          scale: 0.9,
        }}
        className="relative w-16 h-16 rounded-full bg-[#073B4C] text-white flex items-center justify-center shadow-2xl shadow-[#073B4C]/40"
        aria-label="Call Now"
      >
        {/* Ping Animation */}
        <span className="absolute inset-0 rounded-full bg-[#073B4C] animate-ping opacity-30"></span>

        {/* Rotating Border */}
        <motion.span
          className="absolute inset-0 rounded-full border-4 border-white/40"
          animate={{ rotate: -360 }}
          transition={{
            repeat: Infinity,
            duration: 6,
            ease: "linear",
          }}
        />

        {/* Icon */}
        <Phone size={28} className="relative z-10" />
      </motion.a>
    </motion.div>
  );
};

export default FloatingWhatsApp;