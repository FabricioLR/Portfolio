import { FaReact } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa6";
import { TbBrandTypescript } from "react-icons/tb";
import { FaJava, FaAws, FaLinux, FaDocker, FaJenkins } from "react-icons/fa";
import { SiMysql, SiRedux, SiPostgresql, SiSpringboot, SiSequelize, SiExpo, SiPhp, SiOracle, SiN8N } from "react-icons/si";
import { ReactTyped } from "react-typed";
import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const techs = [
  { Icon: SiPhp, label: "PHP" },
  { Icon: TbBrandTypescript, label: "TypeScript" },
  { Icon: SiPostgresql, label: "PostgreSQL" },
  { Icon: SiMysql, label: "MySQL" },
  { Icon: SiOracle, label: "Oracle" },
  { Icon: FaAws, label: "Aws" },
  { Icon: FaLinux, label: "Linux" },
  { Icon: FaDocker, label: "Docker" },
  { Icon: FaJenkins, label: "Jenkins" },
  { Icon: SiN8N, label: "n8n" }
];

const Hero = () => {
  const [completed, setCompleted] = useState(false);
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center bg-hero-gradient relative pt-16"
    >
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 text-center px-4">
        <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-hero-title mb-4">
          <span className="sr-only">FabricioLR</span>
          <span aria-hidden="true"><ReactTyped
            strings={["FabricioLR"]}
            typeSpeed={120}
            showCursor={false}
            onComplete={() => setCompleted(true)}
          /></span>
        </h1>
        {completed && (
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-lg sm:text-xl md:text-2xl text-hero-subtitle tracking-widest uppercase"
          >
            <ReactTyped strings={[t("hero.subtitle")]} typeSpeed={80} />
          </motion.h2>
        )}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3.5, duration: 0.8 }}
        className="absolute bottom-12 flex flex-wrap justify-center gap-5 px-8 max-w-2xl"
      >
        {techs.map(({ Icon, label }, i) => (
          <motion.div
            key={label}
            whileHover={{ scale: 1.2, y: -4 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="group relative"
          >
            <Icon className="text-tech-icon group-hover:text-tech-icon-hover transition-colors text-2xl sm:text-3xl" />
            <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {label}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Hero;
