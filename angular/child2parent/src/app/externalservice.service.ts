import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExternalserviceService {

  constructor(private http:HttpClient) { }

  fetchall():Observable<Object>{
    let url = 'https://jsonplaceholder.typicode.com/posts';
    return this.http.get(url);
  }

  // sendDetails(details:Details):Observable<Object>{
  //   let url = 'http://localhost:7031/authenticate';
  //   return this.http.post<{ token: string }>(url, details);
  // }
}
