import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';
import {MatTooltipModule} from '@angular/material/tooltip';

export interface Bortle {
  class: number;
  name: string;
  example?: string;
  description?: string;
}

@Component({
  selector: 'app-Bortle',
  imports: [MatSliderModule, MatRadioModule, FormsModule, MatTooltipModule, CommonModule],
  templateUrl: './Bortle.component.html',
  styleUrl: './Bortle.component.scss'
})
export class BortleComponent {
  Bortles: Record<number, Bortle> = {
    0: { class: 0, name: 'Space', description: 'No atmospheric interference.', example: 'While not an official Bortle rating, this value indicates a view of the stars from space, without the interference of an atmosphere.' },
    1: { class: 1, name: 'Dark Sky', description: 'Excellent dark-sky site.', example: 'Many remote sites in Utah, especially remote mountain valleys in the Northwest corner of the state, earn a Bortle rating of 1 and present truly stunning views of the stars.' },
    2: { class: 2, name: 'Dark Site', description: 'Typical truly dark site.', example: 'Bryce Canyon National Park, a favorite of Utah astrophotographers, is largely classified with a Bortle rating of 2.' },
    3: { class: 3, name: 'Rural', description: 'Rural sky with minor light pollution.', example: 'The Bonneville Salt Flats, being so far from city lights, are given a Bortle rating of 3.' },
    4: { class: 4, name: 'Rural Transition', description: 'Transition between rural and suburban skies.', example: 'Flagstaff, Arizona with its dark skies regulation has a Bortle rating of 4 at its brightest. A more local example is the dark sky preserve at Jordanelle Reservoir near Park City.' },
    5: { class: 5, name: 'Suburban', description: 'Typical suburban sky.', example: 'Logan, Utah, home of Utah State University, earns a Bortle rating of 5 in its bright downtown.' },
    6: { class: 6, name: 'Bright Suburban', description: 'Bright suburban sky with constant glow near the horizon.', example: 'The city of St. George, Utah has a Bortle rating of 6 near I-15.' },
    7: { class: 7, name: 'Suburban Transition', description: 'Suburban sky near a big city, strong light in all directions.', example: 'Where the Salt Lake Valley is at its brightest, it has a Bortle rating of 7.' },
    8: { class: 8, name: 'City', description: 'Sky over a large city with constant glow all around.', example: 'The open terrain around  Phoenix, Arizona with the bright city lights earn a Bortle rating of 8.' },
    9: { class: 9, name: 'Inner City', description: 'Bright skies over a large inner city.', example: 'The neon lights and busy motion of Las Vegas, Nevada earn a rating of 9.'}
  }

  BortlesArray = Object.values(this.Bortles);

  selectedValue: number = 0;
  Bortle = this.Bortles[this.selectedValue]
  
  constructor() {
    this.selectedValue = 0;
  }

  @Output() BortleChanged: EventEmitter<number> = new EventEmitter<number>();

  selectedValueChanged() {
    this.BortleChanged.emit(this.selectedValue);
    this.Bortle = this.Bortles[this.selectedValue]
  }

  formatLabel: string = `Bortle class ${this.selectedValue}`;  
}
