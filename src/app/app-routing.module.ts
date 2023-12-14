// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoyalClientsComponent } from './loyal-clients/loyal-clients.component';
import { MostPurchasedProductsComponent } from './most-purchased-products/most-purchased-products.component';
import { AllClientsComponent } from './all-clients/all-clients.component';
import { CheckClientLoyaltyComponent } from './check-client-loyalty/check-client-loyalty.component';
import { FactureDetaillesComponent } from './facture-detailles/facture-detailles.component';
import { ClientUnpaidInvoicesComponent } from './client-unpaid-invoices/client-unpaid-invoices.component';
const routes: Routes = [
  { path: 'loyal-clients', component: LoyalClientsComponent },
  { path: 'most-purchased-products', component: MostPurchasedProductsComponent },
  { path: 'all-clients', component: AllClientsComponent },
  { path:'client-unpaid' ,component:ClientUnpaidInvoicesComponent },
  { path: 'check-client-loyalty', component: CheckClientLoyaltyComponent },
  { path: 'facture-detailles', component: FactureDetaillesComponent },
  // Add other routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
