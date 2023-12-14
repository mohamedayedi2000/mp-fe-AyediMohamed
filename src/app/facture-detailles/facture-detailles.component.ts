// facture-detailles.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-facture-detailles',
  templateUrl: './facture-detailles.component.html',
  styleUrls: ['./facture-detailles.component.css']
})
export class FactureDetaillesComponent implements OnInit {
  clientId: number = 0;
  invoiceDetails: any[] = [];
  clients: any[] = []; // Add this line to define the clients array

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getInvoiceDetails();
    this.loadClientsWithInvoices();

  }
  private loadClientsWithInvoices() {
    this.http.get<any[]>('http://localhost:8084/api/fidelite/all').subscribe(
      (response: any[]) => {
        this.clients = response;
        console.log(response); // Check the response in the console
      },
      (error: any) => {
        console.error('Error loading clients with invoices:', error);
      }
    );
  }

  getInvoiceDetails() {
    // Assuming your backend server is running on http://localhost:8084
    const apiUrl = `http://localhost:8084/api/invoices/payment-details/${this.clientId}`;

    this.http.get<any[]>(apiUrl).subscribe(
      (response: any[]) => {
        this.invoiceDetails = response;
        console.log(response); // Check the response in the console
      },
      (error: any) => {
        console.error('Error loading invoice details:', error);
      }
    );
  }
}
