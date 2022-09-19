import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { User } from '../models/user/user.model';
export interface AuthResponseData {
  id: number;
  username: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user = new BehaviorSubject<User>(null);

  constructor(
    public http: HttpClient,
    @Inject('API_BASE_URL') private baseUrl: string,
    public router: Router
  ) {}

  login(username: string, password: string) {
    return this.http.post<AuthResponseData>(
      `${this.baseUrl}/login`,
      {
        username: username,
        password: password,
      },
      {
        withCredentials: true,
      }
    );
  }

  signup(username: string, password: string) {
    return this.http.post<AuthResponseData>(
      `${this.baseUrl}/register`,
      {
        username: username,
        password: password,
      },
      {
        withCredentials: true,
      }
    );
  }

  logout() {
    return this.http
      .get<void>(`${this.baseUrl}/logout`, {
        withCredentials: true,
        responseType: 'text' as 'json',
      })
      .subscribe((response) => {
        localStorage.removeItem('user');
        this.user.next(null);
        this.router.navigate(['/prijava']);
      });
  }

  autoLogin() {
    const userInfo: {
      username: string;
      id: number;
    } = JSON.parse(localStorage.getItem('user'));
    if (!userInfo) {
      return;
    }

    const loadedUser = new User(userInfo.username, userInfo.id);

    if (loadedUser.username) {
      this.user.next(loadedUser);
    }
  }
}
