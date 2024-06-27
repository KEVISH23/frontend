import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentOfUserComponent } from './content-of-user.component';

describe('ContentOfUserComponent', () => {
  let component: ContentOfUserComponent;
  let fixture: ComponentFixture<ContentOfUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentOfUserComponent]
    });
    fixture = TestBed.createComponent(ContentOfUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
