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

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  /* =========================
     SUBMIT LOGIC
  ========================= */

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    setLoading(true);

    const subject = encodeURIComponent(
      `Portfolio Contact: ${form.name}`
    );

    const body = encodeURIComponent(
      `Name: ${form.name}
Email: ${form.email}

Message:
${form.message}`
    );

    setTimeout(() => {
      window.location.href =
        `mailto:myusuff98@gmail.com?subject=${subject}&body=${body}`;

      toast({
        title:
          t("contact.toastTitle") ||
          "Message Ready",
        description:
          t("contact.toastDesc") ||
          "Your mail app has opened successfully.",
      });

      setForm({
        name: "",
        email: "",
        message: "",
      });

      setLoading(false);
    }, 1200);
  };

  return (
    <section
      id="contact"
      className="relative py-24 overflow-hidden"
    >
      {/* =========================
          BACKGROUND
      ========================= */}

      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5" />

      {/* Glow Blob 1 */}
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-10 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
      />

      {/* Glow Blob 2 */}
      <motion.div
        animate={{
          x: [0, -60, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
      />

      {/* =========================
          FLOATING ICONS
      ========================= */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {[
          {
            icon: Mail,
            className:
              "top-20 left-10",
            color:
              "text-primary/40 border-primary/20",
            size: "w-16 h-16",
          },
          {
            icon: Phone,
            className:
              "top-40 right-20",
            color:
              "text-green-500/40 border-green-500/20",
            size: "w-20 h-20",
          },
          {
            icon: MessageCircle,
            className:
              "bottom-32 left-24",
            color:
              "text-purple-500/40 border-purple-500/20",
            size: "w-14 h-14",
          },
          {
            icon: Send,
            className:
              "bottom-10 right-10",
            color:
              "text-primary/40 border-primary/20",
            size: "w-24 h-24",
          },
          {
            icon: Figma,
            className:
              "top-1/4 left-1/3",
            color:
              "text-pink-500/40 border-pink-500/20",
            size: "w-16 h-16",
          },
          {
            icon: Code2,
            className:
              "top-16 right-1/3",
            color:
              "text-cyan-500/40 border-cyan-500/20",
            size: "w-14 h-14",
          },
          {
            icon: Palette,
            className:
              "bottom-20 left-1/4",
            color:
              "text-yellow-500/40 border-yellow-500/20",
            size: "w-20 h-20",
          },
          {
            icon: Globe,
            className:
              "top-1/2 right-10",
            color:
              "text-blue-500/40 border-blue-500/20",
            size: "w-16 h-16",
          },
          {
            icon: Smartphone,
            className:
              "bottom-32 right-1/4",
            color:
              "text-green-500/40 border-green-500/20",
            size: "w-14 h-14",
          },
          {
            icon: Monitor,
            className:
              "bottom-10 left-1/2",
            color:
              "text-orange-500/40 border-orange-500/20",
            size: "w-16 h-16",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            animate={{
              y: [0, -25, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 10 + index,
              repeat: Infinity,
              ease: "linear",
            }}
            className={`absolute ${item.className} ${item.size} border rounded-2xl backdrop-blur-sm bg-white/5 flex items-center justify-center ${item.color}`}
          >
            <item.icon className="w-6 h-6" />
          </motion.div>
        ))}
      </div>

      {/* =========================
          MAIN CONTAINER
      ========================= */}

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

        {/* =========================
            CONTACT CARD
        ========================= */}

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

          {/* =========================
              CONTACT LINKS
          ========================= */}

          <div className="flex flex-wrap gap-4 md:gap-6 mb-8 text-sm text-muted-foreground">

            <motion.a
              whileHover={{
                scale: 1.08,
                x: 5,
              }}
              href="mailto:myusuff98@gmail.com"
              className="flex items-center gap-2 hover:text-primary transition-all"
            >
              <Mail
                size={18}
                className="text-primary"
              />
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
              <Phone
                size={18}
                className="text-primary"
              />
              +91 8939736143
            </motion.a>

            <motion.a
              whileHover={{
                scale: 1.08,
                x: 5,
              }}
              href="https://wa.me/918939736143?text=Hi%20Mohammed%20Yusuff"
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
              <MapPin
                size={18}
                className="text-primary"
              />
              {t("contact.location")}
            </motion.div>
          </div>

          {/* =========================
              FORM
          ========================= */}

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            {/* Name */}
            <motion.input
              whileFocus={{
                scale: 1.02,
              }}
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

            {/* Email */}
            <motion.input
              whileFocus={{
                scale: 1.02,
              }}
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

            {/* Message */}
            <motion.textarea
              whileFocus={{
                scale: 1.02,
              }}
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

            {/* Submit Button */}
            <motion.button
              whileHover={{
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.95,
              }}
              disabled={loading}
              type="submit"
              className="relative overflow-hidden w-full py-4 rounded-xl bg-primary text-primary-foreground font-semibold flex items-center justify-center gap-3"
            >
              {/* Animated Shine */}
              <motion.div
                animate={{
                  x: ["-100%", "200%"],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "linear",
                }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              />

              {/* Icon */}
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

              {loading
                ? "Opening Mail..."
                : t("contact.send")}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;