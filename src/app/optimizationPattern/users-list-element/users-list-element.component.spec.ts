import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersListElementComponent } from './users-list-element.component';

describe('UsersListElementComponent', () => {
  let component: UsersListElementComponent;
  let fixture: ComponentFixture<UsersListElementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsersListElementComponent]
    });
    fixture = TestBed.createComponent(UsersListElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
