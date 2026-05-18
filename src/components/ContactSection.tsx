import { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Mail,
  MapPin,
  Phone,
  MessageCircle,
  Figma,
  Monitor,
  Palette,
  Code2,
  Smartphone,
  Globe,
} from "lucide-react";

import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

const ContactSection = () => {
  const { toast } = useToast();
  const { t } = useLanguage();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio Contact: ${form.name}`
    );

    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );

    window.open(
      `mailto:myusuff98@gmail.com?subject=${subject}&body=${body}`,
      "_blank"
    );

    toast({
      title: t("contact.toastTitle"),
      description: t("contact.toastDesc"),
    });

    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      className="relative py-24 overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5" />

      {/* Floating Animated Skill Boxes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {/* Mail */}
        <motion.div
          animate={{
            y: [0, -40, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-20 left-10 w-16 h-16 border border-primary/20 rounded-xl backdrop-blur-sm bg-white/5"
        >
          <Mail className="w-6 h-6 text-primary/40 m-auto mt-5" />
        </motion.div>

        {/* Phone */}
        <motion.div
          animate={{
            y: [0, 50, 0],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-40 right-20 w-20 h-20 border border-green-500/20 rounded-2xl backdrop-blur-sm bg-white/5"
        >
          <Phone className="w-7 h-7 text-green-500/40 m-auto mt-6" />
        </motion.div>

        {/* WhatsApp */}
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            rotate: [0, 90, 180],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-32 left-24 w-14 h-14 border border-purple-500/20 rounded-lg backdrop-blur-sm bg-white/5"
        >
          <MessageCircle className="w-5 h-5 text-purple-500/40 m-auto mt-4" />
        </motion.div>

        {/* Send */}
        <motion.div
          animate={{
            y: [0, -35, 0],
            rotate: [0, 180, 0],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-10 right-10 w-24 h-24 border border-primary/20 rounded-3xl backdrop-blur-sm bg-white/5"
        >
          <Send className="w-8 h-8 text-primary/40 m-auto mt-8" />
        </motion.div>

        {/* Figma */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/3 w-16 h-16 border border-pink-500/20 rounded-2xl backdrop-blur-sm bg-white/5"
        >
          <Figma className="w-6 h-6 text-pink-500/40 m-auto mt-5" />
        </motion.div>

        {/* Code */}
        <motion.div
          animate={{
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-16 right-1/3 w-14 h-14 border border-cyan-500/20 rounded-xl backdrop-blur-sm bg-white/5"
        >
          <Code2 className="w-5 h-5 text-cyan-500/40 m-auto mt-4" />
        </motion.div>

        {/* Palette */}
        <motion.div
          animate={{
            rotate: [0, -180, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-20 left-1/4 w-20 h-20 border border-yellow-500/20 rounded-3xl backdrop-blur-sm bg-white/5"
        >
          <Palette className="w-7 h-7 text-yellow-500/40 m-auto mt-6" />
        </motion.div>

        {/* Globe */}
        <motion.div
          animate={{
            y: [0, -25, 0],
            x: [0, 15, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 right-10 w-16 h-16 border border-blue-500/20 rounded-2xl backdrop-blur-sm bg-white/5"
        >
          <Globe className="w-6 h-6 text-blue-500/40 m-auto mt-5" />
        </motion.div>

        {/* Smartphone */}
        <motion.div
          animate={{
            rotate: [0, 15, -15, 0],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-32 right-1/4 w-14 h-14 border border-green-500/20 rounded-xl backdrop-blur-sm bg-white/5"
        >
          <Smartphone className="w-5 h-5 text-green-500/40 m-auto mt-4" />
        </motion.div>

        {/* Monitor */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-10 left-1/2 w-16 h-16 border border-orange-500/20 rounded-2xl backdrop-blur-sm bg-white/5"
        >
          <Monitor className="w-6 h-6 text-orange-500/40 m-auto mt-5" />
        </motion.div>

      </div>

      {/* Main Container */}
      <div className="container max-w-2xl relative z-10">

        {/* Heading */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.h2
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            {t("contact.title1")}{" "}
            <span className="text-primary">
              {t("contact.title2")}
            </span>
          </motion.h2>

          <p className="text-muted-foreground text-lg">
            {t("contact.subtitle")}
          </p>
        </motion.div>

        {/* Contact Card */}
        <motion.div
          initial={{
            opacity: 0,
            y: 60,
            scale: 0.9,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
            type: "spring",
          }}
          viewport={{ once: true }}
          whileHover={{
            y: -5,
          }}
          className="relative glass rounded-3xl p-8 md:p-10 border border-white/10 backdrop-blur-xl shadow-2xl overflow-hidden"
        >

          {/* Shine Effect */}
          <motion.div
            animate={{
              x: ["-100%", "200%"],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "linear",
            }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
          />

          {/* Contact Links */}
          <div className="flex flex-wrap gap-4 md:gap-6 mb-8 text-sm text-muted-foreground">

            <motion.a
              whileHover={{
                scale: 1.08,
                x: 5,
              }}
              href="mailto:myusuff98@gmail.com"
              className="flex items-center gap-2 hover:text-primary transition-all"
            >
              <Mail size={18} className="text-primary" />
              myusuff98@gmail.com
            </motion.a>

            <motion.a
              whileHover={{
                scale: 1.08,
                x: 5,
              }}
              href="tel:+918939736143"
              className="flex items-center gap-2 hover:text-primary transition-all"
            >
              <Phone size={18} className="text-primary" />
              +91 8939736143
            </motion.a>

            <motion.a
              whileHover={{
                scale: 1.08,
                x: 5,
              }}
              href="https://wa.me/918939736143"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-green-500 transition-all"
            >
              <MessageCircle
                size={18}
                className="text-green-500"
              />
              WhatsApp
            </motion.a>

            <motion.div
              whileHover={{
                scale: 1.08,
                x: 5,
              }}
              className="flex items-center gap-2"
            >
              <MapPin size={18} className="text-primary" />
              {t("contact.location")}
            </motion.div>

          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <input
              type="text"
              placeholder={t("contact.name")}
              required
              value={form.name}
              onChange={(e) =>
                setForm({
                  ...form,
                  name: e.target.value,
                })
              }
              className="w-full px-4 py-4 rounded-xl bg-secondary/70 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />

            <input
              type="email"
              placeholder={t("contact.email")}
              required
              value={form.email}
              onChange={(e) =>
                setForm({
                  ...form,
                  email: e.target.value,
                })
              }
              className="w-full px-4 py-4 rounded-xl bg-secondary/70 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />

            <textarea
              placeholder={t("contact.message")}
              required
              rows={5}
              value={form.message}
              onChange={(e) =>
                setForm({
                  ...form,
                  message: e.target.value,
                })
              }
              className="w-full px-4 py-4 rounded-xl bg-secondary/70 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none transition-all"
            />

            <motion.button
              whileHover={{
                scale: 1.03,
                boxShadow:
                  "0px 0px 25px rgba(255,255,255,0.2)",
              }}
              whileTap={{
                scale: 0.95,
              }}
              type="submit"
              className="relative overflow-hidden w-full py-4 rounded-xl bg-primary text-primary-foreground font-semibold flex items-center justify-center gap-3"
            >
              <motion.div
                animate={{
                  x: [0, 5, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                }}
              >
                <Send size={18} />
              </motion.div>

              {t("contact.send")}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;