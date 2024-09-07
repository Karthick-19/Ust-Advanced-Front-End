import { Injectable } from '@angular/core';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StoreserviceService {

  constructor(private http:HttpClient) { }

  getAllItems():Observable<any>{
    let url = 'http://localhost:9010/api/store/allItems';
    return this.http.get<any>(url)
  }

}
