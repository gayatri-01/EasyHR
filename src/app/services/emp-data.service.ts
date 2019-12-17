import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Observable } from 'rxjs';
import { IEmployee } from '../employee';

@Injectable({
  providedIn: 'root'
})
export class EmpDataService {

  constructor(private http : HttpClient) { }

  getEmpData(u:string, p:string): Observable<IEmployee>{
    return this.http.post<IEmployee>("https://localhost:44355/api/login",{
      "username" : u,
      "password" : p
    });
  }
}
 