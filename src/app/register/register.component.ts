import { Component, OnInit, NO_ERRORS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(private Auth: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  loginUser(event) {
    event.preventDefault()
    const errors = []
    const target = event.target;
    const username = target.querySelector("#username").value;
    const password = target.querySelector("#password").value;
    const confirmPassword = target.querySelector("#confirmPassword").value;

    if (password != confirmPassword) {
      errors.push("Password do not match")
    }

    if (errors.length > 0) {
      this.Auth.registerUser(username, password).subscribe(data => {
        console.log(data);
        if(data.success){
          this.router.navigate(["dashboard"])
        }
      })
    }
    this.Auth.getUserDetails(username, password).subscribe(data => {
      if (data.success) {
        this.router.navigate(["dashboard"])
        this.Auth.setLoggedIn(true)
      } else {
        window.alert(data.message);
      }
    })
  }
}
