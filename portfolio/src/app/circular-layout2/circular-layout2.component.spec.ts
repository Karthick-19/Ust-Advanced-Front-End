import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircularLayout2Component } from './circular-layout2.component';

describe('CircularLayout2Component', () => {
  let component: CircularLayout2Component;
  let fixture: ComponentFixture<CircularLayout2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CircularLayout2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CircularLayout2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
