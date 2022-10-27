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

  tableHeader:any;

  selectedTable!: string;

  constructor(private datafetchService: DatafetchServiceService) {
    this.data = JSON.parse(sessionStorage.getItem('details')!);
    console.log(this.data[0]);

    this.selectedTable = datafetchService.getSelectTable();
    console.log(this.selectedTable);

    if (this.selectedTable == 'Employee') {
      this.employeeStatus = true;
      this.employees = this.data;
      this.tableHeader = Object.keys(this.employees[0]);
    } else if (this.selectedTable == 'Customer') {
      this.customerStatus = true;
      this.customers = this.data;
      this.tableHeader = Object.keys(this.customers[0]);
    } else if (this.selectedTable == 'Product') {
      this.productStatus = true;
      this.products = this.data;
      this.tableHeader = Object.keys(this.products[0]);
    } else if (this.selectedTable == 'Producer') {
      this.producerStatus = true;
      this.producers = this.data;
      this.tableHeader = Object.keys(this.producers[0]);
    }
    console.log(this.employees);
  }

  ngOnInit(): void {}
}
