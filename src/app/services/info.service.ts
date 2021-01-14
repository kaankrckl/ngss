import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class InfoService {
  url:string="https://jsonplaceholder.typicode.com/";
  cpiUrl:string = "https://www.statbureau.org/calculate-inflation-price-json?jsoncallback"
  constructor(private http: HttpClient) {
    
  }

  getTodo(id): Observable<any>{
    return this.http.get(this.url+"users/"+id+"/todos");
  }

  getTodos(): Observable<any>{
    return this.http.get(this.url+"todos");
  }

  getAllUsers(): Observable<any>{
    return this.http.get(this.url+"users");
  }

  getUser(id): Observable<any>{
    return this.http.get(this.url+"users/"+id);
  }
  getAllPosts(): Observable<any>{
    return this.http.get(this.url+"posts");
  }

  getAllAlbums(): Observable<any>{
    return this.http.get(this.url+"albums");
  }
}



