import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  pt: {
    translation: {
      nav: {
        home: "Início",
        about: "Sobre",
        skills: "Habilidades",
        experience: "Experiência",
        projects: "Projetos",
        contact: "Contato",
      },
      hero: {
        subtitle: "Infrastructure - Back End Developer",
      },
      about: {
        title: "Sobre Mim",
        bio: "Estudante de Ciência da Computação, programador autodidata focado em desenvolvimento PHP e administrador de servidores Linux. Com experiência em infraestrutura On-Premise/Cloud, ambientes Docker e monitoramento avançado (Zabbix/Prometheus/Grafana).",
        location: "Brasília – DF",
        education: "Ciência da Computação",
        resume: "Currículo",
      },
      skills: {
        title: "Habilidades",
        items: {
          backend: {
            title: "Backend Dev",
            subtitle: "NodeJS, Java, PHP e Python",
            description: "Programação funcional e orientada a objetos. APIs REST, autenticação e integração com bancos de dados.",
          },
          infra: {
            title: "Infraestrutura",
            subtitle: "Linux, Docker, Proxmox",
            description: "Gerenciamento de servidores Linux (Cloud e on-premise), virtualização com Proxmox, containers Docker, Nginx, Bind e Zabbix.",
          },
          security: {
            title: "Redes & Segurança",
            subtitle: "Mikrotik, OpenVPN, Samba",
            description: "Conhecimento em segurança e redes de computadores, configuração de equipamentos Mikrotik e monitoramento de infraestrutura.",
          },
          db: {
            title: "Banco de Dados",
            subtitle: "MySQL & PostgreSQL",
            description: "Modelagem, consultas e administração de bancos de dados relacionais com MySQL e PostgreSQL.",
          },
          cloud: {
            title: "Cloud Computing",
            subtitle: "AWS & Oracle Cloud",
            description: "Experiência com serviços de computação em nuvem da Amazon Web Services e Oracle Cloud Infrastructure.",
          },
          automation: {
            title: "Automação",
            subtitle: "n8n, APIs & IA",
            description: "Criação de fluxos automatizados com n8n, integração com APIs externas e uso de inteligência artificial para automação de processos.",
          },
          ai: {
            title: "IA & Pair Programming",
            subtitle: "Antigravity, Gemini, Lovable",
            description: "Uso de agentes de IA como assistentes de desenvolvimento para arquitetura, refatoração, debugging e aceleração de projetos via pair-programming.",
          },
        },
      },
      experience: {
        title: "Experiência",
        items: {
          transoft: {
            role: "Estagiário de Infraestrutura",
            company: "Transoft",
            period: "Dez/2025 – Atual",
            tasks: [
              "Atendimento a chamados internos para suporte a computadores, impressoras, rede e sistema",
              "Gerenciamento de servidores Linux (Cloud e on-premise)",
              "Monitoramento da infraestrutura (servidores, rede, websites)",
              "Manutenção de softwares (Nginx, Bind, OpenVPN, Samba, Zabbix)",
              "Configuração básica de equipamentos Mikrotik",
              "Virtualização (Proxmox) e containers (Docker)",
            ],
          },
          ferraz: {
            role: "Estagiário de TI",
            company: "Grupo Ferraz Costa",
            period: "Ago/2025 – Dez/2025",
            tasks: [
              "Apoio na manutenção preventiva e corretiva de equipamentos",
              "Auxiliar na atualização de softwares, sistemas operacionais e antivírus",
            ],
          },
        },
      },
      projects: {
        title: "Meus Projetos",
        items: {
          webStorage: {
            title: "Web Storage",
            description: "Plataforma de gerenciamento de arquivos em nuvem com design Glassmorphism. Desenvolvido com PHP 8.4, PostgreSQL, Docker, CI/CD com Jenkins e GitHub Actions, e pair-programming com IA (Antigravity).",
          },
          news: {
            title: "Notícias Diárias",
            description: "Automação com n8n que captura notícias via RSS, resume com IA (Google Gemini) e envia diariamente pelo WhatsApp usando Evolution API.",
          },
          estetica: {
            title: "Estética",
            description: "Site de estética feminina. Permite visualizar serviços de uma loja fictícia. Utilizando-se de Javascript e PHP.",
          },
          portfolio: {
            title: "Portfólio",
            description: "Site pessoal para apresentação de projetos. Escrito em JavaScript com o framework React, hospedado na Vercel.",
          },
          grafana: {
            title: "Grafana OCI Cost Plugin",
            description: "Plugin de backend para o Grafana desenvolvido em Go que permite a visualização detalhada e monitoramento de custos da Oracle Cloud Infrastructure (OCI), com filtros avançados, cache interno e foco em FinOps.",
          },
          blog: {
            title: "Blog Pessoal",
            description: "Blog pessoal criado para compartilhar meus estudos, anotações e descobertas sobre desenvolvimento de software, infraestrutura e novas tecnologias. Construído em WordPress com domínio próprio.",
          },
          docker: {
            title: "Docker Dashboard",
            description: "Dashboard web em PHP para visualizar containers Docker em execução com links dinâmicos por porta. Utiliza docker-socket-proxy em modo read-only para reduzir a superfície de ataque.",
          },
          observability: {
            title: "Stack de Observabilidade",
            description: "Stack de monitoramento e observabilidade pronta para produção com Docker Compose, integrando Prometheus, Loki, Promtail, Grafana e Alertmanager para métricas, logs e alertas em tempo real.",
          },
          chatbot: {
            title: "Chatbot AI - Protótipo",
            description: "Protótipo de assistente inteligente com RAG, integrando n8n, Groq (Llama 3.1) e embeddings da Hugging Face. Frontend servido via Nginx e orquestrado com Docker Compose.",
          },
          quotes: {
            title: "Citações Online",
            description: "Site editorial minimalista (citacoes.online) que exibe uma citação do dia e um acervo navegável por categorias e autores, com busca e compartilhamento. Construído em PHP com Laravel/Blade e containerizado com Docker.",
          },
          financial: {
            title: "WFinancial Tracker",
            description: "Sistema de controle financeiro automatizado: as transações são registradas apenas enviando mensagens formatadas em um grupo do WhatsApp. A Evolution API captura os eventos, o n8n valida e estrutura os dados via regex e o backend Laravel funciona como livro-caixa e dashboard, tudo orquestrado com Docker Compose e PostgreSQL.",
          },
        },
      },
      contact: {
        title: "Envie-me uma mensagem",
        name: "Seu nome",
        namePlaceholder: "João Silva",
        email: "Email",
        emailPlaceholder: "joao@email.com",
        message: "Sua Mensagem",
        messagePlaceholder: "Escreva sua mensagem aqui...",
        send: "Enviar",
        or: "ou",
        whatsapp: "Fale comigo no WhatsApp",
      },
    },
  },
  en: {
    translation: {
      nav: {
        home: "Home",
        about: "About",
        skills: "Skills",
        experience: "Experience",
        projects: "Projects",
        contact: "Contact",
      },
      hero: {
        subtitle: "Infrastructure - Back End Developer",
      },
      about: {
        title: "About Me",
        bio: "Computer Science student, self-taught programmer focused on PHP development and Linux server administration. Experienced with On-Premise/Cloud infrastructure, Docker environments and advanced monitoring (Zabbix/Prometheus/Grafana).",
        location: "Brasília – DF, Brazil",
        education: "Computer Science",
        resume: "Resume",
      },
      skills: {
        title: "Skills",
        items: {
          backend: {
            title: "Backend Dev",
            subtitle: "NodeJS, Java, PHP and Python",
            description: "Functional and object-oriented programming. REST APIs, authentication and database integration.",
          },
          infra: {
            title: "Infrastructure",
            subtitle: "Linux, Docker, Proxmox",
            description: "Linux server management (Cloud and on-premise), Proxmox virtualization, Docker containers, Nginx, Bind and Zabbix.",
          },
          security: {
            title: "Networks & Security",
            subtitle: "Mikrotik, OpenVPN, Samba",
            description: "Knowledge in computer security and networks, Mikrotik equipment configuration and infrastructure monitoring.",
          },
          db: {
            title: "Databases",
            subtitle: "MySQL & PostgreSQL",
            description: "Modeling, querying and administration of relational databases with MySQL and PostgreSQL.",
          },
          cloud: {
            title: "Cloud Computing",
            subtitle: "AWS & Oracle Cloud",
            description: "Experience with cloud computing services from Amazon Web Services and Oracle Cloud Infrastructure.",
          },
          automation: {
            title: "Automation",
            subtitle: "n8n, APIs & AI",
            description: "Building automated workflows with n8n, integrating external APIs and using artificial intelligence for process automation.",
          },
          ai: {
            title: "AI & Pair Programming",
            subtitle: "Antigravity, Gemini, Lovable",
            description: "Using AI agents as development assistants for architecture, refactoring, debugging and accelerating projects through pair-programming.",
          },
        },
      },
      experience: {
        title: "Experience",
        items: {
          transoft: {
            role: "Infrastructure Intern",
            company: "Transoft",
            period: "Dec/2025 – Present",
            tasks: [
              "Handling internal tickets for computer, printer, network and system support",
              "Linux server management (Cloud and on-premise)",
              "Infrastructure monitoring (servers, network, websites)",
              "Software maintenance (Nginx, Bind, OpenVPN, Samba, Zabbix)",
              "Basic configuration of Mikrotik equipment",
              "Virtualization (Proxmox) and containers (Docker)",
            ],
          },
          ferraz: {
            role: "IT Intern",
            company: "Grupo Ferraz Costa",
            period: "Aug/2025 – Dec/2025",
            tasks: [
              "Support in preventive and corrective maintenance of equipment",
              "Assistance in updating software, operating systems and antivirus",
            ],
          },
        },
      },
      projects: {
        title: "My Projects",
        items: {
          webStorage: {
            title: "Web Storage",
            description: "Cloud file management platform with Glassmorphism design. Built with PHP 8.4, PostgreSQL, Docker, CI/CD using Jenkins and GitHub Actions, and AI pair-programming (Antigravity).",
          },
          news: {
            title: "Daily News",
            description: "n8n automation that fetches news via RSS, summarizes with AI (Google Gemini) and sends them daily through WhatsApp using Evolution API.",
          },
          estetica: {
            title: "Aesthetics",
            description: "Aesthetics website. Allows visualizing services of a fictional store. Built with JavaScript and PHP.",
          },
          portfolio: {
            title: "Portfolio",
            description: "Personal site to showcase projects. Written in JavaScript with the React framework, hosted on Vercel.",
          },
          grafana: {
            title: "Grafana OCI Cost Plugin",
            description: "Backend plugin for Grafana developed in Go that allows detailed visualization and cost monitoring of Oracle Cloud Infrastructure (OCI), with advanced filters, internal cache and FinOps focus.",
          },
          blog: {
            title: "Personal Blog",
            description: "Personal blog created to share my studies, notes and discoveries about software development, infrastructure and new technologies. Built with WordPress on a custom domain.",
          },
          docker: {
            title: "Docker Dashboard",
            description: "PHP web dashboard to view running Docker containers with dynamic links by port. Uses docker-socket-proxy in read-only mode to reduce the attack surface.",
          },
          observability: {
            title: "Observability Stack",
            description: "Production-ready monitoring and observability stack with Docker Compose, integrating Prometheus, Loki, Promtail, Grafana and Alertmanager for real-time metrics, logs and alerts.",
          },
          chatbot: {
            title: "AI Chatbot - Prototype",
            description: "Intelligent assistant prototype with RAG, integrating n8n, Groq (Llama 3.1) and Hugging Face embeddings. Frontend served via Nginx and orchestrated with Docker Compose.",
          },
          quotes: {
            title: "Quotes Online",
            description: "Minimalist editorial website (citacoes.online) showing a quote of the day plus a collection browsable by category and author, with search and sharing. Built with PHP using Laravel/Blade and containerized with Docker.",
          },
          financial: {
            title: "WFinancial Tracker",
            description: "Automated financial ledger where transactions are recorded just by sending formatted WhatsApp messages to a group. Evolution API captures the events, n8n validates and structures the payload via regex, and a Laravel backend acts as the ledger and dashboard — all orchestrated with Docker Compose and PostgreSQL.",
          },
        },
      },
      contact: {
        title: "Send me a message",
        name: "Your name",
        namePlaceholder: "John Doe",
        email: "Email",
        emailPlaceholder: "john@email.com",
        message: "Your Message",
        messagePlaceholder: "Write your message here...",
        send: "Send",
        or: "or",
        whatsapp: "Chat with me on WhatsApp",
      },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    supportedLngs: ["pt", "en"],
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
    interpolation: { escapeValue: false },
  });

export default i18n;
