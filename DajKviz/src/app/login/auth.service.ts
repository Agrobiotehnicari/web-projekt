import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export interface AuthResponseData {
  id: number,
  username: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public http: HttpClient,
              @Inject('API_BASE_URL') private baseUrl: string) { }

  login(username: string, password: string){
    return this.http.post<AuthResponseData>(`${this.baseUrl}/login`,{
        username: username,
        password: password,
    },{
      withCredentials: true
    }
    )
    }
  

  signup(username: string, password: string){
    return this.http.post<AuthResponseData>(`${this.baseUrl}/register`,
    {
        username: username,
        password: password,
    },
    {
      withCredentials: true
    })
  }

  private handleError(errorRes: HttpErrorResponse){
    let errorMessage = 'An unknown error occurred.';

        if(!errorRes.error || !errorRes.error.error){
            return throwError(errorMessage);
        }
        switch(errorRes.error.error.message){
            case 'EMAIL_EXISTS':
                errorMessage = 'This email is taken.';
                break;
            case 'EMAIL_NOT_FOUND':
                errorMessage = 'Email not found.';
                break;
            case 'INVALID_PASSWORD':
                errorMessage = 'Wrong password.';
                break;
        }
        return throwError(errorMessage);
}
}
