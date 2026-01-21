import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";
import { roadmap } from "../data";
import { statusLabel } from "../ui";

@Component({
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="section">
      <div class="container space">
        <div class="header-block">
          <img class="logo" src="assets/logo.jpeg" alt="Harxen Labs logo">
          <h1 class="h2">Harxen Labs</h1>
          <div class="subtitle">Laboratoire d’ingénierie DevSecOps</div>
          <p class="p max">
            Plateforme de lab dédiée à la construction d’une infrastructure DevSecOps réaliste et documentée :
            Proxmox, CI/CD, Kubernetes, observabilité et sécurité intégrée.
          </p>
          <div class="actions">
            <a class="btn primary" routerLink="/services">Voir les services</a>
            <a class="btn" routerLink="/documentation">Documentation</a>
          </div>
        </div>

        <div class="grid cols-2">
          <div class="card p24">
            <div class="card-title">Architecture cible (v1)</div>
            <ul class="list">
              <li>Serveur dédié → Proxmox (VMs / services)</li>
              <li>Réseau interne isolé + accès SSH</li>
              <li>Reverse proxy + SSL</li>
              <li>Sauvegardes + stockage</li>
            </ul>
          </div>

          <div class="card p24">
            <div class="card-title">Principes</div>
            <ul class="list">
              <li>Documentation reproductible, étape par étape</li>
              <li>Stack réaliste, proche des pratiques entreprise</li>
              <li>Focus sur DevOps, sécurité et observabilité</li>
            </ul>
          </div>
        </div>

        <div class="card p24">
          <div class="card-title">Roadmap</div>
          <p class="p">Chaque étape sera accompagnée de guides et de validations.</p>

          <div class="grid cols-2 mt">
            <div class="road-item" *ngFor="let r of roadmap">
              <div>
                <div class="phase">{{r.phase}}</div>
                <ul class="mini-list">
                  <li *ngFor="let it of r.items">{{it}}</li>
                </ul>
              </div>
              <span class="badge">{{statusLabel(r.status)}}</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  `,
  styles: [`
    .space{display:flex; flex-direction:column; gap:18px}
    .header-block{display:flex; flex-direction:column; gap:10px; align-items:flex-start}
    .logo{width:52px; height:52px; border-radius:16px; border:1px solid var(--border); padding:10px; background:rgba(255,255,255,.04)}
    .subtitle{font-size:16px; color:var(--muted); font-weight:600}
    .max{max-width:720px}
    .actions{display:flex; flex-wrap:wrap; gap:10px; margin-top:6px}
    .p24{padding:22px}
    .card-title{font-weight:800}
    .list{margin:12px 0 0; padding-left:18px; color:var(--muted); line-height:1.7}
    .mt{margin-top:12px}
    .road-item{display:flex; align-items:flex-start; justify-content:space-between; gap:12px; padding:14px; border-radius:16px; border:1px solid var(--border); background:rgba(255,255,255,.03)}
    .phase{font-weight:800}
    .mini-list{margin:8px 0 0; padding-left:18px; color:var(--muted); line-height:1.7; font-size:13px}
  `]
})
export class PresentationPage {
  roadmap = roadmap;
  statusLabel = statusLabel;
}
