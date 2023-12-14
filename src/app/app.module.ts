import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DataService } from './app.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoyalClientsComponent } from './loyal-clients/loyal-clients.component';
import { MostPurchasedProductsComponent } from './most-purchased-products/most-purchased-products.component';
import { AllClientsComponent } from './all-clients/all-clients.component';
import { CheckClientLoyaltyComponent } from './check-client-loyalty/check-client-loyalty.component';
import { FactureDetaillesComponent } from './facture-detailles/facture-detailles.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Routes } from '@angular/router';
import { ClientUnpaidInvoicesComponent } from './client-unpaid-invoices/client-unpaid-invoices.component';

const routes: Routes = [
  { path: 'clients', component: AllClientsComponent },
  { path: 'detailed-invoice/:clientId', component: FactureDetaillesComponent },
  { path: 'most-purchased-products/:clientId', component: MostPurchasedProductsComponent },
  { path: '', pathMatch: 'full', redirectTo: '/clients' }, // Redirect to '/clients' for the default route
];
@NgModule({
  declarations: [
    AppComponent,
    LoyalClientsComponent,
    MostPurchasedProductsComponent,
    AllClientsComponent,
    CheckClientLoyaltyComponent,
    FactureDetaillesComponent,
    ClientUnpaidInvoicesComponent
  ],
  imports: [
    
    BrowserModule,
    HttpClientModule,
    FormsModule, 

    AppRoutingModule
  ],
 
  providers: [DataService],  // Add your service here

  bootstrap: [AppComponent]
})
export class AppModule { }
