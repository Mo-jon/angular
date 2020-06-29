import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Injectable({
  providedIn: 'root'
})

/**
 * Api 请求接口方法
 * @class ApiService
 */
export class ApiService {
  constructor(private http: HttpService) {
  }

  getList() {
    return this.http.get('Action/3/House');
  }

  submit() {
    return this.http.post('0000')
  }
}
