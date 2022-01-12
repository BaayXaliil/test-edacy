import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {

  constructor(private readonly httpClient: HttpClient) { }

  public saveProgram(credentials) {
    return this.httpClient.post(`${environment.API_URL}/platforms`, credentials);
  }
}
