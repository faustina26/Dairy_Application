import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/userdata';

@Injectable({
  providedIn: 'root'
})
export class LoginDataService {

  private logindata_url:string=" http://localhost:3003/user_Data";
  constructor(private http:HttpClient) { }

  getUserData():Observable<User[]>{
    return this.http.get<User[]>(this.logindata_url)
  }
  addUserData(data:any):Observable<any>{
    return this.http.post<any>(this.logindata_url,data);
  }
}
