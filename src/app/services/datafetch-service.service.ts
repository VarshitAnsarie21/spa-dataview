import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';
import { Customers } from '../models/customer';
import { Products } from '../models/product';
import { Producers } from '../models/producer';

@Injectable({
  providedIn: 'root'
})
export class DatafetchServiceService {

  tableName!: string;

  constructor(private _httpClient: HttpClient) { }

  private employeeUrl: string = 'http://localhost:8082/GetAllEmployee';

  private customerUrl: string = 'http://localhost:8082/GetAllCustomer';

  private productUrl: string = 'http://localhost:8082/GetAllProduct';

  private producerUrl: string = 'http://localhost:8082/GetAllProducers';

  getAllEmployees() {
    return this._httpClient.get<Employee[]>(this.employeeUrl);
  }

  getAllCustomer() {
    return this._httpClient.get<Customers[]>(this.customerUrl);
  }

  getAllProduct() {
    return this._httpClient.get<Products[]>(this.productUrl);
  }

  getAllProducers() {
    return this._httpClient.get<Producers[]>(this.producerUrl);
  }

  setSelectTable(tableName: any){
    this.tableName = tableName
  }

  getSelectTable(){
    return this.tableName
  }
}
