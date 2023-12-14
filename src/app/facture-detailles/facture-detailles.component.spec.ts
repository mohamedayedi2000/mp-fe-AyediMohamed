import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactureDetaillesComponent } from './facture-detailles.component';

describe('FactureDetaillesComponent', () => {
  let component: FactureDetaillesComponent;
  let fixture: ComponentFixture<FactureDetaillesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FactureDetaillesComponent]
    });
    fixture = TestBed.createComponent(FactureDetaillesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
