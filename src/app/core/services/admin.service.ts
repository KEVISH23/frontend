import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUSERS } from '../interfaces/IUSERS';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  adminUrl: string = "http://localhost:3000/admin"
  constructor(
    private http: HttpClient
  ) { }

  getAllUsers(): Observable<any> {
    return this.http.get(this.adminUrl + '/getAllUser')
  }
  deleteUserById(id: string): Observable<any> {
    return this.http.delete(this.adminUrl + `/deleteUSerById/${id}`)
  }
  updateUserById(id: string, data: IUSERS): Observable<any> {
    return this.http.put(this.adminUrl + `/updateParticularUser/${id}`, data)
  }
  getParticularUser(id: string): Observable<any> {
    return this.http.get(this.adminUrl + `/getParticularUser/${id}`)
  }
  updateContent(id: string, data: FormData): Observable<any> {
    return this.http.put(this.adminUrl + `/updateContent/${id}`, data)
  }

  getContentOfParticularUser(id: string): Observable<any> {
    return this.http.get(this.adminUrl + `/getContentOfParticularUser/${id}`)
  }

  getCounts():Observable<any>{
    return this.http.get(this.adminUrl + `/getTotalCounts`)
  }
  getYearWiseDetails(params:any):Observable<any>{
    return this.http.get(this.adminUrl + `/getYearWiseContentCounts`,{params})
  }

}
