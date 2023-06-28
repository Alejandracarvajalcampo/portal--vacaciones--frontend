import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VacationRequest } from './vacation-request';
import { Observable, catchError } from 'rxjs';
import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VacationRequestService {
  private baseUrl = "http://localhost:8090/vacation_request/vacation/";

  constructor(private httpClient : HttpClient){ }
s

registerVacationRequest(vacationRequest: VacationRequest): Observable<any> {
  return this.httpClient.post(`${this.baseUrl}create/`, vacationRequest)
    .pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 400 && error.error === 'Se deben solicitar al menos 6 días hábiles consecutivos.') {
          throw new Error('Error: Se deben solicitar al menos 6 días hábiles consecutivos.');
        } else {
          throw new Error('Error en la solicitud.');
        }
      })
    );
}
   getRequestList():Observable<VacationRequest[]>{
    return this.httpClient.get<VacationRequest[]>(`${this.baseUrl}list/`);
      }

      updateRequest(id:number,vacationRequest:VacationRequest):Observable<Object>{
       return this.httpClient.put(`${this.baseUrl}/update/${id}`,vacationRequest);
      }
      obtainRequest(id:number):Observable<VacationRequest>{
       return this.httpClient.get<VacationRequest>(`${this.baseUrl}/search/${id}`);
      }

      deleteRequest(id:number):Observable<object>{
      return this.httpClient.delete(`${this.baseUrl}delete/${id}`);
      }

   }
