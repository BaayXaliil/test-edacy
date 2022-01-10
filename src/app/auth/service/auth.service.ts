import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ISession } from '../interfaces/session.interface';

@Injectable()
export class AuthService {
  constructor(private readonly httpClient: HttpClient) { }

  public signup(credentials) {
    return this.httpClient.post(`${environment.API_URL}/signup`, credentials);
  }

  public signin(credentials) {
    return this.httpClient.post(`${environment.API_URL}/signin`, credentials);
  }

  registerToken(token): void {
    localStorage.setItem('token', token);
  }

  getToken(): string {
    return localStorage.getItem('token');
  }

  registerCurrentUser(user): void {
    localStorage.setItem('currentUser', JSON.stringify(user));
  }

  getCurrentUser(): ISession {
    return JSON.parse(localStorage.getItem('currentUser'));
  }

  registerCurrentSession(session) {
    localStorage.setItem('currentSession', JSON.stringify(session));
  }

  getCurrentSession() {
    return JSON.parse(localStorage.getItem('currentSession'));
  }


  clearStorage() {
    localStorage.clear();
  }

  logout() {
    this.clearStorage();
  }

  isConnected(): boolean {
    return Boolean(localStorage.getItem('token'));
  }
}
