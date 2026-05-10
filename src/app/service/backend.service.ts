import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../Environment/environment';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  dataUpdate:any
  dataDelete:any
  myAppUrl:any

  constructor(private http:HttpClient) {
    this.myAppUrl = environment.endpoint;
   }

   //Esto permite hacer la conexion con el localhost:4041 con el /estudiantes lo que traerá un array de los estudiantes que se encuentran en la base de datos
   //usando el método get
  getCandidate(): Observable<any>{
    return this.http.get(this.myAppUrl + "/getCandidate")
  }

  createCandidate(data:any):Observable<any>{
    console.log(data)
    return this.http.post(this.myAppUrl + "/createCandidate",data)
  }

  updateCand(id:number, body:any ):Observable<any>{
    this.dataUpdate = {
      id:id,
      body:body
    }
    return this.http.put(this.myAppUrl + "/updateStudent",this.dataUpdate)
  }

  deleteCandidate(id:any): Observable<any>{
    return this.http.delete(this.myAppUrl + "/deleteCandidate", { body: { id: id } })
  }

  login(data:any): Observable<any>{
    return this.http.post(this.myAppUrl + "/login",data)
  }
}
