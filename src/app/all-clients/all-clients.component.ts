import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-all-clients',
  templateUrl: './all-clients.component.html',
  styleUrls: ['./all-clients.component.css']
})
export class AllClientsComponent implements OnInit {
  loyalClients: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // Load clients directly using HttpClient
    this.loadClients();
  }

  private loadClients() {
    // Assuming your backend server is running on http://localhost:8084
    const apiUrl = 'http://localhost:8084/api/fidelite/all'; // Adjust the endpoint as needed

    this.http.get<any[]>(apiUrl).subscribe(
      (data: any[]) => {
        this.loyalClients = data;
      },
      (error: any) => {
        console.error('Error loading clients:', error);
      }
    );
  }
}
