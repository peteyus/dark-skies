import { Component } from '@angular/core';
import { ImageComponent } from '../image/image.component';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

interface Constellation {
  value: string; label: string; description: string;
}
@Component({
  selector: 'app-stars',
  imports: [ImageComponent, FormsModule, MatIconModule, MatTooltipModule],
  templateUrl: './stars.component.html',
  styleUrl: './stars.component.scss'
})
export class StarsComponent {
  selectedConstellation: string = 'orion';
  selectedDescription: string = '';

  readonly constellations: Constellation[] = [
    { value: 'orion', label: 'Orion', description: 'Orion was a hunter in Greek mythology whose story has many forms. In most, he was a very skilled hunter whose pride led Gaia to send a giant scorpion to kill him. To commemorate this, the gods placed Orion and Scorpio in the skies.' },
    { value: 'bigdipper', label: 'Big Dipper (Ursa Major)', description: 'The Great Bear is honored in many traditions. In many Native American stories, the bear is pursued by four hunters at its tail, and their chase follows its rotation around the North pole throughout the year.' },
    { value: 'littledipper', label: 'Little Dipper (Ursa Minor)', description: 'Many mythologies told stories of the Great and Little bear constellations. In the Norse mythology, Ursa Minor defended Ursa Major from an attack of the great wolf Fenrir.' },
    { value: 'cassiopeia', label: 'Cassiopeia', description: 'Queen Cassiopeia was said to have boasted that she and her daughter, Andromeda, were more beautiful than the nymphs of the sea. As punishment for her hubris, she was placed in the sky upside down.' },
  ]

  constructor() {
    this.selectionChanged();
  }

  selectionChanged() {
    let constellation = this.constellations.find(c => c.value == this.selectedConstellation);
    this.selectedDescription = constellation!.description;
  }
}
