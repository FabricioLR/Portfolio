import { motion } from "framer-motion";
import { FaGraduationCap, FaMapMarkerAlt, FaEnvelope, FaDownload } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <section id="about" className="py-24 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center font-display text-3xl md:text-4xl text-section-title mb-12"
        >
          {t("about.title")}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="bg-card border border-skill-border rounded-lg p-8 md:p-10"
        >
          <p className="text-foreground leading-relaxed text-base md:text-lg mb-6">
            {t("about.bio")}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 text-muted-foreground">
              <FaMapMarkerAlt className="text-primary flex-shrink-0" />
              <span className="text-sm">{t("about.location")}</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <FaGraduationCap className="text-primary flex-shrink-0" />
              <span className="text-sm">{t("about.education")}</span>
            </div>
            <a
              href="mailto:fabriciolongodearaujo@gmail.com"
              className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
            >
              <FaEnvelope className="text-primary flex-shrink-0" />
              <span className="text-sm">fabriciolongodearaujo@gmail.com</span>
            </a>
          </div>

          <div className="mt-6">
            <a
              href="https://drive.google.com/file/d/1kLwT7j7ocBm7wZPRWk1Yq5zGoiScKqPH/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-primary/50 text-primary font-medium px-4 py-2 rounded-md hover:bg-primary/10 transition-all text-sm"
              onClick={(e) => {
                const url = "https://drive.google.com/file/d/1kLwT7j7ocBm7wZPRWk1Yq5zGoiScKqPH/view?usp=sharing";
                fetch(url, { method: "HEAD", mode: "no-cors" }).catch(() => {
                  e.preventDefault();
                  const link = document.createElement("a");
                  link.href = "/fabriciolongodearaujo.pdf";
                  link.download = "fabriciolongodearaujo.pdf";
                  link.click();
                });
              }}
            >
              <FaDownload className="text-xs" />
              {t("about.resume")}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

