import { Component, OnInit } from '@angular/core';
import { Store } from 'src/app//store'
import { User } from 'src/app/store/user';
import { Location } from 'src/app/store/location';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form = {
    name: '',
    password: '',
    date: ''
  };

  public user: User = null;
  public location: Location = null;

  constructor(
    private store: Store
  ) { }

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
}
