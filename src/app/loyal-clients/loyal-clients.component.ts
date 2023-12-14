// loyal-clients.component.ts
import { Component, OnInit } from '@angular/core';
import { DataService } from '../app.service';

@Component({
  selector: 'app-loyal-clients',
  templateUrl: './loyal-clients.component.html',
  styleUrls: ['./loyal-clients.component.css']
})
export class LoyalClientsComponent implements OnInit {
  loyalClients: any[]=[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getLoyalClients().subscribe(data => {
      this.loyalClients = data;
    });
  }
}
