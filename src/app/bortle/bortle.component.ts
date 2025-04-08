import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';

export interface Bortle {
  class: number;
  name: string;
  description: string;
}

@Component({
  selector: 'app-bortle',
  imports: [MatSliderModule, MatRadioModule, FormsModule],
  templateUrl: './bortle.component.html',
  styleUrl: './bortle.component.scss'
})
export class BortleComponent {
  bortles: Record<number, Bortle> = {
    0: { class: 0, name: 'Space', description: '<p>No atmospheric interference.</p> <p>Example: While not an official Bortle rating, this value indicates a view of the stars from space, without the interference of an atmosphere.</p>' },
    1: { class: 1, name: 'Dark Sky', description: '<p>Excellent dark-sky site.</p> <p>Example: Many remote sites in Utah, especially remote mountain valleys in the Northwest corner of the state, earn a Bortle rating of 1 and present truly stunning views of the stars.</p>' },
    2: { class: 2, name: 'Dark Site', description: '<p>Typical truly dark site.</p> <p>Example: Bryce Canyon National Park, a favorite of Utah astrophotographers, is largely classified with a Bortle rating of 2.</p>' },
    3: { class: 3, name: 'Rural', description: '<p>Rural sky with minor light pollution.</p> <p>Example: The Bonneville Salt Flats, being so far from city lights, are given a Bortle rating of 3.</p>' },
    4: { class: 4, name: 'Rural Transition', description: '<p>Transition between rural and suburban skies.</p><p>Example: Flagstaff, Arizona with its dark skies regulation has a bortle rating of 4 at its brightest. A more local example is the dark sky preserve at Jordanelle Reservoir near Park City.</p>' },
    5: { class: 5, name: 'Suburban', description: '<p>Typical suburban sky.</p> <p>Example: Logan, Utah, home of Utah State University, earns a Bortle rating of 5 in its bright downtown.</p>' },
    6: { class: 6, name: 'Bright Suburban', description: '<p>Bright suburban sky with constant glow near the horizon.</p> <p>Example: The city of St. George, Utah has a Bortle rating of 6 near I-15.</p>' },
    7: { class: 7, name: 'Suburban Transition', description: '<p>Suburban sky near a big city, strong light in all directions.</p> <p>Example: Where the Salt Lake Valley is at its brightest, it has a Bortle rating of 7.</p>'},
    8: { class: 8, name: 'City', description: '<p>Sky over a large city with constant glow all around.</p> <p>Example: The open terrain around  Phoenix, Arizona with the bright city lights earn a Bortle rating of 8.</p>' },
    9: { class: 9, name: 'Inner City', description: '<p>Bright skies over a large inner city.</p> <p>Example: The neon lights and busy motion of Las Vegas, Nevada earn a rating of 9.</p>'}
  }

  bortlesArray = Object.values(this.bortles);

  selectedValue: number = 0;
  bortle = this.bortles[this.selectedValue]
  
  constructor() {
    this.selectedValue = 0;
  }

  @Output() bortleChanged: EventEmitter<number> = new EventEmitter<number>();

  selectedValueChanged() {
    this.bortleChanged.emit(this.selectedValue);
    this.bortle = this.bortles[this.selectedValue]
  }
}
