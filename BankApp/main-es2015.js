(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br/>\n\n<section>\n  <div class=\"title\">\n    <h2>Bank Search Application</h2>\n  </div>\n\n\n  <mat-card>\n    <mat-card-title>\n\n      <!--Drop down to choose the city-->\n      <mat-form-field>\n        <mat-label>Choose a city</mat-label>\n        <mat-select [(ngModel)]=\"selectedCity\" (selectionChange)=\"eventSelection($event.value)\">\n          <mat-option *ngFor=\"let city of city\" [value]=\"city.value\">\n            {{city.viewValue}}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n    </mat-card-title>\n    <mat-card-subtitle>\n      List of Banks in <b>{{selectedCity}}</b>\n    </mat-card-subtitle>\n    <mat-card-content>\n      <br/>\n      <div class=\"mat-elevation-z8\">\n\n        <!--To show the filter-->\n        <mat-form-field class=\"mr-5 filterTextField\">\n          <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n        </mat-form-field>\n\n        <!--To show the data in the table-->\n        <table mat-table [dataSource]=\"dataSource\">\n          <!-- Action column -->\n          <ng-container matColumnDef=\"action\">\n            <th mat-header-cell *matHeaderCellDef> Actions </th>\n\n            <td mat-cell *matCellDef=\"let data\" style=\"cursor:pointer\">\n              <i [hidden]=\"data.favourite\" class=\"material-icons\">\n                favorite_border\n              </i>\n              <i [hidden]=\"!(data.favourite)\" class=\"material-icons\">\n                  favorite\n                </i> </td>\n          </ng-container>\n\n          <!-- Bank name Column -->\n          <ng-container matColumnDef=\"bank_name\">\n            <th mat-header-cell *matHeaderCellDef> BANK NAME </th>\n            <td mat-cell *matCellDef=\"let bankObj\"> {{bankObj.bank_name}} </td>\n          </ng-container>\n\n          <!-- IFSC code Column -->\n          <ng-container matColumnDef=\"ifsc\">\n            <th mat-header-cell *matHeaderCellDef> IFSC </th>\n            <td mat-cell *matCellDef=\"let bankObj\"> {{bankObj.ifsc}} </td>\n          </ng-container>\n\n          <!-- Bank Id  Column -->\n          <ng-container matColumnDef=\"bank_id\">\n            <th mat-header-cell *matHeaderCellDef> BANK ID </th>\n            <td mat-cell *matCellDef=\"let bankObj\"> {{bankObj.bank_id}} </td>\n          </ng-container>\n\n          <!-- Branch  Column -->\n          <ng-container matColumnDef=\"branch\">\n            <th mat-header-cell *matHeaderCellDef> BRANCH </th>\n            <td mat-cell *matCellDef=\"let bankObj\"> {{bankObj.branch}} </td>\n          </ng-container>\n\n          <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n          <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" (click)=\"selectedRowData(row)\"></tr>\n        </table>\n\n        <!--To show paginator-->\n        <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n      </div>\n    </mat-card-content>\n  </mat-card>\n</section>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n    width: 100%;\r\n  }\r\n\r\n  .mat-form-field {\r\n    font-size: 14px;\r\n    float: right;\r\n    width: 30%;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsWUFBWTtJQUNaLFVBQVU7RUFDWiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAubWF0LWZvcm0tZmllbGQge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _banking_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./banking.service */ "./src/app/banking.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");





let AppComponent = class AppComponent {
    constructor(bankService) {
        this.bankService = bankService;
        this.title = "BankApp";
        this.selectedCity = "BANGALORE";
        // To set the city values in dropdown
        this.city = [
            { value: "BANGALORE", viewValue: "BANGALORE" },
            { value: "MUMBAI", viewValue: "MUMBAI" },
            { value: "KOLKATA", viewValue: "KOLKATA" },
            { value: "DELHI", viewValue: "DELHI" },
            { value: "CUTTACK", viewValue: "CUTTACK" }
        ];
        this.displayedColumns = [
            "action",
            "bank_name",
            "ifsc",
            "bank_id",
            "branch"
        ];
        this.favouriteList = {
            BANGALORE: [],
            MUMBAI: [],
            KOLKATA: [],
            DELHI: [],
            CUTTACK: []
        };
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
    }
    ngOnInit() {
        this.getBankDetails(this.selectedCity);
    }
    // To set the bank details to the table
    setBankDetails(res) {
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](res);
        this.dataSource.paginator = this.paginator;
    }
    // To filter the data
    applyFilter(filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    // To show the bank details based on the selection of city
    eventSelection(event) {
        this.getBankDetails(this.selectedCity);
    }
    getBankDetails(cityToGetDetails) {
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
                    let index = Object.values(dataObject).findIndex(e => e["ifsc"] === obj);
                    dataObject[index].favourite = true;
                });
                this.setBankDetails(dataObject);
                break;
            case "KOLKATA":
                this.favouriteList.KOLKATA.forEach(obj => {
                    let index = Object.values(dataObject).findIndex(e => e["ifsc"] === obj);
                    dataObject[index].favourite = true;
                });
                this.setBankDetails(dataObject);
                break;
            case "MUMBAI":
                this.favouriteList.MUMBAI.forEach(obj => {
                    let index = Object.values(dataObject).findIndex(e => e["ifsc"] === obj);
                    dataObject[index].favourite = true;
                });
                this.setBankDetails(dataObject);
                break;
            case "DELHI":
                this.favouriteList.DELHI.forEach(obj => {
                    let index = Object.values(dataObject).findIndex(e => e["ifsc"] === obj);
                    dataObject[index].favourite = true;
                });
                this.setBankDetails(dataObject);
                break;
            case "CUTTACK":
                this.favouriteList.CUTTACK.forEach(obj => {
                    let index = Object.values(dataObject).findIndex(e => e["ifsc"] === obj);
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
                    this.favouriteList.BANGALORE.splice(this.favouriteList.BANGALORE.indexOf(rowData.ifsc), 1);
                }
                else {
                    rowData.favourite = true;
                    this.favouriteList.BANGALORE.push(rowData.ifsc);
                }
                break;
            case "KOLKATA":
                if (this.favouriteList.KOLKATA.includes(rowData.ifsc)) {
                    rowData.favourite = false;
                    this.favouriteList.KOLKATA.splice(this.favouriteList.KOLKATA.indexOf(rowData.ifsc), 1);
                }
                else {
                    rowData.favourite = true;
                    this.favouriteList.KOLKATA.push(rowData.ifsc);
                }
                break;
            case "MUMBAI":
                if (this.favouriteList.MUMBAI.includes(rowData.ifsc)) {
                    rowData.favourite = false;
                    this.favouriteList.MUMBAI.splice(this.favouriteList.MUMBAI.indexOf(rowData.ifsc), 1);
                }
                else {
                    rowData.favourite = true;
                    this.favouriteList.MUMBAI.push(rowData.ifsc);
                }
                break;
            case "DELHI":
                if (this.favouriteList.DELHI.includes(rowData.ifsc)) {
                    rowData.favourite = false;
                    this.favouriteList.DELHI.splice(this.favouriteList.DELHI.indexOf(rowData.ifsc), 1);
                }
                else {
                    rowData.favourite = true;
                    this.favouriteList.DELHI.push(rowData.ifsc);
                }
                break;
            case "CUTTACK":
                if (this.favouriteList.CUTTACK.includes(rowData.ifsc)) {
                    rowData.favourite = false;
                    this.favouriteList.CUTTACK.splice(this.favouriteList.CUTTACK.indexOf(rowData.ifsc), 1);
                }
                else {
                    rowData.favourite = true;
                    this.favouriteList.CUTTACK.push(rowData.ifsc);
                }
                break;
            default:
                console.log("Something went wrong");
                break;
        }
    }
};
AppComponent.ctorParameters = () => [
    { type: _banking_service__WEBPACK_IMPORTED_MODULE_1__["BankingService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true })
], AppComponent.prototype, "paginator", void 0);
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-root",
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _banking_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./banking.service */ "./src/app/banking.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _shared_app_material_app_material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/app-material/app-material.module */ "./src/app/shared/app-material/app-material.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");










let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _shared_app_material_app_material_module__WEBPACK_IMPORTED_MODULE_8__["AppMaterialModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"]
        ],
        providers: [_banking_service__WEBPACK_IMPORTED_MODULE_2__["BankingService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/banking.service.ts":
/*!************************************!*\
  !*** ./src/app/banking.service.ts ***!
  \************************************/
/*! exports provided: BankingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankingService", function() { return BankingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let BankingService = class BankingService {
    constructor(http) {
        this.http = http;
    }
    // To get the bank details based on the city name
    getBankDetails(city) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        params = params.append('city', city);
        const getBankDetails = 'https://vast-shore-74260.herokuapp.com/banks';
        return this.http.get(getBankDetails, { params: params });
    }
};
BankingService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
BankingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], BankingService);



/***/ }),

/***/ "./src/app/shared/app-material/app-material.module.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/app-material/app-material.module.ts ***!
  \************************************************************/
/*! exports provided: AppMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppMaterialModule", function() { return AppMaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");




let AppMaterialModule = class AppMaterialModule {
};
AppMaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRippleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSliderModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSlideToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSortModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatStepperModule"]
        ],
        exports: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRippleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSliderModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSlideToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSortModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatStepperModule"]
        ]
    })
], AppMaterialModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    bankingUrl: 'https://vast-shore-74260.herokuapp.com/banks'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\kural\Downloads\BankApplication-master\Test\BankApplication\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map