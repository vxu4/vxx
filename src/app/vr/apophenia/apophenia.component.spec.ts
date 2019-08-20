import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApopheniaComponent } from './apophenia.component';

describe('ApopheniaComponent', () => {
  let component: ApopheniaComponent;
  let fixture: ComponentFixture<ApopheniaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApopheniaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApopheniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
