import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpServicesService {

  private BASE_URL = environment.baseEndPointUrl;

  constructor(private http: HttpClient) { }

  post (url: string, data: any = {}): Observable<any> {
    return this.http.post(`${this.BASE_URL}${url}`, data);
  }

  get(url: string): Observable<any> {
    return this.http.get(`${this.BASE_URL}${url}`);
  }
}
