import { Component, OnInit } from '@angular/core';

// 获取当前环境变量
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // 环境变量
  env: string;
  count: number = 0;
  message: string;

  constructor() {
    this.env = JSON.stringify(environment)
  }

  ngOnInit(): void {
  }

  clickBtn(v: number) {
    this.message = '接收子组件事件' + this.count++;
  }
}
