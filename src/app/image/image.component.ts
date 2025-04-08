import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BortleComponent } from '../bortle/bortle.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
    selector: 'app-image',
    imports: [FormsModule, NgOptimizedImage, BortleComponent, MatSlideToggleModule],
    templateUrl: './image.component.html',
    styleUrl: './image.component.scss'
})
export class ImageComponent {
  showLines: boolean = false;
  selectedValue: number = 0;

  @Input() constellation: string = 'orion';
  @Input() description: string = 'I did not work.';

  constructor(private readonly cdr: ChangeDetectorRef) {}
  bortleChanged(value: number) {
    this.selectedValue = value;
    this.cdr.detectChanges();
  };
}
