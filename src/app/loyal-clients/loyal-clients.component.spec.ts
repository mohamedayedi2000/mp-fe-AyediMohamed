import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoyalClientsComponent } from './loyal-clients.component';

describe('LoyalClientsComponent', () => {
  let component: LoyalClientsComponent;
  let fixture: ComponentFixture<LoyalClientsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoyalClientsComponent]
    });
    fixture = TestBed.createComponent(LoyalClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
