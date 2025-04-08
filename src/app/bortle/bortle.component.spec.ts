import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BortleComponent } from './bortle.component';

describe('BortleComponent', () => {
  let component: BortleComponent;
  let fixture: ComponentFixture<BortleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BortleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BortleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
