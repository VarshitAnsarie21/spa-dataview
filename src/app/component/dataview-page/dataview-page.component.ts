import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customers } from 'src/app/models/customer';
import { Employee } from 'src/app/models/employee';
import { Producers } from 'src/app/models/producer';
import { Products } from 'src/app/models/product';
import { DatafetchServiceService } from 'src/app/services/datafetch-service.service';

@Component({
  selector: 'app-dataview-page',
  templateUrl: './dataview-page.component.html',
  styleUrls: ['./dataview-page.component.css'],
})
export class DataviewPageComponent implements OnInit {
  employees: Employee[] = [];
  customers: Customers[] = [];
  producers: Producers[] = [];
  products: Products[] = [];
  data: any;
  customerStatus: boolean = false;
  productStatus: boolean = false;
  producerStatus: boolean = false;
  employeeStatus: boolean = false;

  constructor() {
    this.data = JSON.parse(sessionStorage.getItem('details')!);
    console.log(this.data[0].cu);

    this.employees = this.data;
    this.customers = this.data;
    this.producers = this.data;
    this.products = this.data;

    if (this.employees != null) {
      this.employeeStatus = true;
      this.employees = this.data;
    } else if (this.customers != null) {
      this.customerStatus = true;
      this.customers = this.data;
    } else if (this.products != null) {
      this.productStatus = true;
    } else if (this.producers != null) {
      this.producerStatus = true;
    }
    console.log(this.employees);
  }

  ngOnInit(): void {}
}
