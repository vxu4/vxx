import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrioComponent } from './trio.component';

describe('TrioComponent', () => {
  let component: TrioComponent;
  let fixture: ComponentFixture<TrioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
