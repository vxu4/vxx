import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiwtcomhComponent } from './siwtcomh.component';

describe('SiwtcomhComponent', () => {
  let component: SiwtcomhComponent;
  let fixture: ComponentFixture<SiwtcomhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiwtcomhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiwtcomhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
