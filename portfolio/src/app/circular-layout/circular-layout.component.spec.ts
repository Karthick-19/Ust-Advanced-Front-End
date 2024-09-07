import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircularLayoutComponent } from './circular-layout.component';

describe('CircularLayoutComponent', () => {
  let component: CircularLayoutComponent;
  let fixture: ComponentFixture<CircularLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CircularLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CircularLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
