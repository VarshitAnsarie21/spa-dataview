import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit {
  selectedTable: string | undefined;
  selectedEnv: string | undefined;
  updateStatus: boolean = false;
  updateTableStatus: boolean = true;
  customTableName: String | undefined;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  typeTableSelected(event: any) {
    this.selectedTable = event.target.value;
    if (event.target.value == 'Other') {
      this.updateStatus = true;
      this.updateTableStatus = false;
    } else if (event.target.value != 'Other') {
      this.updateStatus = false;
      this.updateTableStatus = true;
    }
    console.log(this.selectedTable);
  }

  typeEnvSelected(event: any) {
    this.selectedEnv = event.target.value;
    console.log(this.selectedEnv);
  }

  fetchData(): any {
    //   console.log('inside registerComplaint () !');
    //   this._complaintsService
    //     .registerComplaint(
    //       this.data.customerEmail,
    //       this.selectedType,
    //       this.data.customerPincode,
    //       this.complaintQuery
    //     )
    //     .subscribe(() => {
    //       alert('Successfully Registered !');

    //     });
    //this._router.navigate(['/customer-dashboard'], { state: data });

    // this._customersService
    //   .validateCustomer(this.loginForm.value)
    //   .subscribe((data) => {
    //     if (data) {
    //       this.customerLoggedIn = this.loginForm.value['customerEmail'];
    //       this._customersService.setCustomerLoggedIn(
    //         this.customerLoggedIn.toString()
    //       );

    //       console.log(
    //         'Customer Exists : reached safely !',
    //         this.customerLoggedIn
    //       );
    //       sessionStorage.setItem('loggedUser', JSON.stringify(data));
    //       this._router.navigate(['/customer-dashboard'], { state: data });
    //     } else {
    //       console.log('Customer does not exists !');
    //       alert("Customer doesn't exist !")
    //     }
    //     this._customersService.validateCustomer(this.customer).subscribe(() => {
    //       alert('incorrect Email and Password !');
    //     });
    //   });

    if (
      this.selectedEnv != undefined &&
      this.selectedTable != undefined &&
      this.selectedTable != 'Other' &&
      this.customTableName == undefined
    ) {
      this.router.navigate(['/dataview']);
    } else if (
      this.selectedEnv != undefined &&
      this.customTableName != undefined &&
      this.selectedTable == 'Other'
    ) {
      this.router.navigate(['/dataview']);
    } else if (
      this.selectedEnv != undefined &&
      this.customTableName == undefined &&
      this.selectedTable == 'Other'
    ) {
      alert('Please enter the table name');
    } else {
      alert('Please select the value in each fields');
    }
  }

  enterTable(event: any) {
    this.customTableName = event.target.value;
    console.log(this.customTableName);
  }

  clearData(): any {
    window.location.reload();
  }
}