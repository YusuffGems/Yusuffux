import { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Mail,
  MapPin,
  Phone,
  MessageCircle,
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
      className="py-24 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 blur-3xl rounded-full"></div>

      <div className="container max-w-2xl relative z-10">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.h2
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 120,
            }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            {t("contact.title1")}{" "}
            <span className="text-primary">
              {t("contact.title2")}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-muted-foreground text-lg"
          >
            {t("contact.subtitle")}
          </motion.p>
        </motion.div>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            type: "spring",
          }}
          viewport={{ once: true }}
          whileHover={{
            scale: 1.01,
          }}
          className="glass rounded-2xl p-8 border border-border/50 backdrop-blur-xl shadow-2xl"
        >
          {/* Contact Info */}
          <div className="flex flex-wrap gap-4 md:gap-6 mb-8 text-sm text-muted-foreground">
            
            <motion.a
              whileHover={{ scale: 1.05, x: 5 }}
              href="mailto:myusuff98@gmail.com"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Mail
                size={18}
                className="text-primary"
              />
              myusuff98@gmail.com
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05, x: 5 }}
              href="tel:+918939736143"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Phone
                size={18}
                className="text-primary"
              />
              +91 8939736143
            </motion.a>

            <motion.a
              whileHover={{
                scale: 1.05,
                x: 5,
              }}
              href="https://wa.me/918939736143?text=Hi%20Mohammed%20Yusuff%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-green-500 transition-colors"
            >
              <MessageCircle
                size={18}
                className="text-green-500"
              />
              WhatsApp
            </motion.a>

            <motion.span
              whileHover={{
                scale: 1.05,
                x: 5,
              }}
              className="flex items-center gap-2"
            >
              <MapPin
                size={18}
                className="text-primary"
              />
              {t("contact.location")}
            </motion.span>
          </div>

          {/* Form */}
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
              className="w-full px-4 py-4 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
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
              className="w-full px-4 py-4 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
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
              className="w-full px-4 py-4 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none transition-all"
            />

            {/* Submit Button */}
            <motion.button
              whileHover={{
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.96,
              }}
              type="submit"
              className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-heading font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-primary/30 transition-all"
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