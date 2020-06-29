import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Store } from 'src/app/store';

// 返回数据结构
interface Resp {
  code: number,
  data: object,
  err: string
}

// 请求参数格式
interface Params {
  [param: string]: string | number
}

@Injectable({
  providedIn: 'root'
})

/**
 * http 请求发送
 * @class ApiService
 */
export class HttpService {
  private aipUrl: string = environment.apiUrl;
  // 设置请求头
  private headers = {};

  constructor(private httpClient: HttpClient, private store: Store) {
    // 订阅user, 获取token
    this.store.user.get(user => {
      this.headers = {
        'AccessToken': user.token
      };
    })
  }

  /**
   * 发送 get 请求
   * @param url 请求地址
   * @param params 请求参数
   */
  get(url: string, params?: Params): Observable<object> {
    console.log('[发送 get 请求]', this.headers)
    return this.httpClient.get(
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
    return this.httpClient.post(
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
