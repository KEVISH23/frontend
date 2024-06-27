import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllContentsComponent } from './view-all-contents.component';

describe('ViewAllContentsComponent', () => {
  let component: ViewAllContentsComponent;
  let fixture: ComponentFixture<ViewAllContentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewAllContentsComponent]
    });
    fixture = TestBed.createComponent(ViewAllContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
