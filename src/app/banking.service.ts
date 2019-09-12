import { Injectable } from '@angular/core';
import {HttpParams, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BankingService {

  constructor(private http:HttpClient) { }

  // To get the bank details based on the city name
 getBankDetails(city) {

  let params=new HttpParams();
  params = params.append('city',city);

  const getBankDetails='https://vast-shore-74260.herokuapp.com/banks';

  return this.http.get(getBankDetails,{params:params});
 }

}
