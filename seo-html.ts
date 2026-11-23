import type { Plugin } from "vite";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { resources } from "./src/i18n";
import { portfolioProjects } from "./src/data/projects";

const escapeHtml = (value: string) => value.replace(/[&<>"']/g, (character) => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
}[character] ?? character));

// The same translations and project links feed both the initial HTML and React.
// React replaces this content on startup; it is also useful without JavaScript.
export function portfolioHtml(): Plugin {
  return {
    name: "portfolio-crawler-html",
    transformIndexHtml(html) {
      // Reuse the global theme before the JavaScript-loaded stylesheet arrives.
      const criticalTheme = readFileSync(resolve("src/index.css"), "utf8")
        .match(/:root\s*\{[^}]+\}/)?.[0] ?? "";
      const text = resources.pt.translation;
      const section = (id: string, title: string, body: string) =>
        `<section id="${id}"><h2>${escapeHtml(title)}</h2>${body}</section>`;
      const link = (href: string, label: string) => `<a href="${escapeHtml(href)}">${escapeHtml(label)}</a>`;
      const paragraph = (value: string) => `<p>${escapeHtml(value)}</p>`;
      const content = `<header><nav>${Object.entries(text.nav).map(([id, label]) => link(`#${id}`, label)).join(" · ")}</nav></header>
        <main><section id="home"><h1>FabricioLR</h1>${paragraph(text.hero.subtitle)}</section>
        ${section("about", text.about.title, paragraph(text.about.bio) + paragraph(text.about.location) + paragraph(text.about.education) + link("mailto:fabriciolongodearaujo@gmail.com", "fabriciolongodearaujo@gmail.com") + " · " + link("https://drive.google.com/file/d/1kLwT7j7ocBm7wZPRWk1Yq5zGoiScKqPH/view?usp=sharing", text.about.resume))}
        ${section("skills", text.skills.title, Object.values(text.skills.items).map((item) => `<article><h3>${escapeHtml(item.title)}</h3>${paragraph(item.subtitle)}${paragraph(item.description)}</article>`).join(""))}
        ${section("experience", text.experience.title, Object.values(text.experience.items).map((item) => `<article><h3>${escapeHtml(item.role)} — ${escapeHtml(item.company)}</h3>${paragraph(item.period)}<ul>${item.tasks.map((task) => `<li>${escapeHtml(task)}</li>`).join("")}</ul></article>`).join(""))}
        ${section("projects", text.projects.title, portfolioProjects.map((project) => {
          const item = text.projects.items[project.key as keyof typeof text.projects.items];
          return `<article><h3>${link(project.link, item.title)}</h3>${paragraph(project.tags.join(", "))}${paragraph(item.description)}</article>`;
        }).join(""))}
        ${section("contact", text.contact.title, link("mailto:fabriciolongodearaujo@gmail.com", "fabriciolongodearaujo@gmail.com") + " · " + link("https://wa.me/5561995798701", text.contact.whatsapp))}</main>
        <footer>${link("https://github.com/FabricioLR", "GitHub")} · ${link("https://www.linkedin.com/in/fabricio-arauj/", "LinkedIn")} · ${link("https://freelance.fabriciolr.online", "Freelance")} · ${link("https://blog.fabriciolr.online/", "Blog")}</footer>`;
      // Hide only the static fallback in JavaScript-enabled browsers. React
      // replaces this wrapper on its first render, so no readiness timer is needed.
      // Without JavaScript the complete crawler-readable content stays visible.
      const startup = `<style>
        ${criticalTheme}
        html { background: hsl(var(--background)); color: hsl(var(--foreground)); }
        body { margin: 0; }
        html.portfolio-js #root > [data-portfolio-fallback] { display: none; }
        [data-portfolio-fallback] { max-width: 64rem; margin: auto; padding: 2rem 1.5rem; font-family: 'Plus Jakarta Sans', sans-serif; line-height: 1.7; overflow-wrap: anywhere; }
        [data-portfolio-fallback] section { padding-block: 2rem; }
        [data-portfolio-fallback] h1, [data-portfolio-fallback] h2, [data-portfolio-fallback] h3 { font-family: 'Syne', sans-serif; line-height: 1.3; }
        [data-portfolio-fallback] h1 { font-size: 3rem; }
        [data-portfolio-fallback] h2 { font-size: 2rem; }
        [data-portfolio-fallback] h3 { font-size: 1.25rem; }
        [data-portfolio-fallback] a { color: hsl(var(--primary)); }
        [data-portfolio-fallback] article { margin-block: 2rem; }
      </style>
      <script>
        document.documentElement.classList.add("portfolio-js");
        window.addEventListener("error", function(event) {
          if (event instanceof ErrorEvent || (event.target instanceof HTMLScriptElement && event.target.type === "module")) {
            document.documentElement.classList.remove("portfolio-js");
          }
        }, true);
      </script>`;
      return html
        .replace("</head>", `${startup}</head>`)
        .replace('<div id="root"></div>', `<div id="root"><div data-portfolio-fallback>${content}</div></div>`);
    },
  };
}