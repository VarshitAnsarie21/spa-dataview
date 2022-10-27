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

  // statusUpdateDetails = {};

  // private regComplaintUrl: string =
  //   'http://localhost:9091/complaints/addComplaint';

  // private getAllComplaintsByEmailUrl: string =
  //   'http://localhost:9091/complaints/getAllComplaintsByEmail';

  // private getAllComplaintsByEngineerEmailUrl: string =
  //   'http://localhost:9091/complaints/getByengineerEmail';

  // constructor(private _httpClient: HttpClient) {}

  // getAllComplaintsByEmail(customerEmail: string): Observable<Complaints[]> {
  //   console.log('in complaint.service.ts ==', customerEmail);
  //   return this._httpClient.get<Complaints[]>(
  //     `${this.getAllComplaintsByEmailUrl}/${customerEmail}`
  //   );
  // }

  // getAllComplaintsByEngineerEmail(
  //   engineerEmail: string
  // ): Observable<Complaints[]> {
  //   console.log('in complaint.service.ts ==', engineerEmail);
  //   return this._httpClient.get<Complaints[]>(
  //     `${this.getAllComplaintsByEngineerEmailUrl}/${engineerEmail}`
  //   );
  // }

  // registerComplaint(
  //   customerEmail: string,
  //   complaint_type: string,
  //   pincode: string,
  //   complaint: string
  // ) {
  //   this.statusUpdateDetails = {
  //     customerEmail: customerEmail,
  //     complaintType: complaint_type,
  //     pincode: pincode,
  //     complaint: complaint,
  //   };
  //   console.log(this.statusUpdateDetails);

  //   return this._httpClient.post(
  //     this.regComplaintUrl,
  //     this.statusUpdateDetails
  //   );
  // }
}
