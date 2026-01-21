import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { docs } from "../data";

@Component({
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="section">
      <div class="container space">
        <div>
          <h1 class="h2">Documentation</h1>
          <p class="p max">
            Guides techniques et documentation reproductible : installation, configuration, sécurité et exploitation.
          </p>
        </div>

        <div class="card">
          <div class="row" *ngFor="let d of docs; let i = index" [class.b]="i>0">
            <div>
              <div class="title">{{d.title}}</div>
              <div class="meta">{{d.date}}</div>
            </div>
            <span class="badge">{{d.state}}</span>
          </div>
        </div>

        <div class="hint p">
          Astuce : les guides peuvent être stockés en Markdown et rendus automatiquement (évolution prévue).
        </div>
      </div>
    </section>
  `,
  styles:[`
    .space{display:flex; flex-direction:column; gap:18px}
    .max{max-width:720px}
    .row{display:flex; align-items:flex-start; justify-content:space-between; gap:12px; padding:16px 18px}
    .row.b{border-top:1px solid var(--border)}
    .title{font-weight:800}
    .meta{color:var(--muted); font-size:13px; margin-top:4px}
    .hint{color:var(--muted)}
  `]
})
export class DocumentationPage {
  docs = docs;
}
