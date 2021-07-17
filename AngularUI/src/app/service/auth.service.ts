import { Injectable } from '@angular/core';
import { HttpClient, } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken:any;
  user:any;

  constructor(private http: HttpClient) { }

  registerUser(user:any){

    return this.http.post('http://localhost:8080/api/register',user);
  }

  loginUser(user:any){
    return this.http.post('http://localhost:8080/api/login',user);
  }
}
