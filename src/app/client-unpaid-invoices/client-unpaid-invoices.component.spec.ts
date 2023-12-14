import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientUnpaidInvoicesComponent } from './client-unpaid-invoices.component';

describe('ClientUnpaidInvoicesComponent', () => {
  let component: ClientUnpaidInvoicesComponent;
  let fixture: ComponentFixture<ClientUnpaidInvoicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientUnpaidInvoicesComponent]
    });
    fixture = TestBed.createComponent(ClientUnpaidInvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
