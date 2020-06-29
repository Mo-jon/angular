import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

/**
 * User 存储用户信息数据结构
 * @interface User
*/
export interface User {
    id: number,
    /**用户名 */
    name: string,
    /**登录凭证 */
    token: string,
}

@Injectable({
    providedIn: 'root'
})

/**
 * UserStore 存储用户信息操作类
 * @class UserStore
*/
export class UserStore {
    private subject: Subject<User>;

    constructor() {
        this.subject = new Subject();
    }

    /**获取 */
    get(callBack: any) {
        this.subject.subscribe(observer => {
            callBack(observer);
        });
        // 执行一次，获取初始值
        this.update();
    }

    /**更新 */
    private update() {
        let user = localStorage.getItem('user');
        this.subject.next(JSON.parse(user));
    }

    /**移除 */
    remove() {
        localStorage.removeItem('user')
        this.update()
    }

    /**设置 */
    set(value: User) {
        localStorage.setItem('user', JSON.stringify(value))
        this.update()
    }
}
