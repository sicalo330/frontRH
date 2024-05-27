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

   //Esto permite hacer la conexion con el localhost:4041 con el /estudiantes lo que traerá un array de los estudiantes que se encuentran en la base de datos
   //usando el método get
  conection(): Observable<any>{
    return this.http.get(this.myAppUrl + "/estudiantes")
  }
}
