import { Injectable } from '@angular/core';
import { UserStore } from './user';
import { LocationStore } from './location';

@Injectable({
    providedIn: 'root'
})

export class Store {
    public user = new UserStore();
    public location = new LocationStore();

    constructor() { }
};
