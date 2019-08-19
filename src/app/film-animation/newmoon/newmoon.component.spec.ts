import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewmoonComponent } from './newmoon.component';

describe('NewmoonComponent', () => {
  let component: NewmoonComponent;
  let fixture: ComponentFixture<NewmoonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewmoonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewmoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
