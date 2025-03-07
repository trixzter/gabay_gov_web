import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserNavigationHeaderComponent } from './user-navigation-header.component';

describe('UserNavigationHeaderComponent', () => {
  let component: UserNavigationHeaderComponent;
  let fixture: ComponentFixture<UserNavigationHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserNavigationHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserNavigationHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
