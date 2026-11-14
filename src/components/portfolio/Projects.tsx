import { motion } from "framer-motion";
import project1Img from "@/assets/project1.png";
import project3Img from "@/assets/project3.png";
import project4Img from "@/assets/project4.png";
import project5Img from "@/assets/project5.png";
import project6Img from "@/assets/project6.jpg";
import project7Img from "@/assets/project7.jpg";
import project8Img from "@/assets/project8.jpg";
import project9Img from "@/assets/project9.jpg";
import project10Img from "@/assets/project10.jpg";
import project11Img from "@/assets/project11.jpg";
import project12Img from "@/assets/project12.jpg";
import { useTranslation } from "react-i18next";
import { portfolioProjects } from "@/data/projects";

const projectImages: Record<string, string> = {
  webStorage: project5Img, news: project4Img, estetica: project1Img,
  portfolio: project3Img, grafana: project6Img, blog: project7Img,
  docker: project8Img, observability: project9Img, chatbot: project10Img,
  quotes: project11Img, financial: project12Img,
};

const Projects = () => {
  const { t } = useTranslation();
  return (
    <section id="projects" className="py-24 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-16"
        >
          {t("projects.title")}
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {portfolioProjects.map(({ key, link, tags }, i) => {
            const title = t(`projects.items.${key}.title`);
            const description = t(`projects.items.${key}.description`);
            return (
              <motion.a
                key={key}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group cursor-pointer block"
              >
                <div className="overflow-hidden rounded-lg mb-4 border border-border">
                  <img
                    src={projectImages[key]}
                    alt={title}
                    loading="lazy"
                    decoding="async"
                    width={1200}
                    height={630}
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-wrap gap-2 mb-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full bg-primary/15 text-primary font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {title}
                </h3>
                <p className="text-sm text-project-muted mt-1 leading-relaxed">{description}</p>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
