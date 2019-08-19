import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeluFindyComponent } from './belu-findy.component';

describe('BeluFindyComponent', () => {
  let component: BeluFindyComponent;
  let fixture: ComponentFixture<BeluFindyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeluFindyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeluFindyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
