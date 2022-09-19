import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthResponseData, AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoginMode = true;
  error: string = null;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    if(localStorage.getItem('user')){
      this.router.navigate(['/home']);
    }
  }

  onSwitchMode(){
    this.isLoginMode = !this.isLoginMode;
  }
  
  onSubmit(form: NgForm){
    if (!form.valid) {
      return;
    }

    const username = form.value.username;
    const password = form.value.password;
    let authObs: Observable<AuthResponseData>;

    if (this.isLoginMode) {
      authObs = this.authService.login(username, password);
    } else {
      authObs = this.authService.signup(username, password);
    }

    authObs.subscribe(resData => {
      console.log(resData);
      this.authService.user.next(resData);
      localStorage.setItem('user', JSON.stringify(resData));
      this.router.navigate(['/home']);
    }, 
    errorMessage => {
      this.error = errorMessage;
  });
    form.reset();
  }
  onHandleError() {
    this.error = null;
  }
}
