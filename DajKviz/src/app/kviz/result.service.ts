import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateResultDto } from './createResultDto.model';
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

  addResult(result: CreateResultDto): Observable<string>{
    return this.http.post<string>(`${this.baseUrl}/result`,result);
  }
}
