import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// 公共组件
import { Components } from './components/component';

// 页面
import { HomeComponent } from './pages/home/home.component'
import { ListComponent } from './pages/list/list.component';
import { Page404Component } from './pages/page404/page404.component'

@NgModule({
  declarations: [
    AppComponent,
    // 公共组件
    ...Components,
    // 页面
    HomeComponent,
    ListComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
