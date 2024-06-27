import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILOGIN, IUSERS } from '../interfaces/IUSERS';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authApi = "http://localhost:3000/auth"
  constructor(
    private http:HttpClient
  ) { }

  register(data:IUSERS):Observable<any>{
    return this.http.post(this.authApi+'/register',data)
  }
  login(data:ILOGIN):Observable<any>{
    return this.http.post(this.authApi+'/login',data)
  }
  logout():Observable<any>{
    return this.http.post(this.authApi+'/logout',{})
  }
}
