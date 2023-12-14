import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-unpaid-invoices',
  templateUrl: './client-unpaid-invoices.component.html',
  styleUrls: ['./client-unpaid-invoices.component.css']
})
export class ClientUnpaidInvoicesComponent implements OnInit {
  clientsWithUnpaidInvoices: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // Load clients directly using HttpClient
    this.loadClients();
  }

  private loadClients() {
    // Assuming your backend server is running on http://localhost:8084
    const apiUrl = 'http://localhost:8084/api/fidelite/unpaid-invoices'; // Adjust the endpoint as needed

    this.http.get<any[]>(apiUrl).subscribe(
      (data: any[]) => {
        this.clientsWithUnpaidInvoices = data;
      },
      (error: any) => {
        console.error('Error loading clients with unpaid invoices:', error);
      }
    );
  }
}
