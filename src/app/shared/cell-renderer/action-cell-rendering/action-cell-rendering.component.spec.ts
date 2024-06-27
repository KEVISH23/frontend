import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionCellRenderingComponent } from './action-cell-rendering.component';

describe('ActionCellRenderingComponent', () => {
  let component: ActionCellRenderingComponent;
  let fixture: ComponentFixture<ActionCellRenderingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActionCellRenderingComponent]
    });
    fixture = TestBed.createComponent(ActionCellRenderingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
