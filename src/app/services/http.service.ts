import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http'

// 返回数据结构
// interface Resp {
//   code: number,
//   data: object,
//   err: string
// }

// 请求参数格式
interface Params {
  [param: string]: string | number
}

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private aipUrl: string = environment.apiUrl;
  // 设置请求头
  private headers = {
    'AccessToken': '99bab54352744dfaaa5f8ef6f161252d'
  };

  constructor(private http: HttpClient) {
  }

  /**
   * 发送 get 请求
   * @param url 请求地址
   * @param params 请求参数
   */
  get(url: string, params?: Params): Observable<object> {
    console.log('[发送 get 请求]')
    return this.http.get(
      `${this.aipUrl + url}`,
      {
        headers: this.headers,
        params: this.setParams(params)
      }
    )
  }

  /**
   * 发送 post 请求
   * @param url 请求地址
   * @param params 请求参数
   */
  post(url: string, body: any = null, params?: Params): Observable<object> {
    console.log('[发送 post 请求]')
    return this.http.post(
      `${this.aipUrl + url}`,
      body,
      {
        headers: this.headers,
        params: this.setParams(params)
      }
    )
  }

  // 设置参数格式
  private setParams(params: Params): { [params: string]: string } {
    let result = {};
    for (let p in params) {
      params[p] = params[p].toString()
    }
    result = params;
    return result;
  }
}
