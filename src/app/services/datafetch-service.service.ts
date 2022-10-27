import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatafetchServiceService {

  constructor() { }

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
