import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckClientLoyaltyComponent } from './check-client-loyalty.component';

describe('CheckClientLoyaltyComponent', () => {
  let component: CheckClientLoyaltyComponent;
  let fixture: ComponentFixture<CheckClientLoyaltyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckClientLoyaltyComponent]
    });
    fixture = TestBed.createComponent(CheckClientLoyaltyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
