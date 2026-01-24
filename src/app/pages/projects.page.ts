import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { projects } from "../data";

@Component({
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="section">
      <div class="container space">
        <div>
          <img class="logo" src="assets/projets.png" alt="Harxen Labs logo">
          <h1 class="h2">Projets</h1>
          <p class="p max">
            Sélection des applications développées. Les déploiements et validations seront réalisés dans le lab au fil de la roadmap.
          </p>
        </div>

        <div class="grid cols-2">
          <div class="card p24" *ngFor="let p of projects">
            <div class="top">
              <div class="card-title">{{p.name}}</div>
              <span class="badge">{{p.status}}</span>
            </div>
            <p class="p">{{p.desc}}</p>
            <div class="tags">
              <span class="badge" *ngFor="let t of p.stack">{{t}}</span>
            </div>
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
    .top{display:flex; align-items:center; justify-content:space-between; gap:12px}
    .tags{display:flex; flex-wrap:wrap; gap:8px; margin-top:12px}
    .logo{width:52px; height:52px; border-radius:1px; border:0px solid var(--border); padding:1px; background:rgba(255,255,255,.04)}

  `]
})
export class ProjectsPage {
  projects = projects;
}
