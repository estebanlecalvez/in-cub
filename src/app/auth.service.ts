import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface myData{
  success:boolean,
  message:string
}

interface registerResponse{
  success:boolean
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedInStatus = false

  constructor(private http:HttpClient) { }

  setLoggedIn(value){
    this.loggedInStatus = value;
  }

  getLoggedIn(){
    return this.loggedInStatus
  }

  getUserDetails(username,password){
    return this.http.post<myData>("/api/auth.php",{
      username,
      password
    })
  }

  registerUser(username, password){
    return this.http.post<registerResponse>("/api/register",{
      username,
      password,
    })
  }
}
