import { Route, UrlSegment, UrlTree } from "@angular/router";
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

interface RouteCanLoad {
    canLoad(route: Route, segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
}

class UserToken { }
class Permissions {
    canLoadChildren(user: UserToken, id: string, segments: UrlSegment[]): boolean {
        return true;
    }
}

@Injectable()
export class CanLoad implements RouteCanLoad {
    constructor(private permissions: Permissions, private currentUser: UserToken) { }

    canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
        return this.permissions.canLoadChildren(this.currentUser, JSON.stringify(route), segments);
    }
}
