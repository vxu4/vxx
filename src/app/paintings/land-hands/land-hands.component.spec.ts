import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandHandsComponent } from './land-hands.component';

describe('LandHandsComponent', () => {
  let component: LandHandsComponent;
  let fixture: ComponentFixture<LandHandsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandHandsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandHandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
