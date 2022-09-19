import { Component } from '@angular/core';
import { AuthService } from './login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DajKviz';


  constructor(private authService : AuthService) {

    
  }
  ngOnInit(){
    this.authService.autoLogin();
  }
}
