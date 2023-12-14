// check-client-loyalty.component.ts
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-loyal-clients',
  templateUrl: './check-client-loyalty.component.html',
  styleUrls: ['./check-client-loyalty.component.css'] 
})
export class CheckClientLoyaltyComponent {
  clientId: number = 0; // Provide a default value or initialize it with the appropriate value
  loyaltyResult: any;
  clients: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadClients();
  }


  checkLoyalty() {
    // Your loyalty check logic here
  }
  private loadClients() {
    this.http.get<any[]>('http://localhost:8084/api/fidelite/most-purchased-products').subscribe(
      (response: any[]) => {
        this.clients = response;
      },
      (error: any) => {
        console.error('Error loading clients:', error);
      }
    );
  }
}
