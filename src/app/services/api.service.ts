import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpService) { }

  getList() {
    return this.http.get('Action/3/House');
  }

  submit() {
    return this.http.post('0000')
  }
}
