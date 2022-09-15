import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../login/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isAuthed = false;
  private userSub: Subscription;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(user => {
      console.log('changing user');
      this.isAuthed = !!user;
    })
    this.authService.autoLogin();
  }

  onLogout()
  {
    console.log("header tu sam")
    this.authService.logout();
  }

}
