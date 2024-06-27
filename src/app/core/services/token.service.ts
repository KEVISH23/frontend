import { Injectable } from '@angular/core';
import { IUSERLOGGEDIN } from '../interfaces/token.interface';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }
  addToken(tokenData:IUSERLOGGEDIN){
    localStorage.setItem('token',tokenData.token)
    localStorage.setItem('role',tokenData.role)
    localStorage.setItem('fullName',tokenData.fullName)
  }

  getFullName():string|null{
    return localStorage.getItem('fullName')
  }
  getRole():string|null{
    return localStorage.getItem('role')
  }
  getToken():string|null{
    return localStorage.getItem('token')
  }
  setName(name:string){
    localStorage.setItem('fullName',name)
  }
  removeToken(){
    localStorage.removeItem('token')
    localStorage.removeItem('role')
    localStorage.removeItem('fullName')
  }
}
