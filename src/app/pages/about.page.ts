import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { site } from "../data";

@Component({
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="section">
      <div class="container space">
        <div>
          <h1 class="h2">À propos</h1>
          <p class="p max">
            Harxen Labs est un laboratoire DevSecOps orienté pratique : infrastructure, automatisation, sécurité et documentation.
            L’objectif est de démontrer des compétences d’ingénierie via un lab réel et des guides reproductibles.
          </p>
        </div>

        <div class="grid cols-2">
          <div class="card p24">
            <div class="card-title">Focus</div>
            <div class="tags">
              <span class="badge">DevSecOps</span>
              <span class="badge">Cloud</span>
              <span class="badge">CI/CD</span>
              <span class="badge">Kubernetes</span>
              <span class="badge">Security</span>
              <span class="badge">Observabilité</span>
            </div>
            <p class="p">Ce site sert de portfolio officiel : présentation, services, projets et documentation.</p>
          </div>

          <div class="card p24">
            <div class="card-title">Liens</div>
            <div class="links">
              <a class="btn" [href]="site.links.github" target="_blank" rel="noreferrer">GitHub</a>
              <a class="btn" [href]="site.links.linkedin" target="_blank" rel="noreferrer">LinkedIn</a>
              <a class="btn primary" [href]="'mailto:' + site.links.email">Contact</a>
            </div>
            <p class="p small">Les liens sont configurables dans <code>src/app/data.ts</code>.</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles:[`
    .space{display:flex; flex-direction:column; gap:18px}
    .max{max-width:720px}
    .p24{padding:22px}
    .card-title{font-weight:900}
    .tags{display:flex; flex-wrap:wrap; gap:8px; margin-top:12px}
    .links{display:flex; flex-wrap:wrap; gap:10px; margin-top:12px}
    .small{font-size:13px}
    code{border:1px solid var(--border); border-bottom-width:2px; padding:2px 6px; border-radius:8px; color:var(--muted)}
  `]
})
export class AboutPage {
  site = site;
}
