import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxBootstrapSliderModule } from 'ngx-bootstrap-slider';

@Component({
  selector: 'app-image',
  standalone: true,
  imports: [NgbModule, FormsModule, NgxBootstrapSliderModule, NgOptimizedImage],
  templateUrl: './image.component.html',
  styleUrl: './image.component.scss'
})
export class ImageComponent {
  bortles = [
    { class: 0, name: 'Space', description: 'No atmospheric interference.' },
    { class: 1, name: 'DarkSky', description: 'Excellent dark-sky site.' },
    { class: 2, name: 'DarkSite', description: 'Typical trule dark site.' },
    { class: 3, name: 'Rural', description: 'Rural sky with minor light pollution.' },
    { class: 4, name: 'RuralTransition', description: 'Transition between rural and suburban skies.' },
    { class: 5, name: 'Suburban', description: 'Typical suburban sky.' },
    { class: 6, name: 'BrightSuburban', description: 'Bright suburban sky with constant glow near the horizon.' },
    { class: 7, name: 'SuburbanTransition', description: 'Suburban sky near a big city, strong light in all directions.'},
    { class: 8, name: 'City', description: 'Sky over a large city with constant glow all around.' },
    { class: 9, name: 'InnerCity', description: 'Bright skies over a large inner city.'}
  ]

  selectedValue: number = 0;
  showLines: boolean = false;

  @Input() constellation: string = 'orion';
  @Input() description: string = 'I did not work.';
  
  constructor() {
    this.selectedValue = 0;
  }

  // todo prj - keydown isn't working? worth finding another way to make it work?
  slide(positive: boolean) {
    console.log(`keypress, ${positive ? 'right' : 'left'}`);
    if (positive && this.selectedValue < 9)
      this.selectedValue++;
    else if (!positive && this.selectedValue > 0)
      this.selectedValue--;
  }
}
