import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
  interface isLoggedIn{
    status:boolean
  }

  interface myData{
    success:boolean,
    Message:string
  }

 interface logoutStatus{
   success: boolean
 }
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getSomeData(){
    return this.http.get<myData>('/api/database.php')
  }

  isLoggedIn():Observable<isLoggedIn>{
    return this.http.get<isLoggedIn>('/api/isloggedin.php')
  }

  logout(){
    return this.http.get<logoutStatus>("/api/logout.php")
  }
}
