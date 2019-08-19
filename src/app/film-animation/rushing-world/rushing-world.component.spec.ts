import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RushingWorldComponent } from './rushing-world.component';

describe('RushingWorldComponent', () => {
  let component: RushingWorldComponent;
  let fixture: ComponentFixture<RushingWorldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RushingWorldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RushingWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
