import { Routes } from "@angular/router";
import { HomePage } from "./pages/home.page";
import { PresentationPage } from "./pages/presentation.page";
import { ServicesPage } from "./pages/services.page";
import { ProjectsPage } from "./pages/projects.page";
import { DocumentationPage } from "./pages/documentation.page";
import { AboutPage } from "./pages/about.page";
import { ContactPage } from "./pages/contact.page";

export const routes: Routes = [
  { path: "", component: HomePage, title: "Harxen Labs" },
  { path: "presentation", component: PresentationPage, title: "Présentation — Harxen Labs" },
  { path: "services", component: ServicesPage, title: "Services — Harxen Labs" },
  { path: "projects", component: ProjectsPage, title: "Projets — Harxen Labs" },
  { path: "documentation", component: DocumentationPage, title: "Documentation — Harxen Labs" },
  { path: "about", component: AboutPage, title: "À propos — Harxen Labs" },
  { path: "contact", component: ContactPage, title: "Contact — Harxen Labs" },
  { path: "**", redirectTo: "" },
];
