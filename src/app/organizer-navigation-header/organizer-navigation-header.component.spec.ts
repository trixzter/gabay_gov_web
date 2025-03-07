import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizerNavigationHeaderComponent } from './organizer-navigation-header.component';

describe('OrganizerNavigationHeaderComponent', () => {
  let component: OrganizerNavigationHeaderComponent;
  let fixture: ComponentFixture<OrganizerNavigationHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrganizerNavigationHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganizerNavigationHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
