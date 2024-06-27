import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewYourContentComponent } from './view-your-content.component';

describe('ViewYourContentComponent', () => {
  let component: ViewYourContentComponent;
  let fixture: ComponentFixture<ViewYourContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewYourContentComponent]
    });
    fixture = TestBed.createComponent(ViewYourContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
