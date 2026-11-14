import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import i18n from "./i18n";

const updateDocumentLanguage = (language: string) => {
  document.documentElement.lang = language.startsWith("pt") ? "pt-BR" : "en";
};
updateDocumentLanguage(i18n.language ?? "en");
i18n.on("languageChanged", updateDocumentLanguage);

const root = document.getElementById("root");
if (root) createRoot(root).render(<App />);
