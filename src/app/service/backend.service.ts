import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../Environment/environment';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  myAppUrl:any

  constructor(private http:HttpClient) {
    this.myAppUrl = environment.endpoint;
   }

  conection(): Observable<any>{
    return this.http.get(this.myAppUrl + "/estudiantes")
  }
}
