// most-purchased-products.component.ts
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-most-purchased-products',
  templateUrl: './most-purchased-products.component.html',
  styleUrls: ['./most-purchased-products.component.css']
})
export class MostPurchasedProductsComponent implements OnInit {
  mostPurchasedProducts: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadMostPurchasedProducts();
  }

  private loadMostPurchasedProducts() {
    this.http.get<any[]>('http://localhost:8084/api/fidelite/most-purchased-products').subscribe(
      (response: any[]) => {
        // Assuming the data structure is [id, name, designation, totalQuantity]
        // Adjust this part based on the actual structure of your response
        this.mostPurchasedProducts = response.map(item => ({
          id: item[0],
          name: item[1],
          designation: item[2],
          totalQuantity: item[3],
        }));

        console.log(this.mostPurchasedProducts); // Check the transformed data
      },
      (error: any) => {
        console.error('Error loading most purchased products:', error);
      }
    );
  }
}
