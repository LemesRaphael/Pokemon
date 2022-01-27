import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
  retornaHeader() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:8888'
      }),
      observe: 'response' as 'response',
    };
    return httpOptions;
  }

  constructor(private httpService: HttpClient) { }

  get<T>(url: string): Observable<HttpResponse<T>> {
    return this.httpService.get<T>(url, this.retornaHeader());
  }
}