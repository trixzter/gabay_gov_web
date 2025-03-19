import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLoadingIndicatorsComponent } from './page-loading-indicators.component';

describe('PageLoadingIndicatorsComponent', () => {
  let component: PageLoadingIndicatorsComponent;
  let fixture: ComponentFixture<PageLoadingIndicatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageLoadingIndicatorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageLoadingIndicatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
