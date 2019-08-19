import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrowingDanceComponent } from './growing-dance.component';

describe('GrowingDanceComponent', () => {
  let component: GrowingDanceComponent;
  let fixture: ComponentFixture<GrowingDanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrowingDanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrowingDanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
