import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostPurchasedProductsComponent } from './most-purchased-products.component';

describe('MostPurchasedProductsComponent', () => {
  let component: MostPurchasedProductsComponent;
  let fixture: ComponentFixture<MostPurchasedProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MostPurchasedProductsComponent]
    });
    fixture = TestBed.createComponent(MostPurchasedProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
