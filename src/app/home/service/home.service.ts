import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private readonly httpClient: HttpClient) { }

  public saveFiles(subdomain, credentials) {
    return this.httpClient.put(`${environment.API_URL}/platforms/${subdomain}/logo`, credentials);
  }
}
