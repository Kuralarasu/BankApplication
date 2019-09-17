import { BankingService } from "./banking.service";
import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  constructor(private bankService: BankingService) {}
  title = "BankApp";
  selectedCity = "BANGALORE";

  // To set the city values in dropdown
  city: City[] = [
    { value: "BANGALORE", viewValue: "BANGALORE" },
    { value: "MUMBAI", viewValue: "MUMBAI" },
    { value: "KOLKATA", viewValue: "KOLKATA" },
    { value: "DELHI", viewValue: "DELHI" },
    { value: "CUTTACK", viewValue: "CUTTACK" }
  ];
  displayedColumns: string[] = [
    "action",
    "bank_name",
    "ifsc",
    "bank_id",
    "branch"
  ];

  favouriteList = {
    BANGALORE: [],
    MUMBAI: [],
    KOLKATA: [],
    DELHI: [],
    CUTTACK: []
  };
  dataSource = new MatTableDataSource<BankDetails>();

  @ViewChild(MatPaginator, { static: true })
  paginator: MatPaginator;

  ngOnInit() {
    this.getBankDetails(this.selectedCity);
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
  eventSelection(event) {
    this.getBankDetails(this.selectedCity);
  }

  getBankDetails(cityToGetDetails: string) {
    this.bankService.getBankDetails(cityToGetDetails).subscribe(res => {
      debugger;

      //Add a new property favourite to show the favouite rows
      Object.values(res).forEach(e => (e.favourite = false));
      this.dataWithFavourite(res);
    });
  }

  // Get the data with favourite selection changes
  dataWithFavourite(dataObject) {
    switch (this.selectedCity) {
      case "BANGALORE":
        this.favouriteList.BANGALORE.forEach(obj => {
          let index = Object.values(dataObject).findIndex(
            e => e["ifsc"] === obj
          );
          dataObject[index].favourite = true;
        });
        this.setBankDetails(dataObject);
        break;
      case "KOLKATA":
        this.favouriteList.KOLKATA.forEach(obj => {
          let index = Object.values(dataObject).findIndex(
            e => e["ifsc"] === obj
          );
          dataObject[index].favourite = true;
        });
        this.setBankDetails(dataObject);
        break;
      case "MUMBAI":
        this.favouriteList.MUMBAI.forEach(obj => {
          let index = Object.values(dataObject).findIndex(
            e => e["ifsc"] === obj
          );
          dataObject[index].favourite = true;
        });
        this.setBankDetails(dataObject);
        break;
      case "DELHI":
        this.favouriteList.DELHI.forEach(obj => {
          let index = Object.values(dataObject).findIndex(
            e => e["ifsc"] === obj
          );
          dataObject[index].favourite = true;
        });
        this.setBankDetails(dataObject);
        break;
      case "CUTTACK":
        this.favouriteList.CUTTACK.forEach(obj => {
          let index = Object.values(dataObject).findIndex(
            e => e["ifsc"] === obj
          );
          dataObject[index].favourite = true;
        });
        this.setBankDetails(dataObject);
        break;
      default:
        console.log("something went wrong");
        break;
    }
  }

  // Get the row data on click of favourite icon
  selectedRowData(rowData) {
    debugger;
    switch (this.selectedCity) {
      case "BANGALORE":
        if (this.favouriteList.BANGALORE.includes(rowData.ifsc)) {
          rowData.favourite = false;
          this.favouriteList.BANGALORE.splice(
            this.favouriteList.BANGALORE.indexOf(rowData.ifsc),
            1
          );
        } else {
          rowData.favourite = true;
          this.favouriteList.BANGALORE.push(rowData.ifsc);
        }
        break;
      case "KOLKATA":
        if (this.favouriteList.KOLKATA.includes(rowData.ifsc)) {
          rowData.favourite = false;
          this.favouriteList.KOLKATA.splice(
            this.favouriteList.KOLKATA.indexOf(rowData.ifsc),
            1
          );
        } else {
          rowData.favourite = true;
          this.favouriteList.KOLKATA.push(rowData.ifsc);
        }
        break;
      case "MUMBAI":
        if (this.favouriteList.MUMBAI.includes(rowData.ifsc)) {
          rowData.favourite = false;
          this.favouriteList.MUMBAI.splice(
            this.favouriteList.MUMBAI.indexOf(rowData.ifsc),
            1
          );
        } else {
          rowData.favourite = true;
          this.favouriteList.MUMBAI.push(rowData.ifsc);
        }
        break;
      case "DELHI":
        if (this.favouriteList.DELHI.includes(rowData.ifsc)) {
          rowData.favourite = false;
          this.favouriteList.DELHI.splice(
            this.favouriteList.DELHI.indexOf(rowData.ifsc),
            1
          );
        } else {
          rowData.favourite = true;
          this.favouriteList.DELHI.push(rowData.ifsc);
        }
        break;
      case "CUTTACK":
        if (this.favouriteList.CUTTACK.includes(rowData.ifsc)) {
          rowData.favourite = false;
          this.favouriteList.CUTTACK.splice(
            this.favouriteList.CUTTACK.indexOf(rowData.ifsc),
            1
          );
        } else {
          rowData.favourite = true;
          this.favouriteList.CUTTACK.push(rowData.ifsc);
        }
        break;
      default:
        console.log("Something went wrong");
        break;
    }
  }
}

export interface BankDetails {
  bank_name: string;
  ifsc: string;
  bank_id: number;
  branch: string;
}
export interface City {
  value: string;
  viewValue: string;
}
