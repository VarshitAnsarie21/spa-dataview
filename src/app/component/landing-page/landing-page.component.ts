import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatafetchServiceService } from 'src/app/services/datafetch-service.service';

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

  constructor(
    private router: Router,
    private datafetchService: DatafetchServiceService
  ) {}

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
    console.log('inside fetchData() !');
    if (
      this.selectedEnv != undefined &&
      this.selectedTable != undefined &&
      this.selectedTable != 'Other' &&
      this.customTableName == undefined
    ) {

      this.datafetchService.setSelectTable(this.selectedTable);

      if (this.selectedTable == 'Employee') {
        this.datafetchService.getAllEmployees().subscribe((data) => {
          console.log(data);

          sessionStorage.setItem('details', JSON.stringify(data));
          this.router.navigate(['/dataview'], { state: data });
        });
      } else if (this.selectedTable == 'Producer') {
        this.datafetchService.getAllProducers().subscribe((data) => {
          console.log(data);

          sessionStorage.setItem('details', JSON.stringify(data));
          this.router.navigate(['/dataview'], { state: data });
        });
      } else if (this.selectedTable == 'Product') {
        this.datafetchService.getAllProduct().subscribe((data) => {
          console.log(data);

          sessionStorage.setItem('details', JSON.stringify(data));
          this.router.navigate(['/dataview'], { state: data });
        });
      } else if (this.selectedTable == 'Customer') {
        this.datafetchService.getAllCustomer().subscribe((data) => {
          console.log(data);

          sessionStorage.setItem('details', JSON.stringify(data));
          this.router.navigate(['/dataview'], { state: data });
        });
      } else {
        alert('Table not found');
      }
    } else if (
      this.selectedEnv != undefined &&
      this.customTableName != undefined &&
      this.selectedTable == 'Other'
    ) {
      this.datafetchService.setSelectTable(this.customTableName);

      if (this.customTableName == 'Employee') {
        this.datafetchService.getAllEmployees().subscribe((data) => {
          console.log(data);
          
          sessionStorage.setItem('details', JSON.stringify(data));
          this.router.navigate(['/dataview'], { state: data });
        });
      } else if (this.customTableName == 'Producer') {
        this.datafetchService.getAllProducers().subscribe((data) => {
          console.log(data);
         
          this.router.navigate(['/dataview'], { state: data });
        });
      } else if (this.customTableName == 'Product') {
        this.datafetchService.getAllProduct().subscribe((data) => {
          console.log(data);
          
          sessionStorage.setItem('details', JSON.stringify(data));
          this.router.navigate(['/dataview'], { state: data });
        });
      } else if (this.customTableName == 'Customer') {
        this.datafetchService.getAllCustomer().subscribe((data) => {
          console.log(data);
          
          sessionStorage.setItem('details', JSON.stringify(data));
          this.router.navigate(['/dataview'], { state: data });
        });
      } else {
        alert('Table not found');
      }
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
