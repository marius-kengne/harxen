import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";
import { nav, site } from "./data";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <header class="header">
      <div class="container header-inner">
        <a class="brand" routerLink="/">
          <img
            src="assets/logo.jpeg"
            alt="Harxen Labs logo"
            class="brand-logo"
          />
          <span class="brand-text">{{site.name}}</span>
        </a>

        <nav class="nav desktop">
          <a *ngFor="let item of nav"
             [routerLink]="item.path"
             routerLinkActive="active"
             [routerLinkActiveOptions]="{ exact: item.path === '/' }">
             {{item.label}}
          </a>
        </nav>

        <button class="menu-btn" (click)="open = !open" aria-label="Menu">
          <span [class.x]="open"></span>
          <span [class.x]="open"></span>
          <span [class.x]="open"></span>
        </button>
      </div>

      <div class="mobile" *ngIf="open">
        <div class="container mobile-inner">
          <a *ngFor="let item of nav"
             (click)="open=false"
             [routerLink]="item.path"
             routerLinkActive="active"
             [routerLinkActiveOptions]="{ exact: item.path === '/' }">
             {{item.label}}
          </a>
        </div>
      </div>
    </header>

    <router-outlet />

    <footer class="footer">
      <div class="container footer-inner">
        <div class="muted">© {{year}} {{site.name}} — {{site.domain}}</div>
        <div class="muted">{{site.footerBy}}</div>
      </div>
    </footer>
  `,
  styles: [`
    .header{position:sticky; top:0; z-index:50; background:rgba(11,18,32,.72); backdrop-filter:blur(12px); border-bottom:1px solid var(--border)}
    .header-inner{display:flex; align-items:center; justify-content:space-between; padding:14px 0; gap:14px}
    .brand{display:flex; align-items:center; gap:10px; font-weight:800}
    .dot{width:10px; height:10px; border-radius:999px; background:var(--text); display:inline-block}
    .brand-text{letter-spacing:-.01em}
    .nav{display:flex; align-items:center; gap:8px}
    .nav a{padding:10px 12px; border-radius:14px; color:var(--muted); border:1px solid transparent}
    .nav a:hover{color:var(--text); background:var(--card2)}
    .nav a.active{color:var(--text); background:var(--card); border-color:var(--border)}
    .desktop{display:none}
    @media (min-width: 900px){ .desktop{display:flex} }

    .menu-btn{display:inline-flex; flex-direction:column; gap:5px; padding:10px; border-radius:14px; border:1px solid var(--border); background:var(--card)}
    .menu-btn span{display:block; width:20px; height:2px; background:var(--text); opacity:.9; transition:transform .15s ease, opacity .15s ease}
    @media (min-width: 900px){ .menu-btn{display:none} }

    .mobile{border-top:1px solid var(--border)}
    .mobile-inner{display:flex; flex-direction:column; gap:6px; padding:14px 0}
    .mobile a{padding:10px 12px; border-radius:14px; color:var(--muted); border:1px solid transparent}
    .mobile a:hover{color:var(--text); background:var(--card2)}
    .mobile a.active{color:var(--text); background:var(--card); border-color:var(--border)}

    .footer{border-top:1px solid var(--border); padding:20px 0; background:rgba(0,0,0,.12)}
    .footer-inner{display:flex; align-items:center; justify-content:space-between; gap:10px; flex-wrap:wrap}
    .muted{color:rgba(234,240,255,.65); font-size:13px}

    .brand {
      display: flex;
      align-items: center;
      gap: 10px;
      font-weight: 800;
    }

    .logo {
      width: 50px;
      height: 50px;
      object-fit: contain;
      border-radius: 6px; /* optionnel */
    }

    .brand-logo{width:52px; height:50px; border-radius:16px; border:1px solid var(--border); padding:1px; background:rgba(255,255,255,.04)}


    .brand-text {
      letter-spacing: -0.01em;
    }

  `]
})
export class AppComponent {
  site = site;
  nav = nav;
  open = false;
  year = new Date().getFullYear();
}
