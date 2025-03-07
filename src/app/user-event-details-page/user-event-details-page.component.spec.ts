import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEventDetailsPageComponent } from './user-event-details-page.component';

describe('UserEventDetailsPageComponent', () => {
  let component: UserEventDetailsPageComponent;
  let fixture: ComponentFixture<UserEventDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserEventDetailsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserEventDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
