import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentRenderingComponent } from './content-rendering.component';

describe('ContentRenderingComponent', () => {
  let component: ContentRenderingComponent;
  let fixture: ComponentFixture<ContentRenderingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentRenderingComponent]
    });
    fixture = TestBed.createComponent(ContentRenderingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
