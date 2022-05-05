import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConirmationPopupComponent } from './conirmation-popup.component';

describe('ConirmationPopupComponent', () => {
  let component: ConirmationPopupComponent;
  let fixture: ComponentFixture<ConirmationPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConirmationPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConirmationPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
