import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// API调用
import { ApiService } from 'src/app/services/api.service';

// 获取当前环境变量
import { environment } from 'src/environments/environment';
import { Store } from 'src/app//store'
import { User } from 'src/app/store/user';
import { Location } from 'src/app/store/location';


@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  // 环境变量
  env: string;
  count: number = 0;
  message: string;
  public form = {
    name: '',
    password: '',
    date: ''
  };

  public user: User = null;
  public location: Location = null;

  constructor(
    private router: Router,
    private api: ApiService,
    private store: Store,
  ) {
    this.env = JSON.stringify(environment)
  }

  ngOnInit(): void {
    // 订阅user
    this.store.user.get(data => {
      console.log('[user.data]', JSON.stringify(data));
      this.user = data;
    })

    // 订阅location
    this.store.location.get(data => {
      console.log('[location.data]', JSON.stringify(data));
      this.location = data;
    })
  }

  getList() {
    this.api.getList().subscribe(resp => {
      console.log('获取apiService数据：', resp)
    });
  }

  clickBtn(v: number) {
    this.message = '' + this.count++;
  }

  submit() {
    console.log('提交', this.form);

    let i = Math.random() * 100;

    // 更新user
    this.store.user.set({
      id: i,
      name: this.form.name,
      token: '123456---' + i,
    });

    // 更新location
    this.store.location.set({
      id: i,
      name: '123456---' + i
    })
  }

  clear() {
    // 清除user
    this.store.user.remove();

    // 清除location
    this.store.location.remove()
  }

  // 跳转首页
  goHome(){
    this.router.navigate(['/home', {}])
  }
}
