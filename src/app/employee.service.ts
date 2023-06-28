import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseUrl = "http://localhost:8090/vacation_request/employee";



  constructor(private httpClient : HttpClient){ }

   getEmployeeList():Observable<Employee[]>{
 return this.httpClient.get<Employee[]>(`${this.baseUrl}/list/`);
   }

   registerEmployee(employee:Employee): Observable<Object>{
   return this.httpClient.post(`${this.baseUrl}/create`, employee);
   }

   updateEmployee(id:number,employee:Employee):Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/update/${id}`,employee);
   }

   obtainEmployee(document:number):Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseUrl}/search/${document}`);
   }

   deleteEmployee(id:number):Observable<object>{
   return this.httpClient.delete(`${this.baseUrl}/delete/${id}`);
   }

}
