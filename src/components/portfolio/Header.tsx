import { FaGithubSquare, FaQuoteRight, FaBriefcase } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { HiMenu, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useCallback } from "react";
import { useTranslation } from "react-i18next";

const BlogIcon = ({ size = 30 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="currentColor" aria-hidden="true">
    <mask id="blog-icon-mask">
      <rect width="64" height="64" fill="white" />
      <g stroke="black" strokeWidth="2.5" strokeLinecap="round" fill="none">
        <line x1="4" y1="13" x2="60" y2="13" />
        <line x1="35" y1="8" x2="53" y2="8" />
        <rect x="10" y="20" width="30" height="22" rx="4" />
        <circle cx="28" cy="27" r="2.5" />
        <path d="M11 40 L19 31 L27 41 M25 38 L30 34 L37 41" />
        <line x1="44" y1="23" x2="56" y2="23" />
        <line x1="44" y1="29" x2="56" y2="29" />
        <line x1="44" y1="35" x2="56" y2="35" />
        <line x1="44" y1="41" x2="56" y2="41" />
        <line x1="9" y1="48" x2="55" y2="48" />
        <line x1="9" y1="54" x2="16" y2="54" />
        <line x1="21" y1="54" x2="32" y2="54" />
        <line x1="38" y1="54" x2="55" y2="54" />
      </g>
      <g fill="black">
        <circle cx="12" cy="8" r="1.5" /><circle cx="17" cy="8" r="1.5" /><circle cx="22" cy="8" r="1.5" />
      </g>
    </mask>
    <rect x="4" y="3" width="56" height="58" rx="6" mask="url(#blog-icon-mask)" />
  </svg>
);

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const navLinks = [
    { href: "#home", label: t("nav.home") },
    { href: "#about", label: t("nav.about") },
    { href: "#skills", label: t("nav.skills") },
    { href: "#experience", label: t("nav.experience") },
    { href: "#projects", label: t("nav.projects") },
    { href: "#contact", label: t("nav.contact") },
  ];

  const currentLang = i18n.language?.startsWith("pt") ? "pt" : "en";
  const toggleLang = () => i18n.changeLanguage(currentLang === "pt" ? "en" : "pt");

  const scrollToSection = useCallback((href: string, closeMobile = false) => {
    if (closeMobile) setMenuOpen(false);

    setTimeout(() => {
      const id = href.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        const headerOffset = 70;
        const top = el.getBoundingClientRect().top + window.pageYOffset - headerOffset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }, closeMobile ? 300 : 0);
  }, []);

  const LangToggle = () => (
    <button
      onClick={toggleLang}
      aria-label="Toggle language"
      className="flex items-center gap-1 text-sm font-medium border border-border/60 rounded-md px-2 py-1 hover:border-primary/60 transition-colors"
    >
      <span className={currentLang === "pt" ? "text-primary" : "text-muted-foreground"}>PT</span>
      <span className="text-muted-foreground/50">/</span>
      <span className={currentLang === "en" ? "text-primary" : "text-muted-foreground"}>EN</span>
    </button>
  );

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/50"
    >
      <div className="flex items-center justify-between px-6 md:px-12 py-4">
        <LangToggle />
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(href);
              }}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/FabricioLR"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <FaGithubSquare fontSize={32} />
          </a>
          <a
            href="https://www.linkedin.com/in/fabricio-arauj/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <FaLinkedin fontSize={32} />
          </a>
          <a
            href="https://freelance.fabriciolr.online"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Freelance"
            title="Freelance"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <FaBriefcase fontSize={30} />
          </a>
          <a
            href="https://blog.fabriciolr.online/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Blog WordPress"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <BlogIcon size={30} />
          </a>
          <button
            className="md:hidden text-muted-foreground hover:text-primary transition-colors ml-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <HiX fontSize={26} /> : <HiMenu fontSize={26} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden border-t border-border/50 bg-background/95 backdrop-blur-md"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(href, true);
                  }}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
