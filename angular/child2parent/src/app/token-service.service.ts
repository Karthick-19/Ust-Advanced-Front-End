import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Details } from '../Details';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenServiceService {

  private token!:string
  constructor(private http:HttpClient) { }

  sendDetails(details:Details):Observable<Object>{
    let url = 'http://localhost:7031/authenticate';
    return this.http.post<{ token: string }>(url, details);
  }

  sendAuthRequest(token:string):Observable<Object>{
    const headers = new HttpHeaders().set('Authorization',"Bearer "+token)
    let url='http://localhost:7031/greet';
    return this.http.get(url,{headers, responseType:'text' as 'json'})
  }
  

}
