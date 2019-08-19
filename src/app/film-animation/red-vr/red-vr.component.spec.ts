import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedVrComponent } from './red-vr.component';

describe('RedVrComponent', () => {
  let component: RedVrComponent;
  let fixture: ComponentFixture<RedVrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedVrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedVrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
