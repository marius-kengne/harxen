export type Status = "planned" | "in_progress" | "done";

export const site = {
  name: "Harxen Labs",
  domain: "harxen.fr",
  tagline: "Laboratoire d’ingénierie DevSecOps",
  intro:
    "Laboratoire DevSecOps conçu pour déployer une infrastructure réaliste (virtualisation, CI/CD, conteneurs, observabilité, durcissement) et publier une documentation reproductible.",
  links: {
    github: "https://github.com/TON_GITHUB",
    linkedin: "https://www.linkedin.com/in/TON_LINKEDIN",
    email: "contact@harxen.fr",
  },
  footerBy: "by Marius kengne",
};

export const nav = [
  { path: "/", label: "Accueil" },
  { path: "/presentation", label: "Présentation" },
  { path: "/services", label: "Services" },
  { path: "/projects", label: "Projets" },
  { path: "/documentation", label: "Documentation" },
  { path: "/about", label: "À propos" },
  { path: "/contact", label: "Contact" },
];

export const pillars = [
  {
    title: "Infrastructure Lab",
    desc: "Environnement basé sur Proxmox pour isoler, tester et faire évoluer des services.",
    bullets: ["Proxmox, VMs & réseau", "Reverse proxy & SSL", "Sauvegardes & stockage"],
  },
  {
    title: "DevOps & CI/CD",
    desc: "Automatisation des builds, tests et déploiements via des pipelines et des bonnes pratiques.",
    bullets: ["Pipelines CI/CD", "Registry privé", "IaC & GitOps (à venir)"],
  },
  {
    title: "Security & Observability",
    desc: "Supervision, centralisation logs et sécurité intégrée à chaque étape.",
    bullets: ["Metrics & alerting", "Logs / SIEM", "Scans & policies"],
  },
];

export const roadmap: { phase: string; items: string[]; status: Status }[] = [
  { phase: "Phase 0 — Fondation", items: ["Installer Proxmox", "Réseau & accès SSH", "Stockage & sauvegardes"], status: "in_progress" },
  { phase: "Phase 1 — DevOps", items: ["Docker", "Registry privé", "Jenkins CI/CD"], status: "planned" },
  { phase: "Phase 2 — Kubernetes", items: ["Cluster", "Ingress", "Secrets", "Déploiements"], status: "planned" },
  { phase: "Phase 3 — Observabilité", items: ["Metrics", "Logs", "Alerting"], status: "planned" },
  { phase: "Phase 4 — DevSecOps", items: ["SAST/DAST", "Scan images", "Policies", "Hardening"], status: "planned" },
];

export const services = [
  { name: "Proxmox", goal: "Virtualisation & base du lab", status: "in_progress" as Status, tags: ["Hyperviseur", "VM", "Réseau"] },
  { name: "Jenkins", goal: "CI/CD & automatisation", status: "planned" as Status, tags: ["Pipelines", "CI", "CD"] },
  { name: "Kubernetes", goal: "Orchestration & déploiements", status: "planned" as Status, tags: ["k8s", "Ingress", "Secrets"] },
  { name: "Nextcloud", goal: "Stockage personnel & partage", status: "planned" as Status, tags: ["Storage", "Backup", "Self-hosted"] },
  { name: "Monitoring", goal: "Supervision & alerting", status: "planned" as Status, tags: ["Metrics", "Alerts", "Dashboards"] },
  { name: "Logging / SIEM", goal: "Centralisation et analyse des logs", status: "planned" as Status, tags: ["Logs", "SIEM", "Detection"] },
  { name: "Security", goal: "Scans, secrets, hardening", status: "planned" as Status, tags: ["SAST", "DAST", "Policy"] },
];

export const projects = [
  { name: "Inbox Guardian", desc: "Détection phishing/spam via extension + analyse IA + modes privé/auto.", stack: ["Chrome Extension", "Backend", "AI"], status: "WIP" },
  { name: "PayMyBuddy", desc: "Application de transactions + Docker Compose + registre privé.", stack: ["Spring Boot", "MySQL", "Docker"], status: "WIP" },
  { name: "Harxen Labs Infra", desc: "Déploiement progressif du lab DevSecOps + documentation.", stack: ["Proxmox", "CI/CD", "Kubernetes"], status: "WIP" },
];

export const docs = [
  { title: "Design de l’architecture du lab", date: "2026-01-21", state: "À publier" },
  { title: "Installation Proxmox sur serveur dédié", date: "2026-01-21", state: "À publier" },
  { title: "Reverse proxy + SSL (Nginx/Traefik)", date: "2026-02-21", state: "À publier" },
];
