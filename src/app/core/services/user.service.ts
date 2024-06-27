import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUSERS } from '../interfaces/IUSERS';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userApi:string = "http://localhost:3000/user"
  constructor(
    private http:HttpClient
  ) { }

  getUserById():Observable<any>{
      return this.http.get(this.userApi+"/getUserById")
  }
  updateUserById(data:IUSERS):Observable<any>{
    return this.http.put(this.userApi+'/updateUserById',data)
  }
  deleteUserById():Observable<any>{
    return this.http.delete(this.userApi+'/deleteUserById')
  }
}
