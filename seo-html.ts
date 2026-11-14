import type { Plugin } from "vite";
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
      const text = resources.pt.translation;
      const section = (id: string, title: string, body: string) =>
        `<section id="${id}"><h2>${escapeHtml(title)}</h2>${body}</section>`;
      const link = (href: string, label: string) => `<a href="${escapeHtml(href)}">${escapeHtml(label)}</a>`;
      const paragraph = (value: string) => `<p>${escapeHtml(value)}</p>`;
      const content = `<header><nav>${Object.entries(text.nav).map(([id, label]) => link(`#${id}`, label)).join(" · ")}</nav></header>
        <main><section id="home"><h1>FabricioLR</h1>${paragraph(text.hero.subtitle)}</section>
        ${section("about", text.about.title, paragraph(text.about.bio) + paragraph(text.about.location) + paragraph(text.about.education) + link("mailto:fabriciolongodearaujo@gmail.com", "fabriciolongodearaujo@gmail.com") + " · " + link("https://share.fabriciolr.online/ac4cd7ce-5214-428d-b053-624339b6c411", text.about.resume))}
        ${section("skills", text.skills.title, Object.values(text.skills.items).map((item) => `<article><h3>${escapeHtml(item.title)}</h3>${paragraph(item.subtitle)}${paragraph(item.description)}</article>`).join(""))}
        ${section("experience", text.experience.title, Object.values(text.experience.items).map((item) => `<article><h3>${escapeHtml(item.role)} — ${escapeHtml(item.company)}</h3>${paragraph(item.period)}<ul>${item.tasks.map((task) => `<li>${escapeHtml(task)}</li>`).join("")}</ul></article>`).join(""))}
        ${section("projects", text.projects.title, portfolioProjects.map((project) => {
          const item = text.projects.items[project.key as keyof typeof text.projects.items];
          return `<article><h3>${link(project.link, item.title)}</h3>${paragraph(project.tags.join(", "))}${paragraph(item.description)}</article>`;
        }).join(""))}
        ${section("contact", text.contact.title, link("mailto:fabriciolongodearaujo@gmail.com", "fabriciolongodearaujo@gmail.com") + " · " + link("https://wa.me/5561995798701", text.contact.whatsapp))}</main>
        <footer>${link("https://github.com/FabricioLR", "GitHub")} · ${link("https://www.linkedin.com/in/fabricio-arauj/", "LinkedIn")} · ${link("https://freelance.fabriciolr.online", "Freelance")} · ${link("https://blog.fabriciolr.online/", "Blog")}</footer>`;
      return html.replace('<div id="root"></div>', `<div id="root">${content}</div>`);
    },
  };
}