import { Component } from '@angular/core';
import { ImageComponent } from '../image/image.component';
import { FormsModule } from '@angular/forms';

interface Constellation {
  value: string; label: string; description: string;
}
@Component({
    selector: 'app-stars',
    imports: [ImageComponent, FormsModule],
    templateUrl: './stars.component.html',
    styleUrl: './stars.component.scss'
})
export class StarsComponent {
  selectedConstellation: string = 'orion';
  selectedDescription: string = '';

  readonly constellations: Constellation[] = [
    { value: 'orion', label: 'Orion', description: 'Orion was a hunter in Greek mythology who did stuff and things and after he did other stuff and things the gods were like "wow, this bro should go in the sky."' },
    { value: 'bigdipper', label: 'Big Dipper (Ursa Major)', description: 'The Great Bear is honored in many traditions. In many Native American stories, the bear is pursued by four hunters at its tail, and their chase follows its rotation around the North pole throughout the year.' },
  ]

  constructor() {
    this.selectionChanged();
  }

  selectionChanged() {
    let constellation = this.constellations.find(c => c.value == this.selectedConstellation);
    this.selectedDescription = constellation!.description;
  }
}
