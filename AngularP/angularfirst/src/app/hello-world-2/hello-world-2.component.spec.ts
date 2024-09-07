import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloWorld2Component } from './hello-world-2.component';

describe('HelloWorld2Component', () => {
  let component: HelloWorld2Component;
  let fixture: ComponentFixture<HelloWorld2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelloWorld2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelloWorld2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
