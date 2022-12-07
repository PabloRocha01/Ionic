import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Lista } from '../page/home/produto.model';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  readonly API = 'http://localhost:3000/produto/';

  HttpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  };  


  constructor(private http: HttpClient) { }

  getItem(produto: any){
    return this.http.post(produto, this.API);
  }

  postItem(formulario: any){
    return this.http.post(this.API, JSON.stringify(formulario), this.HttpOptions).subscribe();
  }

  deleteItem(id: number){
    return this.http.delete(this.API + id).subscribe();
  }
}

