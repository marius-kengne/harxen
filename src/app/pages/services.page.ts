import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { services } from "../data";
import { statusLabel } from "../ui";

@Component({
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="section">
      <div class="container space">
        <div>
          <img class="logo" src="assets/services.png" alt="Harxen Labs logo">
          <h1 class="h2">Services</h1>
          <p class="p max">
            Services du lab, déployés progressivement. Chaque service est associé à un guide et à des validations.
          </p>
        </div>

        <div class="grid cols-2">
          <div class="card p24" *ngFor="let s of services">
            <div class="top">
              <div>
                <div class="card-title">{{s.name}}</div>
                <p class="p">{{s.goal}}</p>
              </div>
              <span class="badge">{{statusLabel(s.status)}}</span>
            </div>
            <div class="tags">
              <span class="badge" *ngFor="let t of s.tags">{{t}}</span>
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
    .top{display:flex; align-items:flex-start; justify-content:space-between; gap:12px}
    .tags{display:flex; flex-wrap:wrap; gap:8px; margin-top:12px}
    .logo{width:52px; height:52px; border-radius:1px; border:0px solid var(--border); padding:1px; background:rgba(255,255,255,.04)}

  `]
})
export class ServicesPage {
  services = services;
  statusLabel = statusLabel;
}
