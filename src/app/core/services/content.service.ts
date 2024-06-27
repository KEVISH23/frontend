import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  private contentUrl:string = "http://localhost:3000/content"
  constructor(
    private http:HttpClient
  ) { }

  addContent(data:FormData):Observable<any>{
    return this.http.post(this.contentUrl+'/addContent',data)
  }

  viewUsersContent():Observable<any>{
    return this.http.get(this.contentUrl+'/getContentOfUser')
  }

  deleteContent(id:string):Observable<any>{
    return this.http.delete(this.contentUrl+`/deleteContentOfUser/${id}`)
  }

  getContentById(id:string):Observable<any>{
    return this.http.get(this.contentUrl+`/getContentById/${id}`)
  }

  updateContentById(id:string,data:FormData):Observable<any>{
    console.log(data)
    return this.http.put(this.contentUrl+`/updateContentById/${id}`,data)
  }

  getAllContents():Observable<any>{
    return this.http.get(this.contentUrl+'/getAllContents')
  }
}
