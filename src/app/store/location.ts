import { Subject } from 'rxjs';

/**
 * Location 存储地址数据结构
 * @interface Location
*/
export interface Location {
    /**id */
    id: number,
    /**名称 */
    name: string
}

export class LocationStore {
    public value: Subject<Location>;

    constructor() {
        this.value = new Subject();
    }

    // 更新
    private update() {
        let location = localStorage.getItem('location');
        this.value.next(JSON.parse(location))
    }

    // 移除
    remove() {
        localStorage.removeItem('location')
        this.update()
    }

    // 设置
    set(value: Location) {
        localStorage.setItem('location', JSON.stringify(value))
        this.update()
    }
}
