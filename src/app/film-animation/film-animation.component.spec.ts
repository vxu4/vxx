import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmAnimationComponent } from './film-animation.component';

describe('FilmAnimationComponent', () => {
  let component: FilmAnimationComponent;
  let fixture: ComponentFixture<FilmAnimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmAnimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
