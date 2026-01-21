import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";
import { site, pillars, roadmap } from "../data";
import { statusLabel } from "../ui";

@Component({
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="section">
      <div class="container">
        <div class="hero grid cols-2">
          <div class="hero-left">
            <div class="chip">
              <span class="dot"></span>
              <span>{{site.domain}}</span>
            </div>

            <h1 class="h1">{{site.name}}</h1>
            <div class="tagline">{{site.tagline}}</div>
            <p class="p">{{site.intro}}</p>

            <div class="actions">
              <a class="btn primary" routerLink="/presentation">Voir la présentation</a>
              <a class="btn" routerLink="/projects">Voir les projets</a>
              <a class="btn" routerLink="/contact">Contact</a>
            </div>

            <div class="tags">
              <span class="badge">Proxmox</span>
              <span class="badge">CI/CD</span>
              <span class="badge">Kubernetes</span>
              <span class="badge">Observabilité</span>
              <span class="badge">DevSecOps</span>
            </div>
          </div>

          <div class="card hero-right">
            <div class="small-title">Roadmap (aperçu)</div>
            <div class="road">
              <div class="road-item" *ngFor="let r of roadmap.slice(0,4)">
                <div>
                  <div class="phase">{{r.phase}}</div>
                  <div class="p mini">{{r.items.slice(0,2).join(' • ')}}</div>
                </div>
                <span class="badge">{{statusLabel(r.status)}}</span>
              </div>
            </div>
            <div class="mt">
              <a class="btn" routerLink="/presentation">Détails →</a>
            </div>
          </div>
        </div>

        <div class="mt2 grid cols-3">
          <div class="card p24" *ngFor="let p of pillars">
            <div class="card-title">{{p.title}}</div>
            <p class="p">{{p.desc}}</p>
            <ul class="list">
              <li *ngFor="let b of p.bullets">{{b}}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero{align-items:center}
    .hero-left{display:flex; flex-direction:column; gap:14px}
    .hero-right{padding:22px}
    .chip{display:inline-flex; align-items:center; gap:8px; border:1px solid var(--border); background:var(--card); padding:6px 10px; border-radius:999px; width:max-content; color:var(--muted); font-size:12px}
    .chip .dot{width:8px;height:8px;border-radius:999px;background:var(--text)}
    .tagline{font-size:18px; color:var(--muted)}
    .actions{display:flex; flex-wrap:wrap; gap:10px; margin-top:6px}
    .tags{display:flex; flex-wrap:wrap; gap:8px; padding-top:6px}

    .small-title{font-weight:700; font-size:13px; color:rgba(234,240,255,.82)}
    .road{margin-top:14px; display:flex; flex-direction:column; gap:10px}
    .road-item{display:flex; align-items:flex-start; justify-content:space-between; gap:12px; padding:12px; border-radius:16px; border:1px solid var(--border); background:rgba(255,255,255,.03)}
    .phase{font-weight:700}
    .mini{font-size:13px; margin:0}
    .mt{margin-top:14px}
    .mt2{margin-top:18px}
    .p24{padding:22px}
    .card-title{font-weight:800}
    .list{margin:12px 0 0; padding-left:18px; color:var(--muted); line-height:1.7}
    @media (min-width: 900px){ .mt2{margin-top:28px} }
  `]
})
export class HomePage {
  site = site;
  pillars = pillars;
  roadmap = roadmap;
  statusLabel = statusLabel;
}
