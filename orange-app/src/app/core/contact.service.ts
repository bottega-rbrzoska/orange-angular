import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

const apiUrl = environment.apiUrl;

@Injectable()
export class ContactService {

  constructor(private http: HttpClient) { }

  sendMessage(msg) {
    return this.http.post(`${apiUrl}/contact`, msg)
  }
}
