import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const expKeys = ["transoftDev", "transoft", "ferraz"] as const;

const Experience = () => {
  const { t } = useTranslation();
  return (
    <section id="experience" className="py-20 px-6 bg-secondary">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center font-display text-3xl md:text-4xl text-section-title mb-16"
        >
          {t("experience.title")}
        </motion.h2>

        <div className="relative">
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-primary/30" />

          <div className="space-y-10">
            {expKeys.map((key, i) => {
              const tasks = t(`experience.items.${key}.tasks`, { returnObjects: true }) as string[];
              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="relative pl-12 md:pl-16"
                >
                  <div className="absolute left-2.5 md:left-4.5 top-1 w-3 h-3 rounded-full bg-primary border-2 border-background" />

                  <div className="bg-card border border-skill-border rounded-lg p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <FaBriefcase className="text-primary text-sm" />
                        <h3 className="font-display text-lg font-semibold text-foreground">
                          {t(`experience.items.${key}.role`)}
                        </h3>
                      </div>
                      <span className="text-xs text-primary font-medium mt-1 sm:mt-0">
                        {t(`experience.items.${key}.period`)}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground font-medium mb-3">
                      {t(`experience.items.${key}.company`)}
                    </p>
                    <ul className="space-y-1.5">
                      {tasks.map((task, j) => (
                        <li key={j} className="text-sm text-muted-foreground flex gap-2">
                          <span className="text-primary mt-1">•</span>
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
