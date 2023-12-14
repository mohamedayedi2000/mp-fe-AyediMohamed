// app.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private baseUrl = 'http://localhost:8084/api';

  constructor(private http: HttpClient) { }

  getLoyalClients(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/fidelite/clientsf`);
  }

  getMostPurchasedProducts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/fidelite/most-purchased-products`);
  }

  getAllClients(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/fidelite/all`);
  }

  checkClientLoyalty(clientId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/fidelite/loyalty/${clientId}`);
  }

  getInvoicePaymentDetails(clientId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/invoices/payment-details/${clientId}`);
  }
}
