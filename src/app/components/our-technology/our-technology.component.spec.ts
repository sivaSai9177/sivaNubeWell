import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurTechnologyComponent } from './our-technology.component';

describe('OurTechnologyComponent', () => {
  let component: OurTechnologyComponent;
  let fixture: ComponentFixture<OurTechnologyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurTechnologyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurTechnologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
