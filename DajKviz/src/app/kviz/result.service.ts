import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Result } from './result.model';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  constructor(private http: HttpClient,
    @Inject('API_BASE_URL') private baseUrl: string) { }

  getUserResult(kvizId: string): Observable<Result>{
    return this.http.get<Result>(`${this.baseUrl}/result/${kvizId}`);
  }
}
