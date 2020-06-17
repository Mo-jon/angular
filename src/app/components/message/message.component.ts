import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  myContext = { $implicit: 'World', localSk: 'Svet' };

  // 传入属性
  @Input() text: string;
  // 输出事件
  @Output() clickButton = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  clickBtn(value: number) {
    console.log('我是子组件事件');
    this.clickButton.emit(value);
  }

}
