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
          <h1 class="h2">Contact</h1>
          <p class="p max">
            Pour opportunités, questions techniques ou collaboration, écrivez à cette adresse électronique.
          </p>
        </div>

        <div class="grid cols-2">
          <div class="card p24">
            <div class="card-title">Email</div>
            <p class="p"><a class="link" [href]="'mailto:' + site.links.email">{{site.links.email}}</a></p>
            <div class="tags">
              <span class="badge">Recrutement</span>
              <span class="badge">Infra</span>
              <span class="badge">Projets</span>
              <span class="badge">Questions</span>
            </div>
          </div>

          <div class="card p24">
            <div class="card-title">À inclure dans le mail</div>
            <ul class="list">
              <li>Contexte (stage / job / projet)</li>
              <li>Lien LinkedIn ou GitHub</li>
              <li>Points à consulter (lab, projets, documentation)</li>
            </ul>
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
    .list{margin:12px 0 0; padding-left:18px; color:var(--muted); line-height:1.7}
    .link{color:var(--text); text-decoration:underline; text-underline-offset:4px}
  `]
})
export class ContactPage {
  site = site;
}
