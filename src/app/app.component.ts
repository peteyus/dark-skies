import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, NgbModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dark-skies';
  links = [
    { title: 'Home', fragment: '' },
    { title: 'Stars', fragment: 'stars' },
    { title: 'Sources', fragment: 'sources' }
  ]

  constructor(readonly route: ActivatedRoute) {}
}
