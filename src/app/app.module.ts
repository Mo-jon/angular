import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

// 公共组件
import { Components } from './components';

// 页面
import { Pages } from './pages';

// 路由守卫
import { CanLoad, Permissions, UserToken } from './routeLoad/CanLoad';
import { NavComponent } from './components/nav/nav.component'

@NgModule({
  declarations: [
    AppComponent,
    // 公共组件
    ...Components,
    // 页面
    ...Pages,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [CanLoad, Permissions, UserToken],
  bootstrap: [AppComponent]
})
export class AppModule { }
