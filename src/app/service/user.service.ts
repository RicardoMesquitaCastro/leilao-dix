import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

    apiUrl = 'https://bis365.com.br/bid365/api/v1';

  constructor(private http: HttpClient) {

  }
  autenticar(email: string, senha: string){

    return this.http.post(`${this.apiUrl}/auth/login`,{username:email,password:senha})
  }
}

