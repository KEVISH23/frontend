import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewParticularContentsComponent } from './view-particular-contents.component';

describe('ViewParticularContentsComponent', () => {
  let component: ViewParticularContentsComponent;
  let fixture: ComponentFixture<ViewParticularContentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewParticularContentsComponent]
    });
    fixture = TestBed.createComponent(ViewParticularContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
