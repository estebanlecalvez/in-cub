import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isConnected;
  constructor(private Auth:AuthService,
    private router:Router) { }

  ngOnInit() {
  }

  getIsConnected(){
    return this.isConnected;
  }
  loginUser(event){
    event.preventDefault()
    const target = event.target;
    const username = target.querySelector("#username").value;
    const password = target.querySelector("#password").value;

    this.Auth.getUserDetails(username, password).subscribe(data => {
      if(data.success){
        this.router.navigate(["dashboard"])
        this.Auth.setLoggedIn(true)
        this.isConnected = true;
      }else{
        this.isConnected = false;
        window.alert(data.message);
      }
    })
  }
}
