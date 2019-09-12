import { BankingService } from './banking.service';
import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private bankService: BankingService) {}
  title = 'BankApp';
  selectedCity = 'BANGALORE';

  // To set the city values in dropdown
  city: City[] = [
    {value: 'BANGALORE', viewValue: 'BANGALORE'},
    {value: 'MUMBAI', viewValue: 'MUMBAI'},
    {value: 'CHENNAI', viewValue: 'CHENNAI'},
    {value: 'DELHI', viewValue: 'DELHI'},
    {value: 'PUNE', viewValue: 'PUNE'}
  ];
  displayedColumns: string[] = ['action','bank_name', 'ifsc', 'bank_id', 'branch'];
  dataSource = new MatTableDataSource<BankDetails>();

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.getBankDetails(this.selectedCity);
  }

  // To get the bank details based on the city selection
getBankDetails(city) {
  this.bankService.getBankDetails(city).subscribe(res=>this.setBankDetails(res));
}

// To set the bank details to the table
setBankDetails(res) {
  this.dataSource = new MatTableDataSource(res);
  this.dataSource.paginator = this.paginator;
}

// To filter the data
applyFilter(filterValue: string) {
  this.dataSource.filter = filterValue.trim().toLowerCase();
}

// To show the bank details based on the selection of city
eventSelection(event){
  this.getBankDetails(this.selectedCity);
 }
}

export interface BankDetails {
  bank_name:string;
  ifsc:string;
  bank_id:number;
  branch:string;
}
export interface City {
  value: string;
  viewValue: string;
}
