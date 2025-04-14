import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { Subscription } from 'rxjs';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  imports: [CommonModule, MatTabsModule, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'dark-skies';
  links = [
    { title: 'Stars', fragment: 'stars' },
    { title: 'Information', fragment: 'info' },
  ]

  activeLink = this.links[0];
  routerSub: Subscription | null = null;

  constructor(private readonly router: Router, private readonly iconRegistry: MatIconRegistry) { }

  ngOnInit(): void {
    this.iconRegistry.setDefaultFontSetClass('material-symbols-outlined')
    this.routerSub = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const path = event.url.replace('/', '');
        let link = this.links.find(l => l.fragment == path)
        if (link) this.activeLink = link;
        this.routerSub?.unsubscribe();
      }
    })
  }
}
