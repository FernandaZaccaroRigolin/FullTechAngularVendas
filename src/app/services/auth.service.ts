import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '../interfaces/login-model';
import { Observable } from 'rxjs';
import { AuthResponse } from '../interfaces/auth-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  baseUrl: string = "http://localhost:8080/auth/login/"

  validate(user: LoginModel) : Observable<AuthResponse> {
    return this.http.post<AuthResponse>(this.baseUrl, user, {
      headers: new HttpHeaders({ "Content-Type": "application/json"})
    });
  }
}

