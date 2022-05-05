import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthendicationComponent } from './authendication.component';

describe('AuthendicationComponent', () => {
  let component: AuthendicationComponent;
  let fixture: ComponentFixture<AuthendicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthendicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthendicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
